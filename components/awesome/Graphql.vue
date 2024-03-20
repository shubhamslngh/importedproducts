<template>
  <div class="parallax-scroll"></div>
</template>
<script setup>
import { ref } from "vue";
import gql from "graphql-tag";
import { onMounted, onBeforeUnmount } from "vue";

const parallaxScroll = () => {
  const gridRef = document.querySelector(".parallax-scroll");
  const scrollYProgress =
    window.scrollY /
    (document.documentElement.scrollHeight - window.innerHeight);
  const translateFirst = (scrollYProgress) => `${scrollYProgress * -200}px`;
  const translateSecond = (scrollYProgress) => `${scrollYProgress * 200}px`;
  const translateThird = (scrollYProgress) => `${scrollYProgress * -200}px`;

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

  const grid1 = document.createElement("div");
  grid1.className = "grid";
  firstPart.forEach((product, idx) => {
    const motionDiv = document.createElement("div");
    motionDiv.style.transform = `translateY(${translateFirst(scrollYProgress)})`;
    motionDiv.className = "grid-item";
    const image = new Image();
    image.src = product.image;
    image.alt = "Product Image";
    motionDiv.appendChild(image);
    grid1.appendChild(motionDiv);
  });

  const grid2 = document.createElement("div");
  grid2.className = "grid";
  secondPart.forEach((product, idx) => {
    const motionDiv = document.createElement("div");
    motionDiv.style.transform = `translateY(${translateSecond(scrollYProgress)})`;
    motionDiv.className = "grid-item";
    const image = new Image();
    image.src = product.link;
    image.alt = "Product Image";
    motionDiv.appendChild(image);
    grid2.appendChild(motionDiv);
  });

  const grid3 = document.createElement("div");
  grid3.className = "grid";
  thirdPart.forEach((product, idx) => {
    const motionDiv = document.createElement("div");
    motionDiv.style.transform = `translateY(${translateThird(scrollYProgress)})`;
    motionDiv.className = "grid-item";
    const image = new Image();
    image.src = product.image.link;
    image.alt = "Product Image";
    motionDiv.appendChild(image);
    grid3.appendChild(motionDiv);
  });

  grid.appendChild(grid1);
  grid.appendChild(grid2);
  grid.appendChild(grid3);

  gridRef.appendChild(grid);
};

onMounted(() => {
  parallaxScroll();
  window.addEventListener("scroll", parallaxScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", parallaxScroll);
});
const Data1 = ref([]); // Initialize Data1 as a reactive reference

const query = gql`
  query MyQuery {
    products(where: { category: "cases" }) {
      edges {
        node {
          image {
            link
          }
          name
        }
      }
    }
  }
`;

const { data } = await useAsyncQuery(query);

if (data) {
  // const parsedData = removeTypename(data);
  // console.log(data, "parsed OP ");
  Data1.value = data; // Update Data1 with the parsed data
  console.log(Data1.value, "Graphql data");
}
</script>
