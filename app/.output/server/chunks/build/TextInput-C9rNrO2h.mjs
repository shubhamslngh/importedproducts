import { defineComponent, useSlots, reactive, computed, mergeProps, unref, useSSRContext } from 'vue';
import { u as useSyncProps } from './use-sync-props-DhPBbjWV.mjs';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderSlot, ssrRenderDynamicModel, ssrRenderAttr } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TextInput",
  __ssrInlineRender: true,
  props: {
    modelValue: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    },
    size: {
      type: String,
      default: "md"
    },
    type: {
      type: String,
      default: "default"
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const slots = useSlots();
    const paddingStyles = reactive({
      xs: "px-1 py-0.5",
      sm: "px-2 py-1.5",
      md: "px-4 py-2",
      lg: "px-5 py-3"
    });
    const fontSizeStyles = reactive({
      xs: "text-xs",
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg"
    });
    const modelValue = useSyncProps(props, "modelValue", emit);
    const havePreEl = computed(
      () => typeof slots.prefix !== "undefined" || typeof slots["prefix-disabled"] !== "undefined"
    );
    const haveSuEl = computed(() => typeof slots.suffix !== "undefined");
    const selectedBorderStyle = computed(
      () => "border-gray-900/10 dark:border-gray-50/[0.2]"
    );
    const selectedOnHoverBorderStyle = computed(
      () => "dark:focus:border-white focus:border-gray-900"
    );
    const selectedPaddingStyle = computed(
      () => paddingStyles[props.size] || paddingStyles.md
    );
    const selectedFontSizeStyle = computed(
      () => fontSizeStyles[props.size] || fontSizeStyles.md
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: `text-input-container relative flex` }, _attrs))}>`);
      if (unref(slots)["prefix-disabled"]) {
        _push(`<div class="${ssrRenderClass(`duration-300 transition-colors flex rounded-l bg-gray-100 dark:bg-gray-800 text-gray-500 border ${unref(selectedBorderStyle)}`)}">`);
        ssrRenderSlot(_ctx.$slots, "prefix-disabled", {}, null, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(slots).prefix) {
        _push(`<div class="${ssrRenderClass(`flex rounded-l border ${unref(selectedBorderStyle)}`)}">`);
        ssrRenderSlot(_ctx.$slots, "prefix", {}, null, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="text-input-wrapper relative flex flex-1"><input${ssrRenderDynamicModel(__props.type, unref(modelValue), null)} class="${ssrRenderClass(`duration-300 transition-colors text-input w-full flex-1 bg-transparent outline-none border ${unref(havePreEl) ? "" : "rounded-l"} ${unref(haveSuEl) ? "" : "rounded-r"} ${unref(selectedBorderStyle)} ${unref(selectedOnHoverBorderStyle)} ${unref(selectedPaddingStyle)} ${unref(selectedFontSizeStyle)}`)}"${ssrRenderAttr("type", __props.type)}${ssrRenderAttr("placeholder", __props.placeholder)}></div>`);
      if (unref(slots).suffix) {
        _push(`<div class="${ssrRenderClass(`flex rounded-r border ${unref(selectedBorderStyle)}`)}">`);
        ssrRenderSlot(_ctx.$slots, "suffix", {}, null, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/awesome/Form/TextInput.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=TextInput-C9rNrO2h.mjs.map
