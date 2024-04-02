<template>
  <div v-if="data" class="swiper">
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
          <h3 class="box text-wrap font-semibold hover:font-bold">
            {{ product.node.name }}
          </h3>

          <template v-if="selectedProductId === product.node.databaseId">
            <div class="swiper-container">
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
      effect: "cards",
      grabCursor: true,
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
.swiper {
  width: auto;
  height: auto;
}
.swiper-cards {
  width: 240px;
  height: 240px;
}
.swiper-wrapper {
  min-width: 50%;
  width: 60%;
  background: none;
}

.swiper-slide {
  width: 400px;
  text-align: center;
  font-size: 10px;
  display: grid;
  justify-content: center;
  align-items: center;
}
.swiper-pagination {
  color: red;
}
</style>
