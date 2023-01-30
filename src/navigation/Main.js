import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Octicons from '@expo/vector-icons/Octicons';

import { Text } from 'react-native-ui-lib';

// Stacks
import UserNavigator from './UserNavigator';
import MessageNavigator from './MessageNavigator';
import SearchNavigator from './SearchNavigation';
import SettingsNavigator from './SettingsNavigator';
import FeedNavigator from './FeedNavigator';
import HomeNavigator from './HomeNavigator';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Style
const iconSize = 25;
import { tabBarStyle } from '../styles/styles';

const MainTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName='Main'
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'black',
        tabBarActiveBackgroundColor: '#D8C5A2',
        tabBarStyle: tabBarStyle,
      }}
    >
      <Tab.Screen
        name='Home'
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Octicons name='home' color={color} size={iconSize} />
          ),
        }}
      />
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
        component={SearchNavigator}
        options={{
          tabBarIcon: ({ color, size }) => <Octicons name='search' color={color} size={iconSize} />,
        }}
      />
      <Tab.Screen
        name='Feed'
        component={FeedNavigator}
        options={{
          tabBarIcon: ({ color, size }) => <Octicons name='rss' color={color} size={iconSize} />,
        }}
      />
      <Tab.Screen
        name='Settings'
        component={SettingsNavigator}
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
      <Stack.Screen name='Main' component={MainTabs} />
    </Stack.Navigator>
  );
};

export default Main;
