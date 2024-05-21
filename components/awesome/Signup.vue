<template>
  <AwesomeWelcome name="REGISTER  " />
  <div class="signup-container">
    <form @submit.prevent="handleSignup" class="signup-form">
      <div class="form-group">
        <input
          v-model="username"
          placeholder="Username"
          required
          class="form-control"
          />
      </div>
      <div class="form-group">
        <input
          v-model="password"
          type="password"
          placeholder="Password"
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
          required
          class="form-control"
        />
      </div>
      <div class="grid gap-4">
        <button type="submit" class="btn btn-primary" :disabled="isLoading">
          Sign Up
        </button>
      </div>
    </form>
  </div>
</template>

<script>
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
  border: 1px solid rgb(0, 0, 0);
  border-radius: 5px;
  background-color: #000000;
  color: #ff0000;
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
  border: 1px solid rgb(129, 0, 0);
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
  background-color: rgb(161, 5, 5);
  cursor: not-allowed;
}

.error-message {
  margin-top: 10px;
  color: #d50000;
  font-size: 14px;
}
</style>
