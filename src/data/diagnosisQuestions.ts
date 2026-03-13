export type DiagnosisQuestion = {
  id: number;
  question: string;
  options: DiagnosisOption[];
};

export type DiagnosisOption = {
  label: string;
  scores: Record<string, number>;
};

export const diagnosisQuestions: DiagnosisQuestion[] = [
  {
    id: 1,
    question: "あなたの年齢は？",
    options: [
      { label: "24歳以下", scores: { secondCareer: 3, it: 1, agent: 1, sales: 0, executive: 0 } },
      { label: "25～29歳", scores: { secondCareer: 2, it: 2, sales: 1, agent: 1, executive: 0 } },
      { label: "30～34歳", scores: { it: 2, sales: 2, agent: 2, executive: 1, secondCareer: 0 } },
      { label: "35～39歳", scores: { executive: 1, agent: 2, it: 1, sales: 1, secondCareer: 0 } },
      { label: "40～44歳", scores: { executive: 2, agent: 2, sales: 0, it: 0, secondCareer: 0 } },
      { label: "45～49歳", scores: { executive: 3, agent: 1, sales: 0, it: 0, secondCareer: 0 } },
      { label: "50歳以上", scores: { executive: 3, agent: 1, sales: 0, it: 0, secondCareer: 0 } },
    ],
  },
  {
    id: 2,
    question: "性別は？",
    options: [
      { label: "男性", scores: { agent: 1, it: 0, sales: 0, executive: 0, secondCareer: 0 } },
      { label: "女性", scores: { agent: 1, it: 0, sales: 0, executive: 0, secondCareer: 0 } },
      { label: "回答しない", scores: { agent: 1, it: 0, sales: 0, executive: 0, secondCareer: 0 } },
    ],
  },
  {
    id: 3,
    question: "現在の職種は？",
    options: [
      { label: "営業", scores: { sales: 3, executive: 1, agent: 1, it: 0, secondCareer: 0 } },
      { label: "ITエンジニア", scores: { it: 3, executive: 1, agent: 1, sales: 0, secondCareer: 0 } },
      { label: "WEBクリエイター・マーケター", scores: { it: 2, agent: 1, sales: 0, executive: 0, secondCareer: 0 } },
      { label: "企画・管理", scores: { executive: 2, agent: 2, sales: 0, it: 0, secondCareer: 0 } },
      { label: "事務・アシスタント", scores: { agent: 2, secondCareer: 1, sales: 0, executive: 0, it: 0 } },
      { label: "販売・サービス", scores: { secondCareer: 2, sales: 1, agent: 1, executive: 0, it: 0 } },
      { label: "専門職（金融・不動産・医療等）", scores: { executive: 2, agent: 2, sales: 0, it: 0, secondCareer: 0 } },
      { label: "その他", scores: { agent: 2, it: 0, sales: 0, executive: 0, secondCareer: 0 } },
    ],
  },
  {
    id: 4,
    question: "現在の年収は？",
    options: [
      { label: "〜400万円", scores: { secondCareer: 2, agent: 2, sales: 1, it: 0, executive: 0 } },
      { label: "〜500万円", scores: { it: 2, agent: 2, sales: 2, secondCareer: 0, executive: 0 } },
      { label: "〜600万円", scores: { it: 2, agent: 2, executive: 1, sales: 0, secondCareer: 0 } },
      { label: "〜700万円", scores: { executive: 2, agent: 2, it: 0, sales: 0, secondCareer: 0 } },
      { label: "700万円〜", scores: { executive: 3, agent: 1, it: 0, sales: 0, secondCareer: 0 } },
    ],
  },
];
