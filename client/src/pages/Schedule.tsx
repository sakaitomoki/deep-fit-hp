import { motion } from "framer-motion";
import { Heart, Flame, Users, CheckCircle2, Star, Dumbbell, Zap, MapPin, MessageCircle } from "lucide-react";
import { SiLine, SiInstagram } from "react-icons/si";
import { Link } from "wouter";
import SEO from "@/components/SEO";
import { seoConfig, gymConfig } from "@/lib/gymConfig";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
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
    description: "お子様向けの楽しいクラス。礼儀や協調性も学べます。保護者の方も安心して見学できる環境を整えています。",
  },
];

type ScheduleBlock = {
  start: number;
  end: number;
  label: string;
  sublabel?: string;
  color: "fitness" | "personal" | "junior" | "jissen" | "closed";
};

const dayOrder = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"] as const;
const dayLabelsMap: Record<typeof dayOrder[number], string> = {
  mon: "月", tue: "火", wed: "水", thu: "木", fri: "金", sat: "土", sun: "日/祝",
};

const scheduleBlocks: Record<string, ScheduleBlock[]> = {
  mon: [
    { start: 10, end: 15, label: "パーソナル", color: "personal" },
    { start: 15, end: 22, label: "フィットネス", color: "fitness" },
  ],
  tue: [
    { start: 10, end: 14, label: "フィットネス", color: "fitness" },
    { start: 14, end: 19, label: "パーソナル", color: "personal" },
    { start: 19, end: 22, label: "実践コース", color: "jissen" },
  ],
  wed: [
    { start: 10, end: 15, label: "パーソナル", color: "personal" },
    { start: 15, end: 22, label: "フィットネス", color: "fitness" },
  ],
  thu: [
    { start: 10, end: 14, label: "フィットネス", color: "fitness" },
    { start: 14, end: 19, label: "パーソナル", color: "personal" },
    { start: 19, end: 22, label: "実践コース", color: "jissen" },
  ],
  fri: [
    { start: 10, end: 15, label: "パーソナル", color: "personal" },
    { start: 15, end: 22, label: "フィットネス", color: "fitness" },
  ],
  sat: [
    { start: 10.5, end: 11.5, label: "ジュニアコース", color: "junior" },
    { start: 12, end: 15, label: "パーソナル", color: "personal" },
    { start: 15, end: 22, label: "フィットネス", color: "fitness" },
  ],
  sun: [
    { start: 10, end: 12, label: "フィットネス", color: "fitness" },
    { start: 12, end: 15, label: "パーソナル", color: "personal" },
  ],
};

const START_HOUR = 10;
const END_HOUR = 22;
const TOTAL_HOURS = END_HOUR - START_HOUR;
const HOUR_PX = 52;

const colorStyles: Record<string, { bg: string; text: string; border: string }> = {
  fitness:  { bg: "bg-[#F9B8D0]", text: "text-[#8B1A4A]",  border: "border-[#E8769A]/60" },
  personal: { bg: "bg-[#B3E8F5]", text: "text-[#0B5F7A]",  border: "border-[#5BC0DE]/60" },
  junior:   { bg: "bg-[#CCFFCC]", text: "text-[#1A7A1A]",  border: "border-[#66CC66]/60" },
  jissen:   { bg: "bg-[#FFFFAA]", text: "text-[#7A7A00]",  border: "border-[#CCCC00]/60" },
  closed:   { bg: "bg-gray-100",  text: "text-gray-400",   border: "border-gray-200" },
};

function formatTime(h: number) {
  const hours = Math.floor(h);
  const mins = h % 1 === 0.5 ? "30" : "00";
  return `${hours}:${mins}`;
}

type CellDef = {
  row: number;
  col: number;
  rowspan: number;
  label: string;
  time: string;
  color: string;
};

const TABLE_ROWS = 12;
const TABLE_DAYS = 7;
const TABLE_START = 10;

const tableCells: CellDef[] = [
  { row: 0, col: 0, rowspan: 5, label: "パーソナル",    time: "10:00〜15:00",             color: "personal" },
  { row: 5, col: 0, rowspan: 7, label: "フィットネス",  time: "15:00〜22:00",             color: "fitness"  },
  { row: 0, col: 1, rowspan: 4, label: "フィットネス",  time: "10:00〜14:00",             color: "fitness"  },
  { row: 4, col: 1, rowspan: 5, label: "パーソナル",    time: "14:00〜19:00",             color: "personal" },
  { row: 9, col: 1, rowspan: 3, label: "実践コース",    time: "19:00〜22:00",             color: "jissen"   },
  { row: 0, col: 2, rowspan: 5, label: "パーソナル",    time: "10:00〜15:00",             color: "personal" },
  { row: 5, col: 2, rowspan: 7, label: "フィットネス",  time: "15:00〜22:00",             color: "fitness"  },
  { row: 0, col: 3, rowspan: 4, label: "フィットネス",  time: "10:00〜14:00",             color: "fitness"  },
  { row: 4, col: 3, rowspan: 5, label: "パーソナル",    time: "14:00〜19:00",             color: "personal" },
  { row: 9, col: 3, rowspan: 3, label: "実践コース",    time: "19:00〜22:00",             color: "jissen"   },
  { row: 0, col: 4, rowspan: 5, label: "パーソナル",    time: "10:00〜15:00",             color: "personal" },
  { row: 5, col: 4, rowspan: 7, label: "フィットネス",  time: "15:00〜22:00",             color: "fitness"  },
  { row: 0, col: 5, rowspan: 2, label: "ジュニアコース",time: "10:30〜11:30",             color: "junior"   },
  { row: 2, col: 5, rowspan: 3, label: "パーソナル",    time: "12:00〜15:00",             color: "personal" },
  { row: 5, col: 5, rowspan: 7, label: "フィットネス",  time: "15:00〜18:00\n(18:00〜22:00)", color: "fitness" },
  { row: 0, col: 6, rowspan: 2, label: "フィットネス",  time: "10:00〜12:00",             color: "fitness"  },
  { row: 2, col: 6, rowspan: 3, label: "パーソナル",    time: "12:00〜15:00",             color: "personal" },
];

const tableOccupied: boolean[][] = Array.from({ length: TABLE_ROWS }, () => Array(TABLE_DAYS).fill(false));
const tableCellMap: (CellDef | null)[][] = Array.from({ length: TABLE_ROWS }, () => Array(TABLE_DAYS).fill(null));

for (const cell of tableCells) {
  tableCellMap[cell.row][cell.col] = cell;
  for (let r = cell.row; r < Math.min(cell.row + cell.rowspan, TABLE_ROWS); r++) {
    tableOccupied[r][cell.col] = true;
  }
}

export default function Schedule() {
  return (
    <>
      <SEO title={seoConfig.pages.schedule.title} description={seoConfig.pages.schedule.description} path="/schedule" />

      {/* Hero */}
      <div className="relative" style={{ height: "50vh", minHeight: "400px" }}>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/class-circuit.png')" }} />
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
            クラス・料金
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
            <h2 className="text-3xl sm:text-4xl font-bold text-[#4D5058]">クラス紹介</h2>
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
                    {cls.level}
                  </span>
                  <h3 className="text-[#4D5058] font-bold text-xl mt-3 mb-1">{cls.title}</h3>
                  <p className={`text-xs ${cls.colorText} mb-3`}>{cls.time}</p>
                  <p className="text-[#4D5058]/60 text-sm leading-relaxed">{cls.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Schedule Table */}
      <section className="py-20 lg:py-28 bg-[#F2F3F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <p className="text-[#F2AC55] text-xs tracking-[0.3em] uppercase mb-3">Weekly Schedule</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#4D5058]">タイムスケジュール</h2>
          </motion.div>

          {/* Schedule HTML table */}
          <div className="overflow-x-auto rounded-xl border border-gray-300 bg-white shadow-sm">
            <table className="border-collapse text-xs sm:text-sm" style={{ minWidth: "560px", width: "100%" }}>
              <thead>
                <tr>
                  <th className="border border-gray-300 bg-white w-14" />
                  <th colSpan={7} className="border border-gray-300 py-1.5 text-center text-sm text-gray-500 font-medium bg-gray-50">
                    スケジュール
                  </th>
                </tr>
                <tr>
                  <th className="border border-gray-300 bg-white w-14" />
                  {["月", "火", "水", "木", "金", "土", "日/祝"].map((d) => (
                    <th key={d} className="border border-gray-300 py-2 px-1 text-center font-bold text-[#4D5058] bg-[#D6EEFF]">
                      {d}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: TABLE_ROWS }, (_, rowIdx) => (
                  <tr key={rowIdx}>
                    <td className="border border-gray-200 text-right pr-2 text-xs text-gray-500 align-top pt-1 w-14 whitespace-nowrap">
                      {TABLE_START + rowIdx}:00
                    </td>
                    {Array.from({ length: TABLE_DAYS }, (_, colIdx) => {
                      if (tableOccupied[rowIdx][colIdx] && !tableCellMap[rowIdx][colIdx]) {
                        return null;
                      }
                      const cell = tableCellMap[rowIdx][colIdx];
                      if (!cell) {
                        return <td key={colIdx} className="border border-gray-200 bg-white" />;
                      }
                      const s = colorStyles[cell.color] ?? colorStyles.closed;
                      return (
                        <td
                          key={colIdx}
                          rowSpan={cell.rowspan}
                          className={`border border-gray-300 text-center align-middle px-1 py-1 ${s.bg} ${s.text}`}
                        >
                          <p className="font-bold leading-snug whitespace-pre-line">{cell.time}</p>
                          <p className="mt-0.5">{cell.label}</p>
                        </td>
                      );
                    })}
                  </tr>
                ))}
                {/* Final 22:00 boundary row */}
                <tr>
                  <td className="border border-gray-200 text-right pr-2 text-xs text-gray-500 align-top pt-1 w-14">
                    22:00
                  </td>
                  {Array.from({ length: TABLE_DAYS }, (_, i) => (
                    <td key={i} className="border border-gray-200 bg-white h-2" />
                  ))}
                </tr>
              </tbody>
            </table>
          </div>

          {/* Legend */}
          <div className="flex flex-wrap items-center gap-4 mt-5">
            {[
              { color: "fitness", label: "フィットネス" },
              { color: "personal", label: "パーソナル（予約制）" },
              { color: "jissen", label: "実践コース" },
              { color: "junior", label: "ジュニアコース" },
            ].map(({ color, label }) => (
              <div key={color} className="flex items-center gap-2">
                <div className={`w-4 h-4 rounded border ${colorStyles[color].bg} ${colorStyles[color].border}`} />
                <span className="text-xs text-[#4D5058]/60">{label}</span>
              </div>
            ))}
          </div>
          <p className="text-[#4D5058]/40 text-xs mt-2">
            ※ パーソナルトレーニングは要予約。実践コースは火・木曜19:00〜22:00。ジュニアコースは土曜10:30〜11:30。
          </p>
        </div>
      </section>

      {/* Opening Campaign */}
      <section
        className="py-20 lg:py-28 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #D99A40 0%, #F2AC55 50%, #E8954A 100%)" }}
      >
        {/* Diagonal stripe pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 50%)", backgroundSize: "20px 20px" }} />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center"
          >
            {/* TOP badge */}
            <div className="inline-flex items-center gap-2 bg-white text-[#D99A40] text-sm font-bold px-6 py-2.5 rounded-full mb-5 shadow-lg tracking-wide">
              <Star className="w-4 h-4 fill-[#F2AC55] text-[#F2AC55]" />
              無料キャンペーン実施中
              <Star className="w-4 h-4 fill-[#F2AC55] text-[#F2AC55]" />
            </div>

            <div className="mb-2">
              <span className="text-white/80 text-sm tracking-[0.2em] uppercase block mb-1">Opening Campaign</span>
              <h2 className="text-5xl sm:text-6xl font-bold text-white drop-shadow-lg">
                ３大特典
              </h2>
            </div>
            <p className="text-white/90 font-bold text-xl mb-1">４月末まで限定！</p>
            <p className="text-white/60 text-xs mb-10">※すべて税込価格　※キャンペーンは予告なく終了する場合があります</p>

            {/* Benefits rows */}
            <div className="space-y-3 mb-10 w-full max-w-sm mx-auto">
              {[
                { num: "特典１", label: "体験料金", price: "¥1,500" },
                { num: "特典２", label: "入会金", price: "¥10,000" },
                { num: "特典３", label: "初月会費", price: "¥11,000〜¥13,200" },
              ].map((item) => (
                <div key={item.num} className="bg-white rounded-2xl overflow-hidden shadow-lg">
                  <div className="flex items-center px-4 py-3.5 gap-3">
                    <span className="bg-[#4D5058] text-white text-xs font-bold px-2.5 py-1 rounded-full shrink-0">{item.num}</span>
                    <span className="text-[#4D5058] font-bold text-base flex-1 text-left">{item.label}</span>
                    <div className="flex items-center gap-2 shrink-0">
                      <div className="relative">
                        <span className="font-heading font-bold text-base text-gray-300">{item.price}</span>
                        <span className="absolute inset-0 flex items-center pointer-events-none">
                          <span className="block w-full h-[2px] bg-[#E74C3C] rotate-[-10deg] rounded-full" />
                        </span>
                      </div>
                      <span className="font-heading font-bold text-2xl text-[#F2AC55]">無料</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Total */}
            <div className="bg-white/20 border-2 border-white/50 rounded-3xl px-6 py-6 w-full max-w-sm mx-auto flex flex-col items-center mb-10 shadow-xl">
              <p className="text-white/80 text-sm font-medium mb-2">特典合計（最大）</p>
              <div className="flex items-center gap-4">
                <div className="relative">
                  <span className="font-heading font-bold text-2xl text-white/40">¥24,700〜</span>
                  <span className="absolute inset-0 flex items-center pointer-events-none">
                    <span className="block w-full h-[3px] bg-white/70 rotate-[-8deg] rounded-full" />
                  </span>
                </div>
                <span className="font-heading font-bold text-5xl text-white drop-shadow-lg">¥０</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={gymConfig.sns.line}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="button-campaign-line"
                className="inline-flex items-center gap-3 bg-[#06C755] text-white font-bold px-8 py-4 rounded-full text-base transition-all duration-200 shadow-xl hover:scale-105"
              >
                <SiLine className="w-5 h-5" />
                LINEで体験予約する
              </a>
              <Link
                href="/contact"
                data-testid="button-campaign-contact"
                className="inline-flex items-center gap-2 bg-white/20 border-2 border-white/60 text-white font-medium px-7 py-4 rounded-full text-base transition-all duration-200 hover:bg-white/30"
              >
                <MessageCircle className="w-4 h-4" />
                お問い合わせフォーム
              </Link>
            </div>
            <p className="text-white/50 text-xs mt-4">体験後、当日入会でキャンペーン適用</p>
          </motion.div>
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
            <p className="text-[#4D5058]/50 text-sm mt-3">入会金 {gymConfig.joinFee}（税込）　※税込み価格で表示</p>
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
                <p className="text-white text-lg font-bold tracking-wide">女性会員</p>
              </div>
              <div className="bg-white divide-y divide-gray-100">
                {gymConfig.membership.map((plan, i) => (
                  <div key={i} className="flex items-center justify-between px-6 py-4">
                    <div>
                      <p className="font-medium text-[#4D5058]">{plan.name}</p>
                      <p className="text-xs text-[#4D5058]/40 mt-0.5">{plan.subtitle}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-heading font-bold text-2xl text-[#D99A40]">{plan.femalePrice}</p>
                      <p className="text-[#4D5058]/40 text-xs">/ 月（税込）</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Male */}
            <motion.div variants={fadeInUp} className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
              <div className="bg-[#4D5058] px-6 py-4">
                <p className="text-white text-lg font-bold tracking-wide">男性会員</p>
              </div>
              <div className="bg-white divide-y divide-gray-100">
                {gymConfig.membership.map((plan, i) => (
                  <div key={i} className="flex items-center justify-between px-6 py-4">
                    <div>
                      <p className="font-medium text-[#4D5058]">{plan.name}</p>
                      <p className="text-xs text-[#4D5058]/40 mt-0.5">{plan.subtitle}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-heading font-bold text-2xl text-[#4D5058]">{plan.malePrice}</p>
                      <p className="text-[#4D5058]/40 text-xs">/ 月（税込）</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

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
                {b}
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
                <p className="text-white text-lg font-bold tracking-wide">キッズクラス</p>
                <p className="text-white/50 text-xs mt-0.5">小学生以下対象</p>
              </div>
              <div className="bg-white divide-y divide-gray-100">
                {gymConfig.kidsMembership.map((plan, i) => (
                  <div key={i} className="flex items-center justify-between px-6 py-4">
                    <p className="font-medium text-[#4D5058]">{plan.name}</p>
                    <div className="text-right">
                      <p className="font-heading font-bold text-2xl text-[#1F7A3A]">{plan.price}</p>
                      <p className="text-[#4D5058]/40 text-xs">{plan.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Personal Training */}
            <motion.div variants={fadeInUp} className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
              <div className="bg-[#4D5058] px-6 py-4">
                <p className="text-white text-lg font-bold tracking-wide">パーソナルトレーニング</p>
                <p className="text-white/50 text-xs mt-0.5">完全マンツーマン・予約制</p>
              </div>
              <div className="bg-white px-6 py-6 flex items-center justify-between">
                <div>
                  <p className="font-medium text-[#4D5058]">{gymConfig.personalTraining.duration} / 1セッション</p>
                  <p className="text-xs text-[#4D5058]/50 mt-1">👥 {gymConfig.personalTraining.note}</p>
                </div>
                <div className="text-right">
                  <p className="font-heading font-bold text-2xl text-[#2563A8]">{gymConfig.personalTraining.price}</p>
                  <p className="text-[#4D5058]/40 text-xs">（税込）</p>
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
              <p className="text-white text-lg font-bold tracking-wide">体験レッスン</p>
              <p className="text-white/80 text-xs">Trial Lesson　※初回限り・要予約</p>
            </div>
            <div className="bg-white px-6 py-6">
              {/* Instagram free - prominent */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-5">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    {/* Price with slash */}
                    <div className="relative inline-block">
                      <span className="font-heading font-bold text-3xl text-gray-300">{gymConfig.trialLesson.price}</span>
                      <span className="absolute inset-0 flex items-center pointer-events-none">
                        <span className="block w-full h-[3px] bg-[#E74C3C] rotate-[-12deg] rounded-full" />
                      </span>
                    </div>
                    <span className="font-heading font-bold text-4xl text-[#F2AC55]">無料</span>
                  </div>
                  <div className="flex items-center gap-2 bg-gradient-to-r from-[#833AB4]/10 via-[#FD1D1D]/10 to-[#F77737]/10 border border-[#F77737]/20 rounded-full px-4 py-1.5 inline-flex">
                    <SiInstagram className="w-4 h-4 text-[#E1306C]" />
                    <span className="text-sm font-bold text-[#4D5058]">インスタフォロワー限定</span>
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
                  LINEで体験予約（おすすめ）
                </a>
                <Link
                  href="/contact"
                  data-testid="button-contact-schedule"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-white border-2 border-[#F2AC55] text-[#D99A40] font-medium px-6 py-3.5 rounded-full text-base transition-all duration-200 hover:bg-[#FFF8EC]"
                >
                  <MessageCircle className="w-4 h-4" />
                  お問い合わせフォーム
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Equipment & Access */}
      <section className="py-20 lg:py-28 bg-[#4D5058]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <p className="text-[#F2AC55] text-xs tracking-[0.3em] uppercase mb-3">Facility</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">充実の設備</h2>
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
              alt="オールインワン スミスマシン"
              className="w-full h-64 sm:h-80 object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-5">
              <p className="text-[#F2AC55] text-xs tracking-widest uppercase mb-1">Equipment</p>
              <p className="text-white font-bold text-lg">オールインワン スミスマシン</p>
              <p className="text-white/60 text-xs">パワーラック・ケーブル・プレート全て完備</p>
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
                className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 flex items-center gap-3"
              >
                <Dumbbell className="w-5 h-5 text-[#F2AC55] shrink-0" />
                <span className="text-white text-sm font-medium">{item}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="border-t border-white/10 pt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-center"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#F2AC55]/20 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-[#F2AC55]" />
              </div>
              <div className="text-left">
                <p className="text-white font-semibold text-sm">{gymConfig.addressShort}</p>
                {gymConfig.access.map((a, i) => (
                  <p key={i} className="text-white/50 text-xs">{a}</p>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#F2AC55]/20 flex items-center justify-center shrink-0">
                <Zap className="w-5 h-5 text-[#F2AC55]" />
              </div>
              <div className="text-left">
                <p className="text-white font-semibold text-sm">営業時間</p>
                <p className="text-white/50 text-xs">{gymConfig.hours.weekday}</p>
                <p className="text-white/50 text-xs">定休日：{gymConfig.hours.closed}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
