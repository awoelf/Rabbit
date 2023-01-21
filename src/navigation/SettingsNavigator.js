import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import UserSettings from '../screens/Settings/UserSettings';

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='UserSettings'
        component={UserSettings}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default function SettingsNavigator() {
  return <MyStack />;
}
