<template>
  <div
    id="lampLed"
    class="w-[20%] transition-[width] ease-in-out max-w-7xl mx-auto duration-[1s]"
  >
    <div
      id="backGlow"
      class="absolute inset-20 -z-50 mx-auto align-baseline rounded-full bg-yellow-300 opacity-10 blur-3xl bg-blend-multiply"
    ></div>
    <div
      class="h-2 rounded-sm blur shadow-lg bg-blend-multiply md:shadow-xl md:shadow-red-500 trainsition-all duration-[12s]"
    ></div>

    <div class="relative group grid">
      <div
        class="bg-black blur bg-blend-multiply blur p-2.5"
        style="z-index: 6"
      ></div>
      <div id="tubecase" class="bg-black w-auto p-0.5"></div>
      <div
        id="lampLedGlow"
        class="absolute inset-[2px] opacity-50 blur-3xl border-t-[10px] border-b-[250px] border-l-[180px] border-r-[180px] border-solid border-transparent border-b-grey border-t-black duration-[2s] bg-blend-multiply ease-in-out duration-[2s]"
        style="z-index: 5"
      ></div>
      <div
        @mouseover="runLamp"
        @mouseleave="lampOff"
        class="relative px-7 py-[1px] bg-yellow-200 ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6 transtion-all ease-in-out duration-[2s]"
        style="z-index: 6"
      ></div>
      <div
        id="lampGlow"
        class="opacity-30 bg-blend-multiply blur-xl border-t-[10px] border-b-[250px] border-l-[180px] border-r-[180px] border-solid border-transparent border-b-[#a916c0] border-t-black duration-[2s]"
      ></div>

      <!-- class="w-[120%] h-[100px] inset-20 opacity-60 bg-gradient-to-b from-yellow-500 to-transparent blur-3xl bg-blend-multiply border-yellow-600 border-l-[10px] border-r-[10px] transition-all ease-in-out duration-[2s] rounded-2xl justify-self-center" -->
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
onMounted(() => {
  animations.runLamp();
  window.addEventListener("scroll", function () {
    // Get the scroll position
    let scrollPosition = window.scrollY;
    // Check if the scroll position meets certain criteria
    if (scrollPosition > 200) {
      animations.lampOff();

      // Call the runLamp function if the scroll position is greater than 200
    } else if (scrollPosition <= 0) {
      animations.runLamp();

      // Call the lampOff function if the scroll position is not greater than 200
    } else {
      animations.runLamp();
    }
  });
});
</script>
