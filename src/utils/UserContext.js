import React, {createContext, useContext,useReducer,useState, useEffect} from 'react';
import decode from "jwt-decode"
import AsyncStorage from '@react-native-async-storage/async-storage';

import authReducer from "./reducers";
import { setCurrentUser } from "./action";



const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);




export const UserProvider = (props)=>{
   
    const [user, setUser] = useState("");
 
    const getUser = async() => {
        try {
            const value = await AsyncStorage.getItem('id_token');
            setUser(decode(value))
                
        } catch (error) {
            return null;
        }
    };
    
    useEffect(()=>{
        getUser();
        console.log(user,"user");
    },[])



        return (
            <UserContext.Provider
                value={{
                    user,
                    getUser
                }}
            >
                {props.children}
            </UserContext.Provider>
        )


}