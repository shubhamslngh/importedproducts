import { gql } from "graphql-tag";
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
export {
  AddCart as A,
  getVariation as g,
  signup as s
};
//# sourceMappingURL=cart-9njyDUNv.js.map
