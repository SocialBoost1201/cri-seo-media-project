import { Metadata } from "next";

export const metadata: Metadata = {
  title: "検索 | キャリアナビ",
  description: "転職エージェントやノウハウ記事を検索します。",
};

export default function SearchPage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-[72px] pb-24">
      {/* Search Header */}
      <div className="bg-white border-b border-slate-200 pb-8 pt-12">
        <div className="max-w-[800px] mx-auto px-5 sm:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 mb-6 tracking-tight">探す</h1>
          <div className="relative max-w-2xl mx-auto">
            <input 
              type="text" 
              placeholder="キーワード、エージェント名、職種..." 
              className="w-full h-14 pl-6 pr-14 text-lg rounded-2xl border-2 border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center hover:bg-blue-700 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-[800px] mx-auto px-5 sm:px-8 mt-12">
        <div className="text-center text-slate-500 py-20 bg-white rounded-2xl border border-slate-200 border-dashed">
          <div className="text-4xl mb-4">💡</div>
          <p className="font-bold text-slate-700 text-lg">検索機能は準備中です</p>
          <p className="text-sm mt-2">実際のシステム連携後に検索結果が動的に表示されます。</p>
        </div>
      </div>
    </div>
  );
}
