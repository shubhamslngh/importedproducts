<template>
  <div v-if="data.products.edges" class="swiper">
<AwesomeWelcome :name="category" class="text-sm"/>

    <div class="swiper-wrapper">
      <div
        v-for="(product, index) in data.products.edges"
        :key="index"
        class="swiper-slide"
        :id="product.node.name"
      >
        <div>
          <img
            @click="handleClick(product.node.databaseId)"
            :src="product.node.image ? product.node.image.link : ''"
            alt="Product Image"
            class="transition-all ease-in-out"
          />
          <h3
            class="grid text-wrap text-center text-[0.75rem]/5 font-MONO font-semibold hover:font-bold"
          >
            {{ product.node.name }}
          </h3>
          <template v-if="selectedProductId === product.node.databaseId">
            <div
              class="swiper-container overscroll-auto focus:overscroll-contain grid m-5 mt-12"
            >
              {{ console.log(selectedProductId) }}
              <AwesomeVariations :productId="selectedProductId" />
              <!-- <AwesomeCardstest :productId="selectedProductId" /> -->
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <div class="swiper-lazy-preloader swiper-lazy-preloader-black">Loading...</div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import gql from "graphql-tag";
import { useQuery } from "@vue/apollo-composable";

const props = defineProps({
  category: {
    type: String,
    required: true,
    default: "Cases",
  },
});

const selectedProductId = ref(0);

const query = gql`
  query GetProducts($category: String!) {
    products(where: { category: $category }) {
      edges {
        node {
          image {
            link
          }
          name
          id
          databaseId
        }
      }
    }
  }
`;

const { result: data, refetch } = useQuery(query, () => ({
  category: props.category,
}));

watch(
  () => props.category,
  (newVal) => {
    if (newVal) refetch();
  }
);

onMounted(() => {
  new Swiper(".swiper", {
    slidesPerView: 5,
    rewind: true,
    spaceBetween: 40,
    autoplay: true,
    loop: true,
    resizeObserver: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: { slidesPerView: 1, spaceBetween: 10 },
      630: { slidesPerView: 3, spaceBetween: 10 },
      720: { slidesPerView: 4, spaceBetween: 10 },
      1440: { slidesPerView: 5, spaceBetween: 40 },
    },
  });
});

const handleClick = (productId) => {
  selectedProductId.value = productId;
};
</script>

<style scoped>
.swiper-slide {
  width: cover;
  height: cover;
  text-align: center;
  font-size: 10px;
  display: grid;
  justify-content: center;
  align-items: center;
}
.swiper-container {
  width: auto;
  height: auto;
}
</style>
