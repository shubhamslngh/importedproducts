import { _ as __nuxt_component_0 } from './nuxt-link-DuPix_nQ.mjs';
import { defineComponent, reactive, computed, mergeProps, unref, withCtx, renderSlot, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderSlot, ssrInterpolate, ssrRenderAttrs } from 'vue/server-renderer';
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
import './server.mjs';
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

const defaultStyle = `
  cursor-pointer
  border transition-color duration-300
  focus:outline-none focus:ring-1 focus:ring-offset-1 focus:dark:ring-offset-gray-50 focus:dark:ring-gray-400 focus:ring-gray-600/[0.6] focus:ring-offset-gray-800/[0.6]
  flex items-center justify-center font-semibold
`;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  props: {
    text: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "primary"
      // Default type
    },
    size: {
      type: String,
      default: "md"
      // Default size
    },
    to: {
      type: [String, Object],
      default: void 0
    },
    href: {
      type: String,
      default: void 0
    }
  },
  setup(__props) {
    const props = __props;
    const styles = reactive({
      none: "",
      primary: "text-white bg-primary-500 hover:bg-primary-400 border-primary-500",
      secondary: "text-gray-800 bg-gray-200 border-gray-200 hover:bg-gray-300 dark:text-white dark:border-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700",
      opposite: "text-white bg-gray-800 hover:bg-white hover:text-gray-800 hover:border-gray-900 dark:text-gray-800 dark:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-100 dark:border-white",
      danger: "text-white bg-red-500 hover:bg-red-400 border-red-500",
      custom: "text-red bg-blue-400 hover:bg-white-100 hover:text-red border-blue-500"
      // Custom style
    });
    const sizes = reactive({
      lg: "h-14 px-8 text-lg rounded-lg",
      md: "h-10 px-6 text-base rounded",
      sm: "h-9 px-4 text-sm rounded",
      xs: "h-6 px-3 text-xs rounded"
    });
    const selectedStyle = computed(
      () => props.type in styles ? styles[props.type] : styles.primary
    );
    const selectedSize = computed(() => sizes[props.size] || sizes.md);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      if (__props.to) {
        _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
          tag: "a",
          to: __props.to,
          class: `${defaultStyle} ${unref(selectedStyle)} ${unref(selectedSize)}`
        }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "default", {}, () => {
                _push2(`${ssrInterpolate(__props.text)}`);
              }, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "default", {}, () => [
                  createTextVNode(toDisplayString(__props.text), 1)
                ])
              ];
            }
          }),
          _: 3
        }, _parent));
      } else {
        _push(`<a${ssrRenderAttrs(mergeProps({
          class: `${defaultStyle} ${unref(selectedStyle)} ${unref(selectedSize)}`,
          href: __props.href
        }, _attrs))}>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, () => {
          _push(`${ssrInterpolate(__props.text)}`);
        }, _push, _parent);
        _push(`</a>`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/awesome/Button/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-Dn3SGljY.mjs.map
