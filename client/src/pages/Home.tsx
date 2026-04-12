import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
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

const testimonials = [
  {
    meta: "会員の声 01",
    text: "いつも楽しく通わせてもらっています！トレーナーさんも丁寧に教えてくれるし、会員さんたちも優しいかたばっかりで一緒にトレーニングしていてとても楽しいです！その人に合ったトレーニングを提案してくれるので運動苦手なかたでも続けやすいと思います(^-^) これからもみんなで楽しく運動しましょう♪",
  },
  {
    meta: "会員の声 02",
    text: "妻と2人で通っていますが、こちらのジムのおかげで夫婦共に趣味が増えました！トレーナーさんがキックボクシングミットからサーキットトレーニングまで幅広く教えて下さるので、すべてが新鮮で毎回楽しませてもらっています！他の会員さんも優しい方が多いので、みんなで励まし合いながらトレーニング出来たりと、ジムの雰囲気もとても良くジムに行くのが凄く楽しいです！",
  },
  {
    meta: "会員の声 03",
    text: "指導が的確で、初心者から経験者まで安心して通えるジムです。ミット練習が充実しているのが嬉しいです。会員さんの雰囲気もよく、苦手な筋トレもみんなで楽しくできるので頑張れます。トレーナーさんの人柄も素晴らしく、とてもおすすめのジムです。",
  },
];

const reasonCards = [
  {
    id: 1,
    tag: "SPACE",
    title: "綺麗で広いから、\n気持ちよく通い続けやすい",
    body: "清潔感のある広い空間で、初めての方でも入りやすい環境です。圧迫感が少なく、落ち着いてトレーニングに取り組めます。",
    image: "/images/gym-interior.png",
    alt: "DEEP.FITの広く清潔感のあるジム内観",
  },
  {
    id: 2,
    tag: "EQUIPMENT",
    title: "個室のスミスマシンで、\n一人で集中した補強もできます",
    body: "キックボクシングやサーキットだけでなく、\n個室で自分の目的に合わせた補強トレーニングも可能です。\n引き締め、筋力強化、体力づくりまで、幅広く対応できます。",
    image: "/images/smith-machine.jpeg",
    alt: "DEEP.FITの個室スミスマシン設備",
  },
  {
    id: 3,
    tag: "ATMOSPHERE",
    title: "会員さんの雰囲気が良く、\n一人でも馴染みやすいジムです",
    body: "和気藹々とした空気があり、初めてでも居心地よく通いやすい環境です。\nただ賑やかなだけでなく、自分のペースも大切にできます。",
    image: "/images/gym-about.png",
    alt: "会員同士が楽しくトレーニングするDEEP.FITの雰囲気",
  },
  {
    id: 4,
    tag: "STYLE",
    title: "集中したい日も、\n楽しく動きたい日も、どちらも選べます",
    body: "一人で黙々と打ち込みたい日も、\n他のメンバーと楽しく身体を動かしたい日も、\nその日の気分や目的に合わせて通いやすいジムです。",
    image: "/images/class-circuit.png",
    alt: "DEEP.FITのサーキットトレーニングクラスの様子",
  },
];

const reasonsEvidenceChips = [
  "女性会員も多く、通いやすい雰囲気",
  "一人参加でも馴染みやすい",
  "個室設備あり",
  "目的に合わせて使い分け可能",
];

function ReasonCard({ card }: { card: typeof reasonCards[0] }) {
  return (
    <motion.div
      className="reasons-card"
      variants={scaleIn}
      data-testid={`card-reason-${card.id}`}
    >
      <div className="reasons-card__img-wrap">
        <img src={card.image} alt={card.alt} className="reasons-card__img" loading="lazy" />
        <div className="reasons-card__overlay" />
      </div>
      <div className="reasons-card__content">
        <span className="reasons-card__tag">{card.tag}</span>
        <h3 className="reasons-card__title">
          {card.title.split("\n").map((line, i) => (
            <span key={i}>{line}</span>
          ))}
        </h3>
        <p className="reasons-card__body">{card.body}</p>
      </div>
    </motion.div>
  );
}

function GymIdentitySection() {
  return (
    <section className="reasons-section">
      <div className="reasons-section__inner">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="reasons-section__header"
        >
          <span className="reasons-section__eyebrow">ABOUT</span>
          <h2 className="reasons-section__title">
            DEEP.FITって<br />どんなジム？
          </h2>
          <p className="reasons-section__lead">
            綺麗で広い空間、通いやすい雰囲気、目的に合わせた設備。<br />
            初めての方でも、自分のペースで続けやすいジムです。
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="reasons-cards"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {reasonCards.map((card) => (
            <ReasonCard key={card.id} card={card} />
          ))}
        </motion.div>

        {/* Evidence chips */}
        <motion.div
          className="reasons-chips"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          {reasonsEvidenceChips.map((chip, i) => (
            <span key={i} className="reasons-chip" data-testid={`chip-reason-${i}`}>
              {chip}
            </span>
          ))}
        </motion.div>

        {/* Soft CTA */}
        <motion.div
          className="reasons-cta"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <p className="reasons-cta__lead">まずは実際の雰囲気を、無料体験や見学でお確かめください</p>
          <a
            href={gymConfig.sns.line}
            target="_blank"
            rel="noopener noreferrer"
            className="reasons-cta__btn"
            data-testid="button-reasons-line"
          >
            <SiLine className="w-5 h-5" />
            見学・無料体験を予約する
          </a>
          <Link href="/contact" className="reasons-cta__text-link" data-testid="link-reasons-contact">ご不安な点などの相談はこちら →</Link>
        </motion.div>
      </div>
    </section>
  );
}

const classes = [
  { title: "フィットネス", subtitle: "Fitness Class", level: "初心者向け", description: "有酸素運動とキックボクシングを組み合わせた人気クラス。楽しみながらダイエットや体力アップを目指せます。", image: "/images/class-kickboxing.png", alt: "DEEP.FITの初心者向けフィットネスキックボクシングクラス", animation: "left", target: "運動不足解消・ダイエット", intensity: 1, duration: "30分", beginnerOk: true },
  { title: "パーソナルトレーニング", subtitle: "Personal Training", level: "全レベル", description: "マンツーマンで目標に合わせた特別プログラム。フォーム重視で、引き締め・筋力強化を確実に。", image: "/images/class-personal.png", alt: "DEEP.FITのパーソナルトレーニング指導の様子", animation: "up", target: "引き締め・筋力強化", intensity: 2, duration: "60分", beginnerOk: true },
  { title: "キッズクラス", subtitle: "Kids Class", level: "お子様向け", description: "楽しみながら体を動かすキッズ向けプログラム。礼儀やスポーツの基礎も学べます。", image: kidsClassImg, alt: "DEEP.FITのキッズクラスでお子さまが楽しくトレーニング", animation: "right", target: "基礎体力・礼儀", intensity: 1, duration: "60分", beginnerOk: true },
];

const faqItems = [
  {
    q: "運動経験がなくても大丈夫ですか？",
    aLead: "はい。むしろ未経験から始める方が多いです。",
    aBody: "DEEP.FITでは、運動が久しぶりの方や未経験の方も多く通われています。メニューは一人ひとりのレベルに合わせて調整できるので、体力に自信がない方も安心して始められます。",
  },
  {
    q: "女性一人でも通いやすいですか？",
    aLead: "はい。女性一人でも通いやすい雰囲気です。",
    aBody: "実際におひとりで通われている方も多く、和気藹々としながらも無理に人に合わせすぎない空気があります。「格闘技ジムは少し不安」という方にも入りやすい環境です。",
  },
  {
    q: "体験当日は何を持っていけばいいですか？",
    aLead: "動きやすい服装だけで大丈夫です。",
    aBody: "タオル・飲み物があると快適ですが、手ぶらでも対応できます。グローブなどの道具は不要ですが、ミットやサンドバックを打つ際は、バンテージや軍手などを持参いただくことをお勧めします。",
  },
  {
    q: "どれくらいで効果を実感できますか？",
    aLead: "目安としては、1〜3か月ほどで何らかの変化を感じる方が多いです。",
    aBody: "まずは「疲れにくくなった」「気分が軽くなった」といった変化を感じやすく、見た目の変化はその後少しずつ出てきます。DEEP.FITでは、それぞれのペースで無理なく楽しく続けられることを大切にしています。",
  },
  {
    q: "子どもを連れて行っても大丈夫ですか？",
    aLead: "はい、お子さま連れについてもお気軽にご相談ください。",
    aBody: "お子さま同伴のみならず、キッズクラスのご用意もあり、ご家庭の状況に合わせて通い方をご案内しています。気になることがあれば事前にLINEでご相談いただけます。",
  },
  {
    q: "退会やお休みはできますか？",
    aLead: "はい、月単位でのご相談が可能です。",
    aBody: "長期の縛りや違約金はありません。ライフスタイルの変化に合わせて、無理なく続けられる通い方をスタッフと一緒に考えます。",
  },
];

function FAQSection() {
  return (
    <section className="faq-section">
      <div className="faq-section__inner">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="faq-section__header"
        >
          <h2 className="faq-section__title">はじめてでも大丈夫？ よくあるご質問</h2>
          <p className="faq-section__lead">体験前に気になることを、よくある質問からまとめました。</p>
        </motion.div>

        <motion.div
          className="faq-section__grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {faqItems.map((item, i) => (
            <motion.div key={i} variants={fadeInUp} className="faq-card" data-testid={`card-faq-${i}`}>
              <div className="faq-card__question">
                <span className="faq-card__q-label">Q</span>
                <p className="faq-card__q-text">{item.q}</p>
              </div>
              <div className="faq-card__divider" />
              <div className="faq-card__answer">
                <span className="faq-card__a-label">A</span>
                <div className="faq-card__a-content">
                  <p className="faq-card__a-lead">{item.aLead}</p>
                  <p className="faq-card__a-text">{item.aBody}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function InstagramAtmosphereSection() {
  const igThumbs = [
    { image: "/images/gym-interior.png", alt: "DEEP.FITの広く清潔感のあるジム内観" },
    { image: "/images/class-kickboxing.png", alt: "初心者向けキックボクシングレッスンの様子" },
    { image: "/images/gym-about.png", alt: "会員同士が和気藹々とトレーニングするDEEP.FITの雰囲気" },
  ];

  return (
    <section className="ig-atmosphere-section">
      <div className="ig-atmosphere-section__inner">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="ig-atmosphere-section__header"
        >
          <SiInstagram className="w-8 h-8 text-[#F0A93A] mx-auto mb-4" />
          <h2 className="ig-atmosphere-section__title">実際の雰囲気は、Instagramで見られます</h2>
          <p className="ig-atmosphere-section__lead">練習風景や日常の様子を通じて、ジムの空気感や通いやすさが分かります。</p>
        </motion.div>

        <motion.div
          className="ig-atmosphere-section__grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {igThumbs.map((thumb, i) => (
            <motion.a
              key={i}
              variants={scaleIn}
              href={gymConfig.sns.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="ig-atmosphere-section__thumb"
              data-testid={`link-ig-thumb-${i}`}
            >
              <img src={thumb.image} alt={thumb.alt} loading="lazy" className="ig-atmosphere-section__thumb-img" />
              <div className="ig-atmosphere-section__thumb-overlay">
                <SiInstagram className="w-5 h-5 text-white" />
              </div>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="ig-atmosphere-section__banner"
        >
          <div className="ig-atmosphere-section__banner-left">
            <div className="ig-atmosphere-section__banner-icon">
              <SiInstagram className="w-9 h-9 text-white" />
            </div>
            <div>
              <p className="ig-atmosphere-section__banner-follow">FOLLOW US</p>
              <p className="ig-atmosphere-section__banner-heading">練習風景・日常を公開中！！</p>
              <p className="ig-atmosphere-section__banner-handle">@deep.amagasaki</p>
            </div>
          </div>
          <div className="ig-atmosphere-section__banner-right">
            <div className="ig-atmosphere-section__banner-promo">
              <SiInstagram className="w-3 h-3 text-[#F0A93A]" />
              インスタフォローで体験無料
              <span className="ig-atmosphere-section__banner-promo-sub">フォロー後、DMまたはLINEでご連絡ください</span>
            </div>
            <a
              href={gymConfig.sns.instagram}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="button-instagram"
              className="ig-atmosphere-section__btn"
            >
              <SiInstagram className="w-4 h-4" />
              Instagramを見る
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TestimonialsGridSection() {
  return (
    <section className="testimonials-grid-section">
      <div className="testimonials-grid-section__inner">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="testimonials-grid-section__header"
        >
          <h2 className="testimonials-grid-section__title">実際に通っている方の声</h2>
          <p className="testimonials-grid-section__lead">はじめての方や、運動が久しぶりの方からも、通いやすさについての声をいただいています。</p>
        </motion.div>

        <motion.div
          className="testimonials-grid-section__cards"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {testimonials.map((t, i) => (
            <motion.div key={i} variants={scaleIn} className="testimonial-card" data-testid={`card-testimonial-${i}`}>
              <p className="testimonial-card__meta">{t.meta}</p>
              <p className="testimonial-card__text">「{t.text}」</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

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
          <p className="opening-offer-section__eyebrow text-[24px]">OPENキャンペーン</p>
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
          <span>体験時間は自由</span>
          <span>持ち物は動きやすい服装だけ</span>
          <span>おひとり様での参加歓迎</span>
          <span>運動初心者の方も歓迎
</span>
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
          >ご不安な点などを相談する</Link>
          <p className="opening-offer-section__cta-note">返信は営業時間内に順次対応</p>
        </motion.div>
      </div>
    </section>
  );
}

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const videoRefA = useRef<HTMLVideoElement>(null);
  const videoRefB = useRef<HTMLVideoElement>(null);

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

  const tagline = gymConfig.tagline.split("");

  return (
    <>
      <SEO title={seoConfig.pages.home.title} description={seoConfig.pages.home.description} path="/" faqItems={faqItems} />
      <ScrollProgress />
      {/* Hero Section — hero-v2 */}
      <section className="hero-v2" ref={heroRef}>
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

        {/* z-2: Two-tier heading watermark */}
        <motion.div
          className="hero-v2__bigcopy"
          data-testid="text-hero-two-tier-heading"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1.2 }}
        >
          <span className="hero-v2__bigcopy--top">FEEL THE CHANGE.</span>
          <span className="hero-v2__bigcopy--bottom">DEEP.FIT</span>
        </motion.div>

        {/* z-3: Content */}
        <div className="hero-v2__inner hero-v2__inner--balanced">

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
              <span className="sr-only">JR尼崎で初心者・女性も通いやすいキックボクシングジム DEEP.FIT</span>
              <span aria-hidden="true">楽しいから続く。</span>
              <span aria-hidden="true">続くから変わる。</span>
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
      <GymIdentitySection />
      <FAQSection />
      <InstagramAtmosphereSection />
      <TestimonialsGridSection />
      {/* Classes */}
      <section className="class-guide-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-14"
          >
            <p className="text-[#F0A93A] text-xs tracking-[0.3em] uppercase mb-3">Classes</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#4D5058]">目的に合わせて選べるクラス</h2>
            <p className="text-[#4D5058]/60 text-sm mt-3">どんな目的でも、合うトレーニングが見つかります</p>
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
                  data-testid={`card-class-${i}`}
                >
                  <div className="absolute inset-0 overflow-hidden">
                    <img
                      src={cls.image}
                      alt={cls.alt}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-[1.06]"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#4D5058]/28 to-[#4D5058]/82" />
                  <div className="absolute top-4 left-4 flex flex-wrap gap-1.5">
                    <span className="text-[10px] tracking-wider font-medium bg-[#F0A93A] text-white px-3 py-1 rounded-full uppercase">
                      {cls.level}
                    </span>
                    {cls.beginnerOk && (
                      <span className="text-[10px] tracking-wider font-medium bg-white/20 text-white px-2.5 py-1 rounded-full backdrop-blur-sm">
                        初心者OK
                      </span>
                    )}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white/50 text-xs tracking-[0.2em] uppercase mb-1">{cls.subtitle}</p>
                    <h3 className="text-white font-bold text-xl mb-2">{cls.title}</h3>
                    <p className="text-white/70 text-xs leading-relaxed mb-3">{cls.description}</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-[10px] bg-white/10 text-white/80 px-2 py-0.5 rounded-full border border-white/10">{cls.target}</span>
                      <span className="text-[10px] bg-white/10 text-white/80 px-2 py-0.5 rounded-full border border-white/10">{cls.duration}</span>
                      <span className="text-[10px] bg-white/10 text-white/80 px-2 py-0.5 rounded-full border border-white/10">
                        強度{"★".repeat(cls.intensity)}{"☆".repeat(3 - cls.intensity)}
                      </span>
                    </div>
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
      {/* LINE Consult Section */}
      <section className="py-20 lg:py-28 overflow-hidden" style={{ background: "linear-gradient(135deg, #06C755 0%, #04A344 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
                自分に合うか不安な方は、<br />まずはLINEでご相談ください
              </h2>
              <p className="text-white/80 mb-6 leading-relaxed text-sm sm:text-base">
                見学だけ、体験だけ、空き枠確認だけでも大丈夫です。<br />
                運動が久しぶりの方もお気軽にご相談ください。
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {["無理な勧誘なし", "見学だけでもOK", "初心者歓迎", "一人参加OK"].map((chip, i) => (
                  <span key={i} className="bg-white/15 border border-white/20 text-white/90 text-xs px-3 py-1.5 rounded-full">{chip}</span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={gymConfig.sns.line}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="button-line-add"
                  className="inline-flex items-center justify-center gap-2 bg-white text-[#06C755] font-bold px-7 py-3 rounded-full text-sm transition-all duration-200 hover:scale-105 shadow-lg"
                >
                  <SiLine className="w-5 h-5" />
                  LINEで無料体験を予約する
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white/15 border border-white/25 text-white font-medium px-6 py-3 rounded-full text-sm transition-all duration-200 hover:bg-white/25"
                  data-testid="link-line-contact"
                >
                  見学・体験を相談する
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInRight}
              className="flex justify-center"
            >
              <div className="w-full max-w-sm">
                <div className="bg-[#BEE3CD] rounded-3xl p-4 shadow-2xl">
                  <div className="bg-[#06C755] rounded-2xl px-4 py-3 flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center shrink-0 overflow-hidden">
                      <img src={deepFitLogo} alt="DEEP.FIT" className="w-full h-full object-contain p-0.5" />
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm">DEEP.FIT</p>
                      <p className="text-white/70 text-xs">公式アカウント</p>
                    </div>
                  </div>
                  <div className="space-y-3 px-1 max-h-80 overflow-hidden">
                    <div className="flex justify-end">
                      <div className="bg-[#06C755] text-white text-xs px-3 py-2 rounded-2xl rounded-tr-sm max-w-[70%]">
                        体験希望
                      </div>
                    </div>
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
      {/* Final Trial CTA */}
      <section className="final-cta-section">
        <div className="final-cta-section__bg" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="relative z-10 max-w-3xl mx-auto px-4 text-center"
        >
          <p className="text-white/70 text-xs tracking-[0.3em] uppercase mb-3">Trial</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">まずは無料体験からお試しください</h2>
          <p className="text-white/80 mb-8 leading-relaxed text-sm sm:text-base">
            ジムの雰囲気や通いやすさを、実際に見てから判断していただけます。
          </p>

          <div className="final-cta-section__info">
            <div className="final-cta-section__info-item">
              <span className="final-cta-section__info-label">体験料</span>
              <span className="final-cta-section__info-value">無料</span>
            </div>
            <div className="final-cta-section__info-item">
              <span className="final-cta-section__info-label">持ち物</span>
              <span className="final-cta-section__info-value">動きやすい服装だけ</span>
            </div>
            <div className="final-cta-section__info-item">
              <span className="final-cta-section__info-label">見学</span>
              <span className="final-cta-section__info-value">見学だけでもOK</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {["無理な勧誘なし", "おひとり様歓迎", "運動初心者の方も安心"].map((chip, i) => (
              <span key={i} className="bg-white/15 border border-white/25 text-white/90 text-xs px-3 py-1.5 rounded-full">{chip}</span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={gymConfig.sns.line}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="button-trial-lesson"
              className="inline-flex items-center gap-2 bg-white text-[#D99A40] font-bold px-8 py-3 rounded-full text-base transition-all duration-200 hover:scale-105 shadow-lg"
            >
              <SiLine className="w-5 h-5 text-[#06C755]" />
              無料体験を予約する
            </a>
            <Link
              href="/contact"
              data-testid="button-contact-cta"
              className="border-2 border-white/60 text-white px-8 py-3 rounded-full text-base font-medium hover:bg-white/10 transition-all duration-200"
            >
              見学・体験を相談する
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  );
}
