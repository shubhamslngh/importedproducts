import{_ as de}from"./AlertBanner.vue.C91w9U5U.js";import ce from"./index.CRGphr4c.js";import{_ as pe}from"./Title.vue.BclRMCyS.js";import me from"./Header.xTXP1l_h.js";import{o as g,A as D,T as fe,I as Q,N as K,u as G}from"./open-closed.JaKXALSp.js";import{s as ve,f as ee,O as B,a as _e,o as k,T as j,i as be,P as C,N as F}from"./keyboard.BJD8y093.js";import{j as z,a as T,l as H,k as I,p as X,a1 as M,b as xe,w as he,a2 as te,E as ae,i as W,J as Y,L as ge,M as o,N as a,O as f,u as A,X as ye,a3 as we,x as E,Z as Ie,a4 as Z,Y as U}from"./swiper-vue.CoqLb3VA.js";import{t as Te}from"./transition.JJiPnanl.js";import{_ as Pe}from"./Title.vue.Dl1KUo7q.js";import{_ as Se}from"./TextInput.vue.QOc9O-ne.js";import Ae from"./Content.DIqVT9e8.js";import{_ as $e}from"./index.vue.Bv8U7coe.js";import{_ as ke}from"./index.vue.BzhQHr3C.js";import Fe from"./Footer.DmYosMo2.js";import{_ as Le}from"./index.vue.DJNsObrD.js";import Oe from"./Icon.BH_q_rQP.js";import{_ as Ve}from"./Switch.vue.PKX_8hNG.js";import ze from"./Wrapper.DlSCnsyd.js";import{u as Ce}from"./use-awesome-screen.bq1p6Si2.js";import{u as Be}from"./entry.BX3CV9hu.js";import"./_plugin-vue_export-helper.DlAUqK2U.js";import"./use-sync-props.Ci0SA2wZ.js";import"./nuxt-link.CF0EZYJm.js";import"./index.DKzsDYrr.js";let Ee=z({props:{onFocus:{type:Function,required:!0}},setup(e){let v=T(!0);return()=>v.value?H(ee,{as:"button",type:"button",features:ve.Focusable,onFocus(x){x.preventDefault();let m,_=50;function r(){var l;if(_--<=0){m&&cancelAnimationFrame(m);return}if((l=e.onFocus)!=null&&l.call(e)){v.value=!1,cancelAnimationFrame(m);return}m=requestAnimationFrame(r)}m=requestAnimationFrame(r)}}):null}});var De=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(De||{}),Ne=(e=>(e[e.Less=-1]="Less",e[e.Equal=0]="Equal",e[e.Greater=1]="Greater",e))(Ne||{});let le=Symbol("TabsContext");function N(e){let v=W(le,null);if(v===null){let x=new Error(`<${e} /> is missing a parent <TabGroup /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(x,N),x}return v}let J=Symbol("TabsSSRContext"),je=z({name:"TabGroup",emits:{change:e=>!0},props:{as:{type:[Object,String],default:"template"},selectedIndex:{type:[Number],default:null},defaultIndex:{type:[Number],default:0},vertical:{type:[Boolean],default:!1},manual:{type:[Boolean],default:!1}},inheritAttrs:!1,setup(e,{slots:v,attrs:x,emit:m}){var _;let r=T((_=e.selectedIndex)!=null?_:e.defaultIndex),l=T([]),s=T([]),P=I(()=>e.selectedIndex!==null),b=I(()=>P.value?e.selectedIndex:r.value);function i(n){var d;let c=B(u.tabs.value,g),t=B(u.panels.value,g),p=c.filter(w=>{var y;return!((y=g(w))!=null&&y.hasAttribute("disabled"))});if(n<0||n>c.length-1){let w=G(r.value===null?0:Math.sign(n-r.value),{[-1]:()=>1,0:()=>G(Math.sign(n),{[-1]:()=>0,0:()=>0,1:()=>1}),1:()=>0}),y=G(w,{0:()=>c.indexOf(p[0]),1:()=>c.indexOf(p[p.length-1])});y!==-1&&(r.value=y),u.tabs.value=c,u.panels.value=t}else{let w=c.slice(0,n),y=[...c.slice(n),...w].find(O=>p.includes(O));if(!y)return;let $=(d=c.indexOf(y))!=null?d:u.selectedIndex.value;$===-1&&($=u.selectedIndex.value),r.value=$,u.tabs.value=c,u.panels.value=t}}let u={selectedIndex:I(()=>{var n,d;return(d=(n=r.value)!=null?n:e.defaultIndex)!=null?d:null}),orientation:I(()=>e.vertical?"vertical":"horizontal"),activation:I(()=>e.manual?"manual":"auto"),tabs:l,panels:s,setSelectedIndex(n){b.value!==n&&m("change",n),P.value||i(n)},registerTab(n){var d;if(l.value.includes(n))return;let c=l.value[r.value];l.value.push(n),l.value=B(l.value,g);let t=(d=l.value.indexOf(c))!=null?d:r.value;t!==-1&&(r.value=t)},unregisterTab(n){let d=l.value.indexOf(n);d!==-1&&l.value.splice(d,1)},registerPanel(n){s.value.includes(n)||(s.value.push(n),s.value=B(s.value,g))},unregisterPanel(n){let d=s.value.indexOf(n);d!==-1&&s.value.splice(d,1)}};X(le,u);let h=T({tabs:[],panels:[]}),V=T(!1);M(()=>{V.value=!0}),X(J,I(()=>V.value?null:h.value));let L=I(()=>e.selectedIndex);return M(()=>{xe([L],()=>{var n;return i((n=e.selectedIndex)!=null?n:e.defaultIndex)},{immediate:!0})}),he(()=>{if(!P.value||b.value==null||u.tabs.value.length<=0)return;let n=B(u.tabs.value,g);n.some((d,c)=>g(u.tabs.value[c])!==g(d))&&u.setSelectedIndex(n.findIndex(d=>g(d)===g(u.tabs.value[b.value])))}),()=>{let n={selectedIndex:r.value};return H(te,[l.value.length<=0&&H(Ee,{onFocus:()=>{for(let d of l.value){let c=g(d);if((c==null?void 0:c.tabIndex)===0)return c.focus(),!0}return!1}}),D({theirProps:{...x,...fe(e,["selectedIndex","defaultIndex","manual","vertical","onChange"])},ourProps:{},slot:n,slots:v,attrs:x,name:"TabGroup"})])}}}),Ue=z({name:"TabList",props:{as:{type:[Object,String],default:"div"}},setup(e,{attrs:v,slots:x}){let m=N("TabList");return()=>{let _={selectedIndex:m.selectedIndex.value},r={role:"tablist","aria-orientation":m.orientation.value};return D({ourProps:r,theirProps:e,slot:_,attrs:v,slots:x,name:"TabList"})}}}),Ge=z({name:"Tab",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1},id:{type:String,default:null}},setup(e,{attrs:v,slots:x,expose:m}){var _;let r=(_=e.id)!=null?_:`headlessui-tabs-tab-${Q()}`,l=N("Tab"),s=T(null);m({el:s,$el:s}),M(()=>l.registerTab(s)),ae(()=>l.unregisterTab(s));let P=W(J),b=I(()=>{if(P.value){let t=P.value.tabs.indexOf(r);return t===-1?P.value.tabs.push(r)-1:t}return-1}),i=I(()=>{let t=l.tabs.value.indexOf(s);return t===-1?b.value:t}),u=I(()=>i.value===l.selectedIndex.value);function h(t){var p;let w=t();if(w===j.Success&&l.activation.value==="auto"){let y=(p=be(s))==null?void 0:p.activeElement,$=l.tabs.value.findIndex(O=>g(O)===y);$!==-1&&l.setSelectedIndex($)}return w}function V(t){let p=l.tabs.value.map(w=>g(w)).filter(Boolean);if(t.key===k.Space||t.key===k.Enter){t.preventDefault(),t.stopPropagation(),l.setSelectedIndex(i.value);return}switch(t.key){case k.Home:case k.PageUp:return t.preventDefault(),t.stopPropagation(),h(()=>C(p,F.First));case k.End:case k.PageDown:return t.preventDefault(),t.stopPropagation(),h(()=>C(p,F.Last))}if(h(()=>G(l.orientation.value,{vertical(){return t.key===k.ArrowUp?C(p,F.Previous|F.WrapAround):t.key===k.ArrowDown?C(p,F.Next|F.WrapAround):j.Error},horizontal(){return t.key===k.ArrowLeft?C(p,F.Previous|F.WrapAround):t.key===k.ArrowRight?C(p,F.Next|F.WrapAround):j.Error}}))===j.Success)return t.preventDefault()}let L=T(!1);function n(){var t;L.value||(L.value=!0,!e.disabled&&((t=g(s))==null||t.focus({preventScroll:!0}),l.setSelectedIndex(i.value),Te(()=>{L.value=!1})))}function d(t){t.preventDefault()}let c=_e(I(()=>({as:e.as,type:v.type})),s);return()=>{var t;let p={selected:u.value},{...w}=e,y={ref:s,onKeydown:V,onMousedown:d,onClick:n,id:r,role:"tab",type:c.value,"aria-controls":(t=g(l.panels.value[i.value]))==null?void 0:t.id,"aria-selected":u.value,tabIndex:u.value?0:-1,disabled:e.disabled?!0:void 0};return D({ourProps:y,theirProps:w,slot:p,attrs:v,slots:x,name:"Tab"})}}}),He=z({name:"TabPanels",props:{as:{type:[Object,String],default:"div"}},setup(e,{slots:v,attrs:x}){let m=N("TabPanels");return()=>{let _={selectedIndex:m.selectedIndex.value};return D({theirProps:e,ourProps:{},slot:_,attrs:x,slots:v,name:"TabPanels"})}}}),Me=z({name:"TabPanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:null},tabIndex:{type:Number,default:0}},setup(e,{attrs:v,slots:x,expose:m}){var _;let r=(_=e.id)!=null?_:`headlessui-tabs-panel-${Q()}`,l=N("TabPanel"),s=T(null);m({el:s,$el:s}),M(()=>l.registerPanel(s)),ae(()=>l.unregisterPanel(s));let P=W(J),b=I(()=>{if(P.value){let h=P.value.panels.indexOf(r);return h===-1?P.value.panels.push(r)-1:h}return-1}),i=I(()=>{let h=l.panels.value.indexOf(s);return h===-1?b.value:h}),u=I(()=>i.value===l.selectedIndex.value);return()=>{var h;let V={selected:u.value},{tabIndex:L,...n}=e,d={ref:s,id:r,role:"tabpanel","aria-labelledby":(h=g(l.tabs.value[i.value]))==null?void 0:h.id,tabIndex:u.value?L:-1};return!u.value&&e.unmount&&!e.static?H(ee,{as:"span","aria-hidden":!0,...d}):D({ourProps:d,theirProps:n,slot:V,attrs:v,slots:x,features:K.Static|K.RenderStrategy,visible:u.value,name:"TabPanel"})}}});const Re={class:"mb-6"},qe=f("p",{class:"mb-2"}," type your github username and click the button to validate. ",-1),We={class:"flex"},Je=f("span",{class:"flex-1 px-4 py-2"},"github.com/",-1),Ke=f("p",{class:"mb-2"},"This is your bot ID.",-1),Xe={class:"flex"},Ye=f("span",null,"Copy",-1),Ze=f("p",null,"Used when interacting with the bot.",-1),Qe=f("p",{class:"mb-2"},"toggle enable to remove the red border",-1),et={class:"flex"},tt={class:"capitalize"},at=f("p",null,"if enable we will secure your comments from spam",-1),lt=f("p",{class:"mb-2"}," you can enable advanced settings to change the settings ",-1),nt={class:"flex"},st={class:"capitalize"},ot=f("p",{class:"mb-2"}," if no index file is present within a directory, the directory contents will be displayed. ",-1),rt={class:"flex"},ut={class:"capitalize"},Vt=z({__name:"setting",setup(e){const v=Ce();Be({title:"Settings"});const x=()=>{const b="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";let i="";for(let u=0;u<255;u++)i+=b.charAt(Math.floor(Math.random()*b.length));return i},m=T("viandwi24"),_=T(x()),r=T(!1),l=T(!1),s=T(!1),P=async()=>{try{const b=await fetch(`https://api.github.com/users/${m.value}`);if(b.status!==200)throw new Error(`error when fetching username : ${b.statusText} (${b.status})`);const i=await b.json();alert(`Found Accout Name ${i.name} with id : ${i.id}`)}catch(b){alert(b)}};return(b,i)=>{const u=de,h=ce,V=pe,L=me,n=Ge,d=Ue,c=Pe,t=Se,p=Ae,w=$e,y=ke,$=Fe,O=Le,ne=Oe,R=Me,q=Ve,se=He,oe=je,re=ze;return Y(),ge(re,null,{default:o(()=>[a(h,{class:"mb-0"},{default:o(()=>[a(u,{type:"success",title:"This is a page for testing purposes",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",class:"mb-6"})]),_:1}),a(L,null,{default:o(()=>[a(V,{text:"Setting",class:"capitalize"})]),_:1}),a(h,null,{default:o(()=>[f("div",Re,[a(oe,{as:"div",class:"flex flex-col md:flex-row md:space-x-4",vertical:A(v).higherThan("md")},{default:o(()=>[a(d,{class:"w-full md:w-1/6 flex md:flex-col rounded-lg mb-2"},{default:o(()=>[(Y(),ye(te,null,we(["General","Protection","Advanced"],(S,ue)=>a(n,{key:ue,as:"template"},{default:o(({selected:ie})=>[f("button",{class:Z(["md:w-full text-left px-3 rounded py-2.5 text-sm leading-5 transition-all hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-white/[0.12] dark:hover:text-white",ie?"font-extrabold":"text-gray-800 dark:text-gray-400"])},U(S),3)]),_:2},1024)),64))]),_:1}),a(se,{class:"flex-1"},{default:o(()=>[a(R,null,{default:o(()=>[a(O,{class:"mb-6"},{default:o(()=>[a(p,null,{default:o(()=>[a(c,{class:"capitalize",text:"validate github profile"}),qe,f("div",We,[a(t,{modelValue:A(m),"onUpdate:modelValue":i[0]||(i[0]=S=>E(m)?m.value=S:null),class:"w-full md:w-1/3"},{"prefix-disabled":o(()=>[Je]),_:1},8,["modelValue"])])]),_:1}),a($,{class:"flex flex-col space-y-2 md:space-y md:flex-row items-center md:justify-between"},{default:o(()=>[f("p",null,[Ie(" Learn more about "),a(w,{class:"underline font-bold capitalize",text:"github users api",href:"https://docs.github.com/en/rest/users/users#get-a-user"})]),a(y,{class:"capitalize",size:"sm",type:"opposite",text:"validate",onClick:P})]),_:1})]),_:1}),a(O,{class:"mb-4"},{default:o(()=>[a(p,null,{default:o(()=>[a(c,{class:"capitalize",text:"bot id"}),Ke,f("div",Xe,[a(t,{modelValue:A(_),"onUpdate:modelValue":i[1]||(i[1]=S=>E(_)?_.value=S:null),class:"w-full md:w-1/3"},{suffix:o(()=>[a(y,{type:"opposite",class:"flex space-x-1 border-none"},{default:o(()=>[a(ne,{name:"ic:baseline-content-copy"}),Ye]),_:1})]),_:1},8,["modelValue"])])]),_:1}),a($,{class:"justify-between"},{default:o(()=>[Ze]),_:1})]),_:1})]),_:1}),a(R,null,{default:o(()=>[a(O,{class:Z({"mb-4":!0,"border-red-500 dark:border-red-500":!A(r)})},{default:o(()=>[a(p,null,{default:o(()=>[a(c,{class:"capitalize",text:"spam protection"}),Qe,f("div",et,[a(q,{modelValue:A(r),"onUpdate:modelValue":i[2]||(i[2]=S=>E(r)?r.value=S:null)},{default:o(()=>[f("span",tt,U(A(r)?"enabled":"disabled"),1)]),_:1},8,["modelValue"])])]),_:1}),a($,{class:"justify-between"},{default:o(()=>[at]),_:1})]),_:1},8,["class"])]),_:1}),a(R,null,{default:o(()=>[a(O,{class:"mb-6"},{default:o(()=>[a(p,null,{default:o(()=>[a(c,{class:"capitalize",text:"enable advanced settings"}),lt,f("div",nt,[a(q,{modelValue:A(s),"onUpdate:modelValue":i[3]||(i[3]=S=>E(s)?s.value=S:null)},{default:o(()=>[f("span",st,U(A(s)?"enabled":"disabled"),1)]),_:1},8,["modelValue"])])]),_:1})]),_:1}),a(O,{class:"mb-6",disabled:!A(s)},{default:o(()=>[a(p,null,{default:o(()=>[a(c,{class:"capitalize",text:"directory listing"}),ot,f("div",rt,[a(q,{modelValue:A(l),"onUpdate:modelValue":i[4]||(i[4]=S=>E(l)?l.value=S:null),on:""},{default:o(()=>[f("span",ut,U(A(l)?"enabled":"disabled"),1)]),_:1},8,["modelValue"])])]),_:1})]),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1},8,["vertical"])])]),_:1})]),_:1})}}});export{Vt as default};
