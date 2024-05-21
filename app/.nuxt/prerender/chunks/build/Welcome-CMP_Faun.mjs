import __nuxt_component_0 from './Wrapper-CSw0DXQZ.mjs';
import __nuxt_component_3 from './index-CHg0DFwX.mjs';
import { e as useAppConfig, f as useAuthStore } from './server.mjs';
import { defineComponent, ref, computed, mergeProps, withCtx, unref, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, useSSRContext } from 'file:///Users/shubhamsingh/namma/importedProds/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderList, ssrRenderStyle, ssrInterpolate } from 'file:///Users/shubhamsingh/namma/importedProds/node_modules/vue/server-renderer/index.mjs';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import 'file:///Users/shubhamsingh/namma/importedProds/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/shubhamsingh/namma/importedProds/node_modules/hookable/dist/index.mjs';
import 'file:///Users/shubhamsingh/namma/importedProds/node_modules/unctx/dist/index.mjs';
import 'file:///Users/shubhamsingh/namma/importedProds/node_modules/h3/dist/index.mjs';
import 'file:///Users/shubhamsingh/namma/importedProds/node_modules/unhead/dist/index.mjs';
import 'file:///Users/shubhamsingh/namma/importedProds/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/shubhamsingh/namma/importedProds/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/shubhamsingh/namma/importedProds/node_modules/ufo/dist/index.mjs';
import 'file:///Users/shubhamsingh/namma/importedProds/node_modules/defu/dist/defu.mjs';
import 'file:///Users/shubhamsingh/namma/importedProds/node_modules/klona/dist/index.mjs';
import 'file:///Users/shubhamsingh/namma/importedProds/node_modules/destr/dist/index.mjs';
import 'file:///Users/shubhamsingh/namma/importedProds/node_modules/ts-invariant/lib/invariant.cjs';
import 'file:///Users/shubhamsingh/namma/importedProds/node_modules/zen-observable-ts/index.cjs';
import 'file:///Users/shubhamsingh/namma/importedProds/node_modules/@wry/caches/lib/bundle.cjs';
import 'file:///Users/shubhamsingh/namma/importedProds/node_modules/@vue/apollo-option/dist/vue-apollo-option.esm.mjs';
import 'file:///Users/shubhamsingh/namma/importedProds/node_modules/cookie-es/dist/index.mjs';
import 'file:///Users/shubhamsingh/namma/importedProds/node_modules/ohash/dist/index.mjs';
import 'file:///Users/shubhamsingh/namma/importedProds/node_modules/graphql/index.js';
import 'file:///Users/shubhamsingh/namma/importedProds/node_modules/optimism/lib/bundle.cjs';
import 'file:///Users/shubhamsingh/namma/importedProds/node_modules/@wry/equality/lib/bundle.cjs';
import 'file:///Users/shubhamsingh/namma/importedProds/node_modules/@wry/trie/lib/bundle.cjs';
import 'file:///Users/shubhamsingh/namma/importedProds/node_modules/pinia-plugin-persistedstate/dist/index.mjs';
import 'file:///Users/shubhamsingh/namma/importedProds/node_modules/axios/index.js';
import '../runtime.mjs';
import 'file:///Users/shubhamsingh/namma/importedProds/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/shubhamsingh/namma/importedProds/node_modules/scule/dist/index.mjs';
import 'file:///Users/shubhamsingh/namma/importedProds/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/shubhamsingh/namma/importedProds/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/shubhamsingh/namma/importedProds/node_modules/unstorage/drivers/memory.mjs';
import 'file:///Users/shubhamsingh/namma/importedProds/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/shubhamsingh/namma/importedProds/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/shubhamsingh/namma/importedProds/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/shubhamsingh/namma/importedProds/node_modules/pathe/dist/index.mjs';
import 'file:///Users/shubhamsingh/namma/importedProds/node_modules/shiki/dist/core.mjs';
import 'file:///Users/shubhamsingh/namma/importedProds/node_modules/@shikijs/transformers/dist/index.mjs';
import 'file:///Users/shubhamsingh/namma/importedProds/node_modules/unified/index.js';
import 'file:///Users/shubhamsingh/namma/importedProds/node_modules/mdast-util-to-string/index.js';
import 'file:///Users/shubhamsingh/namma/importedProds/node_modules/micromark/index.js';
import 'file:///Users/shubhamsingh/namma/importedProds/node_modules/unist-util-stringify-position/index.js';
import 'file:///Users/shubhamsingh/namma/importedProds/node_modules/micromark-util-character/index.js';
import 'file:///Users/shubhamsingh/namma/importedProds/node_modules/micromark-util-chunked/index.js';
import 'file:///Users/shubhamsingh/namma/importedProds/node_modules/micromark-util-resolve-all/index.js';
import 'file:///Users/shubhamsingh/namma/importedProds/node_modules/micromark-util-sanitize-uri/index.js';
import 'file:///Users/shubhamsingh/namma/importedProds/node_modules/slugify/slugify.js';
import 'file:///Users/shubhamsingh/namma/importedProds/node_modules/remark-parse/index.js';
import 'file:///Users/shubhamsingh/namma/importedProds/node_modules/remark-rehype/index.js';
import 'file:///Users/shubhamsingh/namma/importedProds/node_modules/remark-mdc/dist/index.mjs';
import 'file:///Users/shubhamsingh/namma/importedProds/node_modules/hast-util-to-string/index.js';
import 'file:///Users/shubhamsingh/namma/importedProds/node_modules/github-slugger/index.js';
import 'file:///Users/shubhamsingh/namma/importedProds/node_modules/detab/index.js';
import 'file:///Users/shubhamsingh/namma/importedProds/node_modules/remark-emoji/index.js';
import 'file:///Users/shubhamsingh/namma/importedProds/node_modules/remark-gfm/index.js';
import 'file:///Users/shubhamsingh/namma/importedProds/node_modules/rehype-external-links/index.js';
import 'file:///Users/shubhamsingh/namma/importedProds/node_modules/rehype-sort-attribute-values/index.js';
import 'file:///Users/shubhamsingh/namma/importedProds/node_modules/rehype-sort-attributes/index.js';
import 'file:///Users/shubhamsingh/namma/importedProds/node_modules/rehype-raw/index.js';

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
    const leadingsText = computed(() => [
      {
        text: titlesText.value[0],
        startColor: props.startColor[0],
        endColor: props.endColor[0],
        delay: 0
      },
      {
        text: titlesText.value[1],
        startColor: props.startColor[1],
        endColor: props.endColor[1],
        delay: 2
      },
      {
        text: titlesText.value[2],
        startColor: props.startColor[2],
        endColor: props.endColor[2],
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
//# sourceMappingURL=Welcome-CMP_Faun.mjs.map
