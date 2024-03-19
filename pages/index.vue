<script setup>
import animations from "../utils/animations";
const { awesome } = useAppConfig();
definePageMeta({ layout: "page" });
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
useHead({ titleTemplate: "", title: "" });
</script>

<template>
  <div>
    <AwesomeLamp />
    <AwesomeWelcome
      name="IMPORTED PRODUCTS "
      :with-alert="true"
      class="min-h-[100vh]"
    />
  </div>
</template>
<style></style>
