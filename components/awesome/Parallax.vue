<template>
 
  <div class="flex-container" ref="flexContainer">
    
    <div
      class="flex-item"
      v-for="product in products"
      :key="product.id"
      :style="product.style"
    >
      <img :src="product.imageUrl" :alt="product.name" class="product-image " />
       <div class="flex-item z-20">
     <AwesomeWelcome
      :style="{ width: '100px', height: '5px', fontSize: '12px',scale: .3 }"
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
    window.addEventListener("scroll", this.handleScroll);
    this.handleScroll();
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const scrollY = window.scrollY;
      const flexContainerRect =
        this.$refs.flexContainer.getBoundingClientRect();

      // The point at which the scroll effect should start
      const startEffectScrollY =
        flexContainerRect.top - window.innerHeight + 100; // Adjust the offset to start the effect

      // Determine how much the user has scrolled within the effect range
      const scrollProgress = Math.min(
        1,
        Math.max(
          0,
          (scrollY - startEffectScrollY) /
            (window.innerHeight + this.$refs.flexContainer.clientHeight)
        )
      );

      // Apply a style transformation to align items into a single line
      this.products.forEach((product, index) => {
        const offsetY = (2 - scrollProgress) * (index * 100); // This will space out the items more as they move up
        product.style = {
          transform: `translateY(${offsetY}px)`,

          // opacity: `${1 - 0.2 * index * scrollProgress}`,
          zIndex: `${100 - index}`, // Ensure items stack correctly during transition
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
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-around;
  padding: 50px;
  perspective: 1000px; 
}

.flex-item {
  transition:
    transform 1s,
    opacity 1s;
  will-change: transform, opacity;
}

.product-image {
  width: auto;
  height: auto;
  max-width: 200px; /* Adjust to suit your needs */
  max-height: 200px; /* Adjust to suit your needs */
  scale: 4.3;
}

</style>
