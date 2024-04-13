import{a as k,k as x,j as B,z as L,p as se,a2 as q,b as ae,l as X,a3 as K,E as de,w as pe,n as A,i as ve,t as ce,J as _,X as E,u as Y,L as j,M as V,N as F,Z as J,O as N,a4 as W,a5 as fe,a1 as U,Y as Z,af as be,an as me}from"./swiper-vue.D22jMib6.js";import{o as h,u as $,t as ge,i as z,E as ye,A as C,T as xe,I as H,l as he,N as G}from"./open-closed.Ds9pT1TU.js";import{a as Oe}from"./use-outside-click.BBhsW33l.js";import{w as Se,h as ke,f as Le,s as we,a as De,O as Re,o as y}from"./keyboard.BQYpfET5.js";import _e from"./Icon.CwFfeS7b.js";import{_ as $e}from"./index.vue.DioWHJap.js";function Te(e,o,a){let s=k(a==null?void 0:a.value),r=x(()=>e.value!==void 0);return[x(()=>r.value?e.value:s.value),function(l){return r.value||(s.value=l),o==null?void 0:o(l)}]}function ee(e){return[e.screenX,e.screenY]}function Pe(){let e=k([-1,-1]);return{wasMoved(o){let a=ee(o);return e.value[0]===a[0]&&e.value[1]===a[1]?!1:(e.value=a,!0)},update(o){e.value=ee(o)}}}function Ie(e){throw new Error("Unexpected object: "+e)}var O=(e=>(e[e.First=0]="First",e[e.Previous=1]="Previous",e[e.Next=2]="Next",e[e.Last=3]="Last",e[e.Specific=4]="Specific",e[e.Nothing=5]="Nothing",e))(O||{});function Fe(e,o){let a=o.resolveItems();if(a.length<=0)return null;let s=o.resolveActiveIndex(),r=s??-1;switch(e.focus){case 0:{for(let l=0;l<a.length;++l)if(!o.resolveDisabled(a[l],l,a))return l;return s}case 1:{r===-1&&(r=a.length);for(let l=r-1;l>=0;--l)if(!o.resolveDisabled(a[l],l,a))return l;return s}case 2:{for(let l=r+1;l<a.length;++l)if(!o.resolveDisabled(a[l],l,a))return l;return s}case 3:{for(let l=a.length-1;l>=0;--l)if(!o.resolveDisabled(a[l],l,a))return l;return s}case 4:{for(let l=0;l<a.length;++l)if(o.resolveId(a[l],l,a)===e.id)return l;return s}case 5:return null;default:Ie(e)}}function oe(e={},o=null,a=[]){for(let[s,r]of Object.entries(e))re(a,ne(o,s),r);return a}function ne(e,o){return e?e+"["+o+"]":o}function re(e,o,a){if(Array.isArray(a))for(let[s,r]of a.entries())re(e,ne(o,s.toString()),r);else a instanceof Date?e.push([o,a.toISOString()]):typeof a=="boolean"?e.push([o,a?"1":"0"]):typeof a=="string"?e.push([o,a]):typeof a=="number"?e.push([o,`${a}`]):a==null?e.push([o,""]):oe(a,o,e)}let te=/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;function le(e){var o,a;let s=(o=e.innerText)!=null?o:"",r=e.cloneNode(!0);if(!(r instanceof HTMLElement))return s;let l=!1;for(let v of r.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))v.remove(),l=!0;let t=l?(a=r.innerText)!=null?a:"":s;return te.test(t)&&(t=t.replace(te,"")),t}function Ae(e){let o=e.getAttribute("aria-label");if(typeof o=="string")return o.trim();let a=e.getAttribute("aria-labelledby");if(a){let s=a.split(" ").map(r=>{let l=document.getElementById(r);if(l){let t=l.getAttribute("aria-label");return typeof t=="string"?t.trim():le(l).trim()}return null}).filter(Boolean);if(s.length>0)return s.join(", ")}return le(e).trim()}function Ve(e){let o=k(""),a=k("");return()=>{let s=h(e);if(!s)return"";let r=s.innerText;if(o.value===r)return a.value;let l=Ae(s).trim().toLowerCase();return o.value=r,a.value=l,l}}function Be(e,o){return e===o}var Ce=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Ce||{}),Me=(e=>(e[e.Single=0]="Single",e[e.Multi=1]="Multi",e))(Me||{}),Ee=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(Ee||{});function je(e){requestAnimationFrame(()=>requestAnimationFrame(e))}let ue=Symbol("ListboxContext");function M(e){let o=ve(ue,null);if(o===null){let a=new Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(a,M),a}return o}let Ne=B({name:"Listbox",emits:{"update:modelValue":e=>!0},props:{as:{type:[Object,String],default:"template"},disabled:{type:[Boolean],default:!1},by:{type:[String,Function],default:()=>Be},horizontal:{type:[Boolean],default:!1},modelValue:{type:[Object,String,Number,Boolean],default:void 0},defaultValue:{type:[Object,String,Number,Boolean],default:void 0},form:{type:String,optional:!0},name:{type:String,optional:!0},multiple:{type:[Boolean],default:!1}},inheritAttrs:!1,setup(e,{slots:o,attrs:a,emit:s}){let r=k(1),l=k(null),t=k(null),v=k(null),b=k([]),m=k(""),g=k(null),u=k(1);function d(n=i=>i){let i=g.value!==null?b.value[g.value]:null,p=Re(n(b.value.slice()),S=>h(S.dataRef.domRef)),f=i?p.indexOf(i):null;return f===-1&&(f=null),{options:p,activeOptionIndex:f}}let c=x(()=>e.multiple?1:0),[D,w]=Te(x(()=>e.modelValue),n=>s("update:modelValue",n),x(()=>e.defaultValue)),T=x(()=>D.value===void 0?$(c.value,{1:[],0:void 0}):D.value),R={listboxState:r,value:T,mode:c,compare(n,i){if(typeof e.by=="string"){let p=e.by;return(n==null?void 0:n[p])===(i==null?void 0:i[p])}return e.by(n,i)},orientation:x(()=>e.horizontal?"horizontal":"vertical"),labelRef:l,buttonRef:t,optionsRef:v,disabled:x(()=>e.disabled),options:b,searchQuery:m,activeOptionIndex:g,activationTrigger:u,closeListbox(){e.disabled||r.value!==1&&(r.value=1,g.value=null)},openListbox(){e.disabled||r.value!==0&&(r.value=0)},goToOption(n,i,p){if(e.disabled||r.value===1)return;let f=d(),S=Fe(n===O.Specific?{focus:O.Specific,id:i}:{focus:n},{resolveItems:()=>f.options,resolveActiveIndex:()=>f.activeOptionIndex,resolveId:I=>I.id,resolveDisabled:I=>I.dataRef.disabled});m.value="",g.value=S,u.value=p??1,b.value=f.options},search(n){if(e.disabled||r.value===1)return;let i=m.value!==""?0:1;m.value+=n.toLowerCase();let p=(g.value!==null?b.value.slice(g.value+i).concat(b.value.slice(0,g.value+i)):b.value).find(S=>S.dataRef.textValue.startsWith(m.value)&&!S.dataRef.disabled),f=p?b.value.indexOf(p):-1;f===-1||f===g.value||(g.value=f,u.value=1)},clearSearch(){e.disabled||r.value!==1&&m.value!==""&&(m.value="")},registerOption(n,i){let p=d(f=>[...f,{id:n,dataRef:i}]);b.value=p.options,g.value=p.activeOptionIndex},unregisterOption(n){let i=d(p=>{let f=p.findIndex(S=>S.id===n);return f!==-1&&p.splice(f,1),p});b.value=i.options,g.value=i.activeOptionIndex,u.value=1},theirOnChange(n){e.disabled||w(n)},select(n){e.disabled||w($(c.value,{0:()=>n,1:()=>{let i=L(R.value.value).slice(),p=L(n),f=i.findIndex(S=>R.compare(p,L(S)));return f===-1?i.push(p):i.splice(f,1),i}}))}};Oe([t,v],(n,i)=>{var p;R.closeListbox(),Se(i,ke.Loose)||(n.preventDefault(),(p=h(t))==null||p.focus())},x(()=>r.value===0)),se(ue,R),ge(x(()=>$(r.value,{0:z.Open,1:z.Closed})));let P=x(()=>{var n;return(n=h(t))==null?void 0:n.closest("form")});return q(()=>{ae([P],()=>{if(!P.value||e.defaultValue===void 0)return;function n(){R.theirOnChange(e.defaultValue)}return P.value.addEventListener("reset",n),()=>{var i;(i=P.value)==null||i.removeEventListener("reset",n)}},{immediate:!0})}),()=>{let{name:n,modelValue:i,disabled:p,form:f,...S}=e,I={open:r.value===0,disabled:p,value:T.value};return X(K,[...n!=null&&T.value!=null?oe({[n]:T.value}).map(([Q,ie])=>X(Le,ye({features:we.Hidden,key:Q,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:f,name:Q,value:ie}))):[],C({ourProps:{},theirProps:{...a,...xe(S,["defaultValue","onUpdate:modelValue","horizontal","multiple","by"])},slot:I,slots:o,attrs:a,name:"Listbox"})])}}}),ze=B({name:"ListboxLabel",props:{as:{type:[Object,String],default:"label"},id:{type:String,default:null}},setup(e,{attrs:o,slots:a}){var s;let r=(s=e.id)!=null?s:`headlessui-listbox-label-${H()}`,l=M("ListboxLabel");function t(){var v;(v=h(l.buttonRef))==null||v.focus({preventScroll:!0})}return()=>{let v={open:l.listboxState.value===0,disabled:l.disabled.value},{...b}=e,m={id:r,ref:l.labelRef,onClick:t};return C({ourProps:m,theirProps:b,slot:v,attrs:o,slots:a,name:"ListboxLabel"})}}}),He=B({name:"ListboxButton",props:{as:{type:[Object,String],default:"button"},id:{type:String,default:null}},setup(e,{attrs:o,slots:a,expose:s}){var r;let l=(r=e.id)!=null?r:`headlessui-listbox-button-${H()}`,t=M("ListboxButton");s({el:t.buttonRef,$el:t.buttonRef});function v(u){switch(u.key){case y.Space:case y.Enter:case y.ArrowDown:u.preventDefault(),t.openListbox(),A(()=>{var d;(d=h(t.optionsRef))==null||d.focus({preventScroll:!0}),t.value.value||t.goToOption(O.First)});break;case y.ArrowUp:u.preventDefault(),t.openListbox(),A(()=>{var d;(d=h(t.optionsRef))==null||d.focus({preventScroll:!0}),t.value.value||t.goToOption(O.Last)});break}}function b(u){switch(u.key){case y.Space:u.preventDefault();break}}function m(u){t.disabled.value||(t.listboxState.value===0?(t.closeListbox(),A(()=>{var d;return(d=h(t.buttonRef))==null?void 0:d.focus({preventScroll:!0})})):(u.preventDefault(),t.openListbox(),je(()=>{var d;return(d=h(t.optionsRef))==null?void 0:d.focus({preventScroll:!0})})))}let g=De(x(()=>({as:e.as,type:o.type})),t.buttonRef);return()=>{var u,d;let c={open:t.listboxState.value===0,disabled:t.disabled.value,value:t.value.value},{...D}=e,w={ref:t.buttonRef,id:l,type:g.value,"aria-haspopup":"listbox","aria-controls":(u=h(t.optionsRef))==null?void 0:u.id,"aria-expanded":t.listboxState.value===0,"aria-labelledby":t.labelRef.value?[(d=h(t.labelRef))==null?void 0:d.id,l].join(" "):void 0,disabled:t.disabled.value===!0?!0:void 0,onKeydown:v,onKeyup:b,onClick:m};return C({ourProps:w,theirProps:D,slot:c,attrs:o,slots:a,name:"ListboxButton"})}}}),Ue=B({name:"ListboxOptions",props:{as:{type:[Object,String],default:"ul"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:null}},setup(e,{attrs:o,slots:a,expose:s}){var r;let l=(r=e.id)!=null?r:`headlessui-listbox-options-${H()}`,t=M("ListboxOptions"),v=k(null);s({el:t.optionsRef,$el:t.optionsRef});function b(u){switch(v.value&&clearTimeout(v.value),u.key){case y.Space:if(t.searchQuery.value!=="")return u.preventDefault(),u.stopPropagation(),t.search(u.key);case y.Enter:if(u.preventDefault(),u.stopPropagation(),t.activeOptionIndex.value!==null){let d=t.options.value[t.activeOptionIndex.value];t.select(d.dataRef.value)}t.mode.value===0&&(t.closeListbox(),A(()=>{var d;return(d=h(t.buttonRef))==null?void 0:d.focus({preventScroll:!0})}));break;case $(t.orientation.value,{vertical:y.ArrowDown,horizontal:y.ArrowRight}):return u.preventDefault(),u.stopPropagation(),t.goToOption(O.Next);case $(t.orientation.value,{vertical:y.ArrowUp,horizontal:y.ArrowLeft}):return u.preventDefault(),u.stopPropagation(),t.goToOption(O.Previous);case y.Home:case y.PageUp:return u.preventDefault(),u.stopPropagation(),t.goToOption(O.First);case y.End:case y.PageDown:return u.preventDefault(),u.stopPropagation(),t.goToOption(O.Last);case y.Escape:u.preventDefault(),u.stopPropagation(),t.closeListbox(),A(()=>{var d;return(d=h(t.buttonRef))==null?void 0:d.focus({preventScroll:!0})});break;case y.Tab:u.preventDefault(),u.stopPropagation();break;default:u.key.length===1&&(t.search(u.key),v.value=setTimeout(()=>t.clearSearch(),350));break}}let m=he(),g=x(()=>m!==null?(m.value&z.Open)===z.Open:t.listboxState.value===0);return()=>{var u,d;let c={open:t.listboxState.value===0},{...D}=e,w={"aria-activedescendant":t.activeOptionIndex.value===null||(u=t.options.value[t.activeOptionIndex.value])==null?void 0:u.id,"aria-multiselectable":t.mode.value===1?!0:void 0,"aria-labelledby":(d=h(t.buttonRef))==null?void 0:d.id,"aria-orientation":t.orientation.value,id:l,onKeydown:b,role:"listbox",tabIndex:0,ref:t.optionsRef};return C({ourProps:w,theirProps:D,slot:c,attrs:o,slots:a,features:G.RenderStrategy|G.Static,visible:g.value,name:"ListboxOptions"})}}}),qe=B({name:"ListboxOption",props:{as:{type:[Object,String],default:"li"},value:{type:[Object,String,Number,Boolean]},disabled:{type:Boolean,default:!1},id:{type:String,default:null}},setup(e,{slots:o,attrs:a,expose:s}){var r;let l=(r=e.id)!=null?r:`headlessui-listbox-option-${H()}`,t=M("ListboxOption"),v=k(null);s({el:v,$el:v});let b=x(()=>t.activeOptionIndex.value!==null?t.options.value[t.activeOptionIndex.value].id===l:!1),m=x(()=>$(t.mode.value,{0:()=>t.compare(L(t.value.value),L(e.value)),1:()=>L(t.value.value).some(n=>t.compare(L(n),L(e.value)))})),g=x(()=>$(t.mode.value,{1:()=>{var n;let i=L(t.value.value);return((n=t.options.value.find(p=>i.some(f=>t.compare(L(f),L(p.dataRef.value)))))==null?void 0:n.id)===l},0:()=>m.value})),u=Ve(v),d=x(()=>({disabled:e.disabled,value:e.value,get textValue(){return u()},domRef:v}));q(()=>t.registerOption(l,d)),de(()=>t.unregisterOption(l)),q(()=>{ae([t.listboxState,m],()=>{t.listboxState.value===0&&m.value&&$(t.mode.value,{1:()=>{g.value&&t.goToOption(O.Specific,l)},0:()=>{t.goToOption(O.Specific,l)}})},{immediate:!0})}),pe(()=>{t.listboxState.value===0&&b.value&&t.activationTrigger.value!==0&&A(()=>{var n,i;return(i=(n=h(v))==null?void 0:n.scrollIntoView)==null?void 0:i.call(n,{block:"nearest"})})});function c(n){if(e.disabled)return n.preventDefault();t.select(e.value),t.mode.value===0&&(t.closeListbox(),A(()=>{var i;return(i=h(t.buttonRef))==null?void 0:i.focus({preventScroll:!0})}))}function D(){if(e.disabled)return t.goToOption(O.Nothing);t.goToOption(O.Specific,l)}let w=Pe();function T(n){w.update(n)}function R(n){w.wasMoved(n)&&(e.disabled||b.value||t.goToOption(O.Specific,l,0))}function P(n){w.wasMoved(n)&&(e.disabled||b.value&&t.goToOption(O.Nothing))}return()=>{let{disabled:n}=e,i={active:b.value,selected:m.value,disabled:n},{value:p,disabled:f,...S}=e,I={id:l,ref:v,role:"option",tabIndex:n===!0?void 0:-1,"aria-disabled":n===!0?!0:void 0,"aria-selected":m.value,disabled:void 0,onClick:c,onFocus:D,onPointerenter:T,onMouseenter:T,onPointermove:R,onMousemove:R,onPointerleave:P,onMouseleave:P};return C({ourProps:I,theirProps:S,slot:i,attrs:a,slots:o,name:"ListboxOption"})}}});const Ke={class:"flex items-center"},Qe={class:"flex justify-center items-center dark:hidden"},Xe={class:"justify-center items-center hidden dark:flex"},Ye={class:"text-sm mr-2 flex items-center"},Je=["value"],at=B({__name:"ThemeSwitcher",props:{type:{type:String,default:"dropdown-right-top"}},setup(e){const a=ce(e,"type"),s=[{key:"light",text:"Light"},{key:"dark",text:"Dark"},{key:"system",text:"System"}];return(r,l)=>{const t=ze,v=_e,b=$e,m=He,g=qe,u=Ue,d=Ne;return _(),E("div",Ke,[Y(a)==="dropdown-right-top"?(_(),j(d,{key:0,modelValue:r.$colorMode.preference,"onUpdate:modelValue":l[0]||(l[0]=c=>r.$colorMode.preference=c),as:"div",class:"relative flex items-center"},{default:V(()=>[F(t,{class:"sr-only"},{default:V(()=>[J("Theme")]),_:1}),F(m,{type:"template"},{default:V(()=>[F(b,{class:"dark:text-gray-400 text-gray-600"},{default:V(()=>[N("span",Qe,[F(v,{name:"uil:sun"})]),N("span",Xe,[F(v,{name:"uil:moon"})])]),_:1})]),_:1}),F(u,{class:"p-1 absolute z-50 origin-top-right top-full right-0 outline-none bg-white rounded-lg ring-1 ring-gray-900/10 shadow-lg overflow-hidden w-36 py-1 text-sm text-gray-700 font-semibold dark:bg-gray-800 dark:ring-0 dark:highlight-white/5 dark:text-gray-300"},{default:V(()=>[(_(),E(K,null,W(s,c=>F(g,{key:c.key,value:c.key,class:fe({"py-2 px-2 flex items-center cursor-pointer":!0,"text-sky-500 bg-gray-100 dark:bg-gray-600/30":r.$colorMode.preference===c.key,"hover:bg-gray-50 dark:hover:bg-gray-700/30":r.$colorMode.preference!==c.key})},{default:V(()=>[N("span",Ye,[c.key==="light"?(_(),j(v,{key:0,name:"uil:sun"})):c.key==="dark"?(_(),j(v,{key:1,name:"uil:moon"})):c.key==="system"?(_(),j(v,{key:2,name:"uil:laptop"})):U("",!0)]),J(" "+Z(c.text),1)]),_:2},1032,["value","class"])),64))]),_:1})]),_:1},8,["modelValue"])):U("",!0),Y(a)==="select-box"?be((_(),E("select",{key:1,"onUpdate:modelValue":l[1]||(l[1]=c=>r.$colorMode.preference=c),class:"w-full px-2 pr-3 py-1 outline-none rounded border bg-transparent text-gray-700 dark:text-gray-300 border-gray-900/10 dark:border-gray-50/[0.2]"},[(_(),E(K,null,W(s,c=>N("option",{key:c.key,value:c.key},Z(c.text),9,Je)),64))],512)),[[me,r.$colorMode.preference]]):U("",!0)])}}});export{at as _};
