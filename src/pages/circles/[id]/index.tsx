import React from "react"; // React というでかいすべてを取ってくる
import { useRouter } from "next/router"; // useRouter という単体の関数を取ってくる
import { NextPage } from "next"; // NextPage という単体の型を取ってくる

import { ItemCell } from "@/components/item-cell";
import { Badge } from "@/components/badge";
import { Layout } from "@/components/layout";
import { ItemBanner } from "@/components/item-banner";
import { Item } from "@/types";

import styles from "./index.module.css";

type ItemBannerProps = React.ComponentProps<typeof ItemBanner>;

type ContentProps = {
  circleName: string;
  circleDesciption: string;
  items: Item[];
};
const Content: React.FC<ContentProps> = ({
  circleName,
  circleDesciption,
  items,
}) => {
  return (
    <div className={styles.circleContent}>
      <h1 className={styles.circleName}>{circleName}</h1>
      <p className={styles.circleDesciption}>{circleDesciption}</p>
      <h2 className={styles.heading}>
        <span className={styles.headingLabel}>頒布物</span>{" "}
        <Badge value={items.length} />
      </h2>
      <div className={styles.itemContainer}>
        <ul className={styles.itemList}>
          {items.map((item, index) => (
            <li className={styles.item} key={index}>
              <ItemCell {...item} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

type SideProps = {
  events: ItemBannerProps[];
};

const Side: React.FC<SideProps> = ({ events }) => {
  return (
    <div className={styles.circleSide}>
      <h2 className={styles.heading}>
        <span className={styles.headingLabel}>参加イベント</span>{" "}
        <Badge value={events.length} />
      </h2>
      {events.map((event) => (
        <ItemBanner {...event} />
      ))}
      <h2 className={styles.heading}>
        <span className={styles.headingLabel}>関連リンク</span>
      </h2>
      <ul className={styles.linkList}>
        <li>
          <a href="https://twitter.com/oyakata2438">Twitter</a>
        </li>
        <li>
          <a href="https://note.com/oyakata2438/n/nac549aac8cde">
            サークル公式ページ
          </a>
        </li>
        <li>
          <a href="https://oyakata.booth.pm/">BOOTH</a>
        </li>
      </ul>
    </div>
  );
};

type MainProps = {
  circleDesciption: string;
};

const Main: React.FC<MainProps> = ({ circleDesciption }) => {
  const items: Item[] = [
    {
      category: "ウェブアプリ",
      title: "Slack App開発ガイド",
      eventName: "技術書典6",
      publishedAt: new Date(),
      imagePath: "/images/circle_item.png",
      path: "/hoge",
    },
    {
      category: "ウェブアプリ",
      title: "Slack App開発ガイド",
      eventName: "技術書典6",
      publishedAt: new Date(),
      imagePath: "/images/circle_item.png",
      path: "/hoge",
    },
    {
      category: "ウェブアプリ",
      title: "Slack App開発ガイド",
      eventName: "技術書典6",
      publishedAt: new Date(),
      imagePath: "/images/circle_item.png",
      path: "/hoge",
    },
    {
      category: "ウェブアプリ",
      title: "Slack App開発ガイド",
      eventName: "技術書典6",
      publishedAt: new Date(),
      imagePath: "/images/circle_item.png",
      path: "/hoge",
    },
    {
      category: "ウェブアプリ",
      title: "Slack App開発ガイド",
      eventName: "技術書典6",
      publishedAt: new Date(),
      imagePath: "/images/circle_item.png",
      path: "/hoge",
    },
  ];
  const events: ItemBannerProps[] = [
    {
      text: "技術書典9",
      startAt: "2019.09.12",
      endAt: "2020.09.22",
    },
    {
      text: "技術書典8",
      startAt: "2019.09.12",
      endAt: "2020.09.22",
    },
    {
      text: "技術書典7",
      startAt: "2019.09.12",
      endAt: "2019.09.12",
    },
  ];
  return (
    <main className={styles.mainContainer}>
      <Content
        circleName="親方Project"
        circleDesciption={circleDesciption}
        items={items}
      />
      <Side events={events} />
    </main>
  );
};

const CirclesShow: NextPage = () => {
  // const router = useRouter()
  // const { id } = router.query
  const circleDesciption =
    "親方Projectでは、エンジニアの困ったを解決する合同誌を作ってます。見積り何もわからん、を集めた「ワンストップ見積もり」、勉強会は楽しいぞ！を集めたワンストップ勉強会をはじめとして、エンジニアの困ったを解決すべく活動中です。執筆者15名(平均)の知見をあなたにワンストップでお届けます。また、執筆者は絶賛募集中。1ページからでも寄稿OKです。あなたの知見を、今、この本に！書いてみたいと思ったときが書くときです。";
  return (
    <Layout>
      <Main circleDesciption={circleDesciption} />
    </Layout>
  );
};

export default CirclesShow;
