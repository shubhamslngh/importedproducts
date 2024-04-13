import __nuxt_component_0 from './Wrapper-CSw0DXQZ.mjs';
import __nuxt_component_3 from './index-CHg0DFwX.mjs';
import { e as useAppConfig, f as useAuthStore } from './server.mjs';
import { defineComponent, ref, computed, mergeProps, withCtx, unref, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrRenderStyle, ssrInterpolate } from 'vue/server-renderer';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
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
  __name: "Welcome",
  __ssrInlineRender: true,
  props: {
    withAlert: {
      type: Boolean,
      default: true
    },
    name: {
      type: String
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
    const leadingsText = computed(() => [
      {
        text: titlesText.value[0],
        startColor: "purple",
        endColor: "white",
        delay: 0
      },
      {
        text: titlesText.value[1],
        startColor: "purple",
        endColor: "yellow",
        delay: 2
      },
      {
        text: titlesText.value[2],
        startColor: "purple",
        endColor: "yellow",
        delay: 4
      }
    ]);
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

export { _sfc_main as default };
//# sourceMappingURL=Welcome-_2ZIwMi3.mjs.map
