import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import * as ExpoClipboard from 'expo-clipboard';
import * as ExpoDocumentPicker from 'expo-document-picker';
import * as ExpoFS from 'expo-file-system';
import * as ExpoImagePicker from 'expo-image-picker';
import * as ExpoMediaLibrary from 'expo-media-library';
import * as ExpoNotifications from 'expo-notifications';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  createExpoClipboardService,
  createExpoFileService,
  createExpoNotificationService,
  SendbirdUIKitContainer,
  useSendbirdChat,
} from '@sendbird/uikit-react-native';

import { rabbitMessageTheme } from '../styles/themes';

// import screens here
import Channel from '../screens/Message/Channel';
import ChannelList from '../screens/Message/ChannelList';
import CreateChannel from '../screens/Message/CreateChannel';
import Loading from '../screens/Message/Loading';

const NotificationService = createExpoNotificationService(ExpoNotifications);
const ClipboardService = createExpoClipboardService(ExpoClipboard);
const FileService = createExpoFileService({
  fsModule: ExpoFS,
  imagePickerModule: ExpoImagePicker,
  mediaLibraryModule: ExpoMediaLibrary,
  documentPickerModule: ExpoDocumentPicker,
});

const Stack = createNativeStackNavigator();

function MessageStack() {
  const { currentUser } = useSendbirdChat();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!currentUser ? (
        <Stack.Screen name={'Loading'} component={Loading} />
      ) : (
        <>
          <Stack.Screen name={'ChannelList'} component={ChannelList} />
          <Stack.Screen name={'CreateChannel'} component={CreateChannel} />
          <Stack.Screen name={'Channel'} component={Channel} />
        </>
      )}
    </Stack.Navigator>
  );
}

export default function MessageNavigator() {
  return (
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
      styles={{ theme: rabbitMessageTheme }}
    >
      <MessageStack />
    </SendbirdUIKitContainer>
  );
}
