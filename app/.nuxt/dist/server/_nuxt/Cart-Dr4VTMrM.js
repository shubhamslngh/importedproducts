import { u as useCounter } from "./use-counter-B4B-MffU.js";
import { defineComponent, ref, watch, unref, useSSRContext } from "vue";
import "destr";
import "klona";
import "hookable";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import "./cart-9njyDUNv.js";
import "devalue";
import "defu";
import "../server.mjs";
import "#internal/nitro";
import "ofetch";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "ufo";
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
import "graphql-tag";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Cart",
  __ssrInlineRender: true,
  setup(__props) {
    const counter = useCounter();
    const data = ref(null);
    watch(data, (newVal, oldVal) => {
      console.log("Data changed:", newVal);
    });
    console.log("data here", data);
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(data)) {
        _push(`<div${ssrRenderAttrs(_attrs)}><div class="h-screen pt-20"><h1 class="mb-10 text-center text-3xl font-bold">Cart Items</h1><div class="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0"><div class="rounded-lg md:w-2/3">`);
        if (unref(data)._value.cart.contents.nodes.length === 0) {
          _push(`<div class="grid place-items-start"><div class="sm:ml-4 sm:flex sm:w-full sm:justify-between"><h1 class="mb-10 text-center text-xl font-bold">No item added </h1><img alt="product-image" src="https://importedproducts.in/wp-content/uploads/2024/04/shopping-cart-buy-shopping-297750.png" class="mb-10 blur-sm flex mr-20 items-center sm:w-40"></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--[-->`);
        ssrRenderList(unref(data)._value.cart.contents.nodes, (product, index) => {
          _push(`<div class="justify-between mb-6 dark:bg-white rounded-lg light: bg-slate-300 p-6 shadow-md sm:flex sm:justify-start">`);
          if (product.variation) {
            _push(`<div class="sm:ml-4 sm:flex sm:w-full sm:justify-between"><img alt="product-image"${ssrRenderAttr("src", product.variation.node.image.link)} class="w-full rounded-lg sm:w-40"><div class="sm:ml-4 sm:flex sm:w-full sm:justify-between"><div class="mt-5 sm:mt-0"><h2 class="text-lg font-bold text-gray-900">${ssrInterpolate(product.variation.node.name)}</h2><p class="mt-1 text-xs text-gray-700"></p><p class="mt-1 text-xs text-gray-700">QTY:${ssrInterpolate(product.quantity)}</p></div></div><div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6"><div class="flex items-center border-gray-100"><button class="counter-button mr-2 bg-red-800 text-white px-4 py-2 rounded-lg font-bold text-lg hover:bg-red-600">${ssrInterpolate(product.variation.node.databaseId)} - </button><div class="relative"><span class="counter bg-gray-200 text-red px-4 py-2 rounded-lg font-bold text-lg">${ssrInterpolate(unref(counter).count = product.quantity)}</span></div><button class="counter-button ml-2 bg-blue-500 text-white px-4 py-2 rounded-lg font-bold text-lg hover:bg-blue-600">${ssrInterpolate(product.variation.node.image.parentDatabaseId)} + </button></div><div class="flex items-center space-x-4"><p class="text-sm">${ssrInterpolate(product.subtotal)}</p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg></div></div></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        });
        _push(`<!--]--></div><div class="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3"><div class="mb-2 flex justify-between"><p class="text-gray-700">Subtotal</p><p class="text-gray-700">${ssrInterpolate(unref(data)._value.cart.total)}</p></div><div class="flex justify-between"><p class="text-gray-700">Shipping</p><p class="text-gray-700">${ssrInterpolate(unref(data)._value.cart.shippingTotal)}</p></div><hr class="my-4"><div class="flex justify-between"><p class="text-lg text-black font-bold">Total</p><div class=""><p class="mb-1 text-lg text-black font-bold">${ssrInterpolate(unref(data)._value.cart.total)}</p><p class="text-sm text-black">including VAT</p></div></div><button class="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">Check out</button></div></div></div></div>`);
      } else {
        _push(`<div${ssrRenderAttrs(_attrs)}><h1 class="mb-10 text-center text-2xl font-bold">Loading...</h1></div>`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/awesome/Cart.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=Cart-Dr4VTMrM.js.map