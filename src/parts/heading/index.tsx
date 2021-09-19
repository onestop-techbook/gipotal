import { VFC } from "react";
import { NumberBadge } from "./number-badge";

type Props = {
  children: JSX.Element | JSX.Element[] | string;
  /** バッヂに数字を表示したい場合、指定する */
  numberBadge?: number | undefined;
};

/** 見出し */
export const Heading: VFC<Props> = ({ children, numberBadge }) => {
  return (
    <h2 className="flex items-center mb-4 first:mt-0 text-2xl font-semibold">
      {children}
      {numberBadge && <NumberBadge value={numberBadge} className="ml-2" />}
    </h2>
  );
};
