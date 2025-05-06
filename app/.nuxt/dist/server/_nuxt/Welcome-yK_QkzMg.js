import __nuxt_component_0 from "./Wrapper-CSw0DXQZ.js";
import __nuxt_component_3 from "./index-CHg0DFwX.js";
import { e as useAppConfig, f as useAuthStore } from "../server.mjs";
import { defineComponent, ref, computed, mergeProps, withCtx, unref, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, useSSRContext } from "vue";
import "hookable";
import { ssrRenderComponent, ssrRenderList, ssrRenderStyle, ssrInterpolate } from "vue/server-renderer";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "#internal/nitro";
import "ofetch";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "ufo";
import "@vue/devtools-api";
import "defu";
import "klona";
import "destr";
import "devalue";
import "ts-invariant";
import "zen-observable-ts";
import "symbol-observable";
import "@wry/caches";
import "@vue/apollo-option";
import "throttle-debounce";
import "cookie-es";
import "ohash";
import "graphql";
import "optimism";
import "@wry/equality";
import "@wry/trie";
import "pinia-plugin-persistedstate";
import "axios";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Welcome",
  __ssrInlineRender: true,
  props: {
    withAlert: {
      type: Boolean,
      default: true
    },
    name: {
      type: String
    },
    startColor: {
      type: Array,
      default: () => ["purple", "red", "green"]
      // Default colors if none provided
    },
    endColor: {
      type: Array,
      default: () => ["white", "green", "blue"]
    }
  },
  setup(__props) {
    var _a, _b, _c, _d;
    const { awesome } = useAppConfig();
    const authStore = useAuthStore();
    authStore.user;
    const props = __props;
    ref(
      ((_b = (_a = awesome == null ? void 0 : awesome.layout) == null ? void 0 : _a.welcome) == null ? void 0 : _b.disableInfoReplaceIndexInWelcomePage) ? !((_d = (_c = awesome == null ? void 0 : awesome.layout) == null ? void 0 : _c.welcome) == null ? void 0 : _d.disableInfoReplaceIndexInWelcomePage) : props.withAlert
    );
    const titlesText = computed(() => {
      const originalText = props.name || "";
      return originalText.replaceAll("&nbsp;", "[space]").split(" ").map((item) => item.replaceAll("[space]", " "));
    });
    const leadingsText = computed(() => {
      const words = titlesText.value;
      while (words.length < 3) {
        words.push("");
      }
      return [
        {
          text: words[0],
          startColor: props.startColor[0],
          endColor: props.endColor[0],
          delay: 0
        },
        {
          text: words[1],
          startColor: props.startColor[1],
          endColor: props.endColor[1],
          delay: 2
        },
        {
          text: words[2],
          startColor: props.startColor[2],
          endColor: props.endColor[2],
          delay: 4
        }
      ];
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LayoutPageWrapper = __nuxt_component_0;
      const _component_LayoutPageSection = __nuxt_component_3;
      _push(ssrRenderComponent(_component_LayoutPageWrapper, mergeProps({ class: "flex-1 relative z-[-1]" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_LayoutPageSection, { class: "flex-1 flex" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex-1 flex flex-col items-center justify-center"${_scopeId2}><h1 class="text-center mt-4"${_scopeId2}><!--[-->`);
                  ssrRenderList(unref(leadingsText), (item, i) => {
                    _push3(`<span style="${ssrRenderStyle(`--content: '${item.text}'; --start-color: ${item.startColor}; --end-color: ${item.endColor}; --animation-name: anim-fg-${i + 1}`)}" class="animated-text-bg drop-shadow-xl text-6xl sm:text-8xl md:text-8xl lg:text-8xl 2xl:text-8xl block font-black uppercase"${_scopeId2}><span class="animated-text-fg"${_scopeId2}>${ssrInterpolate(item.text)}</span></span>`);
                  });
                  _push3(`<!--]--></h1></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex-1 flex flex-col items-center justify-center" }, [
                      createVNode("h1", { class: "text-center mt-4" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(leadingsText), (item, i) => {
                          return openBlock(), createBlock("span", {
                            key: i,
                            style: `--content: '${item.text}'; --start-color: ${item.startColor}; --end-color: ${item.endColor}; --animation-name: anim-fg-${i + 1}`,
                            class: "animated-text-bg drop-shadow-xl text-6xl sm:text-8xl md:text-8xl lg:text-8xl 2xl:text-8xl block font-black uppercase"
                          }, [
                            createVNode("span", { class: "animated-text-fg" }, toDisplayString(item.text), 1)
                          ], 4);
                        }), 128))
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_LayoutPageSection, { class: "flex-1 flex" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex-1 flex flex-col items-center justify-center" }, [
                    createVNode("h1", { class: "text-center mt-4" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(leadingsText), (item, i) => {
                        return openBlock(), createBlock("span", {
                          key: i,
                          style: `--content: '${item.text}'; --start-color: ${item.startColor}; --end-color: ${item.endColor}; --animation-name: anim-fg-${i + 1}`,
                          class: "animated-text-bg drop-shadow-xl text-6xl sm:text-8xl md:text-8xl lg:text-8xl 2xl:text-8xl block font-black uppercase"
                        }, [
                          createVNode("span", { class: "animated-text-fg" }, toDisplayString(item.text), 1)
                        ], 4);
                      }), 128))
                    ])
                  ])
                ]),
                _: 1
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/awesome/Welcome.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=Welcome-yK_QkzMg.js.map
