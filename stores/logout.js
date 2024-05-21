import { useAuthStore } from '~/stores/auth';

async function logoutHandler(req, res) {
  // Call the logout method from the auth store to clear authentication state
  const authStore = useAuthStore();
  authStore.logout();

  // Send back a JSON response indicating successful logout
  return res.status(200).json({ success: true });
}

export default logoutHandler;
