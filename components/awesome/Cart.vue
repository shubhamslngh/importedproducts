<script setup lang="ts">
import { cartItem } from "../../utils/cart";
import { GetCart } from "../../utils/graphql";
var data = "";
const { mutate: Get, loading } = useMutation(cartItem);
const handle = async () => {
  try {
    data = await Get({
      customerId: "dXNlcjo0MzA=",
    });
    console.log(data, "Cart fetched ");
  } catch (error) {
    console.error("Error fetching cart :", error);
  }
};
</script>

<template>
  <div>
    <h1 @click="handle">This Is CART</h1>
  </div>
</template>

<style lang="scss" scoped></style>
