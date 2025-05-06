import { inject, provide } from 'vue';

let n = Symbol("Context");
var i = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(i || {});
function s() {
  return l() !== null;
}
function l() {
  return inject(n, null);
}
function t(o) {
  provide(n, o);
}

export { i, l, s, t };
//# sourceMappingURL=open-closed-BDzQJ33n.mjs.map
