import Link from "next/link";
import { SITE_NAME, COMPANY_NAME } from "@/lib/constants";
import { footerNavItems } from "@/data/navigation";

export default function Footer() {
  return (
    <footer className="relative bg-slate-900 text-slate-100 overflow-hidden">
      <div className="relative max-w-[1200px] mx-auto px-5 sm:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 mb-14">
          {/* Brand */}
          <div className="md:col-span-4">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-bold text-sm bg-blue-600">
                C
              </div>
              <span className="font-bold text-lg tracking-tight text-white">
                {SITE_NAME}
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              転職エージェントの比較・おすすめ情報を提供する転職情報メディアです。客観的なデータに基づき、あなたの転職をサポートします。
            </p>
          </div>

          {/* Cats */}
          <div className="md:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">カテゴリ</h3>
            <ul className="flex flex-col gap-3">
              {footerNavItems.categories.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-slate-400 hover:text-white transition-colors">{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular */}
          <div className="md:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">人気コンテンツ</h3>
            <ul className="flex flex-col gap-3">
              {footerNavItems.popular.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-slate-400 hover:text-white transition-colors">{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div className="md:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">運営情報</h3>
            <ul className="flex flex-col gap-3">
              {footerNavItems.info.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-slate-400 hover:text-white transition-colors">{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Media Policy / Disclaimer */}
        <div className="border-t border-slate-800 pt-8 pb-6 mb-6">
          <div className="bg-slate-800/50 rounded-lg p-5 border border-slate-700/50">
            <p className="text-xs text-slate-400 leading-relaxed font-bold mb-2">
              当メディアのポリシーおよび公平性について
            </p>
            <p className="text-[11px] text-slate-500 leading-relaxed">
              本サイトはアフィリエイトプログラムに参加しており、提携先から広告報酬を受け取ることがあります。ただし、掲載しているランキングや評価基準は、当メディア独自のインターネット調査および利用者の口コミにのみ基づき算出したものであり、提携の有無や報酬額が掲載順位に影響することは一切ありません。<br className="hidden sm:inline" />
              私たちは求職者の方々が「失敗しない転職」を実現できるよう、客観的な事実に基づいた透明性の高い情報提供をお約束します。
            </p>
          </div>
        </div>

        {/* Divider + Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} {COMPANY_NAME} All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-slate-500">
            <Link href="#" className="hover:text-slate-300 transition-colors">利用規約</Link>
            <Link href="#" className="hover:text-slate-300 transition-colors">プライバシー</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
