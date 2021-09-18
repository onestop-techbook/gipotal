type Props = {
  text: string;
  startAt: string;
  endAt: string;
};

export const ItemBanner: React.FC<Props> = ({ text, startAt, endAt }) => {
  return (
    <div className="p-3 bg-event-banner text-white mb-2 rounded-sm">
      <div className="text-sm opacity-80 font-semibold">
        {startAt} - {endAt}
      </div>
      <div className="text-xl font-semibold">{text}</div>
    </div>
  );
};
