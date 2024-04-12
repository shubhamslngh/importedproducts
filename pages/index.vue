<script setup>
useHead({ titleTemplate: "", title: "home" });
const authStore = useAuthStore();
const user = authStore.user;
const { awesome } = useAppConfig();
definePageMeta({ layout: "page" });
if (typeof localStorage !== "undefined") {
  const storedAuth = localStorage.getItem("auth");
  console.log(storedAuth);
} else {
  console.error("localStorage is not available");
}
</script>
<template>
  <div>
    <AwesomeLamp />
    <!-- <AwesomeCardstest /> -->{{ console.log(user, "username") }}
    <div v-if="user">
      <div class="text-green">
        <h1 v-if="user">Welcome, {{ user }}</h1>
      </div>
      <AwesomeWelcome
        name="Welcome Back  "
        :with-alert="true"
        class="min-h-[100vh]"
      />
    </div>
    <AwesomeWelcome
      v-else
      name="IMPORTED PRODUCTS "
      :with-alert="true"
      class="min-h-[100vh]"
    />
  </div>
</template>
<style></style>
