import { ref, computed, watchEffect } from 'vue';
import { c, o } from './env-CWaVQ5oT.mjs';
import { w as w$2, h } from './focus-management-je2kZWzN.mjs';

function t() {
  return /iPhone/gi.test((void 0).navigator.platform) || /Mac/gi.test((void 0).navigator.platform) && (void 0).navigator.maxTouchPoints > 0;
}
function i() {
  return /Android/gi.test((void 0).navigator.userAgent);
}
function n() {
  return t() || i();
}
function u(e, t2, n2) {
  c.isServer || watchEffect((o2) => {
    (void 0).addEventListener(e, t2, n2), o2(() => (void 0).removeEventListener(e, t2, n2));
  });
}
function w$1(e, n2, t2) {
  c.isServer || watchEffect((o2) => {
    (void 0).addEventListener(e, n2, t2), o2(() => (void 0).removeEventListener(e, n2, t2));
  });
}
function w(f, m, l = computed(() => true)) {
  function a(e, r) {
    if (!l.value || e.defaultPrevented)
      return;
    let t2 = r(e);
    if (t2 === null || !t2.getRootNode().contains(t2))
      return;
    let c2 = function o2(n2) {
      return typeof n2 == "function" ? o2(n2()) : Array.isArray(n2) || n2 instanceof Set ? n2 : [n2];
    }(f);
    for (let o$1 of c2) {
      if (o$1 === null)
        continue;
      let n2 = o$1 instanceof HTMLElement ? o$1 : o(o$1);
      if (n2 != null && n2.contains(t2) || e.composed && e.composedPath().includes(n2))
        return;
    }
    return !w$2(t2, h.Loose) && t2.tabIndex !== -1 && e.preventDefault(), m(e, t2);
  }
  let u$1 = ref(null);
  u("pointerdown", (e) => {
    var r, t2;
    l.value && (u$1.value = ((t2 = (r = e.composedPath) == null ? void 0 : r.call(e)) == null ? void 0 : t2[0]) || e.target);
  }, true), u("mousedown", (e) => {
    var r, t2;
    l.value && (u$1.value = ((t2 = (r = e.composedPath) == null ? void 0 : r.call(e)) == null ? void 0 : t2[0]) || e.target);
  }, true), u("click", (e) => {
    n() || u$1.value && (a(e, () => u$1.value), u$1.value = null);
  }, true), u("touchend", (e) => a(e, () => e.target instanceof HTMLElement ? e.target : null), true), w$1("blur", (e) => a(e, () => (void 0).document.activeElement instanceof HTMLIFrameElement ? (void 0).document.activeElement : null), true);
}

export { w$1 as a, w };
//# sourceMappingURL=use-outside-click-Do9_uFVP.mjs.map
