import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainFeed from '../screens/Feed/Feed';

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='MainFeed'
        component={MainFeed}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default function FeedNavigator() {
  return <MyStack />;
}
