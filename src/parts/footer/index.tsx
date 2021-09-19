import { VFC } from "react";

type Props = {
  className?: string;
};

/** ページヘッダー */
export const Footer: VFC<Props> = ({ className }) => {
  return (
    <footer className={`${className} bg-[#F5F5F5]`}>
      <div className="w-full flex items-center justify-between mx-auto pt-7 py-3 max-w-[980px]">
        <img src="/images/logo-gray.svg" />
        <div className="text-xs opacity-50">
          <span>利用規約</span>
          <span className="border-l border-gray-400 ml-2" />
          <span className="ml-2">パライバシーポリシー</span>
          <span className="border-l border-gray-400 ml-2" />
          <span className="ml-2">クレジット</span>
        </div>
      </div>
      <hr className="border-t border-gray-400 opacity-50 max-w-[980px] mx-auto" />
      <div className="mt-5 text-center text-xs opacity-50 pb-5">
        ©2020-2021 親方Project
      </div>
    </footer>
  );
};
