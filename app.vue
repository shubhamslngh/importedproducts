<script lang="ts" setup>
import { useAuthStore } from "./stores/auth";
const { awesome } = useAppConfig();

useHead({
  title: awesome.name,
  titleTemplate: `%s - ${awesome.name}`,
});
onBeforeMount(() => {
  const authStore = useAuthStore();
  authStore.initialize();
console.log("auth is ",authStore.isAuthenticated);

});

</script>
 
<template>
  <Body
    class="antialiased duration-300 transition-colors text-gray-800 dark:text-gray-200 bg-white dark:bg-black overflow-y-scroll"
  >
    <canvas id="canvas"></canvas>
    <NuxtLayout>
      <NuxtLoadingIndicator />
      <NuxtPage />
    </NuxtLayout>
  </Body>
</template>
<style></style>
