import C from"./index.xRH6MBcC.js";import b from"./Wrapper.BBWl5nwe.js";import{b as k,a as S}from"./entry.qT_yumLZ.js";import{j as w,a as A,k as u,J as a,L as I,M as d,N as v,O as l,X as m,a3 as B,a4 as L,u as P,a9 as T,Y as W}from"./swiper-vue.D22jMib6.js";const $={class:"flex-1 flex flex-col items-center justify-center"},N={class:"text-center mt-4"},j={class:"animated-text-fg"},F=w({__name:"Welcome",props:{withAlert:{type:Boolean,default:!0},name:{type:String}},setup(_){var s,r,c,p;const{awesome:e}=k();S().user;const n=_;A((r=(s=e==null?void 0:e.layout)==null?void 0:s.welcome)!=null&&r.disableInfoReplaceIndexInWelcomePage?!((p=(c=e==null?void 0:e.layout)==null?void 0:c.welcome)!=null&&p.disableInfoReplaceIndexInWelcomePage):n.withAlert);const o=u(()=>(n.name||"").replaceAll("&nbsp;","[space]").split(" ").map(x=>x.replaceAll("[space]"," "))),f=u(()=>[{text:o.value[0],startColor:"purple",endColor:"white",delay:0},{text:o.value[1],startColor:"purple",endColor:"yellow",delay:2},{text:o.value[2],startColor:"purple",endColor:"yellow",delay:4}]);return(y,x)=>{const g=C,h=b;return a(),I(h,{class:"flex-1 relative z-[-1]"},{default:d(()=>[v(g,{class:"flex-1 flex"},{default:d(()=>[l("div",$,[l("h1",N,[(a(!0),m(B,null,L(P(f),(t,i)=>(a(),m("span",{key:i,style:T(`--content: '${t.text}'; --start-color: ${t.startColor}; --end-color: ${t.endColor}; --animation-name: anim-fg-${i+1}`),class:"animated-text-bg drop-shadow-xl text-6xl sm:text-8xl md:text-8xl lg:text-8xl 2xl:text-8xl block font-black uppercase"},[l("span",j,W(t.text),1)],4))),128))])])]),_:1})]),_:1})}}});export{F as _};
