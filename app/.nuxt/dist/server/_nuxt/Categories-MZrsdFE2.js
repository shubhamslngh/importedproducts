import { ref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate } from "vue/server-renderer";
import gql from "graphql-tag";
import { o as useApolloClient } from "../server.mjs";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "#internal/nitro";
import "ofetch";
import "hookable";
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
const _sfc_main = {
  __name: "Categories",
  __ssrInlineRender: true,
  emits: ["categorySelected"],
  setup(__props, { emit: __emit }) {
    const categories = ref([]);
    const selectedCategory = ref(null);
    gql`
  query GET_CATEGORIES {
    productCategories(first: 200, where: { hideEmpty: true, parent: null }) {
      edges {
        node {
          name
          image {
            altText
            link
          }
        }
      }
    }
  }
`;
    useApolloClient().client;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-6 bg-gray-50 dark:bg-transparent rounded-lg shadow-inner" }, _attrs))} data-v-de1dcd8b><h2 class="text-2xl font-bold text-gray-800 dark:text-red-100 mb-6 text-center w-full" data-v-de1dcd8b> Whatever you need, we got it! </h2><div class="flex overflow-x-auto gap-4 pb-2" data-v-de1dcd8b><!--[-->`);
      ssrRenderList(categories.value, (category, index) => {
        var _a;
        _push(`<div class="${ssrRenderClass([[
          "cursor-pointer transform transition-all duration-300 ease-in-out shrink-0",
          ((_a = selectedCategory.value) == null ? void 0 : _a.name) === category.name ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg scale-105" : "bg-white dark:bg-gray-800 hover:bg-indigo-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 hover:scale-105"
        ], "flex flex-col items-center p-4 w-36 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700"])}" data-v-de1dcd8b><div class="w-14 h-14 rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 flex items-center justify-center mb-3 text-2xl font-semibold" data-v-de1dcd8b>${ssrInterpolate(category.name.charAt(0).toUpperCase())}</div><span class="text-center text-sm font-medium tracking-wide" data-v-de1dcd8b>${ssrInterpolate(category.name)}</span></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/awesome/Categories.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-de1dcd8b"]]);
export {
  __nuxt_component_2 as default
};
//# sourceMappingURL=Categories-MZrsdFE2.js.map
