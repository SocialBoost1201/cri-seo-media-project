import { Metadata } from "next";
import { getArticleByHref, articles } from "@/data/articles";
import { agents } from "@/data/agents";
import { topFaqs } from "@/data/faqs";
import ArticlePageContent from "@/components/templates/ArticlePageContent";

export const metadata: Metadata = {
  title: "第二新卒におすすめの転職エージェント6選｜成功率を上げる選び方",
  description:
    "第二新卒・20代前半に強い転職エージェントを厳選。未経験歓迎の求人が多いサービスを中心に比較。",
};

export default function SecondCareerAgentPage() {
  const article = getArticleByHref("/second-career/agent");
  if (!article) return null;
  const relatedArticles = articles.filter((a) => a.id !== article.id);
  return (
    <ArticlePageContent
      article={article}
      agents={agents}
      faqs={topFaqs}
      relatedArticles={relatedArticles}
    />
  );
}
