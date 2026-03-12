import type { DiagnosisOption } from "@/data/diagnosisQuestions";
import { diagnosisResults, type DiagnosisResult } from "@/data/diagnosisResults";

/**
 * 回答からスコアを集計し、最も高いカテゴリの結果を返す。
 * 将来的にはAI APIへの差し替えを想定。
 */
export function calculateDiagnosisResult(
  answers: DiagnosisOption[]
): DiagnosisResult {
  const scores: Record<string, number> = {
    it: 0,
    secondCareer: 0,
    sales: 0,
    executive: 0,
    agent: 0,
  };

  for (const answer of answers) {
    for (const [key, value] of Object.entries(answer.scores)) {
      scores[key] = (scores[key] || 0) + value;
    }
  }

  const topType = Object.entries(scores).sort(
    ([, a], [, b]) => b - a
  )[0][0];

  return diagnosisResults[topType] || diagnosisResults.agent;
}
