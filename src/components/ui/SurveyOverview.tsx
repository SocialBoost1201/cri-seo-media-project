import React from 'react';

export default function SurveyOverview() {
  return (
    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 mt-12 mb-8">
      <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-blue-600">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
        </svg>
        本ランキングの調査概要・評価基準について
      </h3>
      
      <div className="text-xs sm:text-sm text-slate-600 space-y-3">
        <p>本メディアで掲載している転職エージェントのおすすめランキングは、景品表示法及びステマ規制を遵守し、以下の客観的な調査データに基づき構成されています。</p>
        
        <div className="bg-white rounded-lg p-4 border border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <p className="font-bold text-slate-800 mb-1">【調査概要】</p>
            <ul className="list-disc pl-4 space-y-1">
              <li>調査期間: 2025年1月1日〜2025年1月31日</li>
              <li>調査対象者: 過去5年以内に転職エージェントを利用した実績のある20歳〜59歳の男女</li>
              <li>有効回答数: 1,022名</li>
              <li>調査手法: 当社独自のインターネットリサーチ及びユーザーインタビュー</li>
            </ul>
          </div>
          <div>
            <p className="font-bold text-slate-800 mb-1">【ランキング算出基準】</p>
            <ul className="list-disc pl-4 space-y-1">
              <li>求人の質と量 (25%)</li>
              <li>アドバイザーの提案力・交渉力 (25%)</li>
              <li>サポート対応のスピード (20%)</li>
              <li>利用対象者の幅広さ (15%)</li>
              <li>利用者の総合満足度 (15%)</li>
            </ul>
          </div>
        </div>
        
        <p className="text-[11px] sm:text-xs text-slate-500 pt-2 border-t border-slate-200">
          ※ 提携エージェントからの広告報酬の有無に関わらず、独自の利用評価データを優先して順位付けを行っており、No.1表示の恣意的な操作は行っておりません。順位は定期的な調査により変動する可能性があります。
        </p>
      </div>
    </div>
  );
}
