"use client";

import { motion } from "framer-motion";
import type { Category } from "@/data/categories";
import type { Article } from "@/data/articles";
import Breadcrumb from "@/components/layout/Breadcrumb";
import ArticleCard from "@/components/ui/ArticleCard";
import CTACard from "@/components/ui/CTACard";

type Props = {
  category: Category;
  articles: Article[];
};

const fadeIn = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

export default function CategoryPageContent({ category, articles }: Props) {
  return (
    <>
      <Breadcrumb />

      {/* Header */}
      <section className="relative overflow-hidden bg-white pt-28 sm:pt-32 pb-16 sm:pb-20">
        <div className="relative max-w-[1200px] mx-auto px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" as const }}
          >
            <div className="text-4xl mb-5">{category.icon}</div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
              {category.name}
            </h1>
            <p className="text-slate-500 max-w-2xl leading-relaxed mb-4">{category.description}</p>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-600 border border-blue-100">
              {category.articleCount}件の記事
            </span>
          </motion.div>
        </div>
      </section>

      {/* Articles */}
      <section className="py-16 sm:py-20">
        <motion.div {...fadeIn} className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-8">おすすめ記事</h2>
          {articles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {articles.map((article, i) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" as const }}
                >
                  <ArticleCard article={article} />
                </motion.div>
              ))}
            </div>
          ) : (
            <p className="text-slate-500">記事は準備中です。</p>
          )}
        </motion.div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <CTACard
            title={`${category.name}の転職サービスを比較する`}
            description={`${category.name}に強いエージェントを比較して、あなたに最適なサービスを見つけましょう。`}
            buttonText="おすすめエージェントを見る"
            buttonHref="/agent/comparison"
          />
        </div>
      </section>
    </>
  );
}
