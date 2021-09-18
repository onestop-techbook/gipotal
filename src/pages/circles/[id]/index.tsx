import React from "react"; // React というでかいすべてを取ってくる
import { NextPage } from "next"; // NextPage という単体の型を取ってくる

import { ItemCell } from "@/components/item-cell";
import { Badge } from "@/components/badge";
import { Layout } from "@/components/layout";
import { ItemBanner } from "@/components/item-banner";
import { Item } from "@/types";

import { useGetCircleById } from "@/logics/circles";
import { useEvents } from "@/logics/events";
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
    <div className="flex-grow">
      <h1 className="text-3xl font-semibold mb-4">{circleName}</h1>
      <p className="leading-6 opacity-80">{circleDesciption}</p>
      <h2 className="flex items-center mt-8 mb-4 first:mt-0">
        <span className="mr-2 text-2xl font-semibold">頒布物</span>{" "}
        <Badge value={items.length} />
      </h2>
      <div className="">
        <ul className="flex flex-wrap justify-between">
          {items.map((item, index) => (
            <li className="mb-8" key={index}>
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
    <div className="w-[310px] min-w-[310px] ml-9">
      <h2 className="flex items-center mt-8 mb-4">
        <span className="mr-2 text-2xl font-semibold">参加イベント</span>{" "}
        <Badge value={events.length} />
      </h2>
      {events.map((event) => (
        <ItemBanner {...event} />
      ))}
      <h2 className="mr-2 text-2xl font-semibold">
        <span className="mr-2 text-2xl font-semibold">関連リンク</span>
      </h2>
      <ul className="pl-6">
        <li className="list-disc hover:underline">
          <a href="https://twitter.com/oyakata2438">Twitter</a>
        </li>
        <li className="list-disc hover:underline">
          <a href="https://note.com/oyakata2438/n/nac549aac8cde">
            サークル公式ページ
          </a>
        </li>
        <li className="list-disc hover:underline">
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

const Main: React.FC<MainProps> = ({
  circleName,
  circleDesciption,
  items,
  events,
}) => {
  return (
    <main className="flex max-w-[1012px] mx-12 my-auto px-4">
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
  const { loading, error, data } = useGetCircleById(1);

  if (loading) return <p>loading</p>;
  if (error) return <p>ダメです！:{error.toString()}</p>;
  const circleName = data.circles[0].name;
  const circleDesciption = data.circles[0].description;
  const items = data.circles[0].circleItems.map((item) => {
    return item;
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
};

export default CirclesShow;
