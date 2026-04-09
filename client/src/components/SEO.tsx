import { Helmet } from "react-helmet-async";
import { gymConfig, seoConfig } from "@/lib/gymConfig";

interface SEOProps {
  title: string;
  description: string;
  path?: string;
  type?: "website" | "article";
  noindex?: boolean;
}

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  name: gymConfig.name,
  alternateName: gymConfig.nameJa,
  description: `兵庫県尼崎市のサーキット×キックボクシングジム。初心者・女性歓迎。無料体験受付中。`,
  url: seoConfig.siteUrl,
  logo: `${seoConfig.siteUrl}/favicon.png`,
  image: `${seoConfig.siteUrl}/images/hero-deepfit.png`,
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
    latitude: 34.7333,
    longitude: 135.4167,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Friday"],
      opens: "10:00",
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
  sameAs: [gymConfig.sns.instagram],
  priceRange: "¥8,800〜¥13,200/月",
  currenciesAccepted: "JPY",
  paymentAccepted: "Cash, Credit Card",
  hasMap: "https://maps.google.com/?q=尼崎市長洲東通1-9-25",
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "駐車場", value: true },
    { "@type": "LocationFeatureSpecification", name: "更衣室", value: true },
    { "@type": "LocationFeatureSpecification", name: "シャワー", value: false },
  ],
};

export default function SEO({ title, description, path = "", type = "website", noindex = false }: SEOProps) {
  const fullTitle = `${title} | ${gymConfig.name} - 尼崎市サーキット×キックボクシングジム`;
  const url = `${seoConfig.siteUrl}${path}`;
  const ogImage = `${seoConfig.siteUrl}/images/hero-deepfit.png`;

  return (
    <Helmet>
      {/* Basic */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={seoConfig.keywords} />
      <meta name="author" content={gymConfig.name} />
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow"} />
      <link rel="canonical" href={url} />

      {/* Geo (local SEO) */}
      <meta name="geo.region" content="JP-28" />
      <meta name="geo.placename" content="尼崎市, 兵庫県" />
      <meta name="geo.position" content="34.7333;135.4167" />
      <meta name="ICBM" content="34.7333, 135.4167" />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:locale" content={seoConfig.locale} />
      <meta property="og:site_name" content={seoConfig.siteName} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${gymConfig.name} - 尼崎市のキックボクシングジム`} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={`${gymConfig.name} - 尼崎市のキックボクシングジム`} />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(localBusinessJsonLd)}
      </script>
    </Helmet>
  );
}
