<script setup>

useHead({ titleTemplate: "", title: "home" });
const authStore = useAuthStore();
console.log(authStore.token);
const user = authStore.user;
const { awesome } = useAppConfig();
definePageMeta({ layout: "page" });

</script>
<template>
       
  <div><h1 v-if="user">Welcome, {{ user }}</h1><AwesomeLout class="z-index:100" v-if="user"/>
    <AwesomeLamp />
    <!-- <AwesomeCardstest /> -->
    <!-- {{ console.log(user, "username") }} -->
    
    <div v-if="user">
      <div class="text-green">
        
      </div>
      <AwesomeWelcome
        name="Namma Bussiness  "
        :with-alert="true"
        class="min-h-[50vh] "
      />
    </div>
    <AwesomeWelcome
      v-else
      name="IMPORTED PRODUCTS "
      :with-alert="true"
      class="min-h-[50vh] "
    />
    <AwesomeParallax/>
    
  </div>
</template>
<style></style>
