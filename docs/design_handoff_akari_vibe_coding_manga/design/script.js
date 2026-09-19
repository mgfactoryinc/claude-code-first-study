// あかりさんのバイブコーディング転職記 — セリフ原稿
// 各見開きは { title, narration, bubbles: [{side, pos, tail, text, speaker}] }
// side: 'L' or 'R' (左ページか右ページか) ※画像上での位置
// pos: {top, left} in %  (親コンテナに対する位置。left は画像内のパネル基準)
// tail: 'bl'|'br'|'tl'|'tr'|'none'  吹き出しのしっぽの向き
// speaker: 'akari' | 'ojisan' | 'narration'

window.MANGA_SCRIPT = [
  // 1
  {
    id: 1,
    title: "プロローグ ── もう限界かも",
    narration: "都内のオフィス、深夜0時。書類の山に埋もれる、あかり30歳。",
    bubbles: [
      { side: 'L', pos: { top: '6%', left: '14%' }, tail: 'br', speaker: 'akari',
        text: 'はぁ〜〜…\nまた残業…' },
      { side: 'R', pos: { top: '5%', left: '56%' }, tail: 'bl', speaker: 'akari',
        text: '夜はバーで\n副業…' },
    ],
  },
  // 2
  {
    id: 2,
    title: "夜のバーカウンターで",
    narration: "副業で週に三日、このバーで接客をしています。",
    bubbles: [
      { side: 'L', pos: { top: '6%', left: '54%' }, tail: 'bl', speaker: 'akari',
        text: 'いらっしゃいませ…\nあら今夜は\nちょっと閑候？' },
      { side: 'R', pos: { top: '8%', left: '4%' }, tail: 'br', speaker: 'akari',
        text: '（あの常連さん…\nスマホに何を\n話してるんだろ？）' },
    ],
  },
  // 3
  {
    id: 3,
    title: "バイブコーディングおじさん、あらわる",
    narration: "気になって、接客中に思わず聞いてしまった。",
    bubbles: [
      { side: 'L', pos: { top: '3%', left: '52%' }, tail: 'br', speaker: 'akari',
        text: 'あの、それって\n何ですか？' },
      { side: 'L', pos: { top: '13%', left: '4%' }, tail: 'br', speaker: 'ojisan',
        text: '「バイブ\nコーディング」\nですよ〜' },
      { side: 'R', pos: { top: '8%', left: '56%' }, tail: 'br', speaker: 'akari',
        text: 'バイブ…？\nｺｰﾃﾞｨﾝｸﾞ…？' },
      { side: 'R', pos: { top: '8%', left: '4%' }, tail: 'br', speaker: 'ojisan',
        text: 'AIに話しかけて\nコード書いてもらう\nんスよ〜' },
    ],
  },
  // 4
  {
    id: 4,
    title: "覚えて① Visual Studio Code",
    narration: "まず、道具の名前を教えてもらいます。",
    bubbles: [
      { side: 'L', pos: { top: '4%', left: '4%' }, tail: 'br', speaker: 'ojisan',
        text: 'これが\n「Visual Studio Code」\n通称 VSCode！' },
      { side: 'L', pos: { top: '72%', left: '4%' }, tail: 'none', speaker: 'ojisan-narration',
        text: '無料。Windows も Mac も入る\nプログラミング用のメモ帳、\nみたいなヤツです' },
      { side: 'R', pos: { top: '2%', left: '3%' }, tail: 'br', speaker: 'akari',
        text: 'これが\nエディタ…\n覚えた！' },
    ],
  },
  // 5
  {
    id: 5,
    title: "覚えて② Claude と Code",
    narration: "そして、この物語の相棒たちの名前。",
    bubbles: [
      { side: 'L', pos: { top: '6%', left: '6%' }, tail: 'br', speaker: 'ojisan',
        text: '相棒はこの子、\n「Claude（クロード）」\nAIの名前ね' },
      { side: 'R', pos: { top: '4%', left: '58%' }, tail: 'br', speaker: 'ojisan',
        text: 'そして\n「Code（コード）」\nがお願い窓口！' },
      { side: 'R', pos: { top: '58%', left: '8%' }, tail: 'tr', speaker: 'akari',
        text: 'クロードくん…♡\nよろしくねっ' },
    ],
  },
  // 6
  {
    id: 6,
    title: "覚えて③ .md と CLAUDE.md",
    narration: "最後に、AIへの「お手紙」の話。",
    bubbles: [
      { side: 'L', pos: { top: '6%', left: '6%' }, tail: 'br', speaker: 'ojisan',
        text: '「.md」\nって拡張子ね。\nただのメモ帳と思って' },
      { side: 'R', pos: { top: '6%', left: '6%' }, tail: 'br', speaker: 'ojisan',
        text: '作業フォルダには\n毎回「CLAUDE.md」を\n置くのがオススメ〜' },
      { side: 'R', pos: { top: '60%', left: '52%' }, tail: 'tl', speaker: 'ojisan-narration',
        text: 'AIくんへのお願い\nレターです📮' },
    ],
  },
  // 7
  {
    id: 7,
    title: "帰宅、いざインストール",
    narration: "その夜、家に帰ってさっそく…！",
    bubbles: [
      { side: 'L', pos: { top: '3%', left: '6%' }, tail: 'br', speaker: 'akari',
        text: 'よ〜し、\nやるぞ〜〜っ！' },
      { side: 'R', pos: { top: '4%', left: '3%' }, tail: 'none', speaker: 'narration',
        text: '① VSCode をダウンロード\n② インストール\n③ 日本語化パックを入れる' },
    ],
  },
  // 8
  {
    id: 8,
    title: "拡張機能と、作業フォルダ",
    narration: "次にやるのは、たった2つ。",
    bubbles: [
      { side: 'L', pos: { top: '3%', left: '3%' }, tail: 'none', speaker: 'narration',
        text: '④ 拡張機能で\n「Claude Code for VS Code」\nをインストール' },
      { side: 'R', pos: { top: '2%', left: '4%' }, tail: 'none', speaker: 'narration',
        text: '⑤ エクスプローラーで\n作業フォルダを作成\n⑥ CLAUDE.md を新規作成' },
      { side: 'R', pos: { top: '79%', left: '2%' }, tail: 'tr', speaker: 'akari',
        text: '準備\nできた…！' },
    ],
  },
  // 9
  {
    id: 9,
    title: "はじめまして、クロード",
    narration: "ドキドキしながら、Code に話しかけてみた。",
    bubbles: [
      { side: 'L', pos: { top: '3%', left: '42%' }, tail: 'br', speaker: 'akari',
        text: 'は、\nはじめまして…' },
      { side: 'L', pos: { top: '47%', left: '4%' }, tail: 'none', speaker: 'narration',
        text: 'Claude：\nはじめまして、\nあかりさん 🦀' },
      { side: 'R', pos: { top: '4%', left: '2%' }, tail: 'br', speaker: 'akari',
        text: '返事きた〜〜っ！！\n(嬉泣)' },
    ],
  },
  // 10
  {
    id: 10,
    title: "資料を作ってみる",
    narration: "勉強会の資料を、Claude と一緒に作ってみることに。",
    bubbles: [
      { side: 'L', pos: { top: '2%', left: '4%' }, tail: 'br', speaker: 'akari',
        text: 'まず「.md」で\n中身を書いて…' },
      { side: 'L', pos: { top: '60%', left: '54%' }, tail: 'tl', speaker: 'akari',
        text: '「HTMLで見やすく\nして」ってお願い！' },
      { side: 'R', pos: { top: '4%', left: '6%' }, tail: 'br', speaker: 'akari',
        text: '図は「SVG」で\n作ってもらった〜\nかわいい♡' },
    ],
  },
  // 11
  {
    id: 11,
    title: "そして、面接、内定",
    narration: "作ったポートフォリオを手に、面接へ。",
    bubbles: [
      { side: 'L', pos: { top: '10%', left: '8%' }, tail: 'br', speaker: 'akari',
        text: 'これを、\n全部AIと一緒に\n作りました！' },
      { side: 'R', pos: { top: '6%', left: '6%' }, tail: 'br', speaker: 'akari',
        text: '内定っ！！\nやったーーー！！' },
    ],
  },
  // 12
  {
    id: 12,
    title: "エピローグ ── そして、初出社",
    narration: "ITエンジニアとして、新しい毎日がはじまる。",
    bubbles: [
      { side: 'L', pos: { top: '6%', left: '8%' }, tail: 'br', speaker: 'akari',
        text: '今日から\nよろしくおねがい\nしますっ' },
      { side: 'R', pos: { top: '6%', left: '6%' }, tail: 'br', speaker: 'akari',
        text: 'あ、あの時の\nおじさん…！？' },
      { side: 'R', pos: { top: '4%', left: '54%' }, tail: 'bl', speaker: 'ojisan',
        text: 'ようこそ〜\n待ってたよ〜' },
      { side: 'R', pos: { top: '74%', left: '20%' }, tail: 'none', speaker: 'narration',
        text: 'あなたも今夜、\n「バイブコーディング」\nはじめませんか？ 🦀✨' },
    ],
  },
];
