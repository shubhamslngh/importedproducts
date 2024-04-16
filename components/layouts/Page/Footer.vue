<script lang="ts" setup>
const { awesome } = useAppConfig();
</script>

<template>
  <footer
    class="Footer static mx-auto  allign-bottom border-t my-8 mt-5 border-gray-900/10 dark:border-gray-50/[0.2]"
  >
    <div
      class="Footer justify-between  allign-bottom mx-auto px-4  md:flex-row py-2 space-y-2 md:space-y-0 items-center text-xs text-center md:text-left text-gray-400"
    >
      <div>
        Copyright ©
        {{ awesome?.layout?.footer?.year || new Date().getFullYear() }}
        {{ awesome?.author?.name || "" }}. All rights reserved.
      </div>
      <div>{{ awesome.name }}</div>
    </div>
  </footer>
</template>
<style>
.Footer {
  position: absolute;
  bottom: 0;
  width: 100%;
}


</style>
