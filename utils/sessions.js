import { reactive, provide, inject, ref, watchEffect } from 'vue';
import { useQuery, useMutation } from '@vue/apollo-composable';
import { GetCart, Login, UpdateCustomer } from './graphql';

const initialSession = {
  cart: null,
  customer: null,
};

const SessionSymbol = Symbol();

export function useSession() {
  const session = inject(SessionSymbol);
  if (!session) {
    throw new Error('useSession must be used within a SessionProvider');
  }
  return session;
}
export function provideSession() {
  const state = reactive({
    ...initialSession,
    fetching: false,
  });

  const { result: { data: cartData }, loading: cartLoading } = useQuery(GetCart);
  const { mutate: executeLogin, result: loginResult } = useMutation(Login);
  const { mutate: executeUpdateCustomer, result: updateCustomerResult } = useMutation(UpdateCustomer);

  // Watch for changes in cartData and update state.cart accordingly
  watchEffect(() => {
    if (cartData?.cart) {
      state.cart = cartData.cart;
    }
  });
  console.log("here in provider")

  // Watch for changes in cartData.customer and update state.customer accordingly
  watchEffect(() => {
    if (cartData?.customer) {
      state.customer = cartData.customer;
    }
  });

  // Watch for changes in loginResult and update state.customer accordingly
  watchEffect(() => {
    if (loginResult && loginResult.value?.login) {
      const { authToken, refreshToken, customer } = loginResult.value.login;

      sessionStorage.setItem(process.env.AUTH_TOKEN_SS_KEY, authToken);
      localStorage.setItem(process.env.REFRESH_TOKEN_LS_KEY, refreshToken);

      state.customer = customer;
    }
  });

  // Watch for changes in updateCustomerResult and update state.customer accordingly
  watchEffect(() => {
    if (updateCustomerResult && updateCustomerResult.value?.updateCustomer) {
      state.customer = updateCustomerResult.value.updateCustomer.customer;
    }
  });

  const login = (username, password) => {
    return executeLogin({ username, password });
  };

  const updateCustomer = (input) => {
    return executeUpdateCustomer({ input });
  };

  provide(SessionSymbol, {
    state,
    login,
    updateCustomer,
  });
}
// Usage:
// In your main Vue component:
// import { provideSession, useSession } from './SessionProvider';

// setup() {
//   provideSession();
// }

// Inside any child component where you want to use session:
// import { useSession } from './SessionProvider';

// setup() {
//   const { state, login, updateCustomer } = useSession();

//   // Access state.cart, state.customer, state.fetching
//   // Use login() and updateCustomer() functions
// }
