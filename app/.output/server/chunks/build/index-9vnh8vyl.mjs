import __nuxt_component_1 from './lamp-DYDVDS4O.mjs';
import _sfc_main$1 from './Welcome-BCQOFwZU.mjs';
import { a as useAppConfig, u as useHead } from './server.mjs';
import { useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './Wrapper-CSw0DXQZ.mjs';
import './index-CHg0DFwX.mjs';
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

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useAppConfig();
    useHead({ titleTemplate: "", title: "" });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AwesomeLamp = __nuxt_component_1;
      const _component_AwesomeWelcome = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_AwesomeLamp, null, null, _parent));
      _push(ssrRenderComponent(_component_AwesomeWelcome, {
        name: "IMPORTED PRODUCTS ",
        "with-alert": true,
        class: "min-h-[100vh]"
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-9vnh8vyl.mjs.map
