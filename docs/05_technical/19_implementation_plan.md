# 転職SEOメディア構築プロジェクト
実装計画書

---

## 1. プロジェクト概要

クリーク・アンド・リバー社の既存求人メディア「Webist」に対し、検索上流ユーザーを獲得するための転職SEOメディアのデモサイトを構築する。

| 項目 | 内容 |
|------|------|
| プロジェクト名 | 転職SEOメディア構築デモサイト |
| クライアント | 株式会社クリーク・アンド・リバー社 |
| 目的 | SEOメディア戦略プロトタイプの提示 |
| 技術スタック | Next.js / TypeScript / Tailwind CSS / Framer Motion |
| デプロイ先 | Vercel |

```
検索流入 → 転職情報 → サービス比較 → 求人送客 → Webist
```

---

## 2. 実装目的

1. SEOメディア構造を実装として可視化する
2. 検索流入から求人送客までのユーザー導線を体験可能にする
3. Webistとの役割分担を明確に提示する
4. 拡張可能なアーキテクチャであることを示す

---

## 3. 設計書の横断分析

### 3.1 各設計書の対応関係

| No | ファイル名 | 実装フェーズとの対応 |
|----|----------|------------------|
| 01 | project_proposal_summary | 全体方針（参照のみ） |
| 02 | requirements_definition | Phase 1〜12 全体 |
| 03 | business_strategy_overview | 全体方針（参照のみ） |
| 04 | seo_strategy_design | Phase 7 |
| 05 | geo_design | Phase 7 |
| 06 | sitemap_design | Phase 1, 2 |
| 07 | screen_list | Phase 3〜6 |
| 08 | information_architecture | Phase 3〜6 |
| 09 | wireframe_design | Phase 3〜6 |
| 10 | ui_design_specification | Phase 1, 2 |
| 11 | motion_animation_design | Phase 8 |
| 12 | cta_design | Phase 8 |
| 13 | content_strategy_design | Phase 6（データ設計） |
| 14 | comparison_logic_design | Phase 5（データ設計） |
| 15 | eeat_design | Phase 7（構造化データ） |
| 16 | technical_seo_design | Phase 7 |
| 17 | demo_presentation_scenario | Phase 12（デモ準備） |
| 18 | antigravity_implementation_prompt | 全体統合（参照のみ） |
| 19 | implementation_plan | 本書 |
| 20 | full_implementation_prompt | 実装指示（参照のみ） |
| 21 | ai_diagnosis_design | Phase 11 |

### 3.2 重複箇所

以下の内容が複数設計書間で重複しているが、**矛盾はない**。

| 重複内容 | 記載箇所 |
|---------|---------|
| カテゴリ一覧（5カテゴリ） | 02, 04, 06, 07, 13, 18 |
| KPI（50,000PV / 200,000PV） | 01, 03, 04, 08 |
| 記事構造テンプレート | 04, 05, 08, 13, 18 |
| CTA配置ルール | 08, 12, 18 |
| 構造化データ一覧 | 05, 15, 16 |
| 将来拡張機能 | 01, 02, 03, 11, 13 |

### 3.3 矛盾箇所

> 設計書間に重大な矛盾は検出されなかった。

軽微な差異として以下がある。

| 箇所 | 内容 | 対応方針 |
|------|------|---------|
| 比較項目 | 02では「対応職種」、14では「対応業界」 | **「対応業界」に統一**（14の方が詳細） |
| 記事数 | 02では「5〜10記事」、04/13では「50記事」 | デモは **5〜10記事**、50記事は本番想定 |
| Core Web Vitals INP | 02/18では未記載、16では200ms以下 | **INP 200ms以下を採用** |

### 3.4 不足箇所

| 不足項目 | 対応方針 |
|---------|---------|
| ダミーコンテンツの具体的な本文 | 実装時にデモ用テキストを作成 |
| ダミー転職エージェントのサービス名 | 架空エージェント名を5〜8件作成 |
| OGP画像の仕様 | 実装時に設計（1200×630px） |
| favicon仕様 | 実装時にプレースホルダーを作成 |
| 404ページ設計 | Phase 2で簡易実装 |

---

## 4. 実装対象範囲

### 実装対象

| 種別 | 内容 | 数量 |
|------|------|------|
| TOPページ | SCR-001 | 1 |
| カテゴリページ | SCR-002〜006 | 5 |
| 比較ページ | SCR-007 | 1 |
| 記事ページ | SCR-008〜012 | 5 |
| AIキャリア診断ページ | `/ai-career-diagnosis` | 1 |
| 共通ヘッダー | SCR-C01 | 1 |
| 共通フッター | SCR-C02 | 1 |
| パンくず | SCR-C03 | 1 |
| 関連記事モジュール | SCR-C04 | 1 |
| CTAモジュール | SCR-C05 | 1 |

### 非実装範囲

| 機能 | 理由 |
|------|------|
| 会員登録 / ログイン | デモ対象外 |
| 求人応募機能 | Webist側の機能 |
| CMS管理画面 | デモ対象外 |
| 実データ連携 | 静的デモのため |
| ダークモード | 将来拡張 |
| サイト内検索 | 将来拡張 |

---

## 5. 推奨ディレクトリ構成

```
cri-seo-media-project/
├── docs/                          # 設計書（配置済み）
├── src/
│   ├── app/                       # Next.js App Router
│   │   ├── layout.tsx             # ルートレイアウト
│   │   ├── page.tsx               # TOPページ
│   │   ├── agent/
│   │   │   ├── page.tsx           # 転職エージェントカテゴリ
│   │   │   ├── comparison/
│   │   │   │   └── page.tsx       # 比較ページ
│   │   │   └── recommend/
│   │   │       └── page.tsx       # おすすめ記事
│   │   ├── it/
│   │   │   ├── page.tsx           # IT転職カテゴリ
│   │   │   └── agent/
│   │   │       └── page.tsx       # IT転職エージェント記事
│   │   ├── second-career/
│   │   │   ├── page.tsx           # 第二新卒カテゴリ
│   │   │   └── agent/
│   │   │       └── page.tsx       # 第二新卒エージェント記事
│   │   ├── sales/
│   │   │   ├── page.tsx           # 営業転職カテゴリ
│   │   │   └── agent/
│   │   │       └── page.tsx       # 営業転職エージェント記事
│   │   ├── executive/
│   │   │   ├── page.tsx           # ハイクラス転職カテゴリ
│   │   │   └── agent/
│   │   │       └── page.tsx       # ハイクラスエージェント記事
│   │   └── ai-career-diagnosis/
│   │       └── page.tsx           # AIキャリア診断ページ
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Breadcrumb.tsx
│   │   ├── ui/
│   │   │   ├── ArticleCard.tsx
│   │   │   ├── ComparisonCard.tsx
│   │   │   ├── RankingCard.tsx
│   │   │   ├── CategoryCard.tsx
│   │   │   ├── CTACard.tsx
│   │   │   ├── FAQAccordion.tsx
│   │   │   └── Button.tsx
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── CategorySection.tsx
│   │   │   ├── ComparisonTable.tsx
│   │   │   ├── RankingSection.tsx
│   │   │   ├── RelatedArticles.tsx
│   │   │   ├── FAQSection.tsx
│   │   │   └── CTASection.tsx
│   │   ├── diagnosis/
│   │   │   ├── DiagnosisIntro.tsx
│   │   │   ├── DiagnosisQuestionCard.tsx
│   │   │   ├── DiagnosisProgress.tsx
│   │   │   ├── DiagnosisLoading.tsx
│   │   │   ├── DiagnosisResultCard.tsx
│   │   │   ├── RecommendedServices.tsx
│   │   │   └── DiagnosisFAQ.tsx
│   │   └── seo/
│   │       ├── JsonLd.tsx
│   │       └── MetaTags.tsx
│   ├── data/
│   │   ├── categories.ts
│   │   ├── articles.ts
│   │   ├── agents.ts
│   │   ├── comparisons.ts
│   │   ├── faqs.ts
│   │   ├── navigation.ts
│   │   ├── diagnosisQuestions.ts
│   │   └── diagnosisResults.ts
│   ├── lib/
│   │   ├── constants.ts
│   │   ├── utils.ts
│   │   └── diagnosis.ts
│   └── styles/
│       └── globals.css
├── public/
│   ├── images/
│   └── favicon.ico
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 6. 実装フェーズ一覧

---

### Phase 1：土台構築

| 項目 | 内容 |
|------|------|
| 目的 | Next.jsプロジェクト初期化とデザインシステムの土台を構築する |
| 対応設計書 | 02_requirements_definition / 10_ui_design_specification / 06_sitemap_design |

#### 実装内容

| タスク | 詳細 |
|--------|------|
| Next.jsプロジェクト作成 | App Router / TypeScript / Tailwind CSS |
| Tailwind CSS設定 | カラートークン・タイポグラフィ・レイアウト変数の定義 |
| グローバルCSS | Inter / Noto Sans フォント読み込み、リセットCSS |
| Framer Motion導入 | パッケージインストール |
| ディレクトリ構成作成 | `components/` `data/` `lib/` `styles/` |
| デザイントークン定義 | 背景: `#FFFFFF` / アクセント: `#2563EB` / テキスト: `#1A1A1A` / サブ背景: `#F5F7FA` |

#### 対象ファイル

- `package.json`
- `tailwind.config.ts`
- `next.config.ts`
- `src/styles/globals.css`
- `src/lib/constants.ts`

#### 依存関係

なし（最初のフェーズ）

#### 完了条件

- `npm run dev` でローカルサーバーが起動する
- Tailwind CSSのカスタムカラーが適用される
- Framer Motionがインポート可能

#### 確認方法

- `npm run dev` の起動確認
- ブラウザで `localhost:3000` アクセス

---

### Phase 2：共通レイアウト実装

| 項目 | 内容 |
|------|------|
| 目的 | 全ページ共通のヘッダー・フッター・レイアウトを実装する |
| 対応設計書 | 07_screen_list (SCR-C01〜C05) / 09_wireframe_design / 10_ui_design_specification |

#### 実装内容

| コンポーネント | 詳細 |
|-------------|------|
| Header | ロゴ / グローバルナビ（5カテゴリ）/ 比較CTA / モバイルメニュー |
| Footer | メディア説明 / カテゴリリンク / 会社情報 / ポリシーリンク |
| Breadcrumb | 動的パンくず / BreadcrumbList構造化データ |
| RootLayout | `layout.tsx` にHeader / Footer配置 / メタデータ設定 |
| 404ページ | 簡易not-foundページ |

#### 対象ファイル

- `src/app/layout.tsx`
- `src/app/not-found.tsx`
- `src/components/layout/Header.tsx`
- `src/components/layout/Footer.tsx`
- `src/components/layout/Breadcrumb.tsx`
- `src/data/navigation.ts`

#### 依存関係

Phase 1 完了

#### 完了条件

- ヘッダーに5カテゴリのグローバルナビが表示される
- フッターに運営者情報・カテゴリリンク・ポリシーリンクが表示される
- モバイル時にハンバーガーメニューが動作する
- パンくずが各ページで動的に表示される

#### 確認方法

- ブラウザでPC / モバイル表示を確認
- グローバルナビのリンク遷移確認

---

### Phase 3：TOPページ実装

| 項目 | 内容 |
|------|------|
| 目的 | メディア全体の入口としてのTOPページを実装する |
| 対応設計書 | 07 (SCR-001) / 08 / 09 / 10 |

#### 実装内容

| セクション | 詳細 |
|-----------|------|
| HeroSection | メディアタイトル / サブタイトル / 主要CTA |
| CategorySection | 5カテゴリのカードUI |
| ComparisonHighlight | 転職エージェント比較カードの導線 |
| PopularArticles | 人気記事カード一覧 |
| FAQSection | TOPページ用FAQ（5項目） |
| CTASection | 求人送客CTA |

#### 対象ファイル

- `src/app/page.tsx`
- `src/components/sections/HeroSection.tsx`
- `src/components/sections/CategorySection.tsx`
- `src/components/sections/FAQSection.tsx`
- `src/components/sections/CTASection.tsx`
- `src/components/ui/CategoryCard.tsx`
- `src/components/ui/ArticleCard.tsx`
- `src/components/ui/FAQAccordion.tsx`
- `src/data/categories.ts`
- `src/data/faqs.ts`

#### 依存関係

Phase 2 完了

#### 完了条件

- TOPページに全セクションが表示される
- カテゴリカードから各カテゴリページへ遷移可能
- FAQアコーディオンが開閉する
- CTAボタンが表示される

#### 確認方法

- ブラウザでTOPページの全セクション表示確認
- カテゴリカードのリンク遷移確認
- FAQの開閉動作確認

---

### Phase 4：カテゴリページ実装

| 項目 | 内容 |
|------|------|
| 目的 | 5カテゴリのハブページを実装する |
| 対応設計書 | 07 (SCR-002〜006) / 08 / 09 |

#### 実装内容

| タスク | 詳細 |
|--------|------|
| カテゴリページテンプレート | カテゴリタイトル / 説明 / おすすめ記事 / 人気記事 / 関連記事 / CTA |
| 5カテゴリページ作成 | agent / it / second-career / sales / executive |
| ダミーコンテンツ | 各カテゴリの説明文・記事データ |

#### 対象ファイル

- `src/app/agent/page.tsx`
- `src/app/it/page.tsx`
- `src/app/second-career/page.tsx`
- `src/app/sales/page.tsx`
- `src/app/executive/page.tsx`
- `src/components/sections/RelatedArticles.tsx`
- `src/data/articles.ts`

#### 依存関係

Phase 3 完了（ArticleCard等のコンポーネント共有）

#### 完了条件

- 5カテゴリすべてのページが表示される
- 各カテゴリページからおすすめ記事・比較ページへ遷移可能
- カテゴリごとに異なるタイトル・説明が表示される

#### 確認方法

- 全5カテゴリページのブラウザ表示確認
- 内部リンクの遷移確認

---

### Phase 5：比較ページ実装

| 項目 | 内容 |
|------|------|
| 目的 | 意思決定の中心となる転職エージェント比較ページを実装する |
| 対応設計書 | 07 (SCR-007) / 08 / 09 / 14_comparison_logic_design |

#### 実装内容

| タスク | 詳細 |
|--------|------|
| ComparisonTable | サービス名 / 求人数 / 年収帯 / 対応業界 / サポート / 特徴 / 総合評価 / CTA |
| RankingSection | 1位〜3位のランキングカード |
| 比較基準セクション | 評価方法・重み付けの明示 |
| ダミーエージェントデータ | 架空5〜8サービスのデータ作成 |
| FAQ | 比較ページ用FAQ（5項目） |

#### 対象ファイル

- `src/app/agent/comparison/page.tsx`
- `src/components/sections/ComparisonTable.tsx`
- `src/components/sections/RankingSection.tsx`
- `src/components/ui/ComparisonCard.tsx`
- `src/components/ui/RankingCard.tsx`
- `src/data/agents.ts`
- `src/data/comparisons.ts`

#### 依存関係

Phase 4 完了

#### 完了条件

- 比較テーブルにダミーエージェントデータが表示される
- ランキング1〜3位が表示される
- 比較基準が明示される
- モバイルで比較テーブルが横スクロール可能
- CTAボタンが配置される

#### 確認方法

- ブラウザでPC / モバイル表示確認
- 比較テーブルの横スクロール動作確認

---

### Phase 6：記事ページ実装

| 項目 | 内容 |
|------|------|
| 目的 | 検索流入の中心となる記事ページを実装する |
| 対応設計書 | 07 (SCR-008〜012) / 08 / 09 / 13 |

#### 実装内容

| タスク | 詳細 |
|--------|------|
| 記事ページテンプレート | タイトル / リード文 / 結論 / 比較表 / ランキング / 解説 / メリット・デメリット / FAQ / 関連記事 / CTA |
| 5記事ページ作成 | agent/recommend, it/agent, second-career/agent, sales/agent, executive/agent |
| ダミー記事コンテンツ | 各記事のタイトル・本文・比較データ・FAQ |
| CTAの複数配置 | 記事冒頭 / 比較表下 / 記事中盤 / 末尾 |

#### 対象ファイル

- `src/app/agent/recommend/page.tsx`
- `src/app/it/agent/page.tsx`
- `src/app/second-career/agent/page.tsx`
- `src/app/sales/agent/page.tsx`
- `src/app/executive/agent/page.tsx`
- `src/components/ui/CTACard.tsx`

#### 依存関係

Phase 5 完了（ComparisonTable / RankingSection の再利用）

#### 完了条件

- 5記事すべてが記事構造テンプレートに従って表示される
- 各記事にCTAが3〜5箇所配置される
- FAQ、比較表、ランキングが記事内に表示される
- 関連記事リンクが表示される

#### 確認方法

- 全5記事ページのブラウザ表示確認
- CTA配置の確認
- 関連記事リンクの遷移確認

---

### Phase 7：SEO / GEO実装

| 項目 | 内容 |
|------|------|
| 目的 | テクニカルSEO・構造化データ・AI検索対応を実装する |
| 対応設計書 | 04 / 05 / 15 / 16 |

#### 実装内容

| タスク | 詳細 |
|--------|------|
| メタデータ | 各ページのtitle / description（Next.js Metadata API） |
| 構造化データ | Article / FAQPage / BreadcrumbList / Organization / ItemList |
| OGP | 各ページのog:title / og:description / og:image |
| sitemap.xml | 全ページの自動生成 |
| robots.txt | クロール制御設定 |
| canonical | 全ページにcanonical設定 |
| GEO対応確認 | 結論 / 比較表 / ランキング / FAQ / 定義セクションの完備確認 |

#### 対象ファイル

- 各ページの `metadata` export
- `src/components/seo/JsonLd.tsx`
- `src/app/sitemap.ts`
- `src/app/robots.ts`

#### 依存関係

Phase 6 完了（全ページ実装済みが前提）

#### 完了条件

- 全ページにtitle / descriptionが設定される
- 構造化データがGoogle Rich Results Testで検証可能
- sitemap.xmlに全ページが含まれる
- robots.txtが正しく設定される

#### 確認方法

- `npm run build` でビルドエラーなし
- Google Rich Results Test でJSON-LD検証
- `/sitemap.xml` へのアクセス確認
- `/robots.txt` へのアクセス確認

---

### Phase 8：モーション / CTA実装

| 項目 | 内容 |
|------|------|
| 目的 | プロダクト品質のUI体験を実現するモーションとCTAを強化する |
| 対応設計書 | 11 / 12 |

#### 実装内容

| タスク | 詳細 |
|--------|------|
| ヒーローアニメーション | フェードイン + 上方向スライド（600ms） |
| カードホバー | scale 1.03 + shadow強化（200ms） |
| スクロールアニメーション | フェードイン + translateY（500ms） |
| CTAホバー | scale 1.05（200ms） |
| CTAクリック | 微縮小 0.97 |
| FAQアコーディオン | 高さアニメーション（250ms, ease-out） |
| ヘッダースクロール | 背景フェード（透明→白, 200ms） |
| スケルトンUI | 記事カード / 比較テーブルのローディング |

#### 対象ファイル

- 各コンポーネントにFramer Motion追加
- `src/components/ui/` 以下のホバーアニメーション

#### 依存関係

Phase 6 完了（コンポーネントが存在する前提）

#### 完了条件

- ヒーローセクションにフェードインアニメーションが適用される
- カードホバーでshadow + scaleが変化する
- `prefers-reduced-motion` 設定でアニメーション無効化される

#### 確認方法

- ブラウザでアニメーション動作確認
- アクセシビリティ設定でモーション無効化確認

---

### Phase 9：レスポンシブ / パフォーマンス最適化

| 項目 | 内容 |
|------|------|
| 目的 | モバイル対応とCore Web Vitals最適化を行う |
| 対応設計書 | 02 / 10 / 16 |

#### 実装内容

| タスク | 詳細 |
|--------|------|
| レスポンシブ確認 | PC / Tablet / Smartphone の全ページ表示確認 |
| Mobile First調整 | 結論 / 比較 / ランキング / CTAを上部優先表示 |
| 比較テーブル横スクロール | モバイルでの横スクロール対応 |
| 画像最適化 | WebP / Next.js Image / Lazy Load |
| タップ領域 | 48px以上の確保 |
| フォント最適化 | font-display: swap |

#### パフォーマンス目標

| 指標 | 目標値 |
|------|--------|
| LCP | 2.5秒以内 |
| CLS | 0.1以下 |
| INP | 200ms以下 |

#### 依存関係

Phase 8 完了

#### 完了条件

- PC / Tablet / Smartphone で全ページが適切に表示される
- PageSpeed Insights で各項目が目標値を満たす
- モバイルで比較テーブルが横スクロール可能

#### 確認方法

- Chrome DevToolsのレスポンシブモードで確認
- PageSpeed Insights でスコア計測
- `npm run build` でビルドサイズ確認

---

### Phase 10：AI診断機能 実装準備

| 項目 | 内容 |
|------|------|
| 目的 | AI診断機能の基盤（データ・ロジック・コンポーネント）を構築する |
| 対応設計書 | 21_ai_diagnosis_design |

#### 実装内容

| タスク | 詳細 |
|--------|------|
| 診断データ設計 | `data/diagnosisQuestions.ts`（6問・選択肢・スコア）|
| 結果データ設計 | `data/diagnosisResults.ts`（5タイプの結果情報）|
| 判定ロジック | `lib/diagnosis.ts`（スコア集計・結果判定・将来AI差替可能）|
| 診断コンポーネント | Intro / QuestionCard / Progress / Loading / ResultCard / RecommendedServices / FAQ |

#### 対象ファイル

- `src/data/diagnosisQuestions.ts`
- `src/data/diagnosisResults.ts`
- `src/lib/diagnosis.ts`
- `src/components/diagnosis/*.tsx`（7ファイル）

#### 依存関係

Phase 6 完了（共通コンポーネント利用）

#### 完了条件

- 6問の質問データと5タイプの結果データが定義される
- 判定ロジックが正しくスコア集計・結果返却する
- 診断コンポーネントが個別にレンダリング可能

#### 確認方法

- データファイルのTypeScriptコンパイル確認
- ロジックのユニットテスト的な動作確認

---

### Phase 11：AI診断ページ統合・導線追加

| 項目 | 内容 |
|------|------|
| 目的 | AI診断ページを実装し、既存サイトへ導線を追加する |
| 対応設計書 | 21_ai_diagnosis_design |

#### 実装内容

| タスク | 詳細 |
|--------|------|
| 診断ページ | `/ai-career-diagnosis`（導入→質問→診断中演出→結果→CTA）|
| 診断中演出 | 0.8〜1.5秒のローディング+分析文言 |
| 結果からの導線 | 各カテゴリ・記事・比較ページへの遷移 |
| TOPページ導線 | AIキャリア診断カードを中段に追加 |
| 記事ページ導線 | 診断CTA文言を追加 |
| SEO対応 | title / description / BreadcrumbList / FAQPage |
| モーション | 質問フェード / 進捗バー / 結果フェードイン |

#### 対象ファイル

- `src/app/ai-career-diagnosis/page.tsx`
- `src/app/page.tsx`（診断導線カード追加）
- 記事ページ各種（診断CTA追加）

#### 依存関係

Phase 10 完了

#### 完了条件

- `/ai-career-diagnosis` で診断体験が一通り動作する
- 結果から該当カテゴリ・記事ページへ遷移可能
- TOPページ・記事ページから診断へ導線がある
- SEO要素（title / description / 構造化データ）が設定される

#### 確認方法

- ブラウザで診断フロー一通り確認
- 結果別の導線遷移確認
- モバイル表示確認

---

### Phase 12：最終確認 / デモ準備

| 項目 | 内容 |
|------|------|
| 目的 | デモ実施前の品質確認とVercelデプロイを行う |
| 対応設計書 | 17_demo_presentation_scenario |

#### 実装内容

| タスク | 詳細 |
|--------|------|
| 全ページリンク確認 | 内部リンクの遷移確認（リンク切れゼロ） |
| コンテンツ確認 | ダミーデータの一貫性確認 |
| SEOチェック | title / description / 構造化データ / パンくず |
| AI診断確認 | 診断フロー全パターンの動作確認 |
| Vercelデプロイ | 本番ビルド + デプロイ |
| デモシナリオ確認 | Step 1〜8の順序でデモ可能か検証 |

#### デモ前チェックリスト

| チェック項目 |
|------------|
| 全ページが表示される |
| 全内部リンクが正しく遷移する |
| 比較テーブルにデータが表示される |
| CTAボタンが全箇所に配置されている |
| FAQアコーディオンが動作する |
| AI診断が一通り動作する |
| 診断結果から各カテゴリへ遷移できる |
| モバイル表示が適切である |
| アニメーションが動作する |
| 構造化データが正しい |
| sitemap.xml / robots.txt が正しい |
| ビルドエラーがない |
| Vercelデプロイが完了している |

#### 依存関係

Phase 11 完了

#### 完了条件

- Vercelに正常デプロイされている
- デモシナリオの全ステップが実行可能
- チェックリスト全項目がクリア

#### 確認方法

- Vercelの本番URLでアクセス確認
- デモシナリオに沿った通し確認

---

## 7. コンポーネント実装優先度

| 優先度 | コンポーネント | 使用箇所 |
|--------|-------------|---------|
| **最優先** | Header | 全ページ |
| **最優先** | Footer | 全ページ |
| **最優先** | Breadcrumb | カテゴリ・記事・比較 |
| **最優先** | CTACard | 全ページ |
| **最優先** | ArticleCard | TOP・カテゴリ・記事 |
| **最優先** | ComparisonTable | 比較・記事 |
| 高 | CategoryCard | TOP |
| 高 | RankingCard | 比較・記事 |
| 高 | FAQAccordion | TOP・比較・記事 |
| 高 | ComparisonCard | 比較 |
| 中 | Button | 全ページ |
| 中 | JsonLd | 全ページ |

---

## 8. ダミーコンテンツ方針

| 種別 | 方針 |
|------|------|
| 記事タイトル | 実際のSEOキーワードを反映したタイトル |
| 記事本文 | 500〜1000字程度のデモ用テキスト |
| エージェントデータ | 架空5〜8サービス（求人数・年収帯・特徴等） |
| FAQ | 各ページ5項目 |
| カテゴリ説明 | 各カテゴリ100〜200字 |

---

## 9. 構造化データ実装方針

| Schema | 適用先 | 実装方法 |
|--------|-------|---------|
| Article | 記事ページ | JSON-LD（`<script type="application/ld+json">`） |
| FAQPage | FAQ設置ページ | JSON-LD |
| BreadcrumbList | 全ページ（TOP除く） | JSON-LD（Breadcrumbコンポーネント内） |
| Organization | サイト全体 | JSON-LD（layout.tsx） |
| ItemList | ランキング部分 | JSON-LD |

---

## 10. 品質確認項目

| カテゴリ | 確認項目 |
|---------|---------|
| 機能 | 全ページ表示 / リンク遷移 / FAQ動作 / CTA表示 |
| SEO | title / description / 構造化データ / sitemap / robots |
| UI | カラー統一 / タイポグラフィ / 余白 / カードUI |
| レスポンシブ | PC / Tablet / Smartphone 表示 |
| パフォーマンス | LCP / CLS / INP |
| アクセシビリティ | タップ領域 / キーボード操作 / prefers-reduced-motion |

---

## 11. 将来拡張のための留意点

| 項目 | 設計上の留意 |
|------|------------|
| ダークモード | カラートークンをCSS変数で管理 |
| CMS連携 | データ層（`data/`）を分離し、API切替可能に |
| 記事追加 | テンプレートコンポーネントの再利用設計 |
| カテゴリ追加 | カテゴリデータを外部ファイル化 |
| AI診断のAPI化 | `lib/diagnosis.ts` のロジックをAI API呼び出しに差替可能な構造 |
| A/Bテスト | CTAコンポーネントのバリアント対応 |

---

## 更新履歴

| 日付 | 内容 | 担当 |
|------|------|------|
| 2026-03-12 | 初版作成 | - |
