import{_ as B}from"./nuxt-link.fyhVw3PU.js";import{_ as M}from"./index.vue.qD1Ghpee.js";import{i as x,j as N,o as u,g as s,w as g,a as p,B as k,t as b,l as n,H as h}from"./entry.Ds9AM2FV.js";function C(){return{parseMenuTitle:function(t){return typeof t=="function"?t(x()):t||""},parseMenuRoute:function(t){return typeof t=="function"?t(x()):t}}}const j=N({__name:"Item",props:{menu:{type:Object,required:!0},isDropdown:{type:Boolean,default:!1}},setup(e){const{parseMenuRoute:t,parseMenuTitle:r}=C();return(v,D)=>{var l,m,c,y,f,d;const i=B,w=M;return((l=e.menu)==null?void 0:l.type)==="link"&&e.isDropdown?(u(),s(i,{key:0,to:n(t)((m=e.menu)==null?void 0:m.to)},{default:g(({isActive:o})=>{var a;return[p("div",{class:k(["transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800 px-4 py-2 rounded-lg w-full",o?"text-gray-900 dark:text-gray-100 font-bold":"text-gray-700 dark:text-gray-300"])},b(n(r)((a=e.menu)==null?void 0:a.title)),3)]}),_:1},8,["to"])):((c=e.menu)==null?void 0:c.type)==="link"?(u(),s(i,{key:1,to:n(t)((y=e.menu)==null?void 0:y.to)},{default:g(({isActive:o})=>{var a;return[p("span",{class:k({"text-gray-900 dark:text-gray-100 font-bold":o,"text-gray-700 dark:text-gray-300":!o})},b(n(r)((a=e.menu)==null?void 0:a.title)),3)]}),_:1},8,["to"])):((f=e.menu)==null?void 0:f.type)==="button"?(u(),s(w,{key:2,text:n(r)((d=e.menu)==null?void 0:d.title),size:"xs",to:n(t)(e.menu.to)},null,8,["text","to"])):h("",!0)}}});export{j as _,C as u};
