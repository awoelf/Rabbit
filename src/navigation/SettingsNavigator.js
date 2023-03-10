import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import UserSettings from '../screens/Settings/UserSettings';
import ChangeUnits from '../screens/Settings/ChangeUnits';
import UpdateEmailPassword from '../screens/Settings/UpdateEmailPassword';
import UpdateUser from '../screens/Settings/UpdateUser';

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
      <Stack.Screen
        name='ChangeUnits'
        component={ChangeUnits}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='UpdateEmailPassword'
        component={UpdateEmailPassword}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='UpdateUser'
        component={UpdateUser}
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
