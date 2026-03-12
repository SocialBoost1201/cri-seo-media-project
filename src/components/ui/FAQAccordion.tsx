"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { FAQItem } from "@/data/faqs";

type Props = {
  items: FAQItem[];
};

export default function FAQAccordion({ items }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-3">
      {items.map((item, index) => (
        <div
          key={index}
          className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 ${
            openIndex === index
              ? "border-blue-200 shadow-md"
              : "border-gray-200 shadow-sm hover:shadow-md hover:border-gray-300"
          }`}
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-white/50 transition-colors"
            aria-expanded={openIndex === index}
          >
            <span className="text-sm font-semibold text-slate-900 pr-4 leading-relaxed">
              {item.question}
            </span>
            <motion.div
              animate={{ rotate: openIndex === index ? 180 : 0 }}
              transition={{ duration: 0.25 }}
              className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                openIndex === index ? "bg-blue-50 text-blue-600" : "bg-slate-100 text-slate-400"
              }`}
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.div>
          </button>
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="overflow-hidden"
              >
                <p className="px-6 pb-5 text-sm text-slate-500 leading-relaxed">{item.answer}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
