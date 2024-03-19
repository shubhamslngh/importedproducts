import { _ as __nuxt_component_0 } from "../server.mjs";
import { defineComponent, useSlots, ref, provide, watch, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "ufo";
import "defu";
import "klona";
import "@vue/devtools-api";
import "destr";
import "devalue";
import "ts-invariant";
import "zen-observable-ts";
import "symbol-observable";
import "@wry/caches";
import "@vue/apollo-option";
import "cookie-es";
import "ohash";
import "graphql";
import "optimism";
import "@wry/equality";
import "@wry/trie";
import "pinia-plugin-persistedstate";
import "axios";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Tabs",
  __ssrInlineRender: true,
  emits: ["click"],
  setup(__props) {
    useSlots();
    const tabs = ref();
    const tabHeaderIndicator = ref();
    const tabItems = ref([]);
    const activeTab = ref();
    provide("activeTab", activeTab);
    const updateIndicator = () => {
      if (!tabs.value || !tabHeaderIndicator.value)
        return;
      const dom = tabHeaderIndicator.value;
      const currentActiveIndex = tabItems.value.findIndex(
        ({ name }) => name === activeTab.value
      );
      const tabItem = tabs.value.querySelectorAll(".tabs-header-item")[currentActiveIndex];
      if (!tabItem)
        return;
      const padding = 24;
      const diff = 30;
      dom.style.width = `${tabItem.offsetWidth + diff}px`;
      dom.style.left = `${tabItem.offsetLeft - padding - diff / 2}px`;
    };
    watch(tabItems, () => updateIndicator());
    watch(activeTab, () => updateIndicator());
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "tabs",
        ref: tabs,
        class: "tabs"
      }, _attrs))}>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`<div class="tabs-body relative text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-800 shadow rounded-b-lg">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/awesome/Tabs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=Tabs-DYQNldwo.js.map
