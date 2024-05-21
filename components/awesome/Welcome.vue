<script lang="ts" setup>
// import axios from "axios";
import { useAuthStore } from "../../stores/auth";
const { awesome } = useAppConfig();
const { parseMenuRoute, parseMenuTitle } = useNavbarParser();
const authStore = useAuthStore();
const user = authStore.user;
const props = defineProps({
  withAlert: {
    type: Boolean,
    default: true,
  },
  name: {
    type: String,
  },
 startColor: {
    type: Array,
    default: () => ['purple', 'red', 'green'], // Default colors if none provided
  },
  endColor: {
    type: Array,
    default: () => ['white', 'green', 'blue'], 
  },
});
const showAlert = ref(
  awesome?.layout?.welcome?.disableInfoReplaceIndexInWelcomePage
    ? !awesome?.layout?.welcome?.disableInfoReplaceIndexInWelcomePage
    : props.withAlert
);

const titlesText = computed(() => {
  const originalText = props.name || "";
  return originalText
    .replaceAll("&nbsp;", "[space]")
    .split(" ")
    .map((item) => item.replaceAll("[space]", " "));
});
// console.log("props.name:", props.name);
// console.log("titlesText.value:", titlesText.value);

const leadingsText = computed(() => [
  {
    text: titlesText.value[0],
    startColor: props.startColor[0],
    endColor: props.endColor[0],
    delay: 0,
  },
  {
    text: titlesText.value[1],
    startColor: props.startColor[1],
    endColor: props.endColor[1],
    delay: 2,
  },
  {
    text: titlesText.value[2],
    startColor: props.startColor[2],
    endColor: props.endColor[2],
    delay: 4,
  },
]);
</script>

<template>
  <LayoutPageWrapper class="flex-1 relative z-[-1]">
    <LayoutPageSection class="flex-1 flex">
      <div class="flex-1 flex flex-col items-center justify-center">
        <h1 class="text-center mt-4">
          <span
            v-for="(item, i) in leadingsText"
            :key="i"
            :style="`--content: '${item.text}'; --start-color: ${
              item.startColor
            }; --end-color: ${item.endColor}; --animation-name: anim-fg-${
              i + 1
            }`"
            class="animated-text-bg drop-shadow-xl text-6xl sm:text-8xl md:text-8xl lg:text-8xl 2xl:text-8xl block font-black uppercase"
          >
            <span class="animated-text-fg">{{ item.text }}</span>
          </span>
        </h1>
      </div>
    </LayoutPageSection>
  </LayoutPageWrapper>
</template>

<style lang="scss">
@keyframes anim-fg-1 {
  0%,
  16.667%,
  100% {
    opacity: 1;
  }
  33.333%,
  83.333% {
    opacity: 0;
  }
}
@keyframes anim-fg-2 {
  0%,
  16.667%,
  66.667%,
  100% {
    opacity: 0;
  }
  33.333%,
  50% {
    opacity: 1;
  }
}
@keyframes anim-fg-3 {
  0%,
  50%,
  100% {
    opacity: 0;
  }
  66.667%,
  83.333% {
    opacity: 1;
  }
}
.animated-text-bg {
  position: relative;
  display: block;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  content: var(--content);
  display: block;
  width: 100%;
  color: theme("colors.slate.800");
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 0;
  padding-left: var(--padding);
  padding-right: var(--padding);
  &:before {
    content: var(--content);
    position: absolute;
    display: block;
    width: 100%;
    color: theme("colors.slate.800");
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 0;
    padding-left: var(--padding);
    padding-right: var(--padding);
  }
}
.animated-text-fg {
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  padding-left: var(--padding);
  padding-right: var(--padding);
  background-image: linear-gradient(
    90deg,
    var(--start-color),
    var(--end-color)
  );
  position: relative;
  opacity: 0;
  z-index: 1;
  animation: var(--animation-name) 8s infinite;
}
html.dark {
  .animated-text-bg {
    color: theme("colors.gray.100");
    &:before {
      color: theme("colors.gray.100");
    }
  }
}
</style>
