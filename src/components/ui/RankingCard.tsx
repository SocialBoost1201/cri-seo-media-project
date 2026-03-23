"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Agent } from "@/data/agents";

type Props = {
  agent: Agent;
  rank?: number;
};

const rankTextColors: Record<number, string> = {
  1: "text-amber-500", // Gold
  2: "text-slate-400", // Silver
  3: "text-amber-700", // Bronze
};

export default function RankingCard({ agent, rank }: Props) {
  const rankColor = rank && rank <= 3 ? rankTextColors[rank] : "text-slate-500";

  return (
    <div className="bg-white border border-slate-200/60 rounded-2xl overflow-hidden mb-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      {/* Header */}
      <div className="bg-slate-50/50 border-b border-slate-100 px-5 py-4 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          {rank && (
            <div className="flex flex-col items-center justify-center shrink-0 w-10">
              <span className={`text-xs font-black tracking-widest ${rankColor}`}>RANK</span>
              <span className={`text-3xl font-black italic leading-none ${rankColor}`}>{rank}</span>
            </div>
          )}
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-tight">
            {agent.name}
          </h3>
        </div>
        <div className="hidden sm:flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1.5 rounded-lg border border-blue-100">
          <span className="text-xs font-bold tracking-wider">総合評価</span>
          <span className="text-base font-black">★ {agent.score}</span>
        </div>
      </div>

      <div className="p-5 flex flex-col md:flex-row gap-6">
        {/* Left: Image & Features */}
        <div className="w-full md:w-1/4 flex flex-col gap-3">
          <div className="aspect-4/3 bg-slate-50 border border-slate-200 rounded-lg flex items-center justify-center relative overflow-hidden group">
            {/* 装飾用の背景 */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.05),transparent_70%)]" />
            <div className="absolute w-full h-full bg-white/20 backdrop-blur-[1px]" />
            {/* ロゴの代わりとなるイニシャルタイポグラフィ */}
            <span className="relative z-10 text-3xl font-black text-blue-600 group-hover:scale-105 transition-transform">
              {agent.name.substring(0, 2)}
            </span>
          </div>
          <div className="flex flex-wrap gap-1">
            {agent.features.map((feature) => (
              <span key={feature} className="text-xs items-center bg-slate-100 text-slate-600 px-2 py-1 rounded-md font-bold">
                {feature}
              </span>
            ))}
          </div>
        </div>

        {/* Right: Info Table & Description */}
        <div className="w-full md:w-3/4 flex flex-col">
          {agent.recommended && (
            <p className="text-sm text-slate-800 font-bold mb-2 pb-2 border-b border-slate-100">
              {agent.recommended}
            </p>
          )}
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            {agent.description}
          </p>

          {/* Specs Table */}
          <div className="border border-slate-200 rounded-lg overflow-hidden text-sm mb-6">
            <div className="flex border-b border-slate-200 last:border-0">
              <div className="w-1/3 bg-slate-50 px-3 py-2.5 font-bold text-slate-700 border-r border-slate-100 flex items-center text-xs">公開求人数</div>
              <div className="w-2/3 px-3 py-2.5 font-medium text-slate-900 flex items-center bg-white">{agent.jobCount}</div>
            </div>
            <div className="flex border-b border-slate-100 last:border-0">
              <div className="w-1/3 bg-slate-50 px-3 py-2.5 font-bold text-slate-700 border-r border-slate-100 flex items-center text-xs">主な年収帯</div>
              <div className="w-2/3 px-3 py-2.5 text-slate-600 flex items-center bg-white">{agent.salaryRange}</div>
            </div>
            <div className="flex border-b border-slate-100 last:border-0">
              <div className="w-1/3 bg-slate-50 px-3 py-2.5 font-bold text-slate-700 border-r border-slate-100 flex items-center text-xs">得意な業界</div>
              <div className="w-2/3 px-3 py-2.5 text-slate-600 flex items-center bg-white">{agent.industries.join("・")}</div>
            </div>
          </div>

          <div className="mt-auto flex justify-center sm:justify-end">
            <Link
              href={agent.url}
              className="w-full sm:w-auto text-center bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3 rounded-lg border border-blue-700 shadow-sm hover:shadow transition-all duration-300 text-[15px] flex items-center justify-center gap-2 group"
            >
              詳細を見る
              <span className="font-normal text-sm transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
