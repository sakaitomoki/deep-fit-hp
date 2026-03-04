export const gymConfig = {
  name: "DEEP.FIT",
  nameJa: "ディープフィット",
  tagline: "動いて、整えて、気づけば続く。",
  subtitle: "CIRCUIT × KICKBOXING GYM",
  phone: "06-7777-7853",
  email: "sakitomokideep@icloud.com",
  address: "〒660-0001 兵庫県尼崎市長洲東通1–9-25 2F DEEP.FIT",
  addressShort: "兵庫県尼崎市長洲東通1–9-25 2F",
  access: [
    "JR尼崎駅 徒歩5分",
    "阪急塚口駅 徒歩10分",
  ],
  hours: {
    weekday: "10:00 - 13:00 / 17:00 - 22:00",
    weekdayPersonal: "13:00 - 17:00（パーソナル・予約制）",
    saturday: "10:00 - 14:00",
    saturdayPersonal: "14:00〜（パーソナル・予約制）",
    sunday: "10:00 - 14:00",
    sundayPersonal: "14:00〜（パーソナル・予約制）",
    closed: "木曜日・祝日",
  },
  hoursDisplay: [
    { label: "月・火・水・金", time: "10:00 - 13:00 / 17:00 - 22:00" },
    { label: "（パーソナル）", time: "13:00 - 17:00（予約制）" },
    { label: "土・日", time: "10:00 - 14:00" },
    { label: "（パーソナル）", time: "14:00〜（予約制）" },
    { label: "定休日", time: "木曜日・祝日" },
  ],
  sns: {
    instagram: "https://instagram.com",
    twitter: "https://x.com",
    line: "https://line.me",
  },
  googleMapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.4!2d135.4!3d34.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e8d!2sAmagasaki!5e0!3m2!1sja!2sjp",
  trialLesson: {
    price: "¥1,000",
    priceNumber: 1000,
  },
  membership: [
    { name: "レギュラー会員", price: "¥11,000", priceNote: "/ 月", popular: true, benefits: ["全クラス受け放題", "施設利用制限なし", "グローブ無料貸出", "無料体験2回"] },
    { name: "デイタイム会員", price: "¥8,800", priceNote: "/ 月", popular: false, benefits: ["平日10:00-17:00", "土日10:00-14:00", "グローブ無料貸出", "無料体験1回"] },
    { name: "学生会員", price: "¥7,700", priceNote: "/ 月", popular: false, benefits: ["学生証提示必要", "全クラス受け放題", "グローブ無料貸出", "無料体験1回"] },
    { name: "ファミリー会員", price: "¥9,900", priceNote: "/ 月（お一人様）", popular: false, benefits: ["2名以上でご入会", "全クラス受け放題", "グローブ無料貸出", "無料体験2回"] },
  ],
  joinFee: "¥10,000",
  stats: [
    { value: 500, label: "会員数", suffix: "+" },
    { value: 8, label: "運営実績", suffix: "年+" },
    { value: 15, label: "クラス/週", suffix: "+" },
    { value: 5, label: "プロ在籍", suffix: "名" },
  ],
};

export const seoConfig = {
  siteName: "DEEP.FIT サーキット×キックボクシングジム",
  siteUrl: "https://deepfit.jp",
  locale: "ja_JP",
  keywords: "キックボクシング, サーキットトレーニング, 尼崎, 兵庫県, ダイエット, フィットネス, 初心者歓迎, パーソナルトレーニング, ボディメイク, 格闘技, ジム, 筋トレ, 有酸素運動",
  pages: {
    home: {
      title: "ホーム",
      description: "兵庫県尼崎市のサーキット×キックボクシングジム「DEEP.FIT」。初心者から上級者まで対応。体験レッスン受付中。",
    },
    about: {
      title: "ジムについて",
      description: "DEEP.FIT は2015年設立の尼崎市のサーキット×キックボクシングジム。プロ選手在籍、充実の設備、初心者歓迎。JR尼崎駅から徒歩5分。",
    },
    schedule: {
      title: "クラス・料金",
      description: "尼崎市DEEP.FITのキックボクシングクラス一覧と料金。入門、フィットネス、テクニック、スパーリング。月額¥7,700〜。体験レッスン¥1,000。",
    },
    instructors: {
      title: "インストラクター",
      description: "DEEP.FITの経験豊富なインストラクター紹介。元プロキックボクサーが丁寧に指導。尼崎市で本格的なキックボクシング指導を受けられます。",
    },
    contact: {
      title: "お問い合わせ",
      description: "尼崎市DEEP.FITへのお問い合わせ。体験レッスン予約、入会相談、見学予約はこちらから。お電話でも受付中。",
    },
  },
};
