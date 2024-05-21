<script setup lang="ts">
import { cartItem } from "../../utils/cart";

const counter = useCounter();
const data = ref(null);
const error = ref(null);

const loadData = async () => {
  try {
    const { data: newData } = await useAsyncQuery(cartItem);
    data.value = newData;
  } catch (err) {
    error.value = err;
  }
};

onMounted(loadData);

watch(data, (newData) => {
  if (newData.value && newData.value.cart && newData.value.cart.contents && newData.value.cart.contents.nodes.length > 0) {
    counter.count = newData.value.cart.contents.nodes[0].quantity;
  }
});

</script>

<style></style>
<template>
  <div v-if="data">
 <div class="h-screen  pt-20">
    <h1 class="mb-10 text-center text-3xl font-bold">Cart Items</h1>
    <div class="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
      <div class="rounded-lg md:w-2/3">
        <div v-if="data._value.cart.contents.nodes.length<1" class="grid place-items-start">
          <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between" >  
          <h1 class="mb-10 text-center text-xl font-bold">No item added
            </h1>
          <img alt="product-image" src=https://importedproducts.in/wp-content/uploads/2024/04/shopping-cart-buy-shopping-297750.png class="mb-10 blur-sm flex mr-20 items-center sm:w-40" />
        </div>
        </div>
        <div v-for="(product, index) in data._value.cart.contents.nodes"
        :key="index" class="justify-between mb-6 dark:bg-white rounded-lg light: bg-slate-300 p-6 shadow-md sm:flex sm:justify-start">
        <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between" v-if="product.variation" >
        <img alt="product-image" :src="product.variation.node.image.link" class="w-full rounded-lg sm:w-40" />
          <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
            <div class="mt-5 sm:mt-0">
              <h2 class="text-lg font-bold text-gray-900">{{product.variation.node.name }}</h2>
              <p class="mt-1 text-xs text-gray-700"></p>
              <p class="mt-1 text-xs text-gray-700">QTY:{{ product.quantity }}</p>
            </div>
          </div>
            
            <div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
              <div class="flex items-center border-gray-100">
                
                <button
                  @click.prevent="counter.decrement"
                  class="counter-button mr-2 bg-red-800 text-white px-4 py-2 rounded-lg font-bold text-lg hover:bg-red-600"
                >
                <!-- {{ product.variation.node.databaseId }} -->
                  -
                </button>
                <div class="relative">
                              <span class="counter bg-gray-200 text-red px-4 py-2 rounded-lg font-bold text-lg">{{ product.quantity }}</span>

                </div>
                <button
                  @click.prevent="counter.increment"
                  class="counter-button ml-2 bg-blue-500 text-white px-4 py-2 rounded-lg font-bold text-lg hover:bg-blue-600"
                >
                <!-- {{ product.variation.node.image.parentDatabaseId }} -->
                  +
                </button> 
              </div>
              <div class="flex items-center space-x-4">
                <p class="text-sm">{{ product.subtotal }}</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Sub total -->
      <div class="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
        <div class="mb-2 flex justify-between">
          <p class="text-gray-700">Subtotal</p>
          <p class="text-gray-700">{{ data._value.cart.total }}</p>
        </div>
        <div class="flex justify-between">
          <p class="text-gray-700">Shipping</p>
          <p class="text-gray-700">{{ data._value.cart.shippingTotal }}</p>
        </div>
        <hr class="my-4" />
        <div class="flex justify-between">
          <p class="text-lg text-black font-bold">Total</p>
          <div class="">
            <p class="mb-1 text-lg text-black font-bold">{{ data._value.cart.total }}</p>
            <p class="text-sm text-black ">including VAT</p>
          </div>
        </div>
        <button class="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">Check out</button>
      </div>
    </div>
  </div>

  </div>
  <div v-else>
    <h1 class="mb-10 text-center text-2xl font-bold">Loading...</h1>
  </div>
</template>