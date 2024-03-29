<template>
  <div class="login-container">
    <form @submit.prevent="handleSubmit" class="login-form">
      <div class="form-group">
        <input
          type="text"
          v-model="username"
          placeholder="Username or Email"
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
          Sign in
        </button>
        <button type="submit" :disabled="isLoading" class="btn btn-primary">
          Sign Up
        </button>

        <div v-if="errors" class="error-message">{{ errors }}</div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      isLoading: false,
      errors: null,
    };
  },
  methods: {
    async handleSubmit() {
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
        const { authToken, refreshToken, user } = data.login;
        localStorage.setItem("authToken", authToken);
        localStorage.setItem("refreshToken", refreshToken);
        console.log("Auth Token:", authToken);
        console.log("Refresh Token:", refreshToken);
      } catch (error) {
        console.error("Login failed:", error.message);
        this.errors = error.message;
      } finally {
        this.isLoading = false;
      }
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
  background-color: #ccc;
  cursor: not-allowed;
}

.error-message {
  margin-top: 10px;
  color: #d50000;
  font-size: 14px;
}
</style>
