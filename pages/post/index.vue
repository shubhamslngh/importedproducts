<script setup>
definePageMeta({ layout: "page" });
useHead({ title: "Posts" });
const { $wordpressStore } = useNuxtApp();
console.log(" work");
const products = [];
onMounted(async () => {
  try {
    await $wordpressStore.fetchProducts();
    // await $wordpressStore.addToCart();
    console.log("work");
  } catch (error) {
    console.log("error didnt work");
  }
});
</script>
<template>
  <LayoutPageWrapper>
    <AwesomeLamp />
    <AwesomeSubscription :subscriptions="$wordpressStore.productBg" />
  </LayoutPageWrapper>
</template>
<style></style>
