import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../screens/User/Login';
import Register from '../screens/User/Register';

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Login'
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='Register'
        component={Register}
        options={{
          headerShown: false,
        }}
      />
      {/* user profile screen will be moved to separate tab
      <Stack.Screen
        name='UserProfile'
        component={UserProfile}
        options={{
          headerShown: false,
        }}
      /> */}
    </Stack.Navigator>
  );
}

export default function UserNavigator() {
  return <MyStack />;
}
