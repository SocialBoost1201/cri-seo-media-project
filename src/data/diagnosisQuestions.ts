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
    question: "今回転職を考えている一番大きな理由は何ですか？",
    options: [
      { label: "年収を上げたい", scores: { executive: 3, sales: 2, it: 1, agent: 1, secondCareer: 0 } },
      { label: "キャリアアップしたい", scores: { it: 3, executive: 2, agent: 1, sales: 1, secondCareer: 0 } },
      { label: "働き方を改善したい", scores: { it: 2, agent: 2, secondCareer: 1, sales: 1, executive: 0 } },
      { label: "未経験領域に挑戦したい", scores: { secondCareer: 3, it: 2, agent: 1, sales: 0, executive: 0 } },
    ],
  },
  {
    id: 2,
    question: "現在の年齢帯に最も近いものを選んでください。",
    options: [
      { label: "20代前半", scores: { secondCareer: 3, agent: 2, it: 1, sales: 0, executive: 0 } },
      { label: "20代後半", scores: { secondCareer: 2, it: 2, agent: 1, sales: 1, executive: 0 } },
      { label: "30代前半", scores: { it: 2, sales: 2, agent: 1, executive: 1, secondCareer: 0 } },
      { label: "30代後半以上", scores: { executive: 3, sales: 2, agent: 1, it: 0, secondCareer: 0 } },
    ],
  },
  {
    id: 3,
    question: "現在の仕事への満足度はどのくらいですか？",
    options: [
      { label: "かなり不満", scores: { secondCareer: 2, agent: 2, it: 1, sales: 1, executive: 0 } },
      { label: "やや不満", scores: { agent: 2, it: 2, sales: 1, secondCareer: 1, executive: 0 } },
      { label: "どちらともいえない", scores: { agent: 2, executive: 1, it: 1, sales: 1, secondCareer: 1 } },
      { label: "大きな不満はない", scores: { executive: 3, sales: 1, agent: 1, it: 1, secondCareer: 0 } },
    ],
  },
  {
    id: 4,
    question: "今後の転職で重視したいことは何ですか？",
    options: [
      { label: "年収", scores: { executive: 3, sales: 2, it: 1, agent: 0, secondCareer: 0 } },
      { label: "成長環境", scores: { it: 3, secondCareer: 2, agent: 1, sales: 0, executive: 0 } },
      { label: "安定性", scores: { agent: 3, sales: 1, secondCareer: 1, it: 0, executive: 0 } },
      { label: "ワークライフバランス", scores: { it: 2, agent: 2, secondCareer: 1, sales: 1, executive: 0 } },
    ],
  },
  {
    id: 5,
    question: "あなたに近いタイプを選んでください。",
    options: [
      { label: "論理的に物事を考える", scores: { it: 3, executive: 2, agent: 1, sales: 0, secondCareer: 0 } },
      { label: "人と関わる仕事が得意", scores: { sales: 3, agent: 2, secondCareer: 1, it: 0, executive: 0 } },
      { label: "新しいことを学ぶのが好き", scores: { it: 2, secondCareer: 2, agent: 1, sales: 1, executive: 0 } },
      { label: "慎重に安定して進めたい", scores: { agent: 3, executive: 1, secondCareer: 1, sales: 1, it: 0 } },
    ],
  },
  {
    id: 6,
    question: "今のあなたに最も近い状況を選んでください。",
    options: [
      { label: "未経験職種も検討したい", scores: { secondCareer: 3, it: 2, agent: 1, sales: 0, executive: 0 } },
      { label: "今の職種で条件アップしたい", scores: { executive: 3, sales: 2, agent: 1, it: 0, secondCareer: 0 } },
      { label: "早めに転職したい", scores: { agent: 3, secondCareer: 2, sales: 1, it: 0, executive: 0 } },
      { label: "まずは情報収集から始めたい", scores: { agent: 3, it: 1, secondCareer: 1, sales: 1, executive: 0 } },
    ],
  },
];
