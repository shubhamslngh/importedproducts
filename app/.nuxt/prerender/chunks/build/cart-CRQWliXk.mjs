import { gql } from 'file:///Users/shubhamsingh/namma/importedProds/node_modules/graphql-tag/main.js';

const AddCart = gql`
  mutation AddToCart($productId: Int!, $quantity: Int!, $variationId: Int!) {
    addToCart(input: {productId: $productId, quantity: $quantity, variationId: $variationId}) {
      clientMutationId
    }
  }
`;
const getVariation = gql`
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
gql`
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
}`;
const signup = gql`
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
`;

export { AddCart as A, getVariation as g, signup as s };
//# sourceMappingURL=cart-CRQWliXk.mjs.map
