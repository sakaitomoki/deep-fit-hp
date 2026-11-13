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

const features = [
  { image: "/images/class-fitness-poster.webp", position: "center 40%", alt: "ジムでバトルロープトレーニングをする会員さん", title: "予約不要の通い放題", text: "フィットネスクラスは事前予約なしで通えます。フルタイム会員は通い放題で、その日の気分で好きなだけ。" },
  { image: "/images/gym-atmosphere-ropes.webp", position: "center", alt: "真剣な表情でトレーニングに取り組む女性", title: "女性・初心者も安心", text: "運動が久しぶりの方、はじめての方も多数。ペースに合わせて無理なく始められます。" },
  { title: "20代〜70代の方が通っています", text: "幅広い世代の方が、それぞれのペースで一緒に汗を流しています。" },
];

const worries = [
  { image: "/images/ig-reel-rope-blue.webp", position: "center 18%", alt: "笑顔でバトルロープに取り組む女性", title: "運動が続かなくて…", text: "動きに変化があるサーキットとミット打ちで、飽きずに通えます。『楽しい』が続ける理由になります。" },
  { image: "/images/gym-kickboxing-woman.webp", position: "center", alt: "グローブをつけてミット打ちをする女性", title: "格闘技って怖そう…", text: "ミットやサンドバッグを打つ爽快なトレーニングが中心です。グローブは無料でお貸しします。" },
  { image: "/images/ig-reel-box-puma.webp", position: "center 20%", alt: "笑顔で構える会員さん", title: "ひとりで行くのは心細い…", text: "おひとりで通う方がたくさんいます。会員さん同士の雰囲気が良く、初めてでも馴染みやすいジムです。" },
  { image: "/images/ig-reel-yoga-stretch.webp", position: "center 28%", alt: "ゆったりとストレッチをする女性", title: "体力に自信がない…", text: "一人ひとりのレベルに合わせて動きを調整できます。無理のない強度から、少しずつステップアップ。" },
];

const conceptCards = [
  { image: "/images/ig-reel-kick-yellow.webp", position: "center 28%", alt: "グローブをつけてパンチを打ち込む女性", title: "キックボクシング", text: "パンチ・キックをミットやサンドバッグに打ち込む爽快感。ストレス発散にも。" },
  { image: "/images/ig-reel-medball-pink.webp", position: "center 18%", alt: "メディシンボールを持ってトレーニングする女性", title: "ファンクショナルトレーニング", text: "バトルロープやメディシンボールなどを使い、日常動作につながる全身の動きを鍛えます。" },
];

const whoCards = [
  { title: "ダイエット・ボディメイク中の方", text: "サーキットで全身を動かして、メリハリのあるカラダづくりを。" },
  { title: "仕事や育児で忙しい方", text: "フィットネスクラスは予約不要だから、空いた時間にふらっと。ストレス発散にもぴったり。" },
  { title: "シニアの方", text: "フォームや動きを確認しながら、ご自分のペースで。体力づくり・運動習慣づくりに。", note: "※体調に不安のある方は、事前にご相談ください。" },
];

const planChecks = [
  "フィットネスクラスは事前予約なしで通えます",
  "フルタイム会員は全時間帯・全クラス受け放題",
  "グローブ無料貸出・更衣室完備",
  "縛りなしで始められるスタンダードコースあり（継続でお得になる会員プランもあります）",
];

const flowSteps = [
  { image: "/images/class-circuit.webp", position: "center 22%", alt: "ミットに向かってパンチを打つ女性", title: "LINEで体験予約", text: "ご希望の日時をLINEで送るだけ。見学・相談だけでもOKです。" },
  { image: "/images/class-circuit-kick.webp", position: "center 8%", alt: "サーキットトレーニングで蹴りを出す女性", title: "体験レッスン", text: "サーキットやミット打ちを、ご自分のペースで体験できます。" },
  { image: "/images/class-personal-squat.webp", position: "center 30%", alt: "バーベルスクワットに取り組む女性", title: "ご入会（任意）", text: "体験後、当日入会でキャンペーンが適用されます。無理な勧誘はありません。" },
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
  "スキーエルゴ",
  "スレッドプッシュ",
  "スレッドプル",
  "ローエルゴ",
  "サンドバックランジ",
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
                {feature.image && (
                  <img
                    src={feature.image}
                    alt={t(feature.alt)}
                    loading="lazy"
                    className="w-full aspect-[4/3] object-cover"
                    style={{ objectPosition: feature.position }}
                  />
                )}
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
              <motion.div key={worry.title} variants={fadeInUp} className="bg-white rounded-md overflow-hidden border border-gray-100 shadow-sm">
                <img
                  src={worry.image}
                  alt={t(worry.alt)}
                  loading="lazy"
                  className="w-full aspect-[4/3] object-cover"
                  style={{ objectPosition: worry.position }}
                />
                <div className="p-6">
                  <h3 className="relative bg-[#FAF5EE] rounded-md p-4 mb-6 font-bold text-[#4D5058] after:absolute after:left-6 after:-bottom-2 after:w-4 after:h-4 after:rotate-45 after:bg-[#FAF5EE]">{t(worry.title)}</h3>
                  <p className="text-[#4D5058]/70 text-sm sm:text-base leading-relaxed">{t(worry.text)}</p>
                </div>
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
                <motion.div variants={fadeInUp} className="flex-1 min-w-0 bg-white rounded-md overflow-hidden border border-gray-100 shadow-sm">
                  <img
                    src={card.image}
                    alt={t(card.alt)}
                    loading="lazy"
                    className="w-full aspect-[4/3] object-cover"
                    style={{ objectPosition: card.position }}
                  />
                  <div className="p-6">
                    <h3 className="font-bold text-[#4D5058] text-xl mb-4">{t(card.title)}</h3>
                    <p className="text-[#4D5058]/70 text-sm sm:text-base leading-relaxed">{t(card.text)}</p>
                  </div>
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
          <motion.ol initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {flowSteps.map((step, i) => (
              <motion.li key={step.title} variants={fadeInUp} className="bg-white rounded-md overflow-hidden border border-gray-100 shadow-sm">
                {step.image && (
                  <img
                    src={step.image}
                    alt={t(step.alt)}
                    loading="lazy"
                    className="w-full aspect-[4/3] object-cover"
                    style={{ objectPosition: step.position }}
                  />
                )}
                <div className="p-6">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#F2AC55]/10 text-[#D99A40] text-lg font-bold mb-4">{i + 1}</span>
                  <h3 className="font-bold text-[#4D5058] text-lg mb-3">{t(step.title)}</h3>
                  <p className="text-[#4D5058]/70 text-sm sm:text-base leading-relaxed">{t(step.text)}</p>
                </div>
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
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
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
          </div>
        </div>
      </section>
      {/* Facilities */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
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
    </>
  );
}
