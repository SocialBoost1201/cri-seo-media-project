"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Article } from "@/data/articles";

type Props = {
  article: Article;
};

export default function ArticleCard({ article }: Props) {
  return (
    <div className="group bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-sm hover:border-blue-300 transition-all duration-300 flex flex-col h-full">
      <Link href={article.href} className="flex flex-col h-full">
        {article.imageUrl && (
          <div className="relative w-full aspect-video bg-slate-100 overflow-hidden">
            <Image
              src={article.imageUrl}
              alt={article.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        )}
        <div className="p-5 flex flex-col h-full">
          <div className="flex items-center gap-2 mb-3 flex-wrap">
            {article.tags.slice(0, 2).map((tag) => (
            <span key={tag} className="inline-block px-1.5 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-600 border border-slate-200">
              {tag}
            </span>
          ))}
          {article.isPopular && (
            <span className="inline-block px-1.5 py-0.5 rounded text-[10px] font-bold bg-red-50 text-red-600 border border-red-100">
              人気
            </span>
          )}
        </div>
        <h3 className="text-[15px] font-bold text-slate-900 leading-snug mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
          {article.title}
        </h3>
        <p className="text-[13px] text-slate-600 leading-relaxed line-clamp-2 mb-4">
          {article.description}
        </p>
        <div className="mt-auto flex items-center justify-between text-[11px] font-medium text-slate-400">
          <div className="flex items-center gap-2 text-slate-500">
            <span>{article.updatedAt} 更新</span>
            <span className="w-1 h-1 rounded flex shrink-0 bg-slate-300" />
            <span>読了 {article.readingTime}分</span>
          </div>
          <span className="text-blue-600 font-bold opacity-0 group-hover:opacity-100 transition-opacity">→</span>
        </div>
        </div>
      </Link>
    </div>
  );
}
