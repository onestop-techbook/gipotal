import { NextPage } from "next";
import { Layout } from "@/components/layout";
import { ItemImage } from "@/components/item-image";
import { Item } from "@/logics/items";

const useFetchItem = (): Item => {
  return {
    category: "ソフトスキル",
    imagePath: "/images/circle_item.png",
    title: "ワンストップ勉強会",
    eventName: "技術書典6",
    publishedAt: new Date(),
    path: "",
    numberOfPages: 122,
    price: 1_000,
    tags: ["勉強会", "成長", "勉強会運営", "勉強会参加"],
  };
};

const formatDate = (date: Date) => {
  return `2018.04.24`;
};

const formatPrice = (price: number) => {
  return new Intl.NumberFormat("ja-JP", {
    currency: "JPY",
  }).format(price);
};

const Label = ({ label }) => {
  return (
    <div className="text-[#9E9EA7] font-bold text-xs text-center">{label}</div>
  );
};

const BookPage: NextPage = () => {
  const {
    imagePath,
    title,
    category,
    eventName,
    publishedAt,
    numberOfPages,
    price,
    tags,
  } = useFetchItem();
  const circleName = "親方Project";
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

  return (
    <Layout>
      <div className="flex justify-between mt-16">
        <ItemImage imagePath={imagePath} />
        <section className="max-w-[640px]">
          <div className="text-[#D18921] font-bold">{category}</div>
          <h1 className="font-bold text-3xl">{title}</h1>
          <div className="font-bold">{circleName}</div>
          <div className="mt-5 flex border-t border-b py-4">
            <div className="px-6">
              <Label label="発行日" />
              <div className="font-bold text-center">
                {formatDate(publishedAt)}
              </div>
            </div>
            <div className="border-l px-6">
              <Label label="初出イベント" />
              <div className="font-bold text-center">{eventName}</div>
            </div>
            <div className="border-l px-6">
              <Label label="ページ数" />
              <div className="font-bold text-center">{numberOfPages}</div>
            </div>
            <div className="border-l px-6">
              <Label label="値段" />
              <div className="font-bold text-center">{formatPrice(price)}</div>
            </div>
          </div>
          <pre className="pt-4 whitespace-pre-line">{content}</pre>
          <div className="flex justify-start items-center gap-2 mt-6">
            {tags.map((tag) => (
              <span className="bg-[#eee] rounded-full font-bold text-sm px-4 py-2">
                {tag}
              </span>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default BookPage;
