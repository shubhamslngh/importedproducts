import{_ as f}from"./Welcome.vue.DU45NnJY.js";import{m as b}from"./entry.BpUTUskw.js";import{a as l,af as k,J as a,X as t,O as e,N as x,u as w,a3 as _,a4 as A,aa as C,ag as D,Y as i,a5 as S,a9 as z}from"./swiper-vue.7WXi4Gh3.js";import{a as B}from"./index.C0hHNWom.js";import"./index.BJx3_71y.js";import"./_plugin-vue_export-helper.DlAUqK2U.js";import"./Wrapper.6OWw7M3-.js";const I={class:"relative"},N={class:"mx-auto relative z-[-1] bg-auto hover: bg-origin-border p-2 bg-center mt-0 h-64 md:h-96 mb-20 lg:h-120",style:{"background-image":'url("https://importedproducts.in/wp-content/uploads/2024/02/pexels-darya-sannikova-2927585-scaled.jpg")'}},$={class:"mx-auto md:size-auto backdrop-blur-sm absolute inset-0 flex justify-center items-center"},j=e("div",null,null,-1),q={key:0,class:"mx-auto grid sm:grid-cols-1 grid-row-2 lg:grid-cols-3 md:grid-cols-2 gap-y-10 max-h-fit gap-x-2 mb-2"},F=["id","onClick"],P={class:"card-content"},T={class:"card-amount"},E={class:"card-amount-main"},Q={class:"card-duration"},V={class:"card-premium"},J={class:"card-description"},L={key:1},M={__name:"Subscription",props:["subscriptions"],async setup(p){let o,d;const g=l([]),m=l(null),u=l(null),h=B`
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
`,n=([o,d]=k(()=>b(h)),o=await o,d(),o);n&&(g.value=n),console.log(n,"graphsubscription");const v=c=>{u.value=u.value===c?null:c};return(c,O)=>{const y=f;return a(),t(_,null,[e("section",I,[e("div",N,[e("div",$,[x(y,{name:"Digital Subscriptions "})])])]),j,w(n)?(a(),t("div",q,[(a(!0),t(_,null,A(p.subscriptions,(s,r)=>(a(),t("div",{key:r},[e("div",{id:`card-${s.Name}`,class:S(["card w-[350px] shadow-2xl text-justify h-[200px] overflow-hidden bg-contain bg-center bg-no-repeat rounded-[5px]",{clicked:m.value===r}]),onClick:W=>v(r),style:z({backgroundImage:`url(${s.bgimg})`,backgroundColor:s.color})},[C(e("div",P,[e("div",T,[e("span",E,i(s.Price),1),e("span",Q,i(s.Duration),1)]),e("div",V,i(s.PlanType),1),e("div",J,i(s.AdditionalFeatures),1)],512),[[D,m.value!==r]])],14,F)]))),128))])):(a(),t("div",L," loading . . . "))],64)}}},Z=M;export{Z as default};
