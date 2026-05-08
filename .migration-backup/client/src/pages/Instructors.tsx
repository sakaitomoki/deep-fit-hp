import { motion } from "framer-motion";
import { Award, Medal } from "lucide-react";
import { Link } from "wouter";
import SEO from "@/components/SEO";
import { seoConfig } from "@/lib/gymConfig";
import natsukiImg from "@assets/image2_1774836824150.jpeg";
import sakaiImg from "@assets/image0_1774837724133.jpeg";
import moritaImg from "@assets/image0_1774837407598.jpeg";
import instructorsHeroBg from "@assets/image2_1774838117868.png";

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
    nameJa: "坂井 友貴",
    nameEn: "TOMOKI SAKAI",
    role: "代表 / ヘッドトレーナー",
    specialties: ["キックボクシング", "ボクシング"],
    record: "指導歴10年以上",
    bio: "10年以上のキックボクシング・ボクシング指導経験を持つDEEP.FITの代表。元プロボクサーとして培った技術と経験を活かし、初心者からベテランまで幅広い層に対応した実践的な指導を行う。「楽しみながら強くなれる環境を作ることが私の使命です。」",
    achievements: [
      "元プロボクサー",
      "元プロキックボクサー",
      "フィットネス指導歴10年以上",
    ],
    image: sakaiImg,
    aspect: "aspect-[2/3]",
  },
  {
    nameJa: "natuki",
    nameEn: "NATSUKI",
    role: "チーフインストラクター",
    specialties: ["フィットネスキック", "ダイエット指導"],
    record: "指導歴8年",
    bio: "女性目線のフィットネスプログラムを専門とする。女性や初心者でも無理なく楽しめるクラスを担当。栄養士の資格も持ち、食事指導も含めたトータルサポートが得意。「体を動かすことを、もっと日常にしてほしい。そのお手伝いをするのが私の仕事です。」",
    achievements: [
      "アマチュアキックボクサー",
      "フィットネスインストラクター資格保有",
    ],
    image: natsukiImg,
    aspect: "aspect-[2/3]",
  },
  {
    nameJa: "森田 陸斗",
    nameEn: "RIKUTO MORITA",
    role: "トレーナー",
    specialties: ["キックボクシング", "フィットネス指導"],
    record: "プロ戦績 10戦6勝",
    bio: "現役プロキックボクサーとして活躍しながらDEEP.FITのトレーナーを務める。本格的なキックボクシングの技術をベースに、楽しく続けられるフィットネス指導が好評。初心者の方でも無理なく始められるよう、一人ひとりのペースに合わせた丁寧なサポートを心がけている。「一緒に楽しく体を動かして、健康な毎日を作りましょう！」",
    achievements: [
      "現役プロキックボクサー",
      "プロ戦績 10戦6勝",
    ],
    image: moritaImg,
    aspect: "aspect-[2/3]",
  },
];

export default function Instructors() {
  return (
    <>
      <SEO title={seoConfig.pages.instructors.title} description={seoConfig.pages.instructors.description} path="/instructors" />

      {/* Hero */}
      <div className="relative overflow-hidden" style={{ height: "52vh", minHeight: "400px" }}>
        {/* Background: class photo with dark overlay */}
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/class-personal.png')" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(30,32,37,0.92) 40%, rgba(30,32,37,0.65) 100%)" }} />

        {/* Orange left border accent */}
        <div className="absolute left-0 top-0 h-full w-1 bg-[#F2AC55]" />

        {/* Logo — right side, subtle */}
        <div className="absolute right-0 top-0 h-full w-1/2 flex items-center justify-center opacity-[0.06] pointer-events-none select-none">
          <img src={instructorsHeroBg} alt="" className="w-4/5 object-contain" />
        </div>

        <div className="relative z-10 h-full flex flex-col justify-center pl-10 sm:pl-20 lg:pl-32 max-w-7xl mx-auto w-full">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.55 }}
            className="text-[#F2AC55] text-xs tracking-[0.4em] uppercase mb-4 font-medium"
          >
            Our Instructors
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.65 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight"
          >
            インストラクター紹介
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="h-[2px] w-16 bg-[#F2AC55] origin-left"
          />
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
                    <div className={`relative rounded-md overflow-hidden ${inst.aspect ?? "aspect-[4/3]"}`}>
                      <img
                        src={inst.image}
                        alt={`DEEP.FITインストラクター ${inst.nameJa}（${inst.role}）`}
                        loading="lazy"
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
                      <h3 className="flex items-center gap-2 font-bold text-[#4D5058] text-sm mb-3">
                        <Award className="w-4 h-4 text-[#F2AC55]" />
                        主な実績
                      </h3>
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
            無料体験を予約する
          </Link>
        </motion.div>
      </section>
    </>
  );
}
