<script setup>
useHead({ titleTemplate: "", title: "home" });
// import animations from "../utils/animations";
const { awesome } = useAppConfig();
definePageMeta({ layout: "page" });
// const runLampOnScroll = () => {
//   animations.runLamp();
//   window.addEventListener("scroll", function () {
//     let scrollPosition = this.window.scrollY;
//     if (scrollPosition > 200) {
//       animations.lampOff();
//     } else if (scrollPosition <= 0) {
//       animations.runLamp();
//     } else {
//       animations.runLamp();
//     }
//   });
// };

// onMounted(runLampOnScroll);
</script>

<template>
  <div>
    <AwesomeLamp />
    <AwesomeWelcome
      name="IMPORTED PRODUCTS "
      :with-alert="true"
      class="min-h-[100vh]"
    />
    <!-- <AwesomeSwiperslide /> -->
  </div>
</template>
<style></style>
