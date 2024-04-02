<template>
  <swiper
    :effect="'cards'"
    :grabCursor="true"
    :modules="modules"
    :loop="true"
    class="mySwiper"
  >
    <swiper-slide
      v-for="(product, index) in products"
      :key="index"
      :style="{
        'background-image': `url(${product.img})`,
      }"
    >
      <div class="bg-transparent">
        <img
          :src="product.img ? product.img : ''"
          alt="Product Image"
          class="bg-transparent transition-all ease-in-out"
        />
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
import { ref, onMounted } from "vue";
import gql from "graphql-tag";
const selectedProductId = ref(0);
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
export default {
  components: {
    Swiper,
    SwiperSlide,
  },

  setup() {
    const products = ref([]);
    const fetchData = async () => {
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
      const data = useQuery(query);
      console.log(data.result, "hi here is dfata");
      if (data) {
        products.value = data.result._value.products.edges.map((edges) => ({
          name: edges.node.name,
          img: edges.node.image.link,
        }));
        console.log(products.value, "hi here is object");
      }
    };
    onMounted(() => {
      fetchData();
    });
    return {
      modules: [EffectCards],
      products,
    };
  },
};
</script>

<style scoped>
.img {
  background-color: transparent;
}

.swiper {
  width: 240px;
  height: 320px;
  background: none !important;
}
.swiper-slide-shadow {
  background: none;
}
.swiper-3d .swiper-slide-shadow {
  background: none !important;
}

.swiper-cards {
  border: none;
  background: none;
}
.swiper-slide-shadow .swiper-slide-shadow-cards{
  background: none;

}
.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  font-weight: bold;
}
</style>
