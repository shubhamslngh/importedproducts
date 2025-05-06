<script setup>
import { products } from "~/data/products";
useHead({ titleTemplate: "", title: "home" });
const authStore = useAuthStore();
// console.log(authStore.token);
const user = authStore.user;
const { awesome } = useAppConfig();
definePageMeta({ layout: "page" });
</script>
<template>
  <div>
    <AwesomeLamp />
    <AwesomeIphonecases/>
    <!-- <AwesomeCardstest /> -->
    <!-- {{ console.log(user, "username") }} -->

    <div v-if="user">
      <div class="text-green"></div>
      <AwesomeWelcome
        name="Namma Bussiness  "
        :with-alert="true"
        class="min-h-[50vh]"
      />
    </div>
    <AwesomeWelcome
      v-else
      name="IMPORTED PRODUCTS "
      :with-alert="true"
      class="min-h-[50vh]"
    />
    <AwesomeParallax />
  </div>
</template>
<style></style>
