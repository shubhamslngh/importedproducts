<template>
  <AwesomeWelcome name="REGISTER  " />
  <div class="signup-container">
    <form @submit.prevent="handleSignup" class="signup-form">
      <div class="form-group">
        <input
          v-model="username"
          placeholder="Username"
          autocomplete="email"
          required
          class="form-control"
        />
      </div>
      <div class="form-group">
        <input
          v-model="password"
          type="password"
          placeholder="Password"
          autocomplete="current-password"
          class="form-control"
          required
        />
      </div>
      <div class="form-group">
        <input
          v-model="firstName"
          placeholder="First Name"
          required
          class="form-control"
        />
      </div>
      <div class="form-group">
        <input
          v-model="lastName"
          placeholder="Last Name"
          required
          class="form-control"
        />
      </div>
      <div class="form-group">
        <input
          v-model="email"
          type="email"
          placeholder="Email"
          autocomplete="email"
          required
          class="form-control"
        />
      </div>
      <div class="grid gap-4">
        <button type="submit" class="btn btn-primary" :disabled="loading">
          Register
        </button>
      </div>
      <div v-if="error" class="error-message">
        {{ error.message }}
      </div>
    </form>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import { useMutation } from "@vue/apollo-composable";
import { signup } from "../../utils/cart";

export default {
  name: "SignupForm",
  setup() {
    const { mutate: createUser, loading, error } = useMutation(signup);

    const state = reactive({
      username: "",
      password: "",
      firstName: "",
      lastName: "",
      email: "",
    });

    const handleSignup = async () => {
      try {
        const response = await createUser({ variables: { ...state } });
        console.log("Signup successful", response);
        // Handle post-signup logic (e.g., redirect or display success message)
      } catch (err) {
        console.error("Error signing up:", err);
        // Handle errors (e.g., display error message)
      }
    };

    return { ...toRefs(state), handleSignup, loading, error };
  },
};
</script>

<style scoped>
.signup-container {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #000;
  border-radius: 5px;
  background-color: #000;
  color: #fff;
}

.signup-form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 20px;
}

.form-control {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #810000;
  border-radius: 5px;
}

.btn {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #4285f4;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.btn:disabled {
  background-color: #a10505;
  cursor: not-allowed;
}

.error-message {
  margin-top: 10px;
  color: #d50000;
  font-size: 14px;
}
</style>
