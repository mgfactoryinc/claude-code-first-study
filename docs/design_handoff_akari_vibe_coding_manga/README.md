# Handoff: あかりさんの バイブコーディング転職記（AIコーディング入門漫画）

## Overview

AI コーディング（Visual Studio Code + Claude Code for VS Code）を初学者に紹介するための、**5 分間プレゼン用の日本風アニメ漫画資料**。

**主人公「あかりさん」**（30代・小柄・明るい）は、昼は会社員、夜は都内のバーで副業として接客をしている。ある夜、常連客の**「バイブコーディングおじさん」**が iPhone に話しかけてコードを書いている姿を見て興味を持ち、VSCode と Claude Code の使い方を教わる。家に帰ってセットアップし、Claude（カニのマスコットで擬人化）と対話しながら .md / HTML / SVG で資料を作成、その作品を武器に IT エンジニアへ転職成功する ── という 12 話のストーリー。

**用途**: AIエージェント勉強会での 5 分プレゼン。
**フォーマット**: 見開き 12 話の漫画本 UI（HTML 単体、フルスクリーン表示前提、**左→右めくり**）。

---

## About the Design Files

このバンドルに含まれる HTML / CSS / JS / 画像は **HTML で作られたデザインリファレンス（プロトタイプ）** です。見た目と挙動の意図を示すもので、そのままプロダクション実装として使うことを想定していません。

タスクは、**この HTML デザインを、対象コードベースの既存環境（React / Vue / Next.js / SwiftUI / Flutter / ネイティブ Web など）で再構築すること**。既存のパターン、コンポーネント、デザインシステム、フォント読み込み方針に沿って組み直してください。既存環境がない場合は、プロジェクトに最適なフレームワークを選択して実装してください。

なお、本作は「HTML のまま配布・プレゼン投影」しても十分成立します。単発の勉強会資料として使うだけであれば、`index.html` をそのままフルスクリーンで開けば OK です。

---

## Fidelity

**High-fidelity (hifi)**。以下が確定しています。
- キャラクター設定画（AI 生成、リファレンス保管）
- 全 12 話分の見開きイラスト（AI 生成、キャラクター一貫性キープ、吹き出しは意図的に画像内に描かず HTML でオーバーレイ）
- タイポグラフィ（Google Fonts: Zen Maru Gothic / Reggae One / Kosugi Maru）
- カラーパレット（下記 Design Tokens 参照）
- 吹き出しの位置・しっぽの向き・話者別スタイル
- ナレーション帯、用語ハイライト、ページ番号（柱）、3D ページターン

開発者は、この HTML と同じ見た目・体験を、対象コードベースの既存 UI ライブラリで**ピクセル忠実に**再現してください。

---

## Characters / Setting

### あかりさん（主人公）
- 30代日本人女性、小柄、明るい性格、大きな瞳、ショートボブ（ブラウン系）、頬にほんのり赤み
- **昼**：一般企業の会社員（ソフトピンクのブラウス＋ベージュのカーディガン＋膝丈スカート）
- **夜**：バーで副業の接客（白の長袖シャツ＋黒の蝶ネクタイ＋黒ベスト＋黒エプロン＋黒ペンシルスカート＋小さなパール型ピアス）
- **家（学習中）**：クリーム色のパーカー

### バイブコーディングおじさん（相棒）
- 40代後半、少しぽっちゃり、丸眼鏡、無精髭、チェックシャツ、ジーンズ、黒髪くしゃっと
- あかりさんが働くバーの常連。iPhone に話しかけて開発する「バイブコーディング」の実践者
- ラスト（第12話）で、あかりさんの新しい職場の同僚として再登場

### Claude マスコット（AI擬人化）
- カニのデフォルメキャラ（オレンジレッドの台形シェル、小さな黒い点目、短い脚と小さなハサミ）
- 全編を通じて Claude AI を象徴する視覚シンボル

### 舞台
- **バーカウンター**（居酒屋ではない）：シックな大人のバー、磨かれたダークウッドのカウンター、背面のウイスキー・ジン棚、暖色ペンダントランプ。赤提灯は使用しない。
- **オフィス**：暗い夜、蛍光灯、書類の山
- **家のデスク**：暖色スタンドライト、観葉植物、小さな本棚

---

## Screens / Views

### 全体構成

- **見開き 0（表紙）** — 赤系のカバー。左ページにバーでの二人カット、右ページにタイトル。
- **見開き 1〜12（本編）** — 各見開き 1 枚の 16:9 AI 生成イラストを **左右半分に分割して 2 ページに表示**。左ページ下部に「第 N 話 / タイトル / ナレーション」の帯。各見開きに 2〜4 個の吹き出しをオーバーレイ配置。
- **見開き 13（裏表紙）** — 左ページ「まとめ 4 ステップ」、右ページに祝勝カットと制作クレジット。

### 話ごとのあらすじ

原稿は `script.js` の `window.MANGA_SCRIPT` に配列としてまとまっています。各要素は `{ id, title, narration, bubbles: [...] }`。吹き出しは `{ side: 'L'|'R', pos: {top, left}, tail: 'bl'|'br'|'tl'|'tr'|'none', speaker, text }`。話者は `akari` / `ojisan` / `narration` / `ojisan-narration`。

- **第 1 話 プロローグ ── もう限界かも** — 昼オフィスで残業 ↔ 夜バーで副業、二重生活の対比
- **第 2 話 夜のバーカウンターで** — バーテンダーとして働くあかり、常連おじさんがスマホをカタカタ
- **第 3 話 バイブコーディングおじさん、あらわる** — 接客中に「それって何ですか？」→ 「バイブコーディングですよ〜」
- **第 4 話 覚えて① Visual Studio Code** — おじさんが iPhone 画面で VSCode を紹介
- **第 5 話 覚えて② Claude と Code** — Claude カニマスコット初登場、iPhone から召喚
- **第 6 話 覚えて③ .md と CLAUDE.md** — 封筒・フォルダ・書類のメタファーで説明、カニがフォルダから顔を出す
- **第 7 話 帰宅、いざインストール** — 家のデスクで VSCode をダウンロード＆日本語化
- **第 8 話 拡張機能と、作業フォルダ** — Claude Code for VS Code を拡張機能でインストール、作業フォルダ作成
- **第 9 話 はじめまして、クロード** — Code に話しかけて感動の初対話
- **第 10 話 資料を作ってみる（.md → HTML → SVG）** — Claude と一緒に勉強会資料を作成
- **第 11 話 そして、面接、内定** — ポートフォリオを武器に面接、内定祝いをカニと一緒に
- **第 12 話 エピローグ ── そして、初出社** — 新職場に出社、あのおじさんが同僚に

### 共通レイアウト（本編見開き）

- ステージ：ビューポート全体を暗色（`radial-gradient(#3a2c22 → #0f0a08)`）で塗り、中央に **1500×900px の本ラッパ** を配置。JS で `transform: scale()` により自動フィット（左右余白 40px、下部 60px を確保）。
- 本：`display: flex` の 2 カラム。左右のページは `flex: 1 1 50%`、`background: var(--paper)`。中央 14px は「綴じ」のグラデーション影を絶対配置で被せる。
- ページ角丸：左ページ `6 2 2 6`、右ページ `2 6 6 2`。内側シャドウで綴じ側の陰影を表現。
- 紙質感：ページ疑似要素 `::after` に `radial-gradient` + 2px おきの微細ストライプを `multiply` で重ねる。
- アート：各ページに絶対配置の `<div class="art L|R">`。`background-image` に同じ見開き画像を指定し、`background-size: 200% 100%` + `background-position: left|right center` で **左右半分だけ**見せる。
- ページ番号（柱）：左ページ左下 / 右ページ右下に `Kosugi Maru` monospace、`#8a7a66`、12px。
- ナレーション帯：左ページ下端に全幅、上→下方向のダーク gradient。タイトルは `Reggae One`、17px、`#ffd08c`。本文 15px、`#fff8ea`。

### 吹き出し（バブル）

**すべて HTML でオーバーレイ**。画像内には吹き出しは描かれていない（後編集・翻訳・カスタマイズが容易なため）。

- ベース：白背景 (`#fff`)、`border: 2.5px solid #2a231d`、`border-radius: 26px`、内側パディング `12px 16px`、`font-size: 17px`、`font-weight: 600`、`white-space: pre-line`、右下方向に `box-shadow: 3px 4px 0 rgba(0,0,0,.12)`。
- 話者別バリアント：
  - `.akari` — 背景 `#fff6f7` / 枠 `#8a3a3a`
  - `.ojisan` — 背景 `#f4f0e2` / 枠 `#3a4a2a`
  - `.narration`（地の文） — 背景 `#fff6dc` / 枠 dashed `#8b6a2a` / 角丸 8px / 文字色 `#523a10`
  - `.ojisan-narration`（おじさんの補足） — 背景 `#eef4f8` / 枠 dashed `#3a5566` / 角丸 8px / 14px / 文字色 `#233948`
- しっぽ：CSS の三角トリック（透明ボーダー + 一辺のみ塗り）。`tail-bl` / `tail-br` / `tail-tl` / `tail-tr` の 4 方向。`::before` が黒枠、`::after` が塗り。塗り色は話者バリアントごとに `border-*-color` を上書き。
- 用語ハイライト：`<span class="term">` — `linear-gradient(transparent 55%, #ffe57a 55% 92%, transparent 92%)` の下線マーカー、`font-weight: 800`。対象語は `script.js` 側の `terms[]` 配列に定義（下記 Interactions 参照）。

### 表紙（見開き 0）

- 両ページとも赤ベースの覆い：`linear-gradient(160deg, #b53a2b, #8f2418, #6a1710)`、文字色 `#fff8ea`。
- 左ページ：中央に 70%（最大 520px）の正方形イラスト（第 5 話の右半分 `assets/pages/spread_05.png` を `background-size: 200% 100%` / `background-position: right center` で切り出し）。金色枠 `border: 3px solid #ffd08c`、`border-radius: 12px`、下に大きめの黒シャドウ。下部にキャプション。
- 右ページ：上から順に
  1. バッジ「A COMIC PRIMER」（ピル、金色枠）
  2. タイトル `Reggae One`、58px、`line-height: 1.18`、`#fff2c8`、`text-shadow: 3px 3px 0 rgba(0,0,0,.35)`、`white-space: nowrap`（`<br>` で 3 行）
  3. サブタイトル「〜 VSCode × Claude Code 入門 〜」20px、`#ffe6b8`、レター Space `.15em`
  4. バッジ「全12話 / 5分プレゼン」

### 裏表紙（見開き 13）

- 左ページ：バッジ「おわりに」→ タイトル「今夜、あなたも／はじめてみませんか？」36px → 4 ステップまとめ（① VSCode → ② 日本語化 + Claude Code for VS Code → ③ 作業フォルダに CLAUDE.md → ④ Code に話しかけるだけ）。
- 右ページ：第 11 話のイラスト（右半分）+ 制作クレジット。

### ナビゲーション UI

- 進む／戻るボタン（円形 56px、`rgba(255,255,255,.08)`、`backdrop-filter: blur(6px)`、白 24px 矢印）を画面左右に固定配置。
- **左→右読み**：戻るボタン `◀` は画面左、進むボタン `▶` は画面右（西洋式スライド標準）。
- 下部インジケータ：`第 N 話 / 全 12 話`（表紙は「表紙 / 全 12 話」、裏表紙は「完 / 全 12 話」）。ピル、黒半透明、`Kosugi Maru` 12px。
- 左上ヘルプ：「← →キー / クリックでめくる（左→右読み）」。

---

## Interactions & Behavior

### めくり（左→右読み）

- **キーボード**：`ArrowRight` / `Space` / `PageDown` → **次へ進む**。`ArrowLeft` / `PageUp` → **戻る**。`Home` → 表紙、`End` → 裏表紙。
- **クリック**：`#stage` 内の click を判定。`clientX > window.innerWidth / 2` なら **次へ進む**、それ以外なら **戻る**。ナビボタンは伝播をせず単独で機能。
- **スワイプ**（タッチ）：`touchstart` で `changedTouches[0].clientX` を記録、`touchend` で 40px 以上の変位を判定。左スワイプ（`dx < 0`）で次へ、右スワイプで戻る。

### めくりアニメ（3D ページターン）

紙 1 枚が 180° 回る、実際の本と同じ構成。1 回のめくりで 4 レイヤーを使う。

| レイヤー | 役割 |
|---|---|
| `#pageL` / `#pageR` | 下地。めくり開始時点で**すでに「めくった先」**を描画しておく（持ち上がった紙の下から現れる） |
| `#ghost` | まだ見せたくない側を**旧ページ**で覆う半面レイヤー（進む＝左半分、戻る＝右半分） |
| `#flip > #leaf` | めくれる紙。`transform-style: preserve-3d`。`perspective: 2300px` は親の `#flip` 側に置く |
| `.face.front` / `.face.back` | 紙の表＝いまのページ／裏＝めくった先の反対側ページ。`backface-visibility: hidden` |

- **進む**：`#flip.from-right`（右半分・`transform-origin: left center`）に `leafToLeft` = `rotateY(0 → -180deg)`。
- **戻る**：`#flip.from-left`（左半分・`transform-origin: right center`）に `leafToRight` = `rotateY(0 → 180deg)`。
- 50% 地点で `rotateX(-5deg)` を足し、紙が手前に傾きながら立ち上がるようにする。イージングは `animation-timing-function` をキーフレーム内に書いて前半加速／後半減速。
- `perspective-origin` は本の中心からわずかにずらす（`from-right` は 40%、`from-left` は 60%）。中心と一致させると 90° で紙が線に潰れて見えなくなるため。
- **陰影**：各面の `.shade`（`shadeFront` 0.04→0.85 / `shadeBack` 0.85→0）。立ち上がるほど暗く、着地するほど明るい。
- **落ち影**：`.cast.near`（現れる側）と `.cast.far`（覆われる側）を綴じ側から減衰するグラデーションで走らせる。
- 長さは `--flip-ms: 900ms`。JS 側の `FLIP_MS` と揃えること（ずれると後片付けのタイミングが合わない）。
- `#book` には `filter` を掛けない（3D が潰れる）。落ち影は `#book-shadow` の別レイヤーに逃がしてある。
- 小口（`.edge`）：本の左右外側で、読み進み具合に応じて幅 6→26px を相互に増減させる。
- `prefers-reduced-motion: reduce` では `#flip` / `#ghost` を非表示にし、瞬時に切り替える。

### 用語自動ハイライト

`script.js` 内の `termHighlight(text)` が下記の用語配列（長い順にソートして衝突回避）を `<span class="term">` で置換する。追加が必要な場合はこの配列を編集するだけで全編に反映される。

```js
const terms = [
  'Visual Studio Code','VSCode','Claude Code for VS Code','Claude Code',
  'Claude','クロード','Code','コード',
  'CLAUDE.md','.md','SVG','HTML','拡張機能','作業フォルダ','エクスプローラー',
  'バイブコーディング','日本語化'
];
```

### 状態の永続化

- 現在ページを `localStorage['akari-manga-cursor']` に整数（0〜13）で保存。ページ遷移のたびに保存し、初回ロード時に復元。

### 自動スケール

- `window` リサイズ時に、1500×900 の本ラッパを `scale(min((W-80)/1500, (H-140)/900))` で `transform` する。

---

## State Management

グローバル状態はページカーソル 1 つのみ：

- `cur: number` — 0〜13。0 = 表紙、1〜12 = 第 N 話、13 = 裏表紙。
- 遷移：`next()` / `prev()` で ±1、範囲外は無視。
- `render(cur)` はカーソルに応じて `renderCover()` / `renderSpread(cur-1)` / `renderBack()` のいずれかを呼び、DOM を差し替える。

データフェッチはなし。すべて `MANGA_SCRIPT` と `assets/pages/*.png` を静的に参照。

React 実装例：`useState<number>` でカーソル管理、`useEffect` で localStorage 同期、`useMemo` で現在見開きの派生を計算、コンポーネントは `<Book>`（枠）→ `<Page side="L|R">` → `<Art>` + `<Caption>` + `<Bubble>[]` の階層。

---

## Design Tokens

### Colors

| Token          | Hex        | 用途 |
|---|---|---|
| `--ink`        | `#2a231d`  | 本文・枠線 |
| `--paper`      | `#fbf5ea`  | ページ地色 |
| `--paper-shade`| `#efe6d2`  | ページ陰影 |
| `--spine`      | `#c9a678`  | 綴じ（未使用予備） |
| `--accent`     | `#e26a4a`  | 朱赤アクセント |
| `--accent-2`   | `#f5b04c`  | 山吹アクセント |
| `--peach`      | `#f7c6a8`  | Claude マスコット色系 |
| `--pink`       | `#f2b6b6`  | あかりアクセント |
| `--deep`       | `#1c1712`  | ステージ暗色 |
| バブル akari 背景 | `#fff6f7` | |
| バブル akari 枠   | `#8a3a3a` | |
| バブル ojisan 背景 | `#f4f0e2` | |
| バブル ojisan 枠  | `#3a4a2a` | |
| バブル narration 背景 | `#fff6dc` / 枠 `#8b6a2a` (dashed) | |
| バブル ojisan-narration 背景 | `#eef4f8` / 枠 `#3a5566` (dashed) | |
| 用語ハイライト | `#ffe57a` | 55%〜92% の位置に横一文字マーカー |
| 表紙赤          | `#b53a2b` → `#8f2418` → `#6a1710`（160deg） | |
| 表紙金          | `#ffd08c`, `#fff2c8`, `#ffe6b8`, `#fff8ea` | |
| Claude カニ色   | terracotta orange-red（`#d97757` 相当） | |

### Typography

Google Fonts を CDN からロード：`Zen Maru Gothic (500/700/900)` / `Reggae One` / `Kosugi Maru`。

| Token         | 値 |
|---|---|
| `--font-jp`    | `"Zen Maru Gothic", "Kosugi Maru", "Hiragino Maru Gothic ProN", "Yu Gothic", system-ui, sans-serif` |
| `--font-title` | `"Reggae One", "Zen Maru Gothic", serif` |
| 吹き出し本文    | 17px / weight 600 / line-height 1.35 / letter-spacing .02em |
| ojisan-narration | 14px |
| ナレーション帯 本文 | 15px / line-height 1.5 |
| ナレーション帯 タイトル | 17px / Reggae One / letter-spacing .05em |
| ページ番号（柱） | 12px / Kosugi Maru / letter-spacing .15em |
| ヘルプ・インジ  | 12px / Kosugi Maru / letter-spacing .1〜.15em |
| 表紙タイトル    | 58px / Reggae One / line-height 1.18 / letter-spacing .02em / white-space: nowrap |
| 表紙サブ        | 20px / letter-spacing .15em |

### Spacing / Radius / Shadow

- ステージ余白：左右 40px、下 60px（ナビ・インジ分）。
- 本サイズ：1500 × 900px。
- ページ角丸：外側 6px / 綴じ側 2px。
- 吹き出し角丸：26px（会話）/ 8px（ナレーション系）。
- 吹き出しシャドウ：`3px 4px 0 rgba(0,0,0,.12)`（オフセット硬影）。
- 本全体シャドウ：`drop-shadow(0 30px 40px rgba(0,0,0,.55))`。
- 綴じ影：中央 14px 幅に左右対称 `linear-gradient`。
- ページ内側シャドウ（綴じ側）：`inset ±12px 0 22px -12px rgba(0,0,0,.35)`。
- ナビボタン：56 × 56px 円、`backdrop-filter: blur(6px)`、`border: 1px solid rgba(255,255,255,.25)`。

---

## Assets

すべてプロジェクト内に同梱済み（バイナリのため handoff フォルダにはコピー元パスを列挙）。

### キャラクター設定画（AI 生成、参照専用）

- `assets/refs/akari_sheet.png` — 主人公「あかりさん」通常服（会社員／家）3 面設定
- `assets/refs/akari_bartender_sheet.png` — あかりさんのバーテンダー衣装 3 面設定（副業時）
- `assets/refs/ojisan_sheet.png` — 「バイブコーディングおじさん」の 3 面設定
- `assets/refs/claude_crab_sheet.png` — Claude カニマスコットの 3 面設定

### 本編見開きイラスト（AI 生成、16:9、約 1376×768）

`assets/pages/spread_01.png` 〜 `assets/pages/spread_12.png`（12 枚）。それぞれ左右 2 パネル構成、**吹き出しは意図的に描かず** HTML 側で日本語セリフを重ねる仕様。

各画像の内容：
- `spread_01`：昼オフィス残業 ↔ 夜バーで副業（二重生活の対比）
- `spread_02`：バーカウンター、あかり接客中、おじさん来店してスマホ
- `spread_03`：iPhone で「バイブコーディング」を説明
- `spread_04`：iPhone に VSCode の UI が映る
- `spread_05`：iPhone から Claude カニマスコット出現
- `spread_06`：iPhone で .md / CLAUDE.md の説明（封筒・フォルダ）
- `spread_07`：家で VSCode ダウンロード＆日本語化
- `spread_08`：拡張機能インストール、作業フォルダ作成
- `spread_09`：Claude と初対話、感動
- `spread_10`：.md → HTML → SVG で資料作成
- `spread_11`：面接プレゼン ↔ 内定祝い（カニと一緒）
- `spread_12`：新職場でおじさんが同僚として再登場

### 生成モデルと注意

- 画像モデル：`nano-banana-2`（Gemini Nano Banana 2）
- キャラクター一貫性を保つため、本編生成時に `image_urls` にキャラ設定画を毎回渡している
- 各画像のプロンプトは「絶対に文字・吹き出しを描かない」旨を明記（すべてのセリフは HTML 側で載せる前提）

### フォント

Google Fonts CDN。ネットワーク制限のあるコードベースでは、WOFF2 をローカルにセルフホストしてください：
- Zen Maru Gothic 500 / 700 / 900
- Reggae One 400
- Kosugi Maru 400

---

## Files

デザインリファレンス本体（`design_handoff_akari_vibe_coding_manga/design/` にコピー）：

- `design/index.html` — 本のシェル、スタイル、3D ページターンのロジック
- `design/manual.html` — 付録の実践マニュアル（単体の縦スクロールページ。漫画とは別レイアウトだが、カラートークンとフォントは共通。実画面のスクリーンショットは `/images/` を参照する）
- `design/script.js` — 12 見開き分のセリフ・タイトル・ナレーション・吹き出し座標（`window.MANGA_SCRIPT`）
- `design/storyboard.md` — ストーリーボード（現行版と同期済み。ただしセリフの正は script.js）

原本パス（プロジェクト内）：
- `/index.html`
- `/script.js`
- `/docs/storyboard.md`
- `/assets/pages/spread_01.png` 〜 `spread_12.png`
- `/assets/refs/akari_sheet.png`, `akari_bartender_sheet.png`, `ojisan_sheet.png`, `claude_crab_sheet.png`

---

## 実装上の注意

- **左→右読み**（西洋式スライド標準）。右キー・右クリック・左スワイプで進む。
- **セリフ座標**（`bubbles[].pos`）は AI 生成イラストの構図に合わせて手動調整済み。イラストを差し替えた場合は再調整が必要。
- **画像内に吹き出しは描かれていない**（あえて）。セリフ・翻訳・カスタマイズはすべて `script.js` の編集で完結する。
- **用語ハイライト**は `script.js` の `terms[]` を編集するだけで全ページに反映（順序＝優先度、長い語を先に）。
- **プレゼン尺**：1 見開き ≒ 25 秒想定（表紙・裏表紙含めて約 5 分）。
- **場所設定**：おじさんが登場する 2〜6 話は「バー（バーテンダー衣装のあかり）」、7〜11 話は「あかりの家」、12 話は「新職場のオフィス」。世界観の混同に注意。
- **iPhone vs PC**：バーでのおじさんは **iPhone に話しかけて開発**（PC は開かない）。家に帰ってからあかりさんが PC（VSCode）で作業する。
- **フォールバック**：フォントロード前でも読める `system-ui` を fallback チェーンに含めている。
- **アクセシビリティ**：ナビボタンは `aria-label` 付き。キーボードナビ完備。
