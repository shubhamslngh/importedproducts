<template>
  <swiper
    :effect="'cards'"
    :grabCursor="true"
    :modules="modules"
    class="mySwiper grid"
  >
    <swiper-slide
      flex
      items-stretch
      v-for="(product, index) in Data1.variableProduct.variations.nodes"
      :key="index"
      :id="product.name"
    />
    {{ console.log(product.image.link, "here is img") }}
    <img
      @click="handleClick(product.databaseId)"
      :src="product.image.link ? product.image.link : ''"
      alt="Product Image"
      class="transition-all ease-in-out"
    />

    <swiper-slide>
      <AwesomeAddtoCart
        :productId="selectedProductId"
        :variationId="selectedVariationId"
      />
      <div class="grid text-wrap font-semibold hover:font-bold">
        {{ product.name }}
      </div>
    </swiper-slide>
  </swiper>
</template>

<script setup>
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
try {
  console.log(props.productId, "this is props ");
  const { data } = await getProducts({
    productId: props.productId,
  });
  console.log(data, "Product fetched ");
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
const handleSwipe = (event) => {
  event.stopPropagation();
};
</script>
<style scoped>
.swiper {
  width: auto;
  height: auto;
  display: grid;
}
.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
  color: auto;
}
</style>
