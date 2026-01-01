# UTO BRASS 第1回演奏会 特設サイト

東京大学音楽部管弦楽団 金管セクション（UTO BRASS）による第1回演奏会の特設サイトです。

## 演奏会情報

| 項目 | 内容 |
|------|------|
| 公演名 | UTO BRASS 第1回演奏会 |
| 日時 | 2026年3月24日（火） |
| 開場/開演 | 18:30 / 19:00 |
| 会場 | 四谷区民ホール |
| 料金 | 入場無料・全席自由 |

## 本番URL

https://brass.ut-orch.com

## 技術スタック

- **フレームワーク**: Next.js 15 (App Router)
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS
- **アニメーション**: Framer Motion
- **アイコン**: Lucide React
- **ホスティング**: Vercel

## 機能

- レスポンシブデザイン（モバイル/タブレット/デスクトップ）
- 多言語対応（日本語/英語）
- SNSシェアボタン（X, LINE, Facebook）
- Google Maps埋め込み
- スクロールアニメーション
- 固定CTAボタン（モバイル）
- OGP対応

## 開発

```bash
# 依存関係のインストール
npm install

# 開発サーバー起動
npm run dev

# ビルド
npm run build

# プレビュー
npm run start
```

## デプロイ

GitHubリポジトリとVercelを連携しているため、`main`ブランチへのpushで自動デプロイされます。

## ディレクトリ構成

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # ルートレイアウト
│   ├── page.tsx            # トップページ
│   └── globals.css         # グローバルスタイル
├── components/
│   ├── sections/           # ページセクション
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ProgramSection.tsx
│   │   ├── AccessSection.tsx
│   │   └── TicketSection.tsx
│   ├── decorations/        # 装飾コンポーネント
│   ├── ui/                 # 共通UIコンポーネント
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── FixedCTA.tsx
├── lib/
│   ├── constants.ts        # 定数
│   └── i18n/               # 多言語対応
└── types/                  # 型定義
```

## 関連リンク

- [チケット予約（teket）](https://teket.jp/16767/62281)
- [X（旧Twitter）](https://x.com/utobrass)
- [Instagram](https://instagram.com/utobrass)
- [東京大学音楽部管弦楽団](https://ut-orch.com)

## ライセンス

© 2025 UTO BRASS. All rights reserved.
