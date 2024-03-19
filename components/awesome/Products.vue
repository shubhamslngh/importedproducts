<template>
  <div class="box" background-color-black>
    <div id="wrapperSwiper" class="div lg:w-[200vw] md:w-[200vw] sm:w-[100vw]">
      <div id="gridWrapper" class="grid transition-all duration-200">
        <div
          v-for="(product, index)  in caseproducts"
          :key="index"
          class="swiper-slide transition-[width] duration-200 ease-in-out"
          :id="product.model"
          @click="getDetails(product.id, product.id2, product.model)"
        >
          <img
            :src="product.bgimg"
            alt="Product Image"
            class="transition-all ease-in-out"
          />
          <!-- {{ console.log("here is the img", product.bgimg) }} -->

          <div class="product-info">
            <h3 class="">
              {{ product.model }}
            </h3>
            <!-- <p>{{ product.description }}</p> -->
          </div>
        </div>
        {{
          console.log("new div", $wordpressStore.productDetails.length !== 0)
        }}
        <div
          v-if="$wordpressStore.productDetails.length !== 0"
          class="w-[70vw] mx-auto"
        >
          <div class="product-card">
            <div class="product-image"></div>
            <div class="product-details">
              <div class="flex">
                <div
                  v-for="(color, index) in $wordpressStore.productDetails"
                  :key="index"
                  class="color-swatch transition-all ease-in-out bg-no-repeat"
                  :style="{ backgroundImage: `url(${color.bgimg})` }"
                  @click="selectColor(color.bgimg, color.colorHash)"
                ></div>
              </div>
              {{ $wordpressStore.productDetails[0].color }}
              {{ console.log("COLOR", $wordpressStore.selectedProduct) }}
              <p class="py-4">
                Great product title for a great product and all of the extra
                things a product might need to make it fill an entire card.
              </p>
              <button
                type="button"
                id="buy"
                class="btn rounded-xl border-[1px] w-[150px] h-[50px] border-gray-800 hover:bg-white active:bg-white"
                :style="{
                  backgroundColor: `${$wordpressStore.selectedProduct}`,
                }"
              >
                Buy Now
              </button>
            </div>
          </div>
          <div class="description product"></div>
        </div>
      </div>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, defineProps } from "vue";
const { $wordpressStore } = useNuxtApp();
import Swiper from "swiper";
const props = defineProps(["caseproducts"]);
var selectedColorHash = "";
// console.log("here is the img", caseproducts);
const initializeSwiper = () => {
  const swiper = new Swiper(".swiper", {
    slidesPerView: 5,
    spaceBetween: 40,
    autoplay: { delay: 2500, disableOnInteraction: false },
    direction: getDirection(),
    Pagination: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // Expose the swiper instance if needed
  return swiper;
};

const handleResize = () => {
  swiper.value.changeDirection(getDirection());
};

const getDirection = () => {
  const windowWidth = window.innerWidth;
  return windowWidth <= 760 ? "vertical" : "horizontal";
};

const swiper = ref(null);
const runDetailsAnimations = (id, id2, model) => {
  console.log("get vals", $wordpressStore.productDetails);
  var swiperSlides = [];
  swiperSlides = document.getElementsByClassName("swiper-slide");

  console.log(swiperSlides, "colorHAsh");
  for (let i = 0; i < swiperSlides.length; i++) {
    console.log(
      swiperSlides[i].lastChild.firstChild.innerText,
      swiperSlides[i].firstChild
    );

    if (i !== 0) {
      for (let i = 1; i < swiperSlides.length; i++) {
        console.log(swiperSlides[i].id, "color id", model);
        if (swiperSlides[i].id == model) {
          $wordpressStore.selectedProduct = i;
          swiperSlides[0].firstChild.src = swiperSlides[i].firstChild.src;
          // document.getElementById("btn").style.backgroundColor =
          //   $wordpressStore.productDetails[i].colorHash;
          swiperSlides[0].lastChild.firstChild.innerText =
            swiperSlides[i].lastChild.firstChild.innerText;
        }
        swiperSlides[i].firstChild.src = swiperSlides[i].firstChild.src;
      }

      // swiperSlides[i].
      swiperSlides[i].style.display = "none"; //none display
      // swiperSlides[i].style.display = "none"; //none display
    }
  }
  let gridWrapper = document.getElementById("gridWrapper");
  gridWrapper.classList.remove("lg:grid-cols-8");
  gridWrapper.classList.add("lg:grid-cols-3");
  swiperSlides[0].style.width = "500px";
  document.getElementById("wrapperSwiper").style.width = "100vw";
};

async function getDetails(deviceId, deviceId2, model) {
  console.log("ids", deviceId, deviceId2);
  await $wordpressStore.fetchDetails(deviceId, deviceId2);
  runDetailsAnimations(deviceId, null, model);
}
const selectColor = (selectedColor, selectedHash) => {
  var swiperSlides = [];
  swiperSlides = document.getElementsByClassName("swiper-slide");
  console.log("Selected Color:", selectedColor);
  console.log("selectedHash", selectedHash);
  // for (let i = productDetails; i < productDetails; i++) {
  $wordpressStore.selectedProduct = selectedHash;
  swiperSlides[0].firstChild.src = selectedColor;
  // }
};
onMounted(() => {
  swiper.value = initializeSwiper();

  window.addEventListener("resize", handleResize);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", handleResize);
});
</script>

<style>
.color-swatch {
  width: 4rem;
  height: 4rem;
  display: block;
  cursor: pointer;
  background-size: contain;
}
/* Product Card Styling */
.product-card {
  background-color: #8dd1d1;
  max-width: auto;
  min-height: aito;
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 150px;
  box-shadow: 8px 12px 30px var(--shadow-color);
  color: #919495;
  font-weight: normal;
  text-align: left;
  font-size: var(--font-size);
  position: relative;
}

/* Product Details Styling */
.product-details {
  width: 100%;
  float: left;
  height: 100%;
  padding: 30px;
}

.product-details h1 {
  color: #333;
  font-family: var(--cursive-font);
  margin-bottom: 35px;
}

.product-details button {
  width: 150px;
  height: 50px;
  margin-top: 20px;
  background-color: var(--button-color);
  border-radius: 0;
  color: rgb(0, 0, 0);
  box-shadow: 2px 2px 7px var(--button-shadow-color);
}

/* .product-details button:hover,
.product-details button:active,
.product-details button:focus {
  color: black;

  background-color: lightblue;
} */

/* Responsive Styling */
@media (max-width: 700px) {
  .product-card {
    margin-left: 20px;
    margin-right: 20px;
  }
}

@media (max-width: 540px) {
  .product-card {
    overflow: hidden;
    margin-bottom: 50px;
  }

  .product-details {
    width: 60%;
    z-index: 1;
  }

  .product-image {
    width: 100%;
    left: 40%;
    top: -50px;
  }
}

@media (max-width: 440px) {
  .product-details {
    width: 65%;
  }
}

@media (max-width: 365px) {
  .product-details {
    width: 80%;
    position: relative;
    color: #333;
    background-color: rgba(255, 255, 255, 0.7);
  }
}
.box {
  width: 100%;
  height: 50%;
}
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.swiper {
  width: 100%;
  height: 80%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: rgba(236, 0, 0, 0);
  display: block;
  justify-content: contain;
  align-items: center;
}

.product-info {
  padding: 10px;
}

@media (max-width: 760px) {
  .swiper-button-next {
    right: 20px;
    transform: rotate(90deg);
  }

  .swiper-button-prev {
    left: 20px;
    transform: rotate(90deg);
  }
}
.swiper-wrapper {
  background-color: transparent;
}
</style>
