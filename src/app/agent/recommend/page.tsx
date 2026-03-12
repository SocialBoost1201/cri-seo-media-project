import { Metadata } from "next";
import { getArticleByHref, articles } from "@/data/articles";
import { agents } from "@/data/agents";
import { topFaqs } from "@/data/faqs";
import ArticlePageContent from "@/components/templates/ArticlePageContent";

export const metadata: Metadata = {
  title: "転職エージェントおすすめ10選【2026年最新】比較ランキング",
  description:
    "転職エージェントのおすすめ10社を徹底比較。求人数・サポート品質・対応業界から、あなたに最適なエージェントが見つかります。",
};

export default function AgentRecommendPage() {
  const article = getArticleByHref("/agent/recommend");
  if (!article) return null;
  const relatedArticles = articles.filter(
    (a) => a.id !== article.id
  );
  return (
    <ArticlePageContent
      article={article}
      agents={agents}
      faqs={topFaqs}
      relatedArticles={relatedArticles}
    />
  );
}
