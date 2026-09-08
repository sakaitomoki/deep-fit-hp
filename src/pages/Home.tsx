import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { SiInstagram, SiLine } from "react-icons/si";
import SEO from "@/components/SEO";
import { gymConfig, seoConfig } from "@/lib/gymConfig";
import { useT } from "@/lib/i18n";

const deepFitLogo = "/images/deepfit-logo-asset.webp";
const kidsClassImg = "/images/kids-class.webp";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
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
    image: "/images/gym-kickboxing-woman.webp",
    alt: "DEEP.FITのキックボクシングトレーニング",
  },
  {
    id: 2,
    tag: "EQUIPMENT",
    title: "個室のスミスマシンで、\n一人で集中した補強もできます",
    body: "キックボクシングやサーキットトレーニングだけでなく、\n個室で自分の目的に合わせた補強トレーニングも可能です。\n引き締め、筋力強化、体力づくりまで、幅広く対応できます。",
    image: "/images/smith-machine.webp",
    alt: "DEEP.FITの個室スミスマシン設備",
  },
  {
    id: 3,
    tag: "ATMOSPHERE",
    title: "会員さんの雰囲気が良く、\n一人でも馴染みやすいジムです",
    body: "和気藹々とした空気があり、初めてでも居心地よく通いやすい環境です。\nただ賑やかなだけでなく、自分のペースも大切にできます。",
    image: "/images/gym-about.webp",
    alt: "会員同士が楽しくトレーニングするDEEP.FITの雰囲気",
  },
  {
    id: 4,
    tag: "STYLE",
    title: "集中したい日も、\n楽しく動きたい日も、どちらも選べます",
    body: "一人で黙々と打ち込みたい日も、\n他のメンバーと楽しく身体を動かしたい日も、\nその日の気分や目的に合わせて通いやすいジムです。",
    image: "/images/class-circuit.webp",
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
  const t = useT();
  return (
    <motion.div className="reasons-card" variants={scaleIn} data-testid={`card-reason-${card.id}`}>
      <div className="reasons-card__img-wrap">
        <img src={card.image} alt={t(card.alt)} className="reasons-card__img" loading="lazy" />
        <div className="reasons-card__overlay" />
      </div>
      <div className="reasons-card__content">
        <span className="reasons-card__tag">{card.tag}</span>
        <h3 className="reasons-card__title">
          {t(card.title).split("\n").map((line, i) => (
            <span key={i}>{line}</span>
          ))}
        </h3>
        <p className="reasons-card__body">{t(card.body)}</p>
      </div>
    </motion.div>
  );
}

function GymIdentitySection() {
  const t = useT();
  return (
    <section className="reasons-section">
      <div className="reasons-section__inner">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="reasons-section__header"
        >
          <span className="reasons-section__eyebrow">ABOUT</span>
          <h2 className="reasons-section__title">
            {t("DEEP.FITって")}<br />{t("どんなジム？")}
          </h2>
          <p className="reasons-section__lead">
            {t("綺麗で広い空間、通いやすい雰囲気、目的に合わせた設備。")}<br />
            {t("初めての方でも、自分のペースで続けやすいジムです。")}
          </p>
        </motion.div>

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

        <motion.div
          className="reasons-chips"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          {reasonsEvidenceChips.map((chip, i) => (
            <span key={i} className="reasons-chip" data-testid={`chip-reason-${i}`}>
              {t(chip)}
            </span>
          ))}
        </motion.div>

        <motion.div
          className="reasons-cta"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <p className="reasons-cta__lead">{t("まずは実際の雰囲気を、無料体験や見学でお確かめください")}</p>
          <a
            href={gymConfig.sns.line}
            target="_blank"
            rel="noopener noreferrer"
            className="reasons-cta__btn"
            data-testid="button-reasons-line"
          >
            <SiLine className="w-5 h-5" />
            {t("見学・無料体験を予約する")}
          </a>
          <Link href="/contact" className="reasons-cta__text-link" data-testid="link-reasons-contact">{t("ご不安な点などの相談はこちら →")}</Link>
        </motion.div>
      </div>
    </section>
  );
}

const classes = [
  { title: "フィットネス", subtitle: "Fitness Class", level: "初心者向け", description: "有酸素運動とキックボクシングを組み合わせた30分のサーキットトレーニング。楽しみながらダイエットや体力アップを目指せます。", image: "/images/class-kickboxing.webp", alt: "DEEP.FITの初心者向けフィットネスキックボクシングクラス", animation: "left", target: "運動不足解消・ダイエット", intensity: 1, duration: "30分", beginnerOk: true },
  { title: "パーソナルトレーニング", subtitle: "Personal Training", level: "全レベル", description: "マンツーマンで目標に合わせた特別プログラム。フォーム重視で、引き締め・筋力強化を確実に。", image: "/images/class-personal.webp", alt: "DEEP.FITのパーソナルトレーニング指導の様子", animation: "up", target: "引き締め・筋力強化", intensity: 2, duration: "60分", beginnerOk: true },
  { title: "キッズクラス", subtitle: "Kids Class", level: "お子様向け", description: "楽しみながら体を動かすキッズ向けプログラム。礼儀やスポーツの基礎も学べます。", image: kidsClassImg, alt: "DEEP.FITのキッズクラスでお子さまが楽しくトレーニング", animation: "right", target: "基礎体力・礼儀", intensity: 1, duration: "60分", beginnerOk: true },
];

const faqItems = [
  {
    q: "運動経験がなくても大丈夫ですか？",
    aLead: "はい。むしろ未経験から始める方が多いです。",
    aBody: "DEEP.FITでは、運動が久しぶりの方や未経験の方も多く通われています。メニューは一人ひとりのレベルに合わせて調整できるので、体力に自信がない方も安心して始められます。",
  },
  {
    q: "サーキットトレーニングとはどんな内容ですか？",
    aLead: "有酸素運動とキックボクシングの動きを組み合わせた、30分で全身を動かすトレーニングです。",
    aBody: "DEEP.FITのサーキットトレーニングは、楽しみながらダイエットや体力アップを目指せる内容になっています。初心者や運動が久しぶりの方でも自分のペースで取り組めるので、無理なく続けやすいのが特徴です。",
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
    q: "退会はいつでもできますか？",
    aLead: "はい。月単位でいつでも退会でき、違約金や解約手数料もありません。",
    aBody: "なお、割引価格の「DEEPプラス会員」は1年以上の継続を前提としたプランです。休会制度はご用意しておりませんのでご了承ください。ライフスタイルの変化があっても、退会のご連絡をいただければスムーズに対応します。",
  },
];

function FAQSection() {
  const t = useT();
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
          <h2 className="faq-section__title">{t("はじめてでも大丈夫？ よくあるご質問")}</h2>
          <p className="faq-section__lead">{t("体験前に気になることを、よくある質問からまとめました。")}</p>
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
                <p className="faq-card__q-text">{t(item.q)}</p>
              </div>
              <div className="faq-card__divider" />
              <div className="faq-card__answer">
                <span className="faq-card__a-label">A</span>
                <div className="faq-card__a-content">
                  <p className="faq-card__a-lead">{t(item.aLead)}</p>
                  <p className="faq-card__a-text">{t(item.aBody)}</p>
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
  const t = useT();
  const igThumbs = [
    { image: "/images/gym-kickboxing-woman.webp", alt: "キックボクシングトレーニングの様子" },
    { image: "/images/class-kickboxing.webp", alt: "初心者向けキックボクシングレッスン" },
    { image: "/images/class-circuit.webp", alt: "サーキットトレーニングクラス" },
    { image: "/images/gym-about.webp", alt: "DEEP.FITのトレーニング風景" },
    { image: "/images/kids-class.webp", alt: "キッズクラスの様子" },
    { image: "/images/smith-machine.webp", alt: "個室スミスマシンでのトレーニング" },
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
          <h2 className="ig-atmosphere-section__title">{t("実際の雰囲気は、Instagramで見られます")}</h2>
          <p className="ig-atmosphere-section__lead">{t("練習風景や日常の様子を通じて、ジムの空気感や通いやすさが分かります。")}</p>
        </motion.div>

        <motion.a
          href={gymConfig.sns.instagram}
          target="_blank"
          rel="noopener noreferrer"
          data-testid="link-ig-reel-banner"
          className="ig-reel-banner"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="ig-reel-banner__text">
            <div className="ig-reel-banner__logo">
              <SiInstagram className="w-7 h-7" />
              <span>Instagram</span>
            </div>
            <h3 className="ig-reel-banner__headline">
              <span className="ig-reel-banner__hl">{t("練習風景動画")}</span>{t("を公開中！！")}
            </h3>
            <span className="ig-reel-banner__cta">
              {t("詳しくはこちら")}
              <ArrowRight className="w-4 h-4" />
            </span>
          </div>
          <div className="ig-reel-banner__phone" aria-hidden="true">
            <span className="ig-reel-banner__phone-notch" />
            <div className="ig-reel-banner__reels">
              {igThumbs.map((thumb, i) => (
                <div key={i} className="ig-reel-banner__reel">
                  <img src={thumb.image} alt="" loading="lazy" />
                  <span className="ig-reel-banner__reel-play" />
                </div>
              ))}
            </div>
          </div>
        </motion.a>

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
              <p className="ig-atmosphere-section__banner-heading">{t("練習風景・日常を公開中！！")}</p>
              <p className="ig-atmosphere-section__banner-handle">@deep.amagasaki</p>
            </div>
          </div>
          <div className="ig-atmosphere-section__banner-right">
            <div className="ig-atmosphere-section__banner-promo">
              <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 6 }}>
                <SiInstagram className="w-4 h-4 text-[#F0A93A]" />
                <span style={{ color: "#F0A93A", fontSize: 11, fontWeight: 900, letterSpacing: "0.14em" }}>{t("期間限定特典")}</span>
              </div>
              <p style={{ fontSize: "clamp(15px,2vw,18px)", fontWeight: 900, lineHeight: 1.25, marginBottom: 4 }}>
                {t("インスタをフォローして")}<br />
                <span style={{ color: "#F0A93A", fontSize: "clamp(18px,2.5vw,22px)" }}>{t("体験料2,000円→無料")}</span>
              </p>
              <span className="ig-atmosphere-section__banner-promo-sub" style={{ fontSize: 11 }}>
                {t("① @deep.amagasaki をフォロー")}<br />
                {t("② DMまたはLINEで「フォローしました」と送るだけ")}
              </span>
            </div>
            <a
              href={gymConfig.sns.instagram}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="button-instagram"
              className="ig-atmosphere-section__btn"
            >
              <SiInstagram className="w-4 h-4" />
              {t("@deep.amagasaki をフォローする")}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TestimonialsGridSection() {
  const t = useT();
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
          <h2 className="testimonials-grid-section__title">{t("実際に通っている方の声")}</h2>
          <p className="testimonials-grid-section__lead">{t("はじめての方や、運動が久しぶりの方からも、通いやすさについての声をいただいています。")}</p>
        </motion.div>

        <motion.div
          className="testimonials-grid-section__cards"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {testimonials.map((item, i) => (
            <motion.div key={i} variants={scaleIn} className="testimonial-card" data-testid={`card-testimonial-${i}`}>
              <p className="testimonial-card__meta">{t(item.meta)}</p>
              <p className="testimonial-card__text">「{t(item.text)}」</p>
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
  { id: 1, label: "特典①", title: "体験料", originalPrice: "通常 2,000円", benefit: "無料" },
  { id: 2, label: "特典②", title: "入会金", originalPrice: "通常 10,000円", benefit: "無料" },
  { id: 3, label: "特典③", title: "事務手数料", originalPrice: "通常 3,000円", benefit: "無料" },
];

function OpeningOfferSection() {
  const t = useT();
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
          <p className="opening-offer-section__eyebrow text-[24px]">{t("夏の大キャンペーン")}</p>
          <h2 className="opening-offer-section__title">
            {t("本気の夏、始めよう。")}
            <span>{t("4大特典")}</span>
          </h2>
          <p className="opening-offer-section__lead">
            {t("9月末までの期間限定。")}<br />
            {t("まずは無料体験から気軽にどうぞ。")}
          </p>
        </motion.div>

        {/* 3大無料特典カード */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="opening-offer-section__cards"
        >
          {openingOfferItems.map((item) => (
            <motion.div key={item.id} variants={scaleIn} className="opening-offer-card">
              <div className="opening-offer-card__label">{t(item.label)}</div>
              <div className="opening-offer-card__body">
                <div>
                  <p className="opening-offer-card__title">{t(item.title)}</p>
                  <p className="opening-offer-card__original">{t(item.originalPrice)}</p>
                </div>
                <div style={{ textAlign: "right", lineHeight: 1 }}>
                  <p style={{
                    margin: 0,
                    fontFamily: "Oswald, sans-serif",
                    fontSize: "clamp(42px, 5vw, 62px)",
                    fontWeight: 900,
                    color: "#D99A40",
                    lineHeight: 0.9,
                    letterSpacing: "-0.02em",
                  }}>¥0</p>
                  <p style={{
                    margin: "4px 0 0",
                    fontSize: 11,
                    fontWeight: 800,
                    letterSpacing: "0.12em",
                    color: "#8C7B72",
                  }}>{t(item.benefit)}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* 追加特典 ④⑤ — 大きく目立つカード */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="flex flex-col sm:flex-row gap-5 w-full mt-2 mb-2"
        >
          {/* 特典④ 先着30名限定・月会費永久割引 — 明るい今だけキャンペーン */}
          <motion.div
            variants={scaleIn}
            className="flex-1 rounded-3xl overflow-hidden"
            style={{
              background: "#ffffff",
              border: "2.5px solid #EAA53B",
              boxShadow: "0 14px 40px -16px rgba(234,165,59,0.5)",
              position: "relative",
            }}
          >
            {/* 今だけキャンペーン コーナーリボン */}
            <div style={{ position: "absolute", top: 16, right: -42, transform: "rotate(45deg)", background: "linear-gradient(90deg,#E0492B,#F2762F)", color: "#fff", fontSize: 11, fontWeight: 900, letterSpacing: "0.1em", padding: "5px 44px", boxShadow: "0 4px 10px -3px rgba(0,0,0,0.3)", zIndex: 2 }}>
              {t("今だけ")}
            </div>

            {/* ヘッダーバンド（オレンジ） */}
            <div className="px-5 pt-4 pb-4 text-center" style={{ background: "linear-gradient(135deg, #EAA53B 0%, #F5C96A 100%)" }}>
              <div className="flex items-center justify-center gap-2 mb-2">
                <span style={{ background: "rgba(255,255,255,0.28)", color: "#ffffff", fontSize: 11, fontWeight: 900, padding: "3px 12px", borderRadius: 999, letterSpacing: "0.1em" }}>{t("特典④")}</span>
                <span style={{ color: "rgba(255,255,255,0.9)", fontSize: 11, letterSpacing: "0.12em", fontWeight: 700 }}>{t("当日入会限定")}</span>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-2 mb-2">
                <span style={{ background: "#ffffff", color: "#C0392B", fontSize: 12, fontWeight: 900, padding: "4px 14px", borderRadius: 999, letterSpacing: "0.04em" }}>{t("🔥 先着30名限定")}</span>
                <span style={{ background: "#ffffff", color: "#B9791B", fontSize: 12, fontWeight: 900, padding: "4px 14px", borderRadius: 999, letterSpacing: "0.04em" }}>{t("⏰ 9月末まで")}</span>
              </div>
              <p style={{
                color: "#ffffff",
                fontSize: "clamp(28px,4vw,46px)",
                fontWeight: 900,
                lineHeight: 1.05,
                margin: "2px 0 0",
                fontFamily: "Oswald, sans-serif",
                letterSpacing: "0.02em",
                textShadow: "0 2px 8px rgba(120,70,0,0.22)",
              }}>
                {t("月会費が永久にOFF！！")}
              </p>
            </div>

            {/* 価格比較 */}
            <div className="px-5 pt-5 pb-5">
              {/* 女性 */}
              <div className="mb-4">
                <p style={{ color: "#D99A40", fontSize: 11, fontWeight: 800, letterSpacing: "0.14em", marginBottom: 3 }}>{t("女性フルタイム")}</p>
                <div className="flex items-baseline gap-2">
                  <span style={{ color: "#A99C92", fontSize: "clamp(15px,1.8vw,20px)", fontWeight: 700 }}>{t("通常")}</span>
                  <span style={{ color: "#A99C92", fontSize: "clamp(18px,2.2vw,26px)", fontWeight: 800, textDecoration: "line-through" }}>{t("11,000円")}</span>
                  <span style={{ color: "#A99C92", fontSize: "clamp(15px,1.8vw,20px)", fontWeight: 700 }}>{t("が")}</span>
                </div>
                <div className="flex items-baseline gap-2 mt-0.5">
                  <span style={{ color: "#3D3530", fontSize: "clamp(16px,1.8vw,20px)", fontWeight: 700 }}>{t("ずっと")}</span>
                  <span style={{ color: "#D99A40", fontSize: "clamp(32px,4.2vw,50px)", fontWeight: 900, lineHeight: 1, fontFamily: "Oswald, sans-serif" }}>{t("9,000円")}</span>
                  <span style={{ color: "#3D3530", fontSize: "clamp(14px,1.4vw,17px)", fontWeight: 700 }}>{t("で通い放題！")}</span>
                </div>
                <p style={{ color: "#8C7B72", fontSize: 12, marginTop: 2 }}>{t("（税込 9,900円/月）")}</p>
              </div>

              {/* 男性 */}
              <div style={{ borderTop: "1px solid rgba(234,165,59,0.25)", paddingTop: 14 }}>
                <p style={{ color: "#D99A40", fontSize: 11, fontWeight: 800, letterSpacing: "0.14em", marginBottom: 3 }}>{t("男性フルタイム")}</p>
                <div className="flex items-baseline gap-2">
                  <span style={{ color: "#A99C92", fontSize: "clamp(15px,1.8vw,20px)", fontWeight: 700 }}>{t("通常")}</span>
                  <span style={{ color: "#A99C92", fontSize: "clamp(18px,2.2vw,26px)", fontWeight: 800, textDecoration: "line-through" }}>{t("13,200円")}</span>
                  <span style={{ color: "#A99C92", fontSize: "clamp(15px,1.8vw,20px)", fontWeight: 700 }}>{t("が")}</span>
                </div>
                <div className="flex items-baseline gap-2 mt-0.5">
                  <span style={{ color: "#3D3530", fontSize: "clamp(16px,1.8vw,20px)", fontWeight: 700 }}>{t("ずっと")}</span>
                  <span style={{ color: "#D99A40", fontSize: "clamp(32px,4.2vw,50px)", fontWeight: 900, lineHeight: 1, fontFamily: "Oswald, sans-serif" }}>{t("11,000円")}</span>
                  <span style={{ color: "#3D3530", fontSize: "clamp(14px,1.4vw,17px)", fontWeight: 700 }}>{t("で通い放題！")}</span>
                </div>
                <p style={{ color: "#8C7B72", fontSize: 12, marginTop: 2 }}>{t("（税込 12,100円/月）")}</p>
              </div>

              <p style={{ color: "#A99C92", fontSize: 11, marginTop: 14, textAlign: "center" }}>{t("継続縛りなし・いつでも退会可")}</p>
            </div>
          </motion.div>

        </motion.div>

        {/* 女性限定 3回体験キャンペーン */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="rounded-3xl overflow-hidden mb-6 w-full"
          style={{ background: "#ffffff", border: "2.5px solid #C9457A", boxShadow: "0 14px 40px -16px rgba(155,44,85,0.4)", position: "relative" }}
        >
          <div style={{ position: "absolute", top: 16, right: -42, transform: "rotate(45deg)", background: "linear-gradient(90deg,#9B2C55,#C9457A)", color: "#fff", fontSize: 11, fontWeight: 900, letterSpacing: "0.1em", padding: "5px 44px", boxShadow: "0 4px 10px -3px rgba(0,0,0,0.3)", zIndex: 2 }}>
            {t("女性限定")}
          </div>
          <div className="px-6 pt-6 pb-6 text-center" style={{ background: "linear-gradient(135deg, #9B2C55 0%, #C9457A 100%)" }}>
            <div className="flex flex-wrap items-center justify-center gap-2 mb-3">
              <span style={{ background: "#ffffff", color: "#9B2C55", fontSize: 12, fontWeight: 900, padding: "4px 14px", borderRadius: 999, letterSpacing: "0.04em" }}>{t("🗓 9月・10月限定")}</span>
              <span style={{ background: "#ffffff", color: "#9B2C55", fontSize: 12, fontWeight: 900, padding: "4px 14px", borderRadius: 999, letterSpacing: "0.04em" }}>{t("👩 女性限定")}</span>
            </div>
            <p style={{ color: "#ffffff", fontSize: "clamp(20px,3vw,26px)", fontWeight: 800, letterSpacing: "0.02em" }}>{t("じっくり通える")}</p>
            <div className="flex items-baseline justify-center gap-2" style={{ marginTop: 4 }}>
              <span style={{ color: "#ffffff", fontSize: "clamp(28px,4vw,38px)", fontWeight: 900, fontFamily: "Oswald, sans-serif" }}>{t("3回体験")}</span>
              <span style={{ color: "#ffffff", fontSize: "clamp(38px,6vw,58px)", fontWeight: 900, fontFamily: "Oswald, sans-serif", textShadow: "0 2px 8px rgba(80,20,45,0.3)" }}>¥3,300</span>
            </div>
            <p style={{ color: "#ffffff", fontSize: "clamp(15px,2vw,18px)", fontWeight: 800, marginTop: 10 }}>{t("ご入会いただくと全額返金！")}</p>
          </div>
          <p style={{ color: "#A99C92", fontSize: 11, padding: "14px 20px", textAlign: "center" }}>{t("※入会後、体験料3,300円を全額返金いたします。")}</p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="opening-offer-section__value"
        >
          <p className="opening-offer-section__value-label">{t("入会月の節約額")}</p>
          <p className="opening-offer-section__value-main">{t("最大 15,000円〜")}</p>
          <p className="opening-offer-section__value-sub">{t("＋月会費永久割引が継続します")}</p>
        </motion.div>

        {/* DEEPスタンダード会員 — 縛りなし・通常料金（銅） */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="rounded-3xl overflow-hidden mb-6 w-full"
          style={{ background: "#ffffff", border: "2.5px solid #C08A55", boxShadow: "0 14px 40px -16px rgba(168,116,74,0.35)" }}
        >
          <div className="flex flex-col sm:flex-row">
            {/* 左：プラン名 */}
            <div
              className="px-6 py-6 flex flex-col items-center justify-center text-center sm:w-[42%]"
              style={{ background: "linear-gradient(160deg, #D9A873 0%, #A9744A 100%)" }}
            >
              <span style={{ background: "#ffffff", color: "#8B5E34", fontSize: 12, fontWeight: 900, padding: "4px 16px", borderRadius: 7, letterSpacing: "0.06em" }}>🥉 {t("スタンダードコース")}</span>
              <p style={{ color: "#ffffff", fontSize: 13, fontWeight: 700, marginTop: 14, letterSpacing: "0.04em" }}>{t("＼ 縛りなしで気軽に ／")}</p>
              <p style={{ color: "#ffffff", fontSize: "clamp(34px,5vw,50px)", fontWeight: 900, fontFamily: "Oswald, sans-serif", lineHeight: 1, marginTop: 4, letterSpacing: "0.01em", textShadow: "0 2px 8px rgba(80,50,20,0.25)" }}>DEEP Standard</p>
              <p style={{ color: "#ffffff", fontSize: "clamp(18px,2.4vw,22px)", fontWeight: 900, marginTop: 2 }}>{t("DEEPスタンダード会員")}</p>
            </div>

            {/* 右：料金 */}
            <div className="flex-1 px-6 py-6">
              <div className="mb-3">
                <p style={{ color: "#B08256", fontSize: 11, fontWeight: 800, letterSpacing: "0.12em", marginBottom: 4 }}>{t("フルタイム")}</p>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <p style={{ color: "#B08256", fontSize: 10, fontWeight: 700, marginBottom: 1 }}>{t("男性")}</p>
                    <div className="flex items-baseline gap-1">
                      <span style={{ color: "#3D3530", fontSize: "clamp(24px,3.2vw,32px)", fontWeight: 900, fontFamily: "Oswald, sans-serif", lineHeight: 0.9 }}>12,000</span>
                      <span style={{ color: "#6B5D54", fontSize: 12, fontWeight: 700 }}>{t("円/月")}</span>
                    </div>
                    <p style={{ color: "#8C7B72", fontSize: 10, marginTop: 1 }}>{t("（税込 13,200円/月）")}</p>
                  </div>
                  <div>
                    <p style={{ color: "#B08256", fontSize: 10, fontWeight: 700, marginBottom: 1 }}>{t("女性")}</p>
                    <div className="flex items-baseline gap-1">
                      <span style={{ color: "#3D3530", fontSize: "clamp(24px,3.2vw,32px)", fontWeight: 900, fontFamily: "Oswald, sans-serif", lineHeight: 0.9 }}>10,000</span>
                      <span style={{ color: "#6B5D54", fontSize: 12, fontWeight: 700 }}>{t("円/月")}</span>
                    </div>
                    <p style={{ color: "#8C7B72", fontSize: 10, marginTop: 1 }}>{t("（税込 11,000円/月）")}</p>
                  </div>
                </div>
              </div>
              <div style={{ borderTop: "1px solid rgba(192,138,85,0.3)", paddingTop: 12 }}>
                <p style={{ color: "#B08256", fontSize: 11, fontWeight: 800, letterSpacing: "0.12em", marginBottom: 4 }}>{t("月8回")}</p>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <p style={{ color: "#B08256", fontSize: 10, fontWeight: 700, marginBottom: 1 }}>{t("男性")}</p>
                    <div className="flex items-baseline gap-1">
                      <span style={{ color: "#3D3530", fontSize: "clamp(24px,3.2vw,32px)", fontWeight: 900, fontFamily: "Oswald, sans-serif", lineHeight: 0.9 }}>10,000</span>
                      <span style={{ color: "#6B5D54", fontSize: 12, fontWeight: 700 }}>{t("円/月")}</span>
                    </div>
                    <p style={{ color: "#8C7B72", fontSize: 10, marginTop: 1 }}>{t("（税込 11,000円/月）")}</p>
                  </div>
                  <div>
                    <p style={{ color: "#B08256", fontSize: 10, fontWeight: 700, marginBottom: 1 }}>{t("女性")}</p>
                    <div className="flex items-baseline gap-1">
                      <span style={{ color: "#3D3530", fontSize: "clamp(24px,3.2vw,32px)", fontWeight: 900, fontFamily: "Oswald, sans-serif", lineHeight: 0.9 }}>8,000</span>
                      <span style={{ color: "#6B5D54", fontSize: 12, fontWeight: 700 }}>{t("円/月")}</span>
                    </div>
                    <p style={{ color: "#8C7B72", fontSize: 10, marginTop: 1 }}>{t("（税込 8,800円/月）")}</p>
                  </div>
                </div>
              </div>
              <p style={{ color: "#A99C92", fontSize: 11, marginTop: 12, lineHeight: 1.5 }}>{t("※継続の縛りはありません。いつでも退会可能です。")}</p>
            </div>
          </div>
        </motion.div>

        {/* DEEPライト会員 — 半年継続でキャンペーン価格を維持（銀） */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="rounded-3xl overflow-hidden mb-6 w-full"
          style={{ background: "#ffffff", border: "2.5px solid #ABB4BC", boxShadow: "0 14px 40px -16px rgba(91,107,122,0.35)" }}
        >
          <div className="flex flex-col sm:flex-row">
            {/* 左：プラン名 */}
            <div
              className="px-6 py-6 flex flex-col items-center justify-center text-center sm:w-[42%]"
              style={{ background: "linear-gradient(160deg, #C4CBD1 0%, #97A1AA 100%)" }}
            >
              <span style={{ background: "#ffffff", color: "#5C6670", fontSize: 12, fontWeight: 900, padding: "4px 16px", borderRadius: 7, letterSpacing: "0.06em" }}>🥈 {t("続けやすい！")}</span>
              <p style={{ color: "#ffffff", fontSize: 13, fontWeight: 700, marginTop: 14, letterSpacing: "0.04em" }}>{t("＼ 半年以上継続するなら ／")}</p>
              <p style={{ color: "#ffffff", fontSize: "clamp(34px,5vw,50px)", fontWeight: 900, fontFamily: "Oswald, sans-serif", lineHeight: 1, marginTop: 4, letterSpacing: "0.01em", textShadow: "0 2px 8px rgba(50,60,70,0.2)" }}>DEEP Light</p>
              <p style={{ color: "#ffffff", fontSize: "clamp(18px,2.4vw,22px)", fontWeight: 900, marginTop: 2 }}>{t("DEEPライト会員")}</p>
            </div>

            {/* 右：料金 */}
            <div className="flex-1 px-6 py-6">
              <div className="mb-3">
                <p style={{ color: "#7B8894", fontSize: 11, fontWeight: 800, letterSpacing: "0.14em", marginBottom: 2 }}>{t("男性フルタイム")}</p>
                <div className="flex items-baseline gap-1.5">
                  <span style={{ color: "#3D3530", fontSize: "clamp(40px,5.5vw,58px)", fontWeight: 900, fontFamily: "Oswald, sans-serif", lineHeight: 0.9 }}>11,000</span>
                  <span style={{ color: "#6B5D54", fontSize: 16, fontWeight: 700 }}>{t("円/月")}</span>
                </div>
                <p style={{ color: "#8C7B72", fontSize: 12, marginTop: 2 }}>{t("（税込 12,100円/月）")}</p>
              </div>
              <div style={{ borderTop: "1px solid rgba(151,161,170,0.3)", paddingTop: 12 }}>
                <p style={{ color: "#7B8894", fontSize: 11, fontWeight: 800, letterSpacing: "0.14em", marginBottom: 2 }}>{t("女性フルタイム")}</p>
                <div className="flex items-baseline gap-1.5">
                  <span style={{ color: "#3D3530", fontSize: "clamp(40px,5.5vw,58px)", fontWeight: 900, fontFamily: "Oswald, sans-serif", lineHeight: 0.9 }}>9,000</span>
                  <span style={{ color: "#6B5D54", fontSize: 16, fontWeight: 700 }}>{t("円/月")}</span>
                </div>
                <p style={{ color: "#8C7B72", fontSize: 12, marginTop: 2 }}>{t("（税込 9,900円/月）")}</p>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 16 }}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 5, background: "#97A1AA", color: "#ffffff", fontSize: 13, fontWeight: 800, padding: "6px 14px", borderRadius: 999 }}>
                  <span style={{ fontSize: 12 }}>✓</span>{t("入会金無料")}
                </span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 5, background: "#97A1AA", color: "#ffffff", fontSize: 13, fontWeight: 800, padding: "6px 14px", borderRadius: 999 }}>
                  <span style={{ fontSize: 12 }}>✓</span>{t("翌月会費無料")}
                </span>
              </div>
              <p style={{ color: "#A99C92", fontSize: 11, marginTop: 12, lineHeight: 1.5 }}>{t("※半年以上の継続を前提としたプランです。")}</p>
            </div>
          </div>
        </motion.div>

        {/* DEEPプラス会員 — 1番お得なプランを打ち出し（金） */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="rounded-3xl overflow-hidden mb-6 w-full"
          style={{ background: "#ffffff", border: "2.5px solid #EAA53B", boxShadow: "0 14px 40px -16px rgba(234,165,59,0.5)" }}
        >
          <div className="flex flex-col sm:flex-row">
            {/* 左：プラン名 */}
            <div
              className="px-6 py-6 flex flex-col items-center justify-center text-center sm:w-[42%]"
              style={{ background: "linear-gradient(160deg, #F5C96A 0%, #EAA53B 100%)" }}
            >
              <span style={{ background: "#ffffff", color: "#B9791B", fontSize: 12, fontWeight: 900, padding: "4px 16px", borderRadius: 7, letterSpacing: "0.06em" }}>🥇 {t("1番お得！")}</span>
              <p style={{ color: "#ffffff", fontSize: 13, fontWeight: 700, marginTop: 14, letterSpacing: "0.04em" }}>{t("＼ 1年以上継続するなら ／")}</p>
              <p style={{ color: "#ffffff", fontSize: "clamp(34px,5vw,50px)", fontWeight: 900, fontFamily: "Oswald, sans-serif", lineHeight: 1, marginTop: 4, letterSpacing: "0.01em", textShadow: "0 2px 8px rgba(120,70,0,0.18)" }}>DEEP+</p>
              <p style={{ color: "#ffffff", fontSize: "clamp(18px,2.4vw,22px)", fontWeight: 900, marginTop: 2 }}>{t("DEEPプラス会員")}</p>
            </div>

            {/* 右：料金 */}
            <div className="flex-1 px-6 py-6">
              <div className="mb-3">
                <p style={{ color: "#D99A40", fontSize: 11, fontWeight: 800, letterSpacing: "0.14em", marginBottom: 2 }}>{t("男性フルタイム")}</p>
                <div className="flex items-baseline gap-1.5">
                  <span style={{ color: "#3D3530", fontSize: "clamp(40px,5.5vw,58px)", fontWeight: 900, fontFamily: "Oswald, sans-serif", lineHeight: 0.9 }}>9,000</span>
                  <span style={{ color: "#6B5D54", fontSize: 16, fontWeight: 700 }}>{t("円/月")}</span>
                </div>
                <p style={{ color: "#8C7B72", fontSize: 12, marginTop: 2 }}>{t("（税込 9,900円/月）")}</p>
              </div>
              <div style={{ borderTop: "1px solid rgba(234,165,59,0.3)", paddingTop: 12 }}>
                <p style={{ color: "#D99A40", fontSize: 11, fontWeight: 800, letterSpacing: "0.14em", marginBottom: 2 }}>{t("女性フルタイム")}</p>
                <div className="flex items-baseline gap-1.5">
                  <span style={{ color: "#3D3530", fontSize: "clamp(40px,5.5vw,58px)", fontWeight: 900, fontFamily: "Oswald, sans-serif", lineHeight: 0.9 }}>8,000</span>
                  <span style={{ color: "#6B5D54", fontSize: 16, fontWeight: 700 }}>{t("円/月")}</span>
                </div>
                <p style={{ color: "#8C7B72", fontSize: 12, marginTop: 2 }}>{t("（税込 8,800円/月）")}</p>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 16 }}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 5, background: "#EAA53B", color: "#ffffff", fontSize: 13, fontWeight: 800, padding: "6px 14px", borderRadius: 999 }}>
                  <span style={{ fontSize: 12 }}>✓</span>{t("入会金無料")}
                </span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 5, background: "#EAA53B", color: "#ffffff", fontSize: 13, fontWeight: 800, padding: "6px 14px", borderRadius: 999 }}>
                  <span style={{ fontSize: 12 }}>✓</span>{t("翌月会費無料")}
                </span>
              </div>
              <p style={{ color: "#A99C92", fontSize: 11, marginTop: 12, lineHeight: 1.5 }}>{t("※1年以上の継続を前提としたプランです。")}</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="opening-offer-section__assurance"
        >
          <span>{t("体験料 2,000円 → 無料")}</span>
          <span>{t("入会金 10,000円 → 無料")}</span>
          <span>{t("縛りなし・いつでも退会可")}</span>
          <span>{t("運動初心者の方も歓迎")}</span>
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
            {t("LINEで無料体験を予約する")}
          </a>
          <Link
            href="/contact"
            data-testid="button-home-offer-contact"
            className="opening-offer-section__cta-secondary"
          >{t("ご不安な点などを相談する")}</Link>
          <p className="opening-offer-section__cta-note">{t("返信は営業時間内に順次対応")}</p>
        </motion.div>
      </div>
    </section>
  );
}

export default function Home() {
  const t = useT();
  const heroRef = useRef<HTMLDivElement>(null);
  const videoRefA = useRef<HTMLVideoElement>(null);
  const videoRefB = useRef<HTMLVideoElement>(null);

  const [activeSlot, setActiveSlot] = useState<'a' | 'b'>('a');
  const [slotSrc, setSlotSrc] = useState({
    a: heroPlaylist[0],
    b: heroPlaylist[1],
  });
  const currentIndexRef = useRef(0);

  useEffect(() => {
    const refA = videoRefA.current;
    if (refA) refA.play().catch(() => {});
  }, []);

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

  return (
    <>
      <SEO title={seoConfig.pages.home.title} description={seoConfig.pages.home.description} path="/" />
      <ScrollProgress />
      {/* Hero Section */}
      <section className="hero-v2" ref={heroRef}>
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

        <div className="hero-v2__overlay" />

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

        <div className="hero-v2__inner hero-v2__inner--balanced">
          <motion.div
            className="hero-v2__brand"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          >
            <span className="hero-v2__logo text-[16px]">{t("DEEP.FIT｜JR尼崎駅徒歩10分のサーキットトレーニング×キックボクシングジム")}</span>
          </motion.div>

          <motion.div
            className="hero-v2__labels"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          >
            <span className="hero-v2__label">{t("はじめてでも安心")}</span>
            <span className="hero-v2__label">{t("女性が多く通うジム")}</span>
            <span className="hero-v2__label">{t("まずは気楽に体験から")}</span>
          </motion.div>

          <motion.div
            className="hero-v2__strip hero-v2__strip--main"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          >
            <h1 data-testid="text-hero-headline">
              <span className="sr-only">{t("DEEP.FIT（ディープフィット）｜JR尼崎駅徒歩10分のキックボクシング・サーキットトレーニングジム")}</span>
              <span aria-hidden="true">{t("楽しいから続く。")}</span>
              <span aria-hidden="true">{t("続くから変わる。")}</span>
            </h1>
          </motion.div>

          <div className="hero-variants">
            <motion.div
              className="hero-v2__subcopy"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.42, duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              data-testid="text-hero-subheadline"
            >
              <p>
                {t("運動が久しぶりの方も多く通っています。")}<br />
                {t("体を動かして、気分まで軽くなる時間を。")}
              </p>
            </motion.div>
          </div>

          <motion.div
            className="hero-v2__cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.52, duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          >
            <a
              href={gymConfig.sns.line}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-v2__cta-btn"
              data-testid="button-line-cta"
            >
              <SiLine style={{ width: 18, height: 18, flexShrink: 0 }} />
              {t("LINEで無料体験予約")}
            </a>
            <p className="hero-v2__cta-note ml-[0px] mr-[0px]">{t("見学・体験だけでも大歓迎です！")}</p>
          </motion.div>
        </div>
      </section>

      <OpeningOfferSection />

      {/* LINE Consult Section — キャンペーン直後の動線 */}
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
                {t("自分に合うか不安な方は、")}<br />{t("まずはLINEでご相談ください")}
              </h2>
              <p className="text-white/80 mb-6 leading-relaxed text-sm sm:text-base">
                {t("見学だけ、体験だけ、空き枠確認だけでも大丈夫です。")}<br />
                {t("運動が久しぶりの方もお気軽にご相談ください。")}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {["無理な勧誘なし", "見学だけでもOK", "初心者歓迎", "一人参加OK"].map((chip, i) => (
                  <span key={i} className="bg-white/15 border border-white/20 text-white/90 text-xs px-3 py-1.5 rounded-full">{t(chip)}</span>
                ))}
              </div>

              <div className="flex">
                <a
                  href={gymConfig.sns.line}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="button-line-add"
                  className="inline-flex items-center justify-center gap-2 bg-white text-[#06C755] font-bold px-7 py-3 rounded-full text-sm transition-all duration-200 hover:scale-105 shadow-lg"
                >
                  <SiLine className="w-5 h-5" />
                  {t("LINEで無料体験を予約する")}
                </a>
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
                      <p className="text-white/70 text-xs">{t("公式アカウント")}</p>
                    </div>
                  </div>
                  <div className="space-y-3 px-1">
                    <div className="flex justify-center">
                      <span className="bg-black/10 text-[#333]/50 text-[10px] px-3 py-0.5 rounded-full">{t("今日")}</span>
                    </div>
                    <div className="flex justify-end">
                      <div className="bg-[#06C755] text-white text-xs px-3 py-2 rounded-2xl rounded-tr-sm max-w-[78%]">
                        {t("体験予約したいです！")}
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center shrink-0 mt-1 shadow-sm overflow-hidden">
                        <img src={deepFitLogo} alt="DEEP.FIT" className="w-full h-full object-contain p-0.5" />
                      </div>
                      <div className="bg-white text-[#333] text-xs px-3 py-2.5 rounded-2xl rounded-tl-sm max-w-[85%] leading-relaxed shadow-sm space-y-1">
                        <p>{t("初めまして、ご連絡ありがとうございます😊✨")}</p>
                        <p>{t("体験のご予約ですね！ご希望の日時はありますか？😆")}</p>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <div className="bg-[#06C755] text-white text-xs px-3 py-2 rounded-2xl rounded-tr-sm max-w-[78%]">
                        {t("土曜の17時は空いてますか？")}
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center shrink-0 mt-1 shadow-sm overflow-hidden">
                        <img src={deepFitLogo} alt="DEEP.FIT" className="w-full h-full object-contain p-0.5" />
                      </div>
                      <div className="bg-white text-[#333] text-xs px-3 py-2.5 rounded-2xl rounded-tl-sm max-w-[85%] leading-relaxed shadow-sm space-y-1">
                        <p>{t("土曜17時〜、空いております✨😊")}</p>
                        <p>{t("そちらでご予約承りますね！🙆‍♀️")}</p>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <div className="bg-[#06C755] text-white text-xs px-3 py-2 rounded-2xl rounded-tr-sm max-w-[78%]">
                        {t("よろしくお願いします🙇‍♀️")}
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center shrink-0 mt-1 shadow-sm overflow-hidden">
                        <img src={deepFitLogo} alt="DEEP.FIT" className="w-full h-full object-contain p-0.5" />
                      </div>
                      <div className="bg-white text-[#333] text-xs px-3 py-2.5 rounded-2xl rounded-tl-sm max-w-[85%] leading-relaxed shadow-sm space-y-1">
                        <p>{t("土曜17時でご予約承りました😊🎉 体験は無料です！")}</p>
                        <p>{t("当日は動きやすい服装とお飲み物だけでOKです👟💧")}</p>
                        <p>{t("ご質問等ありましたらお気軽にお声掛けくださいね😊 お待ちしています🥊")}</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 bg-white/60 rounded-full px-4 py-2 flex items-center gap-2">
                    <MessageCircle className="w-4 h-4 text-[#06C755]/60" />
                    <p className="text-[#333]/40 text-xs">{t("メッセージを入力...")}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

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
            <h2 className="text-3xl sm:text-4xl font-bold text-[#4D5058]">{t("目的に合わせて選べるクラス")}</h2>
            <p className="text-[#4D5058]/60 text-sm mt-3">{t("どんな目的でも、合うトレーニングが見つかります")}</p>
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
                      alt={t(cls.alt)}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-[1.06]"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#4D5058]/28 to-[#4D5058]/82" />
                  <div className="absolute top-4 left-4 flex flex-wrap gap-1.5">
                    <span className="text-[10px] tracking-wider font-medium bg-[#F0A93A] text-white px-3 py-1 rounded-full uppercase">
                      {t(cls.level)}
                    </span>
                    {cls.beginnerOk && (
                      <span className="text-[10px] tracking-wider font-medium bg-white/20 text-white px-2.5 py-1 rounded-full backdrop-blur-sm">
                        {t("初心者OK")}
                      </span>
                    )}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white/50 text-xs tracking-[0.2em] uppercase mb-1">{cls.subtitle}</p>
                    <h3 className="text-white font-bold text-xl mb-2">{t(cls.title)}</h3>
                    <p className="text-white/70 text-xs leading-relaxed mb-3">{t(cls.description)}</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-[10px] bg-white/10 text-white/80 px-2 py-0.5 rounded-full border border-white/10">{t(cls.target)}</span>
                      <span className="text-[10px] bg-white/10 text-white/80 px-2 py-0.5 rounded-full border border-white/10">{t(cls.duration)}</span>
                      <span className="text-[10px] bg-white/10 text-white/80 px-2 py-0.5 rounded-full border border-white/10">
                        {t("強度")}{"★".repeat(cls.intensity)}{"☆".repeat(3 - cls.intensity)}
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
              className="inline-flex items-center gap-2 bg-[#F2AC55] text-white px-8 py-3 rounded-full text-sm font-bold hover:bg-[#D99A40] transition-colors duration-200 shadow-md"
            >
              {t("全てのクラスを見る")} <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
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
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{t("まずは無料体験からお試しください")}</h2>
          <p className="text-white/80 mb-8 leading-relaxed text-sm sm:text-base">
            {t("ジムの雰囲気や通いやすさを、実際に見てから判断していただけます。")}
          </p>

          <div className="final-cta-section__info">
            <div className="final-cta-section__info-item">
              <span className="final-cta-section__info-label">{t("体験料")}</span>
              <span className="final-cta-section__info-value">{t("無料")}</span>
            </div>
            <div className="final-cta-section__info-item">
              <span className="final-cta-section__info-label">{t("持ち物")}</span>
              <span className="final-cta-section__info-value">{t("動きやすい服装だけ")}</span>
            </div>
            <div className="final-cta-section__info-item">
              <span className="final-cta-section__info-label">{t("見学")}</span>
              <span className="final-cta-section__info-value">{t("見学だけでもOK")}</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {["無理な勧誘なし", "おひとり様歓迎", "運動初心者の方も安心"].map((chip, i) => (
              <span key={i} className="bg-white/15 border border-white/25 text-white/90 text-xs px-3 py-1.5 rounded-full">{t(chip)}</span>
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
              {t("無料体験を予約する")}
            </a>
            <Link
              href="/contact"
              data-testid="button-contact-cta"
              className="border-2 border-white/60 text-white px-8 py-3 rounded-full text-base font-medium hover:bg-white/10 transition-all duration-200"
            >
              {t("見学・体験を相談する")}
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  );
}
