import __nuxt_component_0 from "./Wrapper-CSw0DXQZ.js";
import _sfc_main$1 from "./Welcome-_2ZIwMi3.js";
import _sfc_main$2 from "./Cart-M-V_k1B-.js";
import { mergeProps, withCtx, createVNode, useSSRContext } from "vue";
import { u as useHead } from "../server.mjs";
import { ssrRenderComponent } from "vue/server-renderer";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./index-CHg0DFwX.js";
import "hookable";
import "./Cases-DtbYqHoy.js";
import "./Variations-BZjaVUyd.js";
import "swiper/vue";
import "./cart-CRQWliXk.js";
import "graphql-tag";
import "./entry-styles-5.mjs-XBoGKiHI.js";
import "swiper/modules";
import "./AddtoCart-B73ULrWL.js";
import "./index-BiVuT8Ja.js";
import "./nuxt-link-DuPix_nQ.js";
import "ufo";
import "./use-counter-Ocg8JTnf.js";
import "destr";
import "klona";
import "devalue";
import "defu";
import "swiper";
import "#internal/nitro";
import "ofetch";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "@vue/devtools-api";
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
  __name: "cart",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({ title: "cart" });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LayoutPageWrapper = __nuxt_component_0;
      const _component_AwesomeWelcome = _sfc_main$1;
      const _component_AwesomeCart = _sfc_main$2;
      _push(ssrRenderComponent(_component_LayoutPageWrapper, mergeProps({ class: "min-w-[100vw] max-h-[100vh]" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_AwesomeWelcome, { name: "cart  " }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_AwesomeCart, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_AwesomeWelcome, { name: "cart  " }),
              createVNode(_component_AwesomeCart)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/cart.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=cart-CyGFDaH1.js.map