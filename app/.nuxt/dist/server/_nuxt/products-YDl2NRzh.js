import __nuxt_component_0 from "./Wrapper-CSw0DXQZ.js";
import _sfc_main$1 from "./Welcome-yK_QkzMg.js";
import __nuxt_component_2 from "./Categories-MZrsdFE2.js";
import __nuxt_component_3 from "./Cases-62H0gYPI.js";
import { ref, mergeProps, withCtx, createVNode, openBlock, createBlock, createCommentVNode, useSSRContext } from "vue";
import { u as useHead } from "../server.mjs";
import { ssrRenderComponent } from "vue/server-renderer";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./index-CHg0DFwX.js";
import "hookable";
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
import "graphql-tag";
import "./Variations-DyvXHKYo.js";
import "swiper/vue";
import "./cart-9njyDUNv.js";
import "./entry-styles-5.mjs-XBoGKiHI.js";
import "swiper/modules";
import "./AddtoCart-CK0EL1Z1.js";
import "./index-Dn3SGljY.js";
import "./nuxt-link-DuPix_nQ.js";
import "./use-counter-Cqpbz7LL.js";
import "swiper";
const _sfc_main = {
  __name: "products",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({ title: "Cases" });
    const selectedCategory = ref(null);
    const handleCategorySelected = (category) => {
      selectedCategory.value = category.name;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LayoutPageWrapper = __nuxt_component_0;
      const _component_AwesomeWelcome = _sfc_main$1;
      const _component_AwesomeCategories = __nuxt_component_2;
      const _component_AwesomeCases = __nuxt_component_3;
      _push(ssrRenderComponent(_component_LayoutPageWrapper, mergeProps({ class: "min-w-[100vw] max-h-[100vh]" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_AwesomeWelcome, { name: "products  " }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_AwesomeCategories, { onCategorySelected: handleCategorySelected }, null, _parent2, _scopeId));
            if (selectedCategory.value) {
              _push2(ssrRenderComponent(_component_AwesomeCases, { category: selectedCategory.value }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode(_component_AwesomeWelcome, { name: "products  " }),
              createVNode(_component_AwesomeCategories, { onCategorySelected: handleCategorySelected }),
              selectedCategory.value ? (openBlock(), createBlock(_component_AwesomeCases, {
                key: 0,
                category: selectedCategory.value
              }, null, 8, ["category"])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/products.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=products-YDl2NRzh.js.map
