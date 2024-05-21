import _sfc_main$1 from './Welcome-CMP_Faun.mjs';
import { useSSRContext, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderStyle, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './Wrapper-CSw0DXQZ.mjs';
import './index-CHg0DFwX.mjs';
import './server.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'shiki/core';
import '@shikijs/transformers';
import 'unified';
import 'mdast-util-to-string';
import 'micromark';
import 'unist-util-stringify-position';
import 'micromark-util-character';
import 'micromark-util-chunked';
import 'micromark-util-resolve-all';
import 'micromark-util-sanitize-uri';
import 'slugify';
import 'remark-parse';
import 'remark-rehype';
import 'remark-mdc';
import 'hast-util-to-string';
import 'github-slugger';
import 'detab';
import 'remark-emoji';
import 'remark-gfm';
import 'rehype-external-links';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'ts-invariant';
import 'zen-observable-ts';
import '@wry/caches';
import '@vue/apollo-option';
import 'graphql';
import 'optimism';
import '@wry/equality';
import '@wry/trie';
import 'pinia-plugin-persistedstate';
import 'axios';

const _sfc_main = {
  data() {
    return {
      products: [
        {
          id: 1,
          name: "IPhone 14 ",
          imageUrl: "https://importedproducts.in/wp-content/uploads/2024/04/iphone-14-finish-select-202209-6-7inch-product-red_AV1_GEO_EMEA-Photoroom.png-Photoroom.png",
          initialOffsetY: 0,
          style: {}
        },
        {
          id: 2,
          name: "IPhone 14 Plus ",
          imageUrl: "https://importedproducts.in/wp-content/uploads/2024/04/iphone-14-finish-select-202209-6-1inch-blue_AV1_GEO_EMEA-Photoroom.png-Photoroom.png",
          initialOffsetY: 0,
          style: {}
        },
        {
          id: 3,
          name: "IPhone 14 Pro ",
          imageUrl: "https://importedproducts.in/wp-content/uploads/2024/04/iphone-14-pro-finish-select-202209-6-7inch_AV2_GEO_EMEA-Photoroom.png-Photoroom-2.png",
          initialOffsetY: 0,
          style: {}
        },
        {
          id: 4,
          name: "IPhone 15 ",
          imageUrl: "https://importedproducts.in/wp-content/uploads/2024/04/iphone-15-finish-select-202309-6-1inch-blue_AV1_GEO_EMEA-Photoroom.png-Photoroom.png",
          initialOffsetY: 0,
          style: {}
        },
        {
          id: 5,
          name: "IPhone 15 Pro ",
          imageUrl: "https://importedproducts.in/wp-content/uploads/2024/04/iphone-15-pro-finish-select-202309-6-1inch_AV2_GEO_EMEA-Photoroom.png-Photoroom.png",
          initialOffsetY: 0,
          style: {}
        }
      ]
    };
  },
  mounted() {
    (void 0).addEventListener("scroll", this.handleScroll);
    this.handleScroll();
  },
  beforeDestroy() {
    (void 0).removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const scrollY = (void 0).scrollY;
      const flexContainerRect = this.$refs.flexContainer.getBoundingClientRect();
      const startEffectScrollY = flexContainerRect.top - (void 0).innerHeight + 100;
      const scrollProgress = Math.min(
        1,
        Math.max(
          0,
          (scrollY - startEffectScrollY) / ((void 0).innerHeight + this.$refs.flexContainer.clientHeight)
        )
      );
      this.products.forEach((product, index) => {
        const offsetY = (2 - scrollProgress) * (index * 100);
        product.style = {
          transform: `translateY(${offsetY}px)`,
          // opacity: `${1 - 0.2 * index * scrollProgress}`,
          zIndex: `${100 - index}`
          // Ensure items stack correctly during transition
        };
      });
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_AwesomeWelcome = _sfc_main$1;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "flex-container",
    ref: "flexContainer"
  }, _attrs))} data-v-70ee88ff><!--[-->`);
  ssrRenderList($data.products, (product) => {
    _push(`<div class="flex-item" style="${ssrRenderStyle(product.style)}" data-v-70ee88ff><img${ssrRenderAttr("src", product.imageUrl)}${ssrRenderAttr("alt", product.name)} class="product-image" data-v-70ee88ff><div class="flex-item z-20" data-v-70ee88ff>`);
    _push(ssrRenderComponent(_component_AwesomeWelcome, {
      style: { width: "100px", height: "5px", fontSize: "12px", scale: 0.3 },
      name: product.name,
      startColor: ["green", "grey", "blue"],
      endColor: ["black", "red", "white"]
    }, null, _parent));
    _push(`</div></div>`);
  });
  _push(`<!--]--></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/awesome/Parallax.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-70ee88ff"]]);

export { __nuxt_component_2 as default };
//# sourceMappingURL=Parallax-DCahcoO7.mjs.map
