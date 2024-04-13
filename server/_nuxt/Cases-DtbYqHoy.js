import __nuxt_component_0 from "./Variations-BZjaVUyd.js";
import { g as useAsyncQuery } from "../server.mjs";
import { ref, withAsyncContext, unref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import "swiper";
import "./entry-styles-5.mjs-XBoGKiHI.js";
import gql from "graphql-tag";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "swiper/vue";
import "./cart-CRQWliXk.js";
import "swiper/modules";
import "./AddtoCart-B73ULrWL.js";
import "./index-BiVuT8Ja.js";
import "./nuxt-link-DuPix_nQ.js";
import "ufo";
import "hookable";
import "./use-counter-Ocg8JTnf.js";
import "destr";
import "klona";
import "devalue";
import "defu";
import "#internal/nitro";
import "ofetch";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "@vue/devtools-api";
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
const _sfc_main = {
  __name: "Cases",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const selectedProductId = ref(0);
    ref([]);
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
      if (unref(data)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "swiper" }, _attrs))} data-v-7a030090><h1 class="mb-10 text-center text-2xl font-bold" data-v-7a030090>IPHONE MAGSAFE COMPATIBLE CASES</h1><div class="swiper-wrapper" data-v-7a030090><!--[-->`);
        ssrRenderList(unref(data).products.edges, (product, index) => {
          _push(`<div class="swiper-slide"${ssrRenderAttr("id", product.node.name)} data-v-7a030090><div data-v-7a030090><img${ssrRenderAttr("src", product.node.image ? product.node.image.link : "")} alt="Product Image" class="transition-all ease-in-out" data-v-7a030090><h3 class="grid text-wrap text-center text-[0.75rem]/5 font-MONO font-semibold hover:font-bold" data-v-7a030090>${ssrInterpolate(product.node.name)}</h3>`);
          if (selectedProductId.value === product.node.databaseId) {
            _push(`<div class="swiper-container grid m-5 mt-12" data-v-7a030090>${ssrInterpolate(console.log(selectedProductId.value))} `);
            _push(ssrRenderComponent(_component_AwesomeVariations, { productId: selectedProductId.value }, null, _parent));
            _push(`</div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
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
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7a030090"]]);
export {
  __nuxt_component_2 as default
};
//# sourceMappingURL=Cases-DtbYqHoy.js.map
