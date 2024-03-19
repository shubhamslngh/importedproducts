import { u as useNavbarParser, _ as _sfc_main$1 } from "./Item-B39ab_2b.js";
import { inject, defineComponent, provide, ref, computed, onMounted, watchEffect, getCurrentInstance, watch, onUnmounted, h, Teleport, reactive, Fragment, shallowRef, mergeProps, withCtx, unref, createVNode, toDisplayString, openBlock, createBlock, renderList, Transition, useSSRContext } from "vue";
import { A as A$1, o, c, u, I, N as N$1 } from "./env-CWaVQ5oT.js";
import { i, f, s as s$1, E as E$1, w as w$2, h as h$1, a as s$2, P, N as N$2, o as o$1, T } from "./focus-management-je2kZWzN.js";
import { w, a as w$1 } from "./use-outside-click-Do9_uFVP.js";
import { t, i as i$1, l } from "./open-closed-BDzQJ33n.js";
import __nuxt_component_1 from "./Icon-D7IhGame.js";
import "hookable";
import { i as useRoute, e as useRouter } from "../server.mjs";
import { ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import "./nuxt-link-DW4x5zSp.js";
import "ufo";
import "./index-DoEbZrXI.js";
import "#internal/nitro";
import "ofetch";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
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
import "@iconify/vue/dist/offline";
import "@iconify/vue";
import "./index-C91WxrSi.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
let e = Symbol("ForcePortalRootContext");
function s() {
  return inject(e, false);
}
defineComponent({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: false } }, setup(o2, { slots: t2, attrs: r }) {
  return provide(e, o2.force), () => {
    let { force: f2, ...n2 } = o2;
    return A$1({ theirProps: n2, ourProps: {}, slot: {}, slots: t2, attrs: r, name: "ForcePortalRoot" });
  };
} });
function x(r) {
  let e2 = i(r);
  if (!e2) {
    if (r === null)
      return null;
    throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${r}`);
  }
  let u2 = e2.getElementById("headlessui-portal-root");
  if (u2)
    return u2;
  let t2 = e2.createElement("div");
  return t2.setAttribute("id", "headlessui-portal-root"), e2.body.appendChild(t2);
}
defineComponent({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(r, { slots: e2, attrs: u2 }) {
  let t2 = ref(null), i$12 = computed(() => i(t2)), l2 = s(), n2 = inject(C, null), o$12 = ref(l2 === true || n2 == null ? x(t2.value) : n2.resolveTarget()), d2 = ref(false);
  onMounted(() => {
    d2.value = true;
  }), watchEffect(() => {
    l2 || n2 != null && (o$12.value = n2.resolveTarget());
  });
  let c2 = inject(m, null), v2 = false, H = getCurrentInstance();
  return watch(t2, () => {
    if (v2 || !c2)
      return;
    let a = o(t2);
    a && (onUnmounted(c2.register(a), H), v2 = true);
  }), onUnmounted(() => {
    var g, P2;
    let a = (g = i$12.value) == null ? void 0 : g.getElementById("headlessui-portal-root");
    a && o$12.value === a && o$12.value.children.length <= 0 && ((P2 = o$12.value.parentElement) == null || P2.removeChild(o$12.value));
  }), () => {
    if (!d2.value || o$12.value === null)
      return null;
    let a = { ref: t2, "data-headlessui-portal": "" };
    return h(Teleport, { to: o$12.value }, A$1({ ourProps: a, theirProps: r, slot: {}, attrs: u2, slots: e2, name: "Portal" }));
  };
} });
let m = Symbol("PortalParentContext");
function A() {
  let r = inject(m, null), e2 = ref([]);
  function u2(l2) {
    return e2.value.push(l2), r && r.register(l2), () => t2(l2);
  }
  function t2(l2) {
    let n2 = e2.value.indexOf(l2);
    n2 !== -1 && e2.value.splice(n2, 1), r && r.unregister(l2);
  }
  let i2 = { register: u2, unregister: t2, portals: e2 };
  return [e2, defineComponent({ name: "PortalWrapper", setup(l2, { slots: n2 }) {
    return provide(m, i2), () => {
      var o2;
      return (o2 = n2.default) == null ? void 0 : o2.call(n2);
    };
  } })];
}
let C = Symbol("PortalGroupContext");
defineComponent({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(r, { attrs: e2, slots: u2 }) {
  let t2 = reactive({ resolveTarget() {
    return r.target;
  } });
  return provide(C, t2), () => {
    let { target: i2, ...l2 } = r;
    return A$1({ theirProps: l2, ourProps: {}, slot: {}, attrs: e2, slots: u2, name: "PortalGroup" });
  };
} });
function E(n2, e2, o2, r) {
  c.isServer || watchEffect((t2) => {
    n2 = n2 != null ? n2 : void 0, n2.addEventListener(e2, o2, r), t2(() => n2.removeEventListener(e2, o2, r));
  });
}
function N({ defaultContainers: o$12 = [], portals: i$12, mainTreeNodeRef: H } = {}) {
  let t2 = ref(null), r = i(t2);
  function u2() {
    var l2, f2, a;
    let n2 = [];
    for (let e2 of o$12)
      e2 !== null && (e2 instanceof HTMLElement ? n2.push(e2) : "value" in e2 && e2.value instanceof HTMLElement && n2.push(e2.value));
    if (i$12 != null && i$12.value)
      for (let e2 of i$12.value)
        n2.push(e2);
    for (let e2 of (l2 = r == null ? void 0 : r.querySelectorAll("html > *, body > *")) != null ? l2 : [])
      e2 !== (void 0).body && e2 !== (void 0).head && e2 instanceof HTMLElement && e2.id !== "headlessui-portal-root" && (e2.contains(o(t2)) || e2.contains((a = (f2 = o(t2)) == null ? void 0 : f2.getRootNode()) == null ? void 0 : a.host) || n2.some((M) => e2.contains(M)) || n2.push(e2));
    return n2;
  }
  return { resolveContainers: u2, contains(n2) {
    return u2().some((l2) => l2.contains(n2));
  }, mainTreeNodeRef: t2, MainTreeNode() {
    return H != null ? null : h(f, { features: s$1.Hidden, ref: t2 });
  } };
}
function v() {
  let o2 = ref(null);
  return { mainTreeNodeRef: o2, MainTreeNode() {
    return h(f, { features: s$1.Hidden, ref: o2 });
  } };
}
var d = ((r) => (r[r.Forwards = 0] = "Forwards", r[r.Backwards = 1] = "Backwards", r))(d || {});
function n() {
  let o2 = ref(0);
  return w("keydown", (e2) => {
    e2.key === "Tab" && (o2.value = e2.shiftKey ? 1 : 0);
  }), o2;
}
var Se = ((s2) => (s2[s2.Open = 0] = "Open", s2[s2.Closed = 1] = "Closed", s2))(Se || {});
let re = Symbol("PopoverContext");
function U(d2) {
  let P2 = inject(re, null);
  if (P2 === null) {
    let s2 = new Error(`<${d2} /> is missing a parent <${ye.name} /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(s2, U), s2;
  }
  return P2;
}
let le = Symbol("PopoverGroupContext");
function ae() {
  return inject(le, null);
}
let ue = Symbol("PopoverPanelContext");
function ge() {
  return inject(ue, null);
}
let ye = defineComponent({ name: "Popover", inheritAttrs: false, props: { as: { type: [Object, String], default: "div" } }, setup(d2, { slots: P2, attrs: s2, expose: h$2 }) {
  var u$1;
  let f2 = ref(null);
  h$2({ el: f2, $el: f2 });
  let t$1 = ref(1), o$12 = ref(null), y = ref(null), v2 = ref(null), m2 = ref(null), b = computed(() => i(f2)), E$2 = computed(() => {
    var L, $;
    if (!o(o$12) || !o(m2))
      return false;
    for (let x2 of (void 0).querySelectorAll("body > *"))
      if (Number(x2 == null ? void 0 : x2.contains(o(o$12))) ^ Number(x2 == null ? void 0 : x2.contains(o(m2))))
        return true;
    let e2 = E$1(), r = e2.indexOf(o(o$12)), l2 = (r + e2.length - 1) % e2.length, g = (r + 1) % e2.length, G = e2[l2], C2 = e2[g];
    return !((L = o(m2)) != null && L.contains(G)) && !(($ = o(m2)) != null && $.contains(C2));
  }), a = { popoverState: t$1, buttonId: ref(null), panelId: ref(null), panel: m2, button: o$12, isPortalled: E$2, beforePanelSentinel: y, afterPanelSentinel: v2, togglePopover() {
    t$1.value = u(t$1.value, { [0]: 1, [1]: 0 });
  }, closePopover() {
    t$1.value !== 1 && (t$1.value = 1);
  }, close(e2) {
    a.closePopover();
    let r = (() => e2 ? e2 instanceof HTMLElement ? e2 : e2.value instanceof HTMLElement ? o(e2) : o(a.button) : o(a.button))();
    r == null || r.focus();
  } };
  provide(re, a), t(computed(() => u(t$1.value, { [0]: i$1.Open, [1]: i$1.Closed })));
  let S = { buttonId: a.buttonId, panelId: a.panelId, close() {
    a.closePopover();
  } }, c2 = ae(), I2 = c2 == null ? void 0 : c2.registerPopover, [F, w2] = A(), i$2 = N({ mainTreeNodeRef: c2 == null ? void 0 : c2.mainTreeNodeRef, portals: F, defaultContainers: [o$12, m2] });
  function p() {
    var e2, r, l2, g;
    return (g = c2 == null ? void 0 : c2.isFocusWithinPopoverGroup()) != null ? g : ((e2 = b.value) == null ? void 0 : e2.activeElement) && (((r = o(o$12)) == null ? void 0 : r.contains(b.value.activeElement)) || ((l2 = o(m2)) == null ? void 0 : l2.contains(b.value.activeElement)));
  }
  return watchEffect(() => I2 == null ? void 0 : I2(S)), E((u$1 = b.value) == null ? void 0 : u$1.defaultView, "focus", (e2) => {
    var r, l2;
    e2.target !== void 0 && e2.target instanceof HTMLElement && t$1.value === 0 && (p() || o$12 && m2 && (i$2.contains(e2.target) || (r = o(a.beforePanelSentinel)) != null && r.contains(e2.target) || (l2 = o(a.afterPanelSentinel)) != null && l2.contains(e2.target) || a.closePopover()));
  }, true), w$1(i$2.resolveContainers, (e2, r) => {
    var l2;
    a.closePopover(), w$2(r, h$1.Loose) || (e2.preventDefault(), (l2 = o(o$12)) == null || l2.focus());
  }, computed(() => t$1.value === 0)), () => {
    let e2 = { open: t$1.value === 0, close: a.close };
    return h(Fragment, [h(w2, {}, () => A$1({ theirProps: { ...d2, ...s2 }, ourProps: { ref: f2 }, slot: e2, slots: P2, attrs: s2, name: "Popover" })), h(i$2.MainTreeNode)]);
  };
} }), Ge = defineComponent({ name: "PopoverButton", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: false }, id: { type: String, default: null } }, inheritAttrs: false, setup(d$1, { attrs: P$1, slots: s2, expose: h$12 }) {
  var u$1;
  let f$1 = (u$1 = d$1.id) != null ? u$1 : `headlessui-popover-button-${I()}`, t2 = U("PopoverButton"), o$2 = computed(() => i(t2.button));
  h$12({ el: t2.button, $el: t2.button }), onMounted(() => {
    t2.buttonId.value = f$1;
  }), onUnmounted(() => {
    t2.buttonId.value = null;
  });
  let y = ae(), v2 = y == null ? void 0 : y.closeOthers, m2 = ge(), b = computed(() => m2 === null ? false : m2.value === t2.panelId.value), E2 = ref(null), a = `headlessui-focus-sentinel-${I()}`;
  b.value || watchEffect(() => {
    t2.button.value = o(E2);
  });
  let S = s$2(computed(() => ({ as: d$1.as, type: P$1.type })), E2);
  function c2(e2) {
    var r, l2, g, G, C2;
    if (b.value) {
      if (t2.popoverState.value === 1)
        return;
      switch (e2.key) {
        case o$1.Space:
        case o$1.Enter:
          e2.preventDefault(), (l2 = (r = e2.target).click) == null || l2.call(r), t2.closePopover(), (g = o(t2.button)) == null || g.focus();
          break;
      }
    } else
      switch (e2.key) {
        case o$1.Space:
        case o$1.Enter:
          e2.preventDefault(), e2.stopPropagation(), t2.popoverState.value === 1 && (v2 == null || v2(t2.buttonId.value)), t2.togglePopover();
          break;
        case o$1.Escape:
          if (t2.popoverState.value !== 0)
            return v2 == null ? void 0 : v2(t2.buttonId.value);
          if (!o(t2.button) || (G = o$2.value) != null && G.activeElement && !((C2 = o(t2.button)) != null && C2.contains(o$2.value.activeElement)))
            return;
          e2.preventDefault(), e2.stopPropagation(), t2.closePopover();
          break;
      }
  }
  function I$1(e2) {
    b.value || e2.key === o$1.Space && e2.preventDefault();
  }
  function F(e2) {
    var r, l2;
    d$1.disabled || (b.value ? (t2.closePopover(), (r = o(t2.button)) == null || r.focus()) : (e2.preventDefault(), e2.stopPropagation(), t2.popoverState.value === 1 && (v2 == null || v2(t2.buttonId.value)), t2.togglePopover(), (l2 = o(t2.button)) == null || l2.focus()));
  }
  function w2(e2) {
    e2.preventDefault(), e2.stopPropagation();
  }
  let i$12 = n();
  function p() {
    let e2 = o(t2.panel);
    if (!e2)
      return;
    function r() {
      u(i$12.value, { [d.Forwards]: () => P(e2, N$2.First), [d.Backwards]: () => P(e2, N$2.Last) }) === T.Error && P(E$1().filter((g) => g.dataset.headlessuiFocusGuard !== "true"), u(i$12.value, { [d.Forwards]: N$2.Next, [d.Backwards]: N$2.Previous }), { relativeTo: o(t2.button) });
    }
    r();
  }
  return () => {
    let e2 = t2.popoverState.value === 0, r = { open: e2 }, { ...l2 } = d$1, g = b.value ? { ref: E2, type: S.value, onKeydown: c2, onClick: F } : { ref: E2, id: f$1, type: S.value, "aria-expanded": t2.popoverState.value === 0, "aria-controls": o(t2.panel) ? t2.panelId.value : void 0, disabled: d$1.disabled ? true : void 0, onKeydown: c2, onKeyup: I$1, onClick: F, onMousedown: w2 };
    return h(Fragment, [A$1({ ourProps: g, theirProps: { ...P$1, ...l2 }, slot: r, attrs: P$1, slots: s2, name: "PopoverButton" }), e2 && !b.value && t2.isPortalled.value && h(f, { id: a, features: s$1.Focusable, "data-headlessui-focus-guard": true, as: "button", type: "button", onFocus: p })]);
  };
} });
defineComponent({ name: "PopoverOverlay", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true } }, setup(d2, { attrs: P2, slots: s2 }) {
  let h2 = U("PopoverOverlay"), f2 = `headlessui-popover-overlay-${I()}`, t2 = l(), o2 = computed(() => t2 !== null ? (t2.value & i$1.Open) === i$1.Open : h2.popoverState.value === 0);
  function y() {
    h2.closePopover();
  }
  return () => {
    let v2 = { open: h2.popoverState.value === 0 };
    return A$1({ ourProps: { id: f2, "aria-hidden": true, onClick: y }, theirProps: d2, slot: v2, attrs: P2, slots: s2, features: N$1.RenderStrategy | N$1.Static, visible: o2.value, name: "PopoverOverlay" });
  };
} });
let je = defineComponent({ name: "PopoverPanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, focus: { type: Boolean, default: false }, id: { type: String, default: null } }, inheritAttrs: false, setup(d$1, { attrs: P$1, slots: s2, expose: h$12 }) {
  var w2;
  let f$1 = (w2 = d$1.id) != null ? w2 : `headlessui-popover-panel-${I()}`, { focus: t2 } = d$1, o$2 = U("PopoverPanel"), y = computed(() => i(o$2.panel)), v2 = `headlessui-focus-sentinel-before-${I()}`, m2 = `headlessui-focus-sentinel-after-${I()}`;
  h$12({ el: o$2.panel, $el: o$2.panel }), onMounted(() => {
    o$2.panelId.value = f$1;
  }), onUnmounted(() => {
    o$2.panelId.value = null;
  }), provide(ue, o$2.panelId), watchEffect(() => {
    var p, u2;
    if (!t2 || o$2.popoverState.value !== 0 || !o$2.panel)
      return;
    let i2 = (p = y.value) == null ? void 0 : p.activeElement;
    (u2 = o(o$2.panel)) != null && u2.contains(i2) || P(o(o$2.panel), N$2.First);
  });
  let b = l(), E2 = computed(() => b !== null ? (b.value & i$1.Open) === i$1.Open : o$2.popoverState.value === 0);
  function a(i2) {
    var p, u2;
    switch (i2.key) {
      case o$1.Escape:
        if (o$2.popoverState.value !== 0 || !o(o$2.panel) || y.value && !((p = o(o$2.panel)) != null && p.contains(y.value.activeElement)))
          return;
        i2.preventDefault(), i2.stopPropagation(), o$2.closePopover(), (u2 = o(o$2.button)) == null || u2.focus();
        break;
    }
  }
  function S(i2) {
    var u2, e2, r, l2, g;
    let p = i2.relatedTarget;
    p && o(o$2.panel) && ((u2 = o(o$2.panel)) != null && u2.contains(p) || (o$2.closePopover(), ((r = (e2 = o(o$2.beforePanelSentinel)) == null ? void 0 : e2.contains) != null && r.call(e2, p) || (g = (l2 = o(o$2.afterPanelSentinel)) == null ? void 0 : l2.contains) != null && g.call(l2, p)) && p.focus({ preventScroll: true })));
  }
  let c2 = n();
  function I$1() {
    let i2 = o(o$2.panel);
    if (!i2)
      return;
    function p() {
      u(c2.value, { [d.Forwards]: () => {
        var e2;
        P(i2, N$2.First) === T.Error && ((e2 = o(o$2.afterPanelSentinel)) == null || e2.focus());
      }, [d.Backwards]: () => {
        var u2;
        (u2 = o(o$2.button)) == null || u2.focus({ preventScroll: true });
      } });
    }
    p();
  }
  function F() {
    let i2 = o(o$2.panel);
    if (!i2)
      return;
    function p() {
      u(c2.value, { [d.Forwards]: () => {
        let u2 = o(o$2.button), e2 = o(o$2.panel);
        if (!u2)
          return;
        let r = E$1(), l2 = r.indexOf(u2), g = r.slice(0, l2 + 1), C2 = [...r.slice(l2 + 1), ...g];
        for (let L of C2.slice())
          if (L.dataset.headlessuiFocusGuard === "true" || e2 != null && e2.contains(L)) {
            let $ = C2.indexOf(L);
            $ !== -1 && C2.splice($, 1);
          }
        P(C2, N$2.First, { sorted: false });
      }, [d.Backwards]: () => {
        var e2;
        P(i2, N$2.Previous) === T.Error && ((e2 = o(o$2.button)) == null || e2.focus());
      } });
    }
    p();
  }
  return () => {
    let i2 = { open: o$2.popoverState.value === 0, close: o$2.close }, { focus: p, ...u2 } = d$1, e2 = { ref: o$2.panel, id: f$1, onKeydown: a, onFocusout: t2 && o$2.popoverState.value === 0 ? S : void 0, tabIndex: -1 };
    return A$1({ ourProps: e2, theirProps: { ...P$1, ...u2 }, attrs: P$1, slot: i2, slots: { ...s2, default: (...r) => {
      var l2;
      return [h(Fragment, [E2.value && o$2.isPortalled.value && h(f, { id: v2, ref: o$2.beforePanelSentinel, features: s$1.Focusable, "data-headlessui-focus-guard": true, as: "button", type: "button", onFocus: I$1 }), (l2 = s2.default) == null ? void 0 : l2.call(s2, ...r), E2.value && o$2.isPortalled.value && h(f, { id: m2, ref: o$2.afterPanelSentinel, features: s$1.Focusable, "data-headlessui-focus-guard": true, as: "button", type: "button", onFocus: F })])];
    } }, features: N$1.RenderStrategy | N$1.Static, visible: E2.value, name: "PopoverPanel" });
  };
} });
defineComponent({ name: "PopoverGroup", inheritAttrs: false, props: { as: { type: [Object, String], default: "div" } }, setup(d2, { attrs: P2, slots: s2, expose: h$12 }) {
  let f2 = ref(null), t2 = shallowRef([]), o$12 = computed(() => i(f2)), y = v();
  h$12({ el: f2, $el: f2 });
  function v$1(a) {
    let S = t2.value.indexOf(a);
    S !== -1 && t2.value.splice(S, 1);
  }
  function m2(a) {
    return t2.value.push(a), () => {
      v$1(a);
    };
  }
  function b() {
    var c2;
    let a = o$12.value;
    if (!a)
      return false;
    let S = a.activeElement;
    return (c2 = o(f2)) != null && c2.contains(S) ? true : t2.value.some((I2) => {
      var F, w2;
      return ((F = a.getElementById(I2.buttonId.value)) == null ? void 0 : F.contains(S)) || ((w2 = a.getElementById(I2.panelId.value)) == null ? void 0 : w2.contains(S));
    });
  }
  function E2(a) {
    for (let S of t2.value)
      S.buttonId.value !== a && S.close();
  }
  return provide(le, { registerPopover: m2, unregisterPopover: v$1, isFocusWithinPopoverGroup: b, closeOthers: E2, mainTreeNodeRef: y.mainTreeNodeRef }), () => h(Fragment, [A$1({ ourProps: { ref: f2 }, theirProps: { ...d2, ...P2 }, slot: {}, attrs: P2, slots: s2, name: "PopoverGroup" }), h(y.MainTreeNode)]);
} });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Wrapper",
  __ssrInlineRender: true,
  props: {
    menu: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const route = useRoute();
    useRouter();
    const { parseMenuRoute, parseMenuTitle } = useNavbarParser();
    const props = __props;
    const isActive = computed(() => {
      var _a, _b, _c, _d;
      if (!((_a = props.menu) == null ? void 0 : _a.children))
        return false;
      const childs = ((_b = props.menu) == null ? void 0 : _b.children) || [];
      for (const child of childs) {
        const to = parseMenuRoute(child.to);
        if (typeof to === "string" && to === route.path)
          return true;
        if ((_d = route.name) == null ? void 0 : _d.toString().includes((_c = to.name) == null ? void 0 : _c.toString()))
          return true;
      }
      return false;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LayoutPageNavbarMenuItem = _sfc_main$1;
      const _component_HeadlessPopover = ye;
      const _component_HeadlessPopoverButton = Ge;
      const _component_Icon = __nuxt_component_1;
      const _component_HeadlessPopoverPanel = je;
      if (__props.menu.type !== "dropdown") {
        _push(ssrRenderComponent(_component_LayoutPageNavbarMenuItem, mergeProps({ menu: __props.menu }, _attrs), null, _parent));
      } else if (__props.menu.children && __props.menu.children.length > 0) {
        _push(ssrRenderComponent(_component_HeadlessPopover, _attrs, {
          default: withCtx(({ open }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_HeadlessPopoverButton, { class: "flex items-center transition-all duration-300 text-gray-900 dark:text-gray-100" }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span class="${ssrRenderClass([unref(isActive) ? "font-bold" : ""])}"${_scopeId2}>${ssrInterpolate(unref(parseMenuTitle)(__props.menu.title))}</span>`);
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "carbon:chevron-down",
                      class: ["ml-1", [open ? "transform rotate-180" : ""]]
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode("span", {
                        class: [unref(isActive) ? "font-bold" : ""]
                      }, toDisplayString(unref(parseMenuTitle)(__props.menu.title)), 3),
                      createVNode(_component_Icon, {
                        name: "carbon:chevron-down",
                        class: ["ml-1", [open ? "transform rotate-180" : ""]]
                      }, null, 8, ["class"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(``);
              _push2(ssrRenderComponent(_component_HeadlessPopoverPanel, { class: "absolute z-10 px-2 py-2 rounded-lg min-w-[150px] bg-gray-50 border-gray-300 dark:bg-gray-900 border dark:border-gray-600" }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="grid grid-cols-1"${_scopeId2}><!--[-->`);
                    ssrRenderList(__props.menu.children, (child, j) => {
                      _push3(ssrRenderComponent(_component_LayoutPageNavbarMenuItem, {
                        menu: child,
                        "is-dropdown": ""
                      }, null, _parent3, _scopeId2));
                    });
                    _push3(`<!--]--></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "grid grid-cols-1" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(__props.menu.children, (child, j) => {
                          return openBlock(), createBlock(_component_LayoutPageNavbarMenuItem, {
                            key: j,
                            menu: child,
                            "is-dropdown": ""
                          }, null, 8, ["menu"]);
                        }), 128))
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_HeadlessPopoverButton, { class: "flex items-center transition-all duration-300 text-gray-900 dark:text-gray-100" }, {
                  default: withCtx(() => [
                    createVNode("span", {
                      class: [unref(isActive) ? "font-bold" : ""]
                    }, toDisplayString(unref(parseMenuTitle)(__props.menu.title)), 3),
                    createVNode(_component_Icon, {
                      name: "carbon:chevron-down",
                      class: ["ml-1", [open ? "transform rotate-180" : ""]]
                    }, null, 8, ["class"])
                  ]),
                  _: 2
                }, 1024),
                createVNode(Transition, {
                  "enter-active-class": "transition duration-200 ease-out",
                  "enter-from-class": "translate-y-1 opacity-0",
                  "enter-to-class": "translate-y-0 opacity-100",
                  "leave-active-class": "transition duration-150 ease-in",
                  "leave-from-class": "translate-y-0 opacity-100",
                  "leave-to-class": "translate-y-1 opacity-0"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_HeadlessPopoverPanel, { class: "absolute z-10 px-2 py-2 rounded-lg min-w-[150px] bg-gray-50 border-gray-300 dark:bg-gray-900 border dark:border-gray-600" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "grid grid-cols-1" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(__props.menu.children, (child, j) => {
                            return openBlock(), createBlock(_component_LayoutPageNavbarMenuItem, {
                              key: j,
                              menu: child,
                              "is-dropdown": ""
                            }, null, 8, ["menu"]);
                          }), 128))
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/layouts/Page/NavbarMenu/Wrapper.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=Wrapper-6KuTjX3d.js.map
