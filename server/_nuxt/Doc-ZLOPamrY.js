import _sfc_main$1 from "./ContentDoc-BP5F1NFm.js";
import __nuxt_component_1 from "./Header-B6zZF8Qh.js";
import _sfc_main$2 from "./Title-BIa0rC2o.js";
import __nuxt_component_3 from "./index-CHg0DFwX.js";
import _sfc_main$3 from "./ContentRenderer-B8YMXpLV.js";
import _sfc_main$4 from "./Error-22e_eQnm.js";
import { defineComponent, withCtx, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
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
import "./ContentQuery-DR-eC9Fp.js";
import "./query-Qn0gMuuU.js";
import "./preview-ni3bbIdF.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./ContentRendererMarkdown-DxcUkqC1.js";
import "scule";
import "property-information";
import "./Wrapper-CSw0DXQZ.js";
import "./index-BiVuT8Ja.js";
import "./nuxt-link-DuPix_nQ.js";
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
export {
  _sfc_main as default
};
//# sourceMappingURL=Doc-ZLOPamrY.js.map
