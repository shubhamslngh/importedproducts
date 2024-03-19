import _sfc_main$1 from './ContentDoc-C1XdnHrD.mjs';
import __nuxt_component_1 from './Header-B6zZF8Qh.mjs';
import _sfc_main$2 from './Title-BIa0rC2o.mjs';
import __nuxt_component_3 from './index-CHg0DFwX.mjs';
import _sfc_main$3 from './ContentRenderer-jZ6fP1wX.mjs';
import _sfc_main$4 from './Error-CLAEcVqt.mjs';
import { defineComponent, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import './server.mjs';
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
import './ContentQuery-SqiXVoRN.mjs';
import './query-COWNFiXg.mjs';
import './preview-DJIgRIyz.mjs';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './ContentRendererMarkdown-CnMaRRHp.mjs';
import 'property-information';
import './Wrapper-CSw0DXQZ.mjs';
import './index-DoEbZrXI.mjs';
import './nuxt-link-DW4x5zSp.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Doc",
  __ssrInlineRender: true,
  props: {
    emptyTip: {
      type: String,
      required: false,
      default: "This page is empty"
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ContentDoc = _sfc_main$1;
      const _component_LayoutPageHeader = __nuxt_component_1;
      const _component_LayoutPageTitle = _sfc_main$2;
      const _component_LayoutPageSection = __nuxt_component_3;
      const _component_ContentRenderer = _sfc_main$3;
      const _component_AwesomeError = _sfc_main$4;
      _push(ssrRenderComponent(_component_ContentDoc, _attrs, {
        default: withCtx(({ doc }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_LayoutPageHeader, null, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_LayoutPageTitle, {
                    text: doc.title
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_LayoutPageTitle, {
                      text: doc.title
                    }, null, 8, ["text"])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_LayoutPageSection, null, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ContentRenderer, { value: doc }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ContentRenderer, { value: doc }, null, 8, ["value"])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_LayoutPageHeader, null, {
                default: withCtx(() => [
                  createVNode(_component_LayoutPageTitle, {
                    text: doc.title
                  }, null, 8, ["text"])
                ]),
                _: 2
              }, 1024),
              createVNode(_component_LayoutPageSection, null, {
                default: withCtx(() => [
                  createVNode(_component_ContentRenderer, { value: doc }, null, 8, ["value"])
                ]),
                _: 2
              }, 1024)
            ];
          }
        }),
        empty: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h1${_scopeId}>${ssrInterpolate(__props.emptyTip)}</h1>`);
          } else {
            return [
              createVNode("h1", null, toDisplayString(__props.emptyTip), 1)
            ];
          }
        }),
        "not-found": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_AwesomeError, {
              code: 404,
              wrap: ""
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_AwesomeError, {
                code: 404,
                wrap: ""
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/awesome/Content/Doc.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Doc-_Zvy68h0.mjs.map
