<template>
  <div>
    <AwesomeButton
      @click="addToCartHandler"
      :disabled="loading"
      class="border-x-black-700 bg-red-800"
    >
      Add to Cart
    </AwesomeButton>
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
    const token = localStorage.getItem("authToken");
    const headers = { Authorization: `Bearer` + localStorage.getItem("token") };
    console.log(token, "token");
    loading.value = true;

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
      loading.value = false;
      console.log("added to cart!");
    });
  } catch (error) {
    loading.value = false;
    console.error("Error adding product to cart:", error);
  }
}
</script>
