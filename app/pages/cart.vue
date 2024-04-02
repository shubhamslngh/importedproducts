<script setup>
definePageMeta({ layout: "page" });
useHead({ title: "cart" });
</script>

<template>
  <LayoutPageWrapper class="min-w-[100vw] max-h-[100vh] ">
    <AwesomeWelcome name="cart  " />
    <AwesomeCart />
  </LayoutPageWrapper>
</template>
