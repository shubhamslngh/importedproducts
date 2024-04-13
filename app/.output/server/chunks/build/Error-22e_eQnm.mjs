import __nuxt_component_0 from './Wrapper-CSw0DXQZ.mjs';
import _sfc_main$1 from './index-BiVuT8Ja.mjs';
import { defineComponent, computed, createVNode, resolveDynamicComponent, unref, mergeProps, withCtx, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderVNode, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Error",
  __ssrInlineRender: true,
  props: {
    code: {
      type: Number,
      default: 400
    },
    wrap: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const PageWrapper = __nuxt_component_0;
    const props = __props;
    const errorsMap = {
      "400": "Bad Request",
      "401": "Unauthorized",
      "403": "Forbidden",
      "404": "Not Found"
    };
    const error = computed(() => {
      const { code } = props;
      return {
        code,
        message: errorsMap[code.toString()] || "Unknown Error"
      };
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AwesomeButton = _sfc_main$1;
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(props.wrap ? unref(PageWrapper) : "div"), mergeProps({
        class: props.wrap ? "flex flex-col items-center justify-center" : ""
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h1 class="text-center mb-6 leading-3"${_scopeId}><span class="font-bold text-8xl block"${_scopeId}>${ssrInterpolate(unref(error).code)}</span><span class="block italic"${_scopeId}>${ssrInterpolate(unref(error).message)}</span></h1>`);
            _push2(ssrRenderComponent(_component_AwesomeButton, {
              text: "Home",
              to: "/",
              size: "sm"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("h1", { class: "text-center mb-6 leading-3" }, [
                createVNode("span", { class: "font-bold text-8xl block" }, toDisplayString(unref(error).code), 1),
                createVNode("span", { class: "block italic" }, toDisplayString(unref(error).message), 1)
              ]),
              createVNode(_component_AwesomeButton, {
                text: "Home",
                to: "/",
                size: "sm"
              })
            ];
          }
        }),
        _: 1
      }), _parent);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/awesome/Error.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Error-22e_eQnm.mjs.map
