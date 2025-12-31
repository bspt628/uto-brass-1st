# UTO BRASS 第1回演奏会 特設サイト 要件定義書・内容定義書

## 1. プロジェクト概要

### 1.1 基本情報
| 項目 | 内容 |
|------|------|
| プロジェクト名 | UTO BRASS 第1回演奏会 特設サイト |
| 本番URL | https://brass.ut-orch.com |
| 主催団体 | 東京大学音楽部管弦楽団 金管セクション（UTO BRASS） |
| 親団体 | 東京大学音楽部管弦楽団（The University of Tokyo Orchestra） |

### 1.2 演奏会情報
| 項目 | 内容 |
|------|------|
| 公演名 | UTO BRASS 第1回演奏会 |
| 副題 | 東大オケ現役金管セクションによるアンサンブルの調べ |
| 日時 | 2026年3月24日（火） |
| 開場 | 18:30 |
| 開演 | 19:00 |
| 終演予定 | 21:00 |
| 会場 | 四谷区民ホール |
| 料金 | 入場無料 |
| 座席 | 全席自由 |

### 1.3 団体紹介
UTO Brassは、東京大学音楽部管弦楽団（University of Tokyo Orchestra）の金管セクション有志により、2025年に結成されたブラスアンサンブルです。主に現役団員で構成され、学園祭以外にも金管アンサンブルの演奏機会を設けて、金管楽器の魅力をより多くの方にお届けしたいという思いから活動を始めました。

---

## 2. サイトの目的

### 2.1 主目的
1. **演奏会の告知・集客** - 演奏会の存在を広く周知し、来場者を増やす
2. **情報提供** - 日時・会場・プログラム等の詳細情報を正確に伝える
3. **チケット予約導線** - teketへのスムーズな誘導
4. **ブランディング** - UTO BRASSの第1回演奏会として記念となるサイト

### 2.2 ターゲットユーザー
- 東京大学関係者（学生・教職員・卒業生）
- クラシック音楽ファン
- 金管アンサンブル愛好者
- 出演者の友人・家族
- SNSで情報を見た一般の方

---

## 3. コンテンツ要件

### 3.1 演奏曲目（プログラム）

| No. | 作曲者 | 曲名 | 編成 |
|-----|--------|------|------|
| 1 | P.デュカス (Paul Dukas) | 「ラ・ペリ」のファンファーレ (Fanfare from La Péri) | - |
| 2 | J.フェルヘルスト (Johan Ferhelst) | テューバ二重奏、トロンボーン・テューバ二重奏 | 二重奏 |
| 3 | J.ホーナー (James Horner) | タイタニック・ファンタジー (Titanic Fantasy) | ホルン12重奏 |
| 4 | スコットランド民謡 | スコットランドの釣鐘草 (The Bluebells of Scotland) | 独奏: 芳賀大夢 |
| 5 | C.フランク (César Franck) | パニス・アンジェリクス (Panis Angelicus) | 金管5重奏 |
| 6 | G.リチャーズ (Goff Richards) | 高貴なる葡萄酒を讃えて (A Toast to the Noble Grape) | 金管10重奏 |
| 7 | - | ほか | - |

> ※曲順は当日変更の可能性あり

### 3.2 会場・アクセス情報

#### 会場情報
| 項目 | 内容 |
|------|------|
| 会場名 | 四谷区民ホール |
| 所在地 | 〒160-0014 東京都新宿区内藤町87番地 四谷区民センター9階 |
| 電話番号 | 03-3351-2118 |
| 公式サイト | https://shinjuku.hall-info.jp/yotsuya/ |

#### アクセス方法
| 交通手段 | 詳細 |
|----------|------|
| 地下鉄 | 東京メトロ丸ノ内線「新宿御苑前」駅 2番出口（大木戸門）より徒歩5分 |
| 都バス | 品97系統 新宿駅西口〜品川車庫「新宿一丁目」下車 |

#### Google Maps埋め込み
```
場所ID: 四谷区民ホール
座標: 35.6867, 139.7134（参考値）
埋め込みURL: https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.5!2d139.7134!3d35.6867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c9d5a5f5555%3A0x5555555555555555!2z5Zub6LCN5Yy65rCR44Ob44O844Or!5e0!3m2!1sja!2sjp!4v1234567890
```

> ※実装時は Google Maps Embed API を使用して正確な埋め込みコードを生成すること

### 3.3 お問い合わせ情報
| 項目 | 内容 |
|------|------|
| メールアドレス | utobrass.management@gmail.com |
| その他 | 各種SNSのDMでも受付 |

### 3.4 外部リンク
| サービス | 用途 | URL |
|----------|------|-----|
| teket | チケット予約 | https://teket.jp/16767/62281 |
| X (旧Twitter) | 公式アカウント | https://x.com/utobrass |
| Instagram | 公式アカウント | https://instagram.com/utobrass |

---

## 4. ページ構成（サイトマップ）

### 4.1 推奨構成：シングルページ構成

演奏会特設サイトとして、1ページ完結型を推奨。

```
トップページ（シングルページ）
├── ヒーローセクション（メインビジュアル）
├── 演奏会概要セクション
├── プログラムセクション
├── 出演者紹介セクション（任意）
├── 会場・アクセスセクション
├── チケット予約セクション
├── お問い合わせセクション
└── フッター
```

### 4.2 各セクション詳細

#### ① ヒーローセクション
- UTO BRASSロゴ
- 「第1回演奏会」タイトル
- 日時・会場の基本情報
- チケット予約ボタン（CTA）
- スクロール誘導

#### ② 演奏会概要セクション
- 演奏会名
- 日時（開場・開演）
- 会場名
- 入場料・座席情報
- 主催者情報

#### ③ プログラムセクション
- 曲目リスト（作曲者・曲名・独奏者）
- 各曲の簡単な解説（任意）
- 「ほか」の表記

#### ④ 出演者紹介セクション（任意）
- 独奏者：芳賀大夢 プロフィール
- 団体紹介文
- 出演者集合写真（任意）

#### ⑤ 会場・アクセスセクション
- 会場名・住所
- Google Maps埋め込み
- アクセス方法（電車・バス）
- 会場外観写真（任意）

#### ⑥ チケット予約セクション
- teket予約ボタン（メインCTA）
- 入場無料の明記
- 予約方法の説明

#### ⑦ お問い合わせセクション
- メールアドレス
- SNSリンク（X, Instagram）
- 問い合わせフォーム（任意）

#### ⑧ フッター
- コピーライト
- 親団体（東京大学音楽部管弦楽団）へのリンク
- SNSアイコン

---

## 5. デザイン要件

### 5.1 カラースキーム（チラシ準拠）

| 用途 | カラー | 備考 |
|------|--------|------|
| メインカラー | ゴールド/マスタード (#D4A84B 付近) | 金管楽器をイメージ |
| サブカラー | ライトブルー (#B8D4E8 付近) | 背景・アクセント |
| テキスト | ダークグレー (#333333) | 可読性重視 |
| 背景 | オフホワイト (#F9F9F9) | 清潔感 |
| アクセント | ホワイト (#FFFFFF) | ハイライト |

### 5.2 タイポグラフィ
| 用途 | フォント候補 |
|------|-------------|
| 見出し（日本語） | Noto Sans JP Bold, 游ゴシック |
| 見出し（英語） | Montserrat, Oswald |
| 本文 | Noto Sans JP Regular, ヒラギノ角ゴ |

### 5.3 ビジュアル要素
- トランペット・ホルンのイラスト（チラシ素材を活用）
- 曲線的なドット装飾
- 金管楽器のシルエット
- UTO BRASSロゴ

### 5.4 レスポンシブ対応

#### ブレークポイント定義
| デバイス | ブレークポイント | コンテナ幅 |
|----------|-----------------|-----------|
| モバイル (sm) | 〜639px | 100% (padding: 16px) |
| タブレット (md) | 640px〜767px | 100% (padding: 24px) |
| タブレット横 (lg) | 768px〜1023px | 720px |
| デスクトップ (xl) | 1024px〜1279px | 960px |
| 大画面 (2xl) | 1280px〜 | 1140px |

#### デバイス別レイアウト調整

| 要素 | モバイル | タブレット | デスクトップ |
|------|---------|-----------|-------------|
| ヘッダー | ハンバーガーメニュー | ハンバーガーメニュー | 横並びナビ |
| ヒーロー高さ | 100svh | 100svh | 100vh |
| セクション余白 | 48px | 64px | 80px |
| グリッドカラム | 1列 | 2列 | 2〜3列 |
| フォントサイズ | 基準の90% | 基準の95% | 基準100% |
| 装飾イラスト | 縮小50% + 透明度上げ | 縮小70% | 100% |
| 固定CTAボタン | 画面下部固定表示 | 画面下部固定表示 | 非表示（ヘッダーCTAで代替） |
| Google Maps | 高さ250px | 高さ350px | 高さ450px |

#### 装飾要素のレスポンシブ対応
```css
/* モバイルでの装飾要素 */
@media (max-width: 767px) {
  .decoration-illustration {
    transform: scale(0.5);
    opacity: 0.3;  /* 邪魔にならないよう透明度を上げる */
  }
  .decoration-dots {
    display: none;  /* ドットパターンは非表示 */
  }
}
```

### 5.5 スペーシングシステム

| 名称 | デスクトップ | タブレット | モバイル | 用途 |
|------|------------|-----------|---------|------|
| section-gap | 80px | 64px | 48px | セクション間 |
| content-gap | 32px | 24px | 20px | コンテンツブロック間 |
| element-gap | 16px | 14px | 12px | 要素間 |
| text-gap | 8px | 8px | 6px | テキスト行間調整 |

#### Tailwind CSS変数
```typescript
// tailwind.config.ts
spacing: {
  'section': '80px',
  'section-md': '64px',
  'section-sm': '48px',
  'content': '32px',
  'element': '16px',
}
```

### 5.6 コンポーネントスタイル

#### ボタン
| 種類 | 背景色 | テキスト色 | border-radius | padding | box-shadow |
|------|--------|-----------|--------------|---------|------------|
| Primary (CTA) | #D4A84B | #FFFFFF | 8px | 16px 32px | 0 4px 12px rgba(212,168,75,0.3) |
| Primary:hover | #B8923F | #FFFFFF | 8px | 16px 32px | 0 6px 16px rgba(212,168,75,0.4) |
| Secondary | transparent | #D4A84B | 8px | 14px 28px | none (border: 2px solid #D4A84B) |
| Ghost | transparent | #333333 | 4px | 8px 16px | none |

#### カード
| 要素 | 値 |
|------|-----|
| 背景色 | #FFFFFF |
| border-radius | 12px |
| box-shadow | 0 2px 8px rgba(0,0,0,0.08) |
| box-shadow:hover | 0 4px 16px rgba(0,0,0,0.12) |
| padding | 24px (モバイル: 16px) |

#### 入力フィールド（問い合わせフォーム用）
| 要素 | 値 |
|------|-----|
| 背景色 | #FFFFFF |
| border | 1px solid #E0E0E0 |
| border:focus | 2px solid #D4A84B |
| border-radius | 4px |
| padding | 12px 16px |
| box-shadow | inset 0 1px 2px rgba(0,0,0,0.05) |

### 5.7 タイポグラフィ階層

| 要素 | デスクトップ | タブレット | モバイル | font-weight | line-height |
|------|------------|-----------|---------|-------------|-------------|
| h1 (ヒーロータイトル) | 56px | 44px | 32px | 700 | 1.2 |
| h2 (セクションタイトル) | 36px | 30px | 24px | 700 | 1.3 |
| h3 (サブセクション) | 24px | 22px | 20px | 600 | 1.4 |
| h4 (カード見出し) | 20px | 18px | 16px | 600 | 1.4 |
| body (本文) | 16px | 16px | 15px | 400 | 1.7 |
| small (キャプション) | 14px | 14px | 13px | 400 | 1.5 |
| tiny (注釈) | 12px | 12px | 11px | 400 | 1.4 |

#### 英語タイトル（Montserrat）
| 要素 | サイズ | letter-spacing |
|------|--------|---------------|
| UTO BRASS ロゴ横 | 24px | 0.1em |
| 英語サブタイトル | 14px | 0.05em |

### 5.8 カラー状態バリエーション

| 状態 | Primary | Secondary | 用途 |
|------|---------|-----------|------|
| Default | #D4A84B | #B8D4E8 | 通常状態 |
| Hover | #B8923F | #8FBDD6 | マウスオーバー |
| Active | #9A7A35 | #6BA3C4 | クリック中 |
| Disabled | #E8D9B8 | #DCE8F0 | 無効状態 |
| Focus | #D4A84B + ring | #B8D4E8 + ring | フォーカス（アクセシビリティ） |

#### フォーカスリング
```css
.focus-ring {
  outline: 2px solid #D4A84B;
  outline-offset: 2px;
}
```

---

## 6. 機能要件

### 6.1 必須機能
| 機能 | 説明 |
|------|------|
| レスポンシブデザイン | スマートフォン・タブレット・PC対応 |
| スムーススクロール | ナビゲーションからのスムーズな遷移 |
| 外部リンク | teket・SNSへの適切なリンク |
| OGP設定 | SNSシェア時の適切な表示 |
| 固定CTAボタン（モバイル） | 画面下部に常時表示のチケット予約ボタン |
| ナビゲーションメニュー | About/Program/Access/Ticketへのリンク |

### 6.2 推奨機能
| 機能 | 説明 |
|------|------|
| カウントダウンタイマー | 演奏会当日までのカウントダウン |
| Google Maps埋め込み | 会場位置の視覚的表示 |
| スクロールアニメーション | 装飾要素の動的表示（詳細は6.6参照） |
| 固定ヘッダー | スクロール時も常時表示 |

### 6.3 オプション機能
| 機能 | 説明 |
|------|------|
| 多言語対応 | 英語版（留学生向け） |
| 問い合わせフォーム | メール送信機能 |
| アクセス解析 | Google Analytics導入 |
| SNSシェアボタン | X/Instagramへのシェア機能 |
| チラシダウンロード | PDFまたはPNG形式でのダウンロード提供 |
| 印刷対応 | @media printでの最適化表示 |

### 6.4 状態管理・条件分岐

#### 6.4.1 演奏会の時期による表示切替

| 状態 | 条件 | 表示内容 |
|------|------|---------|
| 演奏会前（通常） | 現在日時 < 演奏会日時 | カウントダウン表示、「チケット予約」CTA |
| 演奏会当日 | 演奏会日と同日 | 「本日開催」バナー、開場/開演時刻を強調 |
| 開演直前 | 開演1時間前〜 | 「まもなく開演」表示 |
| 演奏会終了後 | 現在日時 > 終演時刻 | 「終了しました」表示、感謝メッセージ、CTAを「次回公演をお楽しみに」に変更 |

```typescript
// src/lib/utils.ts
export type ConcertStatus = "upcoming" | "today" | "soon" | "ended";

export function getConcertStatus(concertDate: Date, endTime: Date): ConcertStatus {
  const now = new Date();
  const oneHourBefore = new Date(concertDate.getTime() - 60 * 60 * 1000);

  if (now > endTime) return "ended";
  if (now >= oneHourBefore) return "soon";
  if (now.toDateString() === concertDate.toDateString()) return "today";
  return "upcoming";
}
```

#### 6.4.2 ローディング状態

| 要素 | ローディング表示 |
|------|-----------------|
| 画像（Hero） | ブラーからクリアへのフェード（next/image blur placeholder） |
| 画像（その他） | グレーのスケルトン + パルスアニメーション |
| Google Maps | スケルトン + 「地図を読み込み中...」テキスト |
| カウントダウン | 「--:--:--」プレースホルダー |

```tsx
// スケルトンコンポーネント例
export function Skeleton({ className }: { className?: string }) {
  return (
    <div className={cn(
      "animate-pulse bg-gray-200 rounded",
      className
    )} />
  );
}
```

#### 6.4.3 エラー状態・フォールバック

| 要素 | エラー時の対応 |
|------|---------------|
| Google Maps読み込み失敗 | 静的な地図画像 + Google Mapsへの外部リンクボタン |
| 画像読み込み失敗 | プレースホルダー画像（ロゴまたはソリッドカラー） |
| 外部リンク（teket）無効 | メールでの問い合わせ案内を表示 |

```tsx
// Google Mapsフォールバック例
export function AccessMap() {
  const [mapError, setMapError] = useState(false);

  if (mapError) {
    return (
      <div className="bg-secondary-light rounded-lg p-6 text-center">
        <p className="mb-4">地図を表示できませんでした</p>
        <a
          href="https://maps.google.com/..."
          target="_blank"
          className="btn-primary"
        >
          Google Mapsで開く
        </a>
      </div>
    );
  }

  return <iframe ... onError={() => setMapError(true)} />;
}
```

### 6.5 固定CTAボタン仕様（モバイル）

#### 表示条件
- 画面幅 767px以下で表示
- ヒーローセクションを過ぎた後に表示（スクロール検知）
- 演奏会終了後は非表示

#### デザイン
```tsx
// src/components/ui/FixedCTA.tsx
export function FixedCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white/90 backdrop-blur-sm border-t md:hidden">
      <a
        href={LINKS.teket}
        target="_blank"
        className="block w-full py-4 text-center bg-primary text-white rounded-lg font-bold shadow-lg"
      >
        チケット予約（無料）
      </a>
    </div>
  );
}
```

#### セーフエリア対応（iOS）
```css
.fixed-cta {
  padding-bottom: calc(16px + env(safe-area-inset-bottom));
}
```

### 6.6 スクロールアニメーション仕様

チラシのデザイン要素をスクロールに連動して動的に表示する。

#### 6.6.1 使用ライブラリ
| ライブラリ | 用途 |
|-----------|------|
| Framer Motion | スクロール連動アニメーション |
| useScroll / useTransform | スクロール進行度の取得・変換 |

#### 6.6.2 装飾要素一覧（チラシより抽出）

| 要素名 | 説明 | 配置位置 |
|--------|------|---------|
| ドットパターン（曲線） | 曲線に沿って配置された円形ドット | 各セクション左右 |
| トランペットイラスト | 金管楽器のラインイラスト | ヒーロー右上 |
| ホルンイラスト | 金管楽器のラインイラスト | セクション装飾 |
| 曲線ライン | 流れるような曲線 | 背景装飾 |

#### 6.6.3 アニメーションパターン

**パターン1: 画面外からのスライドイン**
```
トリガー: 要素が画面内に入った時（Intersection）
動作: 画面外（左右）から中央に向かってスライド
持続時間: 0.6〜0.8秒
イージング: easeOut
```

| 要素 | 開始位置 | 終了位置 | 方向 |
|------|---------|---------|------|
| 左側ドットパターン | x: -200px, opacity: 0 | x: 0, opacity: 1 | 左→右 |
| 右側ドットパターン | x: +200px, opacity: 0 | x: 0, opacity: 1 | 右→左 |
| 楽器イラスト（左） | x: -150px, opacity: 0 | x: 0, opacity: 1 | 左→右 |
| 楽器イラスト（右） | x: +150px, opacity: 0 | x: 0, opacity: 1 | 右→左 |

**パターン2: スクロール連動パララックス**
```
トリガー: スクロール進行度（scrollYProgress）
動作: スクロール量に応じて位置・回転が変化
効果: 奥行き感、動的な印象
```

| 要素 | スクロール連動 | 変換内容 |
|------|--------------|---------|
| 背景ドット | scrollYProgress 0→1 | y: 0→-50px（上方向に微移動） |
| 楽器イラスト | scrollYProgress 0→1 | rotate: 0→5deg（微回転） |
| 曲線ライン | scrollYProgress 0→1 | scale: 0.95→1.05 |

**パターン3: セクション入場時フェードイン**
```
トリガー: whileInView（画面内に入った時）
動作: 下からフェードインしながら上昇
持続時間: 0.5秒
遅延: 子要素ごとに0.1秒ずつstagger
```

#### 6.6.4 セクション別アニメーション設計

| セクション | 装飾要素 | アニメーション |
|-----------|---------|---------------|
| Hero | トランペット・ホルン（右上） | 初期表示時に右からスライドイン |
| Hero | ドットパターン（左） | 初期表示時に左からスライドイン |
| About | 曲線ドット（両側） | スクロールでスライドイン |
| Program | 楽器シルエット（背景） | パララックス（遅延スクロール） |
| Access | ドットパターン | スライドイン |
| Ticket | 装飾ライン | フェードイン |

#### 6.6.5 実装コード例

```tsx
// src/components/decorations/ScrollRevealWrapper.tsx
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, ReactNode } from "react";

type Direction = "left" | "right" | "top" | "bottom";

interface Props {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  className?: string;
}

const offsets = {
  left: { x: -200, y: 0 },
  right: { x: 200, y: 0 },
  top: { x: 0, y: -100 },
  bottom: { x: 0, y: 100 },
};

export function ScrollRevealWrapper({
  children,
  direction = "left",
  delay = 0,
  className,
}: Props) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const offset = offsets[direction];
  const x = useTransform(scrollYProgress, [0, 1], [offset.x, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [offset.y, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ x, y, opacity }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
```

```tsx
// src/components/decorations/ParallaxDecoration.tsx
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, ReactNode } from "react";

interface Props {
  children: ReactNode;
  speed?: number; // 1 = 通常, < 1 = 遅い, > 1 = 速い
  className?: string;
}

export function ParallaxDecoration({
  children,
  speed = 0.5,
  className,
}: Props) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100 * speed]);

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}
```

```tsx
// 使用例: src/components/sections/Hero.tsx
import { ScrollRevealWrapper } from "../decorations/ScrollRevealWrapper";
import { DotPattern } from "../decorations/DotPattern";
import { TrumpetIllustration } from "../decorations/TrumpetIllustration";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* 左側ドットパターン */}
      <ScrollRevealWrapper
        direction="left"
        className="absolute left-0 top-1/4 -z-10"
      >
        <DotPattern className="text-primary opacity-60" />
      </ScrollRevealWrapper>

      {/* 右側楽器イラスト */}
      <ScrollRevealWrapper
        direction="right"
        delay={0.2}
        className="absolute right-0 top-0 -z-10"
      >
        <TrumpetIllustration className="w-96 text-primary opacity-40" />
      </ScrollRevealWrapper>

      {/* メインコンテンツ */}
      <div className="container mx-auto px-4 py-20">
        {/* ... */}
      </div>
    </section>
  );
}
```

#### 6.6.6 パフォーマンス考慮事項

| 項目 | 対策 |
|------|------|
| GPU最適化 | `transform`と`opacity`のみ使用（`will-change`自動適用） |
| モバイル対応 | 複雑なアニメーションは簡略化 or 無効化 |
| アクセシビリティ | `prefers-reduced-motion`対応 |
| 初期表示 | Hero以外はlazyロード |

```tsx
// prefers-reduced-motion対応
"use client";

import { useReducedMotion } from "framer-motion";

export function AnimatedComponent() {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <StaticVersion />;
  }

  return <AnimatedVersion />;
}
```

#### 6.6.7 マイクロインタラクション仕様

ユーザーアクションに対する即座のフィードバックを提供する小さなアニメーション（200-500ms）。

**対象要素と仕様**

| 要素 | トリガー | アニメーション | 持続時間 |
|------|---------|---------------|---------|
| CTAボタン（teket予約） | hover | scale: 1.05, y: -2px, shadow増加 | 200ms |
| CTAボタン（teket予約） | tap/click | scale: 0.98 | 100ms |
| ナビゲーションリンク | hover | 下線がスライドイン or 色変化 | 200ms |
| SNSアイコン | hover | scale: 1.1, 色変化 | 150ms |
| カード要素 | hover | y: -4px, shadow増加 | 250ms |
| 外部リンク | hover | アイコン微移動（→方向） | 200ms |

**実装コード例**

```tsx
// src/components/ui/Button.tsx
"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
}

export function Button({ children, href, variant = "primary", className }: Props) {
  const Component = href ? motion.a : motion.button;

  return (
    <Component
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      whileHover={{
        scale: 1.05,
        y: -2,
        boxShadow: "0 10px 20px rgba(0,0,0,0.15)"
      }}
      whileTap={{ scale: 0.98 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 17
      }}
      className={className}
    >
      {children}
    </Component>
  );
}
```

```tsx
// src/components/ui/NavLink.tsx
"use client";

import { motion } from "framer-motion";

interface Props {
  href: string;
  children: string;
}

export function NavLink({ href, children }: Props) {
  return (
    <motion.a
      href={href}
      className="relative py-2"
      whileHover="hover"
    >
      {children}
      <motion.span
        className="absolute bottom-0 left-0 h-0.5 bg-primary"
        initial={{ width: 0 }}
        variants={{
          hover: { width: "100%" }
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      />
    </motion.a>
  );
}
```

```tsx
// src/components/ui/SocialIcon.tsx
"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  href: string;
  icon: ReactNode;
  label: string;
}

export function SocialIcon({ href, icon, label }: Props) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      whileHover={{
        scale: 1.15,
        color: "#D4A84B"  // primary color
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.15 }}
    >
      {icon}
    </motion.a>
  );
}
```

#### 6.6.8 テキストアニメーション仕様

視覚的なインパクトを与えるテキストの動的表示。

**対象と仕様**

| 対象 | 効果 | トリガー | 詳細 |
|------|------|---------|------|
| Heroタイトル「第1回演奏会」 | 文字単位リビール | 初期表示 | 各文字が順次フェードイン＋上昇 |
| Heroサブタイトル | ワードリビール | 初期表示（タイトル後） | 単語単位でフェードイン |
| セクションタイトル | スライドアップ | スクロールで画面内 | 下から上にフェードイン |
| プログラム曲目 | スタガーリスト | スクロールで画面内 | リスト項目が順次表示 |

**実装コード例**

```tsx
// src/components/ui/TextReveal.tsx
"use client";

import { motion } from "framer-motion";

interface Props {
  text: string;
  className?: string;
  delay?: number;
  staggerDelay?: number;
}

// 文字単位のリビールアニメーション
export function CharReveal({
  text,
  className,
  delay = 0,
  staggerDelay = 0.03
}: Props) {
  const chars = text.split("");

  return (
    <motion.span
      initial="hidden"
      animate="visible"
      className={className}
    >
      {chars.map((char, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                delay: delay + i * staggerDelay,
                duration: 0.4,
                ease: [0.25, 0.1, 0.25, 1]
              }
            }
          }}
          style={{ display: "inline-block" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
}

// 単語単位のリビールアニメーション
export function WordReveal({
  text,
  className,
  delay = 0,
  staggerDelay = 0.08
}: Props) {
  const words = text.split(" ");

  return (
    <motion.span
      initial="hidden"
      animate="visible"
      className={className}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0, y: 15 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                delay: delay + i * staggerDelay,
                duration: 0.5,
                ease: "easeOut"
              }
            }
          }}
          style={{ display: "inline-block", marginRight: "0.25em" }}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}
```

```tsx
// src/components/ui/SectionTitle.tsx
"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export function SectionTitle({ children, className }: Props) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.h2>
  );
}
```

```tsx
// src/components/ui/StaggerList.tsx
"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode[];
  className?: string;
  staggerDelay?: number;
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export function StaggerList({ children, className, staggerDelay = 0.1 }: Props) {
  return (
    <motion.ul
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        ...containerVariants,
        visible: {
          transition: { staggerChildren: staggerDelay }
        }
      }}
      className={className}
    >
      {children.map((child, i) => (
        <motion.li key={i} variants={itemVariants}>
          {child}
        </motion.li>
      ))}
    </motion.ul>
  );
}
```

**Hero セクションでの使用例**

```tsx
// src/components/sections/Hero.tsx
import { CharReveal, WordReveal } from "../ui/TextReveal";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        {/* メインタイトル - 文字単位リビール */}
        <h1 className="text-5xl font-bold">
          <CharReveal text="第1回演奏会" delay={0.5} />
        </h1>

        {/* サブタイトル - 単語単位リビール */}
        <p className="text-xl mt-4">
          <WordReveal
            text="東大オケ現役金管セクションによるアンサンブルの調べ"
            delay={1.2}
          />
        </p>
      </div>
    </section>
  );
}
```

#### 6.6.9 カウントダウンタイマーアニメーション仕様

演奏会当日までのカウントダウン表示。数字の変化時にアニメーションを適用。

**仕様**

| 項目 | 内容 |
|------|------|
| 表示形式 | 日・時間・分・秒 |
| 更新間隔 | 1秒ごと |
| アニメーション | 数字変化時にフリップ/スライド |
| 終了後表示 | 「本日開催！」or 非表示 |

**実装コード例**

```tsx
// src/components/ui/Countdown.tsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CONCERT_INFO } from "@/lib/constants";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calculateTimeLeft(): TimeLeft | null {
  const difference = CONCERT_INFO.date.getTime() - new Date().getTime();

  if (difference <= 0) {
    return null;
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

interface CountdownUnitProps {
  value: number;
  label: string;
}

function CountdownUnit({ value, label }: CountdownUnitProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-16 h-16 bg-primary/10 rounded-lg overflow-hidden">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={value}
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 20
            }}
            className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-primary"
          >
            {value.toString().padStart(2, "0")}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="text-sm text-text-light mt-1">{label}</span>
    </div>
  );
}

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // SSR対策: マウント前は何も表示しない
  if (!mounted) {
    return <div className="h-20" />;
  }

  // 演奏会当日以降
  if (!timeLeft) {
    return (
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="text-2xl font-bold text-primary"
      >
        本日開催！
      </motion.div>
    );
  }

  return (
    <div className="flex gap-4 justify-center">
      <CountdownUnit value={timeLeft.days} label="日" />
      <CountdownUnit value={timeLeft.hours} label="時間" />
      <CountdownUnit value={timeLeft.minutes} label="分" />
      <CountdownUnit value={timeLeft.seconds} label="秒" />
    </div>
  );
}
```

**配置場所**

```tsx
// src/components/sections/Hero.tsx での使用
import { Countdown } from "../ui/Countdown";

export function Hero() {
  return (
    <section>
      {/* ... タイトル等 ... */}

      {/* カウントダウン */}
      <div className="mt-8">
        <p className="text-sm text-text-light mb-2">開演まであと</p>
        <Countdown />
      </div>

      {/* ... CTA等 ... */}
    </section>
  );
}
```

#### 6.6.10 ナビゲーション連動アニメーション仕様

スクロール位置に応じたナビゲーションの状態変化。

**仕様**

| 機能 | 詳細 |
|------|------|
| アクティブセクション表示 | 現在表示中のセクションをハイライト |
| ヘッダー背景変化 | スクロール時に背景色/ぼかし追加 |
| スムーススクロール | ナビクリックで対象セクションへ滑らかに移動 |

**実装コード例**

```tsx
// src/components/Header.tsx
"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const sections = [
  { id: "about", label: "概要" },
  { id: "program", label: "プログラム" },
  { id: "access", label: "アクセス" },
  { id: "ticket", label: "チケット" },
  { id: "contact", label: "お問い合わせ" },
];

export function Header() {
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  // スクロール量に応じてヘッダー背景を変更
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  // アクティブセクションの検出
  useEffect(() => {
    const observers = sections.map(({ id }) => {
      const element = document.getElementById(id);
      if (!element) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: "-50% 0px -50% 0px" }
      );

      observer.observe(element);
      return { observer, element };
    });

    return () => {
      observers.forEach((obs) => obs?.observer.disconnect());
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300"
      animate={{
        backgroundColor: isScrolled
          ? "rgba(255, 255, 255, 0.9)"
          : "transparent",
        backdropFilter: isScrolled ? "blur(10px)" : "none",
      }}
    >
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* ロゴ */}
        <a href="#" className="font-bold text-xl">
          UTO BRASS
        </a>

        {/* ナビゲーションリンク */}
        <ul className="hidden md:flex gap-6">
          {sections.map(({ id, label }) => (
            <li key={id}>
              <button
                onClick={() => scrollToSection(id)}
                className="relative py-2"
              >
                {label}
                {/* アクティブインジケーター */}
                {activeSection === id && (
                  <motion.span
                    layoutId="activeSection"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}
```

#### 6.6.11 参考リソース

本アニメーション仕様は以下のWebデザインアワード受賞サイト・技術リソースを参考に設計。

**受賞サイトギャラリー**
- [Awwwards Animation Collection](https://www.awwwards.com/websites/animation/)
- [CSS Design Awards 2024 Winners](https://www.cssdesignawards.com/blog/2024-website-of-the-year-winners/414/)
- [Made With GSAP](https://madewithgsap.com/)

**技術ドキュメント**
- [Framer Motion Documentation](https://motion.dev/)
- [GSAP ScrollTrigger](https://gsap.com/scroll/)
- [MDN View Transitions API](https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API)

**2024-2025年トレンド**
- マイクロインタラクション: 200-500msの即座のフィードバック
- スクロールドリブンアニメーション: CSS `scroll-timeline` のブラウザ対応拡大
- テキストアニメーション: SplitText / キネティックタイポグラフィ
- View Transitions API: ページ遷移のネイティブサポート（85%+ブラウザ対応）

---

## 7. 技術要件（Next.js）

### 7.1 技術スタック

| カテゴリ | 技術 | バージョン | 必須 |
|----------|------|-----------|------|
| フレームワーク | Next.js (App Router) | 15.x | ✅ |
| 言語 | TypeScript | 5.x | ✅ |
| スタイリング | Tailwind CSS | 3.x | ✅ |
| アニメーション | Framer Motion | 11.x | ✅ |
| UIコンポーネント | shadcn/ui | - | 任意 |
| アイコン | Lucide React | - | 推奨 |
| ホスティング | Vercel | - | ✅ |
| パッケージマネージャ | pnpm（推奨）/ npm | - | ✅ |

### 7.2 プロジェクト構成

```
uto-brass-1st/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # ルートレイアウト
│   │   ├── page.tsx            # トップページ（LP本体）
│   │   ├── globals.css         # グローバルスタイル
│   │   └── favicon.ico
│   ├── components/
│   │   ├── sections/           # ページセクション
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Program.tsx
│   │   │   ├── Access.tsx
│   │   │   ├── Ticket.tsx
│   │   │   └── Contact.tsx
│   │   ├── decorations/        # 装飾・アニメーション
│   │   │   ├── ScrollRevealWrapper.tsx
│   │   │   ├── ParallaxDecoration.tsx
│   │   │   ├── DotPattern.tsx
│   │   │   ├── TrumpetIllustration.tsx
│   │   │   └── HornIllustration.tsx
│   │   ├── ui/                 # 共通UIコンポーネント
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   └── SectionTitle.tsx
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── lib/
│   │   ├── constants.ts        # 定数（演奏会情報等）
│   │   └── utils.ts            # ユーティリティ関数
│   └── types/
│       └── index.ts            # 型定義
├── public/
│   ├── images/
│   │   ├── logo.svg
│   │   ├── hero-bg.webp
│   │   ├── trumpet.svg         # 楽器イラストSVG
│   │   ├── horn.svg
│   │   └── ogp.png
│   └── fonts/                  # カスタムフォント（任意）
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

### 7.3 主要コンポーネント設計

#### ページ構成（`src/app/page.tsx`）
```tsx
export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Program />
      <Access />
      <Ticket />
      <Contact />
      <Footer />
    </main>
  );
}
```

#### コンポーネント一覧

| コンポーネント | 役割 | 主な機能 |
|---------------|------|---------|
| `Header` | 固定ヘッダー | ナビゲーション、スムーススクロール |
| `Hero` | ファーストビュー | メインビジュアル、CTA、カウントダウン |
| `About` | 演奏会概要 | 日時・会場・料金情報 |
| `Program` | プログラム | 曲目リスト、作曲者・独奏者情報 |
| `Access` | アクセス | Google Maps、交通案内 |
| `Ticket` | チケット | teket予約ボタン（CTA） |
| `Contact` | お問い合わせ | メール、SNSリンク |
| `Footer` | フッター | コピーライト、SNSアイコン |

### 7.4 データ管理

演奏会情報は定数ファイルで一元管理：

```typescript
// src/lib/constants.ts
export const CONCERT_INFO = {
  name: "UTO BRASS 第1回演奏会",
  subtitle: "東大オケ現役金管セクションによるアンサンブルの調べ",
  date: new Date("2026-03-24T19:00:00+09:00"),
  doors: "18:30",
  start: "19:00",
  end: "21:00",
  venue: {
    name: "四谷区民ホール",
    address: "〒160-0014 東京都新宿区内藤町87番地 四谷区民センター9階",
    tel: "03-3351-2118",
    officialUrl: "https://shinjuku.hall-info.jp/yotsuya/",
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.828!2d139.71095!3d35.68667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c9d2d8b8e8d%3A0x8b8b8b8b8b8b8b8b!2z5Zub6LCN5Yy65rCR44Ob44O844Or!5e0!3m2!1sja!2sjp",
    access: {
      train: "東京メトロ丸ノ内線「新宿御苑前」駅 2番出口（大木戸門）より徒歩5分",
      bus: "都バス 品97系統 新宿駅西口〜品川車庫「新宿一丁目」下車",
    },
  },
  price: "入場無料",
  seat: "全席自由",
} as const;

export const PROGRAM = [
  {
    composer: "P.デュカス",
    composerEn: "Paul Dukas",
    title: "「ラ・ペリ」のファンファーレ",
    titleEn: "Fanfare from La Péri",
    ensemble: null,
  },
  {
    composer: "J.フェルヘルスト",
    composerEn: "Johan Ferhelst",
    title: "テューバ二重奏、トロンボーン・テューバ二重奏",
    titleEn: null,
    ensemble: "二重奏",
  },
  {
    composer: "J.ホーナー",
    composerEn: "James Horner",
    title: "タイタニック・ファンタジー",
    titleEn: "Titanic Fantasy",
    ensemble: "ホルン12重奏",
  },
  {
    composer: "スコットランド民謡",
    composerEn: "Scottish Folk Song",
    title: "スコットランドの釣鐘草",
    titleEn: "The Bluebells of Scotland",
    ensemble: "独奏: 芳賀大夢",
  },
  {
    composer: "C.フランク",
    composerEn: "César Franck",
    title: "パニス・アンジェリクス",
    titleEn: "Panis Angelicus",
    ensemble: "金管5重奏",
  },
  {
    composer: "G.リチャーズ",
    composerEn: "Goff Richards",
    title: "高貴なる葡萄酒を讃えて",
    titleEn: "A Toast to the Noble Grape",
    ensemble: "金管10重奏",
  },
] as const;

export const LINKS = {
  teket: "https://teket.jp/16767/62281",
  twitter: "https://x.com/utobrass",
  instagram: "https://instagram.com/utobrass",
  email: "utobrass.management@gmail.com",
} as const;

export const ABOUT = {
  description: "UTO Brassは、東京大学音楽部管弦楽団（University of Tokyo Orchestra）の金管セクション有志により、2025年に結成されたブラスアンサンブルです。主に現役団員で構成され、学園祭以外にも金管アンサンブルの演奏機会を設けて、金管楽器の魅力をより多くの方にお届けしたいという思いから活動を始めました。",
} as const;
```

### 7.5 メタデータ・SEO設定

```typescript
// src/app/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UTO BRASS 第1回演奏会 | 東京大学音楽部管弦楽団金管セクション",
  description: "2026年3月24日（火）四谷区民ホールにて開催。入場無料。",
  keywords: ["UTO BRASS", "東京大学", "金管アンサンブル", "演奏会"],
  openGraph: {
    title: "UTO BRASS 第1回演奏会",
    description: "2026年3月24日（火）四谷区民ホールにて開催。入場無料。",
    url: "https://brass.ut-orch.com",
    siteName: "UTO BRASS",
    images: [
      {
        url: "/images/ogp.png",
        width: 1200,
        height: 630,
        alt: "UTO BRASS 第1回演奏会",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "UTO BRASS 第1回演奏会",
    description: "2026年3月24日（火）四谷区民ホールにて開催。入場無料。",
    images: ["/images/ogp.png"],
  },
};
```

### 7.6 スタイリング設計

#### Tailwind CSS設定
```typescript
// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#D4A84B",  // ゴールド
          dark: "#B8923F",
          light: "#E4C170",
        },
        secondary: {
          DEFAULT: "#B8D4E8",  // ライトブルー
          dark: "#8FBDD6",
          light: "#D6E8F2",
        },
        text: {
          DEFAULT: "#333333",
          light: "#666666",
        },
      },
      fontFamily: {
        sans: ["var(--font-noto-sans-jp)", "sans-serif"],
        display: ["var(--font-montserrat)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
```

#### フォント設定（Next.js Font Optimization）
```typescript
// src/app/layout.tsx
import { Noto_Sans_JP, Montserrat } from "next/font/google";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});
```

### 7.7 パフォーマンス要件

| 指標 | 目標値 | 対策 |
|------|--------|------|
| Lighthouse Performance | 90以上 | 画像最適化、フォント最適化 |
| First Contentful Paint | 1.5秒以下 | SSG、コード分割 |
| Largest Contentful Paint | 2.5秒以下 | next/image使用 |
| Cumulative Layout Shift | 0.1以下 | 画像サイズ指定 |

#### 画像最適化
```tsx
// next/imageを使用
import Image from "next/image";

<Image
  src="/images/hero-bg.webp"
  alt="UTO BRASS"
  width={1920}
  height={1080}
  priority  // ファーストビューの画像
  quality={85}
/>
```

### 7.8 デプロイ設定

#### Vercel設定
```json
// vercel.json（必要に応じて）
{
  "buildCommand": "pnpm build",
  "outputDirectory": ".next",
  "framework": "nextjs"
}
```

#### 静的エクスポート（オプション）
```typescript
// next.config.ts
const nextConfig = {
  output: "export",  // 完全静的サイトとして出力
  images: {
    unoptimized: true,  // 静的エクスポート時は必要
  },
};
```

### 7.9 開発環境セットアップ

```bash
# プロジェクト作成
npx create-next-app@latest uto-brass-1st --typescript --tailwind --app --src-dir

# 追加パッケージ（任意）
pnpm add framer-motion        # アニメーション
pnpm add lucide-react         # アイコン
pnpm add @radix-ui/react-*    # shadcn/ui用

# 開発サーバー起動
pnpm dev

# ビルド
pnpm build

# プレビュー
pnpm start
```

### 7.10 推奨VSCode拡張機能

| 拡張機能 | 用途 |
|----------|------|
| ES7+ React/Redux/React-Native snippets | Reactスニペット |
| Tailwind CSS IntelliSense | Tailwindの補完 |
| Prettier | コードフォーマット |
| ESLint | リンティング |

---

## 8. 必要素材リスト

### 8.1 画像素材
| 素材 | 状態 | ファイルパス | サイズ | 備考 |
|------|------|-------------|--------|------|
| チラシ画像 | ✅ 配置済 | `public/images/flyer.png` | 2.9MB | ページ内表示用 |
| ホルンイラスト | ✅ 配置済 | `public/images/horn.png` | 221KB | スクロールアニメーション用 |
| トランペットイラスト | ✅ 配置済 | `public/images/trumpet.png` | 235KB | スクロールアニメーション用 |
| UTO BRASSロゴ | ✅ 配置済 | `public/images/utobrass-logo.png` | 68KB | 背景透過済み |
| 東京大学音楽部管弦楽団ロゴ | ✅ 配置済 | `public/images/ut-orch_logo.png` | 17KB | - |
| favicon.ico | ✅ 作成済 | `public/favicon.ico` | 5KB | 16x16, 32x32 |
| Apple Touch Icon | ✅ 作成済 | `public/apple-touch-icon.png` | 14KB | 180x180 |
| PWAアイコン (192) | ✅ 作成済 | `public/icon-192.png` | 15KB | 192x192 |
| PWAアイコン (512) | ✅ 作成済 | `public/icon-512.png` | 72KB | 512x512 |
| 会場アクセスマップ | ✅ 不要 | - | - | Google Maps埋め込みで代替 |
| 出演者写真 | 要確認 | - | - | 任意 |
| OGP用画像 | ✅ 作成済 | `public/images/ogp.png` | 314KB | 1200x630px、チラシ上部から切り出し |

#### 画像素材の詳細

**チラシ画像 (`flyer.png`)**
- 用途: ページ内でのチラシ表示、ダウンロード提供
- 表示箇所: About/概要セクション、またはフッター付近

**ホルンイラスト (`horn.png`)**
- サイズ: 1587 x 2245 px
- 用途: 右上装飾、スクロールアニメーションで右から出現
- 特徴: ライトブルー（#B8D4E8）の背景シェイプ、ゴールド（#D4A84B）のアウトライン

**トランペットイラスト (`trumpet.png`)**
- サイズ: 1587 x 2245 px
- 用途: 左側装飾、スクロールアニメーションで左から出現
- 特徴: ゴールド（#F5DEB3）の背景シェイプ、ゴールド（#D4A84B）のアウトライン

### 8.2 テキスト素材
| 素材 | 状態 | 備考 |
|------|------|------|
| UTO BRASS紹介文 | 要作成 | 団体の説明 |
| 曲目解説 | 任意 | 各曲の簡単な紹介 |
| 独奏者プロフィール | 要取得 | 芳賀大夢氏 |
| 全曲目リスト | 要確認 | 「ほか」の詳細 |

### 8.3 外部サービス情報
| 項目 | 状態 | 備考 |
|------|------|------|
| teketイベントURL | 要取得 | チケット予約リンク |
| X (Twitter) URL | 要取得 | 公式アカウント |
| Instagram URL | 要取得 | 公式アカウント |
| Google Maps埋め込みコード | 要作成 | 四谷区民ホール |

---

## 9. 確認事項・TODO

### 9.1 要確認事項
- [x] 全曲目リスト（「ほか」の詳細） → teketより取得済
- [x] teketイベントページURL → https://teket.jp/16767/62281
- [x] X (Twitter) 公式アカウントURL → https://x.com/utobrass
- [x] Instagram 公式アカウントURL → https://instagram.com/utobrass
- [x] 四谷区民ホールの正確な住所 → 〒160-0014 東京都新宿区内藤町87番地
- [x] チラシ画像素材 → ホルン・トランペットイラスト取得済
- [x] ロゴデータ → UTO BRASS、東大オケロゴ取得済
- [x] favicon.ico → ロゴから生成済
- [x] OGP画像 → チラシ上部から切り出し（1200x630px）
- [ ] 独奏者（芳賀大夢氏）のプロフィール

### 9.2 追加検討事項
- [ ] ドメイン名の決定
- [ ] ホスティング先の決定
- [ ] 公開予定日
- [ ] 更新・運用担当者

---

## 10. スケジュール（参考）

| フェーズ | 内容 |
|----------|------|
| Phase 1 | 要件確定・素材収集 |
| Phase 2 | デザインカンプ作成 |
| Phase 3 | コーディング |
| Phase 4 | テスト・修正 |
| Phase 5 | 公開・運用開始 |

---

## 改訂履歴

| 日付 | バージョン | 変更内容 |
|------|-----------|---------|
| 2025-12-31 | 1.0 | 初版作成（チラシ画像より情報抽出） |
| 2025-12-31 | 1.1 | Next.js技術要件を追加 |
| 2025-12-31 | 1.2 | スクロールアニメーション仕様（6.4）を追加、Framer Motion必須化 |
| 2025-12-31 | 1.3 | teketページ情報を反映（曲目詳細、副題、終演時間） |
| 2025-12-31 | 1.4 | 団体紹介文を正式版に更新 |
| 2025-12-31 | 1.5 | SNSアカウント情報を追加（@utobrass） |
| 2025-12-31 | 1.6 | 四谷区民ホール住所・アクセス・Google Maps情報追加、画像素材追加 |
| 2025-12-31 | 1.7 | 画像素材をpublicに配置（flyer.png, horn.png, trumpet.png） |
| 2025-12-31 | 1.8 | ロゴ画像追加、favicon.ico・各種アイコン生成 |
| 2025-12-31 | 1.9 | OGP画像をチラシから作成（1200x630px） |
| 2025-12-31 | 2.0 | デザイン/UI/UXレビュー反映: レスポンシブ詳細化、スペーシング・タイポグラフィ階層、コンポーネントスタイル、状態管理、固定CTA、エラー/ローディング状態を追加 |
| 2025-12-31 | 2.1 | アニメーション仕様拡充（6.6.7-6.6.11）: マイクロインタラクション、テキストアニメーション、カウントダウン、ナビゲーション連動、参考リソース追加 |

---

*本ドキュメントはチラシ画像およびteketページ（https://teket.jp/16767/62281）から情報を抽出して作成しています。*
