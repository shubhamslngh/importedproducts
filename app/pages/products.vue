<script setup>
definePageMeta({ layout: "page" });
useHead({ title: "Cases" });

import { ref } from 'vue';

const selectedCategory = ref(null);

const handleCategorySelected = (category) => {
  selectedCategory.value = category.name;
};
</script>

<template>
  <LayoutPageWrapper class="min-w-[100vw] max-h-[100vh]">
    <AwesomeWelcome name="products  " />

    <AwesomeCategories @categorySelected="handleCategorySelected" />

    <AwesomeCases v-if="selectedCategory" :category="selectedCategory" />
  </LayoutPageWrapper>
</template>
