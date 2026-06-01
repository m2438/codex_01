# BIダッシュボードを開く

> **重要：GitHub上で `OPEN_WEBSITE.html` や `index.html` をクリックすると、仕様上コード画面が表示されます。**
> ダッシュボードをWEBサイトとして開くには、GitHub Pages の公開URLを使ってください。

## 1クリックで開くリンク

GitHub Pages で公開済みの場合は、次の形式のURLで開けます。

```text
https://<GitHubユーザーまたは組織>.github.io/<リポジトリ名>/
```

このURLのトップページから、以下2つのダッシュボードを選べます。

- 大手不動産5社 営業・協業ターゲット分析
- 日産自動車 CRE営業ターゲット分析

## GitHub Pages のURLがわからない場合

1. GitHubのリポジトリ画面を開きます。
2. 画面右側、または上部メニューの **Deployments** / **Environments** / **github-pages** を探します。
3. `github-pages` の **View deployment** を押します。
4. 開いたページがダッシュボードのWEBサイトです。

## なぜHTMLをクリックしても開けないのか

GitHubのファイル一覧で `.html` をクリックすると、セキュリティ上の理由でHTMLは実行されず、コードとして表示されます。
そのため、`OPEN_WEBSITE.html` や `index.html` は **GitHub Pagesで公開されたURLから開く** 必要があります。

## ローカルPCにダウンロードして見る場合

- Windows: `open_website.bat` をダブルクリック
- macOS / Linux: `./open_website.sh` を実行

ただし、GitHub画面上では `.bat` は実行できません。PCにリポジトリをダウンロードした場合だけ使えます。
