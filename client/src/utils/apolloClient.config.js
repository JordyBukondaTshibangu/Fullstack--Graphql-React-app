import { onError } from "@apollo/client/link/error";
import { ApolloClient, InMemoryCache, HttpLink, from } from '@apollo/client';


const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
      graphQLErrors.map(({ message, locations, path }) =>
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        )
      );
    if (networkError) console.log(`[Network error]: ${networkError}`);
  });


  
const link = from([
    errorLink,
    new HttpLink({
      uri : '/graphql'
    })
  ])

  
export  const client = new ApolloClient({
    link,
    cache: new InMemoryCache()
});