import{u as me,_ as be}from"./Item.vue.BXz8SpWr.js";import ye from"./Icon.BPmAifTr.js";import{v as z,r as E,m as I,y as W,j as H,q as Y,n as k,F as U,h as ue,x as se,a6 as Pe,I as ge,o as R,g as Q,w as j,b as G,a as ne,B as le,l as oe,t as he,aq as Se,c as we,z as Ee,H as ke}from"./entry.Ds9AM2FV.js";import{c as xe,o,u as O,t as Fe,i as q,A as Z,I as M,l as Ie,N as ae}from"./open-closed.CGPjDjI9.js";import{w as $e,a as Ce}from"./use-outside-click.DGOCG_Vu.js";import{i as J,s as K,f as V,E as ee,w as Ne,h as Te,a as Be,P as B,N,o as T,T as X}from"./keyboard.BwGlbtb2.js";function _e(l,s,v,b){xe.isServer||z(y=>{l=l??window,l.addEventListener(s,v,b),y(()=>l.removeEventListener(s,v,b))})}var F=(l=>(l[l.Forwards=0]="Forwards",l[l.Backwards=1]="Backwards",l))(F||{});function ie(){let l=E(0);return $e("keydown",s=>{s.key==="Tab"&&(l.value=s.shiftKey?1:0)}),l}function Le({defaultContainers:l=[],portals:s,mainTreeNodeRef:v}={}){let b=E(null),y=J(b);function c(){var t,e,h;let p=[];for(let a of l)a!==null&&(a instanceof HTMLElement?p.push(a):"value"in a&&a.value instanceof HTMLElement&&p.push(a.value));if(s!=null&&s.value)for(let a of s.value)p.push(a);for(let a of(t=y==null?void 0:y.querySelectorAll("html > *, body > *"))!=null?t:[])a!==document.body&&a!==document.head&&a instanceof HTMLElement&&a.id!=="headlessui-portal-root"&&(a.contains(o(b))||a.contains((h=(e=o(b))==null?void 0:e.getRootNode())==null?void 0:h.host)||p.some(d=>a.contains(d))||p.push(a));return p}return{resolveContainers:c,contains(t){return c().some(e=>e.contains(t))},mainTreeNodeRef:b,MainTreeNode(){return v!=null?null:I(V,{features:K.Hidden,ref:b})}}}let re=Symbol("PortalParentContext");function Oe(){let l=W(re,null),s=E([]);function v(c){return s.value.push(c),l&&l.register(c),()=>b(c)}function b(c){let t=s.value.indexOf(c);t!==-1&&s.value.splice(t,1),l&&l.unregister(c)}let y={register:v,unregister:b,portals:s};return[s,H({name:"PortalWrapper",setup(c,{slots:t}){return Y(re,y),()=>{var e;return(e=t.default)==null?void 0:e.call(t)}}})]}var Me=(l=>(l[l.Open=0]="Open",l[l.Closed=1]="Closed",l))(Me||{});let ce=Symbol("PopoverContext");function te(l){let s=W(ce,null);if(s===null){let v=new Error(`<${l} /> is missing a parent <${de.name} /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(v,te),v}return s}let He=Symbol("PopoverGroupContext");function pe(){return W(He,null)}let ve=Symbol("PopoverPanelContext");function Ae(){return W(ve,null)}let de=H({name:"Popover",inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"}},setup(l,{slots:s,attrs:v,expose:b}){var y;let c=E(null);b({el:c,$el:c});let t=E(1),e=E(null),h=E(null),p=E(null),a=E(null),d=k(()=>J(c)),S=k(()=>{var n,u;if(!o(e)||!o(a))return!1;for(let D of document.querySelectorAll("body > *"))if(Number(D==null?void 0:D.contains(o(e)))^Number(D==null?void 0:D.contains(o(a))))return!0;let r=ee(),g=r.indexOf(o(e)),x=(g+r.length-1)%r.length,C=(g+1)%r.length,A=r[x],fe=r[C];return!((n=o(a))!=null&&n.contains(A))&&!((u=o(a))!=null&&u.contains(fe))}),P={popoverState:t,buttonId:E(null),panelId:E(null),panel:a,button:e,isPortalled:S,beforePanelSentinel:h,afterPanelSentinel:p,togglePopover(){t.value=O(t.value,{0:1,1:0})},closePopover(){t.value!==1&&(t.value=1)},close(n){P.closePopover();let u=n?n instanceof HTMLElement?n:n.value instanceof HTMLElement?o(n):o(P.button):o(P.button);u==null||u.focus()}};Y(ce,P),Fe(k(()=>O(t.value,{0:q.Open,1:q.Closed})));let $={buttonId:P.buttonId,panelId:P.panelId,close(){P.closePopover()}},w=pe(),_=w==null?void 0:w.registerPopover,[L,f]=Oe(),m=Le({mainTreeNodeRef:w==null?void 0:w.mainTreeNodeRef,portals:L,defaultContainers:[e,a]});function i(){var n,u,r,g;return(g=w==null?void 0:w.isFocusWithinPopoverGroup())!=null?g:((n=d.value)==null?void 0:n.activeElement)&&(((u=o(e))==null?void 0:u.contains(d.value.activeElement))||((r=o(a))==null?void 0:r.contains(d.value.activeElement)))}return z(()=>_==null?void 0:_($)),_e((y=d.value)==null?void 0:y.defaultView,"focus",n=>{var u,r;n.target!==window&&n.target instanceof HTMLElement&&t.value===0&&(i()||e&&a&&(m.contains(n.target)||(u=o(P.beforePanelSentinel))!=null&&u.contains(n.target)||(r=o(P.afterPanelSentinel))!=null&&r.contains(n.target)||P.closePopover()))},!0),Ce(m.resolveContainers,(n,u)=>{var r;P.closePopover(),Ne(u,Te.Loose)||(n.preventDefault(),(r=o(e))==null||r.focus())},k(()=>t.value===0)),()=>{let n={open:t.value===0,close:P.close};return I(U,[I(f,{},()=>Z({theirProps:{...l,...v},ourProps:{ref:c},slot:n,slots:s,attrs:v,name:"Popover"})),I(m.MainTreeNode)])}}}),De=H({name:"PopoverButton",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1},id:{type:String,default:null}},inheritAttrs:!1,setup(l,{attrs:s,slots:v,expose:b}){var y;let c=(y=l.id)!=null?y:`headlessui-popover-button-${M()}`,t=te("PopoverButton"),e=k(()=>J(t.button));b({el:t.button,$el:t.button}),ue(()=>{t.buttonId.value=c}),se(()=>{t.buttonId.value=null});let h=pe(),p=h==null?void 0:h.closeOthers,a=Ae(),d=k(()=>a===null?!1:a.value===t.panelId.value),S=E(null),P=`headlessui-focus-sentinel-${M()}`;d.value||z(()=>{t.button.value=o(S)});let $=Be(k(()=>({as:l.as,type:s.type})),S);function w(n){var u,r,g,x,C;if(d.value){if(t.popoverState.value===1)return;switch(n.key){case T.Space:case T.Enter:n.preventDefault(),(r=(u=n.target).click)==null||r.call(u),t.closePopover(),(g=o(t.button))==null||g.focus();break}}else switch(n.key){case T.Space:case T.Enter:n.preventDefault(),n.stopPropagation(),t.popoverState.value===1&&(p==null||p(t.buttonId.value)),t.togglePopover();break;case T.Escape:if(t.popoverState.value!==0)return p==null?void 0:p(t.buttonId.value);if(!o(t.button)||(x=e.value)!=null&&x.activeElement&&!((C=o(t.button))!=null&&C.contains(e.value.activeElement)))return;n.preventDefault(),n.stopPropagation(),t.closePopover();break}}function _(n){d.value||n.key===T.Space&&n.preventDefault()}function L(n){var u,r;l.disabled||(d.value?(t.closePopover(),(u=o(t.button))==null||u.focus()):(n.preventDefault(),n.stopPropagation(),t.popoverState.value===1&&(p==null||p(t.buttonId.value)),t.togglePopover(),(r=o(t.button))==null||r.focus()))}function f(n){n.preventDefault(),n.stopPropagation()}let m=ie();function i(){let n=o(t.panel);if(!n)return;function u(){O(m.value,{[F.Forwards]:()=>B(n,N.First),[F.Backwards]:()=>B(n,N.Last)})===X.Error&&B(ee().filter(r=>r.dataset.headlessuiFocusGuard!=="true"),O(m.value,{[F.Forwards]:N.Next,[F.Backwards]:N.Previous}),{relativeTo:o(t.button)})}u()}return()=>{let n=t.popoverState.value===0,u={open:n},{...r}=l,g=d.value?{ref:S,type:$.value,onKeydown:w,onClick:L}:{ref:S,id:c,type:$.value,"aria-expanded":t.popoverState.value===0,"aria-controls":o(t.panel)?t.panelId.value:void 0,disabled:l.disabled?!0:void 0,onKeydown:w,onKeyup:_,onClick:L,onMousedown:f};return I(U,[Z({ourProps:g,theirProps:{...s,...r},slot:u,attrs:s,slots:v,name:"PopoverButton"}),n&&!d.value&&t.isPortalled.value&&I(V,{id:P,features:K.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:i})])}}}),Re=H({name:"PopoverPanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},focus:{type:Boolean,default:!1},id:{type:String,default:null}},inheritAttrs:!1,setup(l,{attrs:s,slots:v,expose:b}){var y;let c=(y=l.id)!=null?y:`headlessui-popover-panel-${M()}`,{focus:t}=l,e=te("PopoverPanel"),h=k(()=>J(e.panel)),p=`headlessui-focus-sentinel-before-${M()}`,a=`headlessui-focus-sentinel-after-${M()}`;b({el:e.panel,$el:e.panel}),ue(()=>{e.panelId.value=c}),se(()=>{e.panelId.value=null}),Y(ve,e.panelId),z(()=>{var f,m;if(!t||e.popoverState.value!==0||!e.panel)return;let i=(f=h.value)==null?void 0:f.activeElement;(m=o(e.panel))!=null&&m.contains(i)||B(o(e.panel),N.First)});let d=Ie(),S=k(()=>d!==null?(d.value&q.Open)===q.Open:e.popoverState.value===0);function P(f){var m,i;switch(f.key){case T.Escape:if(e.popoverState.value!==0||!o(e.panel)||h.value&&!((m=o(e.panel))!=null&&m.contains(h.value.activeElement)))return;f.preventDefault(),f.stopPropagation(),e.closePopover(),(i=o(e.button))==null||i.focus();break}}function $(f){var m,i,n,u,r;let g=f.relatedTarget;g&&o(e.panel)&&((m=o(e.panel))!=null&&m.contains(g)||(e.closePopover(),((n=(i=o(e.beforePanelSentinel))==null?void 0:i.contains)!=null&&n.call(i,g)||(r=(u=o(e.afterPanelSentinel))==null?void 0:u.contains)!=null&&r.call(u,g))&&g.focus({preventScroll:!0})))}let w=ie();function _(){let f=o(e.panel);if(!f)return;function m(){O(w.value,{[F.Forwards]:()=>{var i;B(f,N.First)===X.Error&&((i=o(e.afterPanelSentinel))==null||i.focus())},[F.Backwards]:()=>{var i;(i=o(e.button))==null||i.focus({preventScroll:!0})}})}m()}function L(){let f=o(e.panel);if(!f)return;function m(){O(w.value,{[F.Forwards]:()=>{let i=o(e.button),n=o(e.panel);if(!i)return;let u=ee(),r=u.indexOf(i),g=u.slice(0,r+1),x=[...u.slice(r+1),...g];for(let C of x.slice())if(C.dataset.headlessuiFocusGuard==="true"||n!=null&&n.contains(C)){let A=x.indexOf(C);A!==-1&&x.splice(A,1)}B(x,N.First,{sorted:!1})},[F.Backwards]:()=>{var i;B(f,N.Previous)===X.Error&&((i=o(e.button))==null||i.focus())}})}m()}return()=>{let f={open:e.popoverState.value===0,close:e.close},{focus:m,...i}=l,n={ref:e.panel,id:c,onKeydown:P,onFocusout:t&&e.popoverState.value===0?$:void 0,tabIndex:-1};return Z({ourProps:n,theirProps:{...s,...i},attrs:s,slot:f,slots:{...v,default:(...u)=>{var r;return[I(U,[S.value&&e.isPortalled.value&&I(V,{id:p,ref:e.beforePanelSentinel,features:K.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:_}),(r=v.default)==null?void 0:r.call(v,...u),S.value&&e.isPortalled.value&&I(V,{id:a,ref:e.afterPanelSentinel,features:K.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:L})])]}},features:ae.RenderStrategy|ae.Static,visible:S.value,name:"PopoverPanel"})}}});const je={class:"grid grid-cols-1"},Ue=H({__name:"Wrapper",props:{menu:{type:Object,required:!0}},setup(l){const s=Pe();ge();const{parseMenuRoute:v,parseMenuTitle:b}=me(),y=l,c=k(()=>{var e,h,p,a;if(!((e=y.menu)!=null&&e.children))return!1;const t=((h=y.menu)==null?void 0:h.children)||[];for(const d of t){const S=v(d.to);if(typeof S=="string"&&S===s.path||(a=s.name)!=null&&a.toString().includes((p=S.name)==null?void 0:p.toString()))return!0}return!1});return(t,e)=>{const h=be,p=ye,a=De,d=Re,S=de;return l.menu.type!=="dropdown"?(R(),Q(h,{key:0,menu:l.menu},null,8,["menu"])):l.menu.children&&l.menu.children.length>0?(R(),Q(S,{key:1},{default:j(({open:P})=>[G(a,{class:"flex items-center transition-all duration-300 text-gray-900 dark:text-gray-100"},{default:j(()=>[ne("span",{class:le([oe(c)?"font-bold":""])},he(oe(b)(l.menu.title)),3),G(p,{name:"carbon:chevron-down",class:le(["ml-1",[P?"transform rotate-180":""]])},null,8,["class"])]),_:2},1024),G(Se,{"enter-active-class":"transition duration-200 ease-out","enter-from-class":"translate-y-1 opacity-0","enter-to-class":"translate-y-0 opacity-100","leave-active-class":"transition duration-150 ease-in","leave-from-class":"translate-y-0 opacity-100","leave-to-class":"translate-y-1 opacity-0"},{default:j(()=>[G(d,{class:"absolute z-10 px-2 py-2 rounded-lg min-w-[150px] bg-gray-50 border-gray-300 dark:bg-gray-900 border dark:border-gray-600"},{default:j(()=>[ne("div",je,[(R(!0),we(U,null,Ee(l.menu.children,($,w)=>(R(),Q(h,{key:w,menu:$,"is-dropdown":""},null,8,["menu"]))),128))])]),_:1})]),_:1})]),_:1})):ke("",!0)}}});export{Ue as _};
