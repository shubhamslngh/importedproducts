<script setup>
definePageMeta({ layout: "page" });
useHead({ title: "Cases" });
const { $wordpressStore } = useNuxtApp();
</script>

<template>
  <LayoutPageWrapper class="min-w-[100vw] max-h-[100vh] overflow-y">
    <AwesomeWelcome name="login  " />
    <AwesomeLogin />
  </LayoutPageWrapper>
</template>
