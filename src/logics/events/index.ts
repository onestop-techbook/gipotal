import { ItemBanner } from "@/components/item-banner";

type ItemBannerProps = React.ComponentProps<typeof ItemBanner>;

export const useEvents = () => {
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
