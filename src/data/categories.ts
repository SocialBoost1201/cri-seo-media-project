export type Category = {
  id: string;
  name: string;
  slug: string;
  href: string;
  description: string;
  articleCount: number;
  icon: string;
};

export const categories: Category[] = [
  {
    id: "agent",
    name: "転職エージェント",
    slug: "agent",
    href: "/agent",
    description:
      "大手転職エージェントの比較・ランキング・選び方を徹底解説。あなたに合ったエージェント選びをサポートします。",
    articleCount: 15,
    icon: "🤝",
  },
  {
    id: "it",
    name: "IT転職",
    slug: "it",
    href: "/it",
    description:
      "IT業界への転職・キャリアチェンジに役立つ情報を網羅。未経験からの転職方法やおすすめエージェントを紹介。",
    articleCount: 10,
    icon: "💻",
  },
  {
    id: "second-career",
    name: "第二新卒転職",
    slug: "second-career",
    href: "/second-career",
    description:
      "第二新卒・20代の転職に特化した情報。ベストタイミングや成功のコツ、おすすめエージェントを紹介。",
    articleCount: 10,
    icon: "🌱",
  },
  {
    id: "sales",
    name: "営業転職",
    slug: "sales",
    href: "/sales",
    description:
      "営業職からの転職・営業職への転職を徹底サポート。年収アップ事例やおすすめ転職サービスを紹介。",
    articleCount: 10,
    icon: "📊",
  },
  {
    id: "executive",
    name: "ハイクラス転職",
    slug: "executive",
    href: "/executive",
    description:
      "年収800万円以上のハイクラス転職に特化。外資系・役職者向け転職エージェントの比較と活用法を解説。",
    articleCount: 5,
    icon: "👔",
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
