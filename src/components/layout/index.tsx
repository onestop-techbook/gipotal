import React from "react";
import Link from "next/link";

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <header className="shadow">
        <nav className="w-full flex items-center mx-auto py-3 max-w-[980px]">
          <Link href="/">
            <a className="px-2 mr-auto inline-block relative top-[2px]">
              <img className={"h-8 relative -l-[2px]"} src="/images/logo.svg" />
            </a>
          </Link>
          <Link href="/signup">
            <a className="font-button font-bold text-sm leading-4 py-3 px-6 rounded-3xl text-white bg-black">
              新規登録
            </a>
          </Link>
          <Link href="/login">
            <a className="ml-3 font-button font-bold text-sm leading-4 py-3 px-6 rounded-3xl text-black bg-white shadow-lg">
              ログイン
            </a>
          </Link>
        </nav>
      </header>
      {children}
    </>
  );
};
