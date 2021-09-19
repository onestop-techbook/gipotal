import { DistributionView } from "@/parts/distributions";
import { useFetchDistributions } from "@/logics/distributions";
import { Header } from "@/parts/header";

export default function Home() {
  const { data } = useFetchDistributions();
  return (
    <>
      <div className="bg-topcover mb-40">
        <Header />
        <section className="h-[329px] flex justify-between w-[980px] max-w-[980px] mx-auto">
          <div className="relative top-5">
            <img src="/images/top-illustration.png" />
          </div>
          <div className="w-[540px] mt-[84px]">
            <h1 className="text-4xl leading-normal font-extrabold tracking-wide">
              日本最大級の
              <br />
              <span className="text-yellow-500">技術同人誌</span>ポータルサイト
            </h1>
            <p className="pt-5">
              ギポタルは、世の中のさまざまな技術同人誌・サークルへの入り口です。ジャンル、イベント横断検索、新着告知など、新しい本との出会いの場です。
            </p>
          </div>
        </section>
      </div>
      <main className="">
        <DistributionView distributions={data} />
      </main>
    </>
  );
}
