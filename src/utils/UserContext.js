import React, { createContext, useContext, useReducer, useState, useEffect } from 'react';
import decode from "jwt-decode"
import AsyncStorage from '@react-native-async-storage/async-storage';

import authReducer from "./reducers";
import { setCurrentUser, SET_CURRENT_USER } from "./action";



const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);


export const UserProvider = (props) => {
    const [stateUser, dispatch] = useReducer(authReducer, {
        isAuthenticated: null,
        user: {}
    });

    const [user, setUser] = useState("");

    const getUser = async () => {
        try {
            const value = await AsyncStorage.getItem('id_token');
       
            if (value) {
                setUser(decode(value))
                dispatch({
                    type: SET_CURRENT_USER,
                    payload: decode(value)
                })
            }

        } catch (error) {
            return null;
        }
    };

    useEffect(() => {
        getUser();
    }, [])



    return (
        <UserContext.Provider
            value={{
                stateUser,
                dispatch
            }}
        >
            {props.children}
        </UserContext.Provider>
    )

}