import { Metadata } from "next";
import { getTopAgents } from "@/data/agents";
import RankingCard from "@/components/ui/RankingCard";
import Link from "next/link";
import CTACard from "@/components/ui/CTACard";

export const metadata: Metadata = {
  title: "転職エージェント おすすめランキング | キャリアナビ",
  description: "独自のデータから厳選した、失敗しない転職エージェントのおすすめランキングです。",
};

export default function RankingPage() {
  const topAgents = getTopAgents(10);

  return (
    <div className="min-h-screen bg-slate-50 pt-[72px] pb-24">
      {/* Header */}
      <div className="bg-slate-900 pb-20 pt-16 sm:pt-20">
        <div className="max-w-[1000px] mx-auto px-5 sm:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-slate-300 text-xs sm:text-sm font-bold rounded-full mb-6 tracking-widest border border-white/20">
            RANKING 2026
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 tracking-tight leading-tight drop-shadow-md">
            転職エージェント<br className="sm:hidden" />おすすめランキング
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed hidden sm:block">
            求人数、サポート品質、利用者の口コミなど、複数の基準から総合的に評価した<br />
            失敗しない転職エージェントをランキング形式でご紹介します。
          </p>
        </div>
      </div>

      <div className="max-w-[1000px] mx-auto px-5 sm:px-8 mt-[-40px] relative z-10">
        <div className="flex flex-col gap-6">
            {topAgents.map((agent, i) => (
              <RankingCard key={agent.id} agent={agent} rank={i + 1} />
            ))}
        </div>
        
        <div className="mt-16 sm:mt-24">
          <CTACard
            title="自分に合うエージェントを探す"
            description="ランキング以外のエージェントも含め、すべてのサービスを一覧で比較できます。"
            buttonText="全エージェント比較表を見る"
            buttonHref="/agents"
          />
        </div>
      </div>
    </div>
  );
}
