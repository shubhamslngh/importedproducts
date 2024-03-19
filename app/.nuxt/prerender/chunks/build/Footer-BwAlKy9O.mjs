import { a as useAppConfig } from './server.mjs';
import { defineComponent, mergeProps, unref, useSSRContext } from 'file:///Users/shubhamsingh/namma/importedProds/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrInterpolate } from 'file:///Users/shubhamsingh/namma/importedProds/node_modules/vue/server-renderer/index.mjs';
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
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    const { awesome } = useAppConfig();
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e;
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "flex border-t border-gray-900/10 dark:border-gray-50/[0.2]" }, _attrs))}><div class="flex-1 justify-between max-w-screen-2xl mx-auto px-4 flex flex-col md:flex-row py-2 space-y-2 md:space-y-0 items-center text-xs text-center md:text-left text-gray-400"><div> Copyright \xA9 ${ssrInterpolate(((_c = (_b = (_a = unref(awesome)) == null ? void 0 : _a.layout) == null ? void 0 : _b.footer) == null ? void 0 : _c.year) || (/* @__PURE__ */ new Date()).getFullYear())} ${ssrInterpolate(((_e = (_d = unref(awesome)) == null ? void 0 : _d.author) == null ? void 0 : _e.name) || "")}. All rights reserved. </div><div>${ssrInterpolate(unref(awesome).name)}</div></div></footer>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/layouts/Page/Footer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Footer-BwAlKy9O.mjs.map
