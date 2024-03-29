<script setup>
import { onMounted, onBeforeUnmount } from "vue";

/* eslint-disable */
/* eslint-env es6 */

const parallaxScroll = () => {
  const gridRef = document.querySelector(".parallax-scroll");
  const scrollYProgress =
    window.scrollY /
    (document.documentElement.scrollHeight - window.innerHeight);
  const translateFirst = function (scrollYProgress) {
    return `${scrollYProgress * -200}px`;
  };
  const translateSecond = function (scrollYProgress) {
    return `${scrollYProgress * 200}px`;
  };
  const translateThird = function (scrollYProgress) {
    return `${scrollYProgress * -200}px`;
  };

  const products = [
    {
      name: "Product 1",
      image:
        "https://importedproducts.in/wp-content/uploads/2024/02/MQUD3_AV4-fococlipping-HD.png",
    },
    {
      name: "Product 2",
      image:
        "https://importedproducts.in/wp-content/uploads/2024/01/MT1J3-fococlipping-HD.png",
    },
    {
      name: "Product 3",
      image:
        "https://importedproducts.in/wp-content/uploads/2023/08/iphone15-pro-Photoroom.png-Photoroom.png",
    },
    {
      name: "Product 4",
      image: "https://importedproducts.in/wp-content/uploads/2023/08/144.png",
    },
    {
      name: "Product 5",
      image:
        "https://importedproducts.in/wp-content/uploads/2023/08/iphone-15_prev_ui.png",
    },
    {
      name: "Product 6",
      image:
        "https://importedproducts.in/wp-content/uploads/2023/08/e4a419f578335e928ece69df89cf08fcb81b8ea2.png",
    },
  ];

  const third = Math.ceil(products.length / 3);
  const firstPart = products.slice(0, third);
  const secondPart = products.slice(third, 2 * third);
  const thirdPart = products.slice(2 * third);

  const grid = document.createElement("div");
  grid.className = "grid-container";

  const createGridItems = (part, translateFunction) => {
    const gridElement = document.createElement("div");
    gridElement.className = "grid";
    part.forEach((product, idx) => {
      const motionDiv = document.createElement("div");
      motionDiv.style.transform = `translateY(${translateFunction(
        scrollYProgress
      )})`;
      motionDiv.className = "grid-item";
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <img src="${product.image}" alt="Product Image">
        <h3>${product.name}</h3>
      `;
      motionDiv.appendChild(card);
      gridElement.appendChild(motionDiv);
    });
    return gridElement;
  };

  grid.appendChild(createGridItems(firstPart, translateFirst));
  grid.appendChild(createGridItems(secondPart, translateSecond));
  grid.appendChild(createGridItems(thirdPart, translateThird));

  gridRef.innerHTML = ""; // Clear previous content
  gridRef.appendChild(grid);
};

onMounted(() => {
  parallaxScroll();
  window.addEventListener("scroll", parallaxScroll);
});
const updateCardBackground = () => {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.style.backgroundColor = "transparent";
    card.style.img = "cover";
  });
};

onMounted(() => {
  updateCardBackground();
});
onBeforeUnmount(() => {
  window.removeEventListener("scroll", parallaxScroll);
});
const updateCardImage = () => {
  const cards = document.querySelectorAll(".card img");
  cards.forEach((img) => {
    img.style.maxWidth = "100%"; // Ensure the image does not exceed the width of its container
    img.style.maxHeight = "100%"; // Ensure the image does not exceed the height of its container
    img.style.width = "auto"; // Allow the image to scale proportionally
    img.style.height = "auto"; // Allow the image to scale proportionally
    img.style.borderRadius = "10px"; // Apply rounded corners to the image
    img.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.1)"; // Add a subtle shadow effect
  });
};

onMounted(() => {
  updateCardImage();
});
</script>

<template>
  <div id="parallaxScroll" class="parallax-scroll "></div>
</template>

<style lang="scss" scoped>
.parallax-scroll {
  height: 100vh; /* Fill the entire height of the viewport */
  overflow-y: auto;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(
    3,
    1fr
  ); /* Change to your desired number of columns */
  gap: 10px;
  max-width: 100vw; /* Fill the entire width of the viewport */
  margin: auto;
  padding: 40px 10px;
}
.grid-container > .grid {
  display: flex;
  gap: 10px;
}
.grid-item {
  height: 80px;
  width: 100%;
  object-fit: cover;
  object-position: left top;
  border-radius: 10px;
  margin: 0;
  padding: 0;
}
</style>
