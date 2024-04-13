import "vue";
import "hookable";
import "destr";
import "klona";
import "devalue";
import "defu";
import { h as defineStore } from "../server.mjs";
const useCounter = defineStore("counter", {
  state: () => ({
    count: 0
  }),
  actions: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
    reset() {
      this.count = 0;
    },
    increment2x() {
      this.count *= 2;
    }
  }
});
export {
  useCounter as u
};
//# sourceMappingURL=use-counter-Ocg8JTnf.js.map
