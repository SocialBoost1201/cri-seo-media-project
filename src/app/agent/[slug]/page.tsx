import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { agents, getAgentById } from '@/data/agents';
import CTACard from '@/components/ui/CTACard';

type Props = {
  params: { slug: string };
};

export function generateMetadata({ params }: Props): Metadata {
  const agent = getAgentById(params.slug);
  if (!agent) {
    return { title: 'Not Found' };
  }
  return {
    title: `${agent.name}の評判・口コミとメリット・デメリット`,
    description: `${agent.name}の特徴、メリット・デメリット、実際の利用者の口コミを詳しく解説します。`,
  };
}

export function generateStaticParams() {
  return agents.map((agent) => ({
    slug: agent.id,
  }));
}

export default function AgentDetailPage({ params }: Props) {
  const agent = getAgentById(params.slug);

  if (!agent) {
    return notFound();
  }

  return (
    <>
      {/* ─── Hero ─── */}
      <section className="bg-slate-50 py-12 md:py-20 border-b border-slate-200/60">
        <div className="max-w-[800px] mx-auto px-5 sm:px-8">
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start mb-8">
            <div className="w-24 h-24 md:w-32 md:h-32 shrink-0 bg-white border border-slate-200 rounded-2xl flex items-center justify-center text-4xl shadow-sm">
              🏢
            </div>
            <div>
              <div className="flex flex-wrap gap-2 mb-3">
                {agent.rank && (
                  <span className="px-2 py-1 bg-amber-100 text-amber-700 text-xs font-bold rounded">
                    総合ランキング {agent.rank}位
                  </span>
                )}
                <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded">
                  総合評価 ★{agent.score}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-4">
                {agent.name}
              </h1>
              <p className="text-slate-600 leading-relaxed font-medium">
                {agent.overview || agent.description}
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href={agent.url}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all text-center flex-1"
            >
              無料登録して求人を見る
            </a>
            <Link 
              href="/agents"
              className="px-8 py-4 bg-white border border-slate-200 text-slate-700 font-bold rounded-xl shadow-sm hover:bg-slate-50 transition-colors text-center"
            >
              他のエージェントと比較する
            </Link>
          </div>
        </div>
      </section>

      {/* ─── コンテンツ ─── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[800px] mx-auto px-5 sm:px-8">
          
          {/* 特徴・基本情報 */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 border-l-4 border-blue-600 pl-4">
              {agent.name}の特徴と基本情報
            </h2>
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 sm:p-8">
              <dl className="space-y-4 text-sm sm:text-base">
                <div className="flex flex-col sm:flex-row border-b border-slate-200/60 pb-4">
                  <dt className="w-full sm:w-1/3 font-bold text-slate-700 mb-1 sm:mb-0">公開求人数</dt>
                  <dd className="w-full sm:w-2/3 text-slate-900 font-medium">{agent.jobCount}</dd>
                </div>
                <div className="flex flex-col sm:flex-row border-b border-slate-200/60 pb-4">
                  <dt className="w-full sm:w-1/3 font-bold text-slate-700 mb-1 sm:mb-0">主な年収帯</dt>
                  <dd className="w-full sm:w-2/3 text-slate-900">{agent.salaryRange}</dd>
                </div>
                <div className="flex flex-col sm:flex-row border-b border-slate-200/60 pb-4">
                  <dt className="w-full sm:w-1/3 font-bold text-slate-700 mb-1 sm:mb-0">得意な業界</dt>
                  <dd className="w-full sm:w-2/3 text-slate-900">{agent.industries.join("、")}</dd>
                </div>
                <div className="flex flex-col sm:flex-row">
                  <dt className="w-full sm:w-1/3 font-bold text-slate-700 mb-1 sm:mb-0">サポート内容</dt>
                  <dd className="w-full sm:w-2/3 text-slate-900">{agent.support.join("、")}</dd>
                </div>
              </dl>
            </div>
          </div>

          {/* メリット・デメリット */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 border-l-4 border-blue-600 pl-4">
              メリットとデメリット
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50/50 border border-green-100 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-green-800 mb-4 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-green-200 text-green-700 flex items-center justify-center text-sm">✓</span>
                  メリット
                </h3>
                <ul className="space-y-3 text-slate-700 text-sm">
                  {agent.pros?.map((pro, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-green-500 mt-0.5">•</span>
                      {pro}
                    </li>
                  )) || <li>とくになし</li>}
                </ul>
              </div>
              <div className="bg-red-50/50 border border-red-100 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-red-800 mb-4 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-red-200 text-red-700 flex items-center justify-center text-sm">!</span>
                  注意点・デメリット
                </h3>
                <ul className="space-y-3 text-slate-700 text-sm">
                  {agent.cons?.map((con, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-red-400 mt-0.5">•</span>
                      {con}
                    </li>
                  )) || <li>とくになし</li>}
                </ul>
              </div>
            </div>
          </div>

          {/* 向いている人 */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 border-l-4 border-blue-600 pl-4">
              こんな人におすすめ
            </h2>
            <div className="bg-blue-50/50 border border-blue-100 rounded-2xl p-6 sm:p-8">
              <ul className="space-y-4">
                {agent.suitableFor?.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-800 font-bold">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm">✓</span>
                    {item}
                  </li>
                )) || <li className="text-slate-600">特になし</li>}
              </ul>
            </div>
          </div>

          {/* 口コミ */}
          {agent.reviews && agent.reviews.length > 0 && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 border-l-4 border-blue-600 pl-4">
                利用者の口コミ・評判
              </h2>
              <div className="space-y-6">
                {agent.reviews.map((review) => (
                  <div key={review.id} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                    <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-100">
                      <div>
                        <div className="text-amber-500 font-black tracking-widest text-sm mb-1">
                          {"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}
                        </div>
                        <h3 className="font-bold text-slate-900">{review.title}</h3>
                      </div>
                      <div className="text-right text-xs text-slate-500 font-medium">
                        {review.age} {review.gender}<br/>
                        {review.jobType}
                      </div>
                    </div>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      {review.comment}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* ボトムCTA */}
          <div className="mt-16 text-center">
            <a 
              href={agent.url}
              className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-lg rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              {agent.name}に無料登録する
              <span>→</span>
            </a>
            <p className="text-xs text-slate-500 mt-4">登録は無料です。いつでも退会可能です。</p>
          </div>

        </div>
      </section>

      {/* ─── 共通ボトムCTA ─── */}
      <section className="bg-slate-50 py-16 border-t border-slate-200/60">
         <div className="max-w-[800px] mx-auto px-5 sm:px-8">
           <CTACard
             title="複数のエージェントを比較して選ぶ"
             description="転職の成功確率を高めるためには、2〜3社のエージェントを併用し、自分に合うアドバイザーを見つけることが重要です。"
             buttonText="エージェント比較ページへ"
             buttonHref="/agents"
             variant="subtle"
           />
         </div>
      </section>
    </>
  );
}
