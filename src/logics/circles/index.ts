import { Distribution } from "@/logics/distributions";
import { FetchedData } from "@/logics";
/** サークル情報（頒布物込） */
export type Circle = {
  name: string;
  description: string;
  circleItems: Distribution[];
};

/** サークル情報を ID 指定で取ってくる */
export const useGetCircleById = (id: number): FetchedData<Circle> => {
  return {
    loading: false,
    error: null,
    data: {
      name: "親方Project",
      description:
        "親方Projectでは、エンジニアの困ったを解決する合同誌を作ってます。見積り何もわからん、を集めた「ワンストップ見積もり」、勉強会は楽しいぞ！を集めたワンストップ勉強会をはじめとして、エンジニアの困ったを解決すべく活動中です。執筆者15名(平均)の知見をあなたにワンストップでお届けます。また、執筆者は絶賛募集中。1ページからでも寄稿OKです。あなたの知見を、今、この本に！書いてみたいと思ったときが書くときです。",
      circleItems: [
        {
          category: "ソフトスキル",
          imagePath: "/images/circle_item.png",
          title: "ワンストップ勉強会",
          eventName: "技術書典6",
          publishedAt: new Date("2018/04/24"),
          path: "path",
          numberOfPages: 122,
          price: 1_000,
          tags: ["勉強会", "成長", "勉強会運営", "勉強会参加"],
          content: `[技術書典6新刊]勉強会のすべてがわかる本。一般参加から、LT登壇、主催、その後のコミュニティ運営まで。ドキドキわくわくの初参加から、登壇者としての一歩、主催も楽しいよ、いろいろ経験してきた著者20人が送る勉強会ノウハウの決定版。

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
　-参加・主催したら世界が広がった`,
        },
      ],
    },
  };
};
