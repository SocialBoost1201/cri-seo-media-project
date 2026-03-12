import { Metadata } from "next";
import { categories, getCategoryBySlug } from "@/data/categories";
import { getArticlesByCategory } from "@/data/articles";
import CategoryPageContent from "./CategoryPageContent";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return categories.map((cat) => ({ slug: cat.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return {};
  return {
    title: `${category.name}転職の比較・おすすめ情報`,
    description: category.description,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return <div>カテゴリが見つかりません</div>;
  const articles = getArticlesByCategory(slug);
  return <CategoryPageContent category={category} articles={articles} />;
}
