# プロジェクトドキュメント

このディレクトリにはWebサイト開発に関するすべての設計・仕様ドキュメントを格納します。

---

## ディレクトリ構成

```
docs/
├── 01_requirements/        # 要件定義
│   ├── business_requirements.md    # ビジネス要件
│   ├── functional_requirements.md  # 機能要件
│   └── non_functional_requirements.md  # 非機能要件
│
├── 02_design/              # 設計書
│   ├── ia/                 # 情報アーキテクチャ（IA）
│   ├── ui_ux/              # UI/UX設計
│   └── system/             # システム構成設計
│
├── 03_content/             # コンテンツ設計
│   ├── sitemap.md          # サイトマップ
│   ├── page_structure.md   # ページ構成定義
│   └── copy_guidelines.md  # コピーライティング方針
│
├── 04_seo/                 # SEO・GEO戦略
│   ├── seo_strategy.md     # SEO戦略
│   └── keyword_map.md      # キーワードマップ
│
├── 05_technical/           # 技術仕様
│   ├── tech_stack.md       # 技術スタック
│   ├── directory_structure.md  # ディレクトリ構成
│   └── api_spec.md         # API仕様
│
└── 06_operations/          # 運用設計
    ├── cms_guide.md        # CMS運用ガイド
    └── maintenance.md      # 保守・運用フロー
```

---

## 更新ルール

- ドキュメントを更新した場合は、ファイル末尾の「更新履歴」セクションに日付・内容・担当を記録する
- 設計変更が発生した場合は、影響ファイルを同時に更新する
- 実装と乖離が生じた場合は、実装側ではなくドキュメント側を優先して確認・修正する
