"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { Article } from "@/data/articles";
import type { Agent } from "@/data/agents";
import type { FAQItem } from "@/data/faqs";
import Breadcrumb from "@/components/layout/Breadcrumb";
import RankingCard from "@/components/ui/RankingCard";
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
            <div className="flex items-center gap-3 text-sm text-slate-400">
              <span>{article.updatedAt} 更新</span>
              <span className="w-1 h-1 rounded-full bg-slate-300" />
              <span>読了 {article.readingTime}分</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 結論（GEO対応） */}
      <section className="py-8">
        <div className="max-w-[800px] mx-auto px-5 sm:px-8">
          <div className="bg-blue-50 rounded-2xl border border-blue-100 p-6 sm:p-7">
            <h2 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg flex items-center justify-center text-xs bg-white text-blue-600">📌</span>
              この記事の結論
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
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
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-block">
              <Link href="/agent/comparison" className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 rounded-xl shadow-sm hover:shadow-md transition-all">
                おすすめ転職エージェント比較を見る
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Rankings */}
      <section className="py-8 sm:py-12">
        <motion.div {...fadeIn} className="max-w-[800px] mx-auto px-5 sm:px-8">
          <h2 className="text-xl font-bold text-slate-900 mb-6">おすすめランキングTOP3</h2>
          <div className="flex flex-col gap-5">
            {topAgents.map((agent, i) => (
              <RankingCard key={agent.id} agent={agent} rank={i + 1} />
            ))}
          </div>
        </motion.div>
      </section>

      {/* Mid CTA */}
      <section className="py-6">
        <div className="max-w-[800px] mx-auto px-5 sm:px-8">
          <CTACard
            title="自分に合う転職タイプを診断する"
            description="6つの質問に答えるだけで、最適な転職タイプがわかります。"
            buttonText="AIキャリア診断を受ける"
            buttonHref="/ai-career-diagnosis"
            variant="subtle"
          />
        </div>
      </section>

      {/* Detail */}
      <section className="py-8 sm:py-12">
        <motion.div {...fadeIn} className="max-w-[800px] mx-auto px-5 sm:px-8">
          <h2 className="text-xl font-bold text-slate-900 mb-4">転職エージェントの選び方</h2>
          <div className="text-sm text-slate-600 leading-relaxed space-y-4">
            <h3 className="text-base font-semibold text-slate-900">メリット</h3>
            <ul className="list-disc list-inside space-y-1.5">
              <li>非公開求人にアクセスできる</li>
              <li>履歴書添削・面接対策のサポートを受けられる</li>
              <li>年収交渉を代行してもらえる</li>
              <li>業界専門のアドバイザーに相談できる</li>
            </ul>
            <h3 className="text-base font-semibold text-slate-900">デメリット</h3>
            <ul className="list-disc list-inside space-y-1.5">
              <li>担当者との相性が合わない場合がある</li>
              <li>希望と異なる求人を紹介されることがある</li>
              <li>複数登録すると連絡が多くなる</li>
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
                  className="block bg-white rounded-2xl border border-slate-200 p-5 hover:border-blue-200 hover:shadow-md transition-all"
                >
                  <h3 className="text-sm font-semibold text-slate-900 mb-1 line-clamp-2">{a.title}</h3>
                  <p className="text-xs text-slate-400">{a.updatedAt} 更新</p>
                </Link>
              ))}
            </div>
          </motion.div>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="py-12 sm:py-16">
        <div className="max-w-[800px] mx-auto px-5 sm:px-8">
          <CTACard
            title="あなたに合った転職エージェントを見つけよう"
            description="複数のエージェントを比較して、無料で相談を始めましょう。"
            buttonText="全エージェントの比較を見る"
            buttonHref="/agent/comparison"
          />
        </div>
      </section>
    </>
  );
}
