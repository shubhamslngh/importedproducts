<script setup>
useHead({ titleTemplate: "", title: "home" });
// import animations from "../utils/animations";
const { awesome } = useAppConfig();
definePageMeta({ layout: "page" });
</script>

<template>
  <div>
    <AwesomeLamp />
    <!-- <AwesomeCardstest /> -->
    <AwesomeWelcome
      name="IMPORTED PRODUCTS "
      :with-alert="true"
      class="min-h-[100vh]"
    />
  </div>
</template>
<style></style>
