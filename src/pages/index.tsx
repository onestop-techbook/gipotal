import Head from "next/head";
import styles from "./index.module.css";
import Profiles from "../components/profiles";
import { Layout } from "@/components/layout";

export default function Home() {
  return (
    <Layout>
      <div className="container">
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.hello}>ギポッ</main>
        <Profiles />
        <footer></footer>
      </div>
    </Layout>
  );
}
