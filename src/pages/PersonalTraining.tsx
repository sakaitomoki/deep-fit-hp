import { motion } from "framer-motion";
import { Users, User, Phone, Sparkles } from "lucide-react";
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
  const { individual, pair, duration } = gymConfig.womensPersonalTraining;
  const plans = [
    { ...individual, Icon: User, gradient: "linear-gradient(135deg, #9B2C55 0%, #C9457A 100%)", text: "text-[#9B2C55]" },
    { ...pair, Icon: Users, gradient: "linear-gradient(135deg, #B08D3D 0%, #D9BB6B 100%)", text: "text-[#9C7A2E]" },
  ];

  return (
    <>
      <SEO title={seoConfig.pages.personalTraining.title} description={seoConfig.pages.personalTraining.description} path="/personal-training" />
      <div className="relative" style={{ height: "50vh", minHeight: "400px" }}>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/class-personal.webp')" }} />
        <div className="absolute inset-0 bg-[#4D1B33]/75" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-4"
            style={{ background: "rgba(201,69,122,0.18)", border: "1px solid rgba(201,69,122,0.5)", borderRadius: 999, padding: "6px 18px" }}
          >
            <Sparkles className="w-3.5 h-3.5 text-[#E9A8C0]" />
            <span style={{ color: "#F3C6D8", fontSize: 12, fontWeight: 800, letterSpacing: "0.18em" }}>{t("女性専用")}</span>
            <Sparkles className="w-3.5 h-3.5 text-[#E9A8C0]" />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="text-[#E9A8C0] text-xs tracking-[0.3em] uppercase mb-3"
          >
            Women's Personal Training
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-4xl sm:text-5xl font-bold text-white"
          >
            {t("女性専用パーソナルトレーニング")}
          </motion.h1>
        </div>
      </div>

      <section className="py-20 lg:py-28" style={{ background: "linear-gradient(180deg, #FBF3F6 0%, #ffffff 40%)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-14"
          >
            <p className="text-[#9B2C55] text-xs tracking-[0.3em] uppercase mb-3">About</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#4D5058] mb-6">{t("女性専用パーソナルトレーニングについて")}</h2>
            <p className="text-[#4D5058]/70 leading-relaxed text-sm sm:text-base max-w-2xl mx-auto">
              {t("女性専用の安心できる空間で、完全予約制・50分のマンツーマン指導を受けられます。ダイエット、ボディメイク、筋力アップなど、一人ひとりの目標に合わせたプログラムをご提案。お友達との2名でのご参加も可能です。")}
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
                  className="rounded-xl overflow-hidden shadow-lg"
                  style={{ border: "2px solid #E3C77A", boxShadow: "0 14px 32px -18px rgba(155,44,85,0.35)" }}
                >
                  <div className="px-6 py-4 flex items-center gap-2" style={{ background: plan.gradient }}>
                    <Icon className="w-5 h-5 text-white shrink-0" />
                    <p className="text-white text-lg font-bold tracking-wide">{t(plan.label)}</p>
                    <span className="text-white/80 text-xs ml-auto">{t(duration)}{t("/回")}</span>
                  </div>
                  <div className="bg-white divide-y divide-gray-100">
                    {plan.tiers.map((tier, i) => (
                      <div key={i} className="flex items-center justify-between px-6 py-4">
                        <div>
                          <p className="font-medium text-[#4D5058]">{t(tier.sessions)}</p>
                          {tier.validity && <p className="text-xs text-[#4D5058]/40 mt-0.5">{t(tier.validity)}</p>}
                        </div>
                        <div className="text-right">
                          <p className={`font-heading font-bold text-2xl ${plan.text}`}>{tier.price}</p>
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
            className="rounded-2xl overflow-hidden shadow-lg"
            style={{ border: "2px solid #C9457A" }}
          >
            <div className="px-6 py-4" style={{ background: "linear-gradient(135deg, #9B2C55 0%, #C9457A 100%)" }}>
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
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-white border-2 text-[#9B2C55] font-medium px-6 py-3.5 rounded-full text-base transition-all duration-200 hover:bg-[#FBF3F6]"
                  style={{ borderColor: "#C9457A" }}
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
