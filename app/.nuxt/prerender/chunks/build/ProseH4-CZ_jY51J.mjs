import { defineComponent, computed, mergeProps, unref, useSSRContext } from 'file:///Users/shubhamsingh/namma/importedProds/node_modules/vue/index.mjs';
import { b as useRuntimeConfig } from './server.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderSlot } from 'file:///Users/shubhamsingh/namma/importedProds/node_modules/vue/server-renderer/index.mjs';
import 'file:///Users/shubhamsingh/namma/importedProds/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/shubhamsingh/namma/importedProds/node_modules/hookable/dist/index.mjs';
import 'file:///Users/shubhamsingh/namma/importedProds/node_modules/unctx/dist/index.mjs';
import 'file:///Users/shubhamsingh/namma/importedProds/node_modules/h3/dist/index.mjs';
import 'file:///Users/shubhamsingh/namma/importedProds/node_modules/unhead/dist/index.mjs';
import 'file:///Users/shubhamsingh/namma/importedProds/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/shubhamsingh/namma/importedProds/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/shubhamsingh/namma/importedProds/node_modules/ufo/dist/index.mjs';
import 'file:///Users/shubhamsingh/namma/importedProds/node_modules/defu/dist/defu.mjs';
import 'file:///Users/shubhamsingh/namma/importedProds/node_modules/klona/dist/index.mjs';
import 'file:///Users/shubhamsingh/namma/importedProds/node_modules/destr/dist/index.mjs';
import 'file:///Users/shubhamsingh/namma/importedProds/node_modules/ts-invariant/lib/invariant.cjs';
import 'file:///Users/shubhamsingh/namma/importedProds/node_modules/zen-observable-ts/index.cjs';
import 'file:///Users/shubhamsingh/namma/importedProds/node_modules/@wry/caches/lib/bundle.cjs';
import 'file:///Users/shubhamsingh/namma/importedProds/node_modules/@vue/apollo-option/dist/vue-apollo-option.esm.mjs';
import 'file:///Users/shubhamsingh/namma/importedProds/node_modules/cookie-es/dist/index.mjs';
import 'file:///Users/shubhamsingh/namma/importedProds/node_modules/ohash/dist/index.mjs';
import 'file:///Users/shubhamsingh/namma/importedProds/node_modules/graphql/index.js';
import 'file:///Users/shubhamsingh/namma/importedProds/node_modules/optimism/lib/bundle.cjs';
import 'file:///Users/shubhamsingh/namma/importedProds/node_modules/@wry/equality/lib/bundle.cjs';
import 'file:///Users/shubhamsingh/namma/importedProds/node_modules/@wry/trie/lib/bundle.cjs';
import 'file:///Users/shubhamsingh/namma/importedProds/node_modules/pinia-plugin-persistedstate/dist/index.mjs';
import 'file:///Users/shubhamsingh/namma/importedProds/node_modules/axios/index.js';
import '../runtime.mjs';
import 'file:///Users/shubhamsingh/namma/importedProds/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/shubhamsingh/namma/importedProds/node_modules/scule/dist/index.mjs';
import 'file:///Users/shubhamsingh/namma/importedProds/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/shubhamsingh/namma/importedProds/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/shubhamsingh/namma/importedProds/node_modules/unstorage/drivers/memory.mjs';
import 'file:///Users/shubhamsingh/namma/importedProds/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/shubhamsingh/namma/importedProds/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/shubhamsingh/namma/importedProds/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/shubhamsingh/namma/importedProds/node_modules/pathe/dist/index.mjs';
import 'file:///Users/shubhamsingh/namma/importedProds/node_modules/shiki/dist/core.mjs';
import 'file:///Users/shubhamsingh/namma/importedProds/node_modules/@shikijs/transformers/dist/index.mjs';
import 'file:///Users/shubhamsingh/namma/importedProds/node_modules/unified/index.js';
import 'file:///Users/shubhamsingh/namma/importedProds/node_modules/mdast-util-to-string/index.js';
import 'file:///Users/shubhamsingh/namma/importedProds/node_modules/micromark/index.js';
import 'file:///Users/shubhamsingh/namma/importedProds/node_modules/unist-util-stringify-position/index.js';
import 'file:///Users/shubhamsingh/namma/importedProds/node_modules/micromark-util-character/index.js';
import 'file:///Users/shubhamsingh/namma/importedProds/node_modules/micromark-util-chunked/index.js';
import 'file:///Users/shubhamsingh/namma/importedProds/node_modules/micromark-util-resolve-all/index.js';
import 'file:///Users/shubhamsingh/namma/importedProds/node_modules/micromark-util-sanitize-uri/index.js';
import 'file:///Users/shubhamsingh/namma/importedProds/node_modules/slugify/slugify.js';
import 'file:///Users/shubhamsingh/namma/importedProds/node_modules/remark-parse/index.js';
import 'file:///Users/shubhamsingh/namma/importedProds/node_modules/remark-rehype/index.js';
import 'file:///Users/shubhamsingh/namma/importedProds/node_modules/remark-mdc/dist/index.mjs';
import 'file:///Users/shubhamsingh/namma/importedProds/node_modules/hast-util-to-string/index.js';
import 'file:///Users/shubhamsingh/namma/importedProds/node_modules/github-slugger/index.js';
import 'file:///Users/shubhamsingh/namma/importedProds/node_modules/detab/index.js';
import 'file:///Users/shubhamsingh/namma/importedProds/node_modules/remark-emoji/index.js';
import 'file:///Users/shubhamsingh/namma/importedProds/node_modules/remark-gfm/index.js';
import 'file:///Users/shubhamsingh/namma/importedProds/node_modules/rehype-external-links/index.js';
import 'file:///Users/shubhamsingh/namma/importedProds/node_modules/rehype-sort-attribute-values/index.js';
import 'file:///Users/shubhamsingh/namma/importedProds/node_modules/rehype-sort-attributes/index.js';
import 'file:///Users/shubhamsingh/namma/importedProds/node_modules/rehype-raw/index.js';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ProseH4",
  __ssrInlineRender: true,
  props: {
    id: {}
  },
  setup(__props) {
    const props = __props;
    const { headings } = useRuntimeConfig().public.mdc;
    const generate = computed(() => {
      var _a;
      return props.id && ((_a = headings == null ? void 0 : headings.anchorLinks) == null ? void 0 : _a.h4);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<h4${ssrRenderAttrs(mergeProps({ id: _ctx.id }, _attrs))}>`);
      if (_ctx.id && unref(generate)) {
        _push(`<a${ssrRenderAttr("href", `#${_ctx.id}`)}>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</a>`);
      } else {
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      }
      _push(`</h4>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH4.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=ProseH4-CZ_jY51J.mjs.map
