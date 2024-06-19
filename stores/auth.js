import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    email: '',
    password: '',
    isAuthenticated: false,
  }),

  actions: {
    setEmail(email) {
      this.email = email;
    },
    setPassword(password) {
      this.password = password;
    },
    setAuthentication(status) {
      this.isAuthenticated = status;
    },
  },
});
