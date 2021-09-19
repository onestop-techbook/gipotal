import Link from "next/link";
import { VFC } from "react";
import { Button } from "@/parts/button";

type Props = {
  className?: string;
};

/** ヘッダー */
export const Header: VFC<Props> = ({ className }) => {
  return (
    <header className={`${className} relative`}>
      <nav className="w-full flex items-center mx-auto py-3 max-w-[980px]">
        <Link href="/">
          <a className="px-2 mr-auto inline-block relative top-[2px]">
            <img className={"h-8 relative -l-[2px]"} src="/images/logo.svg" />
          </a>
        </Link>
        <Button href="/signup" type="black">
          新規登録
        </Button>
        <Button href="/login" type="white" className="ml-2">
          ログイン
        </Button>
      </nav>
    </header>
  );
};
