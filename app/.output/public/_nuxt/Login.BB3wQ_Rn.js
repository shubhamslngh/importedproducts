import b from"./Signup.C10ESoGv.js";import{a as h}from"./entry.DfkASLd6.js";import{g as t}from"./index.syWijFt_.js";import{J as c,X as m,O as o,a6 as $,aa as p,ab as g,Y as P,a1 as C,L as T,a3 as _,_ as v,$ as k}from"./swiper-vue.rgMx2r3g.js";import{_ as x}from"./_plugin-vue_export-helper.DlAUqK2U.js";import"./Welcome.vue.DbYvM6bi.js";import"./index.G3_9Yi9X.js";import"./Wrapper.DTM7bKbW.js";import"./cart.BsHtkLMz.js";const I=t`
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
`,A=t`
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
`,w=t`
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
`,F=t`
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
`,i=t`
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
  ${I}
  ${A}
`,d=t`
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
  ${i}
`,f=t`
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
`,U=t`
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
  ${I}
`,V=t`
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
  ${f}
  ${U}
`,S=t`
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
  ${f}
  ${V}
`,L=t`
  fragment CustomerContent on Customer {
    id
    sessionToken
  }
`;t`
  query GetProduct($id: ID!, $idType: ProductIdTypeEnum) {
    product(id: $id, idType: $idType) {
      ...ProductContentFull
    }
  }
  ${w}
`;t`
  query GetProductVariation($id: ID!) {
    productVariation(id: $id, idType: DATABASE_ID) {
      ...VariationContent
    }
  }
  ${F}
`;t`
  query GetCart($customerId: Int) {
    cart {
      ...CartContent
    }
    customer(customerId: $customerId) {
      ...CustomerContent
    }
  }
  ${d}
  ${L}
`;t`
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
  ${d}
  ${i}
`;t`
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
  ${d}
  ${i}
`;t`
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
  ${d}
  ${i}
`;const O=t`
  mutation Login($username: String!, $password: String!) {
    login(input: { username: $username, password: $password }) {
      authToken
      refreshToken
      customer {
        ...CustomerFields
      }
    }
  }
  ${S}
`;t`
  mutation UpdateCustomer($input: UpdateCustomerInput!) {
    updateCustomer(input: $input) {
      customer {
        ...CustomerFields
      }
    }
  }
  ${S}
`;const D={data(){return{isSignUpVisible:!1,username:"",password:"",isLoading:!1,errors:null}},methods:{async signin(){this.isLoading=!0;try{const{data:s}=await this.$apollo.mutate({mutation:O,variables:{input:{provider:"PASSWORD",credentials:{username:this.username,password:this.password}}}}),e=h(),{authToken:l,refreshToken:u,user:a}=s.login;sessionStorage.setItem("authToken",l),sessionStorage.setItem("refreshToken",u),sessionStorage.setItem("username",a.username),e.setUser(a.username),e.setToken(l),e.setRToken(u),await this.$router.push("/")}catch(s){console.error("Login failed:",s.message),this.errors=s.message}finally{this.isLoading=!1}},showSignUp(){this.isSignUpVisible=!0}}},M=s=>(v("data-v-2e90d5ca"),s=s(),k(),s),N={class:"login-container"},E={class:"form-group"},R={class:"form-group"},q={class:"grid gap-4"},B=["disabled"],W={key:0,class:"error-message"},Q={class:"grid mt-4 gap-4"},G=M(()=>o("h1",{class:"text-center text-2xl"},"or",-1)),z={class:"mx-auto mt-6"};function H(s,e,l,u,a,n){const y=b;return c(),m(_,null,[o("div",N,[o("form",{onSubmit:e[3]||(e[3]=$((...r)=>s.handleSubmit&&s.handleSubmit(...r),["prevent"])),class:"login-form"},[o("div",E,[p(o("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=r=>a.username=r),placeholder:"Username or Email",autocomplete:"email",class:"form-control"},null,512),[[g,a.username]])]),o("div",R,[p(o("input",{type:"password","onUpdate:modelValue":e[1]||(e[1]=r=>a.password=r),autocomplete:"current-password",placeholder:"Password",class:"form-control"},null,512),[[g,a.password]])]),o("div",q,[o("button",{type:"submit",onClick:e[2]||(e[2]=(...r)=>n.signin&&n.signin(...r)),disabled:a.isLoading,class:"btn btn-primary"}," Sign in ",8,B),a.errors?(c(),m("div",W,P(a.errors),1)):C("",!0)])],32),o("div",Q,[G,o("button",{onClick:e[4]||(e[4]=(...r)=>n.showSignUp&&n.showSignUp(...r)),class:"btn btn-secondary"},"New User")])]),o("div",z,[a.isSignUpVisible?(c(),T(y,{key:0})):C("",!0)])],64)}const st=x(D,[["render",H],["__scopeId","data-v-2e90d5ca"]]);export{st as default};
