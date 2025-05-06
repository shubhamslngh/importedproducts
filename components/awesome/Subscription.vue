<template>
  <section class="relative">
    <div
      class=" mx-auto relative z-[-1] bg-auto hover: bg-origin-border p-2 bg-center mt-0 h-64 md:h-96 mb-20 lg:h-120"
      style="
        background-image: url(&quot;https://importedproducts.in/wp-content/uploads/2024/02/pexels-darya-sannikova-2927585-scaled.jpg&quot;);
      "
    >
      <div
        class="mx-auto md:size-auto backdrop-blur-sm absolute inset-0 flex justify-center items-center"
      >
        <AwesomeWelcome name="Digital Subscriptions " />
      </div>
    </div>
  </section>

  <div>
    <!-- {{ console.log(subscriptions, "value in html") }} -->
  </div>
  <div v-if="data"
    class="mx-auto grid sm:grid-cols-1 grid-row-2 lg:grid-cols-3 md:grid-cols-2 gap-y-10 max-h-fit gap-x-2 mb-2"
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
  <div v-else>
    loading .  .  .
  </div>
</template>

<script setup>
const props = defineProps(["subscriptions"]);
import { ref } from "vue";
import gql from "graphql-tag";
import AwesomeForm from "./Form.vue";
const subsCards = ref([]);
const clickedIndex = ref(null);
const formIndex = ref(null);
const query = gql`
  query MyQuery2 {
    variableProduct(id: "8192", idType: DATABASE_ID) {
      id
      variations(first: 10) {
        edges {
          node {
            id
            name
            image {
              link
            }
          }
        }
      }
    }
  }
`;
const data = await useAsyncQuery(query);
if (data) {
  subsCards.value = data;
}
console.log(data, "graphsubscription");
const toggleForm = (index) => {
  formIndex.value = formIndex.value === index ? null : index;
};
</script>

<style>
.card {
  width: auto;
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
  margin-top: 25%;
  color: rgb(0, 0, 0) mportant;
}
#card-ZEE5:hover .card-description {
  margin-top: 25%;
  color: black !important;
}

#card-JIOCINEMA:hover {
  background-color: #000000 !important;
  color: #ffffff !important;
  background-repeat: no-repeat;
  /* background-image: url("https://importedproducts.in/wp-content/uploads/2024/02/jc_logo_v2.svg"); */
  transition: background-image 1.9s ease-in-out;
}
#card-JIOCINEMA {
  color: #f6f6f6 !important;
  background-repeat: no-repeat;
}
#card-JIOCINEMA .card-premium {
  margin-top: 40%;
}
#card-JIOCINEMA .card-description {
  visibility: hidden;
}
#card-Hotstar:hover {
  background-color: #01147c !important;
  color: rgb(254, 245, 245) !important;
  background-size: 50% !important;
}
#card-Hotstar {
  background-size: 40% !important;
}
#card-Hotstar .card-premium {
  margin-top: 30%;
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
