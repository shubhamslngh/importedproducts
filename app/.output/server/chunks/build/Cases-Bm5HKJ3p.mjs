import __nuxt_component_0 from './Variations-DPxsFSPu.mjs';
import { m as useAsyncQuery } from './server.mjs';
import { useSSRContext, ref, withAsyncContext, unref, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import gql from 'graphql-tag';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import 'swiper/vue';
import './cart-9njyDUNv.mjs';
import 'swiper/modules';
import './AddtoCart-DJTt909a.mjs';
import './index-BiVuT8Ja.mjs';
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
import 'graphql';
import 'optimism';
import '@wry/equality';
import '@wry/trie';
import 'pinia-plugin-persistedstate';
import 'axios';
import './use-counter-B4B-MffU.mjs';

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
      if (unref(data)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "swiper" }, _attrs))} data-v-281c36fd><h1 class="mb-10 text-center text-2xl font-bold" data-v-281c36fd>IPHONE MAGSAFE COMPATIBLE CASES</h1><div class="swiper-wrapper" data-v-281c36fd><!--[-->`);
        ssrRenderList(unref(data).products.edges, (product, index) => {
          _push(`<div class="swiper-slide"${ssrRenderAttr("id", product.node.name)} data-v-281c36fd><div data-v-281c36fd><img${ssrRenderAttr("src", product.node.image ? product.node.image.link : "")} alt="Product Image" class="transition-all ease-in-out" data-v-281c36fd><h3 class="grid text-wrap text-center text-[0.75rem]/5 font-MONO font-semibold hover:font-bold" data-v-281c36fd>${ssrInterpolate(product.node.name)}</h3>`);
          if (selectedProductId.value === product.node.databaseId) {
            _push(`<div class="swiper-container grid m-5 mt-12" data-v-281c36fd>${ssrInterpolate(console.log(selectedProductId.value))} `);
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
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-281c36fd"]]);

export { __nuxt_component_2 as default };
//# sourceMappingURL=Cases-Bm5HKJ3p.mjs.map
