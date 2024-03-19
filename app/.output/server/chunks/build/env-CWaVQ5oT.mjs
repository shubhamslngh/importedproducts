import { inject, cloneVNode, h, Fragment } from 'vue';

let t = Symbol("headlessui.useid"), i$1 = 0;
function I() {
  return inject(t, () => `${++i$1}`)();
}
function o(e) {
  var l;
  if (e == null || e.value == null)
    return null;
  let n2 = (l = e.value.$el) != null ? l : e.value;
  return n2 instanceof Node ? n2 : null;
}
function u(r, n2, ...a) {
  if (r in n2) {
    let e = n2[r];
    return typeof e == "function" ? e(...a) : e;
  }
  let t2 = new Error(`Tried to handle "${r}" but there is no handler defined. Only defined handlers are: ${Object.keys(n2).map((e) => `"${e}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(t2, u), t2;
}
var N = ((o2) => (o2[o2.None = 0] = "None", o2[o2.RenderStrategy = 1] = "RenderStrategy", o2[o2.Static = 2] = "Static", o2))(N || {}), S = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(S || {});
function A({ visible: r = true, features: t2 = 0, ourProps: e, theirProps: o2, ...i2 }) {
  var a;
  let n2 = j(o2, e), l = Object.assign(i2, { props: n2 });
  if (r || t2 & 2 && n2.static)
    return y(l);
  if (t2 & 1) {
    let d2 = (a = n2.unmount) == null || a ? 0 : 1;
    return u(d2, { [0]() {
      return null;
    }, [1]() {
      return y({ ...i2, props: { ...n2, hidden: true, style: { display: "none" } } });
    } });
  }
  return y(l);
}
function y({ props: r, attrs: t2, slots: e, slot: o2, name: i2 }) {
  var m, h$1;
  let { as: n2, ...l } = T(r, ["unmount", "static"]), a = (m = e.default) == null ? void 0 : m.call(e, o2), d2 = {};
  if (o2) {
    let u2 = false, c2 = [];
    for (let [p, f] of Object.entries(o2))
      typeof f == "boolean" && (u2 = true), f === true && c2.push(p);
    u2 && (d2["data-headlessui-state"] = c2.join(" "));
  }
  if (n2 === "template") {
    if (a = b(a != null ? a : []), Object.keys(l).length > 0 || Object.keys(t2).length > 0) {
      let [u2, ...c2] = a != null ? a : [];
      if (!v(u2) || c2.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${i2} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(l).concat(Object.keys(t2)).map((s2) => s2.trim()).filter((s2, g, R) => R.indexOf(s2) === g).sort((s2, g) => s2.localeCompare(g)).map((s2) => `  - ${s2}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((s2) => `  - ${s2}`).join(`
`)].join(`
`));
      let p = j((h$1 = u2.props) != null ? h$1 : {}, l, d2), f = cloneVNode(u2, p, true);
      for (let s2 in p)
        s2.startsWith("on") && (f.props || (f.props = {}), f.props[s2] = p[s2]);
      return f;
    }
    return Array.isArray(a) && a.length === 1 ? a[0] : a;
  }
  return h(n2, Object.assign({}, l, d2), { default: () => a });
}
function b(r) {
  return r.flatMap((t2) => t2.type === Fragment ? b(t2.children) : [t2]);
}
function j(...r) {
  if (r.length === 0)
    return {};
  if (r.length === 1)
    return r[0];
  let t2 = {}, e = {};
  for (let i2 of r)
    for (let n2 in i2)
      n2.startsWith("on") && typeof i2[n2] == "function" ? (e[n2] != null || (e[n2] = []), e[n2].push(i2[n2])) : t2[n2] = i2[n2];
  if (t2.disabled || t2["aria-disabled"])
    return Object.assign(t2, Object.fromEntries(Object.keys(e).map((i2) => [i2, void 0])));
  for (let i2 in e)
    Object.assign(t2, { [i2](n2, ...l) {
      let a = e[i2];
      for (let d2 of a) {
        if (n2 instanceof Event && n2.defaultPrevented)
          return;
        d2(n2, ...l);
      }
    } });
  return t2;
}
function E(r) {
  let t2 = Object.assign({}, r);
  for (let e in t2)
    t2[e] === void 0 && delete t2[e];
  return t2;
}
function T(r, t2 = []) {
  let e = Object.assign({}, r);
  for (let o2 of t2)
    o2 in e && delete e[o2];
  return e;
}
function v(r) {
  return r == null ? false : typeof r.type == "string" || typeof r.type == "object" || typeof r.type == "function";
}
var i = Object.defineProperty;
var d = (t2, e, r) => e in t2 ? i(t2, e, { enumerable: true, configurable: true, writable: true, value: r }) : t2[e] = r;
var n = (t2, e, r) => (d(t2, typeof e != "symbol" ? e + "" : e, r), r);
class s {
  constructor() {
    n(this, "current", this.detect());
    n(this, "currentId", 0);
  }
  set(e) {
    this.current !== e && (this.currentId = 0, this.current = e);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return "server";
  }
}
let c = new s();

export { A, E, I, N, S, T, c, o, u };
//# sourceMappingURL=env-CWaVQ5oT.mjs.map
