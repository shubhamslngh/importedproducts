import h from"./index.CRGphr4c.js";import b from"./Wrapper.DlSCnsyd.js";import{b as A,a as k}from"./entry.BX3CV9hu.js";import{j as S,a as I,k as u,J as l,L as v,M as i,N as B,O as r,X as m,a2 as w,a3 as L,u as P,a8 as T,Y as W}from"./swiper-vue.CoqLb3VA.js";const $={class:"flex-1 flex flex-col items-center justify-center"},N={class:"text-center mt-4"},j={class:"animated-text-fg"},F=S({__name:"Welcome",props:{withAlert:{type:Boolean,default:!0},name:{type:String},startColor:{type:Array,default:()=>["purple","red","green"]},endColor:{type:Array,default:()=>["white","green","blue"]}},setup(_){var n,s,c,p;const{awesome:t}=A();k().user;const e=_;I((s=(n=t==null?void 0:t.layout)==null?void 0:n.welcome)!=null&&s.disableInfoReplaceIndexInWelcomePage?!((p=(c=t==null?void 0:t.layout)==null?void 0:c.welcome)!=null&&p.disableInfoReplaceIndexInWelcomePage):e.withAlert);const a=u(()=>(e.name||"").replaceAll("&nbsp;","[space]").split(" ").map(d=>d.replaceAll("[space]"," "))),f=u(()=>[{text:a.value[0],startColor:e.startColor[0],endColor:e.endColor[0],delay:0},{text:a.value[1],startColor:e.startColor[1],endColor:e.endColor[1],delay:2},{text:a.value[2],startColor:e.startColor[2],endColor:e.endColor[2],delay:4}]);return(C,d)=>{const y=h,g=b;return l(),v(g,{class:"flex-1 relative z-[-1]"},{default:i(()=>[B(y,{class:"flex-1 flex"},{default:i(()=>[r("div",$,[r("h1",N,[(l(!0),m(w,null,L(P(f),(o,x)=>(l(),m("span",{key:x,style:T(`--content: '${o.text}'; --start-color: ${o.startColor}; --end-color: ${o.endColor}; --animation-name: anim-fg-${x+1}`),class:"animated-text-bg drop-shadow-xl text-6xl sm:text-8xl md:text-8xl lg:text-8xl 2xl:text-8xl block font-black uppercase"},[r("span",j,W(o.text),1)],4))),128))])])]),_:1})]),_:1})}}});export{F as _};
