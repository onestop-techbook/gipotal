import { useRouter } from "next/router";
import { NextPage } from "next";
import { Layout } from "@/layout";
import { DistributionImage } from "@/parts/distributions/image";
import { useFetchDistributionById } from "@/logics/distributions";
import { formatDate, formatPrice } from "@/logics/utils";

const Label = ({ label }) => {
  return (
    <div className="text-[#9E9EA7] font-bold text-xs text-center">{label}</div>
  );
};

const BookPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { loading, error, data } = useFetchDistributionById(
    Number.parseInt(id as string)
  );

  if (!id || loading) {
    return <div>loading now</div>;
  }

  const {
    imagePath,
    title,
    category,
    eventName,
    publishedAt,
    numberOfPages,
    price,
    tags,
    content,
  } = data;
  const circleName = "親方Project";

  return (
    <Layout>
      <div className="flex justify-between my-16">
        <DistributionImage imagePath={imagePath} />
        <section className="max-w-[640px]">
          <div className="text-[#D18921] font-bold">{category}</div>
          <h1 className="font-bold text-3xl">{title}</h1>
          <div className="font-bold">{circleName}</div>
          <div className="mt-5 flex border-t border-b py-4">
            <div className="px-6">
              <Label label="発行日" />
              <div className="font-bold text-center">
                {formatDate(publishedAt)}
              </div>
            </div>
            <div className="border-l px-6">
              <Label label="初出イベント" />
              <div className="font-bold text-center">{eventName}</div>
            </div>
            <div className="border-l px-6">
              <Label label="ページ数" />
              <div className="font-bold text-center">{numberOfPages}</div>
            </div>
            <div className="border-l px-6">
              <Label label="値段" />
              <div className="font-bold text-center">{formatPrice(price)}</div>
            </div>
          </div>
          <pre className="pt-4 whitespace-pre-line">{content}</pre>
          <div className="flex justify-start items-center gap-2 mt-6">
            {tags.map((tag) => (
              <span
                className="bg-[#eee] rounded-full font-bold text-sm px-4 py-2"
                key={tag}
              >
                <a href={`/tags/${tag}`}>{tag}</a>
              </span>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default BookPage;
