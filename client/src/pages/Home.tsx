import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { Users, Trophy, Dumbbell, Clock, ChevronLeft, ChevronRight, Star, ArrowRight, MessageCircle } from "lucide-react";
import { SiInstagram, SiLine } from "react-icons/si";
import SEO from "@/components/SEO";
import { gymConfig, seoConfig } from "@/lib/gymConfig";
import deepFitLogo from "@assets/image0_1773383672040.png";
import kidsClassImg from "@assets/image0_1773932269993.jpeg";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

function GlowButton({ children, className = "", href }: { children: React.ReactNode; className?: string; href?: string }) {
  const content = (
    <div className="relative group inline-block">
      <div className="absolute inset-0 bg-[#F2AC55]/30 blur-md rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 pointer-events-none" />
      <span className={`relative z-10 inline-flex items-center justify-center bg-[#F2AC55] text-white font-medium px-7 py-3 rounded-full transition-all duration-200 ${className}`}>
        {children}
      </span>
    </div>
  );

  if (href) {
    return <Link href={href} className="inline-block">{content}</Link>;
  }
  return content;
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      style={{ scaleX, transformOrigin: "0%" }}
      className="fixed top-0 left-0 right-0 h-1 bg-[#F2AC55] z-[60]"
    />
  );
}

function CountUp({ target, suffix = "", duration = 2000 }: { target: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, target, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const testimonials = [
  {
    name: "田中 美咲",
    meta: "会員歴2年・30代女性",
    text: "運動が全く続かなかった私でも、ここではもう2年通えています。インストラクターの方々が丁寧で、同じレベルの仲間もいて、毎回楽しく参加できています。体も引き締まって、自信がつきました！",
  },
  {
    name: "山本 健太",
    meta: "会員歴3年・40代男性",
    text: "仕事のストレス解消に始めたキックボクシングですが、今ではすっかりハマってしまいました。プロのインストラクターから本格的な技術が学べて、体力も格段にアップ。40代でも全然問題なく続けられます。",
  },
  {
    name: "佐藤 由美",
    meta: "会員歴1年・60代女性",
    text: "60代でキックボクシングを始めることに不安がありましたが、スタッフの方が「いつでも見学できますよ」と声をかけてくださって。今では毎週通うのが楽しみです。体力が戻ってきた感じがします。",
  },
];

const reasons = [
  { icon: Users, title: "初心者歓迎", text: "経験ゼロでも安心してスタート。丁寧な指導で基礎からしっかり学べます。" },
  { icon: Trophy, title: "幅広い年齢層", text: "20代〜70代まで在籍。あなたのペースで、あなたの目標に合わせて続けられます。" },
  { icon: Dumbbell, title: "充実の設備", text: "プロ仕様のリング、サンドバッグ12本、グローブ無料貸出。設備は十分に揃っています。" },
  { icon: Clock, title: "続けられる仕組み", text: "朝・夕・週末と豊富なクラス時間帯。ライフスタイルに合わせて無理なく継続できます。" },
];

const classes = [
  { title: "フィットネス", subtitle: "Fitness Class", level: "全レベル", description: "有酸素運動とキックボクシングを組み合わせた人気クラス。楽しみながら体を動かし、ダイエットや体力アップを目指せます。", image: "/images/class-kickboxing.png", animation: "left" },
  { title: "パーソナルトレーニング", subtitle: "Personal Training", level: "全レベル", description: "マンツーマンで目標に合わせた特別プログラムを提供。効率よく、確実に結果を出したい方に最適です。", image: "/images/class-personal.png", animation: "up" },
  { title: "キッズクラス", subtitle: "Kids Class", level: "お子様向け", description: "楽しみながら体を動かすキッズ向けプログラム。礼儀やスポーツの基礎も学べます。保護者も安心の環境です。", image: kidsClassImg, animation: "right" },
];

const heroPlaylist = [
  "/video/clip1.mp4",
  "/video/clip2.mp4",
  "/video/clip3.mp4",
  "/video/clip4.mp4",
  "/video/clip5.mp4",
  "/video/clip6.mp4",
  "/video/clip7.mp4",
  "/video/clip8.mp4",
  "/video/clip9.mp4",
  "/video/clip_last.mp4",
];

const openingOfferItems = [
  { id: 1, label: "特典1", title: "体験料", originalPrice: "通常 1,500円", benefit: "無料" },
  { id: 2, label: "特典2", title: "入会金", originalPrice: "通常 10,000円", benefit: "無料" },
  { id: 3, label: "特典3", title: "初月会費", originalPrice: "通常 11,000円〜13,200円", benefit: "無料" },
];

function OpeningOfferSection() {
  return (
    <section className="opening-offer-section">
      <div className="opening-offer-section__inner">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="opening-offer-section__header"
        >
          <p className="opening-offer-section__eyebrow">LIMITED OFFER</p>
          <h2 className="opening-offer-section__title">
            今なら始めやすい
            <span>3大特典</span>
          </h2>
          <p className="opening-offer-section__lead">
            4月末までの期間限定。<br />
            無料体験から気軽に始められます。
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="opening-offer-section__cards"
        >
          {openingOfferItems.map((item) => (
            <motion.div key={item.id} variants={scaleIn} className="opening-offer-card">
              <div className="opening-offer-card__label">{item.label}</div>
              <div className="opening-offer-card__body">
                <div>
                  <p className="opening-offer-card__title">{item.title}</p>
                  <p className="opening-offer-card__original">{item.originalPrice}</p>
                </div>
                <p className="opening-offer-card__benefit">{item.benefit}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="opening-offer-section__value"
        >
          <p className="opening-offer-section__value-label">初期費用</p>
          <p className="opening-offer-section__value-main">0円でスタート可能</p>
          <p className="opening-offer-section__value-sub">まずは無料体験だけでもOKです。</p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="opening-offer-section__assurance"
        >
          <span>無理な勧誘なし</span>
          <span>初心者歓迎</span>
          <span>見学だけでもOK</span>
          <span>LINEで簡単予約</span>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="opening-offer-section__cta"
        >
          <a
            href={gymConfig.sns.line}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="button-home-offer-line"
            className="opening-offer-section__cta-primary"
          >
            <SiLine className="w-5 h-5" />
            LINEで無料体験を予約する
          </a>
          <Link
            href="/contact"
            data-testid="button-home-offer-contact"
            className="opening-offer-section__cta-secondary"
          >
            見学・体験を相談する
          </Link>
          <p className="opening-offer-section__cta-note">1分で予約可能 / 返信は営業時間内に順次対応</p>
        </motion.div>
      </div>
    </section>
  );
}

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const videoRefA = useRef<HTMLVideoElement>(null);
  const videoRefB = useRef<HTMLVideoElement>(null);
  const [heroPattern, setHeroPattern] = useState<"balanced" | "bold" | "typographic">("balanced");

  // activeSlot: which slot ('a' or 'b') is currently visible
  const [activeSlot, setActiveSlot] = useState<'a' | 'b'>('a');
  // slotSrc: current src for each slot
  const [slotSrc, setSlotSrc] = useState({
    a: heroPlaylist[0],
    b: heroPlaylist[1],
  });
  // currentIndexRef tracks which playlist index is currently active
  const currentIndexRef = useRef(0);

  // Start the first video on mount
  useEffect(() => {
    const refA = videoRefA.current;
    if (refA) refA.play().catch(() => {});
  }, []);

  // Control playback when activeSlot changes (skip initial mount — handled above)
  const isFirstRender = useRef(true);
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    const refA = videoRefA.current;
    const refB = videoRefB.current;
    if (!refA || !refB) return;

    if (activeSlot === 'a') {
      refA.play().catch(() => {});
    } else {
      refB.play().catch(() => {});
    }
  }, [activeSlot]);

  const crossfadeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (crossfadeTimerRef.current !== null) clearTimeout(crossfadeTimerRef.current);
    };
  }, []);

  const CROSSFADE_DURATION_MS = 900;

  const advanceHeroVideo = () => {
    const nextIndex = (currentIndexRef.current + 1) % heroPlaylist.length;
    const afterNextIndex = (nextIndex + 1) % heroPlaylist.length;
    currentIndexRef.current = nextIndex;

    setActiveSlot((prev) => {
      const outgoing = prev;
      const incoming = prev === 'a' ? 'b' : 'a';

      // After crossfade completes, reset outgoing slot and preload next-next video
      if (crossfadeTimerRef.current !== null) clearTimeout(crossfadeTimerRef.current);
      crossfadeTimerRef.current = setTimeout(() => {
        const outRef = outgoing === 'a' ? videoRefA.current : videoRefB.current;
        if (outRef) {
          outRef.pause();
          outRef.currentTime = 0;
        }
        setSlotSrc((s) => ({ ...s, [outgoing]: heroPlaylist[afterNextIndex] }));
      }, CROSSFADE_DURATION_MS);

      return incoming;
    });
  };

  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [testimonialDirection, setTestimonialDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setTestimonialDirection(1);
      setTestimonialIndex((i) => (i + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prevTestimonial = () => {
    setTestimonialDirection(-1);
    setTestimonialIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  };

  const nextTestimonial = () => {
    setTestimonialDirection(1);
    setTestimonialIndex((i) => (i + 1) % testimonials.length);
  };

  const tagline = gymConfig.tagline.split("");

  return (
    <>
      <SEO title={seoConfig.pages.home.title} description={seoConfig.pages.home.description} path="/" />
      <ScrollProgress />
      {/* Hero Section — hero-v2 */}
      <section className="hero-v2" ref={heroRef}>
        <div className="hero-pattern-switcher">
          <button
            type="button"
            className={`hero-pattern-switcher__item ${heroPattern === "balanced" ? "is-active" : ""}`}
            onClick={() => setHeroPattern("balanced")}
            data-testid="button-hero-pattern-balanced"
          >
            案1
          </button>
          <button
            type="button"
            className={`hero-pattern-switcher__item ${heroPattern === "bold" ? "is-active" : ""}`}
            onClick={() => setHeroPattern("bold")}
            data-testid="button-hero-pattern-bold"
          >
            案2
          </button>
          <button
            type="button"
            className={`hero-pattern-switcher__item ${heroPattern === "typographic" ? "is-active" : ""}`}
            onClick={() => setHeroPattern("typographic")}
            data-testid="button-hero-pattern-typographic"
          >
            案3
          </button>
        </div>

        {/* z-0: Background video — dual-slot crossfade */}
        <div className="hero-v2__media">
          <video
            ref={videoRefA}
            muted
            playsInline
            preload="auto"
            onEnded={activeSlot === 'a' ? advanceHeroVideo : undefined}
            data-testid="video-hero-bg-a"
            className="hero-v2__video"
            style={{ opacity: activeSlot === 'a' ? 1 : 0 }}
            src={slotSrc.a}
          />
          <video
            ref={videoRefB}
            muted
            playsInline
            preload="auto"
            onEnded={activeSlot === 'b' ? advanceHeroVideo : undefined}
            data-testid="video-hero-bg-b"
            className="hero-v2__video"
            style={{ opacity: activeSlot === 'b' ? 1 : 0 }}
            src={slotSrc.b}
          />
        </div>

        {/* z-1: Overlay — light, left-only */}
        <div className="hero-v2__overlay" />

        {/* z-2: Background watermark */}
        <motion.div
          className="hero-v2__bigcopy"
          aria-hidden="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1.2 }}
        >
          <span>FEEL THE</span>
          <span>CHANGE.</span>
        </motion.div>

        {/* z-3: Content */}
        <div className={`hero-v2__inner hero-v2__inner--${heroPattern}`}>

          <motion.div
            className="hero-v2__brand"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="hero-v2__logo text-[16px]">DEEP.FIT｜JR尼崎駅徒歩10分のサーキット×キックボクシングジム</span>
          </motion.div>

          <motion.div
            className="hero-v2__labels"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="hero-v2__label">はじめてでも安心</span>
            <span className="hero-v2__label">女性も通いやすい</span>
            <span className="hero-v2__label">まずは気楽に体験から</span>
          </motion.div>

          <motion.div
            className="hero-v2__strip hero-v2__strip--main"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 data-testid="text-hero-headline">
              <span>楽しいから続く。</span>
              <span>続くから変わる。</span>
            </h1>
          </motion.div>

          <div className="hero-variants">
            <motion.div
              className="hero-v2__subcopy"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.42, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              data-testid="text-hero-subheadline"
            >
              <p>
                運動が久しぶりの方も多く通っています。<br />
                体を動かして、気分まで軽くなる時間を。
              </p>
            </motion.div>
          </div>

          <motion.div
            className="hero-v2__cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.52, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <a
              href={gymConfig.sns.line}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-v2__cta-btn"
              data-testid="button-line-cta"
            >
              <SiLine style={{ width: 18, height: 18, flexShrink: 0 }} />
              LINEで無料体験予約
            </a>
            <p className="hero-v2__cta-note ml-[0px] mr-[0px]">見学・体験だけでも大歓迎です！</p>
          </motion.div>

        </div>
      </section>
      <OpeningOfferSection />
      {/* Why Choose Us - リフィナス風リデザイン */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* POINT 01 header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <span className="inline-block bg-[#4D5058] text-[#F2AC55] text-xs font-bold px-5 py-2 rounded-full mb-4 tracking-[0.2em] uppercase">POINT 01</span>
            <p className="text-[#F2AC55] text-xs tracking-[0.3em] uppercase mb-2">Why Choose Us</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#4D5058]">選ばれる理由</h2>
            <p className="text-[#4D5058]/50 text-base mt-3">なぜ今、キックボクシングが人気なのか？</p>
          </motion.div>

          {/* 2x2 popularity reasons */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 gap-4 mb-16"
          >
            {[
              { emoji: "💥", title: "ストレス発散になる！", sub: "仕事や日常のモヤモヤをスッキリ解消" },
              { emoji: "😄", title: "楽しく続けられる！", sub: "飽きずに夢中になれる唯一の有酸素運動" },
              { emoji: "🔥", title: "全身の脂肪燃焼！", sub: "ダイエットに最適な全身有酸素運動" },
              { emoji: "👥", title: "男女・年齢問わず！", sub: "初心者から上級者まで一緒に楽しめる" },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={scaleIn}
                className="rounded-2xl bg-[#F2F3F5] p-5 sm:p-6 text-center border border-gray-100"
              >
                <div className="text-3xl sm:text-4xl mb-3">{item.emoji}</div>
                <p className="font-bold text-[#4D5058] text-sm sm:text-base leading-snug mb-1">{item.title}</p>
                <p className="text-[#4D5058]/50 text-xs leading-relaxed hidden sm:block">{item.sub}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* POINT 02 - こんな方におすすめ + DEEP.FIT特徴 */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {/* Left: recommended for */}
            <div>
              <span className="inline-block bg-[#4D5058] text-[#F2AC55] text-xs font-bold px-5 py-2 rounded-full mb-5 tracking-[0.2em] uppercase">POINT 02</span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#4D5058] mb-6">
                こんな方に<br />おすすめです！
              </h3>
              <div className="space-y-3">
                {[
                  "スポーツジムだと続かない！",
                  "ストレスを発散したい！",
                  "運動不足から何かチャレンジしたい！",
                  "ダイエットしながら筋肉もつけたい！",
                  "楽しくトレーニングを続けたい！",
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-3 bg-[#F2F3F5] rounded-xl px-4 py-3.5">
                    <div className="w-6 h-6 rounded-full bg-[#F2AC55] text-white text-xs font-bold flex items-center justify-center shrink-0">{i + 1}</div>
                    <p className="font-bold text-[#4D5058] text-sm sm:text-base">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Calorie chart + female ratio */}
            <div className="bg-[#F2F3F5] rounded-3xl p-6 sm:p-8 border border-gray-100">
              <p className="text-[#E8954A] text-xs tracking-[0.2em] uppercase mb-2 font-bold">Why Kickboxing?</p>
              <h3 className="text-lg sm:text-xl font-bold text-[#4D5058] mb-1 leading-snug">
                圧倒的な<span className="text-[#E8954A]">消費カロリー</span>だから<br />
                効率的にカラダが変わる
              </h3>
              <p className="text-[#4D5058]/55 text-xs mb-5 leading-relaxed">
                キックボクシングの消費カロリーはヨガの<span className="text-[#E74C3C] font-bold">6倍！</span><br />
                全身を大きく動かすから、短時間で高い脂肪燃焼効果。
              </p>

              {/* Bar chart */}
              <div className="flex items-end justify-around gap-1.5 mb-3" style={{ height: "140px" }}>
                {[
                  { label: "キックボクシング", kcal: 387, pct: 100, highlight: true },
                  { label: "ボクシング", kcal: 187, pct: 48, highlight: false },
                  { label: "フィットネスクラブ", kcal: 187, pct: 48, highlight: false },
                  { label: "ウォーキング", kcal: 119, pct: 31, highlight: false },
                  { label: "ヨガ", kcal: 65, pct: 17, highlight: false },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center justify-end gap-1 flex-1 h-full">
                    <span className={`font-bold leading-none ${item.highlight ? "text-[#E74C3C] text-sm" : "text-[10px] text-[#4D5058]/70"}`}>
                      {item.kcal}<span className="text-[9px] font-normal">kcal</span>
                    </span>
                    <div
                      className="w-full rounded-t-lg"
                      style={{
                        height: `${item.pct}%`,
                        background: item.highlight
                          ? "linear-gradient(to top, #E74C3C 0%, #F77F00 50%, #F2AC55 100%)"
                          : "linear-gradient(to top, #F2AC55 0%, #F5CFA0 100%)",
                      }}
                    />
                    <span className="text-[8px] text-[#4D5058]/60 text-center leading-tight w-full" style={{ fontSize: "8px" }}>
                      {item.label.replace("キックボクシング", "キック\nボクシング").replace("フィットネスクラブ", "フィット\nネスクラブ").split("\n").map((l, j) => <span key={j} className="block">{l}</span>)}
                    </span>
                  </div>
                ))}
              </div>

              {/* 7割女性 */}
              <div className="mt-4 bg-white rounded-2xl px-4 py-3.5 flex items-center gap-3 border border-gray-100 shadow-sm">
                <span className="text-3xl shrink-0">👩</span>
                <div>
                  <p className="font-bold text-[#4D5058] text-sm">
                    会員様の<span className="text-[#E8954A] font-heading font-bold text-xl mx-1">約7割</span>が女性
                  </p>
                  <p className="text-[#4D5058]/50 text-xs mt-0.5">主婦や仕事帰りのOLさんに大人気です</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>
      {/* About Section */}
      <section
        className="py-20 lg:py-28 relative bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('/images/gym-about.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#4D5058]/80 via-[#4D5058]/70 to-[#4D5058]/90" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}
            >
              <p className="text-[#F2AC55] text-xs tracking-[0.3em] uppercase mb-3">About Us</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5">ジムについて</h2>
              <p className="text-white/90 font-medium text-xl italic mb-5">「動いて、整えて、気づけば続く。」</p>
              <p className="text-white/70 leading-relaxed mb-6 text-sm sm:text-base">
                DEEP.FITは2026年オープン予定のサーキット×キックボクシングジムです。「運動が苦手でも、楽しく続けられる場所を作りたい」という想いから生まれました。初心者の方や女性の方でも、安心して通える環境づくりを大切にしています。
              </p>
              <GlowButton href="/about">
                ジムについて詳しく <ArrowRight className="w-4 h-4 inline ml-1" />
              </GlowButton>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInRight}
              className="flex flex-col gap-5"
            >
              {/* Main announcement card */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-7 text-center shadow-xl">
                <div className="inline-flex items-center gap-2 bg-[#F2AC55] text-white text-xs font-bold px-4 py-1.5 rounded-full mb-4 tracking-widest uppercase shadow">
                  <Star className="w-3.5 h-3.5 fill-white text-white" />
                  エリア初
                </div>
                <p className="text-white/60 text-xs tracking-[0.2em] uppercase mb-2">New Open 2026</p>
                <h3 className="text-white font-bold text-xl sm:text-2xl leading-snug mb-1">
                  JR尼崎エリア初<br />
                  <span className="text-[#F2AC55]">キックボクシング</span><br />
                  フィットネスジム誕生
                </h3>
              </div>

              {/* Access badges */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white/10 border border-white/15 rounded-2xl px-4 py-4 flex flex-col items-center gap-2 text-center">
                  <span className="text-2xl">🚉</span>
                  <div>
                    <p className="text-white font-bold text-sm">JR尼崎駅</p>
                    <p className="text-[#F2AC55] font-heading font-bold text-xl">徒歩10分</p>
                  </div>
                </div>
                <div className="bg-white/10 border border-white/15 rounded-2xl px-4 py-4 flex flex-col items-center gap-2 text-center">
                  <span className="text-2xl">🅿️</span>
                  <div>
                    <p className="text-white font-bold text-sm">近隣駐車場</p>
                    <p className="text-[#F2AC55] font-heading font-bold text-xl">あり</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Classes */}
      <section className="py-20 lg:py-28 bg-[#F2F3F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-14"
          >
            <p className="text-[#F2AC55] text-xs tracking-[0.3em] uppercase mb-3">Our Classes</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#4D5058]">クラス紹介</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {classes.map((cls, i) => {
              const variant = cls.animation === "left" ? fadeInLeft : cls.animation === "right" ? fadeInRight : fadeInUp;
              return (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={variant}
                  className="group relative rounded-2xl overflow-hidden aspect-[4/5] cursor-pointer"
                >
                  <div className="absolute inset-0 overflow-hidden">
                    <img
                      src={cls.image}
                      alt={cls.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#4D5058]/40 to-[#4D5058]/90" />
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] tracking-wider font-medium bg-[#F2AC55] text-white px-3 py-1 rounded-full uppercase">
                      {cls.level}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white/50 text-xs tracking-[0.2em] uppercase mb-1">{cls.subtitle}</p>
                    <h3 className="text-white font-bold text-xl mb-2">{cls.title}</h3>
                    <p className="text-white/70 text-xs leading-relaxed">{cls.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mt-10"
          >
            <Link
              href="/schedule"
              data-testid="button-view-all-classes"
              className="inline-flex items-center gap-2 bg-[#4D5058] text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-[#53565E] transition-colors duration-200"
            >
              全てのクラスを見る <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
      {/* Testimonials */}
      <section
        className="py-20 lg:py-28 relative bg-cover bg-center"
        style={{ backgroundImage: "url('/images/gym-interior.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#4D5058]/85 to-[#4D5058]/95" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <p className="text-[#F2AC55] text-xs tracking-[0.3em] uppercase mb-3">Testimonials</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">お客様の声</h2>
          </motion.div>

          <div className="relative min-h-[200px] sm:min-h-[180px]">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={testimonialIndex}
                initial={{ opacity: 0, x: testimonialDirection * 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: testimonialDirection * -60 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
              >
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#F2AC55] text-[#F2AC55]" />
                  ))}
                </div>
                <p className="text-white/85 text-center leading-relaxed text-sm sm:text-base mb-6">
                  「{testimonials[testimonialIndex].text}」
                </p>
                <div className="text-center">
                  <p className="text-white font-semibold">{testimonials[testimonialIndex].name}</p>
                  <p className="text-white/50 text-xs mt-0.5">{testimonials[testimonialIndex].meta}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              aria-label="前へ"
              data-testid="button-testimonial-prev"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#F2AC55] transition-colors duration-200"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setTestimonialDirection(i > testimonialIndex ? 1 : -1); setTestimonialIndex(i); }}
                  aria-label={`スライド ${i + 1}`}
                  data-testid={`button-testimonial-dot-${i}`}
                  className={`rounded-full transition-all duration-300 ${i === testimonialIndex ? "w-6 h-2 bg-[#F2AC55]" : "w-2 h-2 bg-white/30"}`}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              aria-label="次へ"
              data-testid="button-testimonial-next"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#F2AC55] transition-colors duration-200"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
      {/* Instagram Section */}
      <section className="py-20 lg:py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="relative rounded-2xl overflow-hidden"
            style={{ background: "linear-gradient(135deg, #833ab4 0%, #fd1d1d 40%, #fcb045 100%)" }}
          >
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 p-8 sm:p-12">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shrink-0">
                  <SiInstagram className="w-9 h-9 sm:w-11 sm:h-11 text-white" />
                </div>
                <div>
                  <p className="text-white/70 text-xs tracking-[0.2em] uppercase mb-1">Follow Us</p>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                    練習風景・日常を<br className="sm:hidden" />公開中！！
                  </h2>
                  <p className="text-white/80 text-sm mt-1">@deep.amagasaki</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-4 text-center">
                <div className="bg-white/10 border border-white/20 rounded-xl px-6 py-4 backdrop-blur-sm">
                  <p className="text-white font-bold text-sm mb-1">
                    🎉 インスタフォローで体験<span className="text-yellow-300 text-xl font-heading ml-1">無料</span>
                  </p>
                  <p className="text-white/70 text-xs">フォロー後、DMまたはLINEでご連絡ください</p>
                </div>
                <a
                  href={gymConfig.sns.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="button-instagram"
                  className="inline-flex items-center gap-2 bg-white text-[#fd1d1d] font-bold px-7 py-3 rounded-full text-sm transition-all duration-200 hover:scale-105"
                >
                  <SiInstagram className="w-4 h-4" />
                  Instagramを見る
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* LINE Section */}
      <section className="py-20 lg:py-28 overflow-hidden" style={{ background: "linear-gradient(135deg, #06C755 0%, #04A344 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-md">
                  <SiLine className="w-6 h-6 text-[#06C755]" />
                </div>
                <p className="text-white/70 text-xs tracking-[0.3em] uppercase">Official LINE</p>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
                LINEで簡単に<br />お申し込み可能
              </h2>
              <p className="text-white/80 mb-6 leading-relaxed text-sm sm:text-base">
                友だち追加後、「体験希望」とお送りいただければこちらからご案内いたします。
              </p>
              <div className="bg-white/10 border border-white/20 rounded-xl p-5 mb-6 space-y-2 text-sm text-white/90">
                <p className="font-bold text-white mb-3">📅 体験可能時間</p>
                <div className="grid grid-cols-1 gap-2 text-xs">
                  <div className="bg-white/10 rounded-lg px-3 py-2">
                    <p className="font-semibold text-white">月〜日曜日（木曜定休）</p>
                    <p className="text-white/70">10:00 〜 22:00</p>
                  </div>
                </div>
              </div>
              <a
                href={gymConfig.sns.line}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="button-line-add"
                className="inline-flex items-center gap-2 bg-white text-[#06C755] font-bold px-7 py-3 rounded-full text-sm transition-all duration-200 hover:scale-105 shadow-lg"
              >
                <SiLine className="w-5 h-5" />
                友だち追加する
              </a>
            </motion.div>

            {/* Right: LINE Chat Mockup */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInRight}
              className="flex justify-center"
            >
              <div className="w-full max-w-sm">
                {/* Phone frame */}
                <div className="bg-[#BEE3CD] rounded-3xl p-4 shadow-2xl">
                  {/* Chat header */}
                  <div className="bg-[#06C755] rounded-2xl px-4 py-3 flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center shrink-0 overflow-hidden">
                      <img src={deepFitLogo} alt="DEEP.FIT" className="w-full h-full object-contain p-0.5" />
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm">DEEP.FIT</p>
                      <p className="text-white/70 text-xs">公式アカウント</p>
                    </div>
                  </div>
                  {/* Messages */}
                  <div className="space-y-3 px-1 max-h-80 overflow-hidden">
                    {/* User sends */}
                    <div className="flex justify-end">
                      <div className="bg-[#06C755] text-white text-xs px-3 py-2 rounded-2xl rounded-tr-sm max-w-[70%]">
                        体験希望
                      </div>
                    </div>
                    {/* Auto-reply message */}
                    <div className="flex items-start gap-2">
                      <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center shrink-0 mt-1 shadow-sm overflow-hidden">
                        <img src={deepFitLogo} alt="DEEP.FIT" className="w-full h-full object-contain p-0.5" />
                      </div>
                      <div className="bg-white text-[#333] text-xs px-3 py-2.5 rounded-2xl rounded-tl-sm max-w-[85%] leading-relaxed shadow-sm space-y-1">
                        <p>○○さん</p>
                        <p>はじめまして！DEEP.FITです。</p>
                        <p>友だち追加ありがとうございます😉</p>
                        <p className="mt-1">当ジムはダイエット・運動不足などが目的のジムです！😆</p>
                        <p>20歳から70歳までの会員様が在籍しております</p>
                        <p>女性の方でも気軽にご利用できます😇</p>
                        <p className="mt-1">運動経験なくてもスタートできるようになってますので、お気軽にご連絡ください😆</p>
                      </div>
                    </div>
                    {/* Second message */}
                    <div className="flex items-start gap-2">
                      <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center shrink-0 mt-1 shadow-sm overflow-hidden">
                        <img src={deepFitLogo} alt="DEEP.FIT" className="w-full h-full object-contain p-0.5" />
                      </div>
                      <div className="bg-white text-[#333] text-xs px-3 py-2.5 rounded-2xl rounded-tl-sm max-w-[85%] leading-relaxed shadow-sm space-y-1">
                        <p className="font-semibold text-[#06C755]">📸 インスタフォローで体験無料！</p>
                        <p>体験・見学希望の方は↓</p>
                        <p>📅 体験予約希望日</p>
                        <p>👤 性別 / 年齢（任意）</p>
                        <p>🏃 スポーツ経験</p>
                        <p className="text-[#4D5058]/50 mt-1">近隣に駐車場あり🅿️</p>
                      </div>
                    </div>
                  </div>
                  {/* Input bar */}
                  <div className="mt-3 bg-white/60 rounded-full px-4 py-2 flex items-center gap-2">
                    <MessageCircle className="w-4 h-4 text-[#06C755]/60" />
                    <p className="text-[#333]/40 text-xs">メッセージを入力...</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 lg:py-28 relative overflow-hidden bg-gradient-to-br from-[#F2AC55] via-[#F2AC55] to-[#D99A40]">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "25px 25px",
            animation: "dot-pattern 20s ease-in-out infinite",
          }}
        />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="relative z-10 max-w-3xl mx-auto px-4 text-center"
        >
          <p className="text-white/70 text-xs tracking-[0.3em] uppercase mb-3">Trial Lesson</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">体験レッスン受付中</h2>
          <p className="text-white/80 mb-5">まずは一度、DEEP.FITを体験してみてください。</p>

          {/* Price with slash */}
          <div className="flex flex-col items-center mb-2">
            <div className="relative inline-block">
              <span className="font-heading font-bold text-5xl sm:text-6xl text-white/40 line-through decoration-white/60 decoration-[3px]">
                {gymConfig.trialLesson.priceOriginal}
              </span>
              {/* diagonal slash overlay */}
              <span className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="block w-full h-[3px] bg-white/70 rotate-[-18deg] rounded-full" />
              </span>
            </div>
            <div className="mt-1 flex items-center gap-3">
              <span className="font-heading font-bold text-6xl sm:text-7xl text-white">無料</span>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 bg-white/20 border border-white/30 rounded-full px-5 py-2 mb-8">
            <SiInstagram className="w-4 h-4 text-white" />
            <span className="text-white text-sm font-medium">インスタフォロワー限定</span>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="relative group inline-block">
              <div className="absolute inset-0 bg-white/30 blur-md rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 pointer-events-none" />
              <Link
                href="/contact"
                data-testid="button-trial-lesson"
                className="relative z-10 inline-block bg-white text-[#D99A40] font-bold px-8 py-3 rounded-full text-base transition-all duration-200"
              >
                体験レッスンを申し込む
              </Link>
            </div>
            <a
              href={`tel:${gymConfig.phone}`}
              data-testid="button-phone-cta"
              className="border-2 border-white/60 text-white px-8 py-3 rounded-full text-base font-medium hover:bg-white/10 transition-all duration-200"
            >
              電話で予約
            </a>
          </div>
        </motion.div>
      </section>
    </>
  );
}
