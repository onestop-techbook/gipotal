import React, { VFC } from "react"; // React というでかいすべてを取ってくる
import { NextPage } from "next"; // NextPage という単体の型を取ってくる

import { ItemCell } from "@/components/item-cell";
import { NumberBadge } from "@/components/number-badge";
import { Layout } from "@/components/layout";
import { ItemBanner } from "@/components/item-banner";
import { Item } from "@/logics/items";

import { useGetCircleById } from "@/logics/circles";
import { useEvents } from "@/logics/events";
import { Event } from "@/logics/events";

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
        <NumberBadge value={items.length} />
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
  events: Event[];
};

type RelatedLinkProps = {
  href: string;
  label: string;
};

const RelatedLink: VFC<RelatedLinkProps> = ({ href, label }) => {
  return (
    <li className="list-none underline flex items-center">
      <figure className="bg-[#C4C4C4] rounded-full h-4 w-4 mr-2" />
      <a href={href}>{label}</a>
    </li>
  );
};

const Side: React.FC<SideProps> = ({ events }) => {
  return (
    <div className="w-[310px] min-w-[310px] ml-9">
      <h2 className="flex items-center mt-8 mb-4">
        <span className="mr-2 text-2xl font-semibold">参加イベント</span>{" "}
        <NumberBadge value={events.length} />
      </h2>
      {events.map((event) => (
        <ItemBanner event={event} />
      ))}
      <h2 className="mt-8 mr-2 text-2xl font-semibold">
        <span className="mr-2 text-2xl font-semibold">関連リンク</span>
      </h2>
      <ul className="">
        <RelatedLink href="https://twitter.com/oyakata2438" label="Twitter" />
        <RelatedLink
          href="https://note.com/oyakata2438/n/nac549aac8cde"
          label="サークル公式ページ"
        />
        <RelatedLink href="https://oyakata.booth.pm/" label="BOOTH" />
      </ul>
    </div>
  );
};

type MainProps = {
  circleName: string;
  circleDesciption: string;
  items: Item[];
  events: Event[];
};

const Main: React.FC<MainProps> = ({
  circleName,
  circleDesciption,
  items,
  events,
}) => {
  return (
    <>
      <img src="/images/circle_cover.png" />
      <main className="flex max-w-[1012px] mx-12 my-auto px-4">
        <Content
          circleName={circleName}
          circleDesciption={circleDesciption}
          items={items}
        />
        <Side events={events} />
      </main>
    </>
  );
};

const CirclesShow: NextPage = () => {
  const { loading, error, data } = useGetCircleById(1);

  if (loading) return <p>loading</p>;
  if (error) return <p>ダメです！:{error.toString()}</p>;
  const circleName = data.name;
  const circleDesciption = data.description;
  const items = data.circleItems.map((item) => {
    return item;
  });
  const events = useEvents().data;

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
