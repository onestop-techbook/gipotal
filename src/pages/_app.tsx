import "minireset.css";
import "../variables.css";
import "../base.css";

import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { ApolloProvider } from "@apollo/react-hooks";

const createApolloClient = () => {
  return new ApolloClient({
    link: new HttpLink({
      uri: "https://gipotal.herokuapp.com/v1/graphql",
    }),
    cache: new InMemoryCache(),
  });
};

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  const client = createApolloClient();
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
