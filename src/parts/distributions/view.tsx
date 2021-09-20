import { VFC } from "react";
import { Distribution } from "@/logics/distributions";
import { DistributionCell } from "./cell";

type Props = {
  className?: string;
  distributions: Distribution[];
};

/** 頒布物情報をコンパクトにまとめた一覧を並べて表示する */
export const DistributionView: VFC<Props> = ({ className, distributions }) => {
  return (
    <ul className={`${className} flex flex-wrap justify-start gap-10`}>
      {distributions.map((dist, index) => (
        <li className="mb-8" key={index}>
          <DistributionCell {...dist} />
        </li>
      ))}
    </ul>
  );
};
