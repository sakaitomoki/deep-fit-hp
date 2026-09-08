import { motion } from "framer-motion";
import { Users, User, Phone } from "lucide-react";
import { SiLine } from "react-icons/si";
import SEO from "@/components/SEO";
import { seoConfig, gymConfig } from "@/lib/gymConfig";
import { useT } from "@/lib/i18n";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

export default function PersonalTraining() {
  const t = useT();
  const { individual, pair } = gymConfig.personalTrainingPlans;
  const plans = [
    { ...individual, Icon: User, color: { bg: "bg-[#E8F0FA]", text: "text-[#2563A8]", accent: "#2563A8" } },
    { ...pair, Icon: Users, color: { bg: "bg-[#FDF0E5]", text: "text-[#D9822E]", accent: "#D9822E" } },
  ];

  return (
    <>
      <SEO title={seoConfig.pages.personalTraining.title} description={seoConfig.pages.personalTraining.description} path="/personal-training" />
      <div className="relative" style={{ height: "50vh", minHeight: "400px" }}>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/class-personal.webp')" }} />
        <div className="absolute inset-0 bg-[#4D5058]/75" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-[#F2AC55] text-xs tracking-[0.3em] uppercase mb-3"
          >
            Personal Training
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-4xl sm:text-5xl font-bold text-white"
          >
            {t("完全マンツーマンのパーソナルトレーニング")}
          </motion.h1>
        </div>
      </div>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-14"
          >
            <p className="text-[#F2AC55] text-xs tracking-[0.3em] uppercase mb-3">About</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#4D5058] mb-6">{t("パーソナルトレーニングについて")}</h2>
            <p className="text-[#4D5058]/70 leading-relaxed text-sm sm:text-base max-w-2xl mx-auto">
              {t("完全予約制・50分のマンツーマン指導です。ダイエット、筋力アップ、技術向上など、一人ひとりの目標に合わせたプログラムをご提案します。お友達やご家族とのペアでのご参加も可能です。")}
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10"
          >
            {plans.map((plan) => {
              const Icon = plan.Icon;
              return (
                <motion.div
                  key={plan.label}
                  variants={fadeInUp}
                  className="rounded-xl overflow-hidden border border-gray-200 shadow-sm"
                >
                  <div className="px-6 py-4 flex items-center gap-2" style={{ background: plan.color.accent }}>
                    <Icon className="w-5 h-5 text-white shrink-0" />
                    <p className="text-white text-lg font-bold tracking-wide">{t(plan.label)}</p>
                    <span className="text-white/70 text-xs ml-auto">{t(gymConfig.personalTraining.duration)}{t("/回")}</span>
                  </div>
                  <div className="bg-white divide-y divide-gray-100">
                    {plan.tiers.map((tier, i) => (
                      <div key={i} className="flex items-center justify-between px-6 py-4">
                        <div>
                          <p className="font-medium text-[#4D5058]">{t(tier.sessions)}</p>
                          {tier.validity && <p className="text-xs text-[#4D5058]/40 mt-0.5">{t(tier.validity)}</p>}
                        </div>
                        <div className="text-right">
                          <p className={`font-heading font-bold text-2xl ${plan.color.text}`}>{tier.price}</p>
                          {tier.perSession && <p className="text-[#4D5058]/40 text-xs">{t(tier.perSession)}</p>}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="rounded-2xl border-2 border-[#F2AC55] overflow-hidden shadow-lg"
          >
            <div className="bg-[#F2AC55] px-6 py-4">
              <p className="text-white text-lg font-bold tracking-wide">{t("お申し込み・お問い合わせ")}</p>
            </div>
            <div className="bg-white px-6 py-6">
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={gymConfig.sns.line}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="button-pt-line"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-[#06C755] text-white font-bold px-6 py-3.5 rounded-full text-base transition-all duration-200 hover:bg-[#04A344] shadow-md"
                >
                  <SiLine className="w-5 h-5" />
                  {t("LINEで問い合わせる")}
                </a>
                <a
                  href={`tel:${gymConfig.phone}`}
                  data-testid="button-pt-phone"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-white border-2 border-[#F2AC55] text-[#D99A40] font-medium px-6 py-3.5 rounded-full text-base transition-all duration-200 hover:bg-[#FFF8EC]"
                >
                  <Phone className="w-4 h-4" />
                  {gymConfig.phone}
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
