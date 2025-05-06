import __nuxt_component_0 from './Signup-f100nxzr.mjs';
import { gql } from 'graphql-tag';
import { f as useAuthStore } from './server.mjs';
import { useSSRContext } from 'vue';
import { ssrRenderAttr, ssrIncludeBooleanAttr, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './Welcome-yK_QkzMg.mjs';
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
import './cart-9njyDUNv.mjs';

const _sfc_main = {
  middleware: "authroute",
  data() {
    return {
      isSignUpVisible: false,
      username: "",
      password: "",
      isLoading: false,
      errors: null
    };
  },
  methods: {
    async signin() {
      this.isLoading = true;
      try {
        const { data } = await this.$apollo.mutate({
          mutation: gql`
            mutation Login($input: LoginInput!) {
              login(input: $input) {
                authToken
                refreshToken
                user {
                  id
                  username
                  email
                }
              }
            }
          `,
          variables: {
            input: {
              provider: "PASSWORD",
              credentials: {
                username: this.username,
                password: this.password
              }
            }
          }
        });
        const authStore = useAuthStore();
        const { authToken, refreshToken, user } = data.login;
        sessionStorage.setItem("authToken", authToken);
        sessionStorage.setItem("refreshToken", refreshToken);
        sessionStorage.setItem("user", user.username);
        authStore.setUser(user.username);
        authStore.setToken(authToken);
        authStore.setRToken(refreshToken);
        console.log("Auth Token:", authToken);
        console.log("Refresh Token:", refreshToken);
        console.log(user.username, "user");
        await this.$router.push("/");
      } catch (error) {
        console.error("Login failed:", error.message);
        this.errors = error.message;
      } finally {
        this.isLoading = false;
      }
    },
    showSignUp() {
      this.isSignUpVisible = true;
      this.$nextTick(() => {
        const signupSection = this.$refs.signupSection;
        if (signupSection) {
          signupSection.scrollIntoView({ behavior: "smooth" });
        }
      });
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_AwesomeSignup = __nuxt_component_0;
  _push(`<!--[--><div class="login-container" data-v-d349b423><form class="login-form" data-v-d349b423><div class="form-group" data-v-d349b423><input type="text"${ssrRenderAttr("value", $data.username)} placeholder="Username or Email" autocomplete="email" class="form-control" data-v-d349b423></div><div class="form-group" data-v-d349b423><input type="password"${ssrRenderAttr("value", $data.password)} autocomplete="current-password" placeholder="Password" class="form-control" data-v-d349b423></div><div class="grid gap-4" data-v-d349b423><button type="submit"${ssrIncludeBooleanAttr($data.isLoading) ? " disabled" : ""} class="btn btn-primary" data-v-d349b423> Sign in </button>`);
  if ($data.errors) {
    _push(`<div class="error-message" data-v-d349b423>${ssrInterpolate($data.errors)}</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></form><div class="grid mt-4 gap-4" data-v-d349b423><h1 class="text-center text-2xl" data-v-d349b423>or</h1><button class="btn btn-secondary" data-v-d349b423>New User</button></div></div><div class="mx-auto mt-6" data-v-d349b423>`);
  if ($data.isSignUpVisible) {
    _push(ssrRenderComponent(_component_AwesomeSignup, null, null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`</div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/awesome/Login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-d349b423"]]);

export { __nuxt_component_2 as default };
//# sourceMappingURL=Login-IbKFrzm-.mjs.map
