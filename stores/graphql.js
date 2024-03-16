
// // import { useQuery } from "@vue/apollo-composable";
// import gql from "graphql-tag";
// // import { provideApolloClient } from "@vue/apollo-composable";
// // import { defaultClient } from "@vue/apollo-composable";

// // provideApolloClient(defaultClient);
// export const query = gql`
//   query getShips($limit: Int!) {
//     ships(limit: $limit) {
//       id
//       name
//     }
//   }
// `
// const variables = { limit: 5 }
// const { data } = await useAsyncQuery(query, variables)