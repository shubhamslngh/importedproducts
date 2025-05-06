import { Swiper, SwiperSlide } from 'swiper/vue';
import { g as useMutation } from './server.mjs';
import { useSSRContext, ref, resolveComponent, withCtx, createVNode, openBlock, createBlock, Fragment, renderList } from 'vue';
import { g as getVariation } from './cart-9njyDUNv.mjs';
import { EffectCards } from 'swiper/modules';
import _sfc_main$1 from './AddtoCart-CK0EL1Z1.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
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
import 'graphql-tag';
import './index-Dn3SGljY.mjs';
import './nuxt-link-DuPix_nQ.mjs';
import './use-counter-Cqpbz7LL.mjs';

const _sfc_main = {
  components: {
    AddToCart: _sfc_main$1,
    Swiper,
    SwiperSlide
  },
  props: {
    productId: {
      type: Number,
      required: true
    },
    variationId: {
      type: Number,
      default: 0
    }
  },
  setup(props) {
    const updateShadowStyles = () => {
      const shadowElements = (void 0).querySelectorAll(".swiper-slide-shadow");
      shadowElements.forEach((shadowElement) => {
        shadowElement.style.opacity = "0";
      });
    };
    const selectedProductId = ref(props.productId);
    const selectedVariationId = ref(props.variationId);
    const products = ref([]);
    ref([]);
    useMutation(getVariation);
    setTimeout(() => {
      updateShadowStyles();
      const observer = new MutationObserver(updateShadowStyles);
      const swiperContainer = (void 0).querySelector(".swiper-container");
      if (swiperContainer) {
        observer.observe(swiperContainer, {
          attributes: true,
          childList: true,
          subtree: true
        });
      }
    }, 10);
    const handleClick = (variationId) => {
      selectedVariationId.value = variationId;
      selectedProductId.value = props.productId;
      console.log(selectedProductId.value, "here is Product id");
      console.log(selectedVariationId.value, "here is Variation id");
    };
    return {
      modules: [EffectCards],
      spaceBetween: 400,
      resistanceRatio: 0,
      rewind: true,
      selectedProductId,
      selectedVariationId,
      products,
      handleClick
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_swiper = Swiper;
  const _component_swiper_slide = SwiperSlide;
  const _component_AddToCart = resolveComponent("AddToCart");
  if ($setup.products.length > 0) {
    _push(`<div${ssrRenderAttrs(_attrs)} data-v-64171847>`);
    _push(ssrRenderComponent(_component_swiper, {
      effect: "cards",
      grabCursor: true,
      nested: true,
      slideShadows: false,
      modules: $setup.modules,
      class: "mySwiper dark:bg-none"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<!--[-->`);
          ssrRenderList($setup.products, (product, index) => {
            _push2(ssrRenderComponent(_component_swiper_slide, {
              class: "dark:bg-none",
              key: index,
              slideShadow: false,
              style: { "background-image": `url(${product.img})` }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div data-v-64171847${_scopeId2}><img${ssrRenderAttr("src", product.img ? product.img : "")} alt="Product Image" class="transition-all ease-in-out" data-v-64171847${_scopeId2}></div>`);
                } else {
                  return [
                    createVNode("div", {
                      onClick: ($event) => $setup.handleClick(product.variationId)
                    }, [
                      createVNode("img", {
                        src: product.img ? product.img : "",
                        alt: "Product Image",
                        class: "transition-all ease-in-out"
                      }, null, 8, ["src"])
                    ], 8, ["onClick"])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          });
          _push2(`<!--]-->`);
        } else {
          return [
            (openBlock(true), createBlock(Fragment, null, renderList($setup.products, (product, index) => {
              return openBlock(), createBlock(_component_swiper_slide, {
                class: "dark:bg-none",
                key: index,
                slideShadow: false,
                style: { "background-image": `url(${product.img})` }
              }, {
                default: withCtx(() => [
                  createVNode("div", {
                    onClick: ($event) => $setup.handleClick(product.variationId)
                  }, [
                    createVNode("img", {
                      src: product.img ? product.img : "",
                      alt: "Product Image",
                      class: "transition-all ease-in-out"
                    }, null, 8, ["src"])
                  ], 8, ["onClick"])
                ]),
                _: 2
              }, 1032, ["style"]);
            }), 128))
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`<div data-v-64171847>`);
    _push(ssrRenderComponent(_component_AddToCart, {
      productId: $setup.selectedProductId,
      variationId: $setup.selectedVariationId
    }, null, _parent));
    _push(`</div></div>`);
  } else {
    _push(`<div${ssrRenderAttrs(_attrs)} data-v-64171847><div class="swiper-lazy-preloader swiper-lazy-preloader-black" data-v-64171847></div></div>`);
  }
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/awesome/Variations.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-64171847"]]);

export { __nuxt_component_0 as default };
//# sourceMappingURL=Variations-DyvXHKYo.mjs.map
