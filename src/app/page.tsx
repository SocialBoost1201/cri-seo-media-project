"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { categories } from "@/data/categories";
import { getPopularArticles } from "@/data/articles";
import { topFaqs } from "@/data/faqs";
import { getTopAgents } from "@/data/agents";
import { SITE_NAME } from "@/lib/constants";
import CategoryCard from "@/components/ui/CategoryCard";
import ArticleCard from "@/components/ui/ArticleCard";
import FAQAccordion from "@/components/ui/FAQAccordion";
import CTACard from "@/components/ui/CTACard";
import RankingCard from "@/components/ui/RankingCard";

const fadeIn = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

export default function HomePage() {
  const popularArticles = getPopularArticles();
  const topAgents = getTopAgents(3);

  return (
    <>
      {/* ─── Premium Hero (BizReach/Wantedly Style) ─── */}
      <section className="relative bg-[#0A192F] pt-24 pb-48 sm:pt-32 sm:pb-56">
        <div className="absolute inset-0 overflow-hidden">
          {/* Subtle grid pattern or gradient for premium feel */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        </div>

        <div className="relative max-w-[1200px] mx-auto px-5 sm:px-8 z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center sm:text-left pt-6"
          >
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold tracking-widest text-[#D4AF37] border border-[#D4AF37]/30 bg-[#D4AF37]/10 mb-6 uppercase">
              Premium Career Matching
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.2] mb-6 drop-shadow-lg">
              あなたの市場価値を最大化する<br className="hidden sm:block" />
              <span className="text-[#3B82F6]">最適な転職エージェント</span>に出会う。
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-10 drop-shadow">
              {SITE_NAME}は、独自のデータとAIを用いて国内トップクラスの転職エージェントを厳格に評価・比較。あなたにふさわしい「次のステージ」への扉を開きます。
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── Overlapping Action Panel ─── */}
      <section className="relative z-20 -mt-32 sm:-mt-40 max-w-[1200px] mx-auto px-5 sm:px-8 mb-24">
        <motion.div
           initial={{ opacity: 0, y: 40 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
           className="bg-white rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden"
        >
          <div className="flex flex-col md:flex-row">
            {/* Left Panel: Direct Search */}
            <div className="w-full md:w-1/2 p-8 sm:p-10 border-b md:border-b-0 md:border-r border-gray-100">
              <h3 className="text-xl font-bold text-slate-900 mb-2">エージェントを比較して探す</h3>
              <p className="text-sm text-slate-500 mb-8">各社の非公開求人数や得意な業界から、自ら最適なパートナーを選定します。</p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-sm font-bold text-slate-700">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-xs">✓</span>
                  ハイクラス・エグゼクティブ特化
                </li>
                <li className="flex items-center gap-3 text-sm font-bold text-slate-700">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-xs">✓</span>
                  IT・Webエンジニア特化
                </li>
              </ul>

              <Link href="/agent/comparison" className="flex items-center justify-center w-full px-8 py-4 bg-blue-600 text-white font-bold rounded shadow-sm hover:bg-blue-700 transition-colors">
                おすすめランキングを見る
              </Link>
            </div>

            {/* Right Panel: AI Diagnosis */}
            <div className="w-full md:w-1/2 p-8 sm:p-10 bg-slate-50">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-xl font-bold text-slate-900">AIキャリア診断</h3>
                <span className="px-2 py-0.5 bg-red-100 text-red-600 font-bold text-[10px] rounded uppercase tracking-wider">Free</span>
              </div>
              <p className="text-sm text-slate-500 mb-8">わずか1分で、あなたの経歴や希望に最適な転職サービスをAIが導き出します。</p>
              
              <div className="bg-white border border-gray-200 p-4 rounded-lg mb-8 flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-100 rounded flex items-center justify-center text-2xl">🤖</div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 tracking-widest uppercase">診断内容</p>
                  <p className="text-sm font-bold text-slate-900">適性エージェント・適正年収・おすすめ業界</p>
                </div>
              </div>

              <Link href="/ai-career-diagnosis" className="flex items-center justify-center w-full px-8 py-4 bg-[#FF7A00] text-white font-bold rounded shadow-[0_4px_0_#CC6200] hover:translate-y-[2px] hover:shadow-[0_2px_0_#CC6200] transition-all">
                無料で診断を始める
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ─── Categories ─── */}
      <section className="relative py-24 sm:py-32 bg-slate-50">
        <motion.div {...fadeIn} className="relative max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">カテゴリから探す</h2>
            <p className="text-sm text-slate-500 mt-2">あなたの状況に合った転職情報を見つけましょう</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" as const }}
              >
                <CategoryCard category={cat} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ─── AI Diagnosis CTA ─── */}
      <section className="py-20 sm:py-24 bg-white">
        <motion.div {...fadeIn} className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="relative overflow-hidden rounded-2xl p-8 sm:p-12 bg-slate-900 shadow-xl">
            <div className="relative flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl bg-slate-800 border border-slate-700">
                🔍
              </div>
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  自分に合う転職方法がわからない方へ
                </h2>
                <p className="text-sm text-slate-400 mb-6 max-w-md">
                  6つの簡単な質問に答えるだけで、あなたに最適な転職タイプとおすすめサービスがわかります。
                </p>
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="inline-block">
                  <Link href="/ai-career-diagnosis" className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-colors shadow-lg text-sm">
                    AIキャリア診断を受ける（無料）
                    <span>→</span>
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ─── Ranking ─── */}
      <section className="relative py-24 sm:py-32 bg-slate-50">
        <motion.div {...fadeIn} className="relative max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">転職エージェントおすすめランキング</h2>
            <p className="text-sm text-slate-500 mt-2">総合評価で厳選した転職エージェントTOP3</p>
          </div>
          <div className="flex flex-col gap-6">
            {topAgents.map((agent, i) => (
              <motion.div
                key={agent.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12, ease: "easeOut" as const }}
              >
                <RankingCard agent={agent} rank={i + 1} />
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-block">
              <Link href="/agent/comparison" className="inline-flex items-center gap-2 px-7 py-3.5 text-[15px] font-semibold text-blue-600 border border-gray-300 bg-white shadow-sm rounded-xl hover:bg-gray-50 hover:border-gray-400 transition-all">
                全エージェントの比較を見る
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ─── Popular Articles ─── */}
      <section className="py-24 sm:py-32 bg-white">
        <motion.div {...fadeIn} className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">人気記事</h2>
            <p className="text-sm text-slate-500 mt-2">よく読まれている転職情報をチェック</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {popularArticles.map((article, i) => (
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
        </motion.div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="relative py-24 sm:py-32 bg-slate-50">
        <motion.div {...fadeIn} className="relative max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">よくある質問</h2>
            <p className="text-sm text-slate-500 mt-2">転職エージェントの利用について</p>
          </div>
          <div className="max-w-3xl mx-auto">
            <FAQAccordion items={topFaqs} />
          </div>
        </motion.div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <CTACard
            title="あなたに合った転職エージェントを見つけよう"
            description="複数のエージェントを比較して、おすすめランキングから自分に最適なサービスを選べます。すべて無料でご利用いただけます。"
            buttonText="おすすめ転職エージェントを見る"
            buttonHref="/agent/recommend"
          />
        </div>
      </section>
    </>
  );
}
