# global-rules.md — cri-seo-media-project

> グループ: **B（SocialBoost / テック系）**  
> 最終更新: 2026-03-19

---

## 1. ブランドアイデンティティ

### カラーシステム

| 役割 | HEX | 用途 |
|------|-----|------|
| プライマリブルー | `#0040FF` | プライマリCTA |
| ダークネイビー | `#0D2E57` | ヘッダー・深いセクション |
| アクセント | `#00CFFF` | 強調・インタラクション |
| 背景 | `#FFFFFF` / `#F0F4FF` | ベース背景 |
| テキスト | `#0D1A2E` | 本文 |

### Tailwind v4 カラー定義
```css
@theme {
  --color-brand-primary: #0040FF;
  --color-brand-dark:    #0D2E57;
  --color-brand-accent:  #00CFFF;
  --color-bg-base:       #FFFFFF;
  --color-bg-subtle:     #F0F4FF;
  --color-text-base:     #0D1A2E;
  --color-text-muted:    #4A5568;
}
```

### ブランドトーン
- SEO / メディア系プロジェクトとして、情報の信頼性・専門性を前面に出す
- クリーンで読みやすい記事レイアウトを最優先
- 広告・アフィリエイト系であれば、コンテンツとの明確な区別を維持

---

## 2. デザインシステム

### 基本方針
- **コンテンツ優先・読みやすさ最重視**のメディアレイアウト
- 記事本文の `max-width: 720px` 、十分な `line-height`（1.8以上）
- 直線的・構造的なレイアウト（余分な装飾を排除）

---

## 3. アニメーション（Framer Motion v12）

このプロジェクトは `framer-motion@^12` を使用。

### ページ遷移・要素表示
```tsx
export const fadeIn = {
  hidden:  { opacity: 0, y: 16 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
  },
}
```

### スクロール連動アニメーション
```tsx
<motion.div
  variants={fadeIn}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-60px" }}
/>
```

### 禁止パターン
- コンテンツ読み込み前の長すぎるアニメーション（記事の可読性を妨げる）
- `duration` 0.6秒超のUI要素アニメーション

---

## 4. フォント

| 要素 | フォント |
|------|---------|
| 見出し | Noto Sans JP（700）|
| 本文 | Noto Sans JP（400）|
| 英文 | Inter |

### 記事本文の推奨設定
```css
article {
  font-size: 1.0625rem;    /* 17px */
  line-height: 1.85;
  letter-spacing: 0.02em;
  max-width: 720px;
  margin-inline: auto;
}
```

---

## 5. SEO（このプロジェクトの最重要要件）

### 必須実装項目
- 全ページに `<title>` / `<meta name="description">` を固有に設定
- `og:title` / `og:description` / `og:image` を設定
- 記事ページに `Article` JSON-LD を配置
- `sitemap.xml` を自動生成（`next-sitemap` 等）
- `robots.txt` を適切に設定

### 記事 JSON-LD テンプレート
```tsx
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": article.title,
  "datePublished": article.publishedAt,
  "dateModified": article.updatedAt,
  "author": { "@type": "Organization", "name": "cri-seo-media" },
  "publisher": {
    "@type": "Organization",
    "name": "cri-seo-media",
    "logo": { "@type": "ImageObject", "url": "https://example.com/logo.png" },
  },
}
```

### Core Web Vitals 基準
| 指標 | 目標 |
|------|------|
| LCP | 2.5秒以内 |
| INP | 200ms以下 |
| CLS | 0.1以下 |

---

## 6. 技術スタック最適化パターン

**スタック**: Next.js 16 / React 19 / Framer Motion v12 / Tailwind CSS v4

### ISR（コンテンツ鮮度管理）
```tsx
// 記事ページ: ISR推奨
export const revalidate = 86400  // 24時間

// TOPページ: より短いサイクル
export const revalidate = 3600   // 1時間
```

### 画像最適化
```tsx
// 記事アイキャッチは必ずnext/imageで
import Image from "next/image"
<Image
  src={post.eyecatch}
  alt={post.title}
  width={1200}
  height={630}
  priority // LCP対象のみ
  sizes="(max-width: 768px) 100vw, 1200px"
/>
```

---

## 7. コンポーネント設計ルール

- `src/components/article/` → 記事表示関連
- `src/components/layout/` → ヘッダー・フッター・サイドバー
- `src/components/ui/` → 汎用UIコンポーネント
- `any` 型の使用禁止
- `console.log` の本番コードへの混入禁止

---

## 8. アニメーション アクセシビリティ基準（2026追加）

### useReducedMotion 必須ルール

```tsx
"use client"
import { motion, useReducedMotion } from "framer-motion"

export function FadeIn({ children }: { children: React.ReactNode }) {
  const prefersReduced = useReducedMotion()
  return (
    <motion.div
      initial={prefersReduced ? false : { opacity: 0, y: 16 }}
      whileInView={prefersReduced ? {} : { opacity: 1, y: 0 }}
      transition={prefersReduced ? {} : { duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, margin: "-60px" }}
    >{children}</motion.div>
  )
}
```

### Suspense による重エフェクトの遅延

```tsx
import { Suspense } from "react"
import dynamic from "next/dynamic"
const HeavyWidget = dynamic(() => import("@/components/HeavyWidget"), { ssr: false })
<Suspense fallback={<div className="animate-pulse bg-gray-100 h-48 rounded-lg" />}>
  <HeavyWidget />
</Suspense>
```

### SEOサイト特有の注意点
- 記事本文の読み込み完了前のアニメーションは LCP を悪化させるため禁止
- `next/dynamic` の `loading` オプションを必ず指定し、CLS を最小化する
- Lighthouse Performance 90+ 維持・LCP要素にアニメーション禁止

---

## Tailwind CSS v4 アニメーション定義（2026追加）

> このプロジェクトはTailwind CSS v4（`@tailwindcss/postcss`使用）のため、`globals.css` に直接定義する。

### app/globals.css への追記

```css
/* =============================================
   2026: Shimmer・Floating・Glow アニメーション
   ============================================= */
@keyframes shimmer {
  0%   { background-position: -200% 0; }
  100% { background-position:  200% 0; }
}

@keyframes floating {
  0%, 100% { transform: translateY(0px); }
  50%       { transform: translateY(-8px); }
}

@keyframes floating-slow {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  33%       { transform: translateY(-5px) rotate(0.4deg); }
  66%       { transform: translateY(-2px) rotate(-0.3deg); }
}

@keyframes glow-pulse {
  0%, 100% { box-shadow: 0 0 8px rgba(0, 64, 255, 0.3); }
  50%       { box-shadow: 0 0 24px rgba(0, 64, 255, 0.7); }
}

@keyframes slide-in-left {
  0%   { opacity: 0; transform: translateX(-20px); }
  100% { opacity: 1; transform: translateX(0); }
}

/* =============================================
   Shimmer グラデーション共通ユーティリティ
   スケルトンUIに適用: className="animate-shimmer shimmer-bg"
   ============================================= */
@utility shimmer-bg {
  background: linear-gradient(
    90deg,
    theme(colors.gray.200) 25%,
    theme(colors.gray.100) 50%,
    theme(colors.gray.200) 75%
  );
  background-size: 200% 100%;
}

/* ============
   アニメーション
   ============ */
@utility animate-shimmer       { animation: shimmer 1.8s linear infinite; }
@utility animate-floating      { animation: floating 3.5s ease-in-out infinite; }
@utility animate-floating-slow { animation: floating-slow 8.0s ease-in-out infinite; }
@utility animate-glow-pulse    { animation: glow-pulse 2.5s ease-in-out infinite; }
@utility animate-slide-in-left { animation: slide-in-left 0.4s cubic-bezier(0.16, 1, 0.3, 1) both; }
```

### 使用例

```tsx
// スケルトンローディング
<div className="animate-shimmer shimmer-bg h-48 rounded-lg" />

// 浮遊するアイコン・バッジ
<div className="animate-floating">
  <Icon />
</div>

// CTAボタンのグロー
<button className="animate-glow-pulse bg-brand-primary text-white px-6 py-3 rounded-lg">
  今すぐ始める
</button>
```

