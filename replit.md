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
- **SEO**: react-helmet-async
- **フォント**: Noto Sans JP (本文), Oswald (見出し)

## ページ構成
- `/` - ホームページ（Ken Burnsヒーロー、選ばれる理由、クラス紹介、お客様の声、CTAセクション）
- `/about` - ジムについて（Our Story、Values、施設、アクセス）
- `/schedule` - クラス・料金（クラス紹介、週間スケジュール、料金プラン）
- `/instructors` - インストラクター（3名の詳細プロフィール）
- `/contact` - お問い合わせ（フォーム + Google Maps）

## デザインシステム
- プライマリグレー: `#4D5058`
- アクセントオレンジ: `#F2AC55`
- 背景グレー: `#F2F3F5`
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
    SEO.tsx             - SEOメタタグ
    GymLogo.tsx         - ロゴ
  lib/
    gymConfig.ts        - ジム設定・SEO設定
    queryClient.ts      - TanStack Query設定
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
- `client/public/images/hero-gym.png` - ヒーロー画像
- `client/public/images/class-kickboxing.png` - キックボクシングクラス
- `client/public/images/class-personal.png` - パーソナルトレーニング
- `client/public/images/class-circuit.png` - サーキットトレーニング
- `client/public/images/gym-interior.png` - ジム内観
- `client/public/images/gym-about.png` - ジム紹介用
