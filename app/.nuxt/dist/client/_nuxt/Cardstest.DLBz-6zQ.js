import{a as d,ai as u,aj as m,a2 as g,ak as y,J as o,L as c,M as l,X as h,a3 as k,a4 as w,a9 as b,O as i}from"./swiper-vue.rgMx2r3g.js";import{F as v}from"./entry.CALOBUSs.js";import{a as S}from"./index.DkrarE4L.js";import{_ as x}from"./_plugin-vue_export-helper.DlAUqK2U.js";d(0);const B={components:{Swiper:u,SwiperSlide:m},setup(){const a=d([]),r=async()=>{const n=S`
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
      `,e=v(n);console.log(e.result,"hi here is dfata"),e&&(a.value=e.result._value.products.edges.map(s=>({name:s.node.name,img:s.node.image.link})),console.log(a.value,"hi here is object"))};return g(()=>{r()}),{modules:[y],products:a}}},C={class:"bg-transparent"},q=["src"];function I(a,r,n,e,s,M){const p=m,_=u;return o(),c(_,{effect:"cards",grabCursor:!0,modules:e.modules,loop:!0,class:"mySwiper"},{default:l(()=>[(o(!0),h(k,null,w(e.products,(t,f)=>(o(),c(p,{key:f,style:b({"background-image":`url(${t.img})`})},{default:l(()=>[i("div",C,[i("img",{src:t.img?t.img:"",alt:"Product Image",class:"bg-transparent transition-all ease-in-out"},null,8,q)])]),_:2},1032,["style"]))),128))]),_:1},8,["modules"])}const L=x(B,[["render",I],["__scopeId","data-v-9f9c5d58"]]);export{L as default};
