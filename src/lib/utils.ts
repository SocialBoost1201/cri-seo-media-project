import { type ClassValue, clsx } from "clsx";

/**
 * クラス名を結合するユーティリティ
 * clsx互換（Tailwind CSSでの条件付きクラス結合に使用）
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

/**
 * パンくず用のパスセグメントを生成
 */
export function generateBreadcrumbs(pathname: string) {
  const segments = pathname.split("/").filter(Boolean);
  return segments.map((segment, index) => ({
    label: segmentToLabel(segment),
    href: "/" + segments.slice(0, index + 1).join("/"),
  }));
}

const SEGMENT_LABELS: Record<string, string> = {
  agent: "転職エージェント",
  it: "IT転職",
  "second-career": "第二新卒",
  sales: "営業転職",
  executive: "ハイクラス",
  comparison: "比較",
  recommend: "おすすめ",
  "ai-career-diagnosis": "AIキャリア診断",
};

function segmentToLabel(segment: string): string {
  return SEGMENT_LABELS[segment] || segment;
}
