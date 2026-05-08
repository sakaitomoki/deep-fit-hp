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
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"} />
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
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:alt" content="DEEP.FIT - JR尼崎駅徒歩10分のサーキット×キックボクシングジム" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content="DEEP.FIT - JR尼崎駅徒歩10分のサーキット×キックボクシングジム" />

      {/* LocalBusiness/WebSite/Organization JSON-LD is injected server-side in server/seo.ts */}
      {/* Only page-specific FAQ JSON-LD is rendered here */}
      {faqItems && faqItems.length > 0 && (
        <script type="application/ld+json">
          {JSON.stringify(buildFaqJsonLd(faqItems))}
        </script>
      )}
    </Helmet>
  );
}
