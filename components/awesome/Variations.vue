<template>
  <div v-if="products.length > 0">
    <swiper
      :effect="'cards'"
      :grabCursor="true"
      :nested="true"
      :slideShadows="false"
      :modules="modules"
      class="mySwiper dark:bg-none"
    >
      <!-- {{ console.log(products, "products for cards in template") }} -->
      <swiper-slide
        class="dark:bg-none"
        v-for="(product, index) in products"
        :key="index"
        :slideShadow="false"
        :style="{ 'background-image': `url(${product.img})` }"
      >
        <div @click="handleClick(product.variationId)">
          <img
            :src="product.img ? product.img : ''"
            alt="Product Image"
            class="transition-all ease-in-out"
          />
        </div>
      </swiper-slide>
    </swiper>
    <div>
      <AddToCart
        :productId="selectedProductId"
        :variationId="selectedVariationId"
      />
    </div>
  </div>
  <div v-else><div class="swiper-lazy-preloader swiper-lazy-preloader-black"></div></div>
</template>

<script>
import { ref, onMounted, defineProps } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { getVariation } from "../../utils/cart"; 
import "swiper/css/effect-cards";
import "swiper/css/bundle";
import { EffectCards } from "swiper/modules";
import AddToCart from "../awesome/AddtoCart.vue";
import "swiper/scss/effect-cards";

export default {
  components: {
    AddToCart,
    Swiper,
    SwiperSlide,
  },
  props: {
    productId: {
      type: Number,
      required: true,
    },
    variationId: {
      type: Number,
      default: 0,
    },
  },
  setup(props) {
    const updateShadowStyles = () => {
      const shadowElements = document.querySelectorAll(".swiper-slide-shadow");
      shadowElements.forEach((shadowElement) => {
        shadowElement.style.opacity = "0";
      });
    };

    const selectedProductId = ref(props.productId);
    const selectedVariationId = ref(props.variationId);
    const products = ref([]);
    let data = ref([]);
    const { mutate: getProducts, loading } = useMutation(getVariation);

    onMounted(async () => {
      try {
        data = await getProducts({ productId: props.productId });
        if (data) {
          console.log(data, "data inside try");
          products.value = data.data.variableProduct.variations.nodes.map(
            (nodes) => ({
              name: nodes.name,
              img: nodes.image.link,
              variationId: nodes.databaseId,
            })
          );
          console.log(products.value, "products object created");
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    });
    setTimeout(() => {
      updateShadowStyles();

      const observer = new MutationObserver(updateShadowStyles);

      const swiperContainer = document.querySelector(".swiper-container");
      if (swiperContainer) {
        observer.observe(swiperContainer, {
          attributes: true,
          childList: true,
          subtree: true,
        });
      }
    }, 10);

    const handleClick = (variationId) => {
      selectedVariationId.value = variationId;
      selectedProductId.value = props.productId;
      console.log(selectedProductId.value, "here is Product id");
      console.log(selectedVariationId.value, "here is Variation id");
      // console.log(apollo, "here is appoloo id");
    };

    return {
      modules: [EffectCards],
      spaceBetween: 400,
      resistanceRatio: 0,
      rewind: true,
      selectedProductId,
      selectedVariationId,
      products,
      handleClick,
    };
  },
};
</script>

<style scoped>
.img {
  width: auto;
  height: auto;
}
.mySwiper * {
  background-color: none;
}
.swiper {
  width: 280px;
  height: auto;
}

.swiper-slide {
  background: none !important;
  display: flex;
  opacity: 1;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: bold;
}
</style>
