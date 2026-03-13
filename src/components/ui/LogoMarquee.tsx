"use client";

import { motion } from "framer-motion";

const LOCOS = [
  { name: "doda", color: "text-blue-500", font: "font-black tracking-tighter" },
  { name: "BIZREACH", color: "text-red-600", font: "font-serif font-bold tracking-widest" },
  { name: "ASSIGN", color: "text-red-600", font: "font-black tracking-wider" },
  { name: "PASONA", color: "text-red-700", font: "font-sans font-light tracking-[0.2em]" },
  { name: "Direct type", color: "text-navy-900", font: "font-bold tracking-tight", bg: "bg-yellow-400 text-black px-1 rounded-sm mr-1" },
  { name: "社内SE転職ナビ", color: "text-blue-400", font: "font-bold" },
  { name: "レバテック", color: "text-red-600", font: "font-black italic" },
  { name: "doda X", color: "text-navy-900", font: "font-black tracking-tighter" },
  { name: "Geekly", color: "text-black", font: "font-black tracking-tight" },
  { name: "type", color: "text-slate-800", font: "font-serif font-bold" },
  { name: "マイナビAGENT", color: "text-blue-500", font: "font-bold" },
];

// 無限スクロール用に配列を複製
const MARQUEE_ITEMS = [...LOCOS, ...LOCOS, ...LOCOS];

export default function LogoMarquee() {
  return (
    <div className="w-full overflow-hidden bg-white py-6 border-b border-slate-100 flex flex-col gap-4">
      {/* 1段目 (左へスクロール) */}
      <div className="relative flex overflow-hidden group">
        <motion.div
          className="flex whitespace-nowrap gap-12 sm:gap-20 px-6 items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {MARQUEE_ITEMS.map((logo, index) => (
            <div
              key={`row1-${index}`}
              className={`flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0 cursor-default select-none shrink-0 text-xl sm:text-2xl ${logo.color} ${logo.font}`}
            >
              {logo.bg && <span className={logo.bg}>D</span>}
              {logo.name}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
