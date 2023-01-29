import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Search from '../screens/Search/Search';

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='SearchScreen'
        component={Search}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default function SearchNavigator() {
  return <MyStack />;
}
