<script setup>
definePageMeta({ layout: "page" });
useHead({ title: "login" });
const { $wordpressStore } = useNuxtApp();
</script>

<template>
  <LayoutPageWrapper class="min-w-[100vw] max-h-[100vh]">
    <AwesomeWelcome name="login  " />
    <AwesomeLogin />
  </LayoutPageWrapper>
</template>
