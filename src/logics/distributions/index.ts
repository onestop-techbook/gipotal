import { FetchedData } from "@/logics";

/** 頒布物 */
export type Distribution = {
  /** カテゴリ（ソフトスキルなど）*/
  category: string;
  /** 画像の存在する場所（S3など) */
  imagePath: string;
  /** 本のタイトル */
  title: string;
  /** 初めて頒布した同人イベント */
  eventName?: string;
  /** 頒布開始日 */
  publishedAt: Date;
  /**  */
  path: string;
  /** ページ数 */
  numberOfPages: number;
  /** 価格 */
  price: number;
  /** タグ */
  tags: string[];
  /** 本の説明 */
  content: string;
};

const createData1 = (): Distribution => {
  const content = `[技術書典6新刊]勉強会のすべてがわかる本。一般参加から、LT登壇、主催、その後のコミュニティ運営まで。ドキドキわくわくの初参加から、登壇者としての一歩、主催も楽しいよ、いろいろ経験してきた著者20人が送る勉強会ノウハウの決定版。

・勉強会に参加しよう
　-勉強会って何？-初めての勉強会-
-大規模カンファレンスに参加しよう
　-懇親会での会話術
　-学生でもオープンな勉強会に参加しよう
　-勉強会に参加して何をするのか
・勉強会に登壇しよう
　-登壇内容の組み立て方
　-資料作成方針とテクニック
　-LT資料を雑に生やす方法
・勉強会を主催してみよう
　-小規模勉強会を主催してみよう
　-スポンサー付き勉強会を開催する
　-社内勉強会を開催しよう
　-立ち消えた勉強会
　-勉強会はコミュニティになる
　-行動規範
・こんな勉強会があるよ
　-主催者から紹介
　-参加したら面白かった
　-参加・主催したら世界が広がった`;
  const item = {
    category: "ソフトスキル",
    imagePath: "/images/circle_item.png",
    title: "ワンストップ勉強会",
    eventName: "技術書典6",
    publishedAt: new Date(),
    path: "",
    numberOfPages: 122,
    price: 1_000,
    tags: ["勉強会", "成長", "勉強会運営", "勉強会参加"],
    content,
  };
  return item;
};

const createData2 = (): Distribution[] => {
  return [
    {
      category: "ソフトウェア",
      imagePath: "/images/circle_item.png",
      title: "Elixirへのおさそい　Let's try Nx",
      eventName: "技術書典11",
      publishedAt: new Date("2021-07-10T01:01:01+09:00"),
      path: "",
      numberOfPages: 100,
      price: 500,
      tags: [
        "技術書典",
        "技術書典11",
        "Elixir",
        "入門",
        "機械学習",
        "ライブラリ",
      ],
      content:
        "[技術書典11新刊]あのElixirにもついにテンソルライブラリが！\n\n本書は、動的関数型言語Elixir（エリクサー）で作られたテンソル計算用ライブラリ『Nx』（エヌエックス）を紹介する一冊となっています。\n目次：-\n* 第1章：Nx ってなんだろう\n* 第2章：はじめての Nx\n* 第3章 :  Nx の関数を紹介\n\n\n近い将来には「機械学習」と「Nx」の組み合わせが、目に入る機会も多くなっていくと考えています。",
    },
    {
      category: "ソフトスキル",
      imagePath: "/images/circle_item.png",
      title: "[合同誌]Podcastをはじめましょう",
      eventName: "2019技書博",
      publishedAt: new Date("2019-07-27T02:02:02+09:00"),
      path: "",
      numberOfPages: 148,
      price: 1500,
      tags: [
        "Podcast",
        "入門",
        "ライブラリ",
        "テック系",
        "話し方／伝え方",
        "集客",
      ],
      content:
        "Podcastってなに？からPodcastを配信するノウハウの全てがここに集結。総勢20名のPodcastの配信者／購読者が執筆に関わっています。\n\n・Podcastを聴いてみよう。Tech系、日常系、趣味系、その他。あなたに合うPodcastが必ずあるはず。\n・Podcastを配信してみよう。始めるためのノウハウ、テーマ決め、収録、編集、配信についての一連の手順を網羅しました。\nよりよい配信のために。収録や編集のコツ、マイクテクニック、ゲストを呼ぶコツ\n・配信を続けよう。ネタ出しの方法。オフラインイベント・コミュニティについて、継続するためのいろいろなテクニック。\n\nあなたの人生の１ページにPodcastを是非！",
    },
    {
      category: "ソフトウェア",
      imagePath: "/images/circle_item.png",
      title: "もっとx2実践!サーバーサイドでKotlinだよ",
      eventName: "応援祭り",
      publishedAt: new Date("2020-02-29T03:03:03+09:00"),
      path: "",
      numberOfPages: 100,
      price: 1500,
      tags: [
        "技術書典",
        "技術書典8",
        "応援祭",
        "サーバサイド",
        "Kotlin",
        "Spring boot",
      ],
      content:
        "■どん人向け?\n本著は前著「実践!サーバーサイドでKotlinを入門だよ」を読んでいる前提としています。\n・具体的には Kotlin + Spring Boot + JPA + Thymeleaf + データベース(h2 Database など)でデータ作成、検索、更新、削除(いわゆる CRUD 処理)が分かる、やったことがある、開発環境などもすでにある、あるいは自分で揃えられる程度の方を対象読者としています。\n\nそのため、サーバーサイド Kotlin とはSpring ?Boot とは?えっそもそも Kotlinってなに?読み方もわからない...という人はぜひ前著である「実践!サーバーサイドでKotlinを入門だよ」をお読みになることをお勧めします。\n\n - https://fortegp05.booth.pm/items/1560389 \n\n■どんな内容?\n今回はもっとx2実践!ということで、コンシューマー向けの Web サービスでは必ずと言ってよいほど使われるユーザー登録、認証とアプリケーションを公開するの 2 点に関して実践してみた結果を解説しました。\nユーザー登録と認証はその性質上、ユーザーの個人情報を預かる可能性や外部に公開したくない情報を預かる可能性が高くなります。 そのためセキュリティや脆弱性に一層気を使う必要がある部分となります。\n今回は本番運用できるレベルと自信を持っていえるわけではありませんが、実装例と動作するコードを公開しています。\n\n今回はデプロイの手順をWindows、Mac の両方で解説し、アプリケーションをリリースするというもっともモチベーションが上がる行為を解説していきます",
    },
    {
      category: "デザイン",
      imagePath: "/images/circle_item.png",
      title: "iPadのお絵かき本：Procreateでお絵描きするぞ編",
      eventName: "応援祭り",
      publishedAt: new Date("2020-02-29T04:44:44+09:00"),
      path: "",
      numberOfPages: 34,
      price: 1000,
      tags: ["デザイン", "技書博", "iPad", "Procreate"],
      content:
        "本書は iPad のアプリケーションである「Procreate」という有料アプリの使い方を説明する本です。\n\nProcreate ダウンロードはこちらから\n　https://apps.apple.com/jp/app/procreate/id425073498\n今まで本格的にデジタル絵を書いた経験が無い方でも、簡単にお絵描きをすることができるようにツールの使い方を習得を目指した本です。\nブログや技術同人誌を書かれる方は、自分で絵を書いて掲載できればもっとわかりやすくなると思ったことがある方は多いのではないでしょうか？そんな方々に向けて、お絵かき初心者のKOMEとちょっとお絵かきができるかまくらさんとで初心者に寄り添った本になっています。",
    },
    {
      category: "ソフトウェア",
      imagePath: "/images/circle_item.png",
      title: "実践!サーバーサイドでKotlinを入門だよ",
      eventName: "技術書典7",
      publishedAt: new Date("2019-09-22T15:55:50+09:00"),
      path: "",
      numberOfPages: 150,
      price: 1500,
      tags: ["技術書典", "技術書典7", "サーバサイド", "Kotlin", "Spring boot"],
      content:
        "どんな人向け?\n・ Kotlinやってみたい\n・ Javaを書いたことあるけどそれ以外のJVM言語をしらない\n・ OSSのフレームワークを使ってWebアプリを書いたことが無い\n・ ずっとレガシーなWeb開発環境にいた(と思っている)\n・ モダンな開発の勉強したいけどなにをやっていいかわからない\n・ (フレームワークとしては)○○やってます(例:Rails、Spring Boot、React…)と言いたいが、今は言えない\n\nどんな内容?\nこの本はServerSideKotlinでWebアプリを一つ作るまでを目標に、大きく次の3章に分かれています。\n　- KotlinやサーバーサイドKotlinの説明\n　- 開発環境の作成とHello World!による入門\n - 実際に簡単なWebアプリを作る実践\n\nまずはKotlinやサーバーサイドについて概要や特徴を説明し、開発環境であるIDEやフレームワーク、ビルドシステムについても説明します。次に入門として実際に開発環境を作成し、Web画面の表示、DBへのアクセス、単体テストを書いてみます。\n\n何が得られるか?\n・Kotlinについて学べる\n・サーバーサイドKotlinについて学べる\n・Spring Bootについて学べる\n・簡単な掲示板が作れるようになる\n\nもし、この書籍で力がついたと思ったら、今度は拙著「もっとx2実践!サーバーサイドでKotlinだよ」を読んでみてください。さらなるKotlin力が身につくと思います。\n https://booth.pm/ja/items/1887668 \n",
    },
    {
      category: "ソフトウェア",
      imagePath: "/images/circle_item.png",
      title: "プロトタイピング！〜WebのFEもBEもプロトタイピングで実践〜",
      eventName: "技術書典9",
      publishedAt: new Date("2020-09-12T16:16:06+09:00"),
      path: "",
      numberOfPages: 160,
      price: 1000,
      tags: [
        "プロトタイピング",
        "React",
        "Next.js",
        "GraphQL",
        "Hasura GraphQL Engine",
      ],
      content:
        "本書では、実践に即したプロトタイピングを紹介します。\n\n本書はウェブのFEとBEを併用して実践的なプロトタイピングについて解説する本です。\n\nプロトタイピングに関する書籍では、BEにはあまり踏み込みません。NoSQLやファイルストレージ、認証サービスなどを利用することがほとんどです。\nそこで、本書ではHasura GraphQL Engine によるBEに踏み込むことにしました。\n\n本書で紹介する Hasura GraphQL Engine は SQL を使った本格的な RDB をFEからお手軽に扱えるものです。またNext.jsはサーバーサイドJavaScriptと、FEのコードをある程度透過的に混ぜ合わせるユニバーサルフレームワークです。これらを使えば、バックエンドに踏み込んだ、より本物に近く、幅広いプロトタイピングが可能です。\n\nプロトタイピングで大切なことは、日頃から慣れてる技術を武器にして、手早くプロトタイプを作り上げるかです。FEもBEも込みでプロトタイピングできれば強い武器になることでしょう。\n\n\n\n本書では、プロトタイピングの試行錯誤について生々しさを重視して書いています。プロトタイピングに慣れていない人にも、プロトタイピングのやり方が伝われば幸いです。\n\n当サークルの過去最多ページである160Pにも及ぶ、徹底して生々しくプロトタイピングのやり方をお伝えする本書は、我ながら力作に仕上がったと思います。",
    },
    {
      category: "ソフトスキル",
      imagePath: "/images/circle_item.png",
      title:
        "シン・カジュアル面談。さらばカジュアル面談に悩むすべてのエンジニアたち",
      eventName: "技書博5",
      publishedAt: new Date("2021-06-19T07:17:27+09:00"),
      path: "",
      numberOfPages: 127,
      price: 2000,
      tags: [
        "技書博",
        "技書博5",
        "技術書典11",
        "カジュアル面談",
        "転職",
        "面談",
        "採用",
        "人事",
        "技術書アワード",
      ],
      content:
        "カジュアル面談したらお祈りされた！そんなことはありませんか？\nカジュアル面談を50社以上受けた筆者の体験談を元に書き上げた物です。\nカジュアル面談に関する疑問について、これを読めば理解できます。\n\n\n・カジュアル面談とは？\n・カジュアル面談は面接と違うの？\n・オンラインで行うカジュアル面談の感覚は？\n\n\nノウハウも多数書いております。\n・カジュアル面談に関するノウハウ収録！\n・オンライン会議ツールのノウハウ収録！\n・カジュアル面談で使える文面を収録！\n * 筆者以外で体験した人の話、カジュアル面談を実施する会社側の話も収録！！\n\n\n転職を考えている貴方に読んでほしい本です。\nカジュアル面談を行っていない会社はもちろん！\nカジュアル面談を行っているイケてる会社の人にも読んでほしい本です！\n\n\n目次\n\n\n前書き\n　カジュアル面談のトリセツを執筆するにあたって\n　転職の時代\n　転職に不安を感じる\n　　求人票とジョブディスクリプションの違い\n　カジュアル面談は新しい手法\n　免責事項\n\n\n第1章 カジュアル面談とは?\n第2章 カジュアル面談のメリット\n第3章 転職サイトについて\n第4章 転職サイト以外での活動\n第5章 カジュアル面談を受ける前にやること(会社側、求職者側共通)\n第6章 カジュアル面談を受ける前にやること(求職者側)\n第7章 カジュアル面談を開催する前にやること(会社側) \n第8章 カジュアル面談の日程を決める\n第9章 オンライン会議ソフトと日程調整ソフト\n第10章 カジュアル面談のときに注意したいこと（求職者側）\n第11章 カジュアル面談のときに注意したいこと（会社側）\n第12章 カジュアル面談を受けた後にやること\n第13章 次の段階へ\n第14章 カジュアル面談に関する寄稿\n第15章 一求職者のカジュアル面談への思い\n第16章 コラム：話をする分量って難しいね。\n第17章 「カジュアル面談のトリセツ」某 X の体験談\n第18章 カジュアル面談？ いいえ、新卒採用とリクルーターの話です\n第19章 非IT企業で社内SE（内製要員）を採用するのに2年弱かかった話\n第20章 カジュアル面談、はじめました\n\n\nあとがき\n著者紹介\n\n\n求職者側だけでなく採用側も参考になる一冊となっております。",
    },
    {
      category: "ソフトスキル",
      imagePath: "/images/circle_item.png",
      title: "成長途中のエンジニアを応援する本",
      eventName: "技術書典6",
      publishedAt: new Date("2019-04-14T08:08:38+09:00"),
      path: "",
      numberOfPages: 150,
      price: 0,
      tags: ["勉強会", "成長", "エンジニア", "アウトプット"],
      content:
        "「アウトプットを通じて成長を加速する」をテーマにして、100名の寄稿者による成長を描いた本です。\n\n大きく、以下のテーマに別れて書かれています\n• アウトプットを始めたらどう変われたのか\n　• エンジニアとして成長するには何を目指すべきなのか\n　• 誰かの背中を押して成長させよう\n　• 誰かに背中を押されて自分はどう変われたのか\n\n本誌を読まれたエンジニアの皆さんが、これからどのように歩んでいくべきなのか、成長のヒントになるようなコンテンツをたくさん詰め込まれた一冊です。\n本書を読んだ読者が次の執筆者になることを願っています。",
    },
    {
      category: "ソフトスキル",
      imagePath: "/images/circle_item.png",
      title: "成長途中のエンジニアを応援する本2",
      eventName: "技術書典9",
      publishedAt: new Date("2020-09-12T09:29:49+09:00"),
      path: "",
      numberOfPages: 70,
      price: 0,
      tags: ["勉強会", "成長", "エンジニア", "アウトプット"],
      content:
        "あの「成長途中のエンジニアを応援する本」の頒布から一年。「成長途中のエンジニアを応援する本」を読んで成長した！と豪語するエンジニア22名が、今度は著者となり、過去の自分と同じように苦しんでいるエンジニアに自身の成長記録を送る一冊。\nあなたが成長するためのヒントが、必ずこの本の中にあるはずです。",
    },
    {
      category: "ハードウェア",
      imagePath: "/images/circle_item.png",
      title: "ElixirのNervesで電子回路を作ろう",
      eventName: "応援祭り",
      publishedAt: new Date("2020-02-01T00:00:00+09:00"),
      path: "",
      numberOfPages: 71,
      price: 500,
      tags: ["Elixir", "Nerves", "RaspberryPi", "電子回路"],
      content:
        "本書は、動的な関数型言語であるElixirのIoTフレームワーク『Nerves』について、『実際にさわって体験をしてみよう』という内容となっています。本書の内容をなぞっていくと、Nervesというフレームワークを利用して、IoT機器のGPIOを使って電子回路を操作する方法を知ることができます。",
    },
    {
      category: "その他",
      imagePath: "/images/circle_item.png",
      title: "育児休業解体新書",
      eventName: "技術書典10",
      publishedAt: new Date("2020-12-31T23:21:12+09:00"),
      path: "",
      numberOfPages: 63,
      price: 750,
      tags: ["育児休業"],
      content: "育児休業について書いた一冊です。",
    },
  ];
};

// TODO 何種類かの頒布物取得が必要になる
/** 頒布物情報を取得する */
export const useFetchDistributionById = (): FetchedData<Distribution> => {
  return {
    loading: false,
    error: null,
    data: createData1(),
  };
};

export const useFetchDistributions = (): FetchedData<Distribution[]> => {
  return {
    loading: false,
    error: null,
    data: [createData1(), ...createData2()],
  };
};
