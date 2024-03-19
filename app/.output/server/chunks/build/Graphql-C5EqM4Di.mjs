import { h as useAsyncQuery } from './server.mjs';
import { ref, withAsyncContext, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import gql from 'graphql-tag';
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

const _sfc_main = {
  __name: "Graphql",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const Data1 = ref([]);
    const query = gql`
  query MyQuery {
    products(where: { category: "cases" }) {
      edges {
        node {
          image {
            link
          }
          name
        }
      }
    }
  }
`;
    const { data } = ([__temp, __restore] = withAsyncContext(() => useAsyncQuery(query)), __temp = await __temp, __restore(), __temp);
    if (data) {
      Data1.value = data;
      console.log(Data1.value, "Graphql data");
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "box",
        "background-color-black": ""
      }, _attrs))}><div id="wrapperSwiper" class="div lg:w-[200vw] md:w-[200vw] sm:w-[100vw]"><div id="gridWrapper" class="grid lg:grid-cols-8 md:grid-cols-8 sm:grid-cols-1 transition-all duration-200"><!--[-->`);
      ssrRenderList(Data1.value._value.products.edges, (product, index) => {
        _push(`<div class="transition-[width] duration-200 ease-in-out"${ssrRenderAttr("id", product.node.name)}><div class="snap-x"><div class="snap-center"><img${ssrRenderAttr("src", product.node.image ? product.node.image.link : "")} alt="Product Image" class="transition-all ease-in-out"><h3 class="box text-wrap font-semibold hover:font-bold">${ssrInterpolate(product.node.name)}</h3></div></div></div>`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/awesome/Graphql.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Graphql-C5EqM4Di.mjs.map
