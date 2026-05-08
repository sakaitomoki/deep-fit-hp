const siteUrl = "https://deep-amagasaki.com";

interface PageMeta {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
}

const defaultOgImage = `${siteUrl}/images/og-image.jpg`;

const pageMeta: Record<string, PageMeta> = {
  "/": {
    title: "JR尼崎のキックボクシングジムならDEEP.FIT｜初心者・女性歓迎・無料体験受付中",
    description: "DEEP.FITはJR尼崎駅徒歩10分のサーキット×キックボクシングジムです。初心者・女性・一人参加でも通いやすく、綺麗で広い空間と個室スミスマシンも完備。無料体験受付中。",
    canonical: `${siteUrl}/`,
  },
  "/about": {
    title: "DEEP.FITってどんなジム？｜綺麗で広い空間・女性も通いやすい尼崎のキックボクシングジム",
    description: "綺麗で広い空間、和気藹々とした雰囲気、個室スミスマシン完備。DEEP.FITは初心者や女性でも通いやすく、一人で集中したい日も楽しく動きたい日も選べるジムです。",
    canonical: `${siteUrl}/about`,
  },
  "/schedule": {
    title: "クラス紹介｜初心者向けフィットネス・パーソナル・キッズクラス｜DEEP.FIT 尼崎",
    description: "DEEP.FITのクラス紹介ページです。初心者向けフィットネス、パーソナルトレーニング、キッズクラスなど、目的に合わせて選べるクラスをご案内します。",
    canonical: `${siteUrl}/schedule`,
  },
  "/instructors": {
    title: "インストラクター紹介｜DEEP.FIT 尼崎",
    description: "DEEP.FITのインストラクター紹介です。初心者や女性でも安心して通えるよう、丁寧なサポートを大切にしています。",
    canonical: `${siteUrl}/instructors`,
  },
  "/contact": {
    title: "無料体験・お問い合わせ｜DEEP.FIT 尼崎",
    description: "DEEP.FITの無料体験予約・お問い合わせページです。見学だけでもOK。運動が久しぶりの方や初心者の方もお気軽にご相談ください。",
    canonical: `${siteUrl}/contact`,
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["SportsActivityLocation", "HealthClub"],
  "@id": `${siteUrl}/#gym`,
  name: "DEEP.FIT",
  alternateName: ["ディープフィット", "DEEP FIT", "DEEP.FIT 尼崎"],
  description: "DEEP.FITはJR尼崎駅徒歩10分のサーキット×キックボクシングジムです。初心者・女性・一人参加でも通いやすく、綺麗で広い空間と個室スミスマシンも完備。無料体験受付中。",
  url: siteUrl,
  logo: `${siteUrl}/android-chrome-512x512.png`,
  image: [
    `${siteUrl}/images/og-image.jpg`,
    `${siteUrl}/images/gym-interior.png`,
    `${siteUrl}/images/class-kickboxing.png`,
    `${siteUrl}/images/gym-about.png`,
  ],
  telephone: "06-7777-7853",
  email: "sakitomokideep@icloud.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "長洲東通1-9-25 2F",
    addressLocality: "尼崎市",
    addressRegion: "兵庫県",
    postalCode: "660-0801",
    addressCountry: "JP",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 34.7265551,
    longitude: 135.4332379,
  },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Friday"], opens: "10:00", closes: "13:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Friday"], opens: "17:00", closes: "22:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Saturday"], opens: "10:00", closes: "15:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Sunday"], opens: "10:00", closes: "14:00" },
  ],
  sameAs: [
    "https://www.instagram.com/deep.amagasaki/",
    "https://lin.ee/uqfaBm6",
    "https://www.google.com/maps/place/DEEP.FIT+CIRCUIT+%C3%97KICKBOXING+GYM/",
  ],
  areaServed: [
    {
      "@type": "City",
      name: "尼崎市",
      containedInPlace: { "@type": "State", name: "兵庫県" },
    },
  ],
  priceRange: "¥8,800〜¥13,200/月",
  currenciesAccepted: "JPY",
  paymentAccepted: "Cash, Credit Card",
  hasMap: "https://www.google.com/maps/place/DEEP.FIT+CIRCUIT+%C3%97KICKBOXING+GYM/",
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "個室スミスマシン", value: true },
    { "@type": "LocationFeatureSpecification", name: "サンドバッグ", value: true },
    { "@type": "LocationFeatureSpecification", name: "グローブ無料貸出", value: true },
    { "@type": "LocationFeatureSpecification", name: "更衣室", value: true },
    { "@type": "LocationFeatureSpecification", name: "近隣駐車場", value: true },
  ],
  makesOffer: [
    {
      "@type": "Offer",
      name: "無料体験レッスン",
      description: "インスタフォローで体験無料。見学だけでもOK。",
      price: "0",
      priceCurrency: "JPY",
    },
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: siteUrl,
  name: "DEEP.FIT サーキット×キックボクシングジム",
  alternateName: ["DEEP.FIT", "DEEP FIT", "ディープフィット", "DEEP.FIT 尼崎"],
  inLanguage: "ja-JP",
  publisher: { "@id": `${siteUrl}/#gym` },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: "DEEP.FIT",
  alternateName: ["ディープフィット", "DEEP FIT"],
  url: siteUrl,
  logo: `${siteUrl}/android-chrome-512x512.png`,
  sameAs: [
    "https://www.instagram.com/deep.amagasaki/",
    "https://lin.ee/uqfaBm6",
  ],
};

function escapeHtml(str: string): string {
  return str.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function escapeJsonLd(json: string): string {
  // Prevent </script> closing the script tag prematurely
  return json.replace(/</g, "\\u003c");
}

export function injectMeta(html: string, path: string): string {
  const cleanPath = path.split("?")[0].split("#")[0].replace(/\/+$/, "") || "/";
  const meta = pageMeta[cleanPath];
  if (!meta) return html;

  const t = escapeHtml(meta.title);
  const d = escapeHtml(meta.description);
  const canonical = escapeHtml(meta.canonical);
  const ogImg = escapeHtml(meta.ogImage || defaultOgImage);

  html = html.replace(/<title>[^<]*<\/title>/, `<title>${t}</title>`);
  html = html.replace(
    /(<meta\s+name="description"\s+content=")([^"]*)(")/,
    `$1${d}$3`
  );
  html = html.replace(
    /(<link\s+rel="canonical"\s+href=")([^"]*)(")/,
    `$1${canonical}$3`
  );
  html = html.replace(
    /(<meta\s+property="og:title"\s+content=")([^"]*)(")/,
    `$1${t}$3`
  );
  html = html.replace(
    /(<meta\s+property="og:description"\s+content=")([^"]*)(")/,
    `$1${d}$3`
  );
  html = html.replace(
    /(<meta\s+property="og:url"\s+content=")([^"]*)(")/,
    `$1${canonical}$3`
  );
  html = html.replace(
    /(<meta\s+property="og:image"\s+content=")([^"]*)(")/,
    `$1${ogImg}$3`
  );
  html = html.replace(
    /(<meta\s+name="twitter:title"\s+content=")([^"]*)(")/,
    `$1${t}$3`
  );
  html = html.replace(
    /(<meta\s+name="twitter:description"\s+content=")([^"]*)(")/,
    `$1${d}$3`
  );
  html = html.replace(
    /(<meta\s+name="twitter:image"\s+content=")([^"]*)(")/,
    `$1${ogImg}$3`
  );

  // Inject JSON-LD structured data into <head> for search engine crawlers
  const jsonLdScripts = [
    `<script type="application/ld+json">${escapeJsonLd(JSON.stringify(localBusinessJsonLd))}</script>`,
    `<script type="application/ld+json">${escapeJsonLd(JSON.stringify(websiteJsonLd))}</script>`,
    `<script type="application/ld+json">${escapeJsonLd(JSON.stringify(organizationJsonLd))}</script>`,
  ].join("\n    ");

  html = html.replace("</head>", `    ${jsonLdScripts}\n  </head>`);

  return html;
}
