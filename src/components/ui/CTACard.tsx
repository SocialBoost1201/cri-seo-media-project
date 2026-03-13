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
    <div className={`relative overflow-hidden rounded-xl ${isPrimary ? "p-6 sm:p-8" : "p-6 sm:p-8"} ${
      isPrimary
        ? "bg-slate-50 border border-slate-200"
        : "bg-white border border-slate-200/60"
    }`}>
      {/* Background decoration for primary variant */}
      {isPrimary && (
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />
      )}

      <div className={`relative text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6`}>
        <div className="flex-1">
          <h3 className={`text-2xl sm:text-3xl font-bold mb-3 ${isPrimary ? "text-slate-900" : "text-slate-900"}`}>
            {title}
          </h3>
          <p className={`text-sm leading-relaxed mb-0 max-w-xl ${isPrimary ? "text-slate-600" : "text-slate-600"}`}>
            {description}
          </p>
        </div>
        
        <div className="shrink-0 w-full sm:w-auto">
          <Link
            href={buttonHref}
            className={isPrimary
              ? "inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-sm hover:shadow transition-all duration-300 text-[15px]"
              : "inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3 bg-white border border-slate-300 text-slate-700 font-bold rounded-lg shadow-sm hover:bg-slate-50 transition-all duration-300 text-[14px]"
            }
          >
            {buttonText}
            <span className="font-normal text-sm transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
