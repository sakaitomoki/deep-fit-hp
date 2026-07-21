import { motion } from "framer-motion";
import { Shield, Heart, Target, Flame, CheckCircle2 } from "lucide-react";
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

const values = [
  { icon: Shield, title: "安全第一", text: "怪我のない安全なトレーニング環境を最優先に。インストラクターが常に適切な指導を行います。" },
  { icon: Heart, title: "コミュニティ", text: "会員同士が助け合い、励まし合えるあたたかいコミュニティを大切にしています。" },
  { icon: Target, title: "目標達成", text: "ダイエット、筋力アップ、護身術など、一人ひとりの目標に合わせたプログラムを提供。" },
  { icon: Flame, title: "情熱", text: "格闘技とフィットネスへの情熱を持ったインストラクターが、あなたの成長を全力でサポートします。" },
];

const equipment = [
  "オールインパワーラック",
  "サンドバック 4本",
  "グローブ無料貸出",
  "更衣室完備",
  "ウォーターサーバー",
  "駐車場あり",
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
    </>
  );
}
