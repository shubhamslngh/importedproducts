import k from"./Variations.Dtmd3mff.js";import{m as x}from"./entry.DCiS_UJw.js";import"./cart.Be5c3_UN.js";import{a as p,a2 as y,af as I,u as m,J as i,X as r,O as t,a3 as b,a4 as S,Y as _,Z as V,N as B,a1 as u,ah as C,_ as P,$ as A}from"./swiper-vue.rgMx2r3g.js";import{a as N}from"./index.DW5EPGft.js";import{_ as E}from"./_plugin-vue_export-helper.DlAUqK2U.js";import"./AddtoCart.vue.CKD5C-S0.js";import"./index.vue.DiolXAiI.js";import"./nuxt-link.tc8Wjj3S.js";import"./use-counter.CnkPXxiH.js";const M=a=>(P("data-v-281c36fd"),a=a(),A(),a),O={key:0,class:"swiper"},q=M(()=>t("h1",{class:"mb-10 text-center text-2xl font-bold"},"IPHONE MAGSAFE COMPATIBLE CASES",-1)),F={class:"swiper-wrapper"},L=["id"],Q=["onClick","src"],T={class:"grid text-wrap text-center text-[0.75rem]/5 font-MONO font-semibold hover:font-bold"},$={key:0,class:"swiper-container grid m-5 mt-12"},j={__name:"Cases",async setup(a){let o,d;const n=p(0),w=N`
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
`,g=()=>new C(".swiper",{slidesPerView:5,spaceBetween:40,pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{420:{slidesPerView:1,spaceBetween:20},720:{slidesPerView:5,spaceBetween:10},1440:{slidesPerView:5,spaceBetween:40}}}),l=p([]);y(()=>{g()});const{data:c}=([o,d]=I(()=>x(w)),o=await o,d(),o);l.value=c._value.products.edges.map(e=>({name:e.node.name,img:e.node.image.link})),console.log(l.value,"cases is obj");const f=e=>{n.value=e};return(e,z)=>{const h=k;return m(c)?(i(),r("div",O,[q,t("div",F,[(i(!0),r(b,null,S(m(c).products.edges,(s,v)=>(i(),r("div",{key:v,class:"swiper-slide",id:s.node.name},[t("div",null,[t("img",{onClick:D=>f(s.node.databaseId),src:s.node.image?s.node.image.link:"",alt:"Product Image",class:"transition-all ease-in-out"},null,8,Q),t("h3",T,_(s.node.name),1),n.value===s.node.databaseId?(i(),r("div",$,[V(_(console.log(n.value))+" ",1),B(h,{productId:n.value},null,8,["productId"])])):u("",!0)])],8,L))),128))])])):u("",!0)}}},ee=E(j,[["__scopeId","data-v-281c36fd"]]);export{ee as default};
