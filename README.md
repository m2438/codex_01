# BIダッシュボードを開く方法

このリポジトリには、ブラウザで見られる静的なBIダッシュボードを収録しています。

## まずここを開いてください

GitHub上では、次のMarkdownページを開いてください。

```text
OPEN_WEBSITE.md
```

`OPEN_WEBSITE.md` には、GitHub Pages の公開URLの探し方と、HTMLをクリックしてもコード画面になる理由をまとめています。

## 重要：GitHub上でHTMLやBATは直接実行できません

GitHubのファイル一覧で `OPEN_WEBSITE.html`、`index.html`、`open_website.bat` をクリックしても、WEBサイトとして実行されずコード表示になります。これはGitHubの仕様です。

WEBサイトとして見る場合は、GitHub Pages の公開URLを開いてください。

```text
https://<GitHubユーザーまたは組織>.github.io/<リポジトリ名>/
```

## GitHub Pagesで公開する場合

このリポジトリには GitHub Pages 用のワークフローを追加しています。
GitHub上でActionsが有効であれば、`Deploy static dashboard to GitHub Pages` を実行すると、公開URLが生成されます。

公開URLがわからない場合は、リポジトリの **Deployments** または **Environments > github-pages** から **View deployment** を押してください。

## PCにダウンロードした場合の開き方

### いちばん簡単：ファイルをクリックして開く

1. リポジトリ直下の `OPEN_WEBSITE.html` を開きます。
2. 自動で `index.html` に移動し、ダッシュボードポータルが表示されます。
3. ポータルから「大手不動産5社」または「日産自動車CRE」のダッシュボードを選択します。

### Windowsの場合

`open_website.bat` をダブルクリックしてください。

### macOS / Linuxの場合

ターミナルで次を実行してください。

```bash
./open_website.sh
```

Pythonが入っている場合は、ローカルHTTPサーバーを起動してブラウザで開きます。

## 収録ダッシュボード

- `research/major_real_estate_5_2026/dashboard/index.html`：大手不動産5社の営業・協業ターゲット分析
- `research/nissan_cre_2026/dashboard/index.html`：日産自動車CRE営業ターゲット分析
