import i from"./Wrapper.BBWl5nwe.js";import{_ as m}from"./index.vue.DTmo-BvR.js";import{j as _,k as d,J as u,L as f,M as x,O as t,Y as n,u as s,N as h,a5 as b,U as g}from"./swiper-vue.D22jMib6.js";const k={class:"text-center mb-6 leading-3"},w={class:"font-bold text-8xl block"},B={class:"block italic"},U=_({__name:"Error",props:{code:{type:Number,default:400},wrap:{type:Boolean,default:!1}},setup(r){const c=i,e=r,p={400:"Bad Request",401:"Unauthorized",403:"Forbidden",404:"Not Found"},a=d(()=>{const{code:o}=e;return{code:o,message:p[o.toString()]||"Unknown Error"}});return(o,y)=>{const l=m;return u(),f(g(e.wrap?s(c):"div"),{class:b(e.wrap?"flex flex-col items-center justify-center":"")},{default:x(()=>[t("h1",k,[t("span",w,n(s(a).code),1),t("span",B,n(s(a).message),1)]),h(l,{text:"Home",to:"/",size:"sm"})]),_:1},8,["class"])}}});export{U as _};
