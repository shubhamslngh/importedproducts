import{a as s,af as C,J as i,L as p,M as m,X as y,a3 as N,a4 as P,Z as V,Y as _,O as f,N as g,aj as S,ai as B}from"./swiper-vue.rgMx2r3g.js";import{_ as A}from"./AddtoCart.vue.INsA51ix.js";import{t as x}from"./entry.DfkASLd6.js";import{g as D}from"./cart.BsHtkLMz.js";import{_ as E}from"./_plugin-vue_export-helper.DlAUqK2U.js";import"./index.vue.BCHPfu4n.js";import"./nuxt-link.BPLddy8N.js";import"./use-counter.CQBFHTAj.js";import"./index.syWijFt_.js";const L=["src"],M={class:"grid text-wrap font-semibold hover:font-bold"},$={__name:"Colors",props:{productId:Number,variationId:Number},async setup(v){let e,n;const d=s([]),t=s([]),r=s([]),a=v,{mutate:I,loading:j}=x(D);try{console.log(a.productId,"this is props ");const{data:o}=([e,n]=C(()=>I({productId:a.productId})),e=await e,n(),e);console.log(o,"Product fetched "),o&&(d.value=o)}catch(o){console.error("Error fetching product to cart:",o)}const h=o=>{r.value=o,t.value=a.productId,console.log(t.value,"here is Product id"),console.log(r.value,"here is Variation id")};return(o,c)=>{const l=S,w=A,b=B;return i(),p(b,{effect:"cards",grabCursor:!0,modules:o.modules,class:"mySwiper grid"},{default:m(()=>[(i(!0),y(N,null,P(d.value.variableProduct.variations.nodes,(u,k)=>(i(),p(l,{flex:"","items-stretch":"",key:k,id:u.name},null,8,["id"]))),128)),V(" "+_(console.log(o.product.image.link,"here is img"))+" ",1),f("img",{onClick:c[0]||(c[0]=u=>h(o.product.databaseId)),src:o.product.image.link?o.product.image.link:"",alt:"Product Image",class:"transition-all ease-in-out"},null,8,L),g(l,null,{default:m(()=>[g(w,{productId:t.value,variationId:r.value},null,8,["productId","variationId"]),f("div",M,_(o.product.name),1)]),_:1})]),_:1},8,["modules"])}}},G=E($,[["__scopeId","data-v-fab8ba7e"]]);export{G as default};
