import { Metadata } from "next";
import { getArticleByHref, articles } from "@/data/articles";
import { agents } from "@/data/agents";
import { topFaqs } from "@/data/faqs";
import ArticlePageContent from "@/components/templates/ArticlePageContent";

export const metadata: Metadata = {
  title: "IT転職エージェントおすすめ8選｜未経験・経験者別に比較",
  description:
    "IT業界に強い転職エージェントを未経験者向け・経験者向けに分けて紹介。年収アップの実績やサポート内容を比較。",
};

export default function ITAgentPage() {
  const article = getArticleByHref("/it/agent");
  if (!article) return null;
  const relatedArticles = articles.filter((a) => a.id !== article.id);
  return (
    <ArticlePageContent
      article={article}
      agents={agents.filter((a) =>
        a.industries.some((ind) => ["IT", "Web", "SaaS"].includes(ind))
      )}
      faqs={topFaqs}
      relatedArticles={relatedArticles}
    />
  );
}
