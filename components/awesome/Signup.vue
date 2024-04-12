<template>
  <div class="login-container">
    <form @submit.prevent="handleSignup" class="login-form">
      <div class="form-group">
        <input
          type="text"
          v-model="firstName"
          placeholder="First Name"
          class="form-control"
        />
      </div>
      <div class="form-group">
        <input
          type="text"
          v-model="lastName"
          placeholder="Last Name"
          class="form-control"
        />
      </div>
      <div class="form-group">
        <input
          type="text"
          v-model="username"
          placeholder="Username"
          class="form-control"
        />
      </div>
      <div class="form-group">
        <input
          type="email"
          v-model="email"
          placeholder="Email"
          class="form-control"
        />
      </div>
      <div class="form-group">
        <input
          type="password"
          v-model="password"
          placeholder="Password"
          class="form-control"
        />
      </div>

      <div class="grid gap-4">
        <button type="submit" :disabled="isLoading" class="btn btn-primary">
          Sign Up
        </button>

        <div v-if="errors" class="error-message">{{ errors }}</div>
      </div>
    </form>
  </div>
</template>

<script>
import { useAuthStore } from "../../stores/auth";
import { signup } from "~/../utils/cart";
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      isLoading: false,
      errors: null,
    };
  },
  methods: {
    async handleSignup() {
      let data = ref([]);
      let { mutate: sign, loading } = useMutation(signup);
      try {
        loading = true;
        data = await sign({
          username: this.username,
          lastName: this.lastName,
          firstName: this.firstName,
          email: this.eamil,
          password: this.password,
        });
      } catch (error) {
        console.error("Error Signing Up User :", error);
        loading = false;
      }
      console.log("Sign up form submitted");
      this.firstName = "";
      this.lastName = "";
      this.username = "";
      this.email = "";
      this.password = "";
    },
  },
};
</script>

<style scoped>
/* Add your CSS styles here */
</style>
