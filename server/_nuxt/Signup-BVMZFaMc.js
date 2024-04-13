import { ref, mergeProps, useSSRContext } from "vue";
import { i as useMutation } from "../server.mjs";
import { s as signup } from "./cart-CRQWliXk.js";
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
import "graphql-tag";
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
export {
  Signup as default
};
//# sourceMappingURL=Signup-BVMZFaMc.js.map
