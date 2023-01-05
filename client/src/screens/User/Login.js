
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react'
import { Button } from 'react-native-paper'
import { useMutation } from '@apollo/client';
import { LOGIN } from '../../utils/mutations';
import Auth from '../../utils/auth';

import Home from "../Home";
import UserProfile from './UserProfile';




export default function Login(props) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [login, { error, data }] = useMutation(LOGIN);
 


    const loginHandler = async (event) => {
        event.preventDefault();
        
        try {
            const mutationResponse = await login({
                variables: { email: email, password: password },
            });
            const token = mutationResponse.data.login.token;
            Auth.login(token);
            props.navigation.navigate("UserProfile");
        } catch (e) {
            console.log(e,"error here");
        }
    };




    return (
        <View
            style={{
                flex: 1,
                backgroundColor: "#fff",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Text style={{ fontSize: 20, margin: 20 }}>Already have an account?</Text>
            <View style={{ width: "70%" }}>
                <TextInput
                    style={Styles.input}
                    placeholder="youremail@test.com"
                    // value={email}
                    name="email"
                    type="email"
                    id="email"
                    onChangeText={setEmail}
                />

                <TextInput
                    style={Styles.input}
                    placeholder="******"
                    name="password"
                    type="password"
                    id="pwd"
                    // value={email}
                    onChangeText={setPassword}
                />
            </View>

            <Button
                disabled={!email || !password}
                style={Styles.btn}
                onPress={loginHandler}
            >
                <Text style={{ color: "#fff" }}>Login</Text>
            </Button>

            <Text
                style={{
                    marginTop: 20,
                }}
            >
                Or
            </Text>
            <TouchableOpacity onPress={() => props.navigation.navigate("Register")}>
                <Text
                    style={{
                        color: "#900",
                        height: 30,
                        margin: 20,
                    }}
                >
                    Sign Up
                </Text>
            </TouchableOpacity>

            {/* <TouchableOpacity onPress={() => props.navigation.navigate("forgetpassword")}>
                <Text  >  Forget Password   </Text>
            </TouchableOpacity> */}
        </View>
    );
}

const Styles = StyleSheet.create({

    input: {
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#b5b5b5",
        padding: 10,
        paddingLeft: 15,
        borderRadius: 5,
        marginVertical: 15,
        fontSize: 15,
    },

    btn: {
        backgroundColor: "#900",
        padding: 5,
        width: "100%",
    },
})
