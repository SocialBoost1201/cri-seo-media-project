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
      <section className="relative overflow-hidden pt-32 sm:pt-40 pb-20 sm:pb-24">
        {/* 背景画像 */}
        <div className="absolute inset-0 z-0">
          {category.imageUrl ? (
            <img
              src={category.imageUrl}
              alt={`${category.name}のイメージ`}
              className="w-full h-full object-cover object-center"
            />
          ) : (
            <div className="w-full h-full bg-slate-800" />
          )}
          {/* ダークグラデーションオーバーレイ */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900/90 mix-blend-multiply" />
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" as const }}
          >
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4 drop-shadow-md">
              {category.name}
            </h1>
            <p className="text-slate-200 max-w-2xl leading-relaxed mb-6 drop-shadow">
              {category.description}
            </p>
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold bg-white/20 text-white backdrop-blur-sm border border-white/30 shadow-sm">
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
