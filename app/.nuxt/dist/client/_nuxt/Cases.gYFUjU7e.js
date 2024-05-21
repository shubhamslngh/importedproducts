import f from"./Variations.C0TVj4py.js";import{m as y}from"./entry.DfkASLd6.js";import{a as p,a2 as x,af as k,u,J as a,X as o,O as t,a3 as S,a4 as I,Y as _,Z as V,N as B,a1 as C,ah as N,_ as P,$ as E}from"./swiper-vue.rgMx2r3g.js";import{a as z}from"./index.syWijFt_.js";import{_ as A}from"./_plugin-vue_export-helper.DlAUqK2U.js";import"./cart.BsHtkLMz.js";import"./AddtoCart.vue.INsA51ix.js";import"./index.vue.BCHPfu4n.js";import"./nuxt-link.BPLddy8N.js";import"./use-counter.CQBFHTAj.js";const m=r=>(P("data-v-2bafa2a1"),r=r(),E(),r),O={key:0,class:"swiper"},q=m(()=>t("h1",{class:"mx-auto mb-6 py-16 ml-10 text-center text-2xl sm:text-md font-bold"}," SELECT CASES ",-1)),L={class:"swiper-wrapper"},M=["id"],Q=["onClick","src"],T={class:"grid text-wrap text-center text-[0.75rem]/5 font-MONO font-semibold hover:font-bold"},$={key:0,class:"swiper-container overscroll-auto focus:overscroll-contain grid m-5 mt-12"},j={key:1},D=m(()=>t("div",{class:"swiper-lazy-preloader swiper-lazy-preloader-black"},"Loading...",-1)),F=[D],J={__name:"Cases",async setup(r){let n,d;const i=p(0),w=z`
  query MyQuery {
    products(where: { category: "cases" }) {
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
`,v=()=>new N(".swiper",{slidesPerView:5,rewind:!0,spaceBetween:40,allowSlideNext:!0,autoplay:!0,loop:!0,resizeObserver:!0,grabCursor:!0,shortSwipes:!0,slideShadows:!1,breakpointsBase:window,pagination:{el:".swiper-pagination",type:"bullets",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{0:{slidesPerView:1,spaceBetween:10},630:{slidesPerView:3,spaceBetween:10},720:{slidesPerView:4,spaceBetween:10},1440:{slidesPerView:5,spaceBetween:40}}}),l=p([]);x(()=>{v()});const{data:c}=([n,d]=k(()=>y(w)),n=await n,d(),n);l.value=c._value.products.edges.map(e=>({name:e.node.name,img:e.node.image.link})),console.log(l.value,"cases is obj");const g=e=>{i.value=e};return(e,X)=>{const h=f;return u(c).products.edges?(a(),o("div",O,[q,t("div",L,[(a(!0),o(S,null,I(u(c).products.edges,(s,b)=>(a(),o("div",{key:b,class:"swiper-slide",id:s.node.name},[t("div",null,[t("img",{onClick:Y=>g(s.node.databaseId),src:s.node.image?s.node.image.link:"",alt:"Product Image",class:"transition-all ease-in-out"},null,8,Q),t("h3",T,_(s.node.name),1),i.value===s.node.databaseId?(a(),o("div",$,[V(_(console.log(i.value))+" ",1),B(h,{productId:i.value},null,8,["productId"])])):C("",!0)])],8,M))),128))])])):(a(),o("div",j,F))}}},ae=A(J,[["__scopeId","data-v-2bafa2a1"]]);export{ae as default};
