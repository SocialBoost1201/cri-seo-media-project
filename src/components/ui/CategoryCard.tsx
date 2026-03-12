"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Category } from "@/data/categories";

type Props = {
  category: Category;
};

export default function CategoryCard({ category }: Props) {
  return (
    <div className="group block relative overflow-hidden rounded bg-white border border-gray-200 shadow-sm hover:shadow hover:border-blue-300 transition-all duration-200">
      <Link href={category.href} className="flex flex-col h-full p-5">
        <div className="flex items-start gap-4 mb-3">
          <div className="flex-shrink-0 w-12 h-12 bg-slate-50 flex items-center justify-center rounded border border-slate-100 text-2xl">
            {category.icon}
          </div>
          <div className="flex-1 pt-1">
            <h3 className="text-[17px] font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-tight mb-1">
              {category.name}
            </h3>
            <span className="inline-block text-[11px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
              {category.articleCount}記事
            </span>
          </div>
        </div>
        
        <p className="text-[13px] text-slate-600 leading-relaxed line-clamp-2 mt-auto">
          {category.description}
        </p>
      </Link>
    </div>
  );
}
