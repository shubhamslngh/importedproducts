import { gql } from "@apollo/client/core";

export const AddCart = gql`
  mutation AddToCart($productId: Int!, $quantity: Int!, $variationId: Int!) {
    addToCart(input: {productId: $productId, quantity: $quantity, variationId: $variationId}) {
      clientMutationId
    }
  }
`;

export const getVariation = gql`
query MyQuery ($productId: ID!){
  variableProduct(id: $productId, idType: DATABASE_ID) {
    productId
    variations {
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
