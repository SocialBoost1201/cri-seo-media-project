"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { generateBreadcrumbs } from "@/lib/utils";

export default function Breadcrumb() {
  const pathname = usePathname();

  if (pathname === "/") return null;

  const crumbs = generateBreadcrumbs(pathname);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "ホーム",
        item: "https://career-navi.example.com",
      },
      ...crumbs.map((crumb, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: crumb.label,
        item: `https://career-navi.example.com${crumb.href}`,
      })),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav
        aria-label="パンくずリスト"
        className="max-w-[1200px] mx-auto px-5 sm:px-8 py-3"
      >
        <ol className="flex items-center gap-1.5 text-sm text-slate-400 flex-wrap">
          <li>
            <Link href="/" className="hover:text-blue-600 transition-colors">
              ホーム
            </Link>
          </li>
          {crumbs.map((crumb, index) => (
            <li key={crumb.href} className="flex items-center gap-1.5">
              <span className="text-slate-300">/</span>
              {index === crumbs.length - 1 ? (
                <span className="text-slate-500">{crumb.label}</span>
              ) : (
                <Link href={crumb.href} className="hover:text-blue-600 transition-colors">
                  {crumb.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
