import __nuxt_component_0 from './Signup-Cgi6ubkG.mjs';
import { f as useAuthStore } from './server.mjs';
import { gql } from 'graphql-tag';
import { useSSRContext } from 'vue';
import { ssrRenderAttr, ssrIncludeBooleanAttr, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './Welcome-CMP_Faun.mjs';
import './Wrapper-CSw0DXQZ.mjs';
import './index-CHg0DFwX.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'shiki/core';
import '@shikijs/transformers';
import 'unified';
import 'mdast-util-to-string';
import 'micromark';
import 'unist-util-stringify-position';
import 'micromark-util-character';
import 'micromark-util-chunked';
import 'micromark-util-resolve-all';
import 'micromark-util-sanitize-uri';
import 'slugify';
import 'remark-parse';
import 'remark-rehype';
import 'remark-mdc';
import 'hast-util-to-string';
import 'github-slugger';
import 'detab';
import 'remark-emoji';
import 'remark-gfm';
import 'rehype-external-links';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'ts-invariant';
import 'zen-observable-ts';
import '@wry/caches';
import '@vue/apollo-option';
import 'graphql';
import 'optimism';
import '@wry/equality';
import '@wry/trie';
import 'pinia-plugin-persistedstate';
import 'axios';
import './cart-9njyDUNv.mjs';

const ProductContentSlice = gql`
  fragment ProductContentSlice on Product {
    id
    databaseId
    name
    slug
    type
    image {
      id
      sourceUrl(size: WOOCOMMERCE_THUMBNAIL)
      altText
    }
    ... on SimpleProduct {
      price
      regularPrice
      soldIndividually
    }
    ... on VariableProduct {
      price
      regularPrice
      soldIndividually
    }
  }
`;
const ProductVariationContentSlice = gql`
  fragment ProductVariationContentSlice on ProductVariation {
    id
    databaseId
    name
    slug
    image {
      id
      sourceUrl(size: WOOCOMMERCE_THUMBNAIL)
      altText
    }
    price
    regularPrice
  }
`;
const ProductContentFull = gql`
  fragment ProductContentFull on Product {
    id
    databaseId
    slug
    name
    type
    description
    shortDescription(format: RAW)
    image {
      id
      sourceUrl
      altText
    }
    galleryImages {
      nodes {
        id
        sourceUrl(size: WOOCOMMERCE_THUMBNAIL)
        altText
      }
    }
    productTags(first: 20) {
      nodes {
        id
        slug
        name
      }
    }
    attributes {
      nodes {
        id
        attributeId
        ... on LocalProductAttribute {
          name
          options
          variation
        }
        ... on GlobalProductAttribute {
          name
          options
          variation
        }
      }
    }
    ... on SimpleProduct {
      onSale
      stockStatus
      price
      rawPrice: price(format: RAW)
      regularPrice
      salePrice
      stockStatus
      stockQuantity
      soldIndividually
    }
    ... on VariableProduct {
      onSale
      price
      rawPrice: price(format: RAW)
      regularPrice
      salePrice
      stockStatus
      stockQuantity
      soldIndividually
      variations(first: 50) {
        nodes {
          id
          databaseId
          name
          price
          rawPrice: price(format: RAW)
          regularPrice
          salePrice
          onSale
          attributes {
            nodes {
              name
              label
              value
            }
          }
        }
      }
    }
  }
`;
const VariationContent = gql`
  fragment VariationContent on ProductVariation {
    id
    name
    slug
    price
    regularPrice
    salePrice
    stockStatus
    stockQuantity
    onSale
    image {
      id
      sourceUrl
      altText
    }
  }
`;
const CartItemContent = gql`
  fragment CartItemContent on CartItem {
    key
    product {
      node {
        ...ProductContentSlice
      }
    }
    variation {
      node {
        ...ProductVariationContentSlice
      }
    }
    quantity
    total
    subtotal
    subtotalTax
    extraData {
      key
      value
    }
  }
  ${ProductContentSlice}
  ${ProductVariationContentSlice}
`;
const CartContent = gql`
  fragment CartContent on Cart {
    contents(first: 100) {
      itemCount
      nodes {
        ...CartItemContent
      }
    }
    appliedCoupons {
      code
      discountAmount
      discountTax
    }
    needsShippingAddress
    availableShippingMethods {
      packageDetails
      supportsShippingCalculator
      rates {
        id
        instanceId
        methodId
        label
        cost
      }
    }
    subtotal
    subtotalTax
    shippingTax
    shippingTotal
    total
    totalTax
    feeTax
    feeTotal
    discountTax
    discountTotal
  }
  ${CartItemContent}
`;
const AddressFields = gql`
  fragment AddressFields on CustomerAddress {
    firstName
    lastName
    company
    address1
    address2
    city
    state
    country
    postcode
    phone
  }
`;
const LineItemFields = gql`
  fragment LineItemFields on LineItem {
    databaseId
    product {
      node {
        ...ProductContentSlice
      }
    }
    orderId
    quantity
    subtotal
    total
    totalTax
  }
  ${ProductContentSlice}
`;
const OrderFields = gql`
  fragment OrderFields on Order {
    id
    databaseId
    orderNumber
    orderVersion
    status
    needsProcessing
    subtotal
    paymentMethodTitle
    total
    totalTax
    date
    dateCompleted
    datePaid
    billing {
      ...AddressFields
    }
    shipping {
      ...AddressFields
    }
    lineItems(first: 100) {
      nodes {
          ...LineItemFields
      }
    }
  }
  ${AddressFields}
  ${LineItemFields}
`;
const CustomerFields = gql`
  fragment CustomerFields on Customer {
    id
    databaseId
    firstName
    lastName
    displayName
    billing {
      ...AddressFields
    }
    shipping {
      ...AddressFields
    }
    orders(first: 100) {
      nodes {
        ...OrderFields
      } 
    }
  }
  ${AddressFields}
  ${OrderFields}
`;
const CustomerContent = gql`
  fragment CustomerContent on Customer {
    id
    sessionToken
  }
`;
gql`
  query GetProduct($id: ID!, $idType: ProductIdTypeEnum) {
    product(id: $id, idType: $idType) {
      ...ProductContentFull
    }
  }
  ${ProductContentFull}
`;
gql`
  query GetProductVariation($id: ID!) {
    productVariation(id: $id, idType: DATABASE_ID) {
      ...VariationContent
    }
  }
  ${VariationContent}
`;
gql`
  query GetCart($customerId: Int) {
    cart {
      ...CartContent
    }
    customer(customerId: $customerId) {
      ...CustomerContent
    }
  }
  ${CartContent}
  ${CustomerContent}
`;
gql`
  mutation AddToCart($productId: Int!, $variationId: Int, $quantity: Int, $extraData: String) {
    addToCart(
      input: {productId: $productId, variationId: $variationId, quantity: $quantity, extraData: $extraData}
    ) {
      cart {
        ...CartContent
      }
      cartItem {
        ...CartItemContent
      }
    }
  }
  ${CartContent}
  ${CartItemContent}
`;
gql`
  mutation UpdateCartItemQuantities($items: [CartItemQuantityInput]) {
    updateItemQuantities(input: {items: $items}) {
      cart {
        ...CartContent
      }
      items {
        ...CartItemContent
      }
    }
  }
  ${CartContent}
  ${CartItemContent}
`;
gql`
  mutation RemoveItemsFromCart($keys: [ID], $all: Boolean) {
    removeItemsFromCart(input: {keys: $keys, all: $all}) {
      cart {
        ...CartContent
      }
      cartItems {
        ...CartItemContent
      }
    }
  }
  ${CartContent}
  ${CartItemContent}
`;
const Login = gql`
  mutation Login($username: String!, $password: String!) {
    login(input: { username: $username, password: $password }) {
      authToken
      refreshToken
      customer {
        ...CustomerFields
      }
    }
  }
  ${CustomerFields}
`;
gql`
  mutation UpdateCustomer($input: UpdateCustomerInput!) {
    updateCustomer(input: $input) {
      customer {
        ...CustomerFields
      }
    }
  }
  ${CustomerFields}
`;
const _sfc_main = {
  data() {
    return {
      isSignUpVisible: false,
      username: "",
      password: "",
      isLoading: false,
      errors: null
    };
  },
  methods: {
    async signin() {
      this.isLoading = true;
      try {
        const { data } = await this.$apollo.mutate({
          mutation: Login,
          variables: {
            input: {
              provider: "PASSWORD",
              credentials: {
                username: this.username,
                password: this.password
              }
            }
          }
        });
        const authStore = useAuthStore();
        const { authToken, refreshToken, user } = data.login;
        sessionStorage.setItem("authToken", authToken);
        sessionStorage.setItem("refreshToken", refreshToken);
        sessionStorage.setItem("username", user.username);
        authStore.setUser(user.username);
        authStore.setToken(authToken);
        authStore.setRToken(refreshToken);
        await this.$router.push("/");
      } catch (error) {
        console.error("Login failed:", error.message);
        this.errors = error.message;
      } finally {
        this.isLoading = false;
      }
    },
    showSignUp() {
      this.isSignUpVisible = true;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_AwesomeSignup = __nuxt_component_0;
  _push(`<!--[--><div class="login-container" data-v-2e90d5ca><form class="login-form" data-v-2e90d5ca><div class="form-group" data-v-2e90d5ca><input type="text"${ssrRenderAttr("value", $data.username)} placeholder="Username or Email" autocomplete="email" class="form-control" data-v-2e90d5ca></div><div class="form-group" data-v-2e90d5ca><input type="password"${ssrRenderAttr("value", $data.password)} autocomplete="current-password" placeholder="Password" class="form-control" data-v-2e90d5ca></div><div class="grid gap-4" data-v-2e90d5ca><button type="submit"${ssrIncludeBooleanAttr($data.isLoading) ? " disabled" : ""} class="btn btn-primary" data-v-2e90d5ca> Sign in </button>`);
  if ($data.errors) {
    _push(`<div class="error-message" data-v-2e90d5ca>${ssrInterpolate($data.errors)}</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></form><div class="grid mt-4 gap-4" data-v-2e90d5ca><h1 class="text-center text-2xl" data-v-2e90d5ca>or</h1><button class="btn btn-secondary" data-v-2e90d5ca>New User</button></div></div><div class="mx-auto mt-6" data-v-2e90d5ca>`);
  if ($data.isSignUpVisible) {
    _push(ssrRenderComponent(_component_AwesomeSignup, null, null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`</div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/awesome/Login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-2e90d5ca"]]);

export { __nuxt_component_2 as default };
//# sourceMappingURL=Login-D89_h1sz.mjs.map
