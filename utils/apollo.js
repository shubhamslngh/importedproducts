import { from } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
const client = new ApolloClient({
  link: from([
    createSessionLink(),
    createErrorLink(),
    createUpdateLink(),
    new HttpLink({ uri: 'https://importedproducts.in/graphql' }),
  ]),
  cache: new InMemoryCache(),
});

function createSessionLink() {
  return setContext(async (operation) => {
    const headers = {};
    const sessionToken = await getSessionToken();

    if (sessionToken) {
      headers['woocommerce-session'] = `Session ${sessionToken}`;

      return { headers };
    }

    return {};
  });
}