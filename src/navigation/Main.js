import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Octicons from '@expo/vector-icons/Octicons';

// Stacks
import UserNavigator from './UserNavigator';
import ContactNavigator from './ContactNavigator';
import MessageNavigator from './MessageNavigator';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Style
const iconSize = 25;
import { styles } from '../styles/styles';

const HomeTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'black',
        tabBarActiveBackgroundColor: '#D8C5A2',
        tabBarStyle: styles.bottomBar,
      }}
    >
      <Tab.Screen
        name='Messages'
        component={MessageNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Octicons name='comment' color={color} size={iconSize} />
          ),
        }}
      />

      <Tab.Screen
        name='Search'
        component={ContactNavigator}
        options={{
          tabBarIcon: ({ color, size }) => <Octicons name='search' color={color} size={iconSize} />,
        }}
      />
      <Tab.Screen
        name='Feed'
        component={UserNavigator}
        options={{
          tabBarIcon: ({ color, size }) => <Octicons name='rss' color={color} size={iconSize} />,
        }}
      />
      <Tab.Screen
        name='User Settings'
        component={UserNavigator}
        options={{
          tabBarIcon: ({ color, size }) => <Octicons name='gear' color={color} size={iconSize} />,
        }}
      />
    </Tab.Navigator>
  );
};

const Main = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='User'>
      <Stack.Screen name='User' component={UserNavigator} />
      <Stack.Screen name='Home' component={HomeTabs} />
    </Stack.Navigator>
  );
};

export default Main;
