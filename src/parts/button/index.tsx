import Link from "next/link";
import { VFC } from "react";

type ButtonType = "black" | "white" | "none";

// TODO onClick のケースはあとで考える

type Props = {
  type: ButtonType;
  className?: string;
  href?: string;
  children: JSX.Element | string;
};

const getColorClass = (buttonType: ButtonType): string => {
  switch (buttonType) {
    case "black":
      return "font-button font-bold text-sm leading-4 py-3 px-6 rounded-3xl text-white bg-black";
    case "white":
      return "font-button font-bold text-sm leading-4 py-3 px-6 rounded-3xl text-black bg-white shadow-lg";
    case "none":
      return "";
  }
};

/** ボタン */
export const Button: VFC<Props> = ({ type, href, children, className }) => {
  return (
    <Link href={href}>
      <a className={`${className} ${getColorClass(type)}`}>{children}</a>
    </Link>
  );
};
