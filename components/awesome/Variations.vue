<template>
  <!-- <h1 class="text-center bg-blue">Variations</h1> -->

  <div class="grid" background-color-black>
    <div id="wrapperSwiper" class="div lg:w-[200vw] md:w-[200vw] sm:w-[100vw]">
      <div
        id="gridWrapper"
        class="grid lg:grid-cols-8 md:grid-cols-8 sm:grid-cols-1 transition-all duration-200"
      >
        {{ console.log("hello---->", Data1) }}
        <div
          v-for="(product, index) in Data1.variableProduct.variations.nodes"
          :key="index"
          class="transition-[width] duration-200 ease-in-out"
          :id="product.names"
        >
          <div class="snap-x">
            <div class="snap-center">
              <img
                @click="handleClick(product.databaseId)"
                :src="product.image.link ? product.image.link : ''"
                alt="Product Image"
                class="transition-all ease-in-out"
              />

              <h3 class="box text-wrap font-semibold hover:font-bold">
                {{ product.name }}
              </h3>
              <AwesomeAddtoCart
                :productId="selectedProductId"
                :variationId="selectedVariationId"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { AddCart } from "../../utils/cart";
import { getVariation } from "../../utils/cart";
import { ref, onMounted } from "vue";

const Data1 = ref([]);
const selectedProductId = ref([]);
const selectedVariationId = ref([]);

const props = defineProps({
  productId: Number,
  variationId: Number,
});

const { mutate: getProducts, loading } = useMutation(getVariation);

// const fetchproducts = async () => {
try {
  console.log(props.productId, "this is props ");
  const { data } = await getProducts({
    productId: props.productId,
  });
  console.log(data, "Product fetched ");

  // Assign data directly to Data1 and force reactivity update
  if (data) {
    Data1.value = data;
  }
} catch (error) {
  console.error("Error fetching product to cart:", error);
}
const handleClick = (productId) => {
  selectedVariationId.value = productId;
  selectedProductId.value = props.productId;
  console.log(selectedProductId.value, "here is Product id");
  console.log(selectedVariationId.value, "here is Variation id");
};
</script>
