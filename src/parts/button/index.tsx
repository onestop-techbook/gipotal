import Link from "next/link";
import { VFC } from "react";

type ButtonType = "black" | "white" | "tab" | "none";

type Props = {
  type: ButtonType;
  className?: string;
  href?: string;
  onClick?: () => void;
  children: JSX.Element | string;
};

// TODO: ボタン用のユーティリティクラスを作る

const getColorClass = (buttonType: ButtonType): string => {
  switch (buttonType) {
    case "black":
      return "font-button font-bold text-sm leading-4 py-3 px-6 rounded-3xl text-white bg-black";
    case "white":
      return "font-button font-bold text-sm leading-4 py-3 px-6 rounded-3xl text-black bg-white shadow-lg";
    case "tab":
      return "font-button font-bold text-sm leading-4 py-3 px-6 rounded-3xl text-black bg-[#F4A739]";
    case "none":
      return "";
  }
};

/** ボタン */
export const Button: VFC<Props> = ({
  type,
  href,
  children,
  className,
  onClick,
}) => {
  if (href) {
    return (
      <Link href={href}>
        <a className={`${className} ${getColorClass(type)}`}>{children}</a>
      </Link>
    );
  } else {
    return (
      <a className={`${className} ${getColorClass(type)}`} onClick={onClick}>
        {children}
      </a>
    );
  }
};
