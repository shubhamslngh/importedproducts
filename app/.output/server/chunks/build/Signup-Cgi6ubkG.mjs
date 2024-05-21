import _sfc_main$1 from './Welcome-CMP_Faun.mjs';
import { h as useMutation } from './server.mjs';
import { useSSRContext, reactive, toRefs } from 'vue';
import { s as signup } from './cart-9njyDUNv.mjs';
import { ssrRenderComponent, ssrRenderAttr, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
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
import 'graphql';
import 'optimism';
import '@wry/equality';
import '@wry/trie';
import 'pinia-plugin-persistedstate';
import 'axios';
import 'graphql-tag';

const _sfc_main = {
  name: "SignupForm",
  setup() {
    const { mutate: createUser, loading, error } = useMutation(signup);
    const state = reactive({
      username: "",
      password: "",
      firstName: "",
      lastName: "",
      email: ""
    });
    const handleSignup = async () => {
      try {
        const response = await createUser({ variables: { ...state } });
        console.log("Signup successful", response);
      } catch (err) {
        console.error("Error signing up:", err);
      }
    };
    return { ...toRefs(state), handleSignup, loading, error };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_AwesomeWelcome = _sfc_main$1;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_AwesomeWelcome, { name: "REGISTER  " }, null, _parent));
  _push(`<div class="signup-container" data-v-18842e06><form class="signup-form" data-v-18842e06><div class="form-group" data-v-18842e06><input${ssrRenderAttr("value", _ctx.username)} placeholder="Username" required class="form-control" data-v-18842e06></div><div class="form-group" data-v-18842e06><input${ssrRenderAttr("value", _ctx.password)} type="password" placeholder="Password" class="form-control" required data-v-18842e06></div><div class="form-group" data-v-18842e06><input${ssrRenderAttr("value", _ctx.firstName)} placeholder="First Name" required class="form-control" data-v-18842e06></div><div class="form-group" data-v-18842e06><input${ssrRenderAttr("value", _ctx.lastName)} placeholder="Last Name" required class="form-control" data-v-18842e06></div><div class="form-group" data-v-18842e06><input${ssrRenderAttr("value", _ctx.email)} type="email" placeholder="Email" required class="form-control" data-v-18842e06></div><div class="grid gap-4" data-v-18842e06><button type="submit" class="btn btn-primary"${ssrIncludeBooleanAttr(_ctx.isLoading) ? " disabled" : ""} data-v-18842e06> Sign Up </button></div></form></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/awesome/Signup.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-18842e06"]]);

export { __nuxt_component_0 as default };
//# sourceMappingURL=Signup-Cgi6ubkG.mjs.map
