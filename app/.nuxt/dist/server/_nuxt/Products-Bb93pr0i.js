import { b as useNuxtApp } from "../server.mjs";
import { ref, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderStyle } from "vue/server-renderer";
import "swiper";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "ufo";
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
const _sfc_main = {
  __name: "Products",
  __ssrInlineRender: true,
  props: ["caseproducts"],
  setup(__props) {
    const { $wordpressStore } = useNuxtApp();
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "box",
        "background-color-black": ""
      }, _attrs))}><div id="wrapperSwiper" class="div lg:w-[200vw] md:w-[200vw] sm:w-[100vw]"><div id="gridWrapper" class="grid transition-all duration-200"><!--[-->`);
      ssrRenderList(__props.caseproducts, (product, index) => {
        _push(`<div class="swiper-slide transition-[width] duration-200 ease-in-out"${ssrRenderAttr("id", product.model)}><img${ssrRenderAttr("src", product.bgimg)} alt="Product Image" class="transition-all ease-in-out"><div class="product-info"><h3 class="">${ssrInterpolate(product.model)}</h3></div></div>`);
      });
      _push(`<!--]--> ${ssrInterpolate(console.log("new div", unref($wordpressStore).productDetails.length !== 0))} `);
      if (unref($wordpressStore).productDetails.length !== 0) {
        _push(`<div class="w-[70vw] mx-auto"><div class="product-card"><div class="product-image"></div><div class="product-details"><div class="flex"><!--[-->`);
        ssrRenderList(unref($wordpressStore).productDetails, (color, index) => {
          _push(`<div class="color-swatch transition-all ease-in-out bg-no-repeat" style="${ssrRenderStyle({ backgroundImage: `url(${color.bgimg})` })}"></div>`);
        });
        _push(`<!--]--></div> ${ssrInterpolate(unref($wordpressStore).productDetails[0].color)} ${ssrInterpolate(console.log("COLOR", unref($wordpressStore).selectedProduct))} <p class="py-4"> Great product title for a great product and all of the extra things a product might need to make it fill an entire card. </p><button type="button" id="buy" class="btn rounded-xl border-[1px] w-[150px] h-[50px] border-gray-800 hover:bg-white active:bg-white" style="${ssrRenderStyle({
          backgroundColor: `${unref($wordpressStore).selectedProduct}`
        })}"> Buy Now </button></div></div><div class="description product"></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="swiper-button-next"></div><div class="swiper-button-prev"></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/awesome/Products.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=Products-Bb93pr0i.js.map
