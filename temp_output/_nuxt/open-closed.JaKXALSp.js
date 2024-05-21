import{i as v,am as k,l as C,a2 as E,p as I}from"./swiper-vue.CoqLb3VA.js";let N=Symbol("headlessui.useid"),P=0;function Y(){return v(N,()=>`${++P}`)()}function q(e){var t;if(e==null||e.value==null)return null;let n=(t=e.value.$el)!=null?t:e.value;return n instanceof Node?n:null}function j(e,t,...n){if(e in t){let r=t[e];return typeof r=="function"?r(...n):r}let l=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(r=>`"${r}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(l,j),l}var T=Object.defineProperty,x=(e,t,n)=>t in e?T(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,g=(e,t,n)=>(x(e,typeof t!="symbol"?t+"":t,n),n);let A=class{constructor(){g(this,"current",this.detect()),g(this,"currentId",0)}set(t){this.current!==t&&(this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}},B=new A;var H=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(H||{}),R=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(R||{});function D({visible:e=!0,features:t=0,ourProps:n,theirProps:l,...r}){var a;let s=w(l,n),u=Object.assign(r,{props:s});if(e||t&2&&s.static)return b(u);if(t&1){let f=(a=s.unmount)==null||a?0:1;return j(f,{0(){return null},1(){return b({...r,props:{...s,hidden:!0,style:{display:"none"}}})}})}return b(u)}function b({props:e,attrs:t,slots:n,slot:l,name:r}){var a,s;let{as:u,...f}=U(e,["unmount","static"]),o=(a=n.default)==null?void 0:a.call(n,l),y={};if(l){let d=!1,h=[];for(let[p,c]of Object.entries(l))typeof c=="boolean"&&(d=!0),c===!0&&h.push(p);d&&(y["data-headlessui-state"]=h.join(" "))}if(u==="template"){if(o=O(o??[]),Object.keys(f).length>0||Object.keys(t).length>0){let[d,...h]=o??[];if(!W(d)||h.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${r} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(f).concat(Object.keys(t)).map(i=>i.trim()).filter((i,m,S)=>S.indexOf(i)===m).sort((i,m)=>i.localeCompare(m)).map(i=>`  - ${i}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(i=>`  - ${i}`).join(`
`)].join(`
`));let p=w((s=d.props)!=null?s:{},f,y),c=k(d,p,!0);for(let i in p)i.startsWith("on")&&(c.props||(c.props={}),c.props[i]=p[i]);return c}return Array.isArray(o)&&o.length===1?o[0]:o}return C(u,Object.assign({},f,y),{default:()=>o})}function O(e){return e.flatMap(t=>t.type===E?O(t.children):[t])}function w(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},n={};for(let l of e)for(let r in l)r.startsWith("on")&&typeof l[r]=="function"?(n[r]!=null||(n[r]=[]),n[r].push(l[r])):t[r]=l[r];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(l=>[l,void 0])));for(let l in n)Object.assign(t,{[l](r,...a){let s=n[l];for(let u of s){if(r instanceof Event&&r.defaultPrevented)return;u(r,...a)}}});return t}function G(e){let t=Object.assign({},e);for(let n in t)t[n]===void 0&&delete t[n];return t}function U(e,t=[]){let n=Object.assign({},e);for(let l of t)l in n&&delete n[l];return n}function W(e){return e==null?!1:typeof e.type=="string"||typeof e.type=="object"||typeof e.type=="function"}let $=Symbol("Context");var F=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(F||{});function J(){return M()!==null}function M(){return v($,null)}function K(e){I($,e)}export{D as A,G as E,Y as I,H as N,R as S,U as T,B as c,F as i,M as l,q as o,J as s,K as t,j as u};
