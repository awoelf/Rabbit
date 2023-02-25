import React, { createContext, useContext, useReducer, useState, useEffect } from 'react';
import decode from 'jwt-decode';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Location from 'expo-location';

import authReducer from './reducers';
import { setCurrentUser, SET_CURRENT_USER } from './action';
import { features } from 'process';

const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

export const UserProvider = (props) => {
  const [stateUser, dispatch] = useReducer(authReducer, {
    isAuthenticated: null,
    user: {},
  });

  const [user, setUser] = useState('');
  const [location, setLocation] = useState(null);
  const [countryCode, setCountryCode] = useState('US');

  const getUser = async () => {
    try {
      const value = await AsyncStorage.getItem('id_token');

      if (value) {
        setUser(decode(value));
        dispatch({
          type: SET_CURRENT_USER,
          payload: decode(value),
        });
      }
    } catch (error) {
      return null;
    }
  };

  const getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== 'granted') {
      console.log('Location is required to use this app\'s features.');
      return;
    }

    const location = await Location.getCurrentPositionAsync();
    setLocation(location);

    const geocode = await Location.reverseGeocodeAsync(location.coords, false);
    setCountryCode(geocode[0].isoCountryCode);
  }

  useEffect(() => {
    getUser();
    getLocation();
  }, []);

  return (
    <UserContext.Provider
      value={{
        stateUser,
        dispatch,
        location,
        countryCode
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
