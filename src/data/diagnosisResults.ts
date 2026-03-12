export type DiagnosisResult = {
  type: string;
  title: string;
  summary: string;
  approach: string;
  categorySlug: string;
  categoryHref: string;
  articleHref: string;
  ctaText: string;
  services: { name: string; feature: string }[];
};

export const diagnosisResults: Record<string, DiagnosisResult> = {
  it: {
    type: "it",
    title: "IT転職タイプ",
    summary:
      "あなたは論理的思考力が高く、成長志向が強いタイプです。IT業界は技術革新が早く、常に新しいスキルを身につけられる環境があるため、あなたの志向に合っています。",
    approach:
      "IT特化型エージェントを活用し、未経験可の求人やスキルアップ支援が充実したサービスを中心に情報収集するのが最適です。",
    categorySlug: "it",
    categoryHref: "/it",
    articleHref: "/it/agent",
    ctaText: "IT転職向けサービスを見る",
    services: [
      { name: "テックエージェント", feature: "IT特化・高年収案件多数" },
      { name: "キャリアブリッジ", feature: "求人数No.1・全業界対応" },
      { name: "ネクストステップ", feature: "20代利用者No.1" },
    ],
  },
  secondCareer: {
    type: "secondCareer",
    title: "第二新卒転職タイプ",
    summary:
      "あなたはキャリアの初期段階で新しい挑戦を求めているタイプです。未経験分野にも積極的で、若さを活かした転職ができるポテンシャルを持っています。",
    approach:
      "第二新卒・20代に特化したエージェントを活用し、未経験歓迎の求人を中心に探すのが最適です。ビジネスマナー研修付きのサービスもおすすめです。",
    categorySlug: "second-career",
    categoryHref: "/second-career",
    articleHref: "/second-career/agent",
    ctaText: "第二新卒向け記事を見る",
    services: [
      { name: "フレッシュスタート", feature: "第二新卒特化・正社員率96%" },
      { name: "ネクストステップ", feature: "キャリア相談充実" },
      { name: "キャリアブリッジ", feature: "求人数No.1" },
    ],
  },
  sales: {
    type: "sales",
    title: "営業転職タイプ",
    summary:
      "あなたは人と関わることが得意で、成果を出すことにやりがいを感じるタイプです。営業職はコミュニケーション力を活かせるフィールドが広く、年収アップの可能性も高い領域です。",
    approach:
      "営業特化型エージェントを活用し、インセンティブ制度や年収条件が透明なサービスを中心に比較するのが最適です。",
    categorySlug: "sales",
    categoryHref: "/sales",
    articleHref: "/sales/agent",
    ctaText: "営業転職カテゴリを見る",
    services: [
      { name: "セールスプロ", feature: "営業職特化・年収UP率85%" },
      { name: "キャリアブリッジ", feature: "求人数No.1" },
      { name: "ネクストステップ", feature: "スピード内定" },
    ],
  },
  executive: {
    type: "executive",
    title: "ハイクラス転職タイプ",
    summary:
      "あなたは豊富な経験を持ち、年収やポジションのさらなる向上を目指しているタイプです。ハイクラス向けのヘッドハンティング型サービスが最適です。",
    approach:
      "ハイクラス特化型エージェントに登録し、非公開の経営幹部ポジションや高年収求人にアクセスするのが最適です。",
    categorySlug: "executive",
    categoryHref: "/executive",
    articleHref: "/executive/agent",
    ctaText: "ハイクラスエージェントを見る",
    services: [
      { name: "エグゼクティブキャリア", feature: "ハイクラス特化・非公開95%" },
      { name: "キャリアブリッジ", feature: "全業界対応" },
      { name: "テックエージェント", feature: "IT高年収案件" },
    ],
  },
  agent: {
    type: "agent",
    title: "転職エージェント活用タイプ",
    summary:
      "あなたはまず情報収集から始めたい慎重派タイプです。複数のエージェントを比較し、自分に合ったアドバイザーを見つけることで、納得のいく転職が実現できます。",
    approach:
      "総合型エージェント2〜3社に登録し、それぞれの非公開求人やサポート内容を比較するのがおすすめです。",
    categorySlug: "agent",
    categoryHref: "/agent",
    articleHref: "/agent/recommend",
    ctaText: "おすすめ転職エージェントを見る",
    services: [
      { name: "キャリアブリッジ", feature: "求人数No.1" },
      { name: "ネクストステップ", feature: "キャリア相談充実" },
      { name: "テックエージェント", feature: "IT特化" },
    ],
  },
};
