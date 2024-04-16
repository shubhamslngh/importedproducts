import _sfc_main$1 from './Navbar-D7ZNxmWQ.mjs';
import __nuxt_component_1 from './Content-C2f3kgVA.mjs';
import { mergeProps, withCtx, renderSlot, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './nuxt-link-DuPix_nQ.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'shiki/core';
import '@shikijs/transformers';
import 'unified';
import 'mdast-util-to-string';
import 'micromark';
import 'unist-util-stringify-position';
import 'micromark-util-character';
import 'micromark-util-chunked';
import 'micromark-util-resolve-all';
import 'micromark-util-sanitize-uri';
import 'slugify';
import 'remark-parse';
import 'remark-rehype';
import 'remark-mdc';
import 'hast-util-to-string';
import 'github-slugger';
import 'detab';
import 'remark-emoji';
import 'remark-gfm';
import 'rehype-external-links';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import './server.mjs';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'ts-invariant';
import 'zen-observable-ts';
import '@wry/caches';
import '@vue/apollo-option';
import 'graphql';
import 'optimism';
import '@wry/equality';
import '@wry/trie';
import 'pinia-plugin-persistedstate';
import 'axios';
import './Icon-8QwQaLlr.mjs';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import './index-C91WxrSi.mjs';
import './Wrapper-BytDg93k.mjs';
import './Item-vTDX-N5x.mjs';
import './index-BiVuT8Ja.mjs';
import './env-CWaVQ5oT.mjs';
import './focus-management-je2kZWzN.mjs';
import './use-outside-click-Do9_uFVP.mjs';
import './open-closed-BDzQJ33n.mjs';
import './ThemeSwitcher-HSOxbnOf.mjs';
import './index-wZZaSsjS.mjs';
import './index-C7WNADVQ.mjs';
import './micro-task-B6uncIso.mjs';
import './Group-Cstq90hG.mjs';
import './ItemButton-Dw-r8Rgd.mjs';
import './Header-DhGRSkOO.mjs';
import './HeaderTitle-Da9PfkBl.mjs';
import './Item-BCUbGuGR.mjs';
import './use-awesome-screen-BbI2BgU-.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_LayoutPageNavbar = _sfc_main$1;
  const _component_LayoutPageContent = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "overflow-none" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_LayoutPageNavbar, { class: "h-[64px] max-h-[64px] w-full" }, null, _parent));
  _push(ssrRenderComponent(_component_LayoutPageContent, { class: "flex-col" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
      } else {
        return [
          renderSlot(_ctx.$slots, "default")
        ];
      }
    }),
    _: 3
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layouts/page.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const page = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { page as default };
//# sourceMappingURL=page-CVgY2UDD.mjs.map
