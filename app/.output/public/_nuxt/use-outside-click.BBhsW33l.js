import{c as s,o as m}from"./open-closed.Ds9pT1TU.js";import{w,h as p}from"./keyboard.BQYpfET5.js";import{w as f,a as g,k as E}from"./swiper-vue.D22jMib6.js";function h(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function L(){return/Android/gi.test(window.navigator.userAgent)}function P(){return h()||L()}function d(r,i,o){s.isServer||f(a=>{document.addEventListener(r,i,o),a(()=>document.removeEventListener(r,i,o))})}function A(r,i,o){s.isServer||f(a=>{window.addEventListener(r,i,o),a(()=>window.removeEventListener(r,i,o))})}function x(r,i,o=E(()=>!0)){function a(t,u){if(!o.value||t.defaultPrevented)return;let n=u(t);if(n===null||!n.getRootNode().contains(n))return;let v=function l(e){return typeof e=="function"?l(e()):Array.isArray(e)||e instanceof Set?e:[e]}(r);for(let l of v){if(l===null)continue;let e=l instanceof HTMLElement?l:m(l);if(e!=null&&e.contains(n)||t.composed&&t.composedPath().includes(e))return}return!w(n,p.Loose)&&n.tabIndex!==-1&&t.preventDefault(),i(t,n)}let c=g(null);d("pointerdown",t=>{var u,n;o.value&&(c.value=((n=(u=t.composedPath)==null?void 0:u.call(t))==null?void 0:n[0])||t.target)},!0),d("mousedown",t=>{var u,n;o.value&&(c.value=((n=(u=t.composedPath)==null?void 0:u.call(t))==null?void 0:n[0])||t.target)},!0),d("click",t=>{P()||c.value&&(a(t,()=>c.value),c.value=null)},!0),d("touchend",t=>a(t,()=>t.target instanceof HTMLElement?t.target:null),!0),A("blur",t=>a(t,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}export{x as a,A as w};
