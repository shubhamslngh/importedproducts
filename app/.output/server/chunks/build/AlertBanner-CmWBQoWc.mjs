import __nuxt_component_1 from './Icon-D6hvXZ-E.mjs';
import { defineComponent, reactive, ref, computed, unref, mergeProps, withCtx, createVNode, renderSlot, openBlock, createBlock, createCommentVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderClass, ssrRenderSlot, ssrInterpolate } from 'vue/server-renderer';
import { TransitionRoot, TransitionChild } from '@headlessui/vue';
import './server.mjs';
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
import 'throttle-debounce';
import 'graphql';
import 'optimism';
import '@wry/equality';
import '@wry/trie';
import 'pinia-plugin-persistedstate';
import 'axios';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import './index-C91WxrSi.mjs';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AlertBanner",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      default: void 0
    },
    text: {
      type: String,
      default: void 0
    },
    type: {
      type: String,
      default: "primary"
    }
  },
  setup(__props) {
    const props = __props;
    const styles = reactive({
      primary: "",
      success: "dark:from-green-500/50 via-gray-200 to-gray-200 dark:via-gray-900 dark:to-gray-900",
      warning: "dark:from-yellow-500/50 via-gray-200 to-gray-200 dark:via-gray-900 dark:to-gray-900",
      danger: "dark:from-red-500/50 via-gray-200 to-gray-200 dark:via-gray-900 dark:to-gray-900"
    });
    const textStyles = reactive({
      primary: "text-black dark:text-white",
      success: "text-green-500",
      warning: "text-orange-500",
      danger: "text-red-500"
    });
    const isDestroyed = ref(false);
    const selectedType = computed(() => {
      if (["primary", "success", "warning", "danger"].includes(props.type))
        return props.type;
      return "primary";
    });
    const selectedStyle = computed(() => styles[selectedType.value]);
    const selectedTextStyle = computed(() => textStyles[selectedType.value]);
    const close = () => {
      isDestroyed.value = true;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      _push(ssrRenderComponent(unref(TransitionRoot), mergeProps({
        show: !unref(isDestroyed),
        appear: ""
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(TransitionChild), {
              as: "template",
              enter: "duration-300 ease-out",
              "enter-from": "opacity-0",
              "enter-to": "opacity-100",
              leave: "duration-300 ease-in",
              "leave-from": "opacity-100",
              "leave-to": "opacity-0"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="${ssrRenderClass(`bg-gray-200 dark:bg-gray-800 bg-gradient-to-r shadow-white/50 dark:shadow-gray-950/50 px-6 py-6 rounded-md shadow-lg flex space-x-6 ${unref(selectedStyle)}`)}"${_scopeId2}><div class="flex items-center justify-center"${_scopeId2}>`);
                  ssrRenderSlot(_ctx.$slots, "icon", {}, () => {
                    if (unref(selectedType) === "success") {
                      _push3(ssrRenderComponent(_component_Icon, {
                        name: "mdi:check-circle",
                        class: `text-2xl ${unref(selectedTextStyle)}`
                      }, null, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    if (unref(selectedType) === "danger") {
                      _push3(ssrRenderComponent(_component_Icon, {
                        name: "icon-clarity:times-circle-solid",
                        class: `text-2xl ${unref(selectedTextStyle)}`
                      }, null, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    if (unref(selectedType) === "warning") {
                      _push3(ssrRenderComponent(_component_Icon, {
                        name: "icon-bi:exclamation-circle-fill",
                        class: `text-2xl ${unref(selectedTextStyle)}`
                      }, null, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                  }, _push3, _parent3, _scopeId2);
                  _push3(`</div><div class="flex-1"${_scopeId2}><div class="${ssrRenderClass(`font-bold text-lg mb-0.5 ${unref(selectedTextStyle)}`)}"${_scopeId2}>`);
                  ssrRenderSlot(_ctx.$slots, "title", {}, () => {
                    _push3(`${ssrInterpolate(props.title)}`);
                  }, _push3, _parent3, _scopeId2);
                  _push3(`</div><div class="text-gray-700 dark:text-gray-100"${_scopeId2}>`);
                  ssrRenderSlot(_ctx.$slots, "title", {}, () => {
                    _push3(`${ssrInterpolate(props.text)}`);
                  }, _push3, _parent3, _scopeId2);
                  _push3(`</div></div><div${_scopeId2}><button class="text-gray-600 hover:text-red-500 dark:text-gray-400 font-bold"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Icon, { name: "clarity:times-line" }, null, _parent3, _scopeId2));
                  _push3(`</button></div></div>`);
                } else {
                  return [
                    createVNode("div", {
                      class: `bg-gray-200 dark:bg-gray-800 bg-gradient-to-r shadow-white/50 dark:shadow-gray-950/50 px-6 py-6 rounded-md shadow-lg flex space-x-6 ${unref(selectedStyle)}`
                    }, [
                      createVNode("div", { class: "flex items-center justify-center" }, [
                        renderSlot(_ctx.$slots, "icon", {}, () => [
                          unref(selectedType) === "success" ? (openBlock(), createBlock(_component_Icon, {
                            key: 0,
                            name: "mdi:check-circle",
                            class: `text-2xl ${unref(selectedTextStyle)}`
                          }, null, 8, ["class"])) : createCommentVNode("", true),
                          unref(selectedType) === "danger" ? (openBlock(), createBlock(_component_Icon, {
                            key: 1,
                            name: "icon-clarity:times-circle-solid",
                            class: `text-2xl ${unref(selectedTextStyle)}`
                          }, null, 8, ["class"])) : createCommentVNode("", true),
                          unref(selectedType) === "warning" ? (openBlock(), createBlock(_component_Icon, {
                            key: 2,
                            name: "icon-bi:exclamation-circle-fill",
                            class: `text-2xl ${unref(selectedTextStyle)}`
                          }, null, 8, ["class"])) : createCommentVNode("", true)
                        ])
                      ]),
                      createVNode("div", { class: "flex-1" }, [
                        createVNode("div", {
                          class: `font-bold text-lg mb-0.5 ${unref(selectedTextStyle)}`
                        }, [
                          renderSlot(_ctx.$slots, "title", {}, () => [
                            createTextVNode(toDisplayString(props.title), 1)
                          ])
                        ], 2),
                        createVNode("div", { class: "text-gray-700 dark:text-gray-100" }, [
                          renderSlot(_ctx.$slots, "title", {}, () => [
                            createTextVNode(toDisplayString(props.text), 1)
                          ])
                        ])
                      ]),
                      createVNode("div", null, [
                        createVNode("button", {
                          class: "text-gray-600 hover:text-red-500 dark:text-gray-400 font-bold",
                          onClick: close
                        }, [
                          createVNode(_component_Icon, { name: "clarity:times-line" })
                        ])
                      ])
                    ], 2)
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(TransitionChild), {
                as: "template",
                enter: "duration-300 ease-out",
                "enter-from": "opacity-0",
                "enter-to": "opacity-100",
                leave: "duration-300 ease-in",
                "leave-from": "opacity-100",
                "leave-to": "opacity-0"
              }, {
                default: withCtx(() => [
                  createVNode("div", {
                    class: `bg-gray-200 dark:bg-gray-800 bg-gradient-to-r shadow-white/50 dark:shadow-gray-950/50 px-6 py-6 rounded-md shadow-lg flex space-x-6 ${unref(selectedStyle)}`
                  }, [
                    createVNode("div", { class: "flex items-center justify-center" }, [
                      renderSlot(_ctx.$slots, "icon", {}, () => [
                        unref(selectedType) === "success" ? (openBlock(), createBlock(_component_Icon, {
                          key: 0,
                          name: "mdi:check-circle",
                          class: `text-2xl ${unref(selectedTextStyle)}`
                        }, null, 8, ["class"])) : createCommentVNode("", true),
                        unref(selectedType) === "danger" ? (openBlock(), createBlock(_component_Icon, {
                          key: 1,
                          name: "icon-clarity:times-circle-solid",
                          class: `text-2xl ${unref(selectedTextStyle)}`
                        }, null, 8, ["class"])) : createCommentVNode("", true),
                        unref(selectedType) === "warning" ? (openBlock(), createBlock(_component_Icon, {
                          key: 2,
                          name: "icon-bi:exclamation-circle-fill",
                          class: `text-2xl ${unref(selectedTextStyle)}`
                        }, null, 8, ["class"])) : createCommentVNode("", true)
                      ])
                    ]),
                    createVNode("div", { class: "flex-1" }, [
                      createVNode("div", {
                        class: `font-bold text-lg mb-0.5 ${unref(selectedTextStyle)}`
                      }, [
                        renderSlot(_ctx.$slots, "title", {}, () => [
                          createTextVNode(toDisplayString(props.title), 1)
                        ])
                      ], 2),
                      createVNode("div", { class: "text-gray-700 dark:text-gray-100" }, [
                        renderSlot(_ctx.$slots, "title", {}, () => [
                          createTextVNode(toDisplayString(props.text), 1)
                        ])
                      ])
                    ]),
                    createVNode("div", null, [
                      createVNode("button", {
                        class: "text-gray-600 hover:text-red-500 dark:text-gray-400 font-bold",
                        onClick: close
                      }, [
                        createVNode(_component_Icon, { name: "clarity:times-line" })
                      ])
                    ])
                  ], 2)
                ]),
                _: 3
              })
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/awesome/AlertBanner.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=AlertBanner-CmWBQoWc.mjs.map
