import __nuxt_component_0 from './Wrapper-CSw0DXQZ.mjs';
import __nuxt_component_1 from './Header-B6zZF8Qh.mjs';
import _sfc_main$1 from './Title-BIa0rC2o.mjs';
import __nuxt_component_3 from './index-CHg0DFwX.mjs';
import _sfc_main$2 from './Title-yS4Jz3G_.mjs';
import { defineComponent, withCtx, createVNode, useSSRContext } from 'vue';
import { u as useHead } from './server.mjs';
import { ssrRenderComponent } from 'vue/server-renderer';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "components",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({ title: "Blank Page" });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LayoutPageWrapper = __nuxt_component_0;
      const _component_LayoutPageHeader = __nuxt_component_1;
      const _component_LayoutPageTitle = _sfc_main$1;
      const _component_LayoutPageSection = __nuxt_component_3;
      const _component_LayoutPageSectionTitle = _sfc_main$2;
      _push(ssrRenderComponent(_component_LayoutPageWrapper, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_LayoutPageHeader, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_LayoutPageTitle, {
                    text: "Components Page",
                    class: "capitalize"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_LayoutPageTitle, {
                      text: "Components Page",
                      class: "capitalize"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_LayoutPageSection, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_LayoutPageSectionTitle, { text: "Coming Soon" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_LayoutPageSectionTitle, { text: "Coming Soon" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_LayoutPageHeader, null, {
                default: withCtx(() => [
                  createVNode(_component_LayoutPageTitle, {
                    text: "Components Page",
                    class: "capitalize"
                  })
                ]),
                _: 1
              }),
              createVNode(_component_LayoutPageSection, null, {
                default: withCtx(() => [
                  createVNode(_component_LayoutPageSectionTitle, { text: "Coming Soon" })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/docs/components.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=components-BshM-9Iq.mjs.map
