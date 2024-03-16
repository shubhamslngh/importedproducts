// import { createApp, h, provide, render } from 'vue'
// import { ApolloClient, createHttpLink, InMemoryCache } from
// '@apollo/client/core'
// import { DefaultApolloClient } from '@vue/apollo-composable'
// // HTTP connection to the API
// const httpLink = createHttpLink({
//   // You should use an absolute URL here
//   uri: 'http://importedproducts/graphql',
// })
// const cache = new InMemoryCache()
// const apolloClient = new ApolloClient({
//   link: httpLink,
//   cache,
// })

// const app = createApp({
//   setup() {
//     provide(DefaultApolloClient,apolloClient)
//   },
//   render:()=>h(app)
// })
// app.mount(`app`);