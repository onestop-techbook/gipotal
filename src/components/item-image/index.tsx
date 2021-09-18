import { VFC } from "react";

type Props = {
  imagePath: string;
};

export const ItemImage: VFC<Props> = ({ imagePath }) => {
  return (
    <div className="w-[300px] h-[428px] bg-[#c4c4c4]">
      <img className="w-full h-auto" src={imagePath} />
    </div>
  );
};
