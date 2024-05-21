<script setup>
definePageMeta({ layout: "page" });
useHead({ title: "Cases" });

const props = defineProps({
  productId: Number,
  variationId: Number,
});

</script>

<template>
  <LayoutPageWrapper class="min-w-[100vw] max-h-[100vh]">
   
    <AwesomeWelcome name="cases  " />
    <AwesomeCases />
  
  </LayoutPageWrapper>
</template>
