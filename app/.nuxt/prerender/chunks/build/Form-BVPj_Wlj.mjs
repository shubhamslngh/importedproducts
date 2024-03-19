import { useSSRContext, mergeProps } from 'file:///Users/shubhamsingh/namma/importedProds/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr } from 'file:///Users/shubhamsingh/namma/importedProds/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = {
  data() {
    return {
      name: "",
      email: "",
      phone: ""
    };
  },
  methods: {
    submitForm() {
      console.log("Form submitted!");
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-md mx-auto" }, _attrs))}><form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"><div class="mb-4" step 1><label class="block text-gray-700 text-sm font-bold mb-2" for="name"> Name </label><input${ssrRenderAttr("value", $data.name)} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Enter your name"></div><div class="mb-4"><label class="block text-gray-700 text-sm font-bold mb-2" for="email"> Email </label><input${ssrRenderAttr("value", $data.email)} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Enter your email"></div><div class="mb-6"><label class="block text-gray-700 text-sm font-bold mb-2" for="phone"> Phone </label><input${ssrRenderAttr("value", $data.phone)} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phone" type="tel" placeholder="Enter your phone number"></div><div class="flex items-center justify-between"><button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit"> Submit </button></div></form></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/awesome/Form.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Form = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { Form as default };
//# sourceMappingURL=Form-BVPj_Wlj.mjs.map
