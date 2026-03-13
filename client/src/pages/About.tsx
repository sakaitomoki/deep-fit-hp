import { motion } from "framer-motion";
import { Shield, Heart, Target, Flame, CheckCircle2 } from "lucide-react";
import SEO from "@/components/SEO";
import { seoConfig, gymConfig } from "@/lib/gymConfig";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const values = [
  { icon: Shield, title: "安全第一", text: "怪我のない安全なトレーニング環境を最優先に。インストラクターが常に適切な指導を行います。" },
  { icon: Heart, title: "コミュニティ", text: "会員同士が助け合い、励まし合えるあたたかいコミュニティを大切にしています。" },
  { icon: Target, title: "目標達成", text: "ダイエット、筋力アップ、護身術など、一人ひとりの目標に合わせたプログラムを提供。" },
  { icon: Flame, title: "情熱", text: "格闘技とフィットネスへの情熱を持ったインストラクターが、あなたの成長を全力でサポートします。" },
];

const equipment = [
  "オールインパワーラック",
  "サンドバック 4本",
  "グローブ無料貸出",
  "更衣室完備",
  "ウォーターサーバー",
  "駐車場あり",
];

export default function About() {
  return (
    <>
      <SEO title={seoConfig.pages.about.title} description={seoConfig.pages.about.description} path="/about" />

      {/* Hero */}
      <div className="relative" style={{ height: "50vh", minHeight: "400px" }}>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/gym-interior.png')" }} />
        <div className="absolute inset-0 bg-[#4D5058]/75" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-[#F2AC55] text-xs tracking-[0.3em] uppercase mb-3"
          >
            About Us
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-4xl sm:text-5xl font-bold text-white"
          >
            ジムについて
          </motion.h1>
        </div>
      </div>

      {/* Our Story */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}
            >
              <p className="text-[#F2AC55] text-xs tracking-[0.3em] uppercase mb-3">Our Story</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#4D5058] mb-6">ジムの歩み</h2>
              <div className="space-y-4 text-[#4D5058]/70 leading-relaxed text-sm sm:text-base">
                <p>
                  DEEP.FITは2015年、兵庫県尼崎市に設立しました。「誰もが気軽に格闘技を楽しめる場所を作りたい」という想いからスタートしました。
                </p>
                <p>
                  設立当初は小さなジムでしたが、地域の皆様のご支持をいただき、今では500名以上の会員様にご利用いただけるジムに成長しました。
                </p>
                <p>
                  キックボクシングとサーキットトレーニングを組み合わせたユニークなプログラムは、「楽しく続けられる」と好評をいただいています。初心者の方から本格的に競技を目指す方まで、幅広く対応できる環境を整えています。
                </p>
                <p>
                  「運動は初めてで不安」「ジムに入っても続かなかった」そんな経験を持つ方こそ、DEEP.FITへ。インストラクター一同、心よりお待ちしています。
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
                src="/images/class-kickboxing.png"
                alt="ジム内観"
                className="rounded-md w-full object-cover aspect-[4/3]"
              />
              <div className="hidden md:flex absolute -bottom-4 -left-4 bg-[#F2AC55] text-white rounded-md px-5 py-4 items-center gap-3 shadow-lg">
                <div>
                  <div className="font-heading font-bold text-3xl">2015</div>
                  <div className="text-white/80 text-xs">設立</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 lg:py-28 bg-[#F2F3F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-14"
          >
            <p className="text-[#F2AC55] text-xs tracking-[0.3em] uppercase mb-3">Our Values</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#4D5058]">大切にしていること</h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="bg-white rounded-md p-6 text-center border border-gray-100"
                >
                  <div className="w-12 h-12 rounded-full bg-[#F2AC55]/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-[#F2AC55]" />
                  </div>
                  <h3 className="font-bold text-[#4D5058] text-lg mb-2">{value.title}</h3>
                  <p className="text-[#4D5058]/60 text-sm leading-relaxed">{value.text}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}
            >
              <img
                src="/images/gym-about.png"
                alt="トレーニング施設"
                className="rounded-md w-full object-cover aspect-[4/3]"
              />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInRight}
            >
              <p className="text-[#F2AC55] text-xs tracking-[0.3em] uppercase mb-3">Facilities</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#4D5058] mb-6">施設・設備</h2>
              <p className="text-[#4D5058]/60 text-sm mb-6 leading-relaxed">
                快適にトレーニングできる環境を整えています。必要な道具は無料でレンタルできるので、手ぶらでお越しいただけます。
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {equipment.map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#F2AC55] shrink-0" />
                    <span className="text-[#4D5058]/80 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Access */}
      <section className="py-20 lg:py-28 bg-[#4D5058]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <p className="text-[#F2AC55] text-xs tracking-[0.3em] uppercase mb-3">Access</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">アクセス</h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}
              className="space-y-4"
            >
              <div className="bg-white/5 rounded-md p-5 border border-white/10">
                <h3 className="text-[#F2AC55] font-semibold mb-2">住所</h3>
                <p className="text-white/80 text-sm">{gymConfig.address}</p>
              </div>
              <div className="bg-white/5 rounded-md p-5 border border-white/10">
                <h3 className="text-[#F2AC55] font-semibold mb-2">最寄駅</h3>
                {gymConfig.access.map((a, i) => (
                  <p key={i} className="text-white/80 text-sm">{a}</p>
                ))}
              </div>
              <div className="bg-white/5 rounded-md p-5 border border-white/10">
                <h3 className="text-[#F2AC55] font-semibold mb-2">定休日</h3>
                <p className="text-white/80 text-sm">{gymConfig.hours.closed}</p>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInRight}
              className="rounded-md overflow-hidden h-72 bg-white/10"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281!2d135.4!3d34.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e8d!2sAmagasaki!5e0!3m2!1sja!2sjp&z=15"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="DEEP.FIT 地図"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
