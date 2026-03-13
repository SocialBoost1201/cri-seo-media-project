"use client";

import { motion } from "framer-motion";

import Image from "next/image";

// ダミーロゴ画像を横に並べて見せるための設定
// 実際の公式ロゴ画像が入った1枚の横長画像(dummy_logos.png)をリピートして使います
const MARQUEE_ITEMS = [1, 2, 3, 4]; // 無限スクロールのループ用に複数個配置

export default function LogoMarquee() {
  return (
    <div className="w-full overflow-hidden bg-white py-8 border-b border-slate-100 flex flex-col gap-4">
      <div className="text-center mb-2">
        <span className="text-xs font-bold text-slate-400 tracking-[0.2em] uppercase">Trusted by Top Agencies</span>
      </div>
      {/* 1段目 (左へスクロール) */}
      <div className="relative flex overflow-hidden group">
        <motion.div
          className="flex whitespace-nowrap items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 40,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {MARQUEE_ITEMS.map((_, index) => (
            <div
              key={`row1-${index}`}
              className="relative w-[800px] h-[60px] shrink-0 opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0 mx-4"
            >
              <Image
                src="/images/logos/dummy_logos.png"
                alt="提携エージェントロゴ"
                fill
                className="object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
