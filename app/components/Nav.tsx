'use client';

import { useEffect, useState } from 'react';

/**
 * グローバルナビ
 *
 * モックv2 の <nav id="nav"> を移植。
 * - 初期状態は背景透明、ロゴ・メニュー文字は白(Hero 写真上に重ねる前提)
 * - 60px スクロールしたら .scrolled 相当の状態に切り替わり、
 *   背景に半透明オフホワイト + backdrop-blur、文字色はチャコールへ
 * - PC のみメニュー表示(768px〜)。それ以下はロゴ + Reservation のみ
 *
 * 実装メモ:
 * - スクロール状態は useState + window.scrollY で判定
 * - 受動リスナー({ passive: true })でスクロールパフォーマンスを確保
 * - 初回マウント時にも一度判定する(リロード後の途中位置に対応)
 */
export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // 初回判定
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-[100]
        flex justify-between items-center
        px-7 py-[18px]
        transition-[background-color,backdrop-filter,border-color] duration-[400ms] ease-in-out
        border-b-[0.5px]
        ${
          scrolled
            ? 'bg-base/85 backdrop-blur-xl border-line'
            : 'bg-transparent border-transparent'
        }
      `}
    >
      {/* ロゴ */}
      <div
        className={`
          font-serif-en font-normal text-[20px] tracking-[0.3em]
          transition-colors duration-[400ms] ease-in-out
          ${scrolled ? 'text-ink' : 'text-white'}
        `}
      >
        STILL
      </div>

      {/* メニュー(PC のみ) */}
      <div
        className={`
          hidden md:flex gap-8
          text-[12px] tracking-[0.2em] uppercase
          transition-colors duration-[400ms] ease-in-out
          ${scrolled ? 'text-ink-2' : 'text-white/85'}
        `}
      >
        <a href="#concept" className="hover:text-brass transition-colors duration-300">
          Concept
        </a>
        <a href="#program" className="hover:text-brass transition-colors duration-300">
          Program
        </a>
        <a href="#trainers" className="hover:text-brass transition-colors duration-300">
          Trainers
        </a>
        <a href="#studio" className="hover:text-brass transition-colors duration-300">
          Studio
        </a>
        <a href="#voice" className="hover:text-brass transition-colors duration-300">
          Voice
        </a>
      </div>

      {/* 予約 CTA(右端・常時表示) */}
      <a
        href="#contact"
        className={`
          font-serif-en italic
          text-[13px] tracking-[0.15em]
          border-b pb-[2px]
          transition-colors duration-[400ms] ease-in-out
          ${
            scrolled
              ? 'text-brass border-brass'
              : 'text-white border-white'
          }
        `}
      >
        Reservation
      </a>
    </nav>
  );
}
