"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function SecretJobTips() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      className="bg-slate-50 border border-slate-200/60 rounded-2xl p-6 sm:p-8 my-8 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      
      <div className="flex items-center gap-3 mb-4 border-b border-slate-200/60 pb-3">
        <span className="w-8 h-8 rounded-lg flex items-center justify-center bg-blue-100 text-blue-600">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
          </svg>
        </span>
        <h3 className="font-bold text-slate-900 text-lg">知っていますか？転職成功の鍵「非公開求人」</h3>
      </div>
      
      <p className="text-sm text-slate-700 leading-relaxed mb-5">
        実は、転職サイトや企業のHPに掲載されている求人は全体のごくわずかです。好条件の求人（高年収・新規事業・重要ポストなど）は、競合に知られたり応募が殺到したりするのを防ぐため、<strong>「非公開求人」</strong>としてエージェント経由でのみ募集されます。
      </p>
      
      <div className="space-y-3 mt-4">
        {[
          "応募殺到を防ぐため優良企業ほど非公開にする傾向がある",
          "自社の事業戦略や人事情報を競合他社に漏らさないため",
          "一般公開求人よりも年収やポジションが高いケースが多い"
        ].map((reason, i) => (
          <div key={i} className="flex items-start gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-emerald-500 mt-1 shrink-0">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            <span className="text-sm text-slate-700 font-medium">理由{i+1}: <span className="text-slate-600 font-normal">{reason}</span></span>
          </div>
        ))}
      </div>
      
      <div className="mt-6 pt-5 border-t border-slate-200/60">
        <p className="text-sm text-slate-600 font-medium flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-blue-600 shrink-0">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.829 1.58-1.936a4.5 4.5 0 0 0 1.31-.433m-1.58 2.369a2.25 2.25 0 0 0-1.58.433v-2.369M9.75 18v-.192c0-.983-.658-1.829-1.58-1.936a4.5 4.5 0 0 1-1.31-.433m1.58 2.369a2.25 2.25 0 0 1 1.58.433v-1.58" />
          </svg>
          キャリアの選択肢を広げるために、まずは複数エージェントに無料登録して非公開求人をチェックすることをおすすめします。
        </p>
      </div>
    </motion.div>
  );
}
