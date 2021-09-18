import Head from "next/head";
import { Layout } from "@/components/layout";

export default function Home() {
  return (
    <Layout>
      <div className="container">
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="text-red-500">ギポッ</main>
        <footer></footer>
      </div>
    </Layout>
  );
}
