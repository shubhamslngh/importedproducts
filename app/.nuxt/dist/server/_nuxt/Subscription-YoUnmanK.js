import _sfc_main$1 from "./Welcome-yK_QkzMg.js";
import { m as useAsyncQuery } from "../server.mjs";
import { ref, withAsyncContext, unref, useSSRContext } from "vue";
import { ssrRenderStyle, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrInterpolate } from "vue/server-renderer";
import gql from "graphql-tag";
import "./Wrapper-CSw0DXQZ.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./index-CHg0DFwX.js";
import "hookable";
import "#internal/nitro";
import "ofetch";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "ufo";
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
const _sfc_main = {
  __name: "Subscription",
  __ssrInlineRender: true,
  props: ["subscriptions"],
  async setup(__props) {
    let __temp, __restore;
    const subsCards = ref([]);
    const clickedIndex = ref(null);
    ref(null);
    const query = gql`
  query MyQuery2 {
    variableProduct(id: "8192", idType: DATABASE_ID) {
      id
      variations(first: 10) {
        edges {
          node {
            id
            name
            image {
              link
            }
          }
        }
      }
    }
  }
`;
    const data = ([__temp, __restore] = withAsyncContext(() => useAsyncQuery(query)), __temp = await __temp, __restore(), __temp);
    if (data) {
      subsCards.value = data;
    }
    console.log(data, "graphsubscription");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AwesomeWelcome = _sfc_main$1;
      _push(`<!--[--><section class="relative"><div class="mx-auto relative z-[-1] bg-auto hover: bg-origin-border p-2 bg-center mt-0 h-64 md:h-96 mb-20 lg:h-120" style="${ssrRenderStyle({ "background-image": 'url("https://importedproducts.in/wp-content/uploads/2024/02/pexels-darya-sannikova-2927585-scaled.jpg")' })}"><div class="mx-auto md:size-auto backdrop-blur-sm absolute inset-0 flex justify-center items-center">`);
      _push(ssrRenderComponent(_component_AwesomeWelcome, { name: "Digital Subscriptions " }, null, _parent));
      _push(`</div></div></section><div></div>`);
      if (unref(data)) {
        _push(`<div class="mx-auto grid sm:grid-cols-1 grid-row-2 lg:grid-cols-3 md:grid-cols-2 gap-y-10 max-h-fit gap-x-2 mb-2"><!--[-->`);
        ssrRenderList(__props.subscriptions, (subscription, index) => {
          _push(`<div><div${ssrRenderAttr("id", `card-${subscription.Name}`)} class="${ssrRenderClass([{ clicked: clickedIndex.value === index }, "card w-[350px] shadow-2xl text-justify h-[200px] overflow-hidden bg-contain bg-center bg-no-repeat rounded-[5px]"])}" style="${ssrRenderStyle({
            backgroundImage: `url(${subscription.bgimg})`,
            backgroundColor: subscription.color
          })}"><div class="card-content" style="${ssrRenderStyle(clickedIndex.value !== index ? null : { display: "none" })}"><div class="card-amount"><span class="card-amount-main">${ssrInterpolate(subscription.Price)}</span><span class="card-duration">${ssrInterpolate(subscription.Duration)}</span></div><div class="card-premium">${ssrInterpolate(subscription.PlanType)}</div><div class="card-description">${ssrInterpolate(subscription.AdditionalFeatures)}</div></div></div></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div> loading . . . </div>`);
      }
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/awesome/Subscription.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=Subscription-YoUnmanK.js.map
