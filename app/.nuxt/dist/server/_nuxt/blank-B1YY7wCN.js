import __nuxt_component_0 from "./Wrapper-CSw0DXQZ.js";
import _sfc_main$1 from "./Welcome-BCQOFwZU.js";
import _sfc_main$2 from "./Graphql-C5EqM4Di.js";
import { mergeProps, withCtx, createVNode, useSSRContext } from "vue";
import { u as useHead } from "../server.mjs";
import "hookable";
import { ssrRenderComponent } from "vue/server-renderer";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./index-CHg0DFwX.js";
import "graphql-tag";
import "#internal/nitro";
import "ofetch";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "ufo";
import "defu";
import "klona";
import "@vue/devtools-api";
import "destr";
import "devalue";
import "ts-invariant";
import "zen-observable-ts";
import "symbol-observable";
import "@wry/caches";
import "@vue/apollo-option";
import "cookie-es";
import "ohash";
import "graphql";
import "optimism";
import "@wry/equality";
import "@wry/trie";
import "pinia-plugin-persistedstate";
import "axios";
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
export {
  _sfc_main as default
};
//# sourceMappingURL=blank-B1YY7wCN.js.map
