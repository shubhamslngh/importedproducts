<template>
  <div v-if="data" class="swiper">
              <h1  class="mb-10 text-center text-2xl font-bold">IPHONE MAGSAFE COMPATIBLE CASES</h1>

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
          <h3 class="grid text-wrap text-center text-[0.75rem]/5 font-MONO font-semibold hover:font-bold">
            {{ product.node.name }}
          </h3>

          <template v-if="selectedProductId === product.node.databaseId">
            <div class="swiper-container grid m-5 mt-12 ">
              {{ console.log(selectedProductId) }}
              <AwesomeVariations :productId="selectedProductId" />
              <!-- <AwesomeCardstest :productId="selectedProductId" /> -->
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import gql from "graphql-tag";
const selectedProductId = ref(0);
const Data1 = ref([]);

const query = gql`
  query MyQuery {
    products(where: { category: "cases" }) {
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

const initializeSwiper = () => {
  const swiper = new Swiper(".swiper", {
    slidesPerView: 5,
    spaceBetween: 40,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      // When window width is <= 768px
      420: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      // When window width is <= 1024px
      720: {
        slidesPerView: 5,
        spaceBetween: 10,
      },
      // When window width is <= 1440px
      1440: {
        slidesPerView: 5,
        spaceBetween: 40,
      },
    },
  });
  return swiper;
};

const products = ref([]);
onMounted(() => {
  initializeSwiper();
});

const { data } = await useAsyncQuery(query);
// console.log(data._value.products.edges, "here in cards");
products.value = data._value.products.edges.map((edges) => ({
  name: edges.node.name,
  img: edges.node.image.link,
}));
console.log(products.value, "cases is obj");

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
