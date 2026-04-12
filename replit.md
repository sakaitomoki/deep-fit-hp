# DEEP.FIT - サーキット×キックボクシングジム ウェブサイト

## プロジェクト概要
兵庫県尼崎市にあるサーキットトレーニング×キックボクシングジム「DEEP.FIT」のプロフェッショナルな日本語マルチページウェブサイト。

## 技術スタック
- **フロントエンド**: React + Vite + TailwindCSS + Framer Motion
- **バックエンド**: Express.js + Node.js
- **データベース**: PostgreSQL (Drizzle ORM)
- **ルーティング**: wouter
- **データフェッチ**: TanStack React Query v5
- **フォーム**: react-hook-form + zodResolver
- **SEO**: react-helmet-async + JSON-LD構造化データ
- **フォント**: Noto Sans JP (本文), Oswald (見出し)

## ページ構成
- `/` - ホームページ（ヒーロー動画 → 3大特典 → GymIdentity → FAQ → Instagram雰囲気 → 口コミ → クラス紹介 → LINE相談 → 最終CTA）
- `/about` - ジムについて（Our Story、Values、施設、アクセス）
- `/schedule` - クラス・料金（クラス紹介、週間スケジュール、料金プラン）
- `/instructors` - インストラクター（3名の詳細プロフィール）
- `/contact` - お問い合わせ（フォーム + Google Maps）

## SEO実装
- **メタタグ**: 各ページに固有のtitle / meta description / canonical / OG / Twitter Card
- **構造化データ**: SportsActivityLocation + HealthClub (JSON-LD)、FAQPage (トップページ)
- **見出し構造**: 各ページにH1は1つ、H2/H3で適切な階層
- **画像SEO**: 全主要画像に自然な日本語alt
- **ローカルSEO**: geo meta tags、areaServed、NAP整合
- **sitemap.xml / robots.txt**: client/public/ に配置
- **パフォーマンス**: フォント最適化(preload)、画像lazy loading、LCPヒーロー画像preload
- **ターゲットキーワード**: JR尼崎, キックボクシング, 初心者, 女性歓迎, 無料体験, サーキットトレーニング

## デザインシステム
- プライマリゴールド: `#EAA53B` / `#F0A93A`
- プライマリグレー: `#4D5058`
- アクセントオレンジ: `#F2AC55`
- 背景グレー: `#F2F3F5`
- ダークセクション背景: `#0B0F15` / `#0F1520` / `#0E1219` / `#0C1018`
- カード背景: `#151D2B` / `#141C2A`
- フォント: Oswald（英語見出し）/ Noto Sans JP（日本語本文）

## ファイル構成
```
client/src/
  App.tsx               - ルーティング、プロバイダー
  pages/
    Home.tsx            - ホーム（最もリッチなアニメーション）
    About.tsx           - ジムについて
    Schedule.tsx        - クラス・料金
    Instructors.tsx     - インストラクター
    Contact.tsx         - お問い合わせ
  components/
    Navigation.tsx      - 固定ヘッダー（スクロール検知付き）
    Footer.tsx          - フッター（4カラム）
    SEO.tsx             - SEOメタタグ + JSON-LD構造化データ
    GymLogo.tsx         - ロゴ
  lib/
    gymConfig.ts        - ジム設定・SEO設定（ページ別タイトル/説明）
    queryClient.ts      - TanStack Query設定
client/public/
  robots.txt            - クローラー制御
  sitemap.xml           - 全公開ページのサイトマップ
  images/               - ジム画像・ロゴ
shared/
  schema.ts             - DBスキーマ（contact_inquiries）
server/
  routes.ts             - POST/GET /api/contact
  storage.ts            - DatabaseStorage
  db.ts                 - PostgreSQL接続
```

## データベーステーブル
- `contact_inquiries` - お問い合わせデータ（id, name, email, phone, inquiry_type, message, is_read, created_at）

## APIエンドポイント
- `POST /api/contact` - お問い合わせ送信
- `GET /api/contact` - お問い合わせ一覧取得

## 画像
- `client/public/images/gym-interior.png` - ジム内観（OG画像にも使用）
- `client/public/images/class-kickboxing.png` - キックボクシングクラス
- `client/public/images/class-personal.png` - パーソナルトレーニング
- `client/public/images/class-circuit.png` - サーキットトレーニング
- `client/public/images/gym-about.png` - ジム紹介用
- `client/public/images/smith-machine.jpeg` - 個室スミスマシン
- `client/public/images/deepfit-logo.png` - ロゴ
- `client/public/images/hero-gym.png` - ヒーロー画像

## SEO TODO（未確定情報）
- `seoConfig.siteUrl`: 現在 `https://deepfit.jp` — 正式ドメイン確定後に更新
- Google Business Profileとの連携: 正式URL確定後にsitemap/canonicalを更新
- OG画像: 現在 `gym-interior.png` を使用 — 専用OG画像（1200x630）作成推奨
