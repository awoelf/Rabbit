import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  useSendbirdChat,
} from '@sendbird/uikit-react-native';

// import screens here
import Channel from '../screens/Message/Channel';
import ChannelList from '../screens/Message/ChannelList';
import CreateChannel from '../screens/Message/CreateChannel';
import Loading from '../screens/Message/Loading';
import GroupChannelSettings from '../screens/Message/GroupChannelSettings';
import GroupChannelMembers from '../screens/Message/GroupChannelMembers';
import GroupChannelInvite from '../screens/Message/GroupChannelInvite';


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
          <Stack.Screen name={'GroupChannelSettings'} component={GroupChannelSettings} />
          <Stack.Screen name={'GroupChannelMembers'} component={GroupChannelMembers} />
          <Stack.Screen name={'GroupChannelInvite'} component={GroupChannelInvite} />
        </>
      )}
    </Stack.Navigator>
  );
}

export default function MessageNavigator() {
  return (
   
      <MessageStack />

  );
}
