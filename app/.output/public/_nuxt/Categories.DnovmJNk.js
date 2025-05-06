import{a as b}from"./index.C0hHNWom.js";import{E as v}from"./entry.BpUTUskw.js";import{_ as y}from"./_plugin-vue_export-helper.DlAUqK2U.js";import{a as c,a1 as k,J as n,X as d,O as r,a3 as w,a4 as C,a5 as E,Y as g,_ as S,$ as I}from"./swiper-vue.7WXi4Gh3.js";const T=t=>(S("data-v-de1dcd8b"),t=t(),I(),t),q={class:"p-6 bg-gray-50 dark:bg-transparent rounded-lg shadow-inner"},A=T(()=>r("h2",{class:"text-2xl font-bold text-gray-800 dark:text-red-100 mb-6 text-center w-full"}," Whatever you need, we got it! ",-1)),G={class:"flex overflow-x-auto gap-4 pb-2"},B=["onClick"],O={class:"w-14 h-14 rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 flex items-center justify-center mb-3 text-2xl font-semibold"},R={class:"text-center text-sm font-medium tracking-wide"},$={__name:"Categories",emits:["categorySelected"],setup(t,{emit:u}){const m=u,o=c([]),s=c(null),p=b`
  query GET_CATEGORIES {
    productCategories(first: 200, where: { hideEmpty: true, parent: null }) {
      edges {
        node {
          name
          image {
            altText
            link
          }
        }
      }
    }
  }
`,_=v().client,h=async()=>{try{const{data:e}=await _.query({query:p});o.value=e.productCategories.edges.map(i=>i.node)}catch(e){console.error("Error fetching categories:",e)}o.value.length>0&&(s.value=o.value[0].name)},f=e=>{s.value=e,m("categorySelected",e)};return k(()=>{h()}),(e,i)=>(n(),d("div",q,[A,r("div",G,[(n(!0),d(w,null,C(o.value,(a,x)=>{var l;return n(),d("div",{key:x,onClick:j=>f(a),class:E([["cursor-pointer transform transition-all duration-300 ease-in-out shrink-0",((l=s.value)==null?void 0:l.name)===a.name?"bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg scale-105":"bg-white dark:bg-gray-800 hover:bg-indigo-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 hover:scale-105"],"flex flex-col items-center p-4 w-36 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700"])},[r("div",O,g(a.name.charAt(0).toUpperCase()),1),r("span",R,g(a.name),1)],10,B)}),128))])]))}},L=y($,[["__scopeId","data-v-de1dcd8b"]]);export{L as default};
