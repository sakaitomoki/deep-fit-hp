import { Helmet } from "react-helmet-async";
import { gymConfig, seoConfig } from "@/lib/gymConfig";

interface FAQItem {
  q: string;
  aLead: string;
  aBody: string;
}

interface SEOProps {
  title: string;
  description: string;
  path?: string;
  type?: "website" | "article";
  noindex?: boolean;
  faqItems?: FAQItem[];
}

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["SportsActivityLocation", "HealthClub"],
  name: gymConfig.name,
  alternateName: gymConfig.nameJa,
  description: "DEEP.FITはJR尼崎駅徒歩10分のサーキット×キックボクシングジムです。初心者・女性・一人参加でも通いやすく、綺麗で広い空間と個室スミスマシンも完備。無料体験受付中。",
  url: seoConfig.siteUrl,
  logo: `${seoConfig.siteUrl}/images/deepfit-logo.png`,
  image: [
    `${seoConfig.siteUrl}/images/gym-interior.png`,
    `${seoConfig.siteUrl}/images/class-kickboxing.png`,
    `${seoConfig.siteUrl}/images/gym-about.png`,
  ],
  telephone: gymConfig.phone,
  email: gymConfig.email,
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
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Wednesday", "Friday"],
      opens: "10:00",
      closes: "13:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Wednesday", "Friday"],
      opens: "17:00",
      closes: "22:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday"],
      opens: "10:00",
      closes: "13:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday"],
      opens: "17:00",
      closes: "22:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "10:00",
      closes: "15:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Sunday"],
      opens: "10:00",
      closes: "14:00",
    },
  ],
  sameAs: [
    gymConfig.sns.instagram,
    gymConfig.sns.line,
  ],
  areaServed: [
    {
      "@type": "City",
      name: "尼崎市",
      containedInPlace: {
        "@type": "State",
        name: "兵庫県",
      },
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

function buildFaqJsonLd(items: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: `${item.aLead} ${item.aBody}`,
      },
    })),
  };
}

export default function SEO({ title, description, path = "", type = "website", noindex = false, faqItems }: SEOProps) {
  const url = `${seoConfig.siteUrl}${path || "/"}`;
  const ogImage = `${seoConfig.siteUrl}${seoConfig.ogImage}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={seoConfig.keywords} />
      <meta name="author" content={gymConfig.name} />
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow"} />
      <link rel="canonical" href={url} />

      <meta name="geo.region" content="JP-28" />
      <meta name="geo.placename" content="尼崎市, 兵庫県" />
      <meta name="geo.position" content="34.7265551;135.4332379" />
      <meta name="ICBM" content="34.7265551, 135.4332379" />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:locale" content={seoConfig.locale} />
      <meta property="og:site_name" content={seoConfig.siteName} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="DEEP.FIT - JR尼崎駅徒歩10分のサーキット×キックボクシングジム" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content="DEEP.FIT - JR尼崎駅徒歩10分のサーキット×キックボクシングジム" />

      <script type="application/ld+json">
        {JSON.stringify(localBusinessJsonLd)}
      </script>

      {faqItems && faqItems.length > 0 && (
        <script type="application/ld+json">
          {JSON.stringify(buildFaqJsonLd(faqItems))}
        </script>
      )}
    </Helmet>
  );
}
