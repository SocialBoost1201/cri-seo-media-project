import { CATEGORIES } from "@/lib/constants";

export type NavItem = {
  name: string;
  href: string;
};

export const mainNavItems: NavItem[] = CATEGORIES.map((c) => ({
  name: c.name,
  href: c.href,
}));

export const footerNavItems = {
  categories: mainNavItems,
  popular: [
    { name: "転職エージェント比較", href: "/agent/comparison" },
    { name: "おすすめ転職エージェント", href: "/agent/recommend" },
    { name: "IT転職エージェント", href: "/it/agent" },
    { name: "AIキャリア診断", href: "/ai-career-diagnosis" },
  ],
  info: [
    { name: "運営者情報", href: "#" },
    { name: "編集ポリシー", href: "#" },
    { name: "プライバシーポリシー", href: "#" },
    { name: "お問い合わせ", href: "#" },
  ],
};
