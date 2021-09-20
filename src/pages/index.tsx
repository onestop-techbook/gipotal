import { NextPage } from "next";
import { useState } from "react";
import { DistributionView } from "@/parts/distributions";
import { useDistributionsByCategories } from "@/logics/distributions";
import { Header } from "@/parts/header";
import { Footer } from "@/parts/footer";
import { Button } from "@/parts/button";
import { Tab } from "@/parts/tab";
import { useCategories } from "@/logics/distributions/categories";

const TopPage: NextPage = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const categories = useCategories();
  const tabs = ["すべての本", ...categories];
  const currentCategory = tabIndex === 0 ? undefined : tabs[tabIndex];
  const { data } = useDistributionsByCategories(currentCategory);

  return (
    <>
      <div className="bg-topcover mb-40">
        <Header />
        <section className="h-[329px] flex justify-between w-[980px] max-w-[980px] mx-auto">
          <div className="relative top-5">
            <img src="/images/top-illustration.png" />
          </div>
          <div className="w-[540px] mt-12">
            <h1 className="text-4xl leading-snug font-extrabold tracking-wide">
              日本最大級の
              <br />
              <span className="text-yellow-500">技術同人誌</span>ポータルサイト
            </h1>
            <p className="mt-3">
              ギポタルは、世の中のさまざまな技術同人誌・サークルへの入り口です。ジャンル、イベント横断検索、新着告知など、新しい本との出会いの場です。
            </p>
            <div className="mt-5">
              <Button type="black" href="/">
                サークル登録
              </Button>
              <Button type="white" href="/" className="ml-5">
                ギポタルについて
              </Button>
            </div>
          </div>
        </section>
      </div>
      <main className="w-[980px] max-w-[980px] mx-auto">
        <Tab tabs={tabs} value={tabIndex} onChange={setTabIndex} />
        <DistributionView distributions={data} className="mt-5" />
      </main>
      <Footer />
    </>
  );
};

export default TopPage;
