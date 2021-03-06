import React from "react"; // React というでかいすべてを取ってくる
import { useRouter } from "next/router"; // useRouter という単体の関数を取ってくる
import { NextPage } from "next"; // NextPage という単体の型を取ってくる

import { ItemCell } from "@/components/item-cell";
import { Badge } from "@/components/badge";
import { Layout } from "@/components/layout";
import { ItemBanner } from "@/components/item-banner";
import { Item } from "@/types";
//import { useGetCircleQuery } from "@/generated/graphql"
import styles from "./index.module.css";

import { useGetCircleQuery } from "@/generated/graphql";

const Profiles = () => {
  const { loading, error, data } = useGetCircleQuery({ variables: { id: 1 } });

  if (loading) return <p>loading</p>;
  if (error) return <p>ダメです！:{error.toString()}</p>;
  return <div>{JSON.stringify(data)}</div>;
};

const Profile = ({ profile }) => {
  return (
    <p>
      {profile.id}: {profile.name}
    </p>
  );
};

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
  circleName: string;
  circleDesciption: string;
  items: Item[];
  events: ItemBannerProps[];
};

const useCircle = (id: number) => {
  return {
    circles: [
      {
        description:
          "親方Projectでは、エンジニアの困ったを解決する合同誌を作ってます。見積り何もわからん、を集めた「ワンストップ見積もり」、勉強会は楽しいぞ！を集めたワンストップ勉強会をはじめとして、エンジニアの困ったを解決すべく活動中です。執筆者15名(平均)の知見をあなたにワンストップでお届けます。また、執筆者は絶賛募集中。1ページからでも寄稿OKです。あなたの知見を、今、この本に！書いてみたいと思ったときが書くときです。",
        name: "親方Project",
        circleItems: [
          {
            publishedOn: new Date("2020-10-01"),
            name: "Slack App開発ガイド",
            imageUrl: "/images/circle_item.png",
            genre: {
              genre: "ウェブアプリ",
            },
          },
        ],
      },
    ],
  };
};

const useItems = (): Item[] => {
  const { circles } = useCircle(1);

  return circles[0].circleItems.map((item) => {
    return {
      category: item.genre.genre,
      imagePath: item.imageUrl,
      title: item.name,
      publishedAt: item.publishedOn,
      path: "/hoge",
    };
  });
};

const useEvents = () => {
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
  return events;
};
const useCircleName = () => {
  return "親方Project";
};

const useDescription = () => {
  return "親方Projectでは、エンジニアの困ったを解決する合同誌を作ってます。見積り何もわからん、を集めた「ワンストップ見積もり」、勉強会は楽しいぞ！を集めたワンストップ勉強会をはじめとして、エンジニアの困ったを解決すべく活動中です。執筆者15名(平均)の知見をあなたにワンストップでお届けます。また、執筆者は絶賛募集中。1ページからでも寄稿OKです。あなたの知見を、今、この本に！書いてみたいと思ったときが書くときです。";
};

const Main: React.FC<MainProps> = ({
  circleName,
  circleDesciption,
  items,
  events,
}) => {
  return (
    <main className={styles.mainContainer}>
      <Content
        circleName={circleName}
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
  // const items = useItems()
  // const events = useEvents()
  // const circleName = useCircleName()
  // const circleDesciption = useDescription()

  const { loading, error, data } = useGetCircleQuery({ variables: { id: 1 } });

  if (loading) return <p>loading</p>;
  if (error) return <p>ダメです！:{error.toString()}</p>;
  const circleName = data.circles[0].name;
  const circleDesciption = data.circles[0].description;
  const items = data.circles[0].circleItems.map((item) => {
    return {
      category: item.genre.genre,
      imagePath: item.imageUrl,
      title: item.name,
      eventName: "",
      publishedAt: new Date(item.publishedOn),
      path: "",
    };
  });
  const events = useEvents();

  return (
    <Layout>
      <Main
        circleName={circleName}
        circleDesciption={circleDesciption}
        items={items}
        events={events}
      />
    </Layout>
  );

  // return (
  //   <div>
  //     <div>
  //       {JSON.stringify(data)}
  //     </div>
  //     <div>
  //       {JSON.stringify(circleName)}
  //     </div>
  //     <div>
  //       {JSON.stringify(circleDesciption)}
  //     </div>
  //     <div>
  //       {JSON.stringify(items)}
  //     </div>
  //     <div>
  //       {JSON.stringify(events)}
  //     </div>
  //   </div>
  // );
};

export default CirclesShow;
