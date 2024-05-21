import _sfc_main$1 from "./Navbar-Blf7Nm-a.js";
import __nuxt_component_1 from "./Content-C2f3kgVA.js";
import { mergeProps, withCtx, renderSlot, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./nuxt-link-DuPix_nQ.js";
import "ufo";
import "../server.mjs";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
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
import "./Icon-BLSQvnWJ.js";
import "@iconify/vue/dist/offline";
import "@iconify/vue";
import "./index-C91WxrSi.js";
import "./Wrapper-BxSDpiCs.js";
import "./Item-WKVZeniT.js";
import "./index-zPKawY5Q.js";
import "./env-CWaVQ5oT.js";
import "./focus-management-je2kZWzN.js";
import "./use-outside-click-Do9_uFVP.js";
import "./open-closed-BDzQJ33n.js";
import "./ThemeSwitcher-Brs8ppmy.js";
import "./index-wZZaSsjS.js";
import "./index-BzXcNATq.js";
import "./micro-task-B6uncIso.js";
import "./Group-weYBKntf.js";
import "./ItemButton-Dw-r8Rgd.js";
import "./Header-BCyUks5n.js";
import "./HeaderTitle-Da9PfkBl.js";
import "./Item-CkBYsyYn.js";
import "./use-awesome-screen-BbI2BgU-.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_LayoutPageNavbar = _sfc_main$1;
  const _component_LayoutPageContent = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "overflow-none" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_LayoutPageNavbar, { class: "h-[64px] max-h-[64px] w-full" }, null, _parent));
  _push(ssrRenderComponent(_component_LayoutPageContent, { class: "flex-col" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
      } else {
        return [
          renderSlot(_ctx.$slots, "default")
        ];
      }
    }),
    _: 3
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layouts/page.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const page = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  page as default
};
//# sourceMappingURL=page-BY1s2OH0.js.map
