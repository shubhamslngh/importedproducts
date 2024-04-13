import { useSSRContext, ref, mergeProps } from 'vue';
import { i as useMutation } from './server.mjs';
import { s as signup } from './cart-CRQWliXk.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrIncludeBooleanAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
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
  data() {
    return {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      isLoading: false,
      errors: null
    };
  },
  methods: {
    async handleSignup() {
      let data = ref([]);
      let { mutate: sign, loading } = useMutation(signup);
      try {
        loading = true;
        data = await sign({
          username: this.username,
          lastName: this.lastName,
          firstName: this.firstName,
          email: this.eamil,
          password: this.password
        });
      } catch (error) {
        console.error("Error Signing Up User :", error);
        loading = false;
      }
      console.log("Sign up form submitted");
      this.firstName = "";
      this.lastName = "";
      this.username = "";
      this.email = "";
      this.password = "";
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "login-container" }, _attrs))} data-v-a2a5022e><form class="login-form" data-v-a2a5022e><div class="form-group" data-v-a2a5022e><input type="text"${ssrRenderAttr("value", $data.firstName)} placeholder="First Name" class="form-control" data-v-a2a5022e></div><div class="form-group" data-v-a2a5022e><input type="text"${ssrRenderAttr("value", $data.lastName)} placeholder="Last Name" class="form-control" data-v-a2a5022e></div><div class="form-group" data-v-a2a5022e><input type="text"${ssrRenderAttr("value", $data.username)} placeholder="Username" class="form-control" data-v-a2a5022e></div><div class="form-group" data-v-a2a5022e><input type="email"${ssrRenderAttr("value", $data.email)} placeholder="Email" class="form-control" data-v-a2a5022e></div><div class="form-group" data-v-a2a5022e><input type="password"${ssrRenderAttr("value", $data.password)} placeholder="Password" class="form-control" data-v-a2a5022e></div><div class="grid gap-4" data-v-a2a5022e><button type="submit"${ssrIncludeBooleanAttr($data.isLoading) ? " disabled" : ""} class="btn btn-primary" data-v-a2a5022e> Sign Up </button>`);
  if ($data.errors) {
    _push(`<div class="error-message" data-v-a2a5022e>${ssrInterpolate($data.errors)}</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></form></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/awesome/Signup.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Signup = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-a2a5022e"]]);

export { Signup as default };
//# sourceMappingURL=Signup-BVMZFaMc.mjs.map
