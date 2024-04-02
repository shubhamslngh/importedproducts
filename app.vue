<script lang="ts" setup>
import { provideSession } from "./utils/sessions";
const { awesome } = useAppConfig();
useHead({
  title: awesome.name,
  titleTemplate: `%s - ${awesome.name}`,
});
</script>

<template>
  <!-- <provideSession> -->
  <Body
    class="antialiased duration-300 transition-colors text-gray-800 dark:text-gray-200 bg-white dark:bg-black overflow-y-scroll"
  >
    <canvas id="canvas"></canvas>
    <NuxtLayout>
      <NuxtLoadingIndicator />
      <NuxtPage />
    </NuxtLayout>
  </Body>
  <!-- </provideSession> -->
</template>
<style></style>
