import { Swiper, SwiperSlide } from 'swiper/vue';
import { ref, useSSRContext, mergeProps, withCtx, createVNode, openBlock, createBlock, Fragment, renderList } from 'vue';
import { EffectCards } from 'swiper/modules';
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

ref(0);
const _sfc_main = {
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    const products = ref([]);
    return {
      modules: [EffectCards],
      products
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_swiper = Swiper;
  const _component_swiper_slide = SwiperSlide;
  _push(ssrRenderComponent(_component_swiper, mergeProps({
    effect: "cards",
    grabCursor: true,
    modules: $setup.modules,
    loop: true,
    class: "mySwiper"
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList($setup.products, (product, index) => {
          _push2(ssrRenderComponent(_component_swiper_slide, {
            key: index,
            style: {
              "background-image": `url(${product.img})`
            }
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<div class="bg-transparent" data-v-9f9c5d58${_scopeId2}><img${ssrRenderAttr("src", product.img ? product.img : "")} alt="Product Image" class="bg-transparent transition-all ease-in-out" data-v-9f9c5d58${_scopeId2}></div>`);
              } else {
                return [
                  createVNode("div", { class: "bg-transparent" }, [
                    createVNode("img", {
                      src: product.img ? product.img : "",
                      alt: "Product Image",
                      class: "bg-transparent transition-all ease-in-out"
                    }, null, 8, ["src"])
                  ])
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
              key: index,
              style: {
                "background-image": `url(${product.img})`
              }
            }, {
              default: withCtx(() => [
                createVNode("div", { class: "bg-transparent" }, [
                  createVNode("img", {
                    src: product.img ? product.img : "",
                    alt: "Product Image",
                    class: "bg-transparent transition-all ease-in-out"
                  }, null, 8, ["src"])
                ])
              ]),
              _: 2
            }, 1032, ["style"]);
          }), 128))
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/awesome/Cardstest.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Cardstest = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-9f9c5d58"]]);

export { Cardstest as default };
//# sourceMappingURL=Cardstest-gZ8Ro0e8.mjs.map
