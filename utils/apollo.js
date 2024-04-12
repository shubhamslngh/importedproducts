// import ApolloClient from "apollo-client";
// import { HttpLink } from "apollo-link-http";
// import { ApolloLink, concat } from "apollo-link";
// import { InMemoryCache } from "apollo-cache-inmemory";
// import { getMainDefinition } from "apollo-utilities";

// const httpLink = new HttpLink({ uri: process.env.VUE_APP_API_TARGET });

// const authMiddleware = new ApolloLink((operation, forward) => {
//   // add the authorization to the headers
// const token = localStorage.getItem('token');
//   operation.setContext({
//     headers: {
//       authorization: token ? `Bearer ${token}` : "",
//     },
//   });
//   return forward(operation);
// });
// export const apolloClient = new ApolloClient({
//   link: concat(authMiddleware, httpLink),
//   cache: new InMemoryCache(),
// });