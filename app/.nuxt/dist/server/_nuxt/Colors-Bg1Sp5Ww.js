import { Swiper, SwiperSlide } from "swiper/vue";
import _sfc_main$1 from "./AddtoCart-CK0EL1Z1.js";
import { g as useMutation } from "../server.mjs";
import { ref, withAsyncContext, mergeProps, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { g as getVariation } from "./cart-9njyDUNv.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./index-Dn3SGljY.js";
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
import "./use-counter-Cqpbz7LL.js";
import "graphql-tag";
const _sfc_main = {
  __name: "Colors",
  __ssrInlineRender: true,
  props: {
    productId: Number,
    variationId: Number
  },
  async setup(__props) {
    let __temp, __restore;
    const Data1 = ref([]);
    const selectedProductId = ref([]);
    const selectedVariationId = ref([]);
    const props = __props;
    const { mutate: getProducts, loading } = useMutation(getVariation);
    try {
      console.log(props.productId, "this is props ");
      const { data } = ([__temp, __restore] = withAsyncContext(() => getProducts({
        productId: props.productId
      })), __temp = await __temp, __restore(), __temp);
      console.log(data, "Product fetched ");
      if (data) {
        Data1.value = data;
      }
    } catch (error) {
      console.error("Error fetching product to cart:", error);
    }
    const handleClick = (productId) => {
      selectedVariationId.value = productId;
      selectedProductId.value = props.productId;
      console.log(selectedProductId.value, "here is Product id");
      console.log(selectedVariationId.value, "here is Variation id");
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_swiper = Swiper;
      const _component_swiper_slide = SwiperSlide;
      const _component_AwesomeAddtoCart = _sfc_main$1;
      _push(ssrRenderComponent(_component_swiper, mergeProps({
        effect: "cards",
        grabCursor: true,
        modules: _ctx.modules,
        class: "mySwiper grid"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(Data1.value.variableProduct.variations.nodes, (product, index) => {
              _push2(ssrRenderComponent(_component_swiper_slide, {
                flex: "",
                "items-stretch": "",
                key: index,
                id: product.name
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]--> ${ssrInterpolate(console.log(_ctx.product.image.link, "here is img"))} <img${ssrRenderAttr("src", _ctx.product.image.link ? _ctx.product.image.link : "")} alt="Product Image" class="transition-all ease-in-out" data-v-fab8ba7e${_scopeId}>`);
            _push2(ssrRenderComponent(_component_swiper_slide, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AwesomeAddtoCart, {
                    productId: selectedProductId.value,
                    variationId: selectedVariationId.value
                  }, null, _parent3, _scopeId2));
                  _push3(`<div class="grid text-wrap font-semibold hover:font-bold" data-v-fab8ba7e${_scopeId2}>${ssrInterpolate(_ctx.product.name)}</div>`);
                } else {
                  return [
                    createVNode(_component_AwesomeAddtoCart, {
                      productId: selectedProductId.value,
                      variationId: selectedVariationId.value
                    }, null, 8, ["productId", "variationId"]),
                    createVNode("div", { class: "grid text-wrap font-semibold hover:font-bold" }, toDisplayString(_ctx.product.name), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(Data1.value.variableProduct.variations.nodes, (product, index) => {
                return openBlock(), createBlock(_component_swiper_slide, {
                  flex: "",
                  "items-stretch": "",
                  key: index,
                  id: product.name
                }, null, 8, ["id"]);
              }), 128)),
              createTextVNode(" " + toDisplayString(console.log(_ctx.product.image.link, "here is img")) + " ", 1),
              createVNode("img", {
                onClick: ($event) => handleClick(_ctx.product.databaseId),
                src: _ctx.product.image.link ? _ctx.product.image.link : "",
                alt: "Product Image",
                class: "transition-all ease-in-out"
              }, null, 8, ["onClick", "src"]),
              createVNode(_component_swiper_slide, null, {
                default: withCtx(() => [
                  createVNode(_component_AwesomeAddtoCart, {
                    productId: selectedProductId.value,
                    variationId: selectedVariationId.value
                  }, null, 8, ["productId", "variationId"]),
                  createVNode("div", { class: "grid text-wrap font-semibold hover:font-bold" }, toDisplayString(_ctx.product.name), 1)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/awesome/Colors.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Colors = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-fab8ba7e"]]);
export {
  Colors as default
};
//# sourceMappingURL=Colors-Bg1Sp5Ww.js.map
