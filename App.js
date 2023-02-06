import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { useFonts, Mukta_400Regular, CreteRound_400Regular } from '@expo-google-fonts/dev';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { NavigationContainer } from '@react-navigation/native';

//Navigators
import Main from './src/navigation/Main';

// Screens
import Header from './Shared/Header';

//Context API
import {UserProvider} from './src/utils/UserContext'

//Redux
import { Provider } from 'react-redux';
import store from './src/utils/store';

// Theme
import { rabbitMessageTheme, rabbitTheme } from './src/styles/themes';

//sendbird/
import {
  createNativeClipboardService,
  createNativeFileService,
  createNativeMediaService,
  createNativeNotificationService,
} from '@sendbird/uikit-react-native';

import * as ExpoClipboard from 'expo-clipboard';
import * as ExpoDocumentPicker from 'expo-document-picker';
import * as ExpoFS from 'expo-file-system';
import * as ExpoImagePicker from 'expo-image-picker';
import * as ExpoMediaLibrary from 'expo-media-library';
import * as ExpoNotifications from 'expo-notifications';

import {
  createExpoClipboardService,
  createExpoFileService,
  createExpoNotificationService,
  SendbirdUIKitContainer,
  useSendbirdChat,
} from '@sendbird/uikit-react-native';


const NotificationService = createExpoNotificationService(ExpoNotifications);
const ClipboardService = createExpoClipboardService(ExpoClipboard);
const FileService = createExpoFileService({
  fsModule: ExpoFS,
  imagePickerModule: ExpoImagePicker,
  mediaLibraryModule: ExpoMediaLibrary,
  documentPickerModule: ExpoDocumentPicker,
});


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
  let [fontsLoaded] = useFonts({
    Mukta_400Regular,
    CreteRound_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (

    <ApolloProvider client={client}>
      <UserProvider>
        <SendbirdUIKitContainer
          appId={'6CD12A00-3AA4-4F84-A4CB-C202BA86B06A'}
          chatOptions={{ localCacheStorage: AsyncStorage }}
          userProfile={{
            onCreateChannel: (channel) => {
              if (channel.isGroupChannel()) {
                navigationActions.push(Routes.GroupChannel, { channelUrl: channel.url });
              }
            },
          }}
          platformServices={{
            file: FileService,
            notification: NotificationService,
            clipboard: ClipboardService,
          }}
        //styles={{ theme: rabbitMessageTheme }}
        >
          {/* <NavigationContainer theme={rabbitTheme}> */}
          <NavigationContainer>
            <Main />
          </NavigationContainer>
        </SendbirdUIKitContainer>
      </UserProvider>
    </ApolloProvider >

  );
}
