import{_ as y}from"./Welcome.vue.DU45NnJY.js";import f from"./Variations.Dq2AVR9W.js";import{a as h,b,a1 as k,ah as x,u as d,J as s,X as o,N as l,O as a,a3 as I,a4 as V,Y as p,Z as B,a2 as P,_ as C,$ as S}from"./swiper-vue.7WXi4Gh3.js";import{a as N}from"./index.C0hHNWom.js";import{F as $}from"./entry.BpUTUskw.js";import{_ as q}from"./_plugin-vue_export-helper.DlAUqK2U.js";import"./index.BJx3_71y.js";import"./Wrapper.6OWw7M3-.js";import"./cart.CeYy_5HS.js";import"./AddtoCart.vue.DMQWKHkn.js";import"./index.vue.UrbMs54x.js";import"./nuxt-link.BT7nebw_.js";import"./use-counter.gR8ZQKdN.js";const O=e=>(C("data-v-53158188"),e=e(),S(),e),z={key:0,class:"swiper"},E={class:"swiper-wrapper"},A=["id"],F=["onClick","src"],L={class:"grid text-wrap text-center text-[0.75rem]/5 font-MONO font-semibold hover:font-bold"},M={key:0,class:"swiper-container overscroll-auto focus:overscroll-contain grid m-5 mt-12"},D={key:1},G=O(()=>a("div",{class:"swiper-lazy-preloader swiper-lazy-preloader-black"},"Loading...",-1)),J=[G],Q={__name:"Cases",props:{category:{type:String,required:!0,default:"Cases"}},setup(e){const i=e,r=h(0),m=N`
  query GetProducts($category: String!) {
    products(where: { category: $category }) {
      edges {
        node {
          image {
            link
          }
          name
          id
          databaseId
        }
      }
    }
  }
`,{result:c,refetch:u}=$(m,()=>({category:i.category}));b(()=>i.category,n=>{n&&u()}),k(()=>{new x(".swiper",{slidesPerView:5,rewind:!0,spaceBetween:40,autoplay:!0,loop:!0,resizeObserver:!0,grabCursor:!0,pagination:{el:".swiper-pagination",type:"bullets",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{0:{slidesPerView:1,spaceBetween:10},630:{slidesPerView:3,spaceBetween:10},720:{slidesPerView:4,spaceBetween:10},1440:{slidesPerView:5,spaceBetween:40}}})});const _=n=>{r.value=n};return(n,T)=>{const w=y,g=f;return d(c).products.edges?(s(),o("div",z,[l(w,{name:e.category,class:"text-sm"},null,8,["name"]),a("div",E,[(s(!0),o(I,null,V(d(c).products.edges,(t,v)=>(s(),o("div",{key:v,class:"swiper-slide",id:t.node.name},[a("div",null,[a("img",{onClick:W=>_(t.node.databaseId),src:t.node.image?t.node.image.link:"",alt:"Product Image",class:"transition-all ease-in-out"},null,8,F),a("h3",L,p(t.node.name),1),r.value===t.node.databaseId?(s(),o("div",M,[B(p(console.log(r.value))+" ",1),l(g,{productId:r.value},null,8,["productId"])])):P("",!0)])],8,A))),128))])])):(s(),o("div",D,J))}}},re=q(Q,[["__scopeId","data-v-53158188"]]);export{re as default};
