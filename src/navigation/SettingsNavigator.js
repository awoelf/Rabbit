import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text } from 'react-native-ui-lib';


// Screens
import UserSettings from '../screens/Settings/UserSettings';
import ChangeUnits from '../screens/Settings/ChangeUnits';

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
          headerShown: true,
          header: (<>
            <Text>Hi</Text>
          </>)
        }}
      />
    </Stack.Navigator>
  );
}

export default function SettingsNavigator() {
  return <MyStack />;
}
