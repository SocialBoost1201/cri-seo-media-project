import { Metadata } from 'next';
import Link from 'next/link';
import { agents } from '@/data/agents';
import RankingCard from '@/components/ui/RankingCard';
import CTACard from '@/components/ui/CTACard';

export const metadata: Metadata = {
  title: '転職エージェントおすすめランキング・徹底比較',
  description: 'IT・営業・ハイクラスなど、目的に合わせたおすすめ転職エージェントの比較ランキング。公開求人数や得意業界・年収帯などの情報を網羅しています。',
};

export default function AgentsIndexPage() {
  const sortedAgents = [...agents].sort((a, b) => b.score - a.score);

  return (
    <>
      {/* ─── Hero ─── */}
      <section className="bg-slate-50 py-16 md:py-24 border-b border-slate-200/60">
        <div className="max-w-[1000px] mx-auto px-5 sm:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-4">
            転職エージェントおすすめランキング・徹底比較
          </h1>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            当サイト独自の評価基準に基づいて厳選した全{agents.length}社の転職エージェントをランキング形式でご紹介。
            得意な業界や求人数、サポート状況を比較して、あなたに最適なパートナーを見つけましょう。
          </p>
        </div>
      </section>

      {/* ─── 比較表（横スクロール対応） ─── */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 border-l-4 border-blue-600 pl-4">
            主要エージェント比較一覧
          </h2>
          <div className="overflow-x-auto pb-6">
            <table className="w-full text-sm text-left whitespace-nowrap border-collapse min-w-[900px]">
              <thead className="bg-slate-50 border-y border-slate-200 text-slate-700">
                <tr>
                  <th className="px-4 py-4 font-bold rounded-tl-xl">エージェント名</th>
                  <th className="px-4 py-4 font-bold text-center">総合評価</th>
                  <th className="px-4 py-4 font-bold">公開求人数</th>
                  <th className="px-4 py-4 font-bold">得意業界</th>
                  <th className="px-4 py-4 font-bold">対象年収帯</th>
                  <th className="px-4 py-4 font-bold rounded-tr-xl">詳細確認</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {sortedAgents.map((agent) => (
                  <tr key={agent.id} className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-4 py-4 font-bold text-slate-900 border-x border-slate-100/50">
                      <Link href={`/agent/${agent.id}`} className="hover:text-blue-600 transition-colors">
                        {agent.name}
                      </Link>
                    </td>
                    <td className="px-4 py-4 text-center font-bold text-amber-600 border-x border-slate-100/50">
                      ★ {agent.score}
                    </td>
                    <td className="px-4 py-4 text-slate-700 border-x border-slate-100/50">{agent.jobCount}</td>
                    <td className="px-4 py-4 text-slate-700 border-x border-slate-100/50 text-xs">
                      <div className="flex gap-1 flex-wrap w-48 whitespace-normal">
                        {agent.industries.slice(0, 3).map((ind) => (
                           <span key={ind} className="bg-slate-100 px-1.5 py-0.5 rounded text-[10px] text-slate-600">{ind}</span>
                        ))}
                      </div>
                    </td>
                    <td className="px-4 py-4 text-slate-700 border-x border-slate-100/50">{agent.salaryRange}</td>
                    <td className="px-4 py-4 border-x border-slate-100/50">
                      <Link 
                        href={`/agent/${agent.id}`} 
                        className="inline-block px-4 py-2 bg-blue-50 text-blue-600 font-bold text-xs rounded-lg hover:bg-blue-100 transition-colors"
                      >
                        詳細を見る
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─── ランキング詳細 ─── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-[1000px] mx-auto px-5 sm:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-10 text-center">
            おすすめランキング詳細
          </h2>
          <div className="flex flex-col gap-8">
            {sortedAgents.map((agent, index) => (
              <RankingCard key={agent.id} agent={agent} rank={index + 1} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-[1000px] mx-auto px-5 sm:px-8">
          <CTACard
            title="記事を読んで迷ったら、AIに相談"
            description="どのエージェントに登録すべきか迷っている方は、無料のAIキャリア診断をお試しください。あなたの経歴と希望からベストな選択肢をご提案します。"
            buttonText="AIキャリア診断を受ける（無料）"
            buttonHref="/ai-career-diagnosis"
            variant="primary"
          />
        </div>
      </section>
    </>
  );
}
