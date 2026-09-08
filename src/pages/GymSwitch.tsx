import { motion } from "framer-motion";
import { RefreshCw, CheckCircle2, Smartphone, Phone } from "lucide-react";
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

const benefits = [
  { title: "入会金", original: "通常 10,000円" },
  { title: "翌月会費", original: "女性 11,000円 / 男性 13,200円" },
];

export default function GymSwitch() {
  const t = useT();
  return (
    <>
      <SEO title={seoConfig.pages.gymSwitch.title} description={seoConfig.pages.gymSwitch.description} path="/gym-switch" />
      <div className="relative" style={{ height: "50vh", minHeight: "400px" }}>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/gym-interior.webp')" }} />
        <div className="absolute inset-0" style={{ background: "rgba(31,78,134,0.78)" }} />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-4"
            style={{ background: "rgba(37,99,168,0.25)", border: "1px solid rgba(255,255,255,0.4)", borderRadius: 999, padding: "6px 18px" }}
          >
            <RefreshCw className="w-3.5 h-3.5 text-white" />
            <span style={{ color: "#ffffff", fontSize: 12, fontWeight: 800, letterSpacing: "0.18em" }}>{t("乗り換え限定")}</span>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="text-[#BFD6EE] text-xs tracking-[0.3em] uppercase mb-3"
          >
            Gym Switch Campaign
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-4xl sm:text-5xl font-bold text-white"
          >
            {t("ジム乗り換えキャンペーン")}
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
            <p className="text-[#2563A8] text-xs tracking-[0.3em] uppercase mb-3">About</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#4D5058] mb-6">{t("他ジムご利用中の方へ")}</h2>
            <p className="text-[#4D5058]/70 leading-relaxed text-sm sm:text-base max-w-2xl mx-auto">
              {t("他のジムをご利用中の方がDEEP.FITへ乗り換える際の応援キャンペーンです。ご入会時に他ジムの会員証またはアプリ画面をご提示いただくだけで、入会金と翌月会費が無料になります。")}
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10"
          >
            {benefits.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                className="rounded-2xl px-6 py-6 text-center"
                style={{ background: "#F0F5FB", border: "1.5px solid rgba(37,99,168,0.25)" }}
              >
                <p className="text-[#4D5058] font-bold text-lg mb-1">{t(item.title)}</p>
                <p className="text-[#4D5058]/45 text-sm mb-3 line-through">{t(item.original)}</p>
                <p className="font-heading font-bold text-3xl" style={{ color: "#2563A8" }}>{t("無料")}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="rounded-xl overflow-hidden border border-gray-200 shadow-sm mb-10"
          >
            <div className="px-6 py-4 flex items-center gap-2" style={{ background: "#1F4E86" }}>
              <Smartphone className="w-5 h-5 text-white shrink-0" />
              <p className="text-white text-lg font-bold tracking-wide">{t("ご利用方法")}</p>
            </div>
            <div className="bg-white px-6 py-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#2563A8] shrink-0 mt-0.5" />
                <p className="text-[#4D5058]/80 text-sm leading-relaxed">{t("ご入会時に、他ジムの会員証または会員アプリの画面をスタッフにご提示ください。")}</p>
              </div>
              <p className="text-[#4D5058]/40 text-xs mt-4">{t("※キャンペーンは予告なく終了する場合があります。")}</p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="rounded-2xl overflow-hidden shadow-lg"
            style={{ border: "2px solid #2563A8" }}
          >
            <div className="px-6 py-4" style={{ background: "linear-gradient(135deg, #1F4E86 0%, #2563A8 100%)" }}>
              <p className="text-white text-lg font-bold tracking-wide">{t("お申し込み・お問い合わせ")}</p>
            </div>
            <div className="bg-white px-6 py-6">
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={gymConfig.sns.line}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="button-gymswitch-line"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-[#06C755] text-white font-bold px-6 py-3.5 rounded-full text-base transition-all duration-200 hover:bg-[#04A344] shadow-md"
                >
                  <SiLine className="w-5 h-5" />
                  {t("LINEで問い合わせる")}
                </a>
                <a
                  href={`tel:${gymConfig.phone}`}
                  data-testid="button-gymswitch-phone"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-white border-2 font-medium px-6 py-3.5 rounded-full text-base transition-all duration-200 hover:bg-[#F0F5FB]"
                  style={{ borderColor: "#2563A8", color: "#2563A8" }}
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
