<template>
  <div class="box" background-color-black>
    <div id="wrapperSwiper" class="div lg:w-[200vw] md:w-[200vw] sm:w-[100vw]">
      <div
        id="gridWrapper"
        class="grid lg:grid-cols-8 md:grid-cols-8 sm:grid-cols-1 transition-all duration-200"
      >
        <div
          v-for="(product, index) in Data1._value.products.edges"
          :key="index"
          class="swiper-slide transition-[width] duration-200 ease-in-out"
          :id="product.node.name"
        >
          <img
            :src="product.node.image ? product.node.image.link : ''"
            alt="Product Image"
            class="transition-all ease-in-out"
          />
          <h3 class="box text-wrap font-semibold hover:font-bold">
            {{ product.node.name }}
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import gql from "graphql-tag";

const Data1 = ref([]); // Initialize Data1 as a reactive reference

function removeTypename(obj) {
  if (!obj || typeof obj !== "object") {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map(removeTypename);
  }

  const newObj = {};
  for (const key in obj) {
    if (key !== "__typename") {
      newObj[key] = removeTypename(obj[key]);
    }
  }
  return newObj;
}

const query = gql`
  query MyQuery {
    products(where: { category: "cases" }) {
      edges {
        node {
          image {
            link
          }
          name
        }
      }
    }
  }
`;

const { data } = await useAsyncQuery(query, { limit: 2 });

if (data) {
  const parsedData = removeTypename(data);
  console.log(parsedData, "parsed OP ");
  Data1.value = parsedData; // Update Data1 with the parsed data
  console.log(Data1.value, "newdata");
}
</script>
