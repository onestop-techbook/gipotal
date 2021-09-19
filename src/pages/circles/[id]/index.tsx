import React, { VFC } from "react"; // React というでかいすべてを取ってくる
import { NextPage } from "next"; // NextPage という単体の型を取ってくる

import { NumberBadge } from "@/parts/heading/number-badge";
import { Layout } from "@/layout";
import { EventBanner } from "@/parts/event-banner";
import { Distribution } from "@/logics/distributions";

import { useGetCircleById } from "@/logics/circles";
import { useEvents } from "@/logics/events";
import { Event } from "@/logics/events";
import { DistributionView } from "@/parts/distributions";
import { Heading } from "@/parts/heading";

type ContentProps = {
  circleName: string;
  circleDesciption: string;
  distributions: Distribution[];
};
const Content: React.FC<ContentProps> = ({
  circleName,
  circleDesciption,
  distributions,
}) => {
  return (
    <div className="flex-grow">
      <h1 className="text-3xl font-semibold mb-4">{circleName}</h1>
      <p className="leading-6 opacity-80">{circleDesciption}</p>
      <section className="mt-8">
        <Heading numberBadge={distributions.length}>頒布物</Heading>
        <DistributionView distributions={distributions} />
      </section>
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
      <figure className="bg-gray-right rounded-full h-4 w-4 mr-2" />
      <a href={href}>{label}</a>
    </li>
  );
};

const Side: React.FC<SideProps> = ({ events }) => {
  return (
    <div className="min-w-[310px] ml-9">
      <section className="mt-8">
        <Heading numberBadge={events.length}>参加イベント</Heading>
        {events.map((event) => (
          <EventBanner event={event} />
        ))}
      </section>
      <section className="mt-8">
        <Heading>関連リンク</Heading>
        <ul className="mt-4">
          <RelatedLink href="https://twitter.com/oyakata2438" label="Twitter" />
          <RelatedLink
            href="https://note.com/oyakata2438/n/nac549aac8cde"
            label="サークル公式ページ"
          />
          <RelatedLink href="https://oyakata.booth.pm/" label="BOOTH" />
        </ul>
      </section>
    </div>
  );
};

type MainProps = {
  circleName: string;
  circleDesciption: string;
  items: Distribution[];
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
          distributions={items}
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
