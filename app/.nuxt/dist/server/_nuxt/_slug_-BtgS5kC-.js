import __nuxt_component_0 from "./Wrapper-CSw0DXQZ.js";
import _sfc_main$1 from "./Doc-_Zvy68h0.js";
import { defineComponent, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./ContentDoc-C1XdnHrD.js";
import "../server.mjs";
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
import "./ContentRenderer-jZ6fP1wX.js";
import "./ContentRendererMarkdown-CnMaRRHp.js";
import "scule";
import "property-information";
import "./preview-DJIgRIyz.js";
import "./ContentQuery-SqiXVoRN.js";
import "./query-COWNFiXg.js";
import "./Header-B6zZF8Qh.js";
import "./Title-BIa0rC2o.js";
import "./index-CHg0DFwX.js";
import "./Error-CLAEcVqt.js";
import "./index-DoEbZrXI.js";
import "./nuxt-link-DW4x5zSp.js";
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
export {
  _sfc_main as default
};
//# sourceMappingURL=_slug_-BtgS5kC-.js.map
