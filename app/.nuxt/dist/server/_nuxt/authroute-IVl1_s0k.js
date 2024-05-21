import { f as useAuthStore } from "../server.mjs";
import "vue";
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
import "vue/server-renderer";
function authroute({ store, redirect }) {
  const authStore = useAuthStore();
  if (!authStore.isAuthenticated) {
    return redirect("/login");
  }
}
export {
  authroute as default
};
//# sourceMappingURL=authroute-IVl1_s0k.js.map
