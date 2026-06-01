# BIダッシュボードを開く方法

このリポジトリには、ブラウザで見られる静的なBIダッシュボードを収録しています。
GitHubに詳しくない場合は、以下のどれか一つを実行してください。

## いちばん簡単：ファイルをクリックして開く

1. リポジトリ直下の `OPEN_WEBSITE.html` を開きます。
2. 自動で `index.html` に移動し、ダッシュボードポータルが表示されます。
3. ポータルから「大手不動産5社」または「日産自動車CRE」のダッシュボードを選択します。

## Windowsの場合

`open_website.bat` をダブルクリックしてください。

## macOS / Linuxの場合

ターミナルで次を実行してください。

```bash
./open_website.sh
```

Pythonが入っている場合は、ローカルHTTPサーバーを起動してブラウザで開きます。

## GitHub Pagesで公開する場合

このリポジトリには GitHub Pages 用のワークフローを追加しています。
GitHub上でActionsが有効であれば、`Deploy static dashboard to GitHub Pages` を実行すると、以下の形式のURLで開けます。

```text
https://<GitHubユーザーまたは組織>.github.io/<リポジトリ名>/
```

## 収録ダッシュボード

- `research/major_real_estate_5_2026/dashboard/index.html`：大手不動産5社の営業・協業ターゲット分析
- `research/nissan_cre_2026/dashboard/index.html`：日産自動車CRE営業ターゲット分析
