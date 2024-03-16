<template>
  <section class="relative">
    <!-- Background Image Section -->
    <div
      class="bg-auto hover: bg-origin-border p-2 bg-center mt-6 h-64 md:h-96 mb-20 lg:h-120"
      style="
        background-image: url(&quot;https://importedproducts.in/wp-content/uploads/2024/02/pexels-darya-sannikova-2927585-scaled.jpg&quot;);
      "
    >
      <div
        class="xl:text-6xl backdrop-blur-sm absolute inset-0 flex justify-center items-center"
      >
        <h2
          class="h-14 antialiased md:text-blue-300 font-sans font-semibold mb-20 lg:text-7xl font-bold"
        >
          Get the Cheapest Digital-Subscriptions.
        </h2>
      </div>
    </div>
  </section>

  <div>
    {{ console.log(subscriptions, "value in html") }}
  </div>
  <div></div>
  <div
    class="mx-auto grid grid-cols- grid-row-2 lg:grid-cols-3 md:grid-cols-2 gap-y-10 max-h-fit gap-x-10 mb-5"
  >
    <div v-for="(subscription, index) in subscriptions" :key="index">
      <div
        :id="`card-${subscription.Name}`"
        class="card w-[350px] shadow-2xl text-justify h-[200px] overflow-hidden bg-contain bg-center bg-no-repeat rounded-[5px]"
        @click="toggleForm(index)"
        :class="{ clicked: clickedIndex === index }"
        :style="{
          backgroundImage: `url(${subscription.bgimg})`,
          backgroundColor: subscription.color,
        }"
      >
        <div class="card-content" v-show="clickedIndex !== index">
          <div class="card-amount">
            <span class="card-amount-main">{{ subscription.Price }} </span>
            <span class="card-duration"> {{ subscription.Duration }}</span>
          </div>

          <div class="card-premium">
            {{ subscription.PlanType }}
          </div>

          <div class="card-description">
            {{ subscription.AdditionalFeatures }}
          </div>
        </div>
        <!-- <div v-show="formIndex === index">
          <div class="form-overlay"></div>
          <AwesomeForm :subscription="subscription" />
        </div> -->
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps(["subscriptions"]);
import { ref } from "vue";
import AwesomeForm from "./Form.vue";
const clickedIndex = ref(null);
const formIndex = ref(null);

const toggleForm = (index) => {
  formIndex.value = formIndex.value === index ? null : index;
};
</script>
<style>
.card {
  width: 500px;
  text-align: center;
  height: 250px;
  border-radius: 10px;
  overflow: hidden;
  transition:
    transform 0.3s ease-in-out,
    background-size 1s ease-in-out;
  background-color: white;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}

.card:hover {
  text-align: center;
  opacity: 1;
  transform: scale(1.1);
  background-size: 110%;
  transition:
    transform 1s ease-in-out,
    background-size 1s ease-in-out,
    background-image 1s ease-in-out;
}

.card-content:hover {
  text-align: center;
  opacity: 1;
}
.card.clicked {
  transform: scale(1.1) !important;
}

.card-content {
  text-align: center;
  opacity: 0;
  padding: 20px;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 0);
  /* Semi-transparent white background for better readability */
}

.card-amount {
  font-size: 28px;
  text-align: center;
  font-weight: bold;
  display: block;
  align-items: baseline;
}

.card-amount-main {
  text-align: center;
  margin-top: 10%;
  margin-right: 5px;
}

.card-amount-sub {
  text-align: center;
  font-size: 18px;
}

.card-duration {
  text-align: center;
  font-size: 16px;
  font-weight: 8 00;
}

.card-premium {
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  margin-top: 25px;
}

.card-description {
  text-align: bottom;
  font-size: 17px;

  /* color: #555; */
  margin-top: 10px;
}
#card-Spotify:hover {
  background-color: lightblue !important;
  background-image: url("https://importedproducts.in/wp-content/uploads/2024/02/5ece4ff9123d6d0004ce5f89.png") !important;
}
#card-Spotify:hover .card-description {
  margin-top: 50px;
  color: #000000 !important;
}
#card-Spotify:hover .card-amount-main {
  margin-top: 50px;
  color: #17b90e !important;
}
#card-Spotify:hover .card-premium {
  color: #17b90e00 !important;
}
#card-Netflix:hover {
  background-color: #ffffff !important;
  color: rgb(0, 0, 0);
  font-size: 165% !important;
  background-size: 100%;
}
#card-Netflix {
  background-size: 80%;
}
#card-Netflix:hover .card-premium {
  margin-top: 18%;
  font-size: 60px !important;
}

#card-:hover {
  background-color: #fafafa !important;
}
#card-AppleMusic:hover {
  background-color: #fafafa !important;
  color: rgb(0, 0, 0);
  background-size: 90% !important;
}
#card-AppleMusic:hover .card-premium {
  margin-top: 30%;
  color: #fc0065 !important;
}
#card-AppleMusic {
  background-size: 100% !important;
}
#card-AppleOne:hover {
  background-color: #fafafa !important;
  color: whitesmoke !important;
  background-size: 100%;
}
#card-AppleOne {
  background-size: 80%;
}
#card-ZEE5:hover {
  background-color: #d0f006 !important;
  color: #000000 !important;
  background-size: 80% !important;
}
#card-ZEE5:hover .card-premium {
  margin-top: 18%;
  color: rgb(0, 0, 0) mportant;
}
#card-ZEE5:hover .card-description {
  margin-top: 25%;
  color: rgba(13, 0, 0, 0) !important;
}

#card-JIOCINEMA:hover {
  background-color: #000000 !important;
  color: #ffffff !important;
  background-repeat: repeat;
  transition: background-repeat 1.9s ease-in-out;
}
#card-JIOCINEMA {
  color: #f6f6f6 !important;
  background-repeat: no-repeat;
}
#card-JIOCINEMA .card-premium {
  margin-top: 20%;
}
#card-JIOCINEMA .card-description {
  visibility: hidden;
}
#card-Hotstar:hover {
  background-color: #01147c !important;
  color: white !important;
  background-size: 50% !important;
}
#card-Hotstar {
  background-size: 40% !important;
}
#card-Hotstar .card-premium {
  margin-top: 20%;
  visibility: hidden;
}
#card-Youtube:hover {
  background-color: rgb(170, 7, 7) !important;
}
#card-Youtube:hover .card-premium {
  margin-top: 20%;
  color: #32323200 !important;
}
#card-Youtube:hover .card-description {
  font-weight: 800;
  color: black !important;
}
#card-Youtube:hover .card-amount-main {
  font-weight: 800;
  color: black !important;
}
</style>
