import { Helmet } from "react-helmet-async";
import { gymConfig, seoConfig } from "@/lib/gymConfig";
import { useLang, useT } from "@/lib/i18n";

interface SEOProps {
  title: string;
  description: string;
  path?: string;
  type?: "website" | "article";
  noindex?: boolean;
}

export default function SEO({ title: titleJa, description: descriptionJa, path = "", type = "website", noindex = false }: SEOProps) {
  const { lang } = useLang();
  const t = useT();
  const title = t(titleJa);
  const description = t(descriptionJa);
  const url = `${seoConfig.siteUrl}${path || "/"}`;
  const ogImage = `${seoConfig.siteUrl}${seoConfig.ogImage}`;

  return (
    <Helmet htmlAttributes={{ lang }}>
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
      <meta property="og:image:alt" content="DEEP.FIT - JR尼崎駅徒歩10分のサーキットトレーニング×キックボクシングジム" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content="DEEP.FIT - JR尼崎駅徒歩10分のサーキットトレーニング×キックボクシングジム" />
    </Helmet>
  );
}
