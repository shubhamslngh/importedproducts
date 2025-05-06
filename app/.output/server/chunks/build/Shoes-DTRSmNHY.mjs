import __nuxt_component_0 from './Variations-DyvXHKYo.mjs';
import { m as useAsyncQuery } from './server.mjs';
import { useSSRContext, ref, withAsyncContext, unref, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import gql from 'graphql-tag';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import 'swiper/vue';
import './cart-9njyDUNv.mjs';
import 'swiper/modules';
import './AddtoCart-CK0EL1Z1.mjs';
import './index-Dn3SGljY.mjs';
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
import './use-counter-Cqpbz7LL.mjs';

const _sfc_main = {
  __name: "Shoes",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const selectedProductId = ref(0);
    const query = gql`
  query MyQuery {
    products(where: { category: "vapes" }) {
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
    console.log(products.value, "shoes is obj");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AwesomeVariations = __nuxt_component_0;
      if (unref(data).products.edges) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "swiper" }, _attrs))} data-v-cfec4aea><h1 class="mx-auto mb-6 py-16 ml-10 text-center text-2xl sm:text-md font-bold" data-v-cfec4aea> SELECT SHOES </h1><div class="swiper-wrapper" data-v-cfec4aea><!--[-->`);
        ssrRenderList(unref(data).products.edges, (product, index) => {
          _push(`<div class="swiper-slide"${ssrRenderAttr("id", product.node.name)} data-v-cfec4aea><div data-v-cfec4aea><img${ssrRenderAttr("src", product.node.image ? product.node.image.link : "")} alt="Product Image" class="transition-all ease-in-out" data-v-cfec4aea><h3 class="grid text-wrap text-center text-[0.75rem]/5 font-MONO font-semibold hover:font-bold" data-v-cfec4aea>${ssrInterpolate(product.node.name)}</h3>`);
          if (selectedProductId.value === product.node.databaseId) {
            _push(`<div class="swiper-container overscroll-auto focus:overscroll-contain grid m-5 mt-12" data-v-cfec4aea>${ssrInterpolate(console.log(selectedProductId.value))} `);
            _push(ssrRenderComponent(_component_AwesomeVariations, { productId: selectedProductId.value }, null, _parent));
            _push(`</div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<div${ssrRenderAttrs(_attrs)} data-v-cfec4aea><div class="swiper-lazy-preloader swiper-lazy-preloader-black" data-v-cfec4aea>Loading...</div></div>`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/awesome/Shoes.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Shoes = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-cfec4aea"]]);

export { Shoes as default };
//# sourceMappingURL=Shoes-DTRSmNHY.mjs.map
