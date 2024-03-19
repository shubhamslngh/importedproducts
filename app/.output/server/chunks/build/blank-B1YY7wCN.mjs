import __nuxt_component_0 from './Wrapper-CSw0DXQZ.mjs';
import _sfc_main$1 from './Welcome-BCQOFwZU.mjs';
import _sfc_main$2 from './Graphql-C5EqM4Di.mjs';
import { mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { u as useHead } from './server.mjs';
import { ssrRenderComponent } from 'vue/server-renderer';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './index-CHg0DFwX.mjs';
import 'graphql-tag';
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
  __name: "blank",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({ title: "Blank Page" });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LayoutPageWrapper = __nuxt_component_0;
      const _component_AwesomeWelcome = _sfc_main$1;
      const _component_AwesomeGraphql = _sfc_main$2;
      _push(ssrRenderComponent(_component_LayoutPageWrapper, mergeProps({ class: "min-w-[100vw] max-h-[100vh] overflow-y" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_AwesomeWelcome, { name: "cases  " }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_AwesomeGraphql, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_AwesomeWelcome, { name: "cases  " }),
              createVNode(_component_AwesomeGraphql)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blank.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=blank-B1YY7wCN.mjs.map
