import { _ as __nuxt_component_0 } from './nuxt-link-DW4x5zSp.mjs';
import _sfc_main$1 from './index-DoEbZrXI.mjs';
import { defineComponent, mergeProps, unref, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { b as useNuxtApp } from './server.mjs';
import { ssrRenderComponent, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
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

function useNavbarParser() {
  return {
    parseMenuTitle: function parseMenuTitle(title) {
      return typeof title === "function" ? title(useNuxtApp()) : title || "";
    },
    parseMenuRoute: function parseMenuRoute(to) {
      return typeof to === "function" ? to(useNuxtApp()) : to;
    }
  };
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Item",
  __ssrInlineRender: true,
  props: {
    menu: {
      type: Object,
      required: true
    },
    isDropdown: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const { parseMenuRoute, parseMenuTitle } = useNavbarParser();
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_AwesomeButton = _sfc_main$1;
      if (((_a = __props.menu) == null ? void 0 : _a.type) === "link" && __props.isDropdown) {
        _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
          to: unref(parseMenuRoute)((_b = __props.menu) == null ? void 0 : _b.to)
        }, _attrs), {
          default: withCtx(({ isActive }, _push2, _parent2, _scopeId) => {
            var _a2, _b2;
            if (_push2) {
              _push2(`<div class="${ssrRenderClass([
                "transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800 px-4 py-2 rounded-lg w-full",
                isActive ? "text-gray-900 dark:text-gray-100 font-bold" : "text-gray-700 dark:text-gray-300"
              ])}"${_scopeId}>${ssrInterpolate(unref(parseMenuTitle)((_a2 = __props.menu) == null ? void 0 : _a2.title))}</div>`);
            } else {
              return [
                createVNode("div", {
                  class: [
                    "transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800 px-4 py-2 rounded-lg w-full",
                    isActive ? "text-gray-900 dark:text-gray-100 font-bold" : "text-gray-700 dark:text-gray-300"
                  ]
                }, toDisplayString(unref(parseMenuTitle)((_b2 = __props.menu) == null ? void 0 : _b2.title)), 3)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else if (((_c = __props.menu) == null ? void 0 : _c.type) === "link") {
        _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
          to: unref(parseMenuRoute)((_d = __props.menu) == null ? void 0 : _d.to)
        }, _attrs), {
          default: withCtx(({ isActive }, _push2, _parent2, _scopeId) => {
            var _a2, _b2;
            if (_push2) {
              _push2(`<span class="${ssrRenderClass({
                "text-gray-900 dark:text-gray-100 font-bold": isActive,
                "text-gray-700 dark:text-gray-300": !isActive
              })}"${_scopeId}>${ssrInterpolate(unref(parseMenuTitle)((_a2 = __props.menu) == null ? void 0 : _a2.title))}</span>`);
            } else {
              return [
                createVNode("span", {
                  class: {
                    "text-gray-900 dark:text-gray-100 font-bold": isActive,
                    "text-gray-700 dark:text-gray-300": !isActive
                  }
                }, toDisplayString(unref(parseMenuTitle)((_b2 = __props.menu) == null ? void 0 : _b2.title)), 3)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else if (((_e = __props.menu) == null ? void 0 : _e.type) === "button") {
        _push(ssrRenderComponent(_component_AwesomeButton, mergeProps({
          text: unref(parseMenuTitle)((_f = __props.menu) == null ? void 0 : _f.title),
          size: "xs",
          to: unref(parseMenuRoute)(__props.menu.to)
        }, _attrs), null, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/layouts/Page/NavbarMenu/Item.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Item = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: _sfc_main
});

export { Item as I, _sfc_main as _, useNavbarParser as u };
//# sourceMappingURL=Item-B39ab_2b.mjs.map
