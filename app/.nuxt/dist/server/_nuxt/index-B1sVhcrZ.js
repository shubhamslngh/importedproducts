import __nuxt_component_0 from "./Wrapper-CSw0DXQZ.js";
import __nuxt_component_1 from "./lamp-DfWd0cjs.js";
import _sfc_main$1 from "./Subscription-CD5a1CwG.js";
import { withCtx, unref, createVNode, useSSRContext } from "vue";
import { u as useHead, l as useNuxtApp } from "../server.mjs";
import { ssrRenderComponent } from "vue/server-renderer";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./Welcome-_2ZIwMi3.js";
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
import "graphql-tag";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({ title: "Posts" });
    const { $wordpressStore } = useNuxtApp();
    console.log(" work");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LayoutPageWrapper = __nuxt_component_0;
      const _component_AwesomeLamp = __nuxt_component_1;
      const _component_AwesomeSubscription = _sfc_main$1;
      _push(ssrRenderComponent(_component_LayoutPageWrapper, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_AwesomeLamp, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_AwesomeSubscription, {
              subscriptions: unref($wordpressStore).productBg
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_AwesomeLamp),
              createVNode(_component_AwesomeSubscription, {
                subscriptions: unref($wordpressStore).productBg
              }, null, 8, ["subscriptions"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/post/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-B1sVhcrZ.js.map
