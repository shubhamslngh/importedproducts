import { defineComponent, ref, h, computed, onMounted, onUnmounted, watchEffect, watch, provide, normalizeClass, inject, unref, withCtx, createVNode, renderSlot, openBlock, createBlock, createCommentVNode, useSSRContext } from "vue";
import { N as N$1, S, I, u, o as o$1, c, A, T } from "./env-CWaVQ5oT.js";
import { s, t as t$1, i, l as l$1 } from "./open-closed-BDzQJ33n.js";
import { t } from "./micro-task-B6uncIso.js";
import __nuxt_component_7 from "./Group-weYBKntf.js";
import _sfc_main$1 from "./ItemButton-Dw-r8Rgd.js";
import { ssrRenderTeleport, ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
function o() {
  let a = [], s2 = { addEventListener(e, t2, r, i2) {
    return e.addEventListener(t2, r, i2), s2.add(() => e.removeEventListener(t2, r, i2));
  }, requestAnimationFrame(...e) {
    let t2 = requestAnimationFrame(...e);
    s2.add(() => cancelAnimationFrame(t2));
  }, nextFrame(...e) {
    s2.requestAnimationFrame(() => {
      s2.requestAnimationFrame(...e);
    });
  }, setTimeout(...e) {
    let t2 = setTimeout(...e);
    s2.add(() => clearTimeout(t2));
  }, microTask(...e) {
    let t$12 = { current: true };
    return t(() => {
      t$12.current && e[0]();
    }), s2.add(() => {
      t$12.current = false;
    });
  }, style(e, t2, r) {
    let i2 = e.style.getPropertyValue(t2);
    return Object.assign(e.style, { [t2]: r }), this.add(() => {
      Object.assign(e.style, { [t2]: i2 });
    });
  }, group(e) {
    let t2 = o();
    return e(t2), this.add(() => t2.dispose());
  }, add(e) {
    return a.push(e), () => {
      let t2 = a.indexOf(e);
      if (t2 >= 0)
        for (let r of a.splice(t2, 1))
          r();
    };
  }, dispose() {
    for (let e of a.splice(0))
      e();
  } };
  return s2;
}
function l(r) {
  let e = { called: false };
  return (...t2) => {
    if (!e.called)
      return e.called = true, r(...t2);
  };
}
function m(e, ...t2) {
  e && t2.length > 0 && e.classList.add(...t2);
}
function d(e, ...t2) {
  e && t2.length > 0 && e.classList.remove(...t2);
}
var g$1 = ((i2) => (i2.Finished = "finished", i2.Cancelled = "cancelled", i2))(g$1 || {});
function F(e, t2) {
  let i2 = o();
  if (!e)
    return i2.dispose;
  let { transitionDuration: n, transitionDelay: a } = getComputedStyle(e), [l2, s2] = [n, a].map((o2) => {
    let [u2 = 0] = o2.split(",").filter(Boolean).map((r) => r.includes("ms") ? parseFloat(r) : parseFloat(r) * 1e3).sort((r, c2) => c2 - r);
    return u2;
  });
  return l2 !== 0 ? i2.setTimeout(() => t2("finished"), l2 + s2) : t2("finished"), i2.add(() => t2("cancelled")), i2.dispose;
}
function L$1(e, t2, i2, n, a, l$12) {
  let s2 = o(), o$12 = l$12 !== void 0 ? l(l$12) : () => {
  };
  return d(e, ...a), m(e, ...t2, ...i2), s2.nextFrame(() => {
    d(e, ...i2), m(e, ...n), s2.add(F(e, (u2) => (d(e, ...n, ...t2), m(e, ...a), o$12(u2))));
  }), s2.add(() => d(e, ...t2, ...i2, ...n, ...a)), s2.add(() => o$12("cancelled")), s2.dispose;
}
function g(e = "") {
  return e.split(/\s+/).filter((t2) => t2.length > 1);
}
let R = Symbol("TransitionContext");
var pe = ((a) => (a.Visible = "visible", a.Hidden = "hidden", a))(pe || {});
function me() {
  return inject(R, null) !== null;
}
function Te() {
  let e = inject(R, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
function ge() {
  let e = inject(N, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
let N = Symbol("NestingContext");
function L(e) {
  return "children" in e ? L(e.children) : e.value.filter(({ state: t2 }) => t2 === "visible").length > 0;
}
function Q(e) {
  let t2 = ref([]), a = ref(false);
  onMounted(() => a.value = true), onUnmounted(() => a.value = false);
  function s2(n, r = S.Hidden) {
    let l2 = t2.value.findIndex(({ id: f }) => f === n);
    l2 !== -1 && (u(r, { [S.Unmount]() {
      t2.value.splice(l2, 1);
    }, [S.Hidden]() {
      t2.value[l2].state = "hidden";
    } }), !L(t2) && a.value && (e == null || e()));
  }
  function h2(n) {
    let r = t2.value.find(({ id: l2 }) => l2 === n);
    return r ? r.state !== "visible" && (r.state = "visible") : t2.value.push({ id: n, state: "visible" }), () => s2(n, S.Unmount);
  }
  return { children: t2, register: h2, unregister: s2 };
}
let W = N$1.RenderStrategy, he = defineComponent({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: true }, appear: { type: [Boolean], default: false }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => true, afterEnter: () => true, beforeLeave: () => true, afterLeave: () => true }, setup(e, { emit: t2, attrs: a, slots: s$1, expose: h$1 }) {
  let n = ref(0);
  function r() {
    n.value |= i.Opening, t2("beforeEnter");
  }
  function l2() {
    n.value &= ~i.Opening, t2("afterEnter");
  }
  function f() {
    n.value |= i.Closing, t2("beforeLeave");
  }
  function S$1() {
    n.value &= ~i.Closing, t2("afterLeave");
  }
  if (!me() && s())
    return () => h(Se, { ...e, onBeforeEnter: r, onAfterEnter: l2, onBeforeLeave: f, onAfterLeave: S$1 }, s$1);
  let d2 = ref(null), y = computed(() => e.unmount ? S.Unmount : S.Hidden);
  h$1({ el: d2, $el: d2 });
  let { show: v, appear: A$1 } = Te(), { register: D, unregister: H } = ge(), i$1 = ref(v.value ? "visible" : "hidden"), I$1 = { value: true }, c$1 = I(), b = { value: false }, P = Q(() => {
    !b.value && i$1.value !== "hidden" && (i$1.value = "hidden", H(c$1), S$1());
  });
  onMounted(() => {
    let o2 = D(c$1);
    onUnmounted(o2);
  }), watchEffect(() => {
    if (y.value === S.Hidden && c$1) {
      if (v.value && i$1.value !== "visible") {
        i$1.value = "visible";
        return;
      }
      u(i$1.value, { ["hidden"]: () => H(c$1), ["visible"]: () => D(c$1) });
    }
  });
  let j = g(e.enter), M = g(e.enterFrom), X = g(e.enterTo), _ = g(e.entered), Y = g(e.leave), Z = g(e.leaveFrom), ee = g(e.leaveTo);
  onMounted(() => {
    watchEffect(() => {
      if (i$1.value === "visible") {
        let o2 = o$1(d2);
        if (o2 instanceof Comment && o2.data === "")
          throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function te(o2) {
    let E = I$1.value && !A$1.value, p = o$1(d2);
    !p || !(p instanceof HTMLElement) || E || (b.value = true, v.value && r(), v.value || f(), o2(v.value ? L$1(p, j, M, X, _, (V) => {
      b.value = false, V === g$1.Finished && l2();
    }) : L$1(p, Y, Z, ee, _, (V) => {
      b.value = false, V === g$1.Finished && (L(P) || (i$1.value = "hidden", H(c$1), S$1()));
    })));
  }
  return onMounted(() => {
    watch([v], (o2, E, p) => {
      te(p), I$1.value = false;
    }, { immediate: true });
  }), provide(N, P), t$1(computed(() => u(i$1.value, { ["visible"]: i.Open, ["hidden"]: i.Closed }) | n.value)), () => {
    let { appear: o2, show: E, enter: p, enterFrom: V, enterTo: Ce, entered: ye, leave: be, leaveFrom: Ee, leaveTo: Ve, ...U } = e, ne = { ref: d2 }, re = { ...U, ...A$1.value && v.value && c.isServer ? { class: normalizeClass([a.class, U.class, ...j, ...M]) } : {} };
    return A({ theirProps: re, ourProps: ne, slot: {}, slots: s$1, attrs: a, features: W, visible: i$1.value === "visible", name: "TransitionChild" });
  };
} }), ce = he, Se = defineComponent({ inheritAttrs: false, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: true }, appear: { type: [Boolean], default: false }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => true, afterEnter: () => true, beforeLeave: () => true, afterLeave: () => true }, setup(e, { emit: t2, attrs: a, slots: s2 }) {
  let h$1 = l$1(), n = computed(() => e.show === null && h$1 !== null ? (h$1.value & i.Open) === i.Open : e.show);
  watchEffect(() => {
    if (![true, false].includes(n.value))
      throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let r = ref(n.value ? "visible" : "hidden"), l2 = Q(() => {
    r.value = "hidden";
  }), f = ref(true), S2 = { show: n, appear: computed(() => e.appear || !f.value) };
  return onMounted(() => {
    watchEffect(() => {
      f.value = false, n.value ? r.value = "visible" : L(l2) || (r.value = "hidden");
    });
  }), provide(N, l2), provide(R, S2), () => {
    let d2 = T(e, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), y = { unmount: e.unmount };
    return A({ ourProps: { ...y, as: "template" }, theirProps: {}, slot: {}, slots: { ...s2, default: () => [h(ce, { onBeforeEnter: () => t2("beforeEnter"), onAfterEnter: () => t2("afterEnter"), onBeforeLeave: () => t2("beforeLeave"), onAfterLeave: () => t2("afterLeave"), ...a, ...y, ...d2 }, s2.default)] }, attrs: {}, features: W, visible: r.value === "visible", name: "Transition" });
  };
} });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  props: {
    closeButton: {
      type: Boolean,
      default: true
    },
    closeButtonText: {
      type: String,
      default: "Cancel"
    }
  },
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const isShow = ref(false);
    const close = (e) => {
      isShow.value = false;
      setTimeout(() => emit("close", e), 300);
    };
    const onCloseComponentClick = (e) => {
      const acceptedClasses = ["action-sheet", "action-sheet-container"];
      const target = e.target;
      const targetClassList = target.classList;
      for (const acceptedClass of acceptedClasses) {
        if (targetClassList.contains(acceptedClass)) {
          close(e);
          break;
        }
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HeadlessTransitionRoot = Se;
      const _component_AwesomeActionSheetGroup = __nuxt_component_7;
      const _component_AwesomeActionSheetItemButton = _sfc_main$1;
      ssrRenderTeleport(_push, (_push2) => {
        _push2(ssrRenderComponent(_component_HeadlessTransitionRoot, {
          show: unref(isShow),
          class: "action-sheet fixed z-50 top-0 left-0 w-screen h-screen max-h-screen max-w-full flex flex-col justify-end bg-black/[0.5]",
          enter: "transition-opacity duration-300",
          "enter-from": "opacity-0",
          "enter-to": "opacity-100",
          leave: "transition-opacity duration-300",
          "leave-from": "opacity-100",
          "leave-to": "opacity-0",
          onClick: onCloseComponentClick
        }, {
          default: withCtx((_, _push3, _parent2, _scopeId) => {
            if (_push3) {
              _push3(`<div class="flex flex-col overflow-hidden relative"${_scopeId}><div class="action-sheet-container flex-1 overflow-y-auto space-y-1 justify-end px-4 pb-2 pt-4"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent2, _scopeId);
              if (__props.closeButton) {
                _push3(ssrRenderComponent(_component_AwesomeActionSheetGroup, null, {
                  default: withCtx((_2, _push4, _parent3, _scopeId2) => {
                    if (_push4) {
                      _push4(ssrRenderComponent(_component_AwesomeActionSheetItemButton, {
                        class: "text-red-500 font-bold",
                        text: __props.closeButtonText,
                        onClick: close
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_AwesomeActionSheetItemButton, {
                          class: "text-red-500 font-bold",
                          text: __props.closeButtonText,
                          onClick: close
                        }, null, 8, ["text"])
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push3(`<!---->`);
              }
              _push3(`</div></div>`);
            } else {
              return [
                createVNode("div", { class: "flex flex-col overflow-hidden relative" }, [
                  createVNode("div", { class: "action-sheet-container flex-1 overflow-y-auto space-y-1 justify-end px-4 pb-2 pt-4" }, [
                    renderSlot(_ctx.$slots, "default"),
                    __props.closeButton ? (openBlock(), createBlock(_component_AwesomeActionSheetGroup, { key: 0 }, {
                      default: withCtx(() => [
                        createVNode(_component_AwesomeActionSheetItemButton, {
                          class: "text-red-500 font-bold",
                          text: __props.closeButtonText,
                          onClick: close
                        }, null, 8, ["text"])
                      ]),
                      _: 1
                    })) : createCommentVNode("", true)
                  ])
                ])
              ];
            }
          }),
          _: 3
        }, _parent));
      }, "body", false, _parent);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/awesome/ActionSheet/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-BzXcNATq.js.map
