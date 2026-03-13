import { motion } from "framer-motion";
import { Heart, Flame, Users, CheckCircle2, Star, Dumbbell, Zap, MapPin } from "lucide-react";
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
  color: "fitness" | "personal" | "kids" | "closed";
};

const dayOrder = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"] as const;
const dayLabelsMap: Record<typeof dayOrder[number], string> = {
  mon: "月", tue: "火", wed: "水", thu: "木", fri: "金", sat: "土", sun: "日",
};

const scheduleBlocks: Record<string, ScheduleBlock[]> = {
  mon: [
    { start: 10, end: 13, label: "フィットネス", color: "fitness" },
    { start: 13, end: 17, label: "パーソナル", sublabel: "予約制", color: "personal" },
    { start: 17, end: 22, label: "フィットネス", color: "fitness" },
  ],
  tue: [
    { start: 10, end: 13, label: "フィットネス", color: "fitness" },
    { start: 13, end: 17, label: "パーソナル", sublabel: "予約制", color: "personal" },
    { start: 17, end: 18, label: "キッズクラス", color: "kids" },
    { start: 18, end: 22, label: "フィットネス", color: "fitness" },
  ],
  wed: [
    { start: 10, end: 13, label: "フィットネス", color: "fitness" },
    { start: 13, end: 17, label: "パーソナル", sublabel: "予約制", color: "personal" },
    { start: 17, end: 22, label: "フィットネス", color: "fitness" },
  ],
  thu: [
    { start: 10, end: 22, label: "定休日", color: "closed" },
  ],
  fri: [
    { start: 10, end: 13, label: "フィットネス", color: "fitness" },
    { start: 13, end: 17, label: "パーソナル", sublabel: "予約制", color: "personal" },
    { start: 17, end: 22, label: "フィットネス", color: "fitness" },
  ],
  sat: [
    { start: 10, end: 14, label: "フィットネス", color: "fitness" },
    { start: 14, end: 15, label: "キッズクラス", color: "kids" },
    { start: 15, end: 19.5, label: "パーソナル", sublabel: "予約制", color: "personal" },
    { start: 19.5, end: 21, label: "対人クラス", sublabel: "ドロップイン可", color: "taiai" },
  ],
  sun: [
    { start: 10, end: 14, label: "フィットネス", color: "fitness" },
    { start: 14, end: 22, label: "パーソナル", sublabel: "予約制", color: "personal" },
  ],
};

const START_HOUR = 10;
const END_HOUR = 22;
const TOTAL_HOURS = END_HOUR - START_HOUR;
const HOUR_PX = 52;

const colorStyles: Record<string, { bg: string; text: string; border: string }> = {
  fitness:  { bg: "bg-[#FFF0D6]", text: "text-[#C47F1A]",  border: "border-[#F2AC55]/50" },
  personal: { bg: "bg-[#DDEEFF]", text: "text-[#2563A8]",  border: "border-[#4D90D9]/40" },
  kids:     { bg: "bg-[#D6F5E0]", text: "text-[#1F7A3A]",  border: "border-[#4CAF50]/40" },
  taiai:    { bg: "bg-[#FFE0E0]", text: "text-[#C0392B]",  border: "border-[#E74C3C]/40" },
  closed:   { bg: "bg-gray-100",  text: "text-gray-400",   border: "border-gray-200" },
};

function formatTime(h: number) {
  const hours = Math.floor(h);
  const mins = h % 1 === 0.5 ? "30" : "00";
  return `${hours}:${mins}`;
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

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="overflow-x-auto"
          >
            <div style={{ minWidth: "640px" }}>
              {/* Day header row */}
              <div className="flex mb-2">
                <div className="w-12 shrink-0" />
                {dayOrder.map((day) => (
                  <div
                    key={day}
                    className={`flex-1 text-center text-sm font-bold py-2 rounded-lg mx-0.5 ${
                      day === "thu" ? "bg-gray-200 text-gray-400" : "bg-[#4D5058] text-white"
                    }`}
                  >
                    {dayLabelsMap[day]}
                  </div>
                ))}
              </div>

              {/* Time grid */}
              <div className="flex">
                {/* Time axis */}
                <div className="w-12 shrink-0 relative" style={{ height: TOTAL_HOURS * HOUR_PX }}>
                  {Array.from({ length: TOTAL_HOURS + 1 }, (_, i) => (
                    <div
                      key={i}
                      className="absolute left-0 right-0 flex items-center"
                      style={{ top: i * HOUR_PX - 8 }}
                    >
                      <span className="text-[10px] text-[#4D5058]/50 font-medium w-full text-right pr-2">
                        {START_HOUR + i}:00
                      </span>
                    </div>
                  ))}
                  {/* Horizontal grid lines */}
                  {Array.from({ length: TOTAL_HOURS + 1 }, (_, i) => (
                    <div
                      key={`line-${i}`}
                      className="absolute left-10 right-0 border-t border-gray-200"
                      style={{ top: i * HOUR_PX }}
                    />
                  ))}
                </div>

                {/* Day columns */}
                {dayOrder.map((day) => (
                  <div
                    key={day}
                    className="flex-1 relative mx-0.5 bg-white/60 rounded-lg"
                    style={{ height: TOTAL_HOURS * HOUR_PX }}
                  >
                    {/* Horizontal lines */}
                    {Array.from({ length: TOTAL_HOURS + 1 }, (_, i) => (
                      <div
                        key={i}
                        className="absolute left-0 right-0 border-t border-gray-100"
                        style={{ top: i * HOUR_PX }}
                      />
                    ))}
                    {/* Schedule blocks */}
                    {scheduleBlocks[day].map((block, i) => {
                      const s = colorStyles[block.color];
                      const topPx = (block.start - START_HOUR) * HOUR_PX;
                      const heightPx = (block.end - block.start) * HOUR_PX - 3;
                      return (
                        <div
                          key={i}
                          className={`absolute left-1 right-1 rounded-lg border flex flex-col items-center justify-center text-center px-1 ${s.bg} ${s.border}`}
                          style={{ top: topPx + 2, height: heightPx }}
                        >
                          <p className={`text-xs font-bold leading-tight ${s.text}`}>{block.label}</p>
                          {block.sublabel && (
                            <p className={`text-[10px] ${s.text} opacity-70`}>{block.sublabel}</p>
                          )}
                          <p className={`text-[9px] mt-0.5 ${s.text} opacity-60`}>
                            {formatTime(block.start)}〜{formatTime(block.end)}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Legend */}
          <div className="flex flex-wrap items-center gap-4 mt-6">
            {[
              { color: "fitness", label: "フィットネス" },
              { color: "personal", label: "パーソナル（予約制）" },
              { color: "kids", label: "キッズクラス" },
              { color: "taiai", label: "対人クラス（ドロップイン可）" },
              { color: "closed", label: "定休日" },
            ].map(({ color, label }) => (
              <div key={color} className="flex items-center gap-2">
                <div className={`w-4 h-4 rounded border ${colorStyles[color].bg} ${colorStyles[color].border}`} />
                <span className="text-xs text-[#4D5058]/60">{label}</span>
              </div>
            ))}
          </div>
          <p className="text-[#4D5058]/40 text-xs mt-2">
            ※ 木曜日・祝日は定休日。パーソナルトレーニングは要予約。土曜19:30〜21:00の対人クラスはドロップイン参加可能。
          </p>
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

          {/* Trial Lesson highlight */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="rounded-xl border-2 border-[#F2AC55] overflow-hidden"
          >
            <div className="bg-[#F2AC55] px-6 py-4 flex items-center justify-between">
              <p className="text-white text-lg font-bold tracking-wide">体験レッスン</p>
              <p className="text-white/80 text-xs">Trial Lesson　※初回限り・要予約</p>
            </div>
            <div className="bg-white px-6 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <p className="font-heading font-bold text-3xl text-[#D99A40]">{gymConfig.trialLesson.price}
                  <span className="text-base font-sans font-normal text-[#4D5058]/40 ml-2">（税込）</span>
                </p>
                <p className="text-sm text-[#4D5058]/60 mt-1">
                  Instagramフォローで
                  <span className="text-[#D99A40] font-bold ml-1">無料</span>
                  　→
                  <a
                    href={gymConfig.sns.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#4D5058]/50 underline underline-offset-2 ml-1 text-xs"
                  >
                    @deep.amagasaki
                  </a>
                </p>
              </div>
              <Link
                href="/contact"
                data-testid="button-contact-schedule"
                className="inline-block bg-[#F2AC55] text-white px-8 py-3 rounded-full text-base font-medium transition-all duration-200 text-center whitespace-nowrap"
              >
                体験予約はこちら
              </Link>
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
