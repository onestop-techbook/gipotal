import { FetchedData } from "@/logics";

export type Event = {
  name: string;
  startAt: Date;
  endAt: Date;
  booth?: string;
};
export const useEvents = (): FetchedData<Event[]> => {
  const events: Event[] = [
    {
      name: "技術書典9",
      startAt: new Date("2020/02/29"),
      endAt: new Date("2020/03/01"),
      booth: "お23",
    },
    {
      name: "技術書典8",
      startAt: new Date("2019/09/12"),
      endAt: new Date("2020/09/22"),
      booth: "い12",
    },
    {
      name: "技術書典7",
      startAt: new Date("2019/04/12"),
      endAt: new Date("2020/04/12"),
    },
  ];
  return {
    data: events,
    loading: false,
    error: null,
  };
};
