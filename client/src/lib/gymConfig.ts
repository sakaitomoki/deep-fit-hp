export const gymConfig = {
  name: "DEEP.FIT",
  nameJa: "ディープフィット",
  tagline: "動いて、整えて、気づけば続く。",
  subtitle: "サーキット×キックボクシングフィットネスジム",
  phone: "06-7777-7853",
  email: "sakitomokideep@icloud.com",
  address: "〒660-0001 兵庫県尼崎市長洲東通1–9-25 2F DEEP.FIT",
  addressShort: "兵庫県尼崎市長洲東通1–9-25 2F",
  access: [
    "JR尼崎駅 徒歩10分",
    "阪急塚口駅 徒歩15分",
  ],
  hours: {
    weekday: "10:00 - 13:00 / 17:00 - 22:00（パーソナル 13:00 - 17:00）",
    weekdayPersonal: "13:00 - 17:00（パーソナル・予約制）",
    saturday: "10:00 - 15:00",
    sunday: "10:00 - 14:00",
    closed: "木曜日・祝日",
  },
  hoursDisplay: [
    { label: "月・火・水・金", time: "10:00 - 13:00 / 17:00 - 22:00" },
    { label: "　パーソナル", time: "13:00 - 17:00（予約制）" },
    { label: "　火曜キッズ", time: "17:00 - 18:00" },
    { label: "土曜日", time: "10:00 - 15:00（キッズ 14:00 - 15:00）" },
    { label: "日曜日", time: "10:00 - 14:00" },
    { label: "定休日", time: "木曜日・祝日" },
  ],
  sns: {
    instagram: "https://www.instagram.com/deep.amagasaki/",
    twitter: "https://x.com",
    line: "https://lin.ee/uqfaBm6",
  },
  googleMapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.4!2d135.4!3d34.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e8d!2sAmagasaki!5e0!3m2!1sja!2sjp",
  trialLesson: {
    price: "¥1,500",
    priceOriginal: "¥1,500",
    priceNumber: 1500,
    instagramFree: true,
  },
  membership: [
    {
      name: "フルタイム会員",
      subtitle: "Full Time",
      femalePrice: "¥11,000",
      malePrice: "¥13,200",
      priceNote: "/ 月（税込）",
      popular: true,
      benefits: ["全時間帯利用可能", "全クラス受け放題", "グローブ無料貸出", "パワーラック使用可"],
    },
    {
      name: "月8回会員",
      subtitle: "8 Times / Month",
      femalePrice: "¥8,800",
      malePrice: "¥11,000",
      priceNote: "/ 月（税込）",
      popular: false,
      benefits: ["全時間帯利用可能", "月8回まで", "グローブ無料貸出", "パワーラック使用可"],
    },
  ],
  equipment: [
    "オールインパワーラック",
    "サンドバック 4本",
    "グローブ無料貸出",
    "更衣室完備",
    "ウォーターサーバー",
    "駐車場あり",
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
