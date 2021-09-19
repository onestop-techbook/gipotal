import { VFC } from "react";

type Props = {
  imagePath: string;
};

/** 頒布物のイメージ画像を 300x428 で描画する
 * サイズが小さい場合は、余白は灰色で埋められる
 */
export const DistributionImage: VFC<Props> = ({ imagePath }) => {
  return (
    <div className="w-[300px] h-[428px] bg-gray-right">
      <img className="w-full h-auto" src={imagePath} />
    </div>
  );
};
