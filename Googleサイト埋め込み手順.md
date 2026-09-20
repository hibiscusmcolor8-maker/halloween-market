# Googleサイトへの埋め込み手順

## 使用ファイル

- `google-sites-embed.html`
- 同じフォルダの `google-sites-embed.css`
- `assets` フォルダ内の画像

## 重要

`C:\Users\User\Documents\ライフスタイル\google-sites-embed.html` のようなローカルファイルは、閲覧者のGoogleサイトから読み込めません。
先にHTML・CSS・assetsフォルダを、GitHub PagesなどのWeb公開先へアップロードし、公開URLを作成してください。

## Googleサイトでの設定

1. Googleサイトを編集する
2. 右側メニューの「挿入」から「埋め込む」を選ぶ
3. 「URL」で公開した `google-sites-embed.html` のURLを入力する
4. プレビューを確認して挿入する
5. 埋め込み枠の高さを、まずは `5200px` 前後に設定する
6. Googleサイトを公開する

## 埋め込みコードを使う場合

Googleサイトの「埋め込みコード」に、公開URLを次の形で指定する。

```html
<iframe
  src="https://公開URL/google-sites-embed.html"
  title="くらしのハロウィンマルシェ2026"
  style="width:100%;height:5200px;border:0;"
  loading="lazy">
</iframe>
```

`https://公開URL/` は実際に公開したURLへ置き換える。
