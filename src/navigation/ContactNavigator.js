import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AddContact from '../screens/Contacts/AddContact';

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='AddContact'
        component={AddContact}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default function ContactNavigator() {
  return <MyStack />;
}
