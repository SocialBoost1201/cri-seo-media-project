import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { categories } from "@/data/categories";
import { articles } from "@/data/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${SITE_URL}/agent/comparison`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/ai-career-diagnosis`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];

  const categoryPages: MetadataRoute.Sitemap = categories.map((cat) => ({
    url: `${SITE_URL}${cat.href}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const articlePages: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${SITE_URL}${article.href}`,
    lastModified: article.updatedAt,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...categoryPages, ...articlePages];
}
