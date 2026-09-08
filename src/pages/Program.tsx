import { motion } from "framer-motion";
import { Wind, Flame, PawPrint, Calendar, Phone } from "lucide-react";
import { SiLine, SiInstagram } from "react-icons/si";
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

const programIcons = [Wind, Flame, PawPrint];
const programColors = [
  { bg: "bg-[#E8F0FA]", text: "text-[#2563A8]" },
  { bg: "bg-[#FCEAE5]", text: "text-[#D9502E]" },
  { bg: "bg-[#EAF5EA]", text: "text-[#3B8C4A]" },
];

export default function Program() {
  const t = useT();
  const { programPricing } = gymConfig;
  return (
    <>
      <SEO title={seoConfig.pages.program.title} description={seoConfig.pages.program.description} path="/program" />
      <div className="relative" style={{ height: "50vh", minHeight: "400px" }}>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/program-hero-yoga.webp')" }} />
        <div className="absolute inset-0 bg-[#4D5058]/75" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-[#F2AC55] text-xs tracking-[0.3em] uppercase mb-3"
          >
            Program
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-4xl sm:text-5xl font-bold text-white"
          >
            {t("月替わりの特別プログラム")}
          </motion.h1>
        </div>
      </div>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-14"
          >
            <p className="text-[#F2AC55] text-xs tracking-[0.3em] uppercase mb-3">Our Programs</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#4D5058] mb-6">{t("プログラム紹介")}</h2>
            <p className="text-[#4D5058]/70 leading-relaxed text-sm sm:text-base max-w-2xl mx-auto">
              {t("通常のクラスに加えて、ヨガ・キックボクササイズ・アニマルフローの特別プログラムを開催しています。気分や目的に合わせて、いつもと違うトレーニングもお楽しみください。")}
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            {gymConfig.programs.map((program, i) => {
              const Icon = programIcons[i];
              const color = programColors[i];
              return (
                <motion.div
                  key={program.name}
                  variants={fadeInUp}
                  className="bg-[#FAF5EE] rounded-md p-6 text-center border border-gray-100"
                >
                  <div className={`w-14 h-14 rounded-full ${color.bg} flex items-center justify-center mx-auto mb-4`}>
                    <Icon className={`w-7 h-7 ${color.text}`} />
                  </div>
                  <h3 className="font-bold text-[#4D5058] text-xl mb-1">{t(program.name)}</h3>
                  <p className="text-[#4D5058]/40 text-xs mb-3">{program.subtitle}</p>
                  <p className="text-[#4D5058]/60 text-sm leading-relaxed">{t(program.description)}</p>
                </motion.div>
              );
            })}
          </motion.div>
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
            <p className="text-[#F2AC55] text-xs tracking-[0.3em] uppercase mb-3">Schedule & Pricing</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#4D5058]">{t("開催・料金")}</h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-white rounded-md border border-gray-200 shadow-sm overflow-hidden mb-6"
          >
            <div className="bg-[#4D5058] px-6 py-4 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-white shrink-0" />
              <p className="text-white text-sm sm:text-base font-medium">{t(programPricing.schedule)}</p>
            </div>
            <div className="divide-y divide-gray-100">
              <div className="flex items-center justify-between px-6 py-5">
                <div>
                  <p className="font-medium text-[#4D5058]">{t("会員様")}</p>
                  <p className="text-xs text-[#4D5058]/40 mt-0.5">{t(programPricing.note)}</p>
                </div>
                <p className="font-heading font-bold text-2xl text-[#D99A40]">{programPricing.memberPrice}</p>
              </div>
              <div className="flex items-center justify-between px-6 py-5">
                <div>
                  <p className="font-medium text-[#4D5058]">{t("非会員様")}</p>
                  <p className="text-xs text-[#4D5058]/40 mt-0.5">{t(programPricing.note)}</p>
                </div>
                <p className="font-heading font-bold text-2xl text-[#4D5058]">{programPricing.nonMemberPrice}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="rounded-2xl border-2 border-[#F2AC55] overflow-hidden shadow-lg bg-white"
          >
            <div className="bg-[#F2AC55] px-6 py-4">
              <p className="text-white text-lg font-bold tracking-wide">{t("開催日のご案内")}</p>
            </div>
            <div className="px-6 py-6">
              <div className="flex items-center gap-2 bg-gradient-to-r from-[#833AB4]/10 via-[#FD1D1D]/10 to-[#F77737]/10 border border-[#F77737]/20 rounded-full px-4 py-1.5 inline-flex mb-5">
                <SiInstagram className="w-4 h-4 text-[#E1306C]" />
                <span className="text-sm font-bold text-[#4D5058]">{t("開催日はInstagramでご案内")}</span>
                <a href={gymConfig.sns.instagram} target="_blank" rel="noopener noreferrer" className="text-[#E1306C] text-xs underline underline-offset-2">@deep.amagasaki</a>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={gymConfig.sns.line}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="button-program-line"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-[#06C755] text-white font-bold px-6 py-3.5 rounded-full text-base transition-all duration-200 hover:bg-[#04A344] shadow-md"
                >
                  <SiLine className="w-5 h-5" />
                  {t("LINEで問い合わせる")}
                </a>
                <a
                  href={`tel:${gymConfig.phone}`}
                  data-testid="button-program-phone"
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
