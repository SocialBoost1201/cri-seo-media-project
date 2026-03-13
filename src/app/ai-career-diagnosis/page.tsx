"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { diagnosisQuestions, type DiagnosisOption } from "@/data/diagnosisQuestions";
import { calculateDiagnosisResult } from "@/lib/diagnosis";
import type { DiagnosisResult } from "@/data/diagnosisResults";
import Breadcrumb from "@/components/layout/Breadcrumb";
import FAQAccordion from "@/components/ui/FAQAccordion";

const diagnosisFaqs = [
  { question: "AIキャリア診断は無料ですか？", answer: "はい、完全無料でご利用いただけます。費用は一切かかりません。" },
  { question: "数分で診断できますか？", answer: "6つの質問に回答するだけなので、約1〜2分で完了します。" },
  { question: "診断結果は転職先を確定するものですか？", answer: "いいえ、あくまで転職の方向性を考えるための参考情報です。最終的な判断はご自身で行ってください。" },
  { question: "診断後に求人情報を見ることはできますか？", answer: "診断結果に基づいたおすすめの転職カテゴリ・エージェント比較ページへ遷移できます。" },
];

const rankBadges: Record<number, string> = {
  1: "bg-[#D4AF37] text-white",
  2: "bg-[#C0C0C0] text-white",
  3: "bg-[#CD7F32] text-white",
};

type Phase = "intro" | "questions" | "loading" | "result";

export default function DiagnosisPage() {
  const [phase, setPhase] = useState<Phase>("intro");
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<DiagnosisOption[]>([]);
  const [result, setResult] = useState<DiagnosisResult | null>(null);
  const [loadingText, setLoadingText] = useState("");

  const total = diagnosisQuestions.length;

  const handleAnswer = useCallback(
    (option: DiagnosisOption) => {
      const newAnswers = [...answers, option];
      setAnswers(newAnswers);

      if (currentQ < total - 1) {
        setCurrentQ(currentQ + 1);
      } else {
        setPhase("loading");
        const texts = ["回答を分析しています…", "転職志向と市場適性を照合しています…", "最適なキャリア方向性を整理しています…"];
        let i = 0;
        setLoadingText(texts[0]);
        const interval = setInterval(() => {
          i++;
          if (i < texts.length) {
            setLoadingText(texts[i]);
          } else {
            clearInterval(interval);
            setResult(calculateDiagnosisResult(newAnswers));
            setPhase("result");
          }
        }, 600);
      }
    },
    [answers, currentQ, total]
  );

  const goBack = () => {
    if (currentQ > 0) {
      setCurrentQ(currentQ - 1);
      setAnswers(answers.slice(0, -1));
    }
  };

  return (
    <>
      <Breadcrumb />

      <AnimatePresence mode="wait">
        {/* ─── INTRO ─── */}
        {phase === "intro" && (
          <motion.section
            key="intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative overflow-hidden bg-white pt-28 sm:pt-36 pb-24 sm:pb-32"
          >
            <div className="relative max-w-2xl mx-auto px-5 sm:px-8 text-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="w-24 h-24 mx-auto mb-8 rounded-xl flex items-center justify-center text-5xl bg-blue-600/10 border-2 border-blue-500/15"
              >
                🔍
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-600 border border-blue-100 mb-4">
                  無料・約1分
                </span>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-5">
                  <span className="text-blue-600">AI</span>キャリア診断
                </h1>
                <p className="text-slate-500 leading-relaxed mb-4 max-w-lg mx-auto">
                  6つの簡単な質問に答えるだけで、あなたに最適な転職タイプとおすすめの転職サービスがわかります。
                </p>
                <p className="text-xs text-slate-400 mb-10">所要時間：約1〜2分 ・ 完全無料 ・ 登録不要</p>
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => setPhase("questions")}
                  className="inline-flex items-center gap-2 px-10 py-4 text-base font-semibold text-white bg-blue-600 rounded shadow hover:bg-blue-700 transition-all"
                >
                  診断を始める
                  <span>→</span>
                </motion.button>
              </motion.div>
            </div>
          </motion.section>
        )}

        {/* ─── QUESTIONS ─── */}
        {phase === "questions" && (
          <motion.section
            key="questions"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-[80vh] flex items-center py-16 sm:py-20"
          >
            <div className="w-full max-w-xl mx-auto px-5 sm:px-8">
              {/* Progress */}
              <div className="mb-10">
                <div className="flex justify-between text-xs font-medium text-slate-500 mb-3">
                  <span>質問 {currentQ + 1} / {total}</span>
                  <span className="text-blue-600 font-bold">
                    {Math.round(((currentQ + 1) / total) * 100)}%
                  </span>
                </div>
                <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-blue-600"
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentQ + 1) / total) * 100}%` }}
                    transition={{ duration: 0.4, ease: "easeOut" as const }}
                  />
                </div>
              </div>

              {/* Question */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentQ}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.3, ease: "easeOut" as const }}
                >
                  <h2 className="text-xl font-bold text-slate-900 mb-8 leading-relaxed">
                    {diagnosisQuestions[currentQ].question}
                  </h2>
                  <div className="flex flex-col gap-3">
                    {diagnosisQuestions[currentQ].options.map((opt, i) => (
                      <motion.button
                        key={i}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleAnswer(opt)}
                        className="w-full text-left px-6 py-5 bg-white border border-gray-200 shadow-sm rounded hover:border-gray-300 hover:shadow transition-all duration-200 text-sm font-medium text-slate-800"
                      >
                        <span className="inline-flex items-center gap-3">
                          <span className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-400">
                            {String.fromCharCode(65 + i)}
                          </span>
                          {opt.label}
                        </span>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              {currentQ > 0 && (
                <button onClick={goBack} className="mt-8 text-sm text-slate-400 hover:text-blue-600 transition-colors font-medium">
                  ← 前の質問に戻る
                </button>
              )}
            </div>
          </motion.section>
        )}

        {/* ─── LOADING ─── */}
        {phase === "loading" && (
          <motion.section
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-[80vh] flex items-center justify-center py-24"
          >
            <div className="text-center px-5 sm:px-8">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
                className="w-16 h-16 mx-auto mb-8 rounded-full border-3 border-slate-200 border-t-blue-600"
              />
              <motion.p
                key={loadingText}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-slate-500 font-medium"
              >
                {loadingText}
              </motion.p>
            </div>
          </motion.section>
        )}

        {/* ─── RESULT ─── */}
        {phase === "result" && result && (
          <motion.section
            key="result"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" as const }}
            className="py-16 sm:py-20"
          >
            <div className="max-w-2xl mx-auto px-5 sm:px-8">
              {/* Result Hero */}
              <div className="relative overflow-hidden rounded border-t-4 border-t-blue-600 p-8 sm:p-12 mb-10 text-center bg-white border border-gray-200 shadow">
                <div className="relative">
                  <div className="text-5xl mb-5">🎯</div>
                  <p className="text-slate-500 text-sm font-medium mb-2">あなたの診断結果</p>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-600 mb-5">{result.title}</h2>
                  <p className="text-slate-600 leading-relaxed max-w-md mx-auto">{result.summary}</p>
                </div>
              </div>

              {/* Approach */}
              <div className="bg-white border border-gray-200 shadow-sm rounded p-7 mb-8">
                <h3 className="flex items-center gap-2 font-bold text-slate-900 mb-3">
                  <span className="w-7 h-7 rounded-lg flex items-center justify-center text-sm bg-blue-50 text-blue-600">💡</span>
                  おすすめの転職アプローチ
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">{result.approach}</p>
              </div>

              {/* Services */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-slate-900 mb-5">おすすめ転職サービス</h3>
                <div className="flex flex-col gap-3">
                  {result.services.map((s, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ y: -2 }}
                      className="bg-white border border-gray-200 shadow-sm rounded p-5 flex items-center justify-between hover:shadow hover:border-gray-300 transition-all duration-200"
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs shrink-0 ${rankBadges[i + 1] || "bg-slate-500 text-white"}`}>
                          {i + 1}
                        </div>
                        <div>
                          <p className="font-bold text-sm text-slate-900">{s.name}</p>
                          <p className="text-xs text-slate-400">{s.feature}</p>
                        </div>
                      </div>
                      <span className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-600 border border-blue-100">
                        おすすめ
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 mb-14">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1">
                  <Link href={result.categoryHref} className="flex flex-col items-center justify-center gap-1 w-full px-7 py-3 text-white bg-blue-600 rounded shadow hover:bg-blue-700 transition-all">
                    <span className="text-sm font-semibold flex items-center gap-2">{result.ctaText} <span>→</span></span>
                    <span className="text-[10px] text-blue-100 opacity-90">非公開求人をチェックする</span>
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1">
                  <Link href="/agent/comparison" className="flex flex-col items-center justify-center gap-1 w-full px-7 py-3 text-blue-600 border border-gray-300 bg-white rounded hover:bg-gray-50 hover:border-gray-400 transition-all">
                    <span className="text-sm font-semibold">全エージェント比較を見る</span>
                    <span className="text-[10px] text-slate-500">条件に合う求人を探す</span>
                  </Link>
                </motion.div>
              </div>

              {/* FAQ */}
              <div className="mb-10">
                <h3 className="text-lg font-bold text-slate-900 mb-5">よくある質問</h3>
                <FAQAccordion items={diagnosisFaqs} />
              </div>

              <div className="text-center">
                <button
                  onClick={() => { setPhase("intro"); setCurrentQ(0); setAnswers([]); setResult(null); }}
                  className="text-sm text-slate-400 hover:text-blue-600 transition-colors font-medium"
                >
                  もう一度診断する
                </button>
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
}
