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
          class="transition-[width] duration-200 ease-in-out"
          :id="product.node.name"
        >
          <!-- {{ console.log("databaseid", product.node.databaseId) }} -->
          <div class="snap-x">
            <div class="snap-center">
              <img
                @click="handleClick(product.node.databaseId)"
                :src="product.node.image ? product.node.image.link : ''"
                alt="Product Image"
                class="transition-all ease-in-out"
              />
              {{ console.log(selectedProductId) }}

              <!-- <AwesomeVariations :selectedProductId="selectedProductId" /> -->
              <h3 class="box text-wrap font-semibold hover:font-bold">
                {{ product.node.name }}
              </h3>
              <template v-if="selectedProductId === product.node.databaseId">
                <div>
                  <AwesomeVariations :productId="selectedProductId" />
                </div>
              </template>

              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
// const productId = 7456; // const variationId = 7458;

<script setup>
import { ref } from "vue";
import gql from "graphql-tag";
var selectedProductId = ref(0);
// const props = defineProps(["ID:number"]);
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

const { data } = await useAsyncQuery(query);
// console.log(data, "cases data");
if (data) {
  Data1.value = data;
}

const handleClick = (productId) => {
  selectedProductId.value = productId;
  // console.log(selectedProductId, "here is selected id");
};
// ID = selectedProductId;
// console.log(ID);
</script>
