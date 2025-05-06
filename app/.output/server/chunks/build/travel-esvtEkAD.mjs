import __nuxt_component_0 from './Wrapper-CSw0DXQZ.mjs';
import __nuxt_component_1 from './Header-B6zZF8Qh.mjs';
import _sfc_main$1 from './Title-BIa0rC2o.mjs';
import __nuxt_component_3 from './index-CHg0DFwX.mjs';
import _sfc_main$2 from './Title-yS4Jz3G_.mjs';
import _sfc_main$3 from './index-Dn3SGljY.mjs';
import _sfc_main$4 from './TextInput-C9rNrO2h.mjs';
import { u as useCounter } from './use-counter-Cqpbz7LL.mjs';
import { defineComponent, withCtx, createVNode, unref, toDisplayString, withModifiers, useSSRContext } from 'vue';
import { q as defineStore, u as useHead } from './server.mjs';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './nuxt-link-DuPix_nQ.mjs';
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
import './use-sync-props-DhPBbjWV.mjs';
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

const useIdentity = defineStore("identity", {
  state: () => ({
    firstName: "Alfian",
    lastName: "Dwi"
  }),
  actions: {
    setFirstName(firstName) {
      this.firstName = firstName;
    },
    setLastName(lastName) {
      this.lastName = lastName;
    },
    reset() {
      this.firstName = "Alfian";
      this.lastName = "Dwi";
    }
  },
  getters: {
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "travel",
  __ssrInlineRender: true,
  setup(__props) {
    const counter = useCounter();
    const identity = useIdentity();
    useHead({ title: "Travel Page" });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LayoutPageWrapper = __nuxt_component_0;
      const _component_LayoutPageHeader = __nuxt_component_1;
      const _component_LayoutPageTitle = _sfc_main$1;
      const _component_LayoutPageSection = __nuxt_component_3;
      const _component_LayoutPageSectionTitle = _sfc_main$2;
      const _component_AwesomeButton = _sfc_main$3;
      const _component_AwesomeFormTextInput = _sfc_main$4;
      _push(ssrRenderComponent(_component_LayoutPageWrapper, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_LayoutPageHeader, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_LayoutPageTitle, {
                    text: "Testing",
                    class: "capitalize"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_LayoutPageTitle, {
                      text: "Testing",
                      class: "capitalize"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_LayoutPageSection, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_LayoutPageSectionTitle, { text: "Stores Test" }, null, _parent3, _scopeId2));
                  _push3(`<div class="mb-6"${_scopeId2}><div class="mb-2"${_scopeId2}>Counter : ${ssrInterpolate(unref(counter).count)}</div><div class="flex flex-col items-center justify-items-center space-y-2 md:space-y-0 md:flex-row md:space-x-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_AwesomeButton, {
                    class: "w-full md:w-auto capitalize",
                    type: "secondary",
                    size: "sm",
                    text: "increment",
                    onClick: unref(counter).increment
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_AwesomeButton, {
                    class: "w-full md:w-auto",
                    type: "secondary",
                    size: "sm",
                    text: "increment2x",
                    onClick: unref(counter).increment2x
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_AwesomeButton, {
                    class: "w-full md:w-auto capitalize",
                    type: "secondary",
                    size: "sm",
                    text: "decrement",
                    onClick: unref(counter).decrement
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_AwesomeButton, {
                    class: "w-full md:w-auto capitalize",
                    type: "secondary",
                    size: "sm",
                    text: "reset",
                    onClick: unref(counter).reset
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div><div class="mb-6"${_scopeId2}><div class="mb-2"${_scopeId2}><span class="capitalize"${_scopeId2}>Full Name : </span><span${_scopeId2}>${ssrInterpolate(unref(identity).fullName)}</span></div><div class="mb-2"${_scopeId2}><div class="flex flex-col items-center space-y-2 md:space-y-0 md:flex-row md:space-x-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_AwesomeFormTextInput, {
                    modelValue: unref(identity).firstName,
                    "onUpdate:modelValue": ($event) => unref(identity).firstName = $event,
                    size: "md",
                    class: "w-full md:w-1/3"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_AwesomeFormTextInput, {
                    modelValue: unref(identity).lastName,
                    "onUpdate:modelValue": ($event) => unref(identity).lastName = $event,
                    size: "md",
                    class: "w-full md:w-1/3"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_AwesomeButton, {
                    class: "capitalize w-full md:w-auto",
                    text: "reset",
                    type: "secondary",
                    size: "md",
                    onClick: unref(identity).reset
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div></div>`);
                } else {
                  return [
                    createVNode(_component_LayoutPageSectionTitle, { text: "Stores Test" }),
                    createVNode("div", { class: "mb-6" }, [
                      createVNode("div", { class: "mb-2" }, "Counter : " + toDisplayString(unref(counter).count), 1),
                      createVNode("div", { class: "flex flex-col items-center justify-items-center space-y-2 md:space-y-0 md:flex-row md:space-x-2" }, [
                        createVNode(_component_AwesomeButton, {
                          class: "w-full md:w-auto capitalize",
                          type: "secondary",
                          size: "sm",
                          text: "increment",
                          onClick: withModifiers(unref(counter).increment, ["prevent"])
                        }, null, 8, ["onClick"]),
                        createVNode(_component_AwesomeButton, {
                          class: "w-full md:w-auto",
                          type: "secondary",
                          size: "sm",
                          text: "increment2x",
                          onClick: withModifiers(unref(counter).increment2x, ["prevent"])
                        }, null, 8, ["onClick"]),
                        createVNode(_component_AwesomeButton, {
                          class: "w-full md:w-auto capitalize",
                          type: "secondary",
                          size: "sm",
                          text: "decrement",
                          onClick: withModifiers(unref(counter).decrement, ["prevent"])
                        }, null, 8, ["onClick"]),
                        createVNode(_component_AwesomeButton, {
                          class: "w-full md:w-auto capitalize",
                          type: "secondary",
                          size: "sm",
                          text: "reset",
                          onClick: withModifiers(unref(counter).reset, ["prevent"])
                        }, null, 8, ["onClick"])
                      ])
                    ]),
                    createVNode("div", { class: "mb-6" }, [
                      createVNode("div", { class: "mb-2" }, [
                        createVNode("span", { class: "capitalize" }, "Full Name : "),
                        createVNode("span", null, toDisplayString(unref(identity).fullName), 1)
                      ]),
                      createVNode("div", { class: "mb-2" }, [
                        createVNode("div", { class: "flex flex-col items-center space-y-2 md:space-y-0 md:flex-row md:space-x-2" }, [
                          createVNode(_component_AwesomeFormTextInput, {
                            modelValue: unref(identity).firstName,
                            "onUpdate:modelValue": ($event) => unref(identity).firstName = $event,
                            size: "md",
                            class: "w-full md:w-1/3"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_component_AwesomeFormTextInput, {
                            modelValue: unref(identity).lastName,
                            "onUpdate:modelValue": ($event) => unref(identity).lastName = $event,
                            size: "md",
                            class: "w-full md:w-1/3"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_component_AwesomeButton, {
                            class: "capitalize w-full md:w-auto",
                            text: "reset",
                            type: "secondary",
                            size: "md",
                            onClick: withModifiers(unref(identity).reset, ["prevent"])
                          }, null, 8, ["onClick"])
                        ])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_LayoutPageHeader, null, {
                default: withCtx(() => [
                  createVNode(_component_LayoutPageTitle, {
                    text: "Testing",
                    class: "capitalize"
                  })
                ]),
                _: 1
              }),
              createVNode(_component_LayoutPageSection, null, {
                default: withCtx(() => [
                  createVNode(_component_LayoutPageSectionTitle, { text: "Stores Test" }),
                  createVNode("div", { class: "mb-6" }, [
                    createVNode("div", { class: "mb-2" }, "Counter : " + toDisplayString(unref(counter).count), 1),
                    createVNode("div", { class: "flex flex-col items-center justify-items-center space-y-2 md:space-y-0 md:flex-row md:space-x-2" }, [
                      createVNode(_component_AwesomeButton, {
                        class: "w-full md:w-auto capitalize",
                        type: "secondary",
                        size: "sm",
                        text: "increment",
                        onClick: withModifiers(unref(counter).increment, ["prevent"])
                      }, null, 8, ["onClick"]),
                      createVNode(_component_AwesomeButton, {
                        class: "w-full md:w-auto",
                        type: "secondary",
                        size: "sm",
                        text: "increment2x",
                        onClick: withModifiers(unref(counter).increment2x, ["prevent"])
                      }, null, 8, ["onClick"]),
                      createVNode(_component_AwesomeButton, {
                        class: "w-full md:w-auto capitalize",
                        type: "secondary",
                        size: "sm",
                        text: "decrement",
                        onClick: withModifiers(unref(counter).decrement, ["prevent"])
                      }, null, 8, ["onClick"]),
                      createVNode(_component_AwesomeButton, {
                        class: "w-full md:w-auto capitalize",
                        type: "secondary",
                        size: "sm",
                        text: "reset",
                        onClick: withModifiers(unref(counter).reset, ["prevent"])
                      }, null, 8, ["onClick"])
                    ])
                  ]),
                  createVNode("div", { class: "mb-6" }, [
                    createVNode("div", { class: "mb-2" }, [
                      createVNode("span", { class: "capitalize" }, "Full Name : "),
                      createVNode("span", null, toDisplayString(unref(identity).fullName), 1)
                    ]),
                    createVNode("div", { class: "mb-2" }, [
                      createVNode("div", { class: "flex flex-col items-center space-y-2 md:space-y-0 md:flex-row md:space-x-2" }, [
                        createVNode(_component_AwesomeFormTextInput, {
                          modelValue: unref(identity).firstName,
                          "onUpdate:modelValue": ($event) => unref(identity).firstName = $event,
                          size: "md",
                          class: "w-full md:w-1/3"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode(_component_AwesomeFormTextInput, {
                          modelValue: unref(identity).lastName,
                          "onUpdate:modelValue": ($event) => unref(identity).lastName = $event,
                          size: "md",
                          class: "w-full md:w-1/3"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode(_component_AwesomeButton, {
                          class: "capitalize w-full md:w-auto",
                          text: "reset",
                          type: "secondary",
                          size: "md",
                          onClick: withModifiers(unref(identity).reset, ["prevent"])
                        }, null, 8, ["onClick"])
                      ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/travel.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=travel-esvtEkAD.mjs.map
