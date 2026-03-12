import { Metadata } from "next";
import { getArticleByHref, articles } from "@/data/articles";
import { agents } from "@/data/agents";
import { topFaqs } from "@/data/faqs";
import ArticlePageContent from "@/components/templates/ArticlePageContent";

export const metadata: Metadata = {
  title: "ハイクラス転職エージェントおすすめ5選｜年収800万円以上を目指す",
  description:
    "年収800万円以上のハイクラス転職に特化したエージェントを比較。外資系・管理職向けサービスも紹介。",
};

export default function ExecutiveAgentPage() {
  const article = getArticleByHref("/executive/agent");
  if (!article) return null;
  const relatedArticles = articles.filter((a) => a.id !== article.id);
  return (
    <ArticlePageContent
      article={article}
      agents={agents.filter(
        (a) =>
          a.industries.includes("コンサル") ||
          a.industries.includes("外資系") ||
          a.industries.includes("金融")
      )}
      faqs={topFaqs}
      relatedArticles={relatedArticles}
    />
  );
}
