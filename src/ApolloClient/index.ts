import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-boost';
import { createHttpLink } from 'apollo-link-http';
import fetch from 'isomorphic-unfetch';

const isProd = typeof window === 'undefined';

export const createApolloClient = (options = {}) => {
  const defalut = {
    ...options,
    cache: new InMemoryCache(),
    link: createHttpLink({
      uri: process.env.REACT_APP_GRAPHQL_ENDPOINT,
      fetch,
    }),
  };

  const client = new ApolloClient(
    isProd ? defalut : { ...defalut, connectToDevTools: true },
  );

  return client;
};
