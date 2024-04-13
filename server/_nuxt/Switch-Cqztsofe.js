import { defineComponent, ref, mergeProps, unref, useSSRContext } from "vue";
import { u as useSyncProps } from "./use-sync-props-DhPBbjWV.js";
import { ssrRenderAttrs, ssrRenderAttr, ssrIncludeBooleanAttr, ssrRenderSlot } from "vue/server-renderer";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Switch",
  __ssrInlineRender: true,
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    on: {
      type: Boolean,
      default: false
    },
    id: {
      type: String,
      default: void 0
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const randomId = () => Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    const id = ref(props.id || randomId());
    ref();
    const checked = useSyncProps(props, "modelValue", emit);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<label${ssrRenderAttrs(mergeProps({
        for: unref(id),
        class: "flex cursor-pointer"
      }, _attrs))}><label${ssrRenderAttr("for", unref(id))} class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in"><input${ssrRenderAttr("id", unref(id))} type="checkbox" class="switch-checkbox absolute block w-6 h-6 rounded-full bg-white dark:bg-gray-900 border-2 border-gray-300 dark:border-gray-600 appearance-none cursor-pointer"${ssrIncludeBooleanAttr(unref(checked)) ? " checked" : ""}><label${ssrRenderAttr("for", unref(id))} class="switch-label block overflow-hidden h-6 rounded-full bg-gray-200 dark:bg-gray-700 cursor-pointer border border-gray-300 dark:border-gray-500"></label></label>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</label>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/awesome/Form/Switch.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=Switch-Cqztsofe.js.map
