import { InMemoryCache, ApolloClient } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://graphql-pokeapi.graphcdn.app',
  cache: new InMemoryCache()
});
