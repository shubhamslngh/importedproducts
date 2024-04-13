import { ssrRenderList, ssrInterpolate } from 'file:///Users/shubhamsingh/namma/importedProds/node_modules/vue/server-renderer/index.mjs';
import { useSSRContext } from 'file:///Users/shubhamsingh/namma/importedProds/node_modules/vue/index.mjs';

const _sfc_main = {
  __name: "Iphonecases",
  __ssrInlineRender: true,
  props: ["Cases"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      ssrRenderList(__props.Cases, (Iphonecase, index) => {
        _push(`<div>${ssrInterpolate(console.log("value in Iphoneacase", { IphoneCase: _ctx.IphoneCase }))} <li>${ssrInterpolate(Iphonecase.color)}</li></div>`);
      });
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/awesome/Iphonecases.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Iphonecases-C8BW6pWF.mjs.map
