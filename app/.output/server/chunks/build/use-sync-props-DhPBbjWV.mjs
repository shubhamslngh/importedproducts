import { computed } from 'vue';

const useSyncProps = (props, key, emit) => {
  return computed({
    get() {
      return props[key];
    },
    set(value) {
      emit(`update:${key}`, value);
    }
  });
};

export { useSyncProps as u };
//# sourceMappingURL=use-sync-props-DhPBbjWV.mjs.map
