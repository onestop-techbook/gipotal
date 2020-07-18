import Head from "next/head";
import styles from "./index.module.css";
import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { ApolloProvider } from "@apollo/react-hooks";

import Profiles from "../components/profiles";

const createApolloClient = () => {
  return new ApolloClient({
    link: new HttpLink({
      uri: "http://localhost:8080/v1/graphql",
    }),
    cache: new InMemoryCache(),
  });
};

export default function Home() {
  const client = createApolloClient();
  return (
    <ApolloProvider client={client}>
      <div className="container">
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.hello}>ギポッ</main>

        <Profiles />

        <footer></footer>
      </div>
    </ApolloProvider>
  );
}
