import{g as t}from"./index.C0hHNWom.js";const e=t`
  mutation AddToCart($productId: Int!, $quantity: Int!, $variationId: Int!) {
    addToCart(input: {productId: $productId, quantity: $quantity, variationId: $variationId}) {
      clientMutationId
    }
  }
`,i=t`
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
}`,r=t`
query cartitem {
cart(recalculateTotals: true) {
    total
    isEmpty
    contents {
      nodes {
        quantity
        subtotal
        variation {
          node {
            id
            image {
              link
              parentDatabaseId
            }
            name
            regularPrice
            price
            databaseId
            stockQuantity
            stockStatus
          }
        }
      }
    }
    shippingTotal
    appliedCoupons {
      code
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
`;export{e as A,r as c,i as g,n as s};
