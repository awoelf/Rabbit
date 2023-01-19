import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { NavigationContainer } from '@react-navigation/native';

//Navigators
import Main from './src/navigation/Main';

// Screens
import Header from './Shared/Header';

//Redux
import { Provider } from 'react-redux';
import store from './src/utils/store';


const httpLink = createHttpLink({
  uri: 'https://rabbit-app.herokuapp.com/graphql',
});

// // Construct our main GraphQL API endpoint
// const httpLink = createHttpLink({
//   uri: '/graphql',
// });

const authLink = setContext((_, { headers }) => {
  const token = AsyncStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default function App() {
  return (
      <ApolloProvider client={client}>
        <Provider store={store}>
          <NavigationContainer>
            <Header />
            <Main />
          </NavigationContainer>
        </Provider>
      </ApolloProvider>
  );
}
