import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = join(__dirname, "..", "dist");

const siteUrl = "https://deep-amagasaki.com";
const defaultOgImage = `${siteUrl}/images/og-image.jpg`;

const seoMeta = JSON.parse(readFileSync(new URL("../src/lib/seoMeta.json", import.meta.url), "utf-8"));

const pageMeta = Object.fromEntries(
  Object.entries(seoMeta).map(([route, meta]) => [
    route,
    {
      ...meta,
      canonical: route === "/" ? `${siteUrl}/` : `${siteUrl}${route}`,
    },
  ])
);

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["SportsActivityLocation", "HealthClub"],
  "@id": `${siteUrl}/#gym`,
  name: "DEEP.FIT",
  alternateName: ["ディープフィット", "DEEP FIT", "DEEP.FIT 尼崎"],
  description: "DEEP.FITはJR尼崎駅徒歩10分のサーキットトレーニング×キックボクシングジムです。初心者・女性・一人参加でも通いやすく、綺麗で広い空間と個室スミスマシンも完備。無料体験受付中。",
  keywords: "サーキットトレーニング, キックボクシング, フィットネスジム, 尼崎, JR尼崎, 30分トレーニング, 初心者向けジム, 女性向けジム, パーソナルトレーニング",
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
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "サーキットトレーニングクラス",
        serviceType: "サーキットトレーニング",
        description: "有酸素運動とキックボクシングを組み合わせた30分のサーキットトレーニングクラス。初心者歓迎で、楽しみながら全身を効率よく動かせます。",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "パーソナルトレーニング",
        serviceType: "パーソナルトレーニング",
        description: "マンツーマンで目標に合わせた特別プログラム。引き締め・筋力強化を個別に対応します。",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "キッズクラス",
        serviceType: "キッズクラス",
        description: "楽しみながら体を動かすお子様向けプログラム。礼儀やスポーツの基礎も学べます。",
      },
    },
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: siteUrl,
  name: "DEEP.FIT サーキットトレーニング×キックボクシングジム",
  alternateName: ["DEEP.FIT", "DEEP FIT", "ディープフィット", "DEEP.FIT 尼崎"],
  inLanguage: "ja-JP",
  publisher: { "@id": `${siteUrl}/#gym` },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "運動経験がなくても大丈夫ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい。むしろ未経験から始める方が多いです。DEEP.FITでは、運動が久しぶりの方や未経験の方も多く通われています。メニューは一人ひとりのレベルに合わせて調整できるので、体力に自信がない方も安心して始められます。",
      },
    },
    {
      "@type": "Question",
      name: "サーキットトレーニングとはどんな内容ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "有酸素運動とキックボクシングの動きを組み合わせた、30分で全身を動かすトレーニングです。DEEP.FITのサーキットトレーニングは、楽しみながらダイエットや体力アップを目指せる内容になっています。初心者や運動が久しぶりの方でも自分のペースで取り組めるので、無理なく続けやすいのが特徴です。",
      },
    },
    {
      "@type": "Question",
      name: "女性一人でも通いやすいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい。女性一人でも通いやすい雰囲気です。実際におひとりで通われている方も多く、和気藹々としながらも無理に人に合わせすぎない空気があります。「格闘技ジムは少し不安」という方にも入りやすい環境です。",
      },
    },
    {
      "@type": "Question",
      name: "体験当日は何を持っていけばいいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "動きやすい服装だけで大丈夫です。タオル・飲み物があると快適ですが、手ぶらでも対応できます。グローブなどの道具は不要ですが、ミットやサンドバックを打つ際は、バンテージや軍手などを持参いただくことをお勧めします。",
      },
    },
    {
      "@type": "Question",
      name: "どれくらいで効果を実感できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "目安としては、1〜3か月ほどで何らかの変化を感じる方が多いです。まずは「疲れにくくなった」「気分が軽くなった」といった変化を感じやすく、見た目の変化はその後少しずつ出てきます。DEEP.FITでは、それぞれのペースで無理なく楽しく続けられることを大切にしています。",
      },
    },
    {
      "@type": "Question",
      name: "子どもを連れて行っても大丈夫ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、お子さま連れについてもお気軽にご相談ください。お子さま同伴のみならず、キッズクラスのご用意もあり、ご家庭の状況に合わせて通い方をご案内しています。気になることがあれば事前にLINEでご相談いただけます。",
      },
    },
    {
      "@type": "Question",
      name: "退会はいつでもできますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい。月単位でいつでも退会でき、違約金や解約手数料もありません。なお、割引価格の「DEEPプラス会員」は1年以上の継続を前提としたプランです。休会制度はご用意しておりませんのでご了承ください。ライフスタイルの変化があっても、退会のご連絡をいただければスムーズに対応します。",
      },
    },
  ],
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

function escapeHtml(str) {
  return str.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function escapeJsonLd(json) {
  return json.replace(/</g, "\\u003c");
}

function injectMeta(html, path) {
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

  const jsonLdList = [
    `<script type="application/ld+json">${escapeJsonLd(JSON.stringify(localBusinessJsonLd))}</script>`,
    `<script type="application/ld+json">${escapeJsonLd(JSON.stringify(websiteJsonLd))}</script>`,
    `<script type="application/ld+json">${escapeJsonLd(JSON.stringify(organizationJsonLd))}</script>`,
  ];
  if (cleanPath === "/") {
    jsonLdList.push(`<script type="application/ld+json">${escapeJsonLd(JSON.stringify(faqJsonLd))}</script>`);
  }
  const jsonLdScripts = jsonLdList.join("\n    ");

  html = html.replace("</head>", `    ${jsonLdScripts}\n  </head>`);

  return html;
}

const baseHtml = readFileSync(join(distDir, "index.html"), "utf-8");

for (const route of Object.keys(pageMeta)) {
  const rendered = injectMeta(baseHtml, route);

  if (route === "/") {
    writeFileSync(join(distDir, "index.html"), rendered, "utf-8");
  } else {
    const routeDir = join(distDir, route.slice(1));
    mkdirSync(routeDir, { recursive: true });
    writeFileSync(join(routeDir, "index.html"), rendered, "utf-8");
  }

  console.log(`prerendered: ${route}`);
}

const sitemapRoutes = [
  { loc: `${siteUrl}/`, changefreq: "weekly", priority: "1.0" },
  { loc: `${siteUrl}/about`, changefreq: "monthly", priority: "0.8" },
  { loc: `${siteUrl}/schedule`, changefreq: "weekly", priority: "0.8" },
  { loc: `${siteUrl}/instructors`, changefreq: "monthly", priority: "0.7" },
  { loc: `${siteUrl}/kids`, changefreq: "monthly", priority: "0.7" },
  { loc: `${siteUrl}/program`, changefreq: "monthly", priority: "0.7" },
  { loc: `${siteUrl}/personal-training`, changefreq: "monthly", priority: "0.7" },
  { loc: `${siteUrl}/gym-switch`, changefreq: "monthly", priority: "0.7" },
  { loc: `${siteUrl}/contact`, changefreq: "monthly", priority: "0.9" },
];

const today = new Date().toISOString().slice(0, 10);

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapRoutes
  .map(
    (r) =>
      `  <url>\n    <loc>${r.loc}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${r.changefreq}</changefreq>\n    <priority>${r.priority}</priority>\n  </url>`
  )
  .join("\n")}
</urlset>
`;

writeFileSync(join(distDir, "sitemap.xml"), sitemapXml, "utf-8");
console.log("generated: sitemap.xml");
