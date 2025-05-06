import y from"./Variations.Dq2AVR9W.js";import{m as b}from"./entry.BpUTUskw.js";import{a as p,a1 as x,af as k,u,J as o,X as a,O as t,a3 as S,a4 as I,Y as m,Z as V,N as B,a2 as C,ah as N,_ as P,$ as E}from"./swiper-vue.7WXi4Gh3.js";import{a as O}from"./index.C0hHNWom.js";import{_ as z}from"./_plugin-vue_export-helper.DlAUqK2U.js";import"./cart.CeYy_5HS.js";import"./AddtoCart.vue.DMQWKHkn.js";import"./index.vue.UrbMs54x.js";import"./nuxt-link.BT7nebw_.js";import"./use-counter.gR8ZQKdN.js";const _=r=>(P("data-v-cfec4aea"),r=r(),E(),r),q={key:0,class:"swiper"},A=_(()=>t("h1",{class:"mx-auto mb-6 py-16 ml-10 text-center text-2xl sm:text-md font-bold"}," SELECT SHOES ",-1)),L={class:"swiper-wrapper"},M=["id"],Q=["onClick","src"],T={class:"grid text-wrap text-center text-[0.75rem]/5 font-MONO font-semibold hover:font-bold"},$={key:0,class:"swiper-container overscroll-auto focus:overscroll-contain grid m-5 mt-12"},j={key:1},D=_(()=>t("div",{class:"swiper-lazy-preloader swiper-lazy-preloader-black"},"Loading...",-1)),F=[D],H={__name:"Shoes",async setup(r){let n,d;const i=p(0),w=O`
  query MyQuery {
    products(where: { category: "vapes" }) {
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
`,h=()=>new N(".swiper",{slidesPerView:5,rewind:!0,spaceBetween:40,allowSlideNext:!0,autoplay:!0,loop:!0,resizeObserver:!0,grabCursor:!0,shortSwipes:!0,slideShadows:!1,breakpointsBase:window,pagination:{el:".swiper-pagination",type:"bullets",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{0:{slidesPerView:1,spaceBetween:10},630:{slidesPerView:3,spaceBetween:10},720:{slidesPerView:4,spaceBetween:10},1440:{slidesPerView:5,spaceBetween:40}}}),l=p([]);x(()=>{h()});const{data:c}=([n,d]=k(()=>b(w)),n=await n,d(),n);l.value=c._value.products.edges.map(e=>({name:e.node.name,img:e.node.image.link})),console.log(l.value,"shoes is obj");const v=e=>{i.value=e};return(e,J)=>{const g=y;return u(c).products.edges?(o(),a("div",q,[A,t("div",L,[(o(!0),a(S,null,I(u(c).products.edges,(s,f)=>(o(),a("div",{key:f,class:"swiper-slide",id:s.node.name},[t("div",null,[t("img",{onClick:X=>v(s.node.databaseId),src:s.node.image?s.node.image.link:"",alt:"Product Image",class:"transition-all ease-in-out"},null,8,Q),t("h3",T,m(s.node.name),1),i.value===s.node.databaseId?(o(),a("div",$,[V(m(console.log(i.value))+" ",1),B(g,{productId:i.value},null,8,["productId"])])):C("",!0)])],8,M))),128))])])):(o(),a("div",j,F))}}},oe=z(H,[["__scopeId","data-v-cfec4aea"]]);export{oe as default};
