type Props = {
  value: number;
};

/** バッヂ */
export const NumberBadge: React.FC<Props> = ({ value }) => {
  return (
    <span className={`bg-badge rounded-full px-3 text-base h-6 leading-6`}>
      {value}
    </span>
  );
};
