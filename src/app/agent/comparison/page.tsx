import { Metadata } from "next";
import ComparisonPageContent from "./ComparisonPageContent";

export const metadata: Metadata = {
  title: "転職エージェント比較【2026年最新】おすすめランキング",
  description:
    "転職エージェントを求人数・サポート品質・対応業界など6つの指標で徹底比較。あなたに最適なエージェントが見つかるランキングです。",
};

export default function ComparisonPage() {
  return <ComparisonPageContent />;
}
