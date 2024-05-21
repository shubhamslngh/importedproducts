import { e as useAppConfig } from "../server.mjs";
import { defineComponent, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate } from "vue/server-renderer";
import "#internal/nitro";
import "ofetch";
import "hookable";
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
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    const { awesome } = useAppConfig();
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e;
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "Footer static mx-auto allign-bottom border-t my-8 mt-5 border-gray-900/10 dark:border-gray-50/[0.2]" }, _attrs))}><div class="Footer justify-between allign-bottom mx-auto px-4 md:flex-row py-2 space-y-2 md:space-y-0 items-center text-xs text-center md:text-left text-gray-400"><div> Copyright © ${ssrInterpolate(((_c = (_b = (_a = unref(awesome)) == null ? void 0 : _a.layout) == null ? void 0 : _b.footer) == null ? void 0 : _c.year) || (/* @__PURE__ */ new Date()).getFullYear())} ${ssrInterpolate(((_e = (_d = unref(awesome)) == null ? void 0 : _d.author) == null ? void 0 : _e.name) || "")}. All rights reserved. </div><div>${ssrInterpolate(unref(awesome).name)}</div></div></footer>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/layouts/Page/Footer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=Footer-slvujmy-.js.map
