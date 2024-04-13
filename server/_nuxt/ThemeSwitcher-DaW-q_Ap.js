import { ref, computed, defineComponent, provide, onMounted, watch, h as h$1, Fragment, onUnmounted, watchEffect, nextTick, inject, toRaw, toRef, mergeProps, unref, withCtx, createTextVNode, createVNode, openBlock, createBlock, createCommentVNode, toDisplayString, renderList, useSSRContext } from "vue";
import { o as o$2, u as u$2, E, A as A$1, T, I, N } from "./env-CWaVQ5oT.js";
import { a as w } from "./use-outside-click-Do9_uFVP.js";
import { w as w$1, h, f as f$2, s, a as s$1, O, o as o$3 } from "./focus-management-je2kZWzN.js";
import { t, i, l } from "./open-closed-BDzQJ33n.js";
import _sfc_main$1 from "./index-wZZaSsjS.js";
import __nuxt_component_1 from "./Icon-D2VGgqqz.js";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import "./nuxt-link-DuPix_nQ.js";
import "ufo";
import "../server.mjs";
import "#internal/nitro";
import "ofetch";
import "hookable";
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
function d(u2, e2, r2) {
  let i2 = ref(r2 == null ? void 0 : r2.value), f2 = computed(() => u2.value !== void 0);
  return [computed(() => f2.value ? u2.value : i2.value), function(t2) {
    return f2.value || (i2.value = t2), e2 == null ? void 0 : e2(t2);
  }];
}
let a = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
function o$1(e2) {
  var r2, i2;
  let n = (r2 = e2.innerText) != null ? r2 : "", t2 = e2.cloneNode(true);
  if (!(t2 instanceof HTMLElement))
    return n;
  let u2 = false;
  for (let f2 of t2.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))
    f2.remove(), u2 = true;
  let l2 = u2 ? (i2 = t2.innerText) != null ? i2 : "" : n;
  return a.test(l2) && (l2 = l2.replace(a, "")), l2;
}
function g(e2) {
  let n = e2.getAttribute("aria-label");
  if (typeof n == "string")
    return n.trim();
  let t2 = e2.getAttribute("aria-labelledby");
  if (t2) {
    let u2 = t2.split(" ").map((l2) => {
      let r2 = (void 0).getElementById(l2);
      if (r2) {
        let i2 = r2.getAttribute("aria-label");
        return typeof i2 == "string" ? i2.trim() : o$1(r2).trim();
      }
      return null;
    }).filter(Boolean);
    if (u2.length > 0)
      return u2.join(", ");
  }
  return o$1(e2).trim();
}
function p(a2) {
  let t2 = ref(""), r2 = ref("");
  return () => {
    let e2 = o$2(a2);
    if (!e2)
      return "";
    let l2 = e2.innerText;
    if (t2.value === l2)
      return r2.value;
    let u2 = g(e2).trim().toLowerCase();
    return t2.value = l2, r2.value = u2, u2;
  };
}
function r(e2) {
  return [e2.screenX, e2.screenY];
}
function u$1() {
  let e2 = ref([-1, -1]);
  return { wasMoved(n) {
    let t2 = r(n);
    return e2.value[0] === t2[0] && e2.value[1] === t2[1] ? false : (e2.value = t2, true);
  }, update(n) {
    e2.value = r(n);
  } };
}
function u(l2) {
  throw new Error("Unexpected object: " + l2);
}
var c = ((i2) => (i2[i2.First = 0] = "First", i2[i2.Previous = 1] = "Previous", i2[i2.Next = 2] = "Next", i2[i2.Last = 3] = "Last", i2[i2.Specific = 4] = "Specific", i2[i2.Nothing = 5] = "Nothing", i2))(c || {});
function f$1(l2, n) {
  let t2 = n.resolveItems();
  if (t2.length <= 0)
    return null;
  let r2 = n.resolveActiveIndex(), s2 = r2 != null ? r2 : -1;
  switch (l2.focus) {
    case 0: {
      for (let e2 = 0; e2 < t2.length; ++e2)
        if (!n.resolveDisabled(t2[e2], e2, t2))
          return e2;
      return r2;
    }
    case 1: {
      s2 === -1 && (s2 = t2.length);
      for (let e2 = s2 - 1; e2 >= 0; --e2)
        if (!n.resolveDisabled(t2[e2], e2, t2))
          return e2;
      return r2;
    }
    case 2: {
      for (let e2 = s2 + 1; e2 < t2.length; ++e2)
        if (!n.resolveDisabled(t2[e2], e2, t2))
          return e2;
      return r2;
    }
    case 3: {
      for (let e2 = t2.length - 1; e2 >= 0; --e2)
        if (!n.resolveDisabled(t2[e2], e2, t2))
          return e2;
      return r2;
    }
    case 4: {
      for (let e2 = 0; e2 < t2.length; ++e2)
        if (n.resolveId(t2[e2], e2, t2) === l2.id)
          return e2;
      return r2;
    }
    case 5:
      return null;
    default:
      u(l2);
  }
}
function e(i2 = {}, s2 = null, t2 = []) {
  for (let [r2, n] of Object.entries(i2))
    o(t2, f(s2, r2), n);
  return t2;
}
function f(i2, s2) {
  return i2 ? i2 + "[" + s2 + "]" : s2;
}
function o(i2, s2, t2) {
  if (Array.isArray(t2))
    for (let [r2, n] of t2.entries())
      o(i2, f(s2, r2.toString()), n);
  else
    t2 instanceof Date ? i2.push([s2, t2.toISOString()]) : typeof t2 == "boolean" ? i2.push([s2, t2 ? "1" : "0"]) : typeof t2 == "string" ? i2.push([s2, t2]) : typeof t2 == "number" ? i2.push([s2, `${t2}`]) : t2 == null ? i2.push([s2, ""]) : e(t2, s2, i2);
}
function pe(o2, b) {
  return o2 === b;
}
var ce = ((r2) => (r2[r2.Open = 0] = "Open", r2[r2.Closed = 1] = "Closed", r2))(ce || {}), ve = ((r2) => (r2[r2.Single = 0] = "Single", r2[r2.Multi = 1] = "Multi", r2))(ve || {}), be = ((r2) => (r2[r2.Pointer = 0] = "Pointer", r2[r2.Other = 1] = "Other", r2))(be || {});
function me(o2) {
  requestAnimationFrame(() => requestAnimationFrame(o2));
}
let $ = Symbol("ListboxContext");
function A(o2) {
  let b = inject($, null);
  if (b === null) {
    let r2 = new Error(`<${o2} /> is missing a parent <Listbox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r2, A), r2;
  }
  return b;
}
let Ie = defineComponent({ name: "Listbox", emits: { "update:modelValue": (o2) => true }, props: { as: { type: [Object, String], default: "template" }, disabled: { type: [Boolean], default: false }, by: { type: [String, Function], default: () => pe }, horizontal: { type: [Boolean], default: false }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, form: { type: String, optional: true }, name: { type: String, optional: true }, multiple: { type: [Boolean], default: false } }, inheritAttrs: false, setup(o2, { slots: b, attrs: r2, emit: w$2 }) {
  let n = ref(1), e$1 = ref(null), f2 = ref(null), v = ref(null), s$12 = ref([]), m = ref(""), p2 = ref(null), a2 = ref(1);
  function u2(t2 = (i2) => i2) {
    let i2 = p2.value !== null ? s$12.value[p2.value] : null, l2 = O(t2(s$12.value.slice()), (O2) => o$2(O2.dataRef.domRef)), d2 = i2 ? l2.indexOf(i2) : null;
    return d2 === -1 && (d2 = null), { options: l2, activeOptionIndex: d2 };
  }
  let D = computed(() => o2.multiple ? 1 : 0), [y, L] = d(computed(() => o2.modelValue), (t2) => w$2("update:modelValue", t2), computed(() => o2.defaultValue)), M = computed(() => y.value === void 0 ? u$2(D.value, { [1]: [], [0]: void 0 }) : y.value), k = { listboxState: n, value: M, mode: D, compare(t2, i2) {
    if (typeof o2.by == "string") {
      let l2 = o2.by;
      return (t2 == null ? void 0 : t2[l2]) === (i2 == null ? void 0 : i2[l2]);
    }
    return o2.by(t2, i2);
  }, orientation: computed(() => o2.horizontal ? "horizontal" : "vertical"), labelRef: e$1, buttonRef: f2, optionsRef: v, disabled: computed(() => o2.disabled), options: s$12, searchQuery: m, activeOptionIndex: p2, activationTrigger: a2, closeListbox() {
    o2.disabled || n.value !== 1 && (n.value = 1, p2.value = null);
  }, openListbox() {
    o2.disabled || n.value !== 0 && (n.value = 0);
  }, goToOption(t2, i2, l2) {
    if (o2.disabled || n.value === 1)
      return;
    let d2 = u2(), O2 = f$1(t2 === c.Specific ? { focus: c.Specific, id: i2 } : { focus: t2 }, { resolveItems: () => d2.options, resolveActiveIndex: () => d2.activeOptionIndex, resolveId: (h2) => h2.id, resolveDisabled: (h2) => h2.dataRef.disabled });
    m.value = "", p2.value = O2, a2.value = l2 != null ? l2 : 1, s$12.value = d2.options;
  }, search(t2) {
    if (o2.disabled || n.value === 1)
      return;
    let l2 = m.value !== "" ? 0 : 1;
    m.value += t2.toLowerCase();
    let O2 = (p2.value !== null ? s$12.value.slice(p2.value + l2).concat(s$12.value.slice(0, p2.value + l2)) : s$12.value).find((I2) => I2.dataRef.textValue.startsWith(m.value) && !I2.dataRef.disabled), h2 = O2 ? s$12.value.indexOf(O2) : -1;
    h2 === -1 || h2 === p2.value || (p2.value = h2, a2.value = 1);
  }, clearSearch() {
    o2.disabled || n.value !== 1 && m.value !== "" && (m.value = "");
  }, registerOption(t2, i2) {
    let l2 = u2((d2) => [...d2, { id: t2, dataRef: i2 }]);
    s$12.value = l2.options, p2.value = l2.activeOptionIndex;
  }, unregisterOption(t2) {
    let i2 = u2((l2) => {
      let d2 = l2.findIndex((O2) => O2.id === t2);
      return d2 !== -1 && l2.splice(d2, 1), l2;
    });
    s$12.value = i2.options, p2.value = i2.activeOptionIndex, a2.value = 1;
  }, theirOnChange(t2) {
    o2.disabled || L(t2);
  }, select(t2) {
    o2.disabled || L(u$2(D.value, { [0]: () => t2, [1]: () => {
      let i2 = toRaw(k.value.value).slice(), l2 = toRaw(t2), d2 = i2.findIndex((O2) => k.compare(l2, toRaw(O2)));
      return d2 === -1 ? i2.push(l2) : i2.splice(d2, 1), i2;
    } }));
  } };
  w([f2, v], (t2, i2) => {
    var l2;
    k.closeListbox(), w$1(i2, h.Loose) || (t2.preventDefault(), (l2 = o$2(f2)) == null || l2.focus());
  }, computed(() => n.value === 0)), provide($, k), t(computed(() => u$2(n.value, { [0]: i.Open, [1]: i.Closed })));
  let C = computed(() => {
    var t2;
    return (t2 = o$2(f2)) == null ? void 0 : t2.closest("form");
  });
  return onMounted(() => {
    watch([C], () => {
      if (!C.value || o2.defaultValue === void 0)
        return;
      function t2() {
        k.theirOnChange(o2.defaultValue);
      }
      return C.value.addEventListener("reset", t2), () => {
        var i2;
        (i2 = C.value) == null || i2.removeEventListener("reset", t2);
      };
    }, { immediate: true });
  }), () => {
    let { name: t2, modelValue: i2, disabled: l2, form: d2, ...O2 } = o2, h2 = { open: n.value === 0, disabled: l2, value: M.value };
    return h$1(Fragment, [...t2 != null && M.value != null ? e({ [t2]: M.value }).map(([I2, Q]) => h$1(f$2, E({ features: s.Hidden, key: I2, as: "input", type: "hidden", hidden: true, readOnly: true, form: d2, name: I2, value: Q }))) : [], A$1({ ourProps: {}, theirProps: { ...r2, ...T(O2, ["defaultValue", "onUpdate:modelValue", "horizontal", "multiple", "by"]) }, slot: h2, slots: b, attrs: r2, name: "Listbox" })]);
  };
} }), Ee = defineComponent({ name: "ListboxLabel", props: { as: { type: [Object, String], default: "label" }, id: { type: String, default: null } }, setup(o2, { attrs: b, slots: r2 }) {
  var f2;
  let w2 = (f2 = o2.id) != null ? f2 : `headlessui-listbox-label-${I()}`, n = A("ListboxLabel");
  function e2() {
    var v;
    (v = o$2(n.buttonRef)) == null || v.focus({ preventScroll: true });
  }
  return () => {
    let v = { open: n.listboxState.value === 0, disabled: n.disabled.value }, { ...s2 } = o2, m = { id: w2, ref: n.labelRef, onClick: e2 };
    return A$1({ ourProps: m, theirProps: s2, slot: v, attrs: b, slots: r2, name: "ListboxLabel" });
  };
} }), je = defineComponent({ name: "ListboxButton", props: { as: { type: [Object, String], default: "button" }, id: { type: String, default: null } }, setup(o2, { attrs: b, slots: r2, expose: w2 }) {
  var p2;
  let n = (p2 = o2.id) != null ? p2 : `headlessui-listbox-button-${I()}`, e2 = A("ListboxButton");
  w2({ el: e2.buttonRef, $el: e2.buttonRef });
  function f2(a2) {
    switch (a2.key) {
      case o$3.Space:
      case o$3.Enter:
      case o$3.ArrowDown:
        a2.preventDefault(), e2.openListbox(), nextTick(() => {
          var u2;
          (u2 = o$2(e2.optionsRef)) == null || u2.focus({ preventScroll: true }), e2.value.value || e2.goToOption(c.First);
        });
        break;
      case o$3.ArrowUp:
        a2.preventDefault(), e2.openListbox(), nextTick(() => {
          var u2;
          (u2 = o$2(e2.optionsRef)) == null || u2.focus({ preventScroll: true }), e2.value.value || e2.goToOption(c.Last);
        });
        break;
    }
  }
  function v(a2) {
    switch (a2.key) {
      case o$3.Space:
        a2.preventDefault();
        break;
    }
  }
  function s2(a2) {
    e2.disabled.value || (e2.listboxState.value === 0 ? (e2.closeListbox(), nextTick(() => {
      var u2;
      return (u2 = o$2(e2.buttonRef)) == null ? void 0 : u2.focus({ preventScroll: true });
    })) : (a2.preventDefault(), e2.openListbox(), me(() => {
      var u2;
      return (u2 = o$2(e2.optionsRef)) == null ? void 0 : u2.focus({ preventScroll: true });
    })));
  }
  let m = s$1(computed(() => ({ as: o2.as, type: b.type })), e2.buttonRef);
  return () => {
    var y, L;
    let a2 = { open: e2.listboxState.value === 0, disabled: e2.disabled.value, value: e2.value.value }, { ...u2 } = o2, D = { ref: e2.buttonRef, id: n, type: m.value, "aria-haspopup": "listbox", "aria-controls": (y = o$2(e2.optionsRef)) == null ? void 0 : y.id, "aria-expanded": e2.listboxState.value === 0, "aria-labelledby": e2.labelRef.value ? [(L = o$2(e2.labelRef)) == null ? void 0 : L.id, n].join(" ") : void 0, disabled: e2.disabled.value === true ? true : void 0, onKeydown: f2, onKeyup: v, onClick: s2 };
    return A$1({ ourProps: D, theirProps: u2, slot: a2, attrs: b, slots: r2, name: "ListboxButton" });
  };
} }), Ae = defineComponent({ name: "ListboxOptions", props: { as: { type: [Object, String], default: "ul" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, id: { type: String, default: null } }, setup(o2, { attrs: b, slots: r2, expose: w2 }) {
  var p2;
  let n = (p2 = o2.id) != null ? p2 : `headlessui-listbox-options-${I()}`, e2 = A("ListboxOptions"), f2 = ref(null);
  w2({ el: e2.optionsRef, $el: e2.optionsRef });
  function v(a2) {
    switch (f2.value && clearTimeout(f2.value), a2.key) {
      case o$3.Space:
        if (e2.searchQuery.value !== "")
          return a2.preventDefault(), a2.stopPropagation(), e2.search(a2.key);
      case o$3.Enter:
        if (a2.preventDefault(), a2.stopPropagation(), e2.activeOptionIndex.value !== null) {
          let u2 = e2.options.value[e2.activeOptionIndex.value];
          e2.select(u2.dataRef.value);
        }
        e2.mode.value === 0 && (e2.closeListbox(), nextTick(() => {
          var u2;
          return (u2 = o$2(e2.buttonRef)) == null ? void 0 : u2.focus({ preventScroll: true });
        }));
        break;
      case u$2(e2.orientation.value, { vertical: o$3.ArrowDown, horizontal: o$3.ArrowRight }):
        return a2.preventDefault(), a2.stopPropagation(), e2.goToOption(c.Next);
      case u$2(e2.orientation.value, { vertical: o$3.ArrowUp, horizontal: o$3.ArrowLeft }):
        return a2.preventDefault(), a2.stopPropagation(), e2.goToOption(c.Previous);
      case o$3.Home:
      case o$3.PageUp:
        return a2.preventDefault(), a2.stopPropagation(), e2.goToOption(c.First);
      case o$3.End:
      case o$3.PageDown:
        return a2.preventDefault(), a2.stopPropagation(), e2.goToOption(c.Last);
      case o$3.Escape:
        a2.preventDefault(), a2.stopPropagation(), e2.closeListbox(), nextTick(() => {
          var u2;
          return (u2 = o$2(e2.buttonRef)) == null ? void 0 : u2.focus({ preventScroll: true });
        });
        break;
      case o$3.Tab:
        a2.preventDefault(), a2.stopPropagation();
        break;
      default:
        a2.key.length === 1 && (e2.search(a2.key), f2.value = setTimeout(() => e2.clearSearch(), 350));
        break;
    }
  }
  let s2 = l(), m = computed(() => s2 !== null ? (s2.value & i.Open) === i.Open : e2.listboxState.value === 0);
  return () => {
    var y, L;
    let a2 = { open: e2.listboxState.value === 0 }, { ...u2 } = o2, D = { "aria-activedescendant": e2.activeOptionIndex.value === null || (y = e2.options.value[e2.activeOptionIndex.value]) == null ? void 0 : y.id, "aria-multiselectable": e2.mode.value === 1 ? true : void 0, "aria-labelledby": (L = o$2(e2.buttonRef)) == null ? void 0 : L.id, "aria-orientation": e2.orientation.value, id: n, onKeydown: v, role: "listbox", tabIndex: 0, ref: e2.optionsRef };
    return A$1({ ourProps: D, theirProps: u2, slot: a2, attrs: b, slots: r2, features: N.RenderStrategy | N.Static, visible: m.value, name: "ListboxOptions" });
  };
} }), Fe = defineComponent({ name: "ListboxOption", props: { as: { type: [Object, String], default: "li" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: false }, id: { type: String, default: null } }, setup(o2, { slots: b, attrs: r2, expose: w2 }) {
  var C;
  let n = (C = o2.id) != null ? C : `headlessui-listbox-option-${I()}`, e2 = A("ListboxOption"), f2 = ref(null);
  w2({ el: f2, $el: f2 });
  let v = computed(() => e2.activeOptionIndex.value !== null ? e2.options.value[e2.activeOptionIndex.value].id === n : false), s2 = computed(() => u$2(e2.mode.value, { [0]: () => e2.compare(toRaw(e2.value.value), toRaw(o2.value)), [1]: () => toRaw(e2.value.value).some((t2) => e2.compare(toRaw(t2), toRaw(o2.value))) })), m = computed(() => u$2(e2.mode.value, { [1]: () => {
    var i2;
    let t2 = toRaw(e2.value.value);
    return ((i2 = e2.options.value.find((l2) => t2.some((d2) => e2.compare(toRaw(d2), toRaw(l2.dataRef.value))))) == null ? void 0 : i2.id) === n;
  }, [0]: () => s2.value })), p$1 = p(f2), a2 = computed(() => ({ disabled: o2.disabled, value: o2.value, get textValue() {
    return p$1();
  }, domRef: f2 }));
  onMounted(() => e2.registerOption(n, a2)), onUnmounted(() => e2.unregisterOption(n)), onMounted(() => {
    watch([e2.listboxState, s2], () => {
      e2.listboxState.value === 0 && s2.value && u$2(e2.mode.value, { [1]: () => {
        m.value && e2.goToOption(c.Specific, n);
      }, [0]: () => {
        e2.goToOption(c.Specific, n);
      } });
    }, { immediate: true });
  }), watchEffect(() => {
    e2.listboxState.value === 0 && v.value && e2.activationTrigger.value !== 0 && nextTick(() => {
      var t2, i2;
      return (i2 = (t2 = o$2(f2)) == null ? void 0 : t2.scrollIntoView) == null ? void 0 : i2.call(t2, { block: "nearest" });
    });
  });
  function u2(t2) {
    if (o2.disabled)
      return t2.preventDefault();
    e2.select(o2.value), e2.mode.value === 0 && (e2.closeListbox(), nextTick(() => {
      var i2;
      return (i2 = o$2(e2.buttonRef)) == null ? void 0 : i2.focus({ preventScroll: true });
    }));
  }
  function D() {
    if (o2.disabled)
      return e2.goToOption(c.Nothing);
    e2.goToOption(c.Specific, n);
  }
  let y = u$1();
  function L(t2) {
    y.update(t2);
  }
  function M(t2) {
    y.wasMoved(t2) && (o2.disabled || v.value || e2.goToOption(c.Specific, n, 0));
  }
  function k(t2) {
    y.wasMoved(t2) && (o2.disabled || v.value && e2.goToOption(c.Nothing));
  }
  return () => {
    let { disabled: t2 } = o2, i2 = { active: v.value, selected: s2.value, disabled: t2 }, { value: l2, disabled: d2, ...O2 } = o2, h2 = { id: n, ref: f2, role: "option", tabIndex: t2 === true ? void 0 : -1, "aria-disabled": t2 === true ? true : void 0, "aria-selected": s2.value, disabled: void 0, onClick: u2, onFocus: D, onPointerenter: L, onMouseenter: L, onPointermove: M, onMousemove: M, onPointerleave: k, onMouseleave: k };
    return A$1({ ourProps: h2, theirProps: O2, slot: i2, attrs: r2, slots: b, name: "ListboxOption" });
  };
} });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ThemeSwitcher",
  __ssrInlineRender: true,
  props: {
    type: {
      type: String,
      default: "dropdown-right-top"
    }
  },
  setup(__props) {
    const props = __props;
    const currentStyle = toRef(props, "type");
    const availableThemes = [
      {
        key: "light",
        text: "Light"
      },
      {
        key: "dark",
        text: "Dark"
      },
      {
        key: "system",
        text: "System"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HeadlessListbox = Ie;
      const _component_HeadlessListboxLabel = Ee;
      const _component_HeadlessListboxButton = je;
      const _component_AwesomeLink = _sfc_main$1;
      const _component_Icon = __nuxt_component_1;
      const _component_HeadlessListboxOptions = Ae;
      const _component_HeadlessListboxOption = Fe;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center" }, _attrs))}>`);
      if (unref(currentStyle) === "dropdown-right-top") {
        _push(ssrRenderComponent(_component_HeadlessListbox, {
          modelValue: _ctx.$colorMode.preference,
          "onUpdate:modelValue": ($event) => _ctx.$colorMode.preference = $event,
          as: "div",
          class: "relative flex items-center"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_HeadlessListboxLabel, { class: "sr-only" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Theme`);
                  } else {
                    return [
                      createTextVNode("Theme")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_HeadlessListboxButton, { type: "template" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_AwesomeLink, { class: "dark:text-gray-400 text-gray-600" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<span class="flex justify-center items-center dark:hidden"${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_Icon, { name: "uil:sun" }, null, _parent4, _scopeId3));
                          _push4(`</span><span class="justify-center items-center hidden dark:flex"${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_Icon, { name: "uil:moon" }, null, _parent4, _scopeId3));
                          _push4(`</span>`);
                        } else {
                          return [
                            createVNode("span", { class: "flex justify-center items-center dark:hidden" }, [
                              createVNode(_component_Icon, { name: "uil:sun" })
                            ]),
                            createVNode("span", { class: "justify-center items-center hidden dark:flex" }, [
                              createVNode(_component_Icon, { name: "uil:moon" })
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_AwesomeLink, { class: "dark:text-gray-400 text-gray-600" }, {
                        default: withCtx(() => [
                          createVNode("span", { class: "flex justify-center items-center dark:hidden" }, [
                            createVNode(_component_Icon, { name: "uil:sun" })
                          ]),
                          createVNode("span", { class: "justify-center items-center hidden dark:flex" }, [
                            createVNode(_component_Icon, { name: "uil:moon" })
                          ])
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_HeadlessListboxOptions, { class: "p-1 absolute z-50 origin-top-right top-full right-0 outline-none bg-white rounded-lg ring-1 ring-gray-900/10 shadow-lg overflow-hidden w-36 py-1 text-sm text-gray-700 font-semibold dark:bg-gray-800 dark:ring-0 dark:highlight-white/5 dark:text-gray-300" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<!--[-->`);
                    ssrRenderList(availableThemes, (theme) => {
                      _push3(ssrRenderComponent(_component_HeadlessListboxOption, {
                        key: theme.key,
                        value: theme.key,
                        class: {
                          "py-2 px-2 flex items-center cursor-pointer": true,
                          "text-sky-500 bg-gray-100 dark:bg-gray-600/30": _ctx.$colorMode.preference === theme.key,
                          "hover:bg-gray-50 dark:hover:bg-gray-700/30": _ctx.$colorMode.preference !== theme.key
                        }
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<span class="text-sm mr-2 flex items-center"${_scopeId3}>`);
                            if (theme.key === "light") {
                              _push4(ssrRenderComponent(_component_Icon, { name: "uil:sun" }, null, _parent4, _scopeId3));
                            } else if (theme.key === "dark") {
                              _push4(ssrRenderComponent(_component_Icon, { name: "uil:moon" }, null, _parent4, _scopeId3));
                            } else if (theme.key === "system") {
                              _push4(ssrRenderComponent(_component_Icon, { name: "uil:laptop" }, null, _parent4, _scopeId3));
                            } else {
                              _push4(`<!---->`);
                            }
                            _push4(`</span> ${ssrInterpolate(theme.text)}`);
                          } else {
                            return [
                              createVNode("span", { class: "text-sm mr-2 flex items-center" }, [
                                theme.key === "light" ? (openBlock(), createBlock(_component_Icon, {
                                  key: 0,
                                  name: "uil:sun"
                                })) : theme.key === "dark" ? (openBlock(), createBlock(_component_Icon, {
                                  key: 1,
                                  name: "uil:moon"
                                })) : theme.key === "system" ? (openBlock(), createBlock(_component_Icon, {
                                  key: 2,
                                  name: "uil:laptop"
                                })) : createCommentVNode("", true)
                              ]),
                              createTextVNode(" " + toDisplayString(theme.text), 1)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    });
                    _push3(`<!--]-->`);
                  } else {
                    return [
                      (openBlock(), createBlock(Fragment, null, renderList(availableThemes, (theme) => {
                        return createVNode(_component_HeadlessListboxOption, {
                          key: theme.key,
                          value: theme.key,
                          class: {
                            "py-2 px-2 flex items-center cursor-pointer": true,
                            "text-sky-500 bg-gray-100 dark:bg-gray-600/30": _ctx.$colorMode.preference === theme.key,
                            "hover:bg-gray-50 dark:hover:bg-gray-700/30": _ctx.$colorMode.preference !== theme.key
                          }
                        }, {
                          default: withCtx(() => [
                            createVNode("span", { class: "text-sm mr-2 flex items-center" }, [
                              theme.key === "light" ? (openBlock(), createBlock(_component_Icon, {
                                key: 0,
                                name: "uil:sun"
                              })) : theme.key === "dark" ? (openBlock(), createBlock(_component_Icon, {
                                key: 1,
                                name: "uil:moon"
                              })) : theme.key === "system" ? (openBlock(), createBlock(_component_Icon, {
                                key: 2,
                                name: "uil:laptop"
                              })) : createCommentVNode("", true)
                            ]),
                            createTextVNode(" " + toDisplayString(theme.text), 1)
                          ]),
                          _: 2
                        }, 1032, ["value", "class"]);
                      }), 64))
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_HeadlessListboxLabel, { class: "sr-only" }, {
                  default: withCtx(() => [
                    createTextVNode("Theme")
                  ]),
                  _: 1
                }),
                createVNode(_component_HeadlessListboxButton, { type: "template" }, {
                  default: withCtx(() => [
                    createVNode(_component_AwesomeLink, { class: "dark:text-gray-400 text-gray-600" }, {
                      default: withCtx(() => [
                        createVNode("span", { class: "flex justify-center items-center dark:hidden" }, [
                          createVNode(_component_Icon, { name: "uil:sun" })
                        ]),
                        createVNode("span", { class: "justify-center items-center hidden dark:flex" }, [
                          createVNode(_component_Icon, { name: "uil:moon" })
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_HeadlessListboxOptions, { class: "p-1 absolute z-50 origin-top-right top-full right-0 outline-none bg-white rounded-lg ring-1 ring-gray-900/10 shadow-lg overflow-hidden w-36 py-1 text-sm text-gray-700 font-semibold dark:bg-gray-800 dark:ring-0 dark:highlight-white/5 dark:text-gray-300" }, {
                  default: withCtx(() => [
                    (openBlock(), createBlock(Fragment, null, renderList(availableThemes, (theme) => {
                      return createVNode(_component_HeadlessListboxOption, {
                        key: theme.key,
                        value: theme.key,
                        class: {
                          "py-2 px-2 flex items-center cursor-pointer": true,
                          "text-sky-500 bg-gray-100 dark:bg-gray-600/30": _ctx.$colorMode.preference === theme.key,
                          "hover:bg-gray-50 dark:hover:bg-gray-700/30": _ctx.$colorMode.preference !== theme.key
                        }
                      }, {
                        default: withCtx(() => [
                          createVNode("span", { class: "text-sm mr-2 flex items-center" }, [
                            theme.key === "light" ? (openBlock(), createBlock(_component_Icon, {
                              key: 0,
                              name: "uil:sun"
                            })) : theme.key === "dark" ? (openBlock(), createBlock(_component_Icon, {
                              key: 1,
                              name: "uil:moon"
                            })) : theme.key === "system" ? (openBlock(), createBlock(_component_Icon, {
                              key: 2,
                              name: "uil:laptop"
                            })) : createCommentVNode("", true)
                          ]),
                          createTextVNode(" " + toDisplayString(theme.text), 1)
                        ]),
                        _: 2
                      }, 1032, ["value", "class"]);
                    }), 64))
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
      if (unref(currentStyle) === "select-box") {
        _push(`<select class="w-full px-2 pr-3 py-1 outline-none rounded border bg-transparent text-gray-700 dark:text-gray-300 border-gray-900/10 dark:border-gray-50/[0.2]"><!--[-->`);
        ssrRenderList(availableThemes, (theme) => {
          _push(`<option${ssrRenderAttr("value", theme.key)}>${ssrInterpolate(theme.text)}</option>`);
        });
        _push(`<!--]--></select>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/layouts/Page/NavbarDropdown/ThemeSwitcher.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=ThemeSwitcher-DaW-q_Ap.js.map
