// pages/api/auth/user.js

import { JwtPayload, decode } from 'jsonwebtoken';
import { withApiAuthRequired } from '@auth0/nextjs-auth0'; // If you're using Auth0 for authentication
import { useAuthStore } from '@/store/auth';
import { refreshAuthToken } from '@/utils/auth'; // Implement this function to refresh the authentication token

// Function to check if the authentication token has expired
function isTokenExpired(token) {
  const decodedToken = decode(token);

  if (!decodedToken?.exp) {
    return false;
  }

  // Expiry time is in seconds, but we need milliseconds so we do *1000
  const expiresAt = new Date(decodedToken.exp * 1000);
  const now = new Date();

  return now.getTime() > expiresAt.getTime();
}

async function userHandler(req, res) {
  try {
    // Get the user's session data from Pinia store
    const authStore = useAuthStore();
    const user = authStore.user;

    // If the user is not logged in or doesn't have a refresh token, return an error
    if (!user.isLoggedIn || !user.refreshToken) {
      return res.status(401).json({
        error: 'User is not logged in.',
        user: user.userData,
        isLoggedIn: user.isLoggedIn,
      });
    }

    // If the authentication token is missing or expired, try to refresh it
    if (!user.authToken || isTokenExpired(user.authToken)) {
      try {
        const { authToken, refreshToken, success } = await refreshAuthToken(user.refreshToken);

        // If the refresh token fails or the authentication token is empty, log the user out
        if (!authToken) {
          authStore.logout(); // Clear the user's authentication state in Pinia store
          return res.status(401).json({
            error: 'User is not logged in.',
            user: undefined,
            isLoggedIn: false,
          });
        }

        // Update the user's session with the new authentication token
        authStore.updateAuthToken(authToken);

        return res.status(200).json({
          user: user.userData,
          isLoggedIn: true,
        });
      } catch (error) {
        // Handle errors during token refresh
        authStore.logout(); // Clear the user's authentication state in Pinia store
        return res.status(401).json({
          error: 'User is not logged in.',
          user: undefined,
          isLoggedIn: false,
        });
      }
    }

    // If the authentication token is valid and not expired, return the user's session data
    return res.status(200).json({
      user: user.userData,
      isLoggedIn: true,
    });
  } catch (error) {
    // Handle any other errors
    return res.status(500).json({
      error: 'Internal server error.',
    });
  }
}

export default withApiAuthRequired(userHandler); // If you're using Auth0 for authentication, otherwise remove this line
