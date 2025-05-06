<script setup>
const props = defineProps(["Cases"]);
</script>

<template>
  <div v-for="(Iphonecase, index) in Cases" :key="index">
    <!-- {{ console.log("value in Iphoneacase", { IphoneCase }) }} -->
    <li>{{ Iphonecase.color }}</li>
  </div>
</template>

<style></style>
