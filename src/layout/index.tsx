import { VFC } from "react";
import { Header } from "@/parts/header";
import { Footer } from "@/parts/footer";

type Props = {
  children: JSX.Element | JSX.Element[];
};

export const Layout: VFC<Props> = ({ children }) => {
  return (
    <>
      <Header className="shadow" />
      <div className="max-w-[980px] mx-auto">{children}</div>
      <Footer />
    </>
  );
};
