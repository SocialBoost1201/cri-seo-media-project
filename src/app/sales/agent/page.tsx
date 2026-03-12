import { Metadata } from "next";
import { getArticleByHref, articles } from "@/data/articles";
import { agents } from "@/data/agents";
import { topFaqs } from "@/data/faqs";
import ArticlePageContent from "@/components/templates/ArticlePageContent";

export const metadata: Metadata = {
  title: "営業職向け転職エージェントおすすめ5選｜年収アップ事例あり",
  description:
    "営業職の転職に強いエージェントを厳選。キャリアアップや異業種転職に役立つサービスを比較。",
};

export default function SalesAgentPage() {
  const article = getArticleByHref("/sales/agent");
  if (!article) return null;
  const relatedArticles = articles.filter((a) => a.id !== article.id);
  return (
    <ArticlePageContent
      article={article}
      agents={agents.filter((a) => a.industries.includes("営業"))}
      faqs={topFaqs}
      relatedArticles={relatedArticles}
    />
  );
}
