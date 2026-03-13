import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function MultipleRegistrationGuide() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-slate-50 border border-blue-100 rounded-2xl p-6 sm:p-8 my-10 shadow-sm relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute -right-20 -top-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
      
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-blue-600">
              <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 11.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
            </svg>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-800 tracking-tight">
            失敗しないための「複数併用」の黄金パターン
          </h3>
        </div>
        
        <p className="text-sm sm:text-base text-slate-600 mb-6 leading-relaxed">
          満足のいく転職を実現している人の多くは、平均して<strong>2〜3社のエージェントに複数登録</strong>しています。1社に絞らず「総合型」と「特化型」を組み合わせることで、求人の見落としを防ぎ、より相性の良い担当者に出会える確率を格段に高めることができます。
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {/* Pattern A */}
          <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition-shadow">
            <div className="inline-block px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full mb-3">
              パターンA：20代・若手・第二新卒
            </div>
            <p className="text-sm font-bold text-slate-800 mb-2">手厚いサポート ＋ 膨大な求人</p>
            <ul className="text-xs text-slate-600 space-y-2">
              <li className="flex items-start gap-1.5">
                <span className="text-emerald-500 font-bold">1社目:</span> マイナビエージェント (丁寧)
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-emerald-500 font-bold">2社目:</span> doda (求人数)
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-emerald-500 font-bold">3社目:</span> 就職カレッジ等 (未経験特化)
              </li>
            </ul>
          </div>

          {/* Pattern B */}
          <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition-shadow">
            <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-bold rounded-full mb-3">
              パターンB：IT・Web・エンジニア
            </div>
            <p className="text-sm font-bold text-slate-800 mb-2">専門知識 ＋ IT特化の高待遇</p>
            <ul className="text-xs text-slate-600 space-y-2">
              <li className="flex items-start gap-1.5">
                <span className="text-blue-500 font-bold">1社目:</span> ワークポート (IT未経験〜中堅)
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-blue-500 font-bold">2社目:</span> レバテックキャリア (エンジニア特化)
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-blue-500 font-bold">3社目:</span> マイナビITエージェント
              </li>
            </ul>
          </div>

          {/* Pattern C */}
          <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition-shadow">
            <div className="inline-block px-3 py-1 bg-purple-100 text-purple-800 text-xs font-bold rounded-full mb-3">
              パターンC：ミドル層・ハイクラス
            </div>
            <p className="text-sm font-bold text-slate-800 mb-2">独占求人 ＋ スカウト型ヘッドハント</p>
            <ul className="text-xs text-slate-600 space-y-2">
              <li className="flex items-start gap-1.5">
                <span className="text-purple-500 font-bold">1社目:</span> JACリクルートメント (外資/管理職)
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-purple-500 font-bold">2社目:</span> ビズリーチ (スカウト待ち)
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-purple-500 font-bold">3社目:</span> リクルートダイレクトスカウト
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <Link href="#ranking" className="inline-block text-sm font-bold text-blue-600 hover:text-blue-700 underline decoration-blue-300 underline-offset-4">
            さっそく組み合わせて登録してみる（無料）↓
          </Link>
        </div>
      </div>
    </div>
  );
}
