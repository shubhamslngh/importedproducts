import { gql } from "@apollo/client/core";
import { setContext } from '@apollo/client/link/context';
  
export const AddCart = gql`
  mutation AddToCart($productId: Int!, $quantity: Int!, $variationId: Int!) {
    addToCart(input: {productId: $productId, quantity: $quantity, variationId: $variationId}) {
      clientMutationId
    }
  }
`;

export const getVariation = gql`
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
}`;

export const cartItem = gql`
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
}`
export const signup= gql`
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
`