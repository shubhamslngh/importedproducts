import{j as B,ac as w,r as m,k as s,J as a,X as l,u as e,a5 as r,a7 as p,a1 as c,O as g,aa as _,al as C,x as E}from"./swiper-vue.rgMx2r3g.js";import{u as P}from"./use-sync-props.DdbdWK5t.js";const D={class:r("text-input-container relative flex")},N={class:"text-input-wrapper relative flex flex-1"},O=["type","placeholder"],H=B({__name:"TextInput",props:{modelValue:{type:String,default:""},placeholder:{type:String,default:""},size:{type:String,default:"md"},type:{type:String,default:"default"}},emits:["update:modelValue"],setup(d,{emit:S}){const n=d,b=S,t=w(),f=m({xs:"px-1 py-0.5",sm:"px-2 py-1.5",md:"px-4 py-2",lg:"px-5 py-3"}),x=m({xs:"text-xs",sm:"text-sm",md:"text-base",lg:"text-lg"}),i=P(n,"modelValue",b),v=s(()=>typeof t.prefix<"u"||typeof t["prefix-disabled"]<"u"),$=s(()=>typeof t.suffix<"u"),o=s(()=>"border-gray-900/10 dark:border-gray-50/[0.2]"),h=s(()=>"dark:focus:border-white focus:border-gray-900"),k=s(()=>f[n.size]||f.md),V=s(()=>x[n.size]||x.md);return(u,y)=>(a(),l("div",D,[e(t)["prefix-disabled"]?(a(),l("div",{key:0,class:r(`duration-300 transition-colors flex rounded-l bg-gray-100 dark:bg-gray-800 text-gray-500 border ${e(o)}`)},[p(u.$slots,"prefix-disabled")],2)):c("",!0),e(t).prefix?(a(),l("div",{key:1,class:r(`flex rounded-l border ${e(o)}`)},[p(u.$slots,"prefix")],2)):c("",!0),g("div",N,[_(g("input",{"onUpdate:modelValue":y[0]||(y[0]=z=>E(i)?i.value=z:null),class:r(`duration-300 transition-colors text-input w-full flex-1 bg-transparent outline-none border ${e(v)?"":"rounded-l"} ${e($)?"":"rounded-r"} ${e(o)} ${e(h)} ${e(k)} ${e(V)}`),type:d.type,placeholder:d.placeholder},null,10,O),[[C,e(i)]])]),e(t).suffix?(a(),l("div",{key:2,class:r(`flex rounded-r border ${e(o)}`)},[p(u.$slots,"suffix")],2)):c("",!0)]))}});export{H as _};