import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Octicons from '@expo/vector-icons/Octicons';

//Stacks
import UserNavigator from './UserNavigator';
import ContactNavigator from './ContactNavigator';

const Tab = createBottomTabNavigator();

const Main = () => {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        activeTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name='Friends'
        component={UserNavigator}
        options={{
          tabBarIcon: ({ color }) => <Octicons name='people' color={color} size={30} />,
        }}
      />
      <Tab.Screen
        name='Direct Messages'
        component={UserNavigator}
        options={{
          tabBarIcon: ({ color, size }) => <Octicons name='comment' color={color} size={30} />,
        }}
      />

      <Tab.Screen
        name='Search'
        component={ContactNavigator}
        options={{
          tabBarIcon: ({ color, size }) => <Octicons name='search' color={color} size={30} />,
        }}
      />
      <Tab.Screen
        name='Feed'
        component={UserNavigator}
        options={{
          tabBarIcon: ({ color, size }) => <Octicons name='rss' color={color} size={30} />,
        }}
      />
      <Tab.Screen
        name='User Settings'
        component={UserNavigator}
        options={{
          tabBarIcon: ({ color, size }) => <Octicons name='gear' color={color} size={30} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default Main;
