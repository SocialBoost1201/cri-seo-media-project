import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4">
      <h1 className="text-6xl font-bold text-[var(--color-text-tertiary)] mb-4">
        404
      </h1>
      <p className="text-[var(--color-text-secondary)] mb-8">
        お探しのページが見つかりませんでした。
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-[var(--color-primary)] text-white font-semibold rounded-xl hover:bg-[var(--color-primary-dark)] transition-colors"
      >
        トップページへ戻る
      </Link>
    </div>
  );
}
