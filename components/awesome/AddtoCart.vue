<template>
  <div class="flex ml-4 space-x-2">
    <div class="mb-7 flex items-center">
      <button
        @click.prevent="counter.decrement"
        class="counter-button mr-2 bg-red-800 text-white px-4 py-2 rounded-lg font-bold text-lg hover:bg-red-600"
      >
        -
      </button>
      <div class="relative">
        <span
          :key="counter.count"
          class="counter bg-gray-200 text-red px-4 py-2 rounded-lg font-bold text-lg"
          >{{ counter.count }}</span
        >
      </div>
      <button
        @click.prevent="counter.increment"
        class="counter-button ml-2 bg-blue-500 text-white px-4 py-2 rounded-lg font-bold text-lg hover:bg-blue-600"
      >
        +
      </button>
    </div>
    <div class="mr-4">
      <AwesomeButton
        @click="addToCartHandler"
        :disabled="loading"
        class="bg-red-800"
      >
        Add to Cart
      </AwesomeButton>
    </div>
  </div>
</template>
<script setup lang="ts">
import { AddCart } from "../../utils/cart";

let props = defineProps({
  productId: Number,
  variationId: Number,
  qty: Number,
});
// console.log(props.productId, "this is ProducId");
// console.log(props.variationId, "this is VariationID");

const { mutate: addToCart, loading } = useMutation(AddCart);
const counter = useCounter();
async function addToCartHandler() {
  console.log(props.productId);
  try {
    // const token = localStorage.getItem("authToken");
    loading.value = true;

    await addToCart({
      productId: props.productId,
      variationId: props.variationId,
      quantity: counter.count,
     
    }).then(() => {
      props.productId = "";
      props.variationId = "";
      (props.qty = ""), (loading.value = false);
      console.log("added to cart!");
    });
  } catch (error) {
    loading.value = false;
    console.error("Error adding product to cart:", error);
  }
}
</script>
