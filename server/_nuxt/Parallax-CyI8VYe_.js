import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "Parallax",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: "parallaxScroll",
        class: "parallax-scroll"
      }, _attrs))} data-v-781c32eb></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/awesome/Parallax.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Parallax = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-781c32eb"]]);
export {
  Parallax as default
};
//# sourceMappingURL=Parallax-CyI8VYe_.js.map
