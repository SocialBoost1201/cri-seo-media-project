// サイト基本情報
export const SITE_NAME = "キャリアナビ";
export const SITE_DESCRIPTION =
  "転職エージェント比較・おすすめランキング。あなたに最適な転職サービスを見つける情報メディア。";
export const SITE_URL = "https://career-navi.example.com";
export const COMPANY_NAME = "株式会社クリーク・アンド・リバー社";
export const WEBIST_URL = "https://webist-cri.com";

// ナビゲーションカテゴリ
export const CATEGORIES = [
  { name: "転職エージェント", slug: "agent", href: "/agent" },
  { name: "IT転職", slug: "it", href: "/it" },
  { name: "第二新卒", slug: "second-career", href: "/second-career" },
  { name: "営業転職", slug: "sales", href: "/sales" },
  { name: "ハイクラス", slug: "executive", href: "/executive" },
] as const;

// アニメーション定数
export const MOTION = {
  fadeIn: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: "easeOut" },
  },
  fadeInSlow: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  },
  stagger: {
    animate: { transition: { staggerChildren: 0.1 } },
  },
  cardHover: {
    whileHover: { y: -4, boxShadow: "0 8px 24px rgba(0,0,0,0.08)" },
    transition: { duration: 0.2, ease: "easeOut" },
  },
  buttonHover: {
    whileHover: { scale: 1.03 },
    whileTap: { scale: 0.97 },
    transition: { duration: 0.2 },
  },
} as const;

// SEO定数
export const SEO = {
  titleSuffix: ` | ${SITE_NAME}`,
  defaultOgImage: "/images/og-default.png",
} as const;
