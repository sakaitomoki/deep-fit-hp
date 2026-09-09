import { motion } from "framer-motion";
import { Sparkles, CheckCircle2, Smartphone, Phone, MapPin } from "lucide-react";
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
  { title: "入会金", original: "通常 10,000円", highlight: "無料" },
  { title: "翌月会費", original: "女性 11,000円 / 男性 13,200円", highlight: "無料" },
  { title: "解約違約金サポート", original: "", highlight: "最大6,600円" },
];

const painPoints = [
  "「最初は頑張って通っていたけど、いつの間にか行かなくなった」",
  "「一人で黙々とマシンをするのが苦手…」",
  "「辞めたいけど、契約期間が残っていて解約金がもったいない…」",
];

const programs = [
  "🥊 キックボクシング",
  "🔥 サーキットトレーニング",
  "🥊 ボクササイズ",
  "🧘‍♀️ ヨガ",
  "🐾 アニマルフロー",
  "✨ その他イベントプログラムも充実",
];

const beginnerVoices = [
  "「キックボクシングなんてやったことない」",
  "「運動が苦手」",
  "「体力に自信がない」",
];

const conditions = [
  "※9月中のご入会が対象です。",
  "※他フィットネスジム等からの乗り換えが対象です。",
  "※解約金・違約金等が確認できる明細・画面等をご提示ください。",
  "※実際に発生した解約金等を上限6,600円として、DEEP.FITの月会費から割引いたします。",
  "※その他の条件・詳細はスタッフまで。",
];

export default function GymSwitch() {
  const t = useT();
  return (
    <>
      <SEO title={seoConfig.pages.gymSwitch.title} description={seoConfig.pages.gymSwitch.description} path="/gym-switch" />
      <div className="relative" style={{ height: "55vh", minHeight: "440px" }}>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/gym-interior.webp')" }} />
        <div className="absolute inset-0" style={{ background: "rgba(91,30,55,0.82)" }} />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-4"
            style={{ background: "rgba(201,69,122,0.25)", border: "1px solid rgba(255,255,255,0.4)", borderRadius: 999, padding: "6px 18px" }}
          >
            <Sparkles className="w-3.5 h-3.5 text-white" />
            <span style={{ color: "#ffffff", fontSize: 12, fontWeight: 800, letterSpacing: "0.18em" }}>{t("＼ 9月限定 ／")}</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-3xl sm:text-5xl font-bold text-white mb-4"
          >
            {t("女性のフィットネス乗り換え応援キャンペーン")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="text-white font-bold"
            style={{ fontSize: "clamp(18px,2.6vw,24px)" }}
          >
            {t("他ジムの解約金を")}<br />
            {t("最大6,600円分サポート！")}
          </motion.p>
        </div>
      </div>

      {/* 悩みに共感 */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-10"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-[#4D5058] leading-relaxed">
              {t("ジムに入ったけど、続かなかった。")}<br />
              {t("そんな女性へ。")}
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-4 mb-10"
          >
            {painPoints.map((text) => (
              <motion.p
                key={text}
                variants={fadeInUp}
                className="rounded-2xl px-6 py-4 text-[#4D5058]/80 text-sm sm:text-base"
                style={{ background: "#FBF3F6", border: "1px solid rgba(155,44,85,0.15)" }}
              >
                {t(text)}
              </motion.p>
            ))}
          </motion.div>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center text-[#4D5058]/70 text-sm sm:text-base leading-relaxed"
          >
            {t("そんな理由で、")}<br />
            {t("今のジムをなんとなく続けていませんか？")}
          </motion.p>
        </div>
      </section>

      {/* DEEP.FITの違い */}
      <section className="py-20 lg:py-28" style={{ background: "linear-gradient(180deg, #FBF3F6 0%, #ffffff 100%)" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-8"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-[#4D5058] leading-relaxed">
              {t("DEEP.FITは、")}<br />
              {t("ただのキックボクシングジムではありません。")}
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex flex-wrap items-center justify-center gap-3 mb-10"
          >
            {programs.map((item) => (
              <motion.span
                key={item}
                variants={fadeInUp}
                className="text-sm sm:text-base font-bold px-4 py-2 rounded-full"
                style={{ background: "#ffffff", color: "#9B2C55", border: "1.5px solid rgba(155,44,85,0.25)" }}
              >
                {t(item)}
              </motion.span>
            ))}
          </motion.div>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-[#4D5058]/70 text-sm sm:text-base leading-relaxed"
          >
            {t("その日の気分や目的に合わせて、")}<br />
            {t("いろんな運動を楽しめる")}<br />
            {t("新感覚フィットネスジムです。")}
          </motion.p>
        </div>
      </section>

      {/* 初心者・女性歓迎 */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-2xl sm:text-3xl font-bold text-[#4D5058] mb-8"
          >
            {t("女性トレーナーも多数在籍。")}
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex flex-wrap items-center justify-center gap-3 mb-8"
          >
            {beginnerVoices.map((text) => (
              <motion.span
                key={text}
                variants={fadeInUp}
                className="text-sm sm:text-base px-5 py-3 rounded-2xl"
                style={{ background: "#FBF3F6", color: "#4D5058", border: "1px solid rgba(155,44,85,0.15)" }}
              >
                {t(text)}
              </motion.span>
            ))}
          </motion.div>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-[#4D5058] font-bold text-lg sm:text-xl"
          >
            {t("そんな女性も大歓迎です。")}
          </motion.p>
        </div>
      </section>

      {/* タグライン */}
      <section className="py-16" style={{ background: "linear-gradient(135deg, #9B2C55 0%, #C9457A 100%)" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-white font-bold mb-6"
            style={{ fontSize: "clamp(20px,3vw,28px)", lineHeight: 1.5 }}
          >
            {t("安いから選ぶジムから、")}<br />
            {t("楽しいから続けたくなるジムへ。")}
          </motion.p>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-white/90 text-sm sm:text-base leading-relaxed mb-2"
          >
            {t("今のジムを辞めるきっかけがなかった方も、")}<br />
            {t("この9月にDEEP.FITで")}<br />
            {t("新しいフィットネスを始めませんか？")}
          </motion.p>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-white/90 text-sm sm:text-base leading-relaxed"
          >
            {t("解約金がネックになっている方、")}<br />
            {t("DEEP.FITが乗り換えをサポートします。")}
          </motion.p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="inline-flex items-center gap-1.5 mt-6 text-white/80 text-sm"
          >
            <MapPin className="w-4 h-4" />
            {t("JR尼崎")}
          </motion.div>
        </div>
      </section>

      {/* 特典・条件 */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-14"
          >
            <p className="text-[#9B2C55] text-xs tracking-[0.3em] uppercase mb-3">Benefits</p>
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
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10"
          >
            {benefits.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                className="rounded-2xl px-6 py-6 text-center"
                style={{ background: "#FBF3F6", border: "1.5px solid rgba(155,44,85,0.25)" }}
              >
                <p className="text-[#4D5058] font-bold text-lg mb-1">{t(item.title)}</p>
                {item.original ? (
                  <p className="text-[#4D5058]/45 text-sm mb-3 line-through">{t(item.original)}</p>
                ) : (
                  <p className="text-[#4D5058]/45 text-sm mb-3">{t("他ジム解約時の違約金を")}</p>
                )}
                <p className="font-heading font-bold text-3xl" style={{ color: "#9B2C55" }}>{t(item.highlight)}</p>
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
            <div className="px-6 py-4 flex items-center gap-2" style={{ background: "#9B2C55" }}>
              <Smartphone className="w-5 h-5 text-white shrink-0" />
              <p className="text-white text-lg font-bold tracking-wide">{t("ご利用方法・注意事項")}</p>
            </div>
            <div className="bg-white px-6 py-6">
              <div className="flex items-start gap-3 mb-4">
                <CheckCircle2 className="w-5 h-5 text-[#9B2C55] shrink-0 mt-0.5" />
                <p className="text-[#4D5058]/80 text-sm leading-relaxed">{t("ご入会時に、他ジムの会員証または会員アプリの画面をスタッフにご提示ください。")}</p>
              </div>
              <div className="space-y-1.5 border-t border-gray-100 pt-4">
                {conditions.map((line) => (
                  <p key={line} className="text-[#4D5058]/50 text-xs leading-relaxed">{t(line)}</p>
                ))}
              </div>
            </div>
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
                  data-testid="button-gymswitch-line"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-[#06C755] text-white font-bold px-6 py-3.5 rounded-full text-base transition-all duration-200 hover:bg-[#04A344] shadow-md"
                >
                  <SiLine className="w-5 h-5" />
                  {t("LINEで問い合わせる")}
                </a>
                <a
                  href={`tel:${gymConfig.phone}`}
                  data-testid="button-gymswitch-phone"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-white border-2 font-medium px-6 py-3.5 rounded-full text-base transition-all duration-200 hover:bg-[#FBF3F6]"
                  style={{ borderColor: "#9B2C55", color: "#9B2C55" }}
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
