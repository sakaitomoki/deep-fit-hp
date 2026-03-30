import { motion } from "framer-motion";
import { Award, Medal } from "lucide-react";
import { Link } from "wouter";
import SEO from "@/components/SEO";
import { seoConfig } from "@/lib/gymConfig";
import natsukiImg from "@assets/image2_1774836824150.jpeg";
import moritaImg from "@assets/image0_1774837057083.jpeg";

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

const instructors = [
  {
    nameJa: "中村 拓也",
    nameEn: "TAKUYA NAKAMURA",
    role: "代表 / ヘッドトレーナー",
    specialties: ["キックボクシング", "ムエタイ"],
    record: "プロ戦績 32戦25勝",
    bio: "15年以上のキックボクシング指導経験を持つDEEP.FITの代表。WBCムエタイ日本ランキング3位の実績を持ち、現役時代の経験を活かした実践的な指導が好評。初心者から選手まで、一人ひとりに合わせた丁寧な指導を信条とする。「どんな方でも楽しく続けられる環境を作ることが私の使命です。」",
    achievements: [
      "WBCムエタイ日本ランキング3位",
      "全日本キック選手権 優勝",
      "指導歴15年以上",
    ],
    image: "/images/class-kickboxing.png",
  },
  {
    nameJa: "なつき",
    nameEn: "NATSUKI",
    role: "チーフインストラクター",
    specialties: ["フィットネスキック", "ダイエット指導"],
    record: "指導歴8年",
    bio: "女性目線のフィットネスプログラムを専門とする。女性や初心者でも無理なく楽しめるクラスを担当。栄養士の資格も持ち、食事指導も含めたトータルサポートが得意。「体を動かすことを、もっと日常にしてほしい。そのお手伝いをするのが私の仕事です。」",
    achievements: [
      "女子キックボクシング全日本3位",
      "フィットネスインストラクター資格保有",
      "栄養士資格保有",
    ],
    image: natsukiImg,
  },
  {
    nameJa: "森田 陸斗",
    nameEn: "RIKUTO MORITA",
    role: "トレーナー",
    specialties: ["テクニック", "選手育成"],
    record: "プロ戦績 10戦6勝",
    bio: "現役プロキックボクサーとして活躍しながらDEEP.FITのトレーナーを務める。実戦で磨いたテクニックを活かした指導が好評。プロを目指す選手から初心者まで、目標に合わせた丁寧な指導を行う。「自分自身も戦い続けながら、皆さんの目標達成を全力でサポートします。」",
    achievements: [
      "現役プロキックボクサー",
      "プロ戦績 10戦6勝",
      "選手育成実績多数",
    ],
    image: moritaImg,
  },
];

export default function Instructors() {
  return (
    <>
      <SEO title={seoConfig.pages.instructors.title} description={seoConfig.pages.instructors.description} path="/instructors" />

      {/* Hero */}
      <div className="relative" style={{ height: "50vh", minHeight: "400px" }}>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/class-personal.png')" }} />
        <div className="absolute inset-0 bg-[#4D5058]/78" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-[#F2AC55] text-xs tracking-[0.3em] uppercase mb-3"
          >
            Instructors
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-4xl sm:text-5xl font-bold text-white"
          >
            インストラクター
          </motion.h1>
        </div>
      </div>

      {/* Instructors List */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20 lg:space-y-28">
            {instructors.map((inst, i) => {
              const isEven = i % 2 === 1;
              return (
                <div
                  key={i}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center`}
                >
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={isEven ? fadeInRight : fadeInLeft}
                    className={`${isEven ? "lg:order-2" : ""} relative`}
                    data-testid={`img-instructor-${i}`}
                  >
                    <div className="relative rounded-md overflow-hidden aspect-[4/3]">
                      <img
                        src={inst.image}
                        alt={inst.nameJa}
                        className="w-full h-full object-cover object-top"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-[#4D5058]/80 backdrop-blur-sm px-5 py-4">
                        <p className="text-[#F2AC55] text-xs tracking-wider font-medium">{inst.nameEn}</p>
                        <p className="text-white/60 text-xs">{inst.role}</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={isEven ? fadeInLeft : fadeInRight}
                    className={isEven ? "lg:order-1" : ""}
                  >
                    <div className="flex flex-wrap gap-2 mb-4">
                      {inst.specialties.map((s, j) => (
                        <span key={j} className="bg-[#F2AC55]/10 text-[#D99A40] text-xs px-3 py-1 rounded-full font-medium">
                          {s}
                        </span>
                      ))}
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#4D5058] mb-1">{inst.nameJa}</h2>
                    <p className="text-[#4D5058]/60 text-sm mb-2">{inst.role}</p>
                    <div className="flex items-center gap-2 mb-5">
                      <Medal className="w-4 h-4 text-[#F2AC55]" />
                      <span className="text-[#4D5058]/70 text-sm">{inst.record}</span>
                    </div>
                    <p className="text-[#4D5058]/70 text-sm leading-relaxed mb-6">{inst.bio}</p>
                    <div className="bg-[#F2F3F5] rounded-md p-5">
                      <h4 className="flex items-center gap-2 font-bold text-[#4D5058] text-sm mb-3">
                        <Award className="w-4 h-4 text-[#F2AC55]" />
                        主な実績
                      </h4>
                      <ul className="space-y-2">
                        {inst.achievements.map((a, j) => (
                          <li key={j} className="flex items-center gap-2 text-sm text-[#4D5058]/70">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#F2AC55] shrink-0" />
                            {a}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-24 bg-[#4D5058]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-3xl mx-auto px-4 text-center"
        >
          <p className="text-[#F2AC55] text-xs tracking-[0.3em] uppercase mb-3">Join Us</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            一緒にトレーニングしませんか？
          </h2>
          <p className="text-white/60 text-sm mb-8">
            経験豊富なインストラクターが、あなたの目標達成を全力でサポートします。
          </p>
          <Link
            href="/contact"
            data-testid="button-cta-instructors"
            className="inline-block bg-[#F2AC55] text-white px-8 py-3 rounded-full text-base font-medium transition-all duration-200"
          >
            体験レッスンを予約する
          </Link>
        </motion.div>
      </section>
    </>
  );
}
