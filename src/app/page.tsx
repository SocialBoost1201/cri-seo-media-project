"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { categories } from "@/data/categories";
import { getPopularArticles } from "@/data/articles";
import { getTopAgents } from "@/data/agents";
import ArticleCard from "@/components/ui/ArticleCard";
import RankingCard from "@/components/ui/RankingCard";
import CTACard from "@/components/ui/CTACard";

const fadeIn = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

export default function HomePage() {
  const popularArticles = getPopularArticles().slice(0, 3);
  const topAgents = getTopAgents(5);
  
  return (
    <>
      {/* 1. Hero Section */}
      <section className="relative w-full h-[600px] sm:h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/hero-bg.png"
            alt="明るいオフィスで働くビジネスパーソン"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900/90" />
        </div>

        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-5 sm:px-8 text-center mt-16 sm:mt-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full max-w-4xl mx-auto"
          >
            <h1 className="text-3xl sm:text-5xl md:text-[56px] font-black text-white tracking-tight leading-[1.3] mb-6 drop-shadow-md">
              転職エージェント比較で<br />
              自分に合うキャリアを見つける
            </h1>

            <p className="text-sm sm:text-lg text-slate-200 font-medium mb-12 max-w-2xl mx-auto leading-relaxed drop-shadow">
              主要転職サービスを比較・ランキング形式で紹介。<br className="hidden sm:block" />
              IT転職や第二新卒など、目的別に最適なエージェントを探せます。
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/agents/ranking" className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 border border-blue-500/50 text-white font-bold rounded-xl shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5 transition-all duration-300 text-[15px] flex items-center justify-center gap-2">
                転職エージェントランキングを見る →
              </Link>
              <Link href="/agents" className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold rounded-xl shadow-sm hover:bg-white/20 transition-all duration-300 text-[15px] flex items-center justify-center gap-2">
                転職エージェント比較を見る
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. 人気転職エージェント & 4. ランキング */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <motion.div {...fadeIn} className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">総合 おすすめ転職エージェントランキング</h2>
            <p className="text-sm text-slate-500 mt-2">独自の評価基準で厳選したTOP3エージェント</p>
          </div>
          
          <div className="flex flex-col gap-6 max-w-4xl mx-auto">
            {topAgents.slice(0, 3).map((agent, i) => (
              <RankingCard key={agent.id} agent={agent} rank={i + 1} />
            ))}
          </div>

          <div className="text-center mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/agents/ranking" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 text-white font-bold rounded-xl shadow-sm hover:shadow hover:bg-slate-800 transition-all text-sm group">
              ランキングの続きを見る (4位〜)
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <Link href="/agents" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border border-slate-200 text-slate-700 font-bold rounded-xl shadow-sm hover:shadow hover:bg-slate-50 transition-all text-sm group">
              全エージェントの比較表を見る
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* 3. 転職タイプ別カテゴリ導線 */}
      <section className="relative py-20 bg-white border-b border-slate-100">
        <motion.div {...fadeIn} className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">目的・タイプ別から探す</h2>
            <p className="text-sm text-slate-500 mt-2">あなたにぴったりの特化型エージェントが見つかります</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.slice(0, 4).map((cat) => (
              <Link key={cat.id} href={`/category/${cat.id}`} className="group flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-blue-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="relative w-full aspect-video bg-slate-100 overflow-hidden">
                  {cat.imageUrl ? (
                    <Image
                      src={cat.imageUrl}
                      alt={`${cat.name}のイメージ画像`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-4xl">
                      {cat.icon}
                    </div>
                  )}
                </div>
                <div className="p-4 sm:p-5 flex flex-col items-center justify-center text-center">
                  <span className="text-sm sm:text-base font-bold text-slate-800">{cat.name}</span>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 6. SEO記事導線 */}
      <section className="py-24 bg-slate-50">
        <motion.div {...fadeIn} className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">転職ノウハウ・お役立ち記事</h2>
              <p className="text-sm text-slate-500 mt-2">失敗しない転職活動のための必須ガイド</p>
            </div>
            <Link href="/category/all" className="hidden sm:flex text-sm font-bold text-blue-600 hover:text-blue-700 items-center gap-1 group">
              記事一覧へ <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 line-clamp-2">
            {popularArticles.map((article, i) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <ArticleCard article={article} />
              </motion.div>
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Link href="/category/all" className="inline-flex text-sm font-bold text-blue-600 hover:text-blue-700 items-center gap-1 group">
              記事一覧へ <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* 7. Webistとの接続フロー */}
      <section className="py-16 sm:py-24 bg-white border-y border-slate-100">
         <motion.div {...fadeIn} className="max-w-[1000px] mx-auto px-5 sm:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">本メディアの役割と送客フロー</h2>
            <p className="text-sm text-slate-500">C&R社（Webist）との接続・シナジー</p>
          </div>
          
          <div className="flex flex-col md:flex-row items-stretch justify-center gap-4 text-center">
             <div className="flex-1 bg-slate-50 border border-slate-200 rounded-xl p-6 flex flex-col items-center justify-center relative">
               <span className="text-3xl mb-2">🔍</span>
               <div className="font-bold text-slate-800">自然検索流入</div>
               <div className="text-xs text-slate-500 mt-1">SEO・指名検索</div>
               <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 w-8 h-8 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-400">→</div>
               <div className="md:hidden absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-10 w-8 h-8 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-400 rotate-90">→</div>
             </div>
             
             <div className="flex-[1.5] bg-blue-50 border border-blue-200 rounded-xl p-6 flex flex-col items-center justify-center relative shadow-sm">
               <span className="text-3xl mb-2">📝</span>
               <div className="font-bold text-blue-900 mb-1">本比較メディア</div>
               <div className="text-xs text-blue-700 font-medium">SEO記事 ＆ 比較・ランキング</div>
               <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 w-8 h-8 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-400">→</div>
               <div className="md:hidden absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-10 w-8 h-8 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-400 rotate-90">→</div>
             </div>

             <div className="flex-1 flex flex-col gap-3">
               <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-4 flex flex-col items-center justify-center h-full">
                 <span className="text-2xl mb-1">🏢</span>
                 <div className="font-bold text-indigo-900 text-sm">自社送客</div>
                 <div className="text-[10px] text-indigo-700 mt-1">Webist・C&R社連携</div>
               </div>
               <div className="bg-green-50 border border-green-200 rounded-xl p-4 flex flex-col items-center justify-center h-full">
                 <span className="text-2xl mb-1">💰</span>
                 <div className="font-bold text-green-900 text-sm">アフィリエイト</div>
                 <div className="text-[10px] text-green-700 mt-1">他社紹介マネタイズ</div>
               </div>
             </div>
          </div>
        </motion.div>
      </section>

      {/* 8. AI Diagnosis Section (Future Expansion) */}
      <section className="py-24 bg-slate-50">
        <motion.div {...fadeIn} className="max-w-[1000px] mx-auto px-5 sm:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-14 shadow-sm overflow-hidden relative border border-slate-200">
            <div className="absolute top-0 right-0 bg-slate-600 text-white text-[10px] font-black px-4 py-1.5 rounded-bl-xl tracking-widest shadow-sm">
              将来拡張機能
            </div>
            
            <div className="relative z-10 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-slate-50 text-3xl mb-6 shadow-sm border border-slate-100">
                🤖
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-800 mb-4 tracking-tight">
                AIキャリア診断（オプション機能）
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mb-8 max-w-2xl mx-auto">
                比較・ランキング機能に加えて、将来的にサイトの付加価値を高めるためのオプション機能として「AIキャリア診断」の組み込みも可能です。簡単な質問から適正エージェントを自動マッチングします。
              </p>
              
              <Link href="/ai-career-diagnosis" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-blue-600 font-bold text-sm rounded-xl shadow-sm border border-blue-200 hover:bg-blue-50 transition-all duration-300 group">
                デモ機能を確認する
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 9. Bottom CTA */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <CTACard
            title="転職を成功させるために"
            description="本サイトでは、最新のAI技術と独自データから導き出した「失敗しない転職エージェント選び」をサポートします。"
            buttonText="エージェント比較ページへ"
            buttonHref="/agents"
          />
        </div>
      </section>
    </>
  );
}
