<template>
  <div class="login-container">
    <form @submit.prevent="handleSubmit" class="login-form">
      <div class="form-group">
        <input
          type="text"
          v-model="username"
          placeholder="Username or Email"
          autocomplete="email"
          class="form-control"
        />
      </div>
      <div class="form-group">
        <input
          type="password"
          v-model="password"
          autocomplete="current-password"
          placeholder="Password"
          class="form-control"
        />
      </div>

      <div class="grid gap-4">
        <button
          type="submit"
          @click="signin"
          :disabled="isLoading"
          class="btn btn-primary"
        >
          Sign in
        </button>
        
        <div v-if="errors" class="error-message">{{ errors }}</div>
      </div>
    </form>
    <div class="grid mt-4 gap-4">
      <h1 class="text-center text-2xl">or</h1>
      <button @click="showSignUp" class="btn btn-secondary">New User</button>
    </div>
  </div>
  <div ref="signupSection" class="mx-auto mt-6"> 
    <AwesomeSignup v-if="isSignUpVisible" />
  </div>
</template>

<script>
import { useAuthStore } from "../../stores/auth";
import { nextTick } from "vue";

export default {
  middleware: 'authroute',
  data() {
    return {
      isSignUpVisible: false,
      username: "",
      password: "",
      isLoading: false,
      errors: null,
    };
  },

  methods: {
    async signin() {
      this.isLoading = true;
      try {
        const { data } = await this.$apollo.mutate({
          mutation: gql`
            mutation Login($input: LoginInput!) {
              login(input: $input) {
                authToken
                refreshToken
                user {
                  id
                  username
                  email
                }
              }
            }
          `,
          variables: {
            input: {
              provider: "PASSWORD",
              credentials: {
                username: this.username,
                password: this.password,
              },
            },
          },
        });
        const authStore = useAuthStore();

        const { authToken, refreshToken, user } = data.login;
        sessionStorage.setItem("authToken", authToken);
        sessionStorage.setItem("refreshToken", refreshToken);
        sessionStorage.setItem("user", user.username);
        authStore.setUser(user.username);
        authStore.setToken(authToken);
        authStore.setRToken(refreshToken);
        console.log("Auth Token:", authToken);
        console.log("Refresh Token:", refreshToken);
        console.log(user.username, "user");
        await this.$router.push("/");
      } catch (error) {
        console.error("Login failed:", error.message);
        this.errors = error.message;
      } finally {
        this.isLoading = false;
      }
    },
    showSignUp() {
      this.isSignUpVisible = true;
      this.$nextTick(() => {
        const signupSection = this.$refs.signupSection;
        if (signupSection) {
          signupSection.scrollIntoView({ behavior: 'smooth' });
        }
      });
    },
  },
};
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid rgb(0, 0, 0);
  border-radius: 5px;
  background-color: #000000;
  color: #ff0000;
}

.login-form {
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
  border: 1px solid #ccc;
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
  background-color: rgb(83, 9, 9);
  cursor: not-allowed;
}

.error-message {
  margin-top: 10px;
  color: #d50000;
  font-size: 14px;
}
</style>
