"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SITE_NAME, CATEGORIES } from "@/lib/constants";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-[72px] ${
        isScrolled
          ? "bg-white border-b border-gray-200"
          : "bg-white/95"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-bold text-sm bg-blue-600">
            C
          </div>
          <span className="font-bold text-lg tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
            {SITE_NAME}
          </span>
        </Link>

        {/* PC Nav */}
        <nav className="hidden lg:flex items-center gap-0.5">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.slug}
              href={cat.href}
              className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-blue-600 rounded-xl hover:bg-blue-50/60 transition-all duration-200"
            >
              {cat.name}
            </Link>
          ))}
        </nav>

        {/* CTA Buttons & Search */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/search"
            className="w-10 h-10 flex items-center justify-center rounded-full text-slate-500 hover:text-blue-600 hover:bg-blue-50 transition-colors"
            title="エージェント・記事を探す"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </Link>
          <div className="w-px h-6 bg-slate-200 mx-1"></div>
          <Link
            href="/ai-career-diagnosis"
            className="px-4 py-2.5 text-sm font-semibold text-blue-600 hover:bg-blue-50 rounded-xl transition-all"
          >
            AI診断
          </Link>
          <Link
            href="/agent/comparison"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-colors"
          >
            エージェント比較
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden w-11 h-11 flex items-center justify-center rounded-xl hover:bg-slate-100 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="メニューを開く"
          aria-expanded={isMobileMenuOpen}
        >
          <div className="flex flex-col gap-[5px]">
            <span className={`w-5 h-[2px] bg-slate-800 rounded-full transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`w-5 h-[2px] bg-slate-800 rounded-full transition-all duration-300 ${isMobileMenuOpen ? "opacity-0 scale-0" : ""}`} />
            <span className={`w-5 h-[2px] bg-slate-800 rounded-full transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white border border-gray-200 shadow-lg mx-4 mt-1 rounded-2xl overflow-hidden"
          >
            <nav className="p-4 flex flex-col gap-1">
              {CATEGORIES.map((cat) => (
                <Link
                  key={cat.slug}
                  href={cat.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 text-slate-600 hover:text-blue-600 hover:bg-blue-50/60 rounded-xl transition-all font-medium"
                >
                  {cat.name}
                </Link>
              ))}
              <div className="h-px bg-slate-100 my-2"></div>
              <Link
                href="/search"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-3 text-slate-600 hover:text-blue-600 bg-slate-50 rounded-xl transition-all font-medium flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
                エージェント・記事を探す
              </Link>
              <div className="border-t border-slate-200 mt-2 pt-3 flex flex-col gap-2">
                <Link
                  href="/agent/comparison"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-center py-3 text-sm font-semibold text-white bg-blue-600 rounded-xl"
                >
                  エージェント比較
                </Link>
                <Link
                  href="/ai-career-diagnosis"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-center py-3 text-sm font-semibold text-blue-600 border-2 border-blue-600 rounded-xl hover:bg-blue-600 hover:text-white transition-colors"
                >
                  AIキャリア診断
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
