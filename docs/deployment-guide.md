# UTO BRASS 特設サイト デプロイガイド

## 概要

| 項目 | 内容 |
|------|------|
| 本番URL | https://brass.ut-orch.com |
| ホスティング | Vercel |
| ドメイン管理 | さくらインターネット |
| メインサイト | ut-orch.com（さくらレンタルサーバ） |

---

## 1. 前提条件

- [ ] さくらインターネットのアカウント（ut-orch.comドメイン管理）
- [ ] Vercelアカウント（GitHub連携済み）
- [ ] GitHubリポジトリ（uto-brass-1st）

---

## 2. サブドメイン設定（さくらインターネット）

### 2.1 さくらのコントロールパネルにログイン

1. https://secure.sakura.ad.jp/ にアクセス
2. 会員メニューにログイン

### 2.2 ドメインメニューへ移動

1. 左メニューから **「契約中のドメイン一覧」** をクリック
2. **ut-orch.com** の **「ドメインメニュー」** をクリック

### 2.3 DNSレコード設定

1. **「ゾーン編集」** をクリック
2. **「レコード追加」** をクリック
3. 以下の内容で追加：

#### CNAMEレコード（推奨）

| 項目 | 値 |
|------|-----|
| エントリ名 | `brass` |
| タイプ | `CNAME` |
| データ | `cname.vercel-dns.com` |
| TTL | `3600`（デフォルト） |

> **注意**: CNAMEはサブドメインにのみ使用可能。ルートドメインには使えません。

#### 設定画面イメージ
```
エントリ名: brass
タイプ: CNAME
データ: cname.vercel-dns.com
TTL: 3600
```

4. **「保存」** をクリック

### 2.4 DNS反映確認

DNSの反映には最大48時間かかる場合がありますが、通常は数分〜数時間で反映されます。

**確認コマンド（ターミナル）：**
```bash
# CNAMEレコードの確認
dig brass.ut-orch.com CNAME

# または nslookup
nslookup brass.ut-orch.com
```

**期待される結果：**
```
brass.ut-orch.com.  3600  IN  CNAME  cname.vercel-dns.com.
```

---

## 3. Vercelプロジェクト設定

### 3.1 GitHubリポジトリの準備

```bash
# プロジェクトディレクトリに移動
cd /Users/uchidahiroto/ut-orch/uto-brass-1st

# Gitリポジトリを初期化（まだの場合）
git init

# GitHubにリポジトリを作成してプッシュ
gh repo create ut-orch/uto-brass-1st --private --source=. --push
```

### 3.2 Vercelでプロジェクトをインポート

1. https://vercel.com にログイン
2. **「Add New...」** → **「Project」** をクリック
3. **「Import Git Repository」** から `uto-brass-1st` を選択
4. 設定を確認：

| 設定項目 | 値 |
|----------|-----|
| Framework Preset | Next.js |
| Root Directory | `./` |
| Build Command | `pnpm build` または `npm run build` |
| Output Directory | `.next` |
| Install Command | `pnpm install` または `npm install` |

5. **「Deploy」** をクリック

### 3.3 初回デプロイ確認

デプロイが完了すると、以下のようなURLが発行されます：
```
https://uto-brass-1st-xxxxx.vercel.app
```

このURLでサイトが正常に表示されることを確認してください。

---

## 4. カスタムドメイン設定（Vercel）

### 4.1 ドメイン追加

1. Vercelダッシュボードでプロジェクトを開く
2. **「Settings」** タブをクリック
3. 左メニューから **「Domains」** を選択
4. 入力欄に `brass.ut-orch.com` を入力
5. **「Add」** をクリック

### 4.2 DNS設定の確認

Vercelが自動的にDNS設定を検証します。

**ステータス表示：**
| ステータス | 意味 |
|-----------|------|
| ⏳ Pending | DNS反映待ち |
| ✅ Valid | 設定完了 |
| ❌ Invalid | DNS設定に問題あり |

### 4.3 SSL証明書

Vercelは自動的にSSL証明書（Let's Encrypt）を発行します。
- 通常、ドメイン検証完了後数分で発行
- HTTPSは自動的に有効化
- HTTP → HTTPSのリダイレクトも自動設定

### 4.4 設定完了の確認

```bash
# ブラウザでアクセス
open https://brass.ut-orch.com

# curlでHTTPSとリダイレクトを確認
curl -I https://brass.ut-orch.com
curl -I http://brass.ut-orch.com  # HTTPSにリダイレクトされるか確認
```

---

## 5. 継続的デプロイ（CI/CD）

### 5.1 自動デプロイ

Vercelは以下のタイミングで自動デプロイします：

| ブランチ | デプロイ先 | URL |
|---------|-----------|-----|
| `main` | Production | https://brass.ut-orch.com |
| その他 | Preview | https://uto-brass-1st-xxx-xxx.vercel.app |

### 5.2 プレビューデプロイ

Pull Requestを作成すると、自動的にプレビュー環境がデプロイされます。
- PRにプレビューURLがコメントされる
- レビュー用の一時的な環境

### 5.3 手動デプロイ（必要な場合）

```bash
# Vercel CLIをインストール
pnpm add -g vercel

# ログイン
vercel login

# 手動デプロイ（プレビュー）
vercel

# 本番デプロイ
vercel --prod
```

---

## 6. 環境変数設定（必要な場合）

### 6.1 Vercelダッシュボードで設定

1. プロジェクト → **「Settings」** → **「Environment Variables」**
2. 必要な変数を追加：

| 変数名 | 値 | 環境 |
|--------|-----|------|
| `NEXT_PUBLIC_SITE_URL` | `https://brass.ut-orch.com` | Production |
| `NEXT_PUBLIC_GA_ID` | `G-XXXXXXXXXX` | Production（任意） |

### 6.2 ローカル開発用

```bash
# .env.local を作成
cat > .env.local << 'EOF'
NEXT_PUBLIC_SITE_URL=http://localhost:3000
EOF
```

---

## 7. 要件定義書の更新

デプロイ設定完了後、以下を要件定義書に反映：

```markdown
### 本番環境情報
| 項目 | 値 |
|------|-----|
| 本番URL | https://brass.ut-orch.com |
| ホスティング | Vercel |
| リポジトリ | github.com/ut-orch/uto-brass-1st |
| 自動デプロイ | mainブランチへのpushで自動デプロイ |
```

---

## 8. トラブルシューティング

### 8.1 DNS設定が反映されない

**原因**: DNS伝播に時間がかかっている

**対処**:
1. 最大48時間待つ
2. DNSキャッシュをクリア：
   ```bash
   # macOS
   sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder
   ```
3. 別のDNSサーバで確認：
   ```bash
   dig @8.8.8.8 brass.ut-orch.com CNAME
   ```

### 8.2 SSL証明書が発行されない

**原因**: DNS設定が正しくない、またはVercelの検証が失敗

**対処**:
1. Vercelダッシュボードでドメインを削除して再追加
2. DNS設定を再確認
3. 数時間待ってから再試行

### 8.3 404エラーが表示される

**原因**: ビルドエラー、または設定ミス

**対処**:
1. Vercelダッシュボードで最新デプロイのログを確認
2. ローカルでビルドが成功するか確認：
   ```bash
   pnpm build
   ```
3. `next.config.ts` の設定を確認

### 8.4 プレビューURLは動くが本番URLが動かない

**原因**: 環境変数の設定漏れ、またはドメイン設定の問題

**対処**:
1. Production環境の環境変数を確認
2. ドメイン設定でProductionが選択されているか確認

---

## 9. チェックリスト

### デプロイ前
- [ ] ローカルで `pnpm build` が成功する
- [ ] ローカルで `pnpm start` でプレビューできる
- [ ] 画像・フォントが正しく表示される
- [ ] リンクが正しく機能する

### DNS設定後
- [ ] `dig brass.ut-orch.com CNAME` でVercelのCNAMEが返る
- [ ] Vercelダッシュボードでドメインが「Valid」になっている

### デプロイ後
- [ ] https://brass.ut-orch.com にアクセスできる
- [ ] HTTPからHTTPSへリダイレクトされる
- [ ] OGP画像が正しく表示される（SNSデバッガーで確認）
- [ ] モバイル表示が正常

---

## 10. 関連リンク

- [Vercel Documentation](https://vercel.com/docs)
- [Vercel Custom Domains](https://vercel.com/docs/projects/domains)
- [さくらインターネット ゾーン編集](https://help.sakura.ad.jp/domain/2154/)
- [Next.js Deployment](https://nextjs.org/docs/deployment)

---

## 改訂履歴

| 日付 | バージョン | 変更内容 |
|------|-----------|---------|
| 2025-12-31 | 1.0 | 初版作成 |
