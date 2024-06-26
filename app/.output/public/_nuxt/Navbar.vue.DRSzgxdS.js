import _e from"./Icon.CgQrGG4w.js";import{_ as me}from"./nuxt-link.BPLddy8N.js";import{_ as ve}from"./Wrapper.vue.CxcbntmT.js";import{_ as xe}from"./ThemeSwitcher.vue.IBUYFu_A.js";import{_ as ye}from"./index.vue.D2q_0Slq.js";import{_ as be}from"./HeaderTitle.vue.BK9mfwKD.js";import ge from"./Header.C22QhIZG.js";import{_ as he}from"./index.vue.BCHPfu4n.js";import{I as q,u as Z,o as D,t as ke,i as T,A as H,l as we,N as ee}from"./open-closed.BfmJFw_h.js";import{a as Se,o as C}from"./keyboard.7LZ1azM2.js";import{j,a as h,p as te,k as P,a2 as se,E as ae,w as De,i as oe,J as p,X as y,O as _,a7 as $e,N as r,M as d,Y as B,u as o,a5 as w,a3 as O,a4 as L,L as b,a1 as S,a6 as Ae,T as Ce}from"./swiper-vue.rgMx2r3g.js";import Pe from"./Item.CP1ylMhM.js";import Ie from"./Group.BIYragjY.js";import{_ as Be}from"./ItemButton.vue.Cg8g2Jge.js";import{_ as Oe}from"./index.vue.VJ6AIJqD.js";import{b as Te}from"./entry.DfkASLd6.js";import{u as je}from"./Item.vue.VmOTdLz4.js";import{u as Ne}from"./use-awesome-screen.Tj_ZCbtJ.js";var Ee=(s=>(s[s.Open=0]="Open",s[s.Closed=1]="Closed",s))(Ee||{});let le=Symbol("DisclosureContext");function z(s){let u=oe(le,null);if(u===null){let m=new Error(`<${s} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(m,z),m}return u}let ne=Symbol("DisclosurePanelContext");function Me(){return oe(ne,null)}let Le=j({name:"Disclosure",props:{as:{type:[Object,String],default:"template"},defaultOpen:{type:[Boolean],default:!1}},setup(s,{slots:u,attrs:m}){let i=h(s.defaultOpen?0:1),e=h(null),v=h(null),l={buttonId:h(`headlessui-disclosure-button-${q()}`),panelId:h(`headlessui-disclosure-panel-${q()}`),disclosureState:i,panel:e,button:v,toggleDisclosure(){i.value=Z(i.value,{0:1,1:0})},closeDisclosure(){i.value!==1&&(i.value=1)},close(a){l.closeDisclosure();let c=a?a instanceof HTMLElement?a:a.value instanceof HTMLElement?D(a):D(l.button):D(l.button);c==null||c.focus()}};return te(le,l),ke(P(()=>Z(i.value,{0:T.Open,1:T.Closed}))),()=>{let{defaultOpen:a,...c}=s,f={open:i.value===0,close:l.close};return H({theirProps:c,ourProps:{},slot:f,slots:u,attrs:m,name:"Disclosure"})}}}),He=j({name:"DisclosureButton",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1},id:{type:String,default:null}},setup(s,{attrs:u,slots:m,expose:i}){let e=z("DisclosureButton"),v=Me(),l=P(()=>v===null?!1:v.value===e.panelId.value);se(()=>{l.value||s.id!==null&&(e.buttonId.value=s.id)}),ae(()=>{l.value||(e.buttonId.value=null)});let a=h(null);i({el:a,$el:a}),l.value||De(()=>{e.button.value=a.value});let c=Se(P(()=>({as:s.as,type:u.type})),a);function f(){var n;s.disabled||(l.value?(e.toggleDisclosure(),(n=D(e.button))==null||n.focus()):e.toggleDisclosure())}function x(n){var g;if(!s.disabled)if(l.value)switch(n.key){case C.Space:case C.Enter:n.preventDefault(),n.stopPropagation(),e.toggleDisclosure(),(g=D(e.button))==null||g.focus();break}else switch(n.key){case C.Space:case C.Enter:n.preventDefault(),n.stopPropagation(),e.toggleDisclosure();break}}function $(n){switch(n.key){case C.Space:n.preventDefault();break}}return()=>{var n;let g={open:e.disclosureState.value===0},{id:N,...E}=s,M=l.value?{ref:a,type:c.value,onClick:f,onKeydown:x}:{id:(n=e.buttonId.value)!=null?n:N,ref:a,type:c.value,"aria-expanded":e.disclosureState.value===0,"aria-controls":e.disclosureState.value===0||D(e.panel)?e.panelId.value:void 0,disabled:s.disabled?!0:void 0,onClick:f,onKeydown:x,onKeyup:$};return H({ourProps:M,theirProps:E,slot:g,attrs:u,slots:m,name:"DisclosureButton"})}}}),ze=j({name:"DisclosurePanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:null}},setup(s,{attrs:u,slots:m,expose:i}){let e=z("DisclosurePanel");se(()=>{s.id!==null&&(e.panelId.value=s.id)}),ae(()=>{e.panelId.value=null}),i({el:e.panel,$el:e.panel}),te(ne,e.panelId);let v=we(),l=P(()=>v!==null?(v.value&T.Open)===T.Open:e.disclosureState.value===0);return()=>{var a;let c={open:e.disclosureState.value===0,close:e.close},{id:f,...x}=s,$={id:(a=e.panelId.value)!=null?a:f,ref:e.panel};return H({ourProps:$,theirProps:x,slot:c,attrs:u,slots:m,features:ee.RenderStrategy|ee.Static,visible:l.value,name:"DisclosurePanel"})}}});const Ke={class:"flex fixed backdrop-filter backdrop-blur-md top-0 z-40 w-full flex-none transition-colors duration-300 lg:z-50 border-b border-gray-950/10 dark:border-gray-50/[0.2] bg-white/[0.5] dark:bg-gray-950/[0.5]"},Ve={class:"flex-1 flex items-center justify-between max-w-screen-2xl mx-auto px-4"},Ge={class:"capitalize"},Re={class:"flex space-x-4 text-sm items-center"},Ue={class:"pl-4 flex space-x-3 text-xl"},Fe={class:"pl-4 flex space-x-3 text-xl"},Je={class:"flex flex-col text-sm items-center divide-y divide-gray-400 dark:divide-gray-700 text-center"},Qe={class:"pb-2"},We=_("div",{class:"mt-2 mb-2 text-sm font-bold capitalize"}," Change Theme ",-1),Xe=_("span",{class:"text-sm"},"Github",-1),mt=j({__name:"Navbar",setup(s){const{awesome:u}=Te(),{parseMenuRoute:m,parseMenuTitle:i}=je(),e=Ne(),v=P(()=>{var a,c,f;return((f=(c=(a=u==null?void 0:u.layout)==null?void 0:a.page)==null?void 0:c.navbar)==null?void 0:f.menus)||[]}),l=h(!1);return(a,c)=>{var G,R,U,F,J,Q,W,X,Y;const f=_e,x=me,$=ve,n=xe,g=ye,N=be,E=ge,M=he,re=He,ue=ze,ce=Le,K=Pe,V=Ie,ie=Be,pe=Oe;return p(),y("header",Ke,[_("div",Ve,[_("div",null,[$e(a.$slots,"title",{},()=>[r(x,{to:"/",class:"font-bold text-lg text-primary-500"},{default:d(()=>[r(f,{name:"simple-icons:nuxtdotjs",class:"font-black text-xl font-mono mr-2 inline-block"}),_("span",Ge,B(o(u).name),1)]),_:1})])]),o(e).higherThan("md",o(e).current.value)?(p(),y("div",{key:0,class:w(["flex space-x-4 items-center",{"divide-x divide-gray-500":o(v).length>0}])},[_("div",Re,[(p(!0),y(O,null,L(o(v),(t,k)=>(p(),b($,{key:k,menu:t},null,8,["menu"]))),128))]),_("div",Ue,[r(n),(U=(R=(G=o(u))==null?void 0:G.project)==null?void 0:R.links)!=null&&U.github?(p(),b(g,{key:0,class:"dark:text-gray-400 text-gray-600",href:(Q=(J=(F=o(u))==null?void 0:F.project)==null?void 0:J.links)==null?void 0:Q.github},{default:d(()=>[r(f,{name:"mdi:github-face"})]),_:1},8,["href"])):S("",!0)])],2)):(p(),y("div",{key:1,class:w(["flex space-x-4 items-center",{"divide-x divide-gray-500":o(v).length>0}])},[_("div",Fe,[(Y=(X=(W=o(u))==null?void 0:W.project)==null?void 0:X.links)!=null&&Y.github?(p(),b(g,{key:0,class:"text-gray-400 hover:text-gray-100",onClick:c[0]||(c[0]=Ae(()=>l.value=!o(l),["prevent"]))},{default:d(()=>[r(f,{name:"heroicons:bars-3-bottom-right-20-solid"})]),_:1})):S("",!0)])],2))]),!o(e).higherThan("md",o(e).current.value)&&o(l)?(p(),b(pe,{key:0,onClose:c[1]||(c[1]=()=>l.value=!1)},{default:d(()=>[r(V,null,{default:d(()=>[r(E,null,{default:d(()=>[r(N,{text:"Menu"})]),_:1}),r(K,null,{default:d(()=>[_("div",Je,[(p(!0),y(O,null,L(o(v),(t,k)=>(p(),y(O,null,[(t==null?void 0:t.type)==="link"?(p(),b(x,{key:k,to:o(m)(t.to),class:"w-full py-2"},{default:d(({isActive:A})=>[_("span",{class:w({"text-gray-900 dark:text-gray-100 font-bold":A,"text-gray-700 dark:text-gray-300":!A})},B(o(i)(t==null?void 0:t.title)),3)]),_:2},1032,["to"])):S("",!0),(t==null?void 0:t.type)==="button"?(p(),b(M,{key:k,text:o(i)(t==null?void 0:t.title),size:"sm",to:o(m)(t.to),class:"w-full"},null,8,["text","to"])):S("",!0),(t==null?void 0:t.type)==="dropdown"?(p(),y("div",{key:k,class:"w-full"},[r(ce,null,{default:d(({open:A})=>[(p(),b(re,{key:k,class:w(["text-gray-700 dark:text-gray-300 w-full py-2 flex items-center justify-center duration-300 transition-all",A?"font-bold":""])},{default:d(()=>[_("span",null,B(o(i)(t==null?void 0:t.title)),1),r(f,{name:"carbon:chevron-right",class:w(["ml-1",[A?"duration-300 transition-all transform rotate-90":"rotate-0"]])},null,8,["class"])]),_:2},1032,["class"])),r(Ce,{"enter-active-class":"transition duration-100 ease-out","enter-from-class":"transform scale-95 opacity-0","enter-to-class":"transform scale-100 opacity-100","leave-active-class":"transition duration-75 ease-out","leave-from-class":"transform scale-100 opacity-100","leave-to-class":"transform scale-95 opacity-0"},{default:d(()=>[r(ue,{class:"text-gray-500 pb-2"},{default:d(()=>[(p(!0),y(O,null,L((t==null?void 0:t.children)||[],(I,de)=>(p(),b(x,{key:de,to:o(m)(I.to),class:"w-full py-2"},{default:d(({isActive:fe})=>[_("span",{class:w([fe?"text-gray-900 dark:text-gray-100 font-bold":"text-gray-700 dark:text-gray-300"])},B(o(i)(I==null?void 0:I.title)),3)]),_:2},1032,["to"]))),128))]),_:2},1024)]),_:2},1024)]),_:2},1024)])):S("",!0)],64))),256))])]),_:1}),r(K,{class:"flex flex-col"},{default:d(()=>[_("div",Qe,[We,r(n,{type:"select-box"})])]),_:1})]),_:1}),r(V,null,{default:d(()=>[r(ie,{class:"flex justify-center items-center text-base space-x-2"},{default:d(()=>[r(f,{name:"mdi:github-face",class:"text-lg font-bold"}),Xe]),_:1})]),_:1})]),_:1})):S("",!0)])}}});export{mt as _};
