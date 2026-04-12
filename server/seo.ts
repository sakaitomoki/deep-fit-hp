const siteUrl = "https://deepfit.jp";
const ogImage = `${siteUrl}/images/gym-interior.png`;

interface PageMeta {
  title: string;
  description: string;
  canonical: string;
}

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

function escapeHtml(str: string): string {
  return str.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export function injectMeta(html: string, path: string): string {
  const cleanPath = path.split("?")[0].split("#")[0].replace(/\/+$/, "") || "/";
  const meta = pageMeta[cleanPath];
  if (!meta) return html;

  const t = escapeHtml(meta.title);
  const d = escapeHtml(meta.description);

  html = html.replace(/<title>[^<]*<\/title>/, `<title>${t}</title>`);
  html = html.replace(
    /(<meta\s+name="description"\s+content=")([^"]*)(")/,
    `$1${d}$3`
  );
  html = html.replace(
    /(<link\s+rel="canonical"\s+href=")([^"]*)(")/,
    `$1${escapeHtml(meta.canonical)}$3`
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
    /(<meta\s+name="twitter:title"\s+content=")([^"]*)(")/,
    `$1${t}$3`
  );
  html = html.replace(
    /(<meta\s+name="twitter:description"\s+content=")([^"]*)(")/,
    `$1${d}$3`
  );

  return html;
}
