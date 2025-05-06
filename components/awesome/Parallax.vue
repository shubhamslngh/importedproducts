<template>
  <h1 class="text-6xl font-extrabold text-bold text-center mt-5 dark:text-white light:text-black">
    Best Products
  </h1>

  <div class="flex min-h-[100vh] max-w-min " ref="flexContainer">
    <div
      class="flex-item"
      v-for="product in products"
      :key="product.id"
      :style="product.style"
    >
      <img :src="product.imageUrl" :alt="product.name" class="product-image" />
      <div onclick="<AwesomeCases/>" class="flex-item">
        <AwesomeWelcome
          :style="{ maxwidth: '10vw', height: '5vh', fontSize: '12px', scale: .3 }"
          :name="product.name"
          :startColor="['green','grey','blue']"
          :endColor="['black','red','white']"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          id: 1,
          name: "IPhone 14 ",
          imageUrl:
            "https://importedproducts.in/wp-content/uploads/2024/04/iphone-14-finish-select-202209-6-7inch-product-red_AV1_GEO_EMEA-Photoroom.png-Photoroom.png",
          initialOffsetY: 0,
          style: {},
        },
        {
          id: 2,
          name: "IPhone 14 Plus ",
          imageUrl:
            "https://importedproducts.in/wp-content/uploads/2024/04/iphone-14-finish-select-202209-6-1inch-blue_AV1_GEO_EMEA-Photoroom.png-Photoroom.png",
          initialOffsetY: 0,
          style: {},
        },
        {
          id: 3,
          name: "IPhone 14 Pro ",
          imageUrl:
            "https://importedproducts.in/wp-content/uploads/2024/04/iphone-14-pro-finish-select-202209-6-7inch_AV2_GEO_EMEA-Photoroom.png-Photoroom-2.png",
          initialOffsetY: 0,
          style: {},
        },
        {
          id: 4,
          name: "IPhone 15 ",
          imageUrl:
            "https://importedproducts.in/wp-content/uploads/2024/04/iphone-15-finish-select-202309-6-1inch-blue_AV1_GEO_EMEA-Photoroom.png-Photoroom.png",
          initialOffsetY: 0,
          style: {},
        },
        {
          id: 5,
          name: "IPhone 15 Pro ",
          imageUrl:
            "https://importedproducts.in/wp-content/uploads/2024/04/iphone-15-pro-finish-select-202309-6-1inch_AV2_GEO_EMEA-Photoroom.png-Photoroom.png",
          initialOffsetY: 0,
          style: {},
        },
      ],
    };
  },
  mounted() {
    if (this.$refs.flexContainer) {
      window.addEventListener("scroll", this.handleScroll);
      this.handleScroll();
    }
  },
  beforeDestroy() {
    if (this.$refs.flexContainer) {
      window.removeEventListener("scroll", this.handleScroll);
    }
  },
  methods: {
    handleScroll() {
      if (!this.$refs.flexContainer) return;

      const scrollY = window.scrollY;
      const flexContainerRect =
        this.$refs.flexContainer.getBoundingClientRect();

      const startEffectScrollY =
        flexContainerRect.top - window.innerHeight + 100;

      const scrollProgress = Math.min(
        1,
        Math.max(
          0,
          (scrollY - startEffectScrollY) /
            (window.innerHeight + this.$refs.flexContainer.clientHeight)
        )
      );

      this.products.forEach((product, index) => {
        const offsetY = scrollProgress * (index * 100);
        product.style = {
          transform: `translateY(${offsetY}px)`,
          zIndex: `${10 - index}`,
        };
      });
    },
  },
};
</script>

<style scoped>
.flex-container {
  min-height: 100vh;
  display: flex;
  flex-wrap: nowrap; /* Prevent wrapping */
  align-items: center;
  justify-content: space-between;
  padding: 50px;
  perspective: 1000px;
  overflow-x: auto; /* Enable horizontal scrolling if items overflow */
}

.flex-item {
  flex: 1 1 auto;
  margin: 10px;
  transition: transform 1s, opacity 1s;
  will-change: transform, opacity;
  min-width: 150px; /* Ensure that items have a minimum size */
}

.product-image {
  width: auto;
  height: auto;
  max-width: 200px; /* Set max size */
  max-height: 200px; /* Set max size */
  scale: 4.3;
}

@media (max-width: 768px) {
  .flex-container {
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 20px;
    overflow-x: auto; /* Allow scrolling on smaller screens */
  }

  .flex-item {
    flex: 0 0 auto; /* Ensure items remain on the same line */
    margin: 5px;
  }

  .product-image {
    max-width: 150px;
    max-height: 150px;
    scale: 1.5;
  }
}

@media (max-width: 480px) {
  .flex-item {
    flex: 0 0 auto; /* Ensure items remain on the same line */
  }

  .product-image {
    max-width: 100px;
    max-height: 100px;
    scale: 1;
  }
}
</style>
