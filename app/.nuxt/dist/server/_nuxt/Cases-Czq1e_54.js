import __nuxt_component_0 from "./Variations-DSfc0m7k.js";
import { o as useAsyncQuery } from "../server.mjs";
import { ref, withAsyncContext, unref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import "swiper";
import "swiper/modules";
import "./entry-styles-5.mjs-XBoGKiHI.js";
import gql from "graphql-tag";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "swiper/vue";
import "./cart-9njyDUNv.js";
import "./AddtoCart-DnXKS_Kx.js";
import "./index-zPKawY5Q.js";
import "./nuxt-link-DuPix_nQ.js";
import "ufo";
import "hookable";
import "#internal/nitro";
import "ofetch";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
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
import "./use-counter-B4B-MffU.js";
const _sfc_main = {
  __name: "Cases",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const selectedProductId = ref(0);
    const query = gql`
  query MyQuery {
    products(where: { category: "cases" }) {
      edges {
        node {
          image {
            link
          }
          name
          id
          databaseId
        }
      }
    }
  }
`;
    const products = ref([]);
    const { data } = ([__temp, __restore] = withAsyncContext(() => useAsyncQuery(query)), __temp = await __temp, __restore(), __temp);
    products.value = data._value.products.edges.map((edges) => ({
      name: edges.node.name,
      img: edges.node.image.link
    }));
    console.log(products.value, "cases is obj");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AwesomeVariations = __nuxt_component_0;
      if (unref(data).products.edges) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "swiper" }, _attrs))} data-v-2bafa2a1><h1 class="mx-auto mb-6 py-16 ml-10 text-center text-2xl sm:text-md font-bold" data-v-2bafa2a1> SELECT CASES </h1><div class="swiper-wrapper" data-v-2bafa2a1><!--[-->`);
        ssrRenderList(unref(data).products.edges, (product, index) => {
          _push(`<div class="swiper-slide"${ssrRenderAttr("id", product.node.name)} data-v-2bafa2a1><div data-v-2bafa2a1><img${ssrRenderAttr("src", product.node.image ? product.node.image.link : "")} alt="Product Image" class="transition-all ease-in-out" data-v-2bafa2a1><h3 class="grid text-wrap text-center text-[0.75rem]/5 font-MONO font-semibold hover:font-bold" data-v-2bafa2a1>${ssrInterpolate(product.node.name)}</h3>`);
          if (selectedProductId.value === product.node.databaseId) {
            _push(`<div class="swiper-container overscroll-auto focus:overscroll-contain grid m-5 mt-12" data-v-2bafa2a1>${ssrInterpolate(console.log(selectedProductId.value))} `);
            _push(ssrRenderComponent(_component_AwesomeVariations, { productId: selectedProductId.value }, null, _parent));
            _push(`</div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<div${ssrRenderAttrs(_attrs)} data-v-2bafa2a1><div class="swiper-lazy-preloader swiper-lazy-preloader-black" data-v-2bafa2a1>Loading...</div></div>`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/awesome/Cases.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2bafa2a1"]]);
export {
  __nuxt_component_2 as default
};
//# sourceMappingURL=Cases-Czq1e_54.js.map
