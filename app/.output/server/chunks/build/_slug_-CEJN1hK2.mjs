import __nuxt_component_0 from './Wrapper-CSw0DXQZ.mjs';
import _sfc_main$1 from './Doc-Ccf8LThB.mjs';
import { defineComponent, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './ContentDoc-CvfmcjrD.mjs';
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
import './ContentRenderer-BpUzFDQL.mjs';
import './ContentRendererMarkdown-BDkQ0cRz.mjs';
import 'property-information';
import './preview-DVAhrPNu.mjs';
import './ContentQuery-PRAuUOif.mjs';
import './query-Br-_9uEw.mjs';
import './Header-B6zZF8Qh.mjs';
import './Title-BIa0rC2o.mjs';
import './index-CHg0DFwX.mjs';
import './Error-22e_eQnm.mjs';
import './index-BiVuT8Ja.mjs';
import './nuxt-link-DuPix_nQ.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[slug]",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LayoutPageWrapper = __nuxt_component_0;
      const _component_AwesomeContentDoc = _sfc_main$1;
      _push(ssrRenderComponent(_component_LayoutPageWrapper, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_AwesomeContentDoc, { "empty-tip": "Post im empty" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_AwesomeContentDoc, { "empty-tip": "Post im empty" })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/post/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_slug_-CEJN1hK2.mjs.map
