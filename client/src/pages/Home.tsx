import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { motion, useScroll, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { Users, Trophy, Dumbbell, Clock, ChevronLeft, ChevronRight, Star, ArrowRight, MessageCircle } from "lucide-react";
import { SiInstagram, SiLine } from "react-icons/si";
import SEO from "@/components/SEO";
import { gymConfig, seoConfig } from "@/lib/gymConfig";

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
  { title: "キッズクラス", subtitle: "Kids Class", level: "お子様向け", description: "楽しみながら体を動かすキッズ向けプログラム。礼儀やスポーツの基礎も学べます。保護者も安心の環境です。", image: "/images/class-circuit.png", animation: "right" },
];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const heroBgY = useTransform(scrollY, [0, 600], [0, 200]);

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

      {/* Hero Section */}
      <div ref={heroRef} className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ y: heroBgY }}
          className="absolute inset-0 z-0"
        >
          <motion.div
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 8, ease: "easeOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/hero-deepfit.png')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#4D5058]/50 via-[#4D5058]/40 to-[#4D5058]/75" />
        </motion.div>

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span className="inline-block border border-white/40 text-white/80 text-xs sm:text-sm tracking-[0.3em] uppercase px-5 py-2 rounded-full mb-6">
              サーキット×キックボクシングフィットネスジム
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="font-heading font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white tracking-wider mb-4"
          >
            DEEP.FIT
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-white/80 text-sm sm:text-base tracking-[0.2em] mb-3"
          >
            サーキットトレーニング×キックボクシング
          </motion.p>

          <div className="text-white text-lg sm:text-xl md:text-2xl font-medium mb-8 tracking-wide">
            {tagline.map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 + i * 0.06, duration: 0.3 }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <GlowButton href="/contact" className="text-base">
              体験レッスンを予約
            </GlowButton>
            <Link
              href="/schedule"
              data-testid="button-view-classes"
              className="border-2 border-white/60 text-white px-7 py-3 rounded-full text-base font-medium hover:bg-white/10 transition-all duration-200"
            >
              クラス・料金を見る
            </Link>
          </motion.div>
        </motion.div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-8 h-12 rounded-full border-2 border-white/40 flex items-start justify-center pt-2"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#F2AC55]" />
          </motion.div>
        </div>
      </div>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-28 bg-white relative">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, #4D5058 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-14"
          >
            <p className="text-[#F2AC55] text-xs tracking-[0.3em] uppercase mb-3">Why Choose Us</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#4D5058]">選ばれる理由</h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {reasons.map((reason, i) => {
              const Icon = reason.icon;
              return (
                <motion.div
                  key={i}
                  variants={scaleIn}
                  className="group relative bg-white rounded-2xl p-7 border border-gray-100 shadow-sm cursor-default transition-transform duration-300 hover:-translate-y-2"
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#F2AC55]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <div className="relative">
                    <div className="w-12 h-12 rounded-xl bg-[#F2F3F5] flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-[#F2AC55]">
                      <Icon className="w-6 h-6 text-[#4D5058] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="font-bold text-[#4D5058] text-lg mb-2">{reason.title}</h3>
                    <p className="text-[#4D5058]/60 text-sm leading-relaxed">{reason.text}</p>
                  </div>
                </motion.div>
              );
            })}
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
              <p className="text-[#4D5058] font-medium text-xl italic mb-5 text-white/90">「動いて、整えて、気づけば続く。」</p>
              <p className="text-white/70 leading-relaxed mb-6 text-sm sm:text-base">
                DEEP.FITは2015年に尼崎市に設立したサーキット×キックボクシングジムです。「運動は初めてで不安」「ジムに入っても続かなかった」そんな方こそ、安心して始められる環境づくりを大切にしています。プロ在籍のインストラクターが、あなたのペースに合わせて丁寧に指導します。
              </p>
              <GlowButton href="/about">
                ジムについて詳しく <ArrowRight className="w-4 h-4 inline ml-1" />
              </GlowButton>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-2 gap-4"
            >
              {gymConfig.stats.map((stat, i) => (
                <motion.div
                  key={i}
                  variants={scaleIn}
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 text-center transition-transform duration-300 hover:scale-105"
                >
                  <div className="text-3xl sm:text-4xl font-heading font-bold text-[#F2AC55] mb-1">
                    <CountUp target={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-white/60 text-xs sm:text-sm">{stat.label}</div>
                </motion.div>
              ))}
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
                <SiLine className="w-8 h-8 text-white" />
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
                    <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center shrink-0">
                      <SiLine className="w-5 h-5 text-[#06C755]" />
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
                      <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center shrink-0 mt-1 shadow-sm">
                        <SiLine className="w-4 h-4 text-[#06C755]" />
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
                      <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center shrink-0 mt-1 shadow-sm">
                        <SiLine className="w-4 h-4 text-[#06C755]" />
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
