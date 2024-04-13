import { gql } from "graphql-tag";
import { f as useAuthStore } from "../server.mjs";
import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrIncludeBooleanAttr, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
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
const _sfc_main = {
  data() {
    return {
      username: "",
      password: "",
      isLoading: false,
      errors: null
    };
  },
  methods: {
    async handleSubmit() {
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
        localStorage.setItem("authToken", authToken);
        localStorage.setItem("refreshToken", refreshToken);
        authStore.setUser(user.username);
        authStore.setToken(authToken);
        authStore.setRToken(refreshToken);
        console.log("Auth Token:", authToken);
        console.log("Refresh Token:", refreshToken);
        console.log(user.username, "user");
        await this.$router.push("/cart");
      } catch (error) {
        console.error("Login failed:", error.message);
        this.errors = error.message;
      } finally {
        this.isLoading = false;
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "login-container" }, _attrs))}><form class="login-form"><div class="form-group"><input type="text"${ssrRenderAttr("value", $data.username)} placeholder="Username or Email" autocomplete="email" class="form-control"></div><div class="form-group"><input type="password"${ssrRenderAttr("value", $data.password)} autocomplete="current-password" placeholder="Password" class="form-control"></div><div class="grid gap-4"><button type="submit"${ssrIncludeBooleanAttr($data.isLoading) ? " disabled" : ""} class="btn btn-primary"> Sign in </button><button type="signup"${ssrIncludeBooleanAttr($data.isLoading) ? " disabled" : ""} class="btn btn-primary"> Sign Up </button>`);
  if ($data.errors) {
    _push(`<div class="error-message">${ssrInterpolate($data.errors)}</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></form></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/awesome/Login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __nuxt_component_2 as default
};
//# sourceMappingURL=Login-CIGLKkT0.js.map
