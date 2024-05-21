// middleware/auth.js
import { useAuthStore } from '~/stores/auth';

export default function ({ store, redirect }) {
  const authStore = useAuthStore();
  if (!authStore.isAuthenticated) {
    return redirect('/login');
  }
}
