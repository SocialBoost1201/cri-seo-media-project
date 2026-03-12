"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { agents } from "@/data/agents";
import { comparisonFaqs } from "@/data/faqs";
import Breadcrumb from "@/components/layout/Breadcrumb";
import RankingCard from "@/components/ui/RankingCard";
import FAQAccordion from "@/components/ui/FAQAccordion";
import CTACard from "@/components/ui/CTACard";

const fadeIn = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

const rankStyles: Record<number, string> = {
  1: "bg-[#D4AF37] text-white shadow-sm", // Gold
  2: "bg-[#9CA3AF] text-white shadow-sm", // Silver (gray-400)
  3: "bg-[#CD7F32] text-white shadow-sm", // Bronze
};

export default function ComparisonPageContent() {
  const sortedAgents = [...agents].sort((a, b) => b.score - a.score);

  return (
    <>
      <Breadcrumb />

      {/* Hero */}
      <section className="relative overflow-hidden bg-white pt-28 sm:pt-32 pb-16 sm:pb-20">
        <div className="relative max-w-[1200px] mx-auto px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" as const }}
          >
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-600 border border-blue-100 mb-4">
              2026年最新版
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
              転職エージェント比較ランキング
            </h1>
            <p className="text-slate-500 max-w-2xl leading-relaxed mb-8">
              転職エージェント{agents.length}社を、求人数・サポート品質・対応業界・アドバイザー品質・ユーザー評価の5指標で徹底比較。
            </p>

            {/* 結論カード */}
            <div className="bg-white border border-gray-200 shadow-sm rounded-2xl p-7">
              <h2 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded-lg flex items-center justify-center text-xs bg-blue-50 text-blue-600">📌</span>
                おすすめ転職エージェントTOP3
              </h2>
              <ol className="space-y-3">
                {sortedAgents.slice(0, 3).map((a, i) => (
                  <li key={a.id} className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-xs shrink-0 ${rankStyles[i + 1]}`}>
                      {i + 1}
                    </div>
                    <div>
                      <strong className="text-slate-900 text-sm">{a.name}</strong>
                      <span className="inline-flex items-center gap-1 ml-2 px-2 py-0.5 rounded-full text-xs font-bold text-blue-600 bg-blue-50 border border-blue-100">
                        {a.score}
                      </span>
                      <span className="text-xs text-slate-400 ml-2">—  {a.features[0]}</span>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 sm:py-20">
        <motion.div {...fadeIn} className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-8">転職エージェント比較表</h2>
          <div className="bg-white border-t-4 border-t-blue-600 border border-gray-200 shadow-md rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[900px] text-sm text-left border-collapse">
                <thead>
                  <tr className="bg-slate-100 border-b-2 border-slate-200">
                    <th className="px-6 py-4 font-bold text-slate-800 whitespace-nowrap">サービス名</th>
                    <th className="px-6 py-4 font-bold text-slate-800 whitespace-nowrap">公開求人数</th>
                    <th className="px-6 py-4 font-bold text-slate-800 whitespace-nowrap">主な年収帯</th>
                    <th className="px-6 py-4 font-bold text-slate-800 whitespace-nowrap">得意な業界</th>
                    <th className="px-6 py-4 font-bold text-slate-800 text-center whitespace-nowrap">総合評価</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {sortedAgents.map((agent, i) => (
                    <tr
                      key={agent.id}
                      className={`hover:bg-blue-50/50 transition-colors ${i < 3 ? "bg-amber-50/10" : "bg-white"}`}
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          {i < 3 && (
                            <div className={`w-6 h-6 rounded flex items-center justify-center font-bold text-[11px] shrink-0 ${rankStyles[i + 1]}`}>
                              {i + 1}
                            </div>
                          )}
                          <span className="font-bold text-slate-900 border-l-2 border-blue-600 pl-2">{agent.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-slate-700 font-medium">{agent.jobCount}</td>
                      <td className="px-6 py-4 text-slate-600">{agent.salaryRange}</td>
                      <td className="px-6 py-4 text-slate-600">
                        <div className="flex flex-wrap gap-1">
                          {agent.industries.slice(0, 3).map(ind => (
                            <span key={ind} className="bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded text-[10px] border border-slate-200">{ind}</span>
                          ))}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="inline-flex items-center gap-1 font-black text-blue-600 text-base">
                          <span className="text-yellow-500">★</span> {agent.score}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Inline CTA */}
      <section className="py-8">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <CTACard
            title="自分に合うエージェントがわからない方へ"
            description="AIキャリア診断で、あなたに最適な転職タイプとおすすめサービスを診断できます。"
            buttonText="AIキャリア診断を受ける"
            buttonHref="/ai-career-diagnosis"
            variant="subtle"
          />
        </div>
      </section>

      {/* Rankings */}
      <section className="relative py-24 sm:py-32 bg-slate-50">
        <motion.div {...fadeIn} className="relative max-w-[1200px] mx-auto px-5 sm:px-8">
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-8">おすすめ転職エージェントランキング</h2>
          <div className="flex flex-col gap-6">
            {sortedAgents.map((agent, i) => (
              <motion.div
                key={agent.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" as const }}
              >
                <RankingCard agent={agent} rank={i + 1} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Criteria */}
      <section className="py-16 sm:py-20">
        <motion.div {...fadeIn} className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-8">比較基準・評価方法</h2>
          <div className="bg-white border border-gray-200 shadow-sm rounded-2xl p-7 sm:p-10">
            <p className="text-sm text-slate-500 mb-6 leading-relaxed">
              本ランキングは以下の5指標を重み付けして総合評価を算出しています。
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                { label: "求人数", weight: "25%", icon: "📊" },
                { label: "サポート品質", weight: "25%", icon: "🤝" },
                { label: "アドバイザー", weight: "20%", icon: "👤" },
                { label: "対応業界", weight: "15%", icon: "🏢" },
                { label: "ユーザー評価", weight: "15%", icon: "⭐" },
              ].map((item) => (
                <div key={item.label} className="text-center bg-slate-50 rounded-xl p-5">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <p className="text-xs text-slate-500 mb-1">{item.label}</p>
                  <p className="text-xl font-extrabold text-blue-600">{item.weight}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* FAQ */}
      <section className="relative py-24 sm:py-32 bg-slate-50">
        <motion.div {...fadeIn} className="relative max-w-[1200px] mx-auto px-5 sm:px-8">
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight text-center mb-8">よくある質問</h2>
          <div className="max-w-3xl mx-auto">
            <FAQAccordion items={comparisonFaqs} />
          </div>
        </motion.div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-20">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <CTACard
            title="あなたに合った転職エージェントを見つけよう"
            description="各エージェントの詳細を確認し、無料で相談を始めましょう。"
            buttonText="おすすめ転職エージェントを見る"
            buttonHref="/agent/recommend"
          />
        </div>
      </section>
    </>
  );
}
