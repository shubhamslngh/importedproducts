<script setup>
definePageMeta({ layout: "page" });
useHead({ title: "Blank Page" });
const { $wordpressStore } = useNuxtApp();

//on mounted hook
onMounted(async () => {
  try {
    await $wordpressStore.iphoneProducts();
    console.log("work");
  } catch (error) {
    console.log("error in blank.vue work");
  }
});
</script>

<template>
  <LayoutPageWrapper class="min-w-[100vw] max-h-[100vh] overflow-y">
    <!-- <LayoutPageWrapper>
      <AwesomeIphonecases :Cases="$wordpressStore.productsIphone" />
    </LayoutPageWrapper> -->
    <LayoutPageWrapper>
      <AwesomeGraphql />
    </LayoutPageWrapper>

    <AwesomeProducts
      class="max-h-[100vh]"
      :caseproducts="$wordpressStore.productCases"
    />
  </LayoutPageWrapper>
</template>
