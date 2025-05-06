import _sfc_main$1 from "./Welcome-yK_QkzMg.js";
import __nuxt_component_0 from "./Variations-DyvXHKYo.js";
import { ref, watch, unref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import "swiper";
import "./entry-styles-5.mjs-XBoGKiHI.js";
import gql from "graphql-tag";
import { p as useQuery } from "../server.mjs";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./Wrapper-CSw0DXQZ.js";
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
import "swiper/vue";
import "./cart-9njyDUNv.js";
import "swiper/modules";
import "./AddtoCart-CK0EL1Z1.js";
import "./index-Dn3SGljY.js";
import "./nuxt-link-DuPix_nQ.js";
import "./use-counter-Cqpbz7LL.js";
const _sfc_main = {
  __name: "Cases",
  __ssrInlineRender: true,
  props: {
    category: {
      type: String,
      required: true,
      default: "Cases"
    }
  },
  setup(__props) {
    const props = __props;
    const selectedProductId = ref(0);
    const query = gql`
  query GetProducts($category: String!) {
    products(where: { category: $category }) {
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
    const { result: data, refetch } = useQuery(query, () => ({
      category: props.category
    }));
    watch(
      () => props.category,
      (newVal) => {
        if (newVal)
          refetch();
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AwesomeWelcome = _sfc_main$1;
      const _component_AwesomeVariations = __nuxt_component_0;
      if (unref(data).products.edges) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "swiper" }, _attrs))} data-v-53158188>`);
        _push(ssrRenderComponent(_component_AwesomeWelcome, {
          name: __props.category,
          class: "text-sm"
        }, null, _parent));
        _push(`<div class="swiper-wrapper" data-v-53158188><!--[-->`);
        ssrRenderList(unref(data).products.edges, (product, index) => {
          _push(`<div class="swiper-slide"${ssrRenderAttr("id", product.node.name)} data-v-53158188><div data-v-53158188><img${ssrRenderAttr("src", product.node.image ? product.node.image.link : "")} alt="Product Image" class="transition-all ease-in-out" data-v-53158188><h3 class="grid text-wrap text-center text-[0.75rem]/5 font-MONO font-semibold hover:font-bold" data-v-53158188>${ssrInterpolate(product.node.name)}</h3>`);
          if (selectedProductId.value === product.node.databaseId) {
            _push(`<div class="swiper-container overscroll-auto focus:overscroll-contain grid m-5 mt-12" data-v-53158188>${ssrInterpolate(console.log(selectedProductId.value))} `);
            _push(ssrRenderComponent(_component_AwesomeVariations, { productId: selectedProductId.value }, null, _parent));
            _push(`</div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<div${ssrRenderAttrs(_attrs)} data-v-53158188><div class="swiper-lazy-preloader swiper-lazy-preloader-black" data-v-53158188>Loading...</div></div>`);
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
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-53158188"]]);
export {
  __nuxt_component_3 as default
};
//# sourceMappingURL=Cases-62H0gYPI.js.map
