import { Fragment } from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { SiLine } from "react-icons/si";
import { Link } from "wouter";
import SEO from "@/components/SEO";
import { seoConfig, gymConfig } from "@/lib/gymConfig";
import { useT } from "@/lib/i18n";

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

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};

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
    image: "/images/gym-atmosphere-ropes.webp",
    alt: "会員同士が楽しくトレーニングするDEEP.FITの雰囲気",
  },
  {
    id: 4,
    tag: "STYLE",
    title: "集中したい日も、\n楽しく動きたい日も、どちらも選べます",
    body: "一人で黙々と打ち込みたい日も、\n他のメンバーと楽しく身体を動かしたい日も、\nその日の気分や目的に合わせて通いやすいジムです。",
    image: "/images/class-circuit-kick.webp",
    alt: "DEEP.FITのサーキットトレーニングクラスの様子",
    imagePosition: "50% 0%",
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
        <img
          src={card.image}
          alt={t(card.alt)}
          className="reasons-card__img"
          loading="lazy"
          style={"imagePosition" in card ? { objectPosition: (card as { imagePosition: string }).imagePosition } : undefined}
        />
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
          <span className="reasons-section__eyebrow">WHY DEEP.FIT</span>
          <h2 className="reasons-section__title">
            {t("選ばれる")}<br />{t("理由")}
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
          <a href={gymConfig.sns.line} target="_blank" rel="noopener noreferrer" className="reasons-cta__text-link" data-testid="link-reasons-contact">{t("ご不安な点などの相談はこちら →")}</a>
        </motion.div>
      </div>
    </section>
  );
}

const faqItems = [
  {
    q: "予約は必要ですか？",
    aLead: "フィットネスクラスは、事前予約なしで通えます。",
    aBody: "体験レッスンとパーソナルトレーニングはご予約制です。LINEからお気軽にご連絡ください。",
  },
  {
    q: "60代でも通えますか？",
    aLead: "はい。60代の方も通っています。",
    aBody: "ご自分のペースで動けるよう、強度を調整しながら進められます。体調面で心配なことがあれば、事前にLINEでご相談ください。",
  },
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

const features = [
  { image: "/images/class-fitness-poster.webp", position: "center 40%", alt: "ジムでバトルロープトレーニングをする会員さん", title: "予約不要の通い放題", text: "フィットネスクラスは事前予約なしで通えます。フルタイム会員は通い放題で、その日の気分で好きなだけ。" },
  { image: "/images/gym-atmosphere-ropes.webp", position: "center", alt: "真剣な表情でトレーニングに取り組む女性", title: "女性・初心者も安心", text: "運動が久しぶりの方、はじめての方も多数。ペースに合わせて無理なく始められます。" },
  { image: "/images/program-card-yoga.webp", position: "center 25%", alt: "笑顔でストレッチをする女性", title: "60代の方も通っています", text: "幅広い世代の方が通っていて、60代の方も一緒に汗を流しています。" },
];

const worries = [
  { title: "運動が続かなくて…", text: "動きに変化があるサーキットとミット打ちで、飽きずに通えます。『楽しい』が続ける理由になります。" },
  { title: "格闘技って怖そう…", text: "ミットやサンドバッグを打つ爽快なトレーニングが中心です。グローブは無料でお貸しします。" },
  { title: "ひとりで行くのは心細い…", text: "おひとりで通う方がたくさんいます。会員さん同士の雰囲気が良く、初めてでも馴染みやすいジムです。" },
  { title: "体力に自信がない…", text: "一人ひとりのレベルに合わせて動きを調整できます。無理のない強度から、少しずつステップアップ。" },
];

const conceptCards = [
  { title: "キックボクシング", text: "パンチ・キックをミットやサンドバッグに打ち込む爽快感。ストレス発散にも。" },
  { title: "ファンクショナルトレーニング", text: "バトルロープやメディシンボールなどを使い、日常動作につながる全身の動きを鍛えます。" },
];

const whoCards = [
  { title: "ダイエット・ボディメイク中の方", text: "サーキットで全身を動かして、メリハリのあるカラダづくりを。" },
  { title: "仕事や育児で忙しい方", text: "フィットネスクラスは予約不要だから、空いた時間にふらっと。ストレス発散にもぴったり。" },
  { title: "60代・シニアの方", text: "フォームや動きを確認しながら、ご自分のペースで。体力づくり・運動習慣づくりに。", note: "※体調に不安のある方は、事前にご相談ください。" },
];

const planChecks = [
  "フィットネスクラスは事前予約なしで通えます",
  "フルタイム会員は全時間帯・全クラス受け放題",
  "グローブ無料貸出・更衣室完備",
  "縛りなしで始められるスタンダードコースあり（継続でお得になる会員プランもあります）",
];

const flowSteps = [
  { title: "LINEで体験予約", text: "ご希望の日時をLINEで送るだけ。見学・相談だけでもOKです。" },
  { title: "動きやすい服装でご来店", text: "タオル・飲み物があると快適です。グローブは無料でお貸しします。" },
  { title: "体験レッスン", text: "サーキットやミット打ちを、ご自分のペースで体験できます。" },
  { title: "ご入会（任意）", text: "体験後、当日入会でキャンペーンが適用されます。無理な勧誘はありません。" },
];

const equipment = [
  "バトルロープ",
  "自走式ランニングマシン",
  "エアロバイク",
  "オールインワンパワーラック",
  "ケトルベル",
  "各種ダンベル",
  "メディシンボール",
  "バーンマシン",
  "キックミット",
  "パンチミット",
  "グローブ無料貸出",
  "更衣室完備",
  "駐輪場ありバイク可",
];

export default function About() {
  const t = useT();
  return (
    <>
      <SEO title={seoConfig.pages.about.title} description={seoConfig.pages.about.description} path="/about" />
      {/* Hero */}
      <div className="relative" style={{ height: "50vh", minHeight: "400px" }}>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/about-hero-boxing.webp')" }} />
        <div className="absolute inset-0 bg-[#4D5058]/75" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-[#F2AC55] text-xs tracking-[0.3em] uppercase mb-3"
          >
            About Us
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="font-display-jp text-[24px] sm:text-[28px] lg:text-[40px] text-white leading-tight"
          >
            <span className="block">{t("キックボクシングフィットネス")}</span>
            <span className="block text-[#F2AC55] text-[0.75em] leading-none my-1.5">×</span>
            <span className="block">{t("ファンクショナルサーキット")}<br className="sm:hidden" />{t("トレーニング")}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-6 max-w-xl text-sm sm:text-base text-white/90 leading-relaxed"
          >
            {t("尼崎で、女性も初心者も、60代の方も。無理なく続けられるジムです。")}
          </motion.p>
        </div>
      </div>

      {/* Features */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {features.map((feature, i) => (
              <motion.div key={feature.title} variants={fadeInUp} className="bg-white rounded-md overflow-hidden border border-gray-100 shadow-sm">
                <img
                  src={feature.image}
                  alt={t(feature.alt)}
                  loading="lazy"
                  className="w-full aspect-[4/3] object-cover"
                  style={{ objectPosition: feature.position }}
                />
                <div className="p-6">
                  <p className="font-heading text-[#F2AC55] text-sm tracking-[0.2em] mb-2">{String(i + 1).padStart(2, "0")}</p>
                  <h2 className="font-bold text-[#4D5058] text-lg mb-3">{t(feature.title)}</h2>
                  <p className="text-[#4D5058]/70 text-sm sm:text-base leading-relaxed">{t(feature.text)}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* For You */}
      <section className="py-20 lg:py-28 bg-[#FAF5EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-14">
            <p className="text-[#F2AC55] text-xs tracking-[0.3em] uppercase mb-3">For You</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#4D5058]">{t("こんな気持ち、")}<br className="sm:hidden" />{t("ありませんか？")}</h2>
            <p className="mt-5 text-[#4D5058]/70 text-sm sm:text-base leading-relaxed">{t("はじめの不安は、みなさん同じです。")}</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {worries.map((worry) => (
              <motion.div key={worry.title} variants={fadeInUp} className="bg-white rounded-md p-6 border border-gray-100">
                <h3 className="relative bg-[#FAF5EE] rounded-md p-4 mb-6 font-bold text-[#4D5058] after:absolute after:left-6 after:-bottom-2 after:w-4 after:h-4 after:rotate-45 after:bg-[#FAF5EE]">{t(worry.title)}</h3>
                <p className="text-[#4D5058]/70 text-sm sm:text-base leading-relaxed">{t(worry.text)}</p>
              </motion.div>
            ))}
          </motion.div>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mt-12 text-center font-medium text-[#4D5058] leading-relaxed">
            {t("『ここに来ると元気になる』そんな場所でありたいと考えています。")}
          </motion.p>
        </div>
      </section>

      {/* Concept */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-14">
            <p className="text-[#F2AC55] text-xs tracking-[0.3em] uppercase mb-3">Concept</p>
            <h2 className="text-[22px] sm:text-4xl font-bold text-[#4D5058] leading-snug">
              {t("キックボクシング ×")}<br className="sm:hidden" />{" "}{t("ファンクショナルトレーニング")}
            </h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="flex flex-col md:flex-row gap-6 items-stretch">
            {conceptCards.map((card, i) => (
              <Fragment key={card.title}>
                <motion.div variants={fadeInUp} className="flex-1 min-w-0 bg-white rounded-md p-6 border border-gray-100">
                  <h3 className="font-bold text-[#4D5058] text-xl mb-4">{t(card.title)}</h3>
                  <p className="text-[#4D5058]/70 text-sm sm:text-base leading-relaxed">{t(card.text)}</p>
                </motion.div>
                {i === 0 && <motion.span variants={scaleIn} className="self-center text-5xl font-bold text-[#F2AC55]">×</motion.span>}
              </Fragment>
            ))}
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mt-8 bg-[#FAF5EE] rounded-md p-6 sm:p-8 text-center text-[#4D5058] font-medium leading-relaxed">
            {t("ふたつを組み合わせたサーキットで、楽しく全身を動かす。新感覚フィットネスです。ダイエット・体力づくり・運動不足の解消に。")}
          </motion.div>
        </div>
      </section>

      {/* Who */}
      <section className="py-20 lg:py-28 bg-[#FAF5EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-14">
            <p className="text-[#F2AC55] text-xs tracking-[0.3em] uppercase mb-3">Who</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#4D5058]">{t("いろんな方が、")}<br className="sm:hidden" />{t("それぞれのペースで")}</h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {whoCards.map((card) => (
              <motion.div key={card.title} variants={fadeInUp} className="bg-white rounded-md p-6 border border-gray-100">
                <h3 className="font-bold text-[#4D5058] text-lg mb-4">{t(card.title)}</h3>
                <p className="text-[#4D5058]/70 text-sm sm:text-base leading-relaxed">{t(card.text)}</p>
                {card.note && <p className="mt-4 text-xs text-[#4D5058]/60 leading-relaxed">{t(card.note)}</p>}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <GymIdentitySection />

      {/* Plan */}
      <section className="py-20 lg:py-28 bg-[#FAF5EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-14">
            <p className="text-[#F2AC55] text-xs tracking-[0.3em] uppercase mb-3">Plan</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#4D5058]">{t("予約不要の通い放題")}</h2>
            <p className="mt-5 text-[#4D5058]/70 text-sm sm:text-base leading-relaxed">{t("月額制。好きな時間に、好きなだけ。")}</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="max-w-3xl mx-auto bg-white rounded-md p-6 sm:p-8 border border-gray-100">
            <ul className="space-y-5">
              {planChecks.map((check) => (
                <motion.li key={check} variants={fadeInUp} className="flex items-start gap-3 text-[#4D5058] text-sm sm:text-base leading-relaxed">
                  <CheckCircle2 className="w-5 h-5 mt-0.5 text-[#F2AC55] shrink-0" aria-hidden="true" />
                  <span>{t(check)}</span>
                </motion.li>
              ))}
            </ul>
            <motion.p variants={fadeInUp} className="mt-6 text-xs sm:text-sm text-[#4D5058]/60 leading-relaxed">{t("※体験レッスンとパーソナルトレーニングはご予約制です。")}</motion.p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link href="/schedule" data-testid="button-plan-schedule" className="inline-flex items-center justify-center bg-[#F2AC55] text-white px-8 py-3 rounded-full text-sm font-bold hover:bg-[#D99A40] transition-colors duration-200 shadow-md">
              {t("料金・クラスを見る")}
            </Link>
            <a href={gymConfig.sns.line} target="_blank" rel="noopener noreferrer" data-testid="button-plan-line" className="inline-flex items-center justify-center gap-2 bg-[#06C755] text-white px-8 py-3 rounded-full text-sm font-bold hover:opacity-90 transition-opacity duration-200 shadow-md">
              <SiLine className="w-5 h-5 shrink-0" aria-hidden="true" />
              {t("LINEで無料体験を予約する")}
            </a>
          </motion.div>
        </div>
      </section>

      {/* Flow */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-14">
            <p className="text-[#F2AC55] text-xs tracking-[0.3em] uppercase mb-3">Flow</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#4D5058]">{t("体験レッスンの流れ")}</h2>
          </motion.div>
          <motion.ol initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {flowSteps.map((step, i) => (
              <motion.li key={step.title} variants={fadeInUp} className="bg-white rounded-md p-6 border border-gray-100">
                <span className="flex items-center justify-center w-12 h-12 rounded-full bg-[#F2AC55]/10 text-[#D99A40] text-xl font-bold mb-5">{i + 1}</span>
                <h3 className="font-bold text-[#4D5058] text-lg mb-3">{t(step.title)}</h3>
                <p className="text-[#4D5058]/70 text-sm sm:text-base leading-relaxed">{t(step.text)}</p>
              </motion.li>
            ))}
          </motion.ol>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mt-10 text-center">
            <a href={gymConfig.sns.line} target="_blank" rel="noopener noreferrer" data-testid="button-flow-line" className="inline-flex items-center justify-center gap-2 bg-[#06C755] text-white px-8 py-3 rounded-full text-sm font-bold hover:opacity-90 transition-opacity duration-200 shadow-md">
              <SiLine className="w-5 h-5 shrink-0" aria-hidden="true" />
              {t("LINEで無料体験を予約する")}
            </a>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}
            >
              <p className="text-[#F2AC55] text-xs tracking-[0.3em] uppercase mb-3">Our Story</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#4D5058] mb-6">{t("ジムの歩み")}</h2>
              <div className="space-y-4 text-[#4D5058]/70 leading-relaxed text-sm sm:text-base">
                <p>{t("DEEP.FITは、2026年4月に尼崎市長洲東通りにオープンしたキックボクシングフィットネスジムです。")}</p>
                <p className="text-[#4D5058] font-medium italic border-l-4 border-[#F2AC55] pl-4 py-1">
                  {t("「運動が苦手でも、楽しく続けられる場所を作りたい」")}<br />
                  {t("そんな想いからこのジムは生まれました。")}
                </p>
                <p>
                  {t("キックボクシングとサーキットトレーニングを組み合わせたプログラムで、効率よく脂肪燃焼しながら、楽しくダイエットができるトレーニングを提供しています。")}
                </p>
                <p>
                  {t("運動初心者の方や女性の方でも、安心して通える環境づくりを大切にしています。無理なく自分のペースでトレーニングできるので、初めての方でも安心です。")}
                </p>
                <p>
                  {t("また、本格的にトレーニングをしたい方のために、パワーラックなどの本格的な設備もご用意しています。")}
                </p>
                <p>
                  {t("ダイエット、体力づくり、ストレス発散まで。あなたの目的に合わせて、楽しく続けられるジムを目指しています。")}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInRight}
              className="relative"
            >
              <img
                src="/images/class-kickboxing.webp"
                alt={t("DEEP.FITでのキックボクシングレッスン風景")}
                loading="lazy"
                width={800}
                height={600}
                className="rounded-md w-full object-cover aspect-[4/3]"
              />
            </motion.div>
          </div>
        </div>
      </section>
      {/* Facilities */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}
            >
              <img
                src="/images/gym-about.webp"
                alt={t("DEEP.FITのトレーニング施設と設備の全景")}
                loading="lazy"
                width={800}
                height={600}
                className="rounded-md w-full object-cover aspect-[4/3]"
              />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInRight}
            >
              <p className="text-[#F2AC55] text-xs tracking-[0.3em] uppercase mb-3">Facilities</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#4D5058] mb-6">{t("施設・設備")}</h2>
              <p className="text-[#4D5058]/60 text-sm mb-6 leading-relaxed">
                {t("快適にトレーニングできる環境を整えています。必要な道具は無料でレンタルできるので、手ぶらでお越しいただけます。")}
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {equipment.map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#F2AC55] shrink-0" />
                    <span className="text-[#4D5058]/80 text-sm">{t(item)}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Access */}
      <section className="py-20 lg:py-28 bg-[#FAF5EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <p className="text-[#F2AC55] text-xs tracking-[0.3em] uppercase mb-3">Access</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#4D5058]">{t("アクセス")}</h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}
              className="space-y-4"
            >
              <div className="bg-white rounded-md p-5 border border-gray-200 shadow-sm">
                <h3 className="text-[#F2AC55] font-semibold mb-2">{t("住所")}</h3>
                <p className="text-[#4D5058]/80 text-sm">{t(gymConfig.address)}</p>
              </div>
              <div className="bg-white rounded-md p-5 border border-gray-200 shadow-sm">
                <h3 className="text-[#F2AC55] font-semibold mb-2">{t("最寄駅")}</h3>
                {gymConfig.access.map((a, i) => (
                  <p key={i} className="text-[#4D5058]/80 text-sm">{t(a)}</p>
                ))}
              </div>
              <div className="bg-white rounded-md p-5 border border-gray-200 shadow-sm">
                <h3 className="text-[#F2AC55] font-semibold mb-2">{t("定休日")}</h3>
                <p className="text-[#4D5058]/80 text-sm">{t(gymConfig.hours.closed)}</p>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInRight}
              className="rounded-md overflow-hidden h-72 bg-gray-200"
            >
              <iframe
                src={gymConfig.googleMapsUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={t("DEEP.FIT 地図")}
              />
            </motion.div>
          </div>
        </div>
      </section>

      <FAQSection />
    </>
  );
}
