import __nuxt_component_1 from "./lamp-DYDVDS4O.js";
import _sfc_main$1 from "./Welcome-BCQOFwZU.js";
import { a as useAppConfig, u as useHead } from "../server.mjs";
import { useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./Wrapper-CSw0DXQZ.js";
import "./index-CHg0DFwX.js";
import "hookable";
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
export {
  _sfc_main as default
};
//# sourceMappingURL=index-9vnh8vyl.js.map
