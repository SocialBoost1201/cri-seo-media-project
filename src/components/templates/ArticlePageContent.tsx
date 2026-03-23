"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import type { Article } from "@/data/articles"; 
import type { Agent } from "@/data/agents";
import type { FAQItem } from "@/data/faqs";
import Breadcrumb from "@/components/layout/Breadcrumb";
import RankingCard from "@/components/ui/RankingCard";
import SecretJobTips from "@/components/ui/SecretJobTips";
import MultipleRegistrationGuide from "@/components/ui/MultipleRegistrationGuide";
import FAQAccordion from "@/components/ui/FAQAccordion";
import CTACard from "@/components/ui/CTACard";

type Props = {
  article: Article;
  agents: Agent[];
  faqs: FAQItem[];
  relatedArticles: Article[];
};

const fadeIn = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5, ease: "easeOut" as const },
};

export default function ArticlePageContent({ article, agents, faqs, relatedArticles }: Props) {
  const topAgents = agents.slice(0, 3);

  return (
    <>
      <Breadcrumb />

      {/* Title */}
      <section className="relative overflow-hidden bg-white pt-28 sm:pt-32 pb-10 sm:pb-14">
        <div className="relative max-w-[800px] mx-auto px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" as const }}
          >
            <div className="flex items-center gap-2 mb-4 flex-wrap">
              {article.tags.map((tag) => (
                <span key={tag} className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-600 border border-blue-100">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
              {article.title}
            </h1>
            <p className="text-slate-500 leading-relaxed mb-4">{article.description}</p>
            <div className="flex items-center gap-3 text-sm text-slate-400 mb-8">
              <span>{article.updatedAt} 更新</span>
              <span className="w-1 h-1 rounded-full bg-slate-300" />
              <span>読了 {article.readingTime}分</span>
            </div>
            
            {article.imageUrl && (
              <div className="relative w-full aspect-video rounded-xl border border-slate-200 overflow-hidden shadow-sm">
                <Image
                  src={article.imageUrl}
                  alt={article.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* 結論（GEO対応） */}
      <section className="py-8">
        <div className="max-w-[800px] mx-auto px-5 sm:px-8">
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 sm:p-8">
            <h2 className="font-bold text-slate-900 mb-4 flex items-center gap-2 text-lg border-b border-slate-200/60 pb-3">
              <span className="w-6 h-6 rounded-lg flex items-center justify-center bg-white text-blue-600 shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" /></svg>
              </span>
              この記事の結論
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              {article.categorySlug === "agent" &&
                "転職エージェントは求人数・サポート品質・専門性で選ぶのが重要です。総合力なら「キャリアブリッジ」、若手向けなら「ネクストステップ」、IT特化なら「テックエージェント」がおすすめです。"}
              {article.categorySlug === "it" &&
                "IT転職では、IT業界に特化したエージェントを活用することで、非公開求人や年収交渉で有利に進められます。未経験なら「フレッシュスタート」、経験者なら「テックエージェント」が最適です。"}
              {article.categorySlug === "second-career" &&
                "第二新卒の転職は、20代に特化したエージェントを選ぶことが成功の鍵です。未経験歓迎の求人が豊富な「フレッシュスタート」や「ネクストステップ」がおすすめです。"}
              {article.categorySlug === "sales" &&
                "営業職の転職では、営業特化型エージェントを活用することで年収アップの確率が大幅に上がります。「セールスプロ」は営業職転職の実績No.1です。"}
              {article.categorySlug === "executive" &&
                "ハイクラス転職では、非公開求人の質と量が重要です。「エグゼクティブキャリア」は年収800万円以上の求人に特化しており、経営幹部ポジションも多数保有しています。"}
            </p>
          </div>
        </div>
      </section>

      {/* 差し込み画像 1 */}
      <section className="py-6">
        <div className="max-w-[800px] mx-auto px-5 sm:px-8">
          <div className="relative w-full aspect-video rounded-xl border border-slate-200 overflow-hidden shadow-sm">
            <Image
              src="/images/article_insert_1.png"
              alt="記事内イメージ"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Rankings (記事途中のおすすめエージェント枠) */}
      <section className="py-8">
        <motion.div {...fadeIn} className="max-w-[800px] mx-auto px-5 sm:px-8">
          <div className="bg-blue-50/50 border border-blue-100 rounded-xl p-6 sm:p-8">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-1.5 h-6 bg-blue-600 rounded-full" />
              <h2 className="text-xl font-bold text-slate-900">記事の途中ですが、おすすめの転職エージェント</h2>
            </div>
            <div className="flex flex-col gap-5">
              {topAgents.slice(0, 1).map((agent, i) => (
                <div key={agent.id} className="relative">
                  <span className="absolute -top-3 -left-3 z-10 bg-red-500 text-white text-xs font-black px-2 py-1 rounded shadow-sm tracking-wider transform -rotate-6">
                    読者人気No.1
                  </span>
                  <RankingCard agent={agent} />
                </div>
              ))}
            </div>
            <div className="text-right mt-4">
               <Link href="/agents" className="text-sm font-bold text-blue-600 hover:text-blue-700">
                 他のエージェントも比較する →
               </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 非公開求人TIPS & 複数併用ガイド（1回目インサート） */}
      <section className="py-2">
        <div className="max-w-[800px] mx-auto px-5 sm:px-8 space-y-8">
          <SecretJobTips />
          <MultipleRegistrationGuide />
        </div>
      </section>

      {/* Detail (記事本文相当) */}
      <section className="py-8">
        <motion.div {...fadeIn} className="max-w-[800px] mx-auto px-5 sm:px-8">
          <div className="prose prose-slate max-w-none">
            <h2 className="text-2xl font-bold text-slate-900 border-b-2 border-slate-100 pb-3 mb-6">転職エージェントの選び方</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              転職活動を成功させるためには、自分の目的に合ったエージェントを選ぶことが不可欠です。複数のサービスを比較し、相性の良いキャリアアドバイザーを見つけましょう。
            </p>
            <h3 className="text-lg font-bold text-slate-900 border-l-4 border-blue-600 pl-3 mb-4">利用するメリット</h3>
            <ul className="list-disc list-inside space-y-2 text-slate-700 mb-8 bg-slate-50 p-6 rounded-xl border border-slate-100">
              <li>一般には公開されていない非公開求人にアクセスできる</li>
              <li>プロの視点から履歴書添削・面接対策のサポートを受けられる</li>
              <li>自分では言い出しにくい年収交渉を代行してもらえる</li>
              <li>業界専門のアドバイザーにリアルな社内情勢を直接聞ける</li>
            </ul>
            <h3 className="text-lg font-bold text-slate-900 border-l-4 border-blue-600 pl-3 mb-4">注意点・デメリット</h3>
            <ul className="list-disc list-inside space-y-2 text-slate-700 mb-6 p-6">
              <li>担当者との相性が合わない場合がある（その場合は変更依頼が可能）</li>
              <li>希望条件を明確に伝えないと、的外れな求人を紹介されることがある</li>
              <li>複数登録すると面談や連絡の管理が少し煩雑になる</li>
            </ul>
          </div>
        </motion.div>
      </section>

      {/* FAQ */}
      <section className="py-8 sm:py-12">
        <motion.div {...fadeIn} className="max-w-[800px] mx-auto px-5 sm:px-8">
          <h2 className="text-xl font-bold text-slate-900 mb-6">よくある質問</h2>
          <FAQAccordion items={faqs} />
        </motion.div>
      </section>

      {/* Related */}
      {relatedArticles.length > 0 && (
        <section className="py-8 sm:py-12 bg-slate-50">
          <motion.div {...fadeIn} className="max-w-[1200px] mx-auto px-5 sm:px-8">
            <h2 className="text-xl font-bold text-slate-900 mb-6">関連記事</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {relatedArticles.slice(0, 4).map((a) => (
                <Link
                  key={a.id}
                  href={a.href}
                  className="block bg-white rounded-xl border border-slate-200 p-5 hover:border-blue-300 hover:shadow-sm transition-all"
                >
                  <h3 className="text-sm font-semibold text-slate-900 mb-1 line-clamp-2">{a.title}</h3>
                  <p className="text-xs text-slate-400">{a.updatedAt} 更新</p>
                </Link>
              ))}
            </div>
          </motion.div>
        </section>
      )}

      {/* Bottom CTA (リッチなBOX) */}
      <section className="py-10 sm:py-12 border-t border-slate-200">
        <div className="max-w-[800px] mx-auto px-5 sm:px-8">
          <div className="bg-slate-800 rounded-2xl p-8 sm:p-10 shadow-sm border border-slate-700 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-slate-700/30 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
            
            <div className="relative z-10 text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">
                転職に悩んでいる人へ
              </h2>
              <p className="text-slate-300 text-sm sm:text-base max-w-lg mx-auto">
                自分に合ったエージェントがわからない、あるいは自分の市場価値を知りたい方は、当サイトの無料ツールをご活用ください。
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 relative z-10">
               <Link href="/ai-career-diagnosis" className="flex flex-col items-center justify-center p-6 bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl transition-all group">
                 <span className="text-3xl mb-3">🤖</span>
                 <span className="text-white font-bold mb-1">AIキャリア診断</span>
                 <span className="text-xs text-blue-200">5問で適性エージェントがわかる</span>
               </Link>
               <Link href="/agents" className="flex flex-col items-center justify-center p-6 bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl transition-all group">
                 <span className="text-3xl mb-3">🏢</span>
                 <span className="text-white font-bold mb-1">エージェント比較</span>
                 <span className="text-xs text-blue-200">主要各社を一覧で横断比較</span>
               </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
