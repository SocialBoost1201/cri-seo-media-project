# CLAUDE.md — cri-seo-media-project（技術エージェント向け憲法）

> 最終更新: 2026-03-19 | Package Manager: npm | Node: >=18.0.0

---

## コマンド一覧

```bash
npm run dev          # 開発サーバー起動
npm run build        # next build
npm run start        # 本番起動
npm run lint         # ESLint
```

---

## 技術スタック

| 項目 | 内容 |
|------|------|
| Framework | Next.js 15.x (App Router) |
| React | 19.x |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion v12 / GSAP 3 / Lenis |
| 3D | Three.js / @react-three/fiber / @react-three/drei |

---

## TypeScript 規約

```ts
// ISR パターン（メディアコンテンツの定期更新）
export const revalidate = 3600  // 1時間毎に再生成

// JSON-LD（Article必須）
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": article.title,
  "datePublished": article.publishedAt,
  "author": { "@type": "Organization", "name": "メディア名" },
}
```

---

## PPR & 最適化

```ts
experimental: { ppr: true }
images: { formats: ["image/avif", "image/webp"] }
// 記事一覧ページ → ISR + PPR でヘッダー静的配信・記事リスト動的
```

---

## AEO優先ルール（SEOメディア）

- 全記事ページに `Article` JSON-LD を必須実装
- 著者情報は `Person` スキーマで記述
- サイトルートに `WebSite` + `SearchAction` スキーマ
- canonical URL を全ページに明示

---

## セキュリティ

- Cloudflare Turnstile をコメント・お問い合わせフォームに実装
- 外部コンテンツのembedには Content Security Policy (CSP) を設定
