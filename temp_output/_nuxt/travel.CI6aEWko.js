import{_ as w}from"./Title.vue.BclRMCyS.js";import N from"./Header.xTXP1l_h.js";import{_ as v}from"./Title.vue.DcTKYNlv.js";import{_ as C}from"./index.vue.BzhQHr3C.js";import{_ as h}from"./TextInput.vue.QOc9O-ne.js";import z from"./index.CRGphr4c.js";import k from"./Wrapper.DlSCnsyd.js";import{u as g}from"./use-counter.DTw1Ni_j.js";import{d as V,u as L}from"./entry.BX3CV9hu.js";import{j as P,J as T,L as $,M as r,N as e,O as s,Y as d,u as t,a5 as l}from"./swiper-vue.CoqLb3VA.js";import"./_plugin-vue_export-helper.DlAUqK2U.js";import"./nuxt-link.CF0EZYJm.js";import"./use-sync-props.Ci0SA2wZ.js";const b=V("identity",{state:()=>({firstName:"Alfian",lastName:"Dwi"}),actions:{setFirstName(i){this.firstName=i},setLastName(i){this.lastName=i},reset(){this.firstName="Alfian",this.lastName="Dwi"}},getters:{fullName(){return`${this.firstName} ${this.lastName}`}}}),S={class:"mb-6"},A={class:"mb-2"},B={class:"flex flex-col items-center justify-items-center space-y-2 md:space-y-0 md:flex-row md:space-x-2"},D={class:"mb-6"},F={class:"mb-2"},j=s("span",{class:"capitalize"},"Full Name : ",-1),H={class:"mb-2"},I={class:"flex flex-col items-center space-y-2 md:space-y-0 md:flex-row md:space-x-2"},ee=P({__name:"travel",setup(i){const a=g(),o=b();return L({title:"Travel Page"}),(M,m)=>{const _=w,p=N,f=v,n=C,u=h,x=z,y=k;return T(),$(y,null,{default:r(()=>[e(p,null,{default:r(()=>[e(_,{text:"Testing",class:"capitalize"})]),_:1}),e(x,null,{default:r(()=>[e(f,{text:"Stores Test"}),s("div",S,[s("div",A,"Counter : "+d(t(a).count),1),s("div",B,[e(n,{class:"w-full md:w-auto capitalize",type:"secondary",size:"sm",text:"increment",onClick:l(t(a).increment,["prevent"])},null,8,["onClick"]),e(n,{class:"w-full md:w-auto",type:"secondary",size:"sm",text:"increment2x",onClick:l(t(a).increment2x,["prevent"])},null,8,["onClick"]),e(n,{class:"w-full md:w-auto capitalize",type:"secondary",size:"sm",text:"decrement",onClick:l(t(a).decrement,["prevent"])},null,8,["onClick"]),e(n,{class:"w-full md:w-auto capitalize",type:"secondary",size:"sm",text:"reset",onClick:l(t(a).reset,["prevent"])},null,8,["onClick"])])]),s("div",D,[s("div",F,[j,s("span",null,d(t(o).fullName),1)]),s("div",H,[s("div",I,[e(u,{modelValue:t(o).firstName,"onUpdate:modelValue":m[0]||(m[0]=c=>t(o).firstName=c),size:"md",class:"w-full md:w-1/3"},null,8,["modelValue"]),e(u,{modelValue:t(o).lastName,"onUpdate:modelValue":m[1]||(m[1]=c=>t(o).lastName=c),size:"md",class:"w-full md:w-1/3"},null,8,["modelValue"]),e(n,{class:"capitalize w-full md:w-auto",text:"reset",type:"secondary",size:"md",onClick:l(t(o).reset,["prevent"])},null,8,["onClick"])])])])]),_:1})]),_:1})}}});export{ee as default};
