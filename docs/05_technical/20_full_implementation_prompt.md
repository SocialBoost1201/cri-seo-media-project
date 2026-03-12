# 転職SEOメディア デモサイト
実装開始用 完全版プロンプト

> 作成者ペルソナ：AIプロダクト開発ディレクター / エンタープライズWebアーキテクト / Next.js実装責任者 / SEOメディアテクニカルディレクター / UI/UXプロダクトデザイナー

---

## 前提条件

docs配下にNo.01〜19の設計書が配置済みである前提で進める。
**全設計書を読み込み、設計意図と実装優先度を理解してから着手すること。**

---

## 実装の基本方針

本サイトは単なるブログではなく、以下の導線を体現する **SEOメディア型プロダクト** として実装する。

```
検索流入 → 転職情報 → 比較 → 意思決定 → 求人送客 → Webist
```

ページ単位ではなく **プロダクト構造として一貫した実装** を行う。

---

## 技術前提

| 項目 | 技術 |
|------|------|
| フレームワーク | Next.js（App Router） |
| 言語 | TypeScript |
| スタイリング | Tailwind CSS |
| アニメーション | Framer Motion |
| デプロイ | Vercel |
| 実装方式 | 静的コンテンツベース / コンポーネント分割 / 再利用可能構造 |

---

## 推奨ディレクトリ構成

```
src/
├── app/
│   ├── page.tsx
│   ├── layout.tsx
│   ├── agent/
│   │   ├── page.tsx
│   │   ├── comparison/page.tsx
│   │   └── recommend/page.tsx
│   ├── it/
│   │   ├── page.tsx
│   │   └── agent/page.tsx
│   ├── second-career/
│   │   ├── page.tsx
│   │   └── agent/page.tsx
│   ├── sales/
│   │   ├── page.tsx
│   │   └── agent/page.tsx
│   └── executive/
│       ├── page.tsx
│       └── agent/page.tsx
├── components/
│   ├── layout/       (Header, Footer, Breadcrumbs)
│   ├── sections/     (HeroSection, CategorySection, etc.)
│   ├── cards/        (ArticleCard, CategoryCard, ComparisonCard, RankingCard)
│   ├── ui/           (SectionHeading, FAQAccordion, CTABox, Tag, Button)
│   ├── seo/          (JsonLd)
│   └── cta/          (CTABox variants)
├── data/
│   ├── categories.ts
│   ├── articles.ts
│   ├── comparisons.ts
│   └── faqs.ts
├── lib/
│   ├── constants.ts
│   ├── seo.ts
│   └── schema.ts
└── styles/
    └── globals.css
```

---

## 実装対象ページ

### 必須実装（フェーズA）

| ページ | URL |
|-------|-----|
| TOPページ | `/` |
| 転職エージェントカテゴリ | `/agent` |
| IT転職カテゴリ | `/it` |
| 転職エージェント比較 | `/agent/comparison` |
| おすすめ転職エージェント記事 | `/agent/recommend` |
| IT転職エージェント記事 | `/it/agent` |

### 追加推奨（フェーズB）

| ページ | URL |
|-------|-----|
| 第二新卒カテゴリ | `/second-career` |
| 第二新卒エージェント記事 | `/second-career/agent` |

### 余力があれば（フェーズC）

| ページ | URL |
|-------|-----|
| 営業転職カテゴリ | `/sales` |
| 営業転職エージェント記事 | `/sales/agent` |
| ハイクラス転職カテゴリ | `/executive` |
| ハイクラスエージェント記事 | `/executive/agent` |

---

## UIデザイン要件

| 項目 | 方針 |
|------|------|
| デザイン印象 | 知的 / 信頼性 / 先進的 / ミニマル / SaaSライク / 高級感 |
| 参考トーン | Stripe / Linear / Vercel / Notion |
| カラー | 背景:白 / テキスト:濃グレー / アクセント:ブルー系 / 補助:薄グレー |
| レイアウト | max-width 1200px / 十分な余白 / カードUI基調 |
| 禁止 | 下品なグラデーション / 過剰装飾 / 安っぽいブログUI |

---

## モーション要件

### 必須モーション

| 対象 | アニメーション |
|------|-------------|
| ヒーロー | フェードイン |
| カードホバー | 微浮上 |
| スクロール | 自然なフェードイン |
| CTA | 微拡大 |
| FAQ | アコーディオン |
| ヘッダー | スクロール追従背景変化 |

### 禁止

過剰なパララックス / 重いアニメーション / 読了を妨げる演出 / 安っぽいエフェクト / 不必要なループ

---

## SEO実装要件

| 要件 |
|------|
| title / meta description（全ページ） |
| 見出し階層の正常化 |
| パンくず（BreadcrumbList） |
| 内部リンク |
| 構造化データ（Article / FAQPage / BreadcrumbList / Organization / ItemList） |
| Open Graph 基本対応 |
| sitemap.xml / robots.txt |
| canonical設定 |

---

## GEO実装要件

| 要素 |
|------|
| 結論セクション（冒頭） |
| 比較表 |
| ランキング |
| 定義的な説明 |
| FAQ |
| 簡潔な要約 |
| 明確な比較基準 |

---

## CTA実装要件

| 配置場所 | CTA文言例 |
|---------|----------|
| 記事冒頭 | おすすめ転職エージェントを見る |
| 比較表下 | 求人を見る |
| 記事中盤 | 転職サービスを見る |
| 記事末尾 | IT転職向けサービスを見る |
| カテゴリ下部 | おすすめ記事を見る |
| TOP下部 | 求人を見る |

---

## 作業順序

1. docs配下の設計書をすべて確認
2. ディレクトリとファイルの作成
3. 共通レイアウト実装（Header / Footer / Breadcrumbs）
4. 共通UIコンポーネント実装（カード / CTA / FAQ / ボタン等）
5. TOPページ実装
6. カテゴリページ実装
7. 比較ページ実装
8. 記事ページ実装
9. SEO・構造化データ実装
10. モーション実装
11. レスポンシブ最適化
12. 最終確認

---

## 禁止事項

- 設計書未読で着手しない
- 安っぽいブログUIにしない
- 単なるテンプレート流用で終わらせない
- 派手なだけのアニメーションにしない
- SEO構造を壊す実装をしない
- 記事ページをテキスト羅列にしない
- CTAを広告バナーのようにしない

---

## 最終ゴール

クリーク・アンド・リバー社がこのデモサイトを見た時に、以下を一目で理解できる状態にすること。

- SEOメディアの必要性
- メディア構造の合理性
- UI品質
- 将来拡張性
- 送客導線の明確さ

---

## 更新履歴

| 日付 | 内容 | 担当 |
|------|------|------|
| 2026-03-12 | 初版作成 | - |
