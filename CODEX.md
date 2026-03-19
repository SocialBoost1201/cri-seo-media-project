# CODEX.md — cri-seo-media-project（事業エージェント向け文脈）

> 最終更新: 2026-03-19 | グループ: B（テック系）

---

## Project Goal（事業の目的）

**「AI時代の検索エンジン・AIアシスタント対応SEOの実態と最新知見を、実践者に届ける」**

Google検索・Bing・ChatGPT検索・Perplexityなど、多様化する情報収集手段に対して
「どう最適化するか？」を解説・実証するSEO専門メディア。
「Crisi SEO」として情報の信頼性と速報性を武器にする。

ターゲット: Web担当者・マーケター・中小企業の経営者・フリーランスWebデザイナー

---

## Brand Identity

**「テック・先進・実験的」**
- 電気ブルー（#0040FF）＋ダークネイビー（#0D2E57）ベース
- データ・数値・図解を多用してコンテンツの信頼性を視覚化

---

## AEO（JSON-LD）ルール — このプロジェクトで最重要

```tsx
// WebSite（サイトルート）
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Crisi SEO",
  "potentialAction": {
    "@type": "SearchAction",
    "target": { "@type": "EntryPoint", "urlTemplate": "https://example.com/search?q={search_term_string}" },
    "query-input": "required name=search_term_string",
  },
}

// Article（全記事ページ必須）
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "記事タイトル",
  "datePublished": "2026-03-19T09:00:00+09:00",
  "dateModified":  "2026-03-19T11:00:00+09:00",
  "author": { "@type": "Person", "name": "著者名" },
  "publisher": { "@type": "Organization", "name": "Crisi SEO" },
  "wordCount": 3000,
}

// FAQPage（解説記事のFAQセクション）
{ "@type": "FAQPage", "mainEntity": [...] }
```

---

## プライバシー・AI生成ルール

- **AI生成記事は必ず人間が監修・編集すること**（事実確認なしの完全自動公開禁止）
- AI生成部分には「AIによる草案を人間が編集」と記事内に明記
- Google Search Console のデータ・内部アクセスログをAI学習に使用することは禁止
- Cloudflare Turnstile を問い合わせ・コメントフォームに実装

---

## PPR & Edge

```ts
experimental: { ppr: true }
images: { formats: ["image/avif", "image/webp"] }
// 記事一覧は ISR (revalidate=3600) + PPR で高速配信
// 記事本文はSSGを基本とし、カテゴリーフィルターのみ動的
```
