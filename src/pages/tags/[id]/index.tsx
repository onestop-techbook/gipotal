import { NextPage } from "next";
import { useRouter } from "next/router";
import { useDistributionsByTags } from "@/logics/distributions";
import { DistributionView } from "@/parts/distributions";
import { Layout } from "@/layout";

const TagsPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { loading, error, data } = useDistributionsByTags(
    id as string | undefined
  );

  if (loading) {
    return <div>loading</div>;
  }

  return (
    <Layout>
      <main className="mt-10 w-[980px] max-w-[980px] mx-auto">
        <h1>
          <span className="text-3xl font-extrabold mr-1">{id}</span>に関する本
        </h1>
        <DistributionView distributions={data} className="mt-5" />
      </main>
    </Layout>
  );
};

export default TagsPage;
