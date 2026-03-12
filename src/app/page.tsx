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
  const topAgents = getTopAgents(3);

  return (
    <>
      {/* ─── 1. Hero Section (Prototype Proposal) ─── */}
      <section className="relative bg-white pt-24 pb-20 sm:pt-32 sm:pb-28 border-b border-slate-100 overflow-hidden">
        {/* Modern decorative background blobs */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none" />

        <div className="relative max-w-[1200px] mx-auto px-5 sm:px-8 z-10 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 text-slate-600 text-xs sm:text-sm font-bold tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-600"></span>
              C&R社様向け 比較メディア立ち上げプロトタイプ
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-[56px] font-black text-slate-900 tracking-tight leading-[1.2] mb-6">
              転職エージェント<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                比較・ランキングメディア
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
              検索流入から比較・意思決定までをシームレスに支援し、Webist等の既存事業やアフィリエイトへ強力に送客するための新規メディア設計案です。
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="#launch-patterns" className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white font-bold rounded-xl shadow hover:bg-slate-800 transition-all duration-300 text-[15px] flex items-center justify-center gap-2">
                立ち上げパターンの比較を見る ↓
              </Link>
              <Link href="/agents" className="w-full sm:w-auto px-8 py-4 bg-white border-2 border-slate-200 text-slate-700 font-bold rounded-xl shadow-sm hover:border-slate-300 hover:bg-slate-50 transition-all duration-300 text-[15px] flex items-center justify-center gap-2">
                完成版のランキングを見る →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── NEW: 立ち上げパターン比較 ─── */}
      <section id="launch-patterns" className="py-20 bg-slate-50 border-b border-slate-200/60">
        <motion.div {...fadeIn} className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">3つの立ち上げパターンと推奨構造</h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
              既存ドメイン資産（Webist）を活かしつつ、新しい比較・ランキングメディアを検証・成長させやすい構造を初期設計しています。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* パターン1 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm opacity-60 hover:opacity-100 transition-opacity">
              <div className="text-xs font-bold text-slate-500 mb-2 tracking-widest">PATTERN 1</div>
              <h3 className="text-lg font-bold text-slate-900 mb-4 pb-4 border-b border-slate-100">Webist継続<br/><span className="text-sm font-normal text-slate-500">（サイト内にアフィ配置）</span></h3>
              <ul className="text-sm space-y-3 text-slate-600">
                <li className="flex items-start gap-2"><span className="text-green-500">○</span>追加コスト・工数が最小</li>
                <li className="flex items-start gap-2"><span className="text-red-400">×</span>「比較メディア」としての独立した見え方になりにくい</li>
              </ul>
            </div>
            
            {/* パターン2 (推奨) */}
            <div className="bg-white rounded-2xl p-8 border-2 border-blue-500 shadow-xl relative transform md:-translate-y-4">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full tracking-widest shadow-sm">
                RECOMMENDED
              </div>
              <div className="text-xs font-bold text-blue-600 mb-2 tracking-widest">PATTERN 2</div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 pb-4 border-b border-slate-100">Webist サブディレクトリ<br/><span className="text-sm font-normal text-slate-600">（webist.com/media/ 等）</span></h3>
              <ul className="text-sm space-y-3 text-slate-800 font-medium">
                <li className="flex items-start gap-2"><span className="text-green-500 text-lg leading-none">○</span><span className="mt-0.5">Webistの強力なドメインパワーを初手から活用できる</span></li>
                <li className="flex items-start gap-2"><span className="text-green-500 text-lg leading-none">○</span><span className="mt-0.5">独立したメディアとしてUI/UXを全く新しく構築可能</span></li>
                <li className="flex items-start gap-2"><span className="text-green-500 text-lg leading-none">○</span><span className="mt-0.5">検索流入の受け皿として最適</span></li>
              </ul>
            </div>

            {/* パターン3 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm opacity-60 hover:opacity-100 transition-opacity">
              <div className="text-xs font-bold text-slate-500 mb-2 tracking-widest">PATTERN 3</div>
              <h3 className="text-lg font-bold text-slate-900 mb-4 pb-4 border-b border-slate-100">新規ドメイン立ち上げ<br/><span className="text-sm font-normal text-slate-500">（本デモサイトの見た目）</span></h3>
              <ul className="text-sm space-y-3 text-slate-600">
                <li className="flex items-start gap-2"><span className="text-green-500">○</span>ブランディングが完全に自由</li>
                <li className="flex items-start gap-2"><span className="text-green-500">○</span>将来的な売却等が容易</li>
                <li className="flex items-start gap-2"><span className="text-red-400">×</span>初期のSEO立ち上がりに時間がかかる</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ─── NEW: Webistとの接続フロー ─── */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-100">
        <motion.div {...fadeIn} className="max-w-[1000px] mx-auto px-5 sm:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">既存資産（Webist）との接続イメージ</h2>
            <p className="text-sm text-slate-500">本メディアが担う役割と送客フロー</p>
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
               <div className="font-bold text-blue-900 mb-1">本比較メディア（提案対象）</div>
               <div className="text-xs text-blue-700 font-medium">SEO記事 ＆ エージェント比較・ランキング</div>
               <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 w-8 h-8 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-400">→</div>
               <div className="md:hidden absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-10 w-8 h-8 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-400 rotate-90">→</div>
             </div>

             <div className="flex-1 flex flex-col gap-3">
               <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-4 flex flex-col items-center justify-center h-full">
                 <span className="text-2xl mb-1">🏢</span>
                 <div className="font-bold text-indigo-900 text-sm">Webistへ送客</div>
                 <div className="text-[10px] text-indigo-700 mt-1">自社サービス登録</div>
               </div>
               <div className="bg-green-50 border border-green-200 rounded-xl p-4 flex flex-col items-center justify-center h-full">
                 <span className="text-2xl mb-1">💰</span>
                 <div className="font-bold text-green-900 text-sm">アフィリエイト</div>
                 <div className="text-[10px] text-green-700 mt-1">他社紹介でのマネタイズ</div>
               </div>
             </div>
          </div>
        </motion.div>
      </section>

      {/* ─── 4. Category Nav (Divided into Priority & Expansion) ─── */}
      <section className="relative py-20 bg-slate-50 border-b border-slate-100">
        <motion.div {...fadeIn} className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">カテゴリ開発計画</h2>
            <p className="text-sm text-slate-500 mt-2">※ 初期優先領域と、事業フェーズに合わせた将来拡張領域への展開例</p>
          </div>
          
          <div className="mb-12">
            <h3 className="text-sm font-bold text-blue-800 mb-4 flex items-center gap-2 border-b border-blue-200 pb-2">
              <span className="w-2 h-2 rounded-full bg-blue-600"></span>
              初期優先展開カテゴリ
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {categories.filter(c => ["agent", "it", "second-career"].includes(c.id)).map((cat) => (
                <Link key={cat.id} href={`/category/${cat.id}`} className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-sm border border-slate-200 hover:border-blue-300 hover:shadow-md hover:-translate-y-1 transition-all group">
                  <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-xl mb-3 group-hover:scale-110 transition-transform">
                    {cat.icon}
                  </div>
                  <span className="text-sm font-bold text-slate-800">{cat.name}</span>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold text-slate-500 mb-4 flex items-center gap-2 border-b border-slate-200 pb-2">
              <span className="w-2 h-2 rounded-full bg-slate-400"></span>
              将来拡張カテゴリ（フェーズ2以降）
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 opacity-80">
              {categories.filter(c => ["sales", "executive"].includes(c.id)).map((cat) => (
                <Link key={cat.id} href={`/category/${cat.id}`} className="flex flex-col items-center justify-center p-5 bg-white/60 rounded-xl border border-slate-200 hover:border-slate-300 hover:shadow-sm hover:-translate-y-0.5 transition-all group">
                  <div className="w-10 h-10 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center text-lg mb-2 group-hover:scale-110 transition-transform">
                    {cat.icon}
                  </div>
                  <span className="text-xs font-bold text-slate-600">{cat.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* ─── 3. Popular Articles (SEO content) ─── */}
      <section className="py-24 bg-white">
        <motion.div {...fadeIn} className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">転職ノウハウ・人気記事</h2>
            <Link href="/category/all" className="text-sm font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 group">
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
        </motion.div>
      </section>

      {/* ─── 4. Agent Ranking ─── */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <motion.div {...fadeIn} className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">おすすめ転職エージェント</h2>
            <p className="text-sm text-slate-500 mt-2">独自の評価基準で厳選したランキング</p>
          </div>
          
          <div className="flex flex-col gap-6 max-w-4xl mx-auto">
            {topAgents.map((agent, i) => (
              <RankingCard key={agent.id} agent={agent} rank={i + 1} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/agents" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border border-slate-200 text-slate-700 font-bold rounded-xl shadow-sm hover:shadow hover:bg-slate-50 transition-all text-sm group">
              全エージェントの比較を見る
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ─── 7. AI Diagnosis Section (Future Expansion) ─── */}
      <section className="py-24 bg-white">
        <motion.div {...fadeIn} className="max-w-[1000px] mx-auto px-5 sm:px-8">
          <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-3xl p-8 sm:p-14 shadow-inner overflow-hidden relative border border-slate-200">
            <div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-black px-4 py-1.5 rounded-bl-xl tracking-widest shadow-sm">
              将来拡張機能
            </div>
            
            <div className="relative z-10 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white text-3xl mb-6 shadow-sm border border-slate-100 backdrop-blur-sm">
                🤖
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-800 mb-4 tracking-tight">
                AIキャリア診断（オプション機能）
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mb-8 max-w-2xl mx-auto">
                比較・ランキング機能に加えて、将来的にサイトの付加価値を高めるためのオプション機能として「AIキャリア診断」の組み込みも可能です。簡単な質問から適正エージェントを自動マッチングし、コンバージョン率を向上させます。
              </p>
              
              <Link href="/ai-career-diagnosis" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-blue-600 font-bold text-sm rounded-xl shadow border border-blue-200 hover:bg-blue-50 transition-all duration-300 group">
                デモ機能を確認する
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ─── 8. Bottom CTA ─── */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
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
