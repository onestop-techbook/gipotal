import { FetchedData } from "@/logics";

/** 登録した同人誌 */
export type Item = {
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

export const useFetchItem = (): FetchedData<Item> => {
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
  return {
    loading: false,
    error: null,
    data: item,
  };
};
