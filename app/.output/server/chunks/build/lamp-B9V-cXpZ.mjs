import { useSSRContext, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = {
  __name: "lamp",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: "lampLed",
        class: "w-[20%] transition-[width] ease-in-out max-w-7xl mx-auto duration-[1s]"
      }, _attrs))} data-v-4207ed2c><div id="backGlow" class="absolute inset-20 -z-50 mx-auto align-baseline rounded-full bg-yellow-300 opacity-10 blur-3xl bg-blend-multiply" data-v-4207ed2c></div><div class="h-2 rounded-sm blur shadow-lg bg-blend-multiply md:shadow-xl md:shadow-red-500 trainsition-all duration-[12s]" data-v-4207ed2c></div><div class="relative group grid" data-v-4207ed2c><div class="bg-black blur bg-blend-multiply blur p-2.5" style="${ssrRenderStyle({ "z-index": "6" })}" data-v-4207ed2c></div><div id="tubecase" class="bg-black w-auto p-0.5" data-v-4207ed2c></div><div id="lampLedGlow" class="absolute inset-[2px] opacity-50 blur-3xl border-t-[10px] border-b-[250px] border-l-[180px] border-r-[180px] border-solid border-transparent border-b-yellow-300 border-t-black duration-[2s] bg-blend-multiply ease-in-out duration-[2s]" style="${ssrRenderStyle({ "z-index": "5" })}" data-v-4207ed2c></div><div class="relative px-7 py-[1px] bg-yellow-200 ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6 transtion-all ease-in-out duration-[2s]" style="${ssrRenderStyle({ "z-index": "6" })}" data-v-4207ed2c></div><div id="lampGlow" class="opacity-30 bg-blend-multiply blur-xl border-t-[10px] border-b-[250px] border-l-[180px] border-r-[180px] border-solid border-transparent border-b-[#a916c0] border-t-black duration-[2s]" data-v-4207ed2c></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/awesome/lamp.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4207ed2c"]]);

export { __nuxt_component_0 as default };
//# sourceMappingURL=lamp-B9V-cXpZ.mjs.map
