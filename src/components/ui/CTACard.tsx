"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type Props = {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  variant?: "primary" | "subtle";
};

export default function CTACard({ title, description, buttonText, buttonHref, variant = "primary" }: Props) {
  const isPrimary = variant === "primary";

  return (
    <div className={`relative overflow-hidden rounded ${isPrimary ? "p-8 sm:p-12" : "p-8 sm:p-10"} ${
      isPrimary
        ? "bg-[#0A192F] shadow-xl border-t-4 border-blue-600"
        : "bg-white border border-gray-200 shadow-md"
    }`}>

      <div className={`relative text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6`}>
        <div className="flex-1">
          <h3 className={`text-2xl sm:text-3xl font-bold mb-3 ${isPrimary ? "text-white" : "text-slate-900"}`}>
            {title}
          </h3>
          <p className={`text-sm leading-relaxed mb-0 max-w-xl ${isPrimary ? "text-slate-300" : "text-slate-600"}`}>
            {description}
          </p>
        </div>
        
        <div className="shrink-0 w-full sm:w-auto">
          <Link
            href={buttonHref}
            className={isPrimary
              ? "inline-flex items-center justify-center gap-2 w-full sm:w-auto px-10 py-4 bg-[#FF7A00] text-white font-bold rounded shadow-[0_4px_0_#CC6200] hover:translate-y-[2px] hover:shadow-[0_2px_0_#CC6200] transition-all text-[15px]"
              : "inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 text-white bg-blue-600 font-bold rounded shadow-sm hover:bg-blue-700 transition-colors text-[14px]"
            }
          >
            {buttonText}
            <span className="font-normal text-sm">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
