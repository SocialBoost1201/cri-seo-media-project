export type Agent = {
  id: string;
  name: string;
  description: string;
  jobCount: string;
  salaryRange: string;
  industries: string[];
  support: string[];
  features: string[];
  score: number;
  rank?: number;
  recommended?: string;
  url: string;
};

export const agents: Agent[] = [
  {
    id: "career-bridge",
    name: "キャリアブリッジ",
    description:
      "業界最大級の求人数を誇る総合転職エージェント。幅広い業界に対応し、手厚いサポートで高い転職成功率を実現。",
    jobCount: "約 250,000件",
    salaryRange: "300万〜1,200万円",
    industries: ["IT", "営業", "コンサル", "金融", "メーカー"],
    support: ["履歴書添削", "面接対策", "年収交渉", "入社後フォロー"],
    features: ["求人数No.1", "全業界対応", "非公開求人80%"],
    score: 4.8,
    rank: 1,
    recommended: "とにかく多くの選択肢から選びたい方",
    url: "#",
  },
  {
    id: "next-step",
    name: "ネクストステップ",
    description:
      "20代・30代のキャリアアップに特化した転職エージェント。若手向けの求人が豊富で、キャリアプランニングにも定評。",
    jobCount: "約 180,000件",
    salaryRange: "250万〜900万円",
    industries: ["IT", "営業", "マーケティング", "企画"],
    support: ["履歴書添削", "面接対策", "キャリア相談", "スキル診断"],
    features: ["20代利用者No.1", "キャリア相談充実", "スピード内定"],
    score: 4.6,
    rank: 2,
    recommended: "キャリアプランをしっかり相談したい方",
    url: "#",
  },
  {
    id: "tech-agent",
    name: "テックエージェント",
    description:
      "IT・Web業界に特化した転職エージェント。エンジニア・デザイナーなど専門職の転職を強力にサポート。",
    jobCount: "約 85,000件",
    salaryRange: "400万〜1,500万円",
    industries: ["IT", "Web", "ゲーム", "SaaS"],
    support: ["ポートフォリオ添削", "技術面接対策", "年収交渉"],
    features: ["IT特化", "高年収案件多数", "リモート求人豊富"],
    score: 4.5,
    rank: 3,
    recommended: "IT・Web業界でキャリアアップしたい方",
    url: "#",
  },
  {
    id: "executive-career",
    name: "エグゼクティブキャリア",
    description:
      "年収800万円以上のハイクラス転職に特化。ヘッドハンティング型で、非公開の経営幹部ポジションも多数保有。",
    jobCount: "約 35,000件",
    salaryRange: "800万〜3,000万円",
    industries: ["コンサル", "金融", "経営企画", "外資系"],
    support: ["ヘッドハンティング", "役員面接対策", "条件交渉"],
    features: ["ハイクラス特化", "非公開求人95%", "年収大幅UP"],
    score: 4.4,
    url: "#",
  },
  {
    id: "fresh-start",
    name: "フレッシュスタート",
    description:
      "第二新卒・既卒・フリーターに特化した転職エージェント。未経験歓迎求人が豊富で、基礎から転職をサポート。",
    jobCount: "約 20,000件",
    salaryRange: "250万〜500万円",
    industries: ["IT", "営業", "事務", "販売"],
    support: ["ビジネスマナー研修", "履歴書添削", "面接対策"],
    features: ["第二新卒特化", "未経験歓迎", "正社員就職率96%"],
    score: 4.3,
    url: "#",
  },
  {
    id: "sales-pro",
    name: "セールスプロ",
    description:
      "営業職の転職に特化したエージェント。法人営業・個人営業・SaaS営業など、営業の専門性を活かした転職をサポート。",
    jobCount: "約 45,000件",
    salaryRange: "350万〜1,000万円",
    industries: ["営業", "SaaS", "不動産", "人材"],
    support: ["営業スキル診断", "面接対策", "年収交渉"],
    features: ["営業職特化", "インセンティブ情報充実", "年収UP率85%"],
    score: 4.2,
    url: "#",
  },
];

export function getTopAgents(count: number = 3): Agent[] {
  return agents
    .sort((a, b) => b.score - a.score)
    .slice(0, count);
}

export function getAgentById(id: string): Agent | undefined {
  return agents.find((a) => a.id === id);
}
