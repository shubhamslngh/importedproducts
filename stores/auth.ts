import { defineStore } from 'pinia';

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    user: null as { username: string } | null,
    token: '' as string,
    refreshtoken:'' as string,
  }),

  actions: {
    setUser(user: { username: string }) {
      this.user = user;
    },
    setToken(token: string) {
      this.token = token;
    },
    setRToken(refreshtoken: string) {
      this.refreshtoken = refreshtoken;
    },
  },
});
