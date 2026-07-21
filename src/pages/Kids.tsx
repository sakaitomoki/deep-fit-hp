import { motion } from "framer-motion";
import { Sparkles, Users, Heart, Clock, Phone } from "lucide-react";
import { SiLine, SiInstagram } from "react-icons/si";
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

const features = [
  { icon: Sparkles, title: "楽しく体を動かす", text: "キックボクシングの動きを取り入れながら、楽しみながら体を動かせるプログラムです。" },
  { icon: Heart, title: "礼儀・挨拶", text: "スポーツの基礎とあわせて、礼儀や挨拶などお子さまの成長に大切な習慣も身につきます。" },
  { icon: Users, title: "基礎体力づくり", text: "キックボクシングの動きを通じて、楽しみながら基礎体力を養うことができます。" },
];

const oyakoPlan = gymConfig.kidsMembership.find((plan) => plan.name === "親子キック会員");

const scheduleItems = [
  { days: "月・水・金曜", time: "15:00〜17:00", note: "" },
  { days: "火曜", time: "15:00〜18:00", note: "" },
  { days: "土曜", time: "14:00〜15:00", note: "親子キッズクラス（保護者も一緒に参加できます）" },
];

export default function Kids() {
  const t = useT();
  return (
    <>
      <SEO title={seoConfig.pages.kids.title} description={seoConfig.pages.kids.description} path="/kids" />
      <div className="relative" style={{ height: "50vh", minHeight: "400px" }}>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/kids-class.webp')" }} />
        <div className="absolute inset-0 bg-[#4D5058]/75" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-[#F2AC55] text-xs tracking-[0.3em] uppercase mb-3"
          >
            Kids Class
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-4xl sm:text-5xl font-bold text-white"
          >
            {t("楽しみながら、礼儀と体力が身につくキッズクラス")}
          </motion.h1>
        </div>
      </div>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}
            >
              <p className="text-[#F2AC55] text-xs tracking-[0.3em] uppercase mb-3">About Kids Class</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#4D5058] mb-6">{t("キッズクラスについて")}</h2>
              <div className="space-y-4 text-[#4D5058]/70 leading-relaxed text-sm sm:text-base">
                <p>
                  {t("キックボクシングの動きを取り入れながら、楽しく体を動かせるお子さま向けのプログラムです。")}
                </p>
                <p>
                  {t("運動そのものだけでなく、礼儀や挨拶といったスポーツの基礎も学びながら、基礎体力を養っていきます。")}
                </p>
                <p>
                  {t("対象は小学1年生〜中学3年生。60分のクラスで、初めてのお子さまでも楽しく参加いただけます。")}
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
                src="/images/kids-class.webp"
                alt={t("DEEP.FITのキッズクラスでお子さまが楽しくトレーニング")}
                loading="lazy"
                width={800}
                height={600}
                className="rounded-md w-full object-cover aspect-[4/3]"
              />
            </motion.div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="bg-[#FAF5EE] rounded-md p-6 text-center border border-gray-100"
                >
                  <div className="w-12 h-12 rounded-full bg-[#D6F5E0] flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-[#1F7A3A]" />
                  </div>
                  <h3 className="font-bold text-[#4D5058] text-lg mb-2">{t(feature.title)}</h3>
                  <p className="text-[#4D5058]/60 text-sm leading-relaxed">{t(feature.text)}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-[#FAF5EE]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <p className="text-[#F2AC55] text-xs tracking-[0.3em] uppercase mb-3">Schedule</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#4D5058]">{t("スケジュール")}</h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            {scheduleItems.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="bg-white rounded-md p-6 border border-[#4CAF50]/40 shadow-sm"
              >
                <div className="w-10 h-10 rounded-full bg-[#D6F5E0] flex items-center justify-center mb-4">
                  <Clock className="w-5 h-5 text-[#1F7A3A]" />
                </div>
                <h3 className="font-bold text-[#4D5058] text-lg mb-1">{t(item.days)}</h3>
                <p className="text-[#1F7A3A] font-bold text-xl mb-2">{t(item.time)}</p>
                {item.note && <p className="text-[#B5306A] text-xs">{t(item.note)}</p>}
              </motion.div>
            ))}
          </motion.div>
          <p className="text-[#4D5058]/50 text-xs mt-6 text-center">
            {t("※ 木・日曜はキッズクラスの開催はありません。祝日は定休日です。")}
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}
            >
              <p className="text-[#F2AC55] text-xs tracking-[0.3em] uppercase mb-3">Oyako Kids Class</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#4D5058] mb-6">{t("親子キッズクラス")}</h2>
              <p className="text-[#4D5058]/70 leading-relaxed text-sm sm:text-base mb-4">
                {t("土曜14:00〜15:00は、保護者の方も一緒に参加できる「親子キッズクラス」を開催しています。お子さまと一緒に体を動かす時間をお楽しみください。")}
              </p>
              <p className="text-[#4D5058]/70 leading-relaxed text-sm sm:text-base">
                {t("親子で通いやすい「親子キック会員」もご用意しています。")}
              </p>
            </motion.div>
            {oyakoPlan && (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInRight}
                className="bg-[#FFE4F0] border border-[#E05C8A]/40 rounded-md p-8 text-center"
              >
                <p className="text-[#B5306A] font-bold text-lg mb-2">{t(oyakoPlan.name)}</p>
                <p className="font-heading font-bold text-4xl text-[#B5306A] mb-1">{oyakoPlan.price}</p>
                <p className="text-[#B5306A]/70 text-sm">{t(oyakoPlan.note)}</p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-[#FAF5EE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <p className="text-[#F2AC55] text-xs tracking-[0.3em] uppercase mb-3">Pricing</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#4D5058]">{t("料金")}</h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="rounded-xl overflow-hidden border border-gray-200 shadow-sm"
          >
            <div className="bg-[#4D5058] px-6 py-4">
              <p className="text-white text-lg font-bold tracking-wide">{t("キッズクラス")}</p>
              <p className="text-white/50 text-xs mt-0.5">{t("小学1年生〜中学3年生まで")}</p>
            </div>
            <div className="bg-white divide-y divide-gray-100">
              {gymConfig.kidsMembership.map((plan, i) => (
                <div key={i} className="flex items-center justify-between px-6 py-4">
                  <p className="font-medium text-[#4D5058]">{t(plan.name)}</p>
                  <div className="text-right">
                    <p className="font-heading font-bold text-2xl text-[#1F7A3A]">{plan.price}</p>
                    <p className="text-[#4D5058]/40 text-xs">{t(plan.note)}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="rounded-2xl border-2 border-[#F2AC55] overflow-hidden shadow-lg"
          >
            <div className="bg-[#F2AC55] px-6 py-4 flex items-center justify-between">
              <p className="text-white text-lg font-bold tracking-wide">{t("体験レッスン")}</p>
              <p className="text-white/80 text-xs">Trial Lesson　{t("※初回限り・要予約")}</p>
            </div>
            <div className="bg-white px-6 py-6">
              <div className="flex items-center gap-2 bg-gradient-to-r from-[#833AB4]/10 via-[#FD1D1D]/10 to-[#F77737]/10 border border-[#F77737]/20 rounded-full px-4 py-1.5 inline-flex mb-5">
                <SiInstagram className="w-4 h-4 text-[#E1306C]" />
                <span className="text-sm font-bold text-[#4D5058]">{t("インスタフォローで体験無料")}</span>
                <a href={gymConfig.sns.instagram} target="_blank" rel="noopener noreferrer" className="text-[#E1306C] text-xs underline underline-offset-2">@deep.amagasaki</a>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={gymConfig.sns.line}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="button-trial-line"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-[#06C755] text-white font-bold px-6 py-3.5 rounded-full text-base transition-all duration-200 hover:bg-[#04A344] shadow-md"
                >
                  <SiLine className="w-5 h-5" />
                  {t("LINEで体験予約（おすすめ）")}
                </a>
                <a
                  href={`tel:${gymConfig.phone}`}
                  data-testid="button-trial-phone"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-white border-2 border-[#F2AC55] text-[#D99A40] font-medium px-6 py-3.5 rounded-full text-base transition-all duration-200 hover:bg-[#FFF8EC]"
                >
                  <Phone className="w-4 h-4" />
                  {gymConfig.phone}
                </a>
              </div>
              <p className="text-[#4D5058]/40 text-xs mt-4 text-center">{t(gymConfig.addressShort)}{t("／JR尼崎駅 徒歩10分")}</p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
