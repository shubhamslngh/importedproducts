<template>
  <div class="mx-auto  flex place-items-center  sm:place-items-center position: relative">
    <div
      id="lampLed"
      class="sm:mx-auto  transition-[width] ease-in-out sm:max-w-xl md:max-w-3xl duration-[1s]"
    >
      <div
        id="backGlow"
        class="relative sm:max-w-20 md:max-w-7xl inset-20 -z-50 mx-auto align-baseline rounded-full bg-yellow-300 opacity-10 blur-3xl bg-blend-multiply"
      ></div>
      <div
        class="h-2 rounded-sm blur shadow-lg bg-blend-multiply md:shadow-xl md:shadow-red-500 trainsition-all duration-[12s]"
      ></div>

      <div class="relative group grid mx-auto ">
        <div
          class="bg-black blur bg-blend-multiply blur p-2.5"
          style="z-index: 6"
        ></div>
        <div id="tubecase" class="bg-black w-auto p-0.5"></div>
        <div
          id="lampLedGlow"
          class="absolute inset-[2px] opacity-50 blur-3xl border-t-[10px] border-b-[250px] border-l-[180px] border-r-[180px] border-solid border-transparent border-b-yellow-300 border-t-black duration-[2s] bg-blend-multiply ease-in-out duration-[2s]"
          style="z-index: 5"
        ></div>
        <div

          class="relative px-7 py-[1px] bg-yellow-200 ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-center space-x-6 transtion-all ease-in-out duration-[2s]"
          style="z-index: 6"
        ></div>
        <div
          id="lampGlow"
          class="mx-auto overflow-hidden opacity-30 bg-blend-multiply blur-xl border-t-[10px] border-b-[250px] border-l-[180px] border-r-[180px] border-solid border-transparent border-b-[#a916c0] border-t-black duration-[2s]"
        ></div>

      </div>
    </div>
  </div>
</template>

<style scoped>
.neon {
  text-shadow:
    0 0 10px rgba(139, 92, 246, 0.5),
    0 0 20px rgba(139, 92, 246, 0.5);
}
</style>
<script setup>
import animations from "../../utils/animations";
const lampLed = "lampLed";
onMounted(() => {
  const element = document.getElementById(lampLed);
  if (element) {
    animations.runLamp();
    window.addEventListener("scroll", function () {
      let scrollPosition = window.scrollY;
      if (scrollPosition > 200) {
        animations.lampOff();
      } else if (scrollPosition <= 0) {
        animations.runLamp();
      } else {
        animations.runLamp();
      }
    });
  }
});
</script>
