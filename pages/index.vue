<script setup>
const { awesome } = useAppConfig();
definePageMeta({ layout: "page" });
useHead({ titleTemplate: "", title: "" });
</script>
<template>
  <AwesomeLamp />
  <AwesomeWelcome :with-alert="true" class="min-h-[100vh]" />
</template>
<style>
.body {
  overflow: visible;
}
</style>
