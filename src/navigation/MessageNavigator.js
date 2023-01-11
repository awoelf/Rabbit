import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

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
import SendbirdChat from '@sendbird/chat';

// import screens here

const NotificationService = createExpoNotificationService(ExpoNotifications);
const ClipboardService = createExpoClipboardService(ExpoClipboard);
const FileService = createExpoFileService({
  fsModule: ExpoFS,
  imagePickerModule: ExpoImagePicker,
  mediaLibraryModule: ExpoMediaLibrary,
  documentPickerModule: ExpoDocumentPicker,
});

const Stack = createNativeStackNavigator();

function messageStack() {
  const { currentUser } = useSendbirdChat();

  return (
    <NavigationContainer>
      <Stack.Navigator></Stack.Navigator>
    </NavigationContainer>
  );
}
