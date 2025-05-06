<template>
  <div class="p-6 bg-gray-50 dark:bg-transparent rounded-lg shadow-inner">
    <!-- Centered Heading -->
    <h2 class="text-2xl font-bold text-gray-800 dark:text-red-100 mb-6 text-center w-full">
      Whatever you need, we got it!
    </h2>

    <!-- Responsive Scrollable Flex Container -->
    <div class="flex overflow-x-auto gap-4 pb-2">
      <div
        v-for="(category, index) in categories"
        :key="index"
        @click="selectCategory(category)"
        :class="[
          'cursor-pointer transform transition-all duration-300 ease-in-out shrink-0',
          selectedCategory?.name === category.name
            ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg scale-105'
            : 'bg-white dark:bg-gray-800 hover:bg-indigo-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 hover:scale-105'
        ]"
        class="flex flex-col items-center p-4 w-36 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700"
      >
        <div
          class="w-14 h-14 rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 flex items-center justify-center mb-3 text-2xl font-semibold"
        >
          {{ category.name.charAt(0).toUpperCase() }}
        </div>

        <span class="text-center text-sm font-medium tracking-wide">
          {{ category.name }}
        </span>
      </div>
    </div>
  </div>
</template>




<script setup>
import { ref, onMounted } from "vue";
import gql from "graphql-tag";
import { useApolloClient } from "@vue/apollo-composable";

const emit = defineEmits(["categorySelected"]);

const categories = ref([]);
const selectedCategory = ref(null);

const GET_CATEGORIES = gql`
  query GET_CATEGORIES {
    productCategories(first: 200, where: { hideEmpty: true, parent: null }) {
      edges {
        node {
          name
          image {
            altText
            link
          }
        }
      }
    }
  }
`;

const apolloClient = useApolloClient().client;

const fetchCategories = async () => {
  try {
    const { data } = await apolloClient.query({ query: GET_CATEGORIES });
    categories.value = data.productCategories.edges.map(edge => edge.node);
  } catch (error) {
    console.error("Error fetching categories:", error);
  }if (categories.value.length > 0) {
    selectedCategory.value = categories.value[0].name;
  }
};

const selectCategory = (category) => {
  selectedCategory.value = category;
  emit("categorySelected", category);
};

onMounted(() => {
  fetchCategories();
});
</script>
<style scoped>
.no-scrollbar {
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
}
.no-scrollbar::-webkit-scrollbar {
  display: none; /* Chrome, Safari */
}
</style>