import { motion } from "framer-motion";
import { Heart, Flame, Users, CheckCircle2, Star, Dumbbell, Zap, MapPin, MessageCircle, Crown } from "lucide-react";
import { SiLine, SiInstagram } from "react-icons/si";
import { Link } from "wouter";
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

const classTypes = [
  {
    icon: Heart,
    title: "フィットネスクラス",
    subtitle: "Fitness Class",
    level: "全レベル",
    time: "通常営業時間内",
    colorBg: "bg-[#F2AC55]/10",
    colorText: "text-[#D99A40]",
    description: "有酸素運動とキックボクシングの要素を組み合わせた人気クラス。楽しく体を動かしながら、ダイエットや体力向上を目指せます。",
  },
  {
    icon: Flame,
    title: "パーソナルトレーニング",
    subtitle: "Personal Training",
    level: "全レベル",
    time: "予約制",
    colorBg: "bg-[#4D5058]/10",
    colorText: "text-[#4D5058]",
    description: "マンツーマンで目標に合わせたプログラムを提供。ダイエット、筋力アップ、技術向上など、一人ひとりに最適な指導を行います。",
  },
  {
    icon: Users,
    title: "キッズクラス",
    subtitle: "Kids Class",
    level: "お子様向け",
    time: "60分",
    colorBg: "bg-[#53565E]/10",
    colorText: "text-[#53565E]",
    description: "お子様向けの楽しいクラス。月・水・金曜15:00〜17:00、火曜15:00〜18:00に実施。土曜14:00〜15:00は保護者も一緒に参加できる「親子キッズクラス」も開催しています。",
  },
];

type ScheduleBlock = {
  start: number;
  end: number;
  label: string;
  sublabel?: string;
  color: "fitness" | "personal" | "kids" | "oyako" | "taiai" | "closed" | "free";
};

const dayOrder = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"] as const;
const dayLabelsMap: Record<typeof dayOrder[number], string> = {
  mon: "月", tue: "火", wed: "水", thu: "木", fri: "金", sat: "土", sun: "日",
};

const scheduleBlocks: Record<string, ScheduleBlock[]> = {
  mon: [
    { start: 6,    end: 10,   label: "フリー", color: "free" },
    { start: 10,   end: 13.5, label: "フィットネス", color: "fitness" },
    { start: 13.5, end: 15,   label: "フリー", color: "free" },
    { start: 15,   end: 17,   label: "キッズクラス", color: "kids" },
    { start: 17,   end: 22,   label: "フィットネス", color: "fitness" },
  ],
  tue: [
    { start: 6,    end: 10,   label: "フリー", color: "free" },
    { start: 10,   end: 13.5, label: "フィットネス", color: "fitness" },
    { start: 13.5, end: 15,   label: "フリー", color: "free" },
    { start: 15,   end: 18,   label: "キッズクラス", color: "kids" },
    { start: 18,   end: 22,   label: "フィットネス", color: "fitness" },
  ],
  wed: [
    { start: 6,    end: 10,   label: "フリー", color: "free" },
    { start: 10,   end: 13.5, label: "フィットネス", color: "fitness" },
    { start: 13.5, end: 15,   label: "フリー", color: "free" },
    { start: 15,   end: 17,   label: "キッズクラス", color: "kids" },
    { start: 17,   end: 22,   label: "フィットネス", color: "fitness" },
  ],
  thu: [
    { start: 6,  end: 22, label: "フリー", color: "free" },
  ],
  fri: [
    { start: 6,    end: 10,   label: "フリー", color: "free" },
    { start: 10,   end: 13.5, label: "フィットネス", color: "fitness" },
    { start: 13.5, end: 15,   label: "フリー", color: "free" },
    { start: 15,   end: 17,   label: "キッズクラス", color: "kids" },
    { start: 17,   end: 22,   label: "フィットネス", color: "fitness" },
  ],
  sat: [
    { start: 6,    end: 10,   label: "パーソナル", sublabel: "予約制", color: "personal" },
    { start: 10,   end: 14,   label: "フィットネス", color: "fitness" },
    { start: 14,   end: 15,   label: "親子キッズクラス", color: "oyako" },
    { start: 15,   end: 19.5, label: "パーソナル", sublabel: "予約制", color: "personal" },
    { start: 19.5, end: 21,   label: "サーキット・対人", sublabel: "ドロップイン可", color: "taiai" },
    { start: 21,   end: 22,   label: "パーソナル", sublabel: "予約制", color: "personal" },
  ],
  sun: [
    { start: 6,  end: 10, label: "パーソナル", sublabel: "予約制", color: "personal" },
    { start: 10, end: 14, label: "フィットネス", color: "fitness" },
    { start: 14, end: 22, label: "パーソナル", sublabel: "予約制", color: "personal" },
  ],
};

const TABLE_START = 6;
const TABLE_END = 22;
const TABLE_STEP = 0.5;
const TABLE_ROW_COUNT = (TABLE_END - TABLE_START) / TABLE_STEP;

type TableCell = { rowspan: number; block: ScheduleBlock } | "skip" | null;

const tableGrid: TableCell[][] = Array.from({ length: TABLE_ROW_COUNT }, () =>
  Array(dayOrder.length).fill(null)
);

dayOrder.forEach((day, ci) => {
  scheduleBlocks[day].forEach((block) => {
    const startRow = Math.round((block.start - TABLE_START) / TABLE_STEP);
    const rowspan = Math.round((block.end - block.start) / TABLE_STEP);
    tableGrid[startRow][ci] = { rowspan, block };
    for (let r = startRow + 1; r < startRow + rowspan; r++) {
      if (r < TABLE_ROW_COUNT) tableGrid[r][ci] = "skip";
    }
  });
});

const colorStyles: Record<string, { bg: string; text: string; border: string }> = {
  free:     { bg: "bg-[#EDE8FB]", text: "text-[#5B3EBF]",  border: "border-[#7C5CDD]/40" },
  fitness:  { bg: "bg-[#FFF0D6]", text: "text-[#C47F1A]",  border: "border-[#F2AC55]/50" },
  personal: { bg: "bg-[#DDEEFF]", text: "text-[#2563A8]",  border: "border-[#4D90D9]/40" },
  kids:     { bg: "bg-[#D6F5E0]", text: "text-[#1F7A3A]",  border: "border-[#4CAF50]/40" },
  oyako:    { bg: "bg-[#FFE4F0]", text: "text-[#B5306A]",  border: "border-[#E05C8A]/40" },
  taiai:    { bg: "bg-[#FFE0E0]", text: "text-[#C0392B]",  border: "border-[#E74C3C]/40" },
  closed:   { bg: "bg-gray-100",  text: "text-gray-400",   border: "border-gray-200" },
};

function formatTime(h: number) {
  const hours = Math.floor(h);
  const mins = h % 1 === 0.5 ? "30" : "00";
  return `${hours}:${mins}`;
}

export default function Schedule() {
  const t = useT();
  return (
    <>
      <SEO title={seoConfig.pages.schedule.title} description={seoConfig.pages.schedule.description} path="/schedule" />

      {/* Hero */}
      <div className="relative" style={{ height: "50vh", minHeight: "400px" }}>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/schedule-hero-circuit.webp')" }} />
        <div className="absolute inset-0 bg-[#4D5058]/78" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-[#F2AC55] text-xs tracking-[0.3em] uppercase mb-3"
          >
            Classes & Pricing
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-4xl sm:text-5xl font-bold text-white"
          >
            {t("初心者向けフィットネス・パーソナル・キッズクラス")}
          </motion.h1>
        </div>
      </div>

      {/* Class Types */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-14"
          >
            <p className="text-[#F2AC55] text-xs tracking-[0.3em] uppercase mb-3">Our Classes</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#4D5058]">{t("クラス紹介")}</h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {classTypes.map((cls, i) => {
              const Icon = cls.icon;
              return (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="border border-gray-100 rounded-md p-7 bg-white"
                >
                  <div className={`w-12 h-12 ${cls.colorBg} rounded-md flex items-center justify-center mb-4`}>
                    <Icon className={`w-6 h-6 ${cls.colorText}`} />
                  </div>
                  <span className={`text-xs font-medium ${cls.colorText} ${cls.colorBg} px-2 py-0.5 rounded`}>
                    {t(cls.level)}
                  </span>
                  <h3 className="text-[#4D5058] font-bold text-xl mt-3 mb-1">{t(cls.title)}</h3>
                  <p className={`text-xs ${cls.colorText} mb-3`}>{t(cls.time)}</p>
                  <p className="text-[#4D5058]/60 text-sm leading-relaxed">{t(cls.description)}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Schedule Table */}
      <section className="py-20 lg:py-28 bg-[#FAF5EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <p className="text-[#F2AC55] text-xs tracking-[0.3em] uppercase mb-3">Weekly Schedule</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#4D5058]">{t("タイムスケジュール")}</h2>
          </motion.div>

          {/* Schedule Table */}
          <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
            <table className="border-collapse w-full text-sm" style={{ minWidth: "560px" }}>
              <thead>
                <tr>
                  <th className="border border-gray-200 bg-[#4D5058] text-white font-bold px-3 py-2 text-center w-16">{t("時間")}</th>
                  {dayOrder.map((day) => (
                    <th key={day} className="border border-gray-200 bg-[#4D5058] text-white font-bold px-3 py-2 text-center">
                      {t(dayLabelsMap[day])}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableGrid.map((row, ri) => {
                  const timeVal = TABLE_START + ri * TABLE_STEP;
                  const isHour = timeVal % 1 === 0;
                  return (
                    <tr key={ri} className={isHour ? "" : "border-t-0"}>
                      <td className={`border border-gray-200 bg-white text-right pr-2 text-xs font-medium whitespace-nowrap align-top pt-1 ${isHour ? "text-[#4D5058]/70" : "text-[#4D5058]/30"}`}>
                        {formatTime(timeVal)}
                      </td>
                      {row.map((cell, ci) => {
                        if (cell === "skip") return null;
                        if (cell === null) {
                          return <td key={ci} className={`border border-gray-100 bg-white ${isHour ? "border-t-gray-200" : ""}`} />;
                        }
                        const s = colorStyles[cell.block.color];
                        return (
                          <td
                            key={ci}
                            rowSpan={cell.rowspan}
                            className={`border border-gray-200 text-center align-middle px-2 py-1 ${s.bg}`}
                          >
                            <p className={`font-bold text-xs leading-snug ${s.text}`}>{t(cell.block.label)}</p>
                            {cell.block.sublabel && (
                              <p className={`text-[10px] ${s.text} opacity-70`}>{t(cell.block.sublabel)}</p>
                            )}
                            <p className={`text-[10px] mt-0.5 ${s.text} opacity-60`}>
                              {formatTime(cell.block.start)}〜{formatTime(cell.block.end)}
                            </p>
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
                {/* 22:00 closing row */}
                <tr>
                  <td className="border border-gray-200 bg-white text-right pr-2 text-xs font-medium text-[#4D5058]/70 whitespace-nowrap align-top pt-1">
                    22:00
                  </td>

                  {dayOrder.map((_, ci) => (
                    <td key={ci} className="border border-gray-200 bg-white h-2" />
                  ))}
                </tr>
              </tbody>
            </table>
          </div>

          {/* Legend */}
          <div className="flex flex-wrap items-center gap-4 mt-5">
            {[
              { color: "free",     label: "フリー（会員様の同伴のみドロップイン可・1回1,100円）" },
              { color: "fitness",  label: "フィットネス" },
              { color: "personal", label: "パーソナル（予約制）" },
              { color: "kids",     label: "キッズクラス" },
              { color: "oyako",    label: "親子キッズクラス" },
              { color: "taiai",    label: "対人クラス（ドロップイン可・1回1,100円）" },
              { color: "closed",   label: "定休日" },
            ].map(({ color, label }) => (
              <div key={color} className="flex items-center gap-2">
                <div className={`w-4 h-4 rounded border ${colorStyles[color].bg} ${colorStyles[color].border}`} />
                <span className="text-xs text-[#4D5058]/60">{t(label)}</span>
              </div>
            ))}
          </div>
          <p className="text-[#4D5058]/40 text-xs mt-2">
            {t("※ フリーは会員様の同伴のみドロップイン可能なジム開放時間です。対人クラスもドロップイン可（各1回1,100円）。パーソナルトレーニングは要予約。キッズクラスは月・水・金曜15:00〜17:00・火曜15:00〜18:00・土曜14:00〜15:00（親子キッズクラス）。祝日定休。")}
          </p>
        </div>
      </section>

      {/* Summer Campaign */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-10"
          >
            <div className="inline-flex items-center gap-2 mb-4" style={{ background: "rgba(242,172,85,0.12)", border: "1px solid rgba(242,172,85,0.4)", borderRadius: 999, padding: "6px 20px" }}>
              <Star className="w-3.5 h-3.5 fill-[#F2AC55] text-[#F2AC55]" />
              <span style={{ color: "#D99A40", fontSize: 12, fontWeight: 800, letterSpacing: "0.18em" }}>{t("過去最大キャンペーン")}</span>
              <Star className="w-3.5 h-3.5 fill-[#F2AC55] text-[#F2AC55]" />
            </div>
            <h2 className="text-[#4D5058] font-bold leading-tight mb-2" style={{ fontSize: "clamp(28px,5vw,52px)" }}>
              {t("夏までに変わる。")}
            </h2>
            <p className="font-heading font-bold text-[#D99A40] mb-3" style={{ fontSize: "clamp(40px,8vw,80px)", lineHeight: 1 }}>
              {t("4大特典")}
            </p>
            <p className="text-[#4D5058]/60 text-sm">{t("5月7日〜7月31日の期間限定。まずは無料体験から気軽にどうぞ。")}</p>
          </motion.div>

          {/* 特典①②③ row */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5"
          >
            {[
              { label: "特典①", title: "体験料", original: "通常 2,000円" },
              { label: "特典②", title: "入会金", original: "通常 10,000円" },
              { label: "特典③", title: "翌月会費", original: "女性 11,000円 / 男性 13,200円" },
            ].map((item) => (
              <motion.div key={item.label} variants={fadeInUp}
                className="rounded-2xl px-5 py-4 flex flex-row sm:flex-col items-center sm:items-start gap-3 sm:gap-1 shadow-md"
                style={{ background: "rgba(255,255,255,0.9)", border: "1.5px solid rgba(255,255,255,0.6)" }}
              >
                <span style={{ background: "rgba(242,172,85,0.18)", color: "#D99A40", fontSize: 11, fontWeight: 900, padding: "2px 12px", borderRadius: 999, letterSpacing: "0.1em", whiteSpace: "nowrap" }}>{t(item.label)}</span>
                <div className="flex-1 sm:mt-2">
                  <p className="text-[#4D5058] font-bold text-lg leading-tight">{t(item.title)}</p>
                  <p className="text-[#4D5058]/45 text-xs mt-0.5 line-through">{t(item.original)}</p>
                </div>
                <p className="font-heading font-bold text-[#D99A40] shrink-0" style={{ fontSize: "clamp(26px,3.5vw,36px)", lineHeight: 1 }}>{t("無料")}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* 特典④⑤ row */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
          >
            {/* 特典④ */}
            <motion.div variants={fadeInUp} className="rounded-2xl overflow-hidden" style={{ background: "#ffffff", border: "2px solid #EAA53B", boxShadow: "0 14px 40px -16px rgba(234,165,59,0.5)", position: "relative" }}>
              {/* 今だけ コーナーリボン */}
              <div style={{ position: "absolute", top: 14, right: -40, transform: "rotate(45deg)", background: "linear-gradient(90deg,#E0492B,#F2762F)", color: "#fff", fontSize: 10, fontWeight: 900, letterSpacing: "0.1em", padding: "4px 42px", boxShadow: "0 4px 10px -3px rgba(0,0,0,0.3)", zIndex: 2 }}>
                {t("今だけ")}
              </div>
              {/* ヘッダーバンド（オレンジ） */}
              <div className="px-5 pt-4 pb-4 text-center" style={{ background: "linear-gradient(135deg, #EAA53B 0%, #F5C96A 100%)" }}>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span style={{ background: "rgba(255,255,255,0.28)", color: "#ffffff", fontSize: 11, fontWeight: 900, padding: "3px 12px", borderRadius: 999, letterSpacing: "0.1em" }}>{t("特典④")}</span>
                  <span style={{ color: "rgba(255,255,255,0.9)", fontSize: 11, letterSpacing: "0.12em", fontWeight: 700 }}>{t("当日入会限定")}</span>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-2 mb-2">
                  <span style={{ background: "#ffffff", color: "#C0392B", fontSize: 11, fontWeight: 900, padding: "4px 12px", borderRadius: 999, letterSpacing: "0.04em" }}>{t("🔥 先着30名限定")}</span>
                  <span style={{ background: "#ffffff", color: "#B9791B", fontSize: 11, fontWeight: 900, padding: "4px 12px", borderRadius: 999, letterSpacing: "0.04em" }}>{t("⏰ 8月末まで")}</span>
                </div>
                <p style={{ color: "#ffffff", fontSize: "clamp(22px,3.5vw,36px)", fontWeight: 900, lineHeight: 1.05, margin: "2px 0 0", fontFamily: "Oswald, sans-serif", letterSpacing: "0.02em", textShadow: "0 2px 8px rgba(120,70,0,0.22)" }}>
                  {t("月会費が永久にOFF！！")}
                </p>
              </div>
              <div className="px-5 pt-4 pb-5">
                <div className="mb-3">
                  <p style={{ color: "#D99A40", fontSize: 10, fontWeight: 800, letterSpacing: "0.14em", marginBottom: 2 }}>{t("女性フルタイム")}</p>
                  <div className="flex items-baseline gap-1.5">
                    <span style={{ color: "#A99C92", fontSize: 14, fontWeight: 700 }}>{t("通常")}</span>
                    <span style={{ color: "#A99C92", fontSize: 16, fontWeight: 800, textDecoration: "line-through" }}>{t("11,000円")}</span>
                    <span style={{ color: "#A99C92", fontSize: 14, fontWeight: 700 }}>{t("が")}</span>
                  </div>
                  <div className="flex items-baseline gap-1.5 mt-0.5">
                    <span style={{ color: "#3D3530", fontSize: 14, fontWeight: 700 }}>{t("ずっと")}</span>
                    <span style={{ color: "#D99A40", fontSize: "clamp(26px,3.5vw,40px)", fontWeight: 900, lineHeight: 1, fontFamily: "Oswald, sans-serif" }}>{t("9,900円")}</span>
                    <span style={{ color: "#3D3530", fontSize: 13, fontWeight: 700 }}>{t("で通い放題！")}</span>
                  </div>
                </div>
                <div style={{ borderTop: "1px solid rgba(234,165,59,0.25)", paddingTop: 10 }}>
                  <p style={{ color: "#D99A40", fontSize: 10, fontWeight: 800, letterSpacing: "0.14em", marginBottom: 2 }}>{t("男性フルタイム")}</p>
                  <div className="flex items-baseline gap-1.5">
                    <span style={{ color: "#A99C92", fontSize: 14, fontWeight: 700 }}>{t("通常")}</span>
                    <span style={{ color: "#A99C92", fontSize: 16, fontWeight: 800, textDecoration: "line-through" }}>{t("13,200円")}</span>
                    <span style={{ color: "#A99C92", fontSize: 14, fontWeight: 700 }}>{t("が")}</span>
                  </div>
                  <div className="flex items-baseline gap-1.5 mt-0.5">
                    <span style={{ color: "#3D3530", fontSize: 14, fontWeight: 700 }}>{t("ずっと")}</span>
                    <span style={{ color: "#D99A40", fontSize: "clamp(26px,3.5vw,40px)", fontWeight: 900, lineHeight: 1, fontFamily: "Oswald, sans-serif" }}>{t("12,100円")}</span>
                    <span style={{ color: "#3D3530", fontSize: 13, fontWeight: 700 }}>{t("で通い放題！")}</span>
                  </div>
                </div>
                <p style={{ color: "#A99C92", fontSize: 11, marginTop: 10, textAlign: "center" }}>{t("継続縛りなし・いつでも退会可")}</p>
              </div>
            </motion.div>

          </motion.div>

          {/* Saving summary */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="rounded-3xl px-8 py-6 text-center mb-8 shadow-lg"
            style={{ background: "rgba(255,255,255,0.88)", border: "1.5px solid rgba(255,255,255,0.6)" }}
          >
            <p className="text-[#4D5058]/60 text-sm mb-1">{t("入会月の節約額")}</p>
            <p className="font-heading font-bold text-[#4D5058]" style={{ fontSize: "clamp(36px,6vw,64px)", lineHeight: 1 }}>
              {t("最大")} <span style={{ color: "#D99A40" }}>{t("23,000円〜")}</span>
            </p>
            <p className="text-[#4D5058]/50 text-xs mt-2">{t("＋月会費永久割引が継続します")}</p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href={gymConfig.sns.line}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="button-campaign-line"
              className="inline-flex items-center gap-3 bg-[#06C755] text-white font-bold px-8 py-4 rounded-full text-base transition-all duration-200 shadow-xl hover:scale-105"
            >
              <SiLine className="w-5 h-5" />
              {t("LINEで体験予約する")}
            </a>
            <Link
              href="/contact"
              data-testid="button-campaign-contact"
              className="inline-flex items-center gap-2 bg-white text-[#D99A40] font-medium px-7 py-4 rounded-full text-base transition-all duration-200 shadow-md hover:scale-105"
            >
              <MessageCircle className="w-4 h-4" />
              {t("お問い合わせフォーム")}
            </Link>
          </motion.div>
          <p className="text-center text-[#4D5058]/40 text-xs mt-4">{t("体験後、当日入会でキャンペーン適用　※キャンペーンは予告なく終了する場合があります")}</p>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <p className="text-[#F2AC55] text-xs tracking-[0.3em] uppercase mb-3">Pricing</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#4D5058]">PRICE LIST</h2>
            <p className="text-[#4D5058]/50 text-sm mt-3">{t("入会金")} {gymConfig.joinFee} <span className="text-[#4D5058]/40">{t(gymConfig.joinFeeTaxNote)}</span>{t("　※価格は税抜表記です")}</p>
          </motion.div>

          {/* Category Cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 gap-6 mb-8"
          >
            {/* Female */}
            <motion.div variants={fadeInUp} className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
              <div className="bg-[#4D5058] px-6 py-4">
                <p className="text-white text-lg font-bold tracking-wide">{t("女性会員")}</p>
              </div>
              <div className="bg-white divide-y divide-gray-100">
                {gymConfig.membership.filter(p => p.name !== "U-22会員").map((plan, i) => (
                  <div key={i} className="flex items-center justify-between px-6 py-4">
                    <div>
                      <p className="font-medium text-[#4D5058]">{t(plan.name)}</p>
                      <p className="text-xs text-[#4D5058]/40 mt-0.5">{t(plan.subtitle)}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-heading font-bold text-2xl text-[#D99A40]">{plan.femalePrice}</p>
                      <p className="text-[#4D5058]/40 text-xs">{t(plan.priceNote)}</p>
                      <p className="text-[#4D5058]/30 text-[10px] mt-0.5">{t(plan.femalePriceTaxNote)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Male */}
            <motion.div variants={fadeInUp} className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
              <div className="bg-[#4D5058] px-6 py-4">
                <p className="text-white text-lg font-bold tracking-wide">{t("男性会員")}</p>
              </div>
              <div className="bg-white divide-y divide-gray-100">
                {gymConfig.membership.filter(p => p.name !== "U-22会員").map((plan, i) => (
                  <div key={i} className="flex items-center justify-between px-6 py-4">
                    <div>
                      <p className="font-medium text-[#4D5058]">{t(plan.name)}</p>
                      <p className="text-xs text-[#4D5058]/40 mt-0.5">{t(plan.subtitle)}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-heading font-bold text-2xl text-[#4D5058]">{plan.malePrice}</p>
                      <p className="text-[#4D5058]/40 text-xs">{t(plan.priceNote)}</p>
                      <p className="text-[#4D5058]/30 text-[10px] mt-0.5">{t(plan.malePriceTaxNote)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Premium standalone card */}
          {(() => {
            const premium = gymConfig.premiumMembership;
            if (!premium) return null;
            return (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="rounded-xl overflow-hidden border-2 border-[#F2AC55]/50 shadow-md mb-8"
              >
                <div className="bg-gradient-to-r from-[#D99A40] to-[#F2AC55] px-6 py-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Crown className="w-5 h-5 text-white shrink-0" />
                    <div>
                      <p className="text-white text-lg font-bold tracking-wide">{t(premium.name)}</p>
                      <p className="text-white/70 text-xs mt-0.5">{t(premium.subtitle)}</p>
                    </div>
                  </div>
                  <span className="bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">{t(premium.condition)}</span>
                </div>
                <div className="bg-white px-6 py-5">
                  <div className="flex flex-wrap gap-x-6 gap-y-2 mb-4">
                    {premium.benefits.map((b, i) => (
                      <span key={i} className="flex items-center gap-1 text-xs text-[#4D5058]/60">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D99A40] shrink-0" />
                        {t(b)}
                      </span>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-lg bg-[#FDF6EC] px-4 py-3 flex items-center justify-between">
                      <span className="text-sm font-medium text-[#4D5058]">{t("男性")}</span>
                      <div className="text-right">
                        <p className="font-heading font-bold text-2xl text-[#D99A40] leading-none">{premium.malePrice}</p>
                        <p className="text-[#4D5058]/40 text-[10px] mt-0.5">{t(premium.priceNote)}</p>
                        <p className="text-[#4D5058]/30 text-[10px]">{t(premium.malePriceTaxNote)}</p>
                      </div>
                    </div>
                    <div className="rounded-lg bg-[#FDF6EC] px-4 py-3 flex items-center justify-between">
                      <span className="text-sm font-medium text-[#4D5058]">{t("女性")}</span>
                      <div className="text-right">
                        <p className="font-heading font-bold text-2xl text-[#D99A40] leading-none">{premium.femalePrice}</p>
                        <p className="text-[#4D5058]/40 text-[10px] mt-0.5">{t(premium.priceNote)}</p>
                        <p className="text-[#4D5058]/30 text-[10px]">{t(premium.femalePriceTaxNote)}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })()}

          {/* U-22 standalone card */}
          {(() => {
            const u22 = gymConfig.membership.find(p => p.name === "U-22会員");
            if (!u22) return null;
            return (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="rounded-xl overflow-hidden border-2 border-[#2563A8]/40 shadow-sm mb-8"
              >
                <div className="bg-[#2563A8] px-6 py-4 flex items-center justify-between">
                  <div>
                    <p className="text-white text-lg font-bold tracking-wide">{t("U-22会員")}</p>
                    <p className="text-white/60 text-xs mt-0.5">{t("22歳以下限定・通い放題")}</p>
                  </div>
                  <span className="bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full">{t("男女同額")}</span>
                </div>
                <div className="bg-white px-6 py-5 flex items-center justify-between">
                  <div>
                    <p className="font-medium text-[#4D5058]">{t(u22.subtitle)}</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {u22.benefits.map((b, i) => (
                        <span key={i} className="flex items-center gap-1 text-xs text-[#4D5058]/60">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#2563A8] shrink-0" />
                          {t(b)}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="text-right shrink-0 ml-4">
                    <p className="font-heading font-bold text-3xl text-[#2563A8]">{u22.femalePrice}</p>
                    <p className="text-[#4D5058]/40 text-xs">{t(u22.priceNote)}</p>
                    <p className="text-[#4D5058]/30 text-[10px] mt-0.5">{t(u22.femalePriceTaxNote)}</p>
                  </div>
                </div>
              </motion.div>
            );
          })()}

          {/* Benefits note */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="flex flex-wrap gap-x-6 gap-y-2 mb-10"
          >
            {gymConfig.membership[0].benefits.map((b, i) => (
              <span key={i} className="flex items-center gap-1.5 text-sm text-[#4D5058]/60">
                <CheckCircle2 className="w-4 h-4 text-[#F2AC55] shrink-0" />
                {t(b)}
              </span>
            ))}
          </motion.div>

          {/* Kids & Personal Training */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 gap-6 mb-6"
          >
            {/* Kids */}
            <motion.div variants={fadeInUp} className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
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
                      <p className="text-[#4D5058]/30 text-[10px] mt-0.5">{t(plan.priceTaxNote)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Personal Training */}
            <motion.div variants={fadeInUp} className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
              <div className="bg-[#4D5058] px-6 py-4">
                <p className="text-white text-lg font-bold tracking-wide">{t("パーソナルトレーニング")}</p>
                <p className="text-white/50 text-xs mt-0.5">{t("完全マンツーマン・予約制")}</p>
              </div>
              <div className="bg-white px-6 py-6 flex items-center justify-between">
                <div>
                  <p className="font-medium text-[#4D5058]">{t(gymConfig.personalTraining.duration)} {t("/ 1セッション")}</p>
                  <p className="text-xs text-[#4D5058]/50 mt-1">👥 {t(gymConfig.personalTraining.note)}</p>
                </div>
                <div className="text-right">
                  <p className="font-heading font-bold text-2xl text-[#2563A8]">{gymConfig.personalTraining.price}</p>
                  <p className="text-[#4D5058]/30 text-[10px] mt-0.5">{t(gymConfig.personalTraining.priceTaxNote)}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Trial Lesson highlight */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="rounded-2xl border-2 border-[#F2AC55] overflow-hidden shadow-lg"
          >
            <div className="bg-[#F2AC55] px-6 py-4 flex items-center justify-between">
              <p className="text-white text-lg font-bold tracking-wide">{t("体験レッスン")}</p>
              <p className="text-white/80 text-xs">{t("Trial Lesson　※初回限り・要予約")}</p>
            </div>
            <div className="bg-white px-6 py-6">
              {/* Instagram free - prominent */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-5">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="relative inline-block">
                      <span className="font-heading font-bold text-3xl text-gray-300">{gymConfig.trialLesson.price}</span>
                      <span className="absolute inset-0 flex items-center pointer-events-none">
                        <span className="block w-full h-[3px] bg-[#E74C3C] rotate-[-12deg] rounded-full" />
                      </span>
                    </div>
                    <span className="font-heading font-bold text-4xl text-[#F2AC55]">{t("無料")}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-gradient-to-r from-[#833AB4]/10 via-[#FD1D1D]/10 to-[#F77737]/10 border border-[#F77737]/20 rounded-full px-4 py-1.5 inline-flex">
                    <SiInstagram className="w-4 h-4 text-[#E1306C]" />
                    <span className="text-sm font-bold text-[#4D5058]">{t("インスタフォロワー限定")}</span>
                    <a href={gymConfig.sns.instagram} target="_blank" rel="noopener noreferrer" className="text-[#E1306C] text-xs underline underline-offset-2">@deep.amagasaki</a>
                  </div>
                </div>
              </div>
              {/* CTA buttons */}
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
                <Link
                  href="/contact"
                  data-testid="button-contact-schedule"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-white border-2 border-[#F2AC55] text-[#D99A40] font-medium px-6 py-3.5 rounded-full text-base transition-all duration-200 hover:bg-[#FFF8EC]"
                >
                  <MessageCircle className="w-4 h-4" />
                  {t("お問い合わせフォーム")}
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Equipment & Access */}
      <section className="py-20 lg:py-28 bg-[#FAF5EE]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <p className="text-[#F2AC55] text-xs tracking-[0.3em] uppercase mb-3">Facility</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#4D5058]">{t("充実の設備")}</h2>
          </motion.div>

          {/* Smith Machine featured photo */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-6 rounded-2xl overflow-hidden relative"
          >
            <img
              src="/images/smith-machine.jpeg"
              alt={t("DEEP.FITの個室スミスマシン設備（パワーラック・ケーブル完備）")}
              loading="lazy"
              className="w-full h-64 sm:h-80 object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-5">
              <p className="text-[#F2AC55] text-xs tracking-widest uppercase mb-1">Equipment</p>
              <p className="text-white font-bold text-lg">{t("オールインワン スミスマシン")}</p>
              <p className="text-white/60 text-xs">{t("パワーラック・ケーブル・プレート全て完備")}</p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-12"
          >
            {gymConfig.equipment.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="bg-white border border-gray-200 rounded-xl px-5 py-4 flex items-center gap-3 shadow-sm"
              >
                <Dumbbell className="w-5 h-5 text-[#F2AC55] shrink-0" />
                <span className="text-[#4D5058] text-sm font-medium">{t(item)}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="border-t border-gray-200 pt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-center"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#F2AC55]/15 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-[#F2AC55]" />
              </div>
              <div className="text-left">
                <p className="text-[#4D5058] font-semibold text-sm">{t(gymConfig.addressShort)}</p>
                {gymConfig.access.map((a, i) => (
                  <p key={i} className="text-[#4D5058]/50 text-xs">{t(a)}</p>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#F2AC55]/15 flex items-center justify-center shrink-0">
                <Zap className="w-5 h-5 text-[#F2AC55]" />
              </div>
              <div className="text-left">
                <p className="text-[#4D5058] font-semibold text-sm">{t("営業時間")}</p>
                <p className="text-[#4D5058]/50 text-xs">{t(gymConfig.hours.weekday)}</p>
                <p className="text-[#4D5058]/50 text-xs">{t("定休日：")}{t(gymConfig.hours.closed)}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
