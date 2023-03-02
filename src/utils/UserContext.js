import React, { createContext, useContext, useReducer, useState, useEffect } from 'react';
import decode from 'jwt-decode';
import AsyncStorage from '@react-native-async-storage/async-storage';

import authReducer from './reducers';
import { SET_CURRENT_USER, SET_NEW_LOCATION } from './action';
import { getLocation } from './location';

const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

export const UserProvider = (props) => {
  const [stateUser, dispatch] = useReducer(authReducer, {
    isAuthenticated: null,
    user: {},
  });
  const [stateLocation, dispatchLocation] = useReducer(authReducer, {
    data: {},
  });

  const [user, setUser] = useState('');
  const [units, setUnits] = useState('Imperial');

  const getUser = async () => {
    try {
      const value = await AsyncStorage.getItem('id_token');

      if (value) {
        setUser(decode(value));
        dispatch({
          type: SET_CURRENT_USER,
          payload: decode(value),
        });
        dispatchLocation({
          type: SET_NEW_LOCATION,
          payload: await getLocation()
        });
      }
    } catch (error) {
      return null;
    }
  }; 

  useEffect(() => {
    getUser();
  }, []);

  return (
    <UserContext.Provider
      value={{
        stateUser,
        dispatch,
        stateLocation,
        dispatchLocation,
        units,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
