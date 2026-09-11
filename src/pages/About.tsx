import { motion } from "framer-motion";
import { Link } from "wouter";
import { Shield, Heart, Target, Flame, CheckCircle2 } from "lucide-react";
import { SiLine } from "react-icons/si";
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
          <Link href="/contact" className="reasons-cta__text-link" data-testid="link-reasons-contact">{t("ご不安な点などの相談はこちら →")}</Link>
        </motion.div>
      </div>
    </section>
  );
}

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

const values = [
  { icon: Shield, title: "安全第一", text: "怪我のない安全なトレーニング環境を最優先に。インストラクターが常に適切な指導を行います。" },
  { icon: Heart, title: "コミュニティ", text: "会員同士が助け合い、励まし合えるあたたかいコミュニティを大切にしています。" },
  { icon: Target, title: "目標達成", text: "ダイエット、筋力アップ、護身術など、一人ひとりの目標に合わせたプログラムを提供。" },
  { icon: Flame, title: "情熱", text: "格闘技とフィットネスへの情熱を持ったインストラクターが、あなたの成長を全力でサポートします。" },
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
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/about-hero-gym.webp')" }} />
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
            className="text-4xl sm:text-5xl font-bold text-white"
          >
            {t("綺麗で広い空間・女性も通いやすい尼崎のキックボクシングジム")}
          </motion.h1>
        </div>
      </div>

      <GymIdentitySection />

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
      {/* Our Values */}
      <section className="py-20 lg:py-28 bg-[#FAF5EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-14"
          >
            <p className="text-[#F2AC55] text-xs tracking-[0.3em] uppercase mb-3">Our Values</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#4D5058]">{t("大切にしていること")}</h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="bg-white rounded-md p-6 text-center border border-gray-100"
                >
                  <div className="w-12 h-12 rounded-full bg-[#F2AC55]/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-[#F2AC55]" />
                  </div>
                  <h3 className="font-bold text-[#4D5058] text-lg mb-2">{t(value.title)}</h3>
                  <p className="text-[#4D5058]/60 text-sm leading-relaxed">{t(value.text)}</p>
                </motion.div>
              );
            })}
          </motion.div>
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
