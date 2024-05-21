import{_ as b}from"./Welcome.vue.DxcTFbtL.js";import{m as f}from"./entry.BX3CV9hu.js";import{a as i,af as x,J as c,X as l,O as e,N as k,a2 as _,a3 as w,a4 as A,a8 as C,aa as D,ag as S,Y as o}from"./swiper-vue.CoqLb3VA.js";import{a as B}from"./index.JHvMOnFO.js";import"./index.CRGphr4c.js";import"./_plugin-vue_export-helper.DlAUqK2U.js";import"./Wrapper.DlSCnsyd.js";const I={class:"relative"},N={class:"relative z-[-1] bg-auto hover: bg-origin-border p-2 bg-center mt-6 h-64 md:h-96 mb-20 lg:h-120",style:{"background-image":'url("https://importedproducts.in/wp-content/uploads/2024/02/pexels-darya-sannikova-2927585-scaled.jpg")'}},$={class:"xl:text-6xl backdrop-blur-sm absolute inset-0 flex justify-center items-center"},j=e("div",null,null,-1),q=e("div",null,null,-1),z={class:"mx-auto grid grid-cols- grid-row-2 lg:grid-cols-3 md:grid-cols-2 gap-y-10 max-h-fit gap-x-10 mb-5"},F=["id","onClick"],P={class:"card-content"},T={class:"card-amount"},E={class:"card-amount-main"},Q={class:"card-duration"},V={class:"card-premium"},J={class:"card-description"},L={__name:"Subscription",props:["subscriptions"],async setup(p){let t,d;const g=i([]),m=i(null),u=i(null),h=B`
  query MyQuery2 {
    variableProduct(id: "8192", idType: DATABASE_ID) {
      id
      variations(first: 10) {
        edges {
          node {
            id
            name
            image {
              link
            }
          }
        }
      }
    }
  }
`,n=([t,d]=x(()=>f(h)),t=await t,d(),t);n&&(g.value=n),console.log(n,"graphsubscription");const v=r=>{u.value=u.value===r?null:r};return(r,M)=>{const y=b;return c(),l(_,null,[e("section",I,[e("div",N,[e("div",$,[k(y,{name:"Digital Subscriptions "})])])]),j,q,e("div",z,[(c(!0),l(_,null,w(p.subscriptions,(s,a)=>(c(),l("div",{key:a},[e("div",{id:`card-${s.Name}`,class:A(["card w-[350px] shadow-2xl text-justify h-[200px] overflow-hidden bg-contain bg-center bg-no-repeat rounded-[5px]",{clicked:m.value===a}]),onClick:O=>v(a),style:C({backgroundImage:`url(${s.bgimg})`,backgroundColor:s.color})},[D(e("div",P,[e("div",T,[e("span",E,o(s.Price),1),e("span",Q,o(s.Duration),1)]),e("div",V,o(s.PlanType),1),e("div",J,o(s.AdditionalFeatures),1)],512),[[S,m.value!==a]])],14,F)]))),128))])],64)}}},U=L;export{U as default};
