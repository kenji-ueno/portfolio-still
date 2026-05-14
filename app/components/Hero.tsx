/**
 * Hero(全幅写真型)
 *
 * モックv2 の <section class="hero"> を移植。
 *
 * 構造:
 * - 最外側 <section>: min-h-screen の全幅ボックス、コンテンツは下寄せ
 * - .hero-bg : 朝の斜光 + 部屋全体のウォームトーン + 床壁グラデを多層 radial/linear で近似
 * - .hero-bg::after 相当: テキスト可読性のための暗オーバーレイ(下方向と左方向)
 * - .hero-photo-meta : 右上に「写真の指示書」風キャプション
 *   - Day 18〜19 で Unsplash の本番写真に差し替えた時点で削除する
 *   - それまでは「これは仮の背景である」と採用担当に対して明示する役割
 * - .hero-content : ラベル / 大見出し STILL. / 日本語サブコピー / リード文
 * - .scroll-hint : 左下の "scroll" 表示
 *
 * 写真について:
 * - 現状は CSS グラデーションで「朝の斜光・木の床・ウォームトーン」を近似
 * - Day 18〜19 で Unsplash から本番写真を選定し、next/image で差し替える
 * - 差し替え時は this component の <div className="hero-bg" /> を <Image /> に置換する
 *   (周囲のレイアウトは触らない)
 */
export default function Hero() {
  return (
    <section
      id="hero"
      className="
        relative w-full min-h-screen overflow-hidden
        flex flex-col justify-end
        px-7 pb-20 md:px-16 md:pb-24
        text-white
      "
    >
      {/* 背景(仮:CSSグラデーションで朝の斜光と木の床を近似) */}
      <div
        role="img"
        aria-label="朝の自然光が差し込む無人のスタジオ内観"
        className="absolute inset-0 z-0"
        style={{
          background: [
            // 左上からの朝の斜光
            'radial-gradient(ellipse at 18% 22%, rgba(247, 235, 200, 0.35) 0%, transparent 38%)',
            // 部屋全体のウォームトーン
            'radial-gradient(ellipse at 65% 70%, rgba(50, 40, 30, 0.4) 0%, transparent 60%)',
            // 床と壁の境界
            'linear-gradient(180deg, #c8b89a 0%, #b8a888 25%, #8a7c64 55%, #4a4338 80%, #2a2620 100%)',
          ].join(', '),
        }}
      >
        {/* テキスト可読性のためのオーバーレイ(下方向に暗く + 左方向にも少し暗く) */}
        <div
          className="absolute inset-0"
          style={{
            background: [
              'linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.55) 100%)',
              'linear-gradient(90deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.15) 40%, rgba(0,0,0,0) 70%)',
            ].join(', '),
          }}
        />
      </div>

      {/* 写真ガイド(右上、Day 18〜19 で本番写真差し替え時に削除) */}
      <div
        className="
          absolute z-[2]
          top-[100px] right-7 md:top-[120px] md:right-16
          text-right
          font-serif-en italic
          text-[11px] tracking-[0.15em]
          leading-[1.8]
          text-white/50
        "
      >
        <span className="block">— hero photo guide</span>
        <span className="block mt-1.5">subject: empty studio interior</span>
        <span className="block">light: morning, from upper-left</span>
        <span className="block">tone: warm low-saturation</span>
        <span className="block">aspect: 16:9, text-safe area on left</span>
      </div>

      {/* メインコンテンツ */}
      <div className="relative z-[2] w-full max-w-[1200px] mx-auto">
        {/* ラベル(横線 + テキスト) */}
        <div className="mb-8 flex items-center gap-4 text-white">
          <span className="w-8 h-px bg-white/70" />
          <span
            className="
              font-serif-en italic font-normal
              text-[11px] tracking-[0.2em] uppercase
              text-white/85
            "
          >
            Personal Training Studio · 2024 —
          </span>
        </div>

        {/* 大見出し */}
        <h1
          className="font-serif-en font-light text-white mb-6"
          style={{
            fontSize: 'clamp(72px, 16vw, 180px)',
            letterSpacing: '0.02em',
            lineHeight: 0.9,
          }}
        >
          Still
          <span className="text-brass">.</span>
        </h1>

        {/* 日本語サブコピー */}
        <p
          className="font-serif-jp font-light text-white/95 mb-10 max-w-[600px]"
          style={{
            fontSize: 'clamp(18px, 3.6vw, 28px)',
            letterSpacing: '0.18em',
            lineHeight: 1.8,
          }}
        >
          静けさのなかで、
          <br />
          続ける。
        </p>

        {/* リード文 */}
        <p
          className="font-sans-jp font-light text-white/[0.78] max-w-[480px]"
          style={{
            fontSize: '14px',
            lineHeight: 2.1,
            letterSpacing: '0.05em',
          }}
        >
          煽らない。急がせない。
          <br />
          自分の身体と向き合うための、週に一度の時間。
          <br />
          自由が丘の住宅街、看板のないスタジオから。
        </p>
      </div>

      {/* scroll ヒント */}
      <div
        className="
          absolute z-[2] bottom-8 left-7 md:left-16
          flex items-center gap-3
          font-serif-en italic
          text-[11px] tracking-[0.3em] uppercase
          text-white/70
        "
      >
        scroll
        <span
          className="w-[60px] h-px"
          style={{
            background: 'linear-gradient(to right, rgba(255,255,255,0.7), transparent)',
          }}
        />
      </div>
    </section>
  );
}
