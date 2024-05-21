// stores/auth.js
import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: null,
    refreshToken: null,
  }),
  actions: {
    setUser(user) {
      this.user = user;
      sessionStorage.setItem('username', user);
    },
    setToken(token) {
      this.token = token;
      sessionStorage.setItem('authToken', token);
    },
    setRToken(refreshToken) {
      this.refreshToken = refreshToken;
      sessionStorage.setItem('refreshToken', refreshToken);
    },
    initialize() {
      // Retrieve authentication state from sessionStorage
      const storedUser = sessionStorage.getItem('username');
      const storedToken = sessionStorage.getItem('authToken');
      const storedRefreshToken = sessionStorage.getItem('refreshToken');

      // Set store state
      this.user = storedUser;
      this.token = storedToken;
      this.refreshToken = storedRefreshToken;
    },
    logout() {
      // Clear store state
      this.user = null;
      this.token = null;
      this.refreshToken = null;

      // Remove stored data from sessionStorage
      sessionStorage.removeItem('username');
      sessionStorage.removeItem('authToken');
      sessionStorage.removeItem('refreshToken');
    }
  },
  getters: {
    isAuthenticated: (state) => !!state.user,
  },
});
