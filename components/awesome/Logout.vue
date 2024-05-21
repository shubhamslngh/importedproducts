<template>
  <div>
    <button @click="handleLogout">Logout</button>
  </div>
</template>

<script setup>
import { useAuthStore } from '~/stores/auth';

const authStore = useAuthStore();

const handleLogout = () => {
  authStore.logout();
  window.location.href = '/login'; // Redirect to login page or any other page
};
</script>
