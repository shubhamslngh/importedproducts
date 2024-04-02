<script lang="ts" setup>
const counter = useCounter();
const identity = useIdentity();

definePageMeta({ layout: "page" });
useHead({ title: "Travel Page" });
</script>

<template>
  <LayoutPageWrapper>
    <AwesomeCardstest />
  </LayoutPageWrapper>
</template>
