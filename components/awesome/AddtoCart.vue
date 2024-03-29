<template>
  <div>
    <button
      @click="addToCartHandler"
      :disabled="loading"
      class="border-x-orange-700 bg-rose-700"
    >
      Add to Cart
    </button>
  </div>
</template>
<script setup lang="ts">
import { AddCart } from "../../utils/cart";
import { getVariation } from "../../utils/cart";

const props = defineProps({
  productId: Number,
  variationId: Number,
});
// console.log(props.productId, "this is ProducId");
// console.log(props.variationId, "this is VariationID");

const { mutate: addToCart, loading } = useMutation(AddCart);

async function addToCartHandler() {
  console.log(props.productId);
  try {
    const token = localStorage.getItem("authToken"); // Retrieve the authentication token from local storage
    const headers = { Authorization: `Bearer ${token}` }; // Set the token in the request headers
    console.log(token, "token");

    await addToCart({
      productId: props.productId,
      variationId: props.variationId,
      quantity: 1,
      context: {
        headers,
      },
    }).then(() => {
      props.productId = "";
      props.variationId = "";
      console.log("added to cart!");
    });
  } catch (error) {
    console.error("Error adding product to cart:", error);
  }
}
</script>
