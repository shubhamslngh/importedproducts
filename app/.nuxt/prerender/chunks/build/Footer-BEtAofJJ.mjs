import { useSSRContext, mergeProps } from 'file:///Users/shubhamsingh/namma/importedProds/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderSlot } from 'file:///Users/shubhamsingh/namma/importedProds/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "card-footer duration-300 transition-colors px-6 py-2 text-sm bg-white dark:bg-gray-950 border-t border-gray-950/10 dark:border-gray-50/[0.2]" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/awesome/Card/Footer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_14 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_14 as default };
//# sourceMappingURL=Footer-BEtAofJJ.mjs.map
