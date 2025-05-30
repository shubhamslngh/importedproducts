import _sfc_main$1 from "./index-Dn3SGljY.js";
import { g as useMutation } from "../server.mjs";
import { u as useCounter } from "./use-counter-Cqpbz7LL.js";
import { defineComponent, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { A as AddCart } from "./cart-9njyDUNv.js";
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
export {
  _sfc_main as default
};
//# sourceMappingURL=AddtoCart-CK0EL1Z1.js.map
