import _sfc_main$1 from './Welcome-yK_QkzMg.mjs';
import { useSSRContext, reactive, toRefs } from 'vue';
import { g as useMutation } from './server.mjs';
import { s as signup } from './cart-9njyDUNv.mjs';
import { ssrRenderComponent, ssrRenderAttr, ssrIncludeBooleanAttr, ssrInterpolate } from 'vue/server-renderer';
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
import 'throttle-debounce';
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
  _push(`<div class="signup-container" data-v-0b5ce585><form class="signup-form" data-v-0b5ce585><div class="form-group" data-v-0b5ce585><input${ssrRenderAttr("value", _ctx.username)} placeholder="Username" autocomplete="email" required class="form-control" data-v-0b5ce585></div><div class="form-group" data-v-0b5ce585><input${ssrRenderAttr("value", _ctx.password)} type="password" placeholder="Password" autocomplete="current-password" class="form-control" required data-v-0b5ce585></div><div class="form-group" data-v-0b5ce585><input${ssrRenderAttr("value", _ctx.firstName)} placeholder="First Name" required class="form-control" data-v-0b5ce585></div><div class="form-group" data-v-0b5ce585><input${ssrRenderAttr("value", _ctx.lastName)} placeholder="Last Name" required class="form-control" data-v-0b5ce585></div><div class="form-group" data-v-0b5ce585><input${ssrRenderAttr("value", _ctx.email)} type="email" placeholder="Email" autocomplete="email" required class="form-control" data-v-0b5ce585></div><div class="grid gap-4" data-v-0b5ce585><button type="submit" class="btn btn-primary"${ssrIncludeBooleanAttr($setup.loading) ? " disabled" : ""} data-v-0b5ce585> Register </button></div>`);
  if ($setup.error) {
    _push(`<div class="error-message" data-v-0b5ce585>${ssrInterpolate($setup.error.message)}</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</form></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/awesome/Signup.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-0b5ce585"]]);

export { __nuxt_component_0 as default };
//# sourceMappingURL=Signup-f100nxzr.mjs.map
