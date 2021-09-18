type Props = {
  value: string | number;
};

export const Badge: React.FC<Props> = ({ value }) => {
  return (
    <span className="bg-brand rounded-3xl px-3 text-base h-6 leading-6">
      {value}
    </span>
  );
};
