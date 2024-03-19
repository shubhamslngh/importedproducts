import { ref, onMounted, watchEffect, defineComponent } from "vue";
import { o as o$1, A, c as c$1, u } from "./env-CWaVQ5oT.js";
function r(t, e) {
  if (t)
    return t;
  let n = e != null ? e : "button";
  if (typeof n == "string" && n.toLowerCase() === "button")
    return "button";
}
function s$1(t, e) {
  let n = ref(r(t.value.type, t.value.as));
  return onMounted(() => {
    n.value = r(t.value.type, t.value.as);
  }), watchEffect(() => {
    var u2;
    n.value || o$1(e) && o$1(e) instanceof HTMLButtonElement && !((u2 = o$1(e)) != null && u2.hasAttribute("type")) && (n.value = "button");
  }), n;
}
var s = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(s || {});
let f = defineComponent({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(d, { slots: o2, attrs: i2 }) {
  return () => {
    var t;
    let { features: e, ...r2 } = d, n = { "aria-hidden": (e & 2) === 2 ? true : (t = r2["aria-hidden"]) != null ? t : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(e & 4) === 4 && (e & 2) !== 2 && { display: "none" } } };
    return A({ ourProps: n, theirProps: r2, slot: {}, attrs: i2, slots: o2, name: "Hidden" });
  };
} });
var o = ((r2) => (r2.Space = " ", r2.Enter = "Enter", r2.Escape = "Escape", r2.Backspace = "Backspace", r2.Delete = "Delete", r2.ArrowLeft = "ArrowLeft", r2.ArrowUp = "ArrowUp", r2.ArrowRight = "ArrowRight", r2.ArrowDown = "ArrowDown", r2.Home = "Home", r2.End = "End", r2.PageUp = "PageUp", r2.PageDown = "PageDown", r2.Tab = "Tab", r2))(o || {});
function i(r2) {
  if (c$1.isServer)
    return null;
  if (r2 instanceof Node)
    return r2.ownerDocument;
  if (r2 != null && r2.hasOwnProperty("value")) {
    let n = o$1(r2);
    if (n)
      return n.ownerDocument;
  }
  return void 0;
}
let c = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var N = ((n) => (n[n.First = 1] = "First", n[n.Previous = 2] = "Previous", n[n.Next = 4] = "Next", n[n.Last = 8] = "Last", n[n.WrapAround = 16] = "WrapAround", n[n.NoScroll = 32] = "NoScroll", n))(N || {}), T = ((o2) => (o2[o2.Error = 0] = "Error", o2[o2.Overflow = 1] = "Overflow", o2[o2.Success = 2] = "Success", o2[o2.Underflow = 3] = "Underflow", o2))(T || {}), F = ((t) => (t[t.Previous = -1] = "Previous", t[t.Next = 1] = "Next", t))(F || {});
function E(e = (void 0).body) {
  return e == null ? [] : Array.from(e.querySelectorAll(c)).sort((r2, t) => Math.sign((r2.tabIndex || Number.MAX_SAFE_INTEGER) - (t.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var h = ((t) => (t[t.Strict = 0] = "Strict", t[t.Loose = 1] = "Loose", t))(h || {});
function w(e, r2 = 0) {
  var t;
  return e === ((t = i(e)) == null ? void 0 : t.body) ? false : u(r2, { [0]() {
    return e.matches(c);
  }, [1]() {
    let l = e;
    for (; l !== null; ) {
      if (l.matches(c))
        return true;
      l = l.parentElement;
    }
    return false;
  } });
}
var y = ((t) => (t[t.Keyboard = 0] = "Keyboard", t[t.Mouse = 1] = "Mouse", t))(y || {});
let H = ["textarea", "input"].join(",");
function I(e) {
  var r2, t;
  return (t = (r2 = e == null ? void 0 : e.matches) == null ? void 0 : r2.call(e, H)) != null ? t : false;
}
function O(e, r2 = (t) => t) {
  return e.slice().sort((t, l) => {
    let o2 = r2(t), i2 = r2(l);
    if (o2 === null || i2 === null)
      return 0;
    let n = o2.compareDocumentPosition(i2);
    return n & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : n & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function P(e, r2, { sorted: t = true, relativeTo: l = null, skipElements: o2 = [] } = {}) {
  var m;
  let i2 = (m = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : void 0 : e == null ? void 0 : e.ownerDocument) != null ? m : void 0, n = Array.isArray(e) ? t ? O(e) : e : E(e);
  o2.length > 0 && n.length > 1 && (n = n.filter((s2) => !o2.includes(s2))), l = l != null ? l : i2.activeElement;
  let x = (() => {
    if (r2 & 5)
      return 1;
    if (r2 & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), p = (() => {
    if (r2 & 1)
      return 0;
    if (r2 & 2)
      return Math.max(0, n.indexOf(l)) - 1;
    if (r2 & 4)
      return Math.max(0, n.indexOf(l)) + 1;
    if (r2 & 8)
      return n.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), L = r2 & 32 ? { preventScroll: true } : {}, a = 0, d = n.length, u2;
  do {
    if (a >= d || a + d <= 0)
      return 0;
    let s2 = p + a;
    if (r2 & 16)
      s2 = (s2 + d) % d;
    else {
      if (s2 < 0)
        return 3;
      if (s2 >= d)
        return 1;
    }
    u2 = n[s2], u2 == null || u2.focus(L), a += x;
  } while (u2 !== i2.activeElement);
  return r2 & 6 && I(u2) && u2.select(), 2;
}
export {
  E,
  N,
  O,
  P,
  T,
  s$1 as a,
  f,
  h,
  i,
  o,
  s,
  w
};
//# sourceMappingURL=focus-management-je2kZWzN.js.map
