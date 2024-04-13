import{a as t}from"./index.B-KRl87F.js";const e=t`
  mutation AddToCart($productId: Int!, $quantity: Int!, $variationId: Int!) {
    addToCart(input: {productId: $productId, quantity: $quantity, variationId: $variationId}) {
      clientMutationId
    }
  }
`,r=t`
query MyQuery ($productId: ID!){
  variableProduct( id: $productId, idType: DATABASE_ID) {
    productId
    variations(first: 100){
      nodes {
        databaseId
        image {
          link
        }
        name
        price
        attributes {
          nodes {
            value
            label
            id
          }
        }
      }
    }
  }
}`,i=t`
query NewQuery {
  cart {
    total
    isEmpty
    contents {
      nodes {
        product {
          node {
            image {
              link
            }
            name
          }
        }
      }
    }
  }
}`,n=t`
mutation signup {
    createUser(
    input: {username: "", lastName: "", firstName: "", email: "", password: ""}
  ) {
    user {
      auth {
        authToken
        refreshToken
      }
    }
  }
}
`;export{e as A,i as c,r as g,n as s};
