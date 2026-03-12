"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Agent } from "@/data/agents";

type Props = {
  agent: Agent;
  rank?: number;
};

const rankTextColors: Record<number, string> = {
  1: "text-[#D4AF37]", // Gold
  2: "text-[#9CA3AF]", // Silver (gray-400)
  3: "text-[#CD7F32]", // Bronze
};

export default function RankingCard({ agent, rank }: Props) {
  const rankColor = rank && rank <= 3 ? rankTextColors[rank] : "text-slate-500";

  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden mb-6 shadow-sm hover:shadow-md transition-shadow duration-200">
      {/* Header */}
      <div className="bg-slate-50 border-b border-gray-200 px-5 py-4 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          {rank && (
            <div className="flex flex-col items-center justify-center shrink-0 w-10">
              <span className={`text-[10px] font-black tracking-widest ${rankColor}`}>RANK</span>
              <span className={`text-3xl font-black italic leading-none ${rankColor}`}>{rank}</span>
            </div>
          )}
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 border-l-4 border-blue-600 pl-3 leading-tight">
            {agent.name}
          </h3>
        </div>
        <div className="hidden sm:flex items-center gap-2 bg-yellow-50 text-yellow-800 px-3 py-1.5 rounded border border-yellow-200">
          <span className="text-[10px] font-bold tracking-wider">総合評価</span>
          <span className="text-base font-black">★ {agent.score}</span>
        </div>
      </div>

      <div className="p-5 flex flex-col md:flex-row gap-6">
        {/* Left: Image & Features */}
        <div className="w-full md:w-1/4 flex flex-col gap-3">
          <div className="aspect-[4/3] bg-slate-100 border border-gray-200 rounded flex flex-col items-center justify-center text-slate-400">
            <span className="text-2xl mb-1">🏢</span>
            <span className="text-xs font-medium">No Image</span>
          </div>
          <div className="flex flex-wrap gap-1">
            {agent.features.map((feature) => (
              <span key={feature} className="text-[10px] items-center bg-blue-50 text-blue-700 px-1.5 py-0.5 rounded border border-blue-100 font-bold">
                {feature}
              </span>
            ))}
          </div>
        </div>

        {/* Right: Info Table & Description */}
        <div className="w-full md:w-3/4 flex flex-col">
          {agent.recommended && (
            <p className="text-sm text-slate-800 font-bold mb-2 pb-2 border-b border-gray-100">
              {agent.recommended}
            </p>
          )}
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            {agent.description}
          </p>

          {/* Specs Table */}
          <div className="border border-gray-200 rounded text-sm mb-6">
            <div className="flex border-b border-gray-200 last:border-0">
              <div className="w-1/3 bg-slate-50 px-3 py-2 font-bold text-slate-700 border-r border-gray-200 flex items-center">公開求人数</div>
              <div className="w-2/3 px-3 py-2 font-medium text-slate-900 flex items-center bg-white">{agent.jobCount}</div>
            </div>
            <div className="flex border-b border-gray-200 last:border-0">
              <div className="w-1/3 bg-slate-50 px-3 py-2 font-bold text-slate-700 border-r border-gray-200 flex items-center">主な年収帯</div>
              <div className="w-2/3 px-3 py-2 text-slate-600 flex items-center bg-white">{agent.salaryRange}</div>
            </div>
            <div className="flex border-b border-gray-200 last:border-0">
              <div className="w-1/3 bg-slate-50 px-3 py-2 font-bold text-slate-700 border-r border-gray-200 flex items-center">得意な業界</div>
              <div className="w-2/3 px-3 py-2 text-slate-600 flex items-center bg-white">{agent.industries.join("・")}</div>
            </div>
          </div>

          <div className="mt-auto flex justify-center sm:justify-end">
            <Link
              href={agent.url}
              className="w-full sm:w-auto text-center bg-[#FF7A00] text-white font-bold px-10 py-3.5 rounded shadow-[0_4px_0_#CC6200] hover:translate-y-[2px] hover:shadow-[0_2px_0_#CC6200] transition-all text-[15px] flex items-center justify-center gap-2"
            >
              無料登録して求人を見る
              <span className="font-normal text-sm">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
