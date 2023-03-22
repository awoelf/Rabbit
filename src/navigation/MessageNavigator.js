import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import screens here
import Channel from '../screens/Message/Channel';
import ChannelList from '../screens/Message/ChannelList';
import CreateChannel from '../screens/Message/CreateChannel';
import GroupChannelSettings from '../screens/Message/GroupChannelSettings';
import GroupChannelMembers from '../screens/Message/GroupChannelMembers';
import GroupChannelInvite from '../screens/Message/GroupChannelInvite';

const Stack = createNativeStackNavigator();

function MessageStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={'ChannelList'} component={ChannelList} />
      <Stack.Screen name={'CreateChannel'} component={CreateChannel} />
      <Stack.Screen name={'Channel'} component={Channel} />
      <Stack.Screen name={'GroupChannelSettings'} component={GroupChannelSettings} />
      <Stack.Screen name={'GroupChannelMembers'} component={GroupChannelMembers} />
      <Stack.Screen name={'GroupChannelInvite'} component={GroupChannelInvite} />
    </Stack.Navigator>
  );
}

export default function MessageNavigator() {
  return <MessageStack />;
}
