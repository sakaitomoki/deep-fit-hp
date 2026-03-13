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

const scheduleData = [
  { time: "10:00-13:00", mon: "フィットネス", tue: "フィットネス", wed: "フィットネス", thu: "-", fri: "フィットネス", sat: "フィットネス", sun: "フィットネス" },
  { time: "13:00-17:00", mon: "パーソナル", tue: "パーソナル", wed: "パーソナル", thu: "-", fri: "パーソナル", sat: "-", sun: "-" },
  { time: "14:00〜", mon: "-", tue: "-", wed: "-", thu: "-", fri: "-", sat: "パーソナル", sun: "パーソナル" },
  { time: "17:00-18:00", mon: "フィットネス", tue: "キッズ", wed: "フィットネス", thu: "-", fri: "キッズ", sat: "-", sun: "-" },
  { time: "18:00-22:00", mon: "フィットネス", tue: "フィットネス", wed: "フィットネス", thu: "-", fri: "フィットネス", sat: "-", sun: "-" },
];

const days = ["time", "mon", "tue", "wed", "thu", "fri", "sat", "sun"] as const;
const dayLabels: Record<typeof days[number], string> = { time: "時間", mon: "月", tue: "火", wed: "水", thu: "木", fri: "金", sat: "土", sun: "日" };

function CellStyle({ value }: { value: string }) {
  if (value === "-") return <span className="text-[#4D5058]/20">—</span>;
  if (value === "フィットネス") return <span className="text-[#D99A40] bg-[#F2AC55]/10 px-2 py-0.5 rounded text-xs font-medium whitespace-nowrap">{value}</span>;
  if (value.startsWith("パーソナル")) return <span className="text-[#4D5058] bg-[#4D5058]/10 px-2 py-0.5 rounded text-xs font-medium whitespace-nowrap">パーソナル</span>;
  if (value === "キッズ") return <span className="text-[#53565E] bg-[#53565E]/10 px-2 py-0.5 rounded text-xs font-medium whitespace-nowrap">{value}</span>;
  return <span>{value}</span>;
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
            <h2 className="text-3xl sm:text-4xl font-bold text-[#4D5058]">週間スケジュール</h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="overflow-x-auto rounded-md border border-gray-200 shadow-sm"
          >
            <table className="w-full" style={{ minWidth: "800px" }}>
              <thead>
                <tr className="bg-[#4D5058] text-white">
                  {days.map((day) => (
                    <th key={day} className="px-4 py-4 text-sm font-medium text-left">
                      {dayLabels[day]}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {scheduleData.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#F2F3F5]"}>
                    <td className="px-4 py-3 text-xs font-medium text-[#4D5058]/70 whitespace-nowrap">{row.time}</td>
                    {(["mon", "tue", "wed", "thu", "fri", "sat", "sun"] as const).map((day) => (
                      <td key={day} className="px-4 py-3 text-center">
                        <CellStyle value={row[day]} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          <p className="text-[#4D5058]/50 text-xs mt-3">
            ※ 木曜日・祝日は定休日です。祝日はパーソナルのみ対応の場合があります。
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-10"
          >
            <p className="text-[#F2AC55] text-xs tracking-[0.3em] uppercase mb-3">Pricing</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#4D5058]">料金プラン</h2>
            <p className="text-[#4D5058]/50 text-sm mt-2">入会金 {gymConfig.joinFee}（税込）　※税込み価格で表示</p>
          </motion.div>

          {/* Pricing Table */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm"
          >
            <table className="w-full" style={{ minWidth: "560px" }}>
              <thead>
                <tr className="bg-[#4D5058] text-white">
                  <th className="px-6 py-4 text-sm font-medium text-left">種　別</th>
                  <th className="px-6 py-4 text-sm font-medium text-center">利用可能時間</th>
                  <th className="px-6 py-4 text-sm font-medium text-center">
                    <span className="inline-flex items-center gap-1">女　性</span>
                  </th>
                  <th className="px-6 py-4 text-sm font-medium text-center">
                    <span className="inline-flex items-center gap-1">男　性</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {gymConfig.membership.map((plan, i) => (
                  <tr key={i} className={`${i % 2 === 0 ? "bg-white" : "bg-[#F2F3F5]"} border-b border-gray-100`}>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        {plan.popular && (
                          <span className="bg-[#F2AC55] text-white text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-0.5 shrink-0">
                            <Star className="w-2.5 h-2.5 fill-white" /> 人気
                          </span>
                        )}
                        <div>
                          <p className="font-bold text-[#4D5058]">{plan.name}</p>
                          <p className="text-[#4D5058]/40 text-xs">{plan.subtitle}</p>
                        </div>
                      </div>
                      <ul className="mt-3 space-y-1">
                        {plan.benefits.map((b, j) => (
                          <li key={j} className="flex items-center gap-1.5 text-xs text-[#4D5058]/60">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#F2AC55] shrink-0" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </td>
                    <td className="px-6 py-5 text-center text-sm text-[#4D5058]/70">全時間帯</td>
                    <td className="px-6 py-5 text-center">
                      <span className="font-heading font-bold text-2xl text-[#D99A40]">{plan.femalePrice}</span>
                      <p className="text-[#4D5058]/40 text-xs mt-0.5">{plan.priceNote}</p>
                    </td>
                    <td className="px-6 py-5 text-center">
                      <span className="font-heading font-bold text-2xl text-[#4D5058]">{plan.malePrice}</span>
                      <p className="text-[#4D5058]/40 text-xs mt-0.5">{plan.priceNote}</p>
                    </td>
                  </tr>
                ))}
                {/* Trial row */}
                <tr className="bg-[#F2F3F5]">
                  <td className="px-6 py-5">
                    <div>
                      <p className="font-bold text-[#4D5058]">体験レッスン</p>
                      <p className="text-[#4D5058]/40 text-xs">Trial Lesson　※初回限り・要予約</p>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-center text-sm text-[#4D5058]/70">営業時間内</td>
                  <td className="px-6 py-5 text-center">
                    <span className="font-heading font-bold text-2xl text-[#D99A40]">{gymConfig.trialLesson.price}</span>
                    <p className="text-[#4D5058]/40 text-xs mt-0.5">（税込）</p>
                  </td>
                  <td className="px-6 py-5 text-center">
                    <span className="font-heading font-bold text-2xl text-[#4D5058]">{gymConfig.trialLesson.price}</span>
                    <p className="text-[#4D5058]/40 text-xs mt-0.5">（税込）</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mt-10"
          >
            <p className="text-[#4D5058]/60 text-sm mb-5">まずは体験レッスンからお気軽にどうぞ</p>
            <Link
              href="/contact"
              data-testid="button-contact-schedule"
              className="inline-block bg-[#F2AC55] text-white px-8 py-3 rounded-full text-base font-medium transition-all duration-200"
            >
              体験レッスンを予約する（{gymConfig.trialLesson.price}）
            </Link>
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
