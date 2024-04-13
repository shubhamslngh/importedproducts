function t(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((o) => setTimeout(() => {
    throw o;
  }));
}
export {
  t
};
//# sourceMappingURL=micro-task-B6uncIso.js.map
