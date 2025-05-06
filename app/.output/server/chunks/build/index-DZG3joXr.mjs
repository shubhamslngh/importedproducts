import __nuxt_component_0 from './lamp-CRDIzU-b.mjs';
import _sfc_main$1 from './Iphonecases-tycm0TXW.mjs';
import _sfc_main$2 from './Welcome-yK_QkzMg.mjs';
import __nuxt_component_3 from './Parallax-CUarWRsb.mjs';
import { u as useHead, f as useAuthStore, e as useAppConfig } from './server.mjs';
import { unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './Wrapper-CSw0DXQZ.mjs';
import './index-CHg0DFwX.mjs';
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
import 'throttle-debounce';
import 'graphql';
import 'optimism';
import '@wry/equality';
import '@wry/trie';
import 'pinia-plugin-persistedstate';
import 'axios';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({ titleTemplate: "", title: "home" });
    const authStore = useAuthStore();
    const user = authStore.user;
    useAppConfig();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AwesomeLamp = __nuxt_component_0;
      const _component_AwesomeIphonecases = _sfc_main$1;
      const _component_AwesomeWelcome = _sfc_main$2;
      const _component_AwesomeParallax = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_AwesomeLamp, null, null, _parent));
      _push(ssrRenderComponent(_component_AwesomeIphonecases, null, null, _parent));
      if (unref(user)) {
        _push(`<div><div class="text-green"></div>`);
        _push(ssrRenderComponent(_component_AwesomeWelcome, {
          name: "Namma Bussiness  ",
          "with-alert": true,
          class: "min-h-[50vh]"
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(ssrRenderComponent(_component_AwesomeWelcome, {
          name: "IMPORTED PRODUCTS ",
          "with-alert": true,
          class: "min-h-[50vh]"
        }, null, _parent));
      }
      _push(ssrRenderComponent(_component_AwesomeParallax, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DZG3joXr.mjs.map
