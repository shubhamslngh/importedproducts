import _sfc_main$1 from './index-BiVuT8Ja.mjs';
import { h as useMutation } from './server.mjs';
import { u as useCounter } from './use-counter-B4B-MffU.mjs';
import { defineComponent, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { A as AddCart } from './cart-9njyDUNv.mjs';
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
import 'graphql-tag';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AddtoCart",
  __ssrInlineRender: true,
  props: {
    productId: Number,
    variationId: Number,
    qty: Number
  },
  setup(__props) {
    var props = __props;
    const { mutate: addToCart, loading } = useMutation(AddCart);
    const counter = useCounter();
    async function addToCartHandler() {
      console.log(props.productId);
      try {
        loading.value = true;
        await addToCart({
          productId: props.productId,
          variationId: props.variationId,
          quantity: counter.count
        }).then(() => {
          loading.value = false;
          console.log("added to cart!");
        });
      } catch (error) {
        loading.value = false;
        console.error("Error adding product to cart:", error);
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AwesomeButton = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex ml-4 space-x-2" }, _attrs))}><div class="mb-7 flex items-center"><button class="counter-button mr-2 bg-red-800 text-white px-4 py-2 rounded-lg font-bold text-lg hover:bg-red-600"> - </button><div class="relative"><span class="counter bg-gray-200 text-red px-4 py-2 rounded-lg font-bold text-lg">${ssrInterpolate(unref(counter).count)}</span></div><button class="counter-button ml-2 bg-blue-500 text-white px-4 py-2 rounded-lg font-bold text-lg hover:bg-blue-600"> + </button></div><div class="mr-4">`);
      _push(ssrRenderComponent(_component_AwesomeButton, {
        onClick: addToCartHandler,
        disabled: unref(loading),
        class: "bg-red-800"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Add to Cart `);
          } else {
            return [
              createTextVNode(" Add to Cart ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/awesome/AddtoCart.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=AddtoCart-DkFq98TQ.mjs.map
