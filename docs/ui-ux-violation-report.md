# UI/UX Global Rules Violation Report

- Project: cri-seo-media-project
- Generated: 2026-03-20T00:13:15.998Z
- Scope: UI files (31 files)
- Method: static analysis (regex-based heuristic)

## Critical

- なし

## High

- なし

## Medium

1. 行間不足の疑い
- 判定理由: line-height が詰まる指定を 3 件検出。可読性低下の可能性。
- 根拠:
- cri-seo-media-project/src/app/globals.css:15 `line-height: 1.8;`
- cri-seo-media-project/src/app/globals.css:50 `line-height: 1.45 !important;`
- cri-seo-media-project/src/app/globals.css:60 `line-height: 1.45 !important;`

## Low

- なし

## Notes

- このレポートは静的解析ベースのため、最終判断は実機表示（1920/1440/1024/768/430/390/375）で確認すること。
- Fixed要素・重なり・改行崩れは、実際のDOM/表示幅で再検証すること。
