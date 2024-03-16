<template>
  <!-- <div
    id="lampLed"
    class="mx-auto w-1/5 h-2 shadow-neon overflow-hidden relative transition-[width] duration-200 ease-in-out"
  >
    <div
      class="w-full bg-gradient-to-b from-green-500 to-white absolute inset-0 top-1/2 -translate-y-1/2"
    ></div>
  </div>
  <div
    class="mx-auto w-1/5 h-2 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E]"
  ></div> -->

  <div
    id="lampLed"
    class="w-1/5 transition-[width] duration-200 ease-in-out max-w-7xl mx-auto"
  >
    <!-- <div
      id="lampUpper"
      class="absolute -inset-[50px] transition-[inset]-2s skew-x-5 top-1 inset-x-0 bg-gradient-to-b from-cyan-800/80 to-blue-800/10 rounded-sm blur opacity-40 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"
      style="z-index: 5"
    ></div> -->
    <div
      class="h-14 rounded-sm blur bg-gradient-to-r from-cyan-500 to-blue-500"
    ></div>

    <div
      class="h-10 rounded-sm blur bg-gradient-to-r from-purple-500 to-pink-500"
    ></div>

    <div class="relative group">
      <div class="bg-black p-0.5"></div>
      <div
        id="lampLedGlow"
        class="absolute -inset-[50px] border-t-6 transition-[inset]-2s skew-x-5 top-1 inset-x-0 bg-gradient-to-b from-cyan-800/80 to-blue-800/10 rounded-sm blur opacity-80 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"
        style="z-index: 5"
      ></div>

      <div
        @mouseover="runLamp"
        @mouseleave="lampOff"
        class="relative px-7 py-1 bg-cyan-500 ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6"
        style="z-index: 6"
      ></div>

      <!-- <h1
        class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
      >
        Imported Products
      </h1> -->
      <div
        class="w-64 h-64 bg-gradient-conic from-blue-500 via-green-500 to-yellow-500"
        style="background-position: 25%"
      ></div>
    </div>
    <!-- <div class="triangle-down"></div> -->
  </div>
</template>

<style scoped>
.triangle-down {
  width: auto;
  height: auto;
  border-left: 50px solid rgba(255, 255, 255, 0.547);
  border-right: 50px solid purple;
  border-top: 100px solid blue;
}
@keyframes tube-light {
  0% {
    background-position: 0 100%;
  }
  50% {
    background-position: 0 0;
  }
  100% {
    background-position: 0 100%;
  }
}
</style>
<script setup>
onMounted(() => {});
function runLamp() {
  let lampLedGlow = document.getElementById("lampLedGlow");
  lampLedGlow.classList.remove("-inset-[50px]");
  lampLedGlow.classList.add("-inset-[100px]");
  let lampLedHead = document.getElementById("lampLed");
  lampLedHead.style.width = "100%";
}
function lampOff() {
  let lampLedGlow = document.getElementById("lampLedGlow");
  lampLedGlow.classList.remove("-inset-[100px]");
  lampLedGlow.classList.add("-inset-[50px]");
  let lampLedHead = document.getElementById("lampLed");
  lampLedHead.style.width = "20%";
}
</script>
