import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Octicons from '@expo/vector-icons/Octicons';
import decode from 'jwt-decode';
import auth from '../utils/auth';

// Stacks
import UserNavigator from './UserNavigator';
import MessageNavigator from './MessageNavigator';
import SettingsNavigator from './SettingsNavigator';

// Screens
import Weather from '../screens/Weather/Weather';
import News from '../screens/News/News';
import LocationPermission from '../screens/User/LocationPermission';

import { useSendbirdChat } from '@sendbird/uikit-react-native';
import { useConnection } from '@sendbird/uikit-react-native';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Style
const iconSize = 25;
import { tabBarStyle } from '../styles/styles';

// User Context
import { useUserContext } from '../utils/UserContext';

const MainTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName='Messages'
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
        name='Messages'
        component={MessageNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Octicons name='comment' color={color} size={iconSize} />
          ),
        }}
      />
      <Tab.Screen
        name='Weather'
        component={Weather}
        options={{
          tabBarIcon: ({ color, size }) => <Octicons name='sun' color={color} size={iconSize} />,
        }}
      />
      <Tab.Screen
        name='News'
        component={News}
        options={{
          tabBarIcon: ({ color, size }) => <Octicons name='book' color={color} size={iconSize} />,
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
  const { connect } = useConnection();
  const { currentUser } = useSendbirdChat();
  const userContext = useUserContext();
  const [token, setToken] = useState(null);

  //need to refactor with reducer and action
  useEffect(async () => {
    //Connect sendbird by using logged information
    if (userContext.stateUser.isAuthenticated) {
      connect(userContext.stateUser.user.data.firstName, {
        nickname: userContext.stateUser.user.data.lastName,
      });
      setToken(await AsyncStorage.getItem('id_token'));
      console.log(token)
      // auth.login(token);
      // console.log('logging in');
      // userContext.dispatch({
      //   type: 'SET_CURRENT_USER',
      //   payload: {
      //     user: decode(token),
      //   },
      // });
    }
  }, []);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!currentUser ? (
        <Stack.Screen name='User' component={UserNavigator} />
      ) : (
        // <Stack.Screen name='Main' component={MainTabs} />
        <>
          {userContext.stateLocation.data.status !== 'granted' ? (
            <Stack.Screen name='LocationPermission' component={LocationPermission} />
          ) : (
            <Stack.Screen name='Main' component={MainTabs} />
          )}
        </>
      )}
    </Stack.Navigator>
  );
};

export default Main;
