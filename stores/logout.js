import { useAuthStore } from '~/stores/auth';

async function logoutHandler(req, res) {
  const authStore = useAuthStore();
  authStore.logout();

  return res.status(200).json({ success: true });
}

export default logoutHandler;
