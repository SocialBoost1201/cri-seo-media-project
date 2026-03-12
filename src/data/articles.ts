export type Article = {
  id: string;
  title: string;
  slug: string;
  href: string;
  categorySlug: string;
  description: string;
  publishedAt: string;
  updatedAt: string;
  readingTime: number;
  tags: string[];
  isPopular?: boolean;
  isRecommended?: boolean;
};

export const articles: Article[] = [
  {
    id: "agent-recommend",
    title: "転職エージェントおすすめ10選【2026年最新】比較ランキング",
    slug: "recommend",
    href: "/agent/recommend",
    categorySlug: "agent",
    description:
      "転職エージェントのおすすめ10社を徹底比較。求人数・サポート品質・対応業界から、あなたに最適なエージェントが見つかります。",
    publishedAt: "2026-01-15",
    updatedAt: "2026-03-01",
    readingTime: 12,
    tags: ["転職エージェント", "比較", "おすすめ"],
    isPopular: true,
    isRecommended: true,
  },
  {
    id: "it-agent",
    title: "IT転職エージェントおすすめ8選｜未経験・経験者別に比較",
    slug: "agent",
    href: "/it/agent",
    categorySlug: "it",
    description:
      "IT業界に強い転職エージェントを未経験者向け・経験者向けに分けて紹介。年収アップの実績やサポート内容を比較。",
    publishedAt: "2026-01-20",
    updatedAt: "2026-03-05",
    readingTime: 10,
    tags: ["IT転職", "エージェント", "未経験"],
    isPopular: true,
    isRecommended: true,
  },
  {
    id: "second-career-agent",
    title: "第二新卒におすすめの転職エージェント6選｜成功率を上げる選び方",
    slug: "agent",
    href: "/second-career/agent",
    categorySlug: "second-career",
    description:
      "第二新卒・20代前半に強い転職エージェントを厳選。未経験歓迎の求人が多いサービスを中心に比較。",
    publishedAt: "2026-02-01",
    updatedAt: "2026-03-01",
    readingTime: 9,
    tags: ["第二新卒", "転職エージェント", "20代"],
    isPopular: true,
  },
  {
    id: "sales-agent",
    title: "営業職向け転職エージェントおすすめ5選｜年収アップ事例あり",
    slug: "agent",
    href: "/sales/agent",
    categorySlug: "sales",
    description:
      "営業職の転職に強いエージェントを厳選。キャリアアップや異業種転職に役立つサービスを比較。",
    publishedAt: "2026-02-10",
    updatedAt: "2026-03-01",
    readingTime: 8,
    tags: ["営業転職", "エージェント", "年収アップ"],
  },
  {
    id: "executive-agent",
    title: "ハイクラス転職エージェントおすすめ5選｜年収800万円以上を目指す",
    slug: "agent",
    href: "/executive/agent",
    categorySlug: "executive",
    description:
      "年収800万円以上のハイクラス転職に特化したエージェントを比較。外資系・管理職向けサービスも紹介。",
    publishedAt: "2026-02-15",
    updatedAt: "2026-03-01",
    readingTime: 10,
    tags: ["ハイクラス", "転職エージェント", "高年収"],
  },
];

export function getArticlesByCategory(categorySlug: string): Article[] {
  return articles.filter((a) => a.categorySlug === categorySlug);
}

export function getPopularArticles(): Article[] {
  return articles.filter((a) => a.isPopular);
}

export function getRecommendedArticles(): Article[] {
  return articles.filter((a) => a.isRecommended);
}

export function getArticleByHref(href: string): Article | undefined {
  return articles.find((a) => a.href === href);
}
