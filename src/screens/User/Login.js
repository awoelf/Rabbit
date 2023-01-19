import React, { useEffect, useState } from 'react';
import { Button, View, Text, TouchableOpacity, TextField, Icon } from 'react-native-ui-lib';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../../utils/mutations';
import Auth from '../../utils/auth';

import Home from '../Home';
import UserProfile from './UserProfile';

// Styles and assets
import { logIn } from '../../styles/styles';

export default function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, { error, data }] = useMutation(LOGIN);

  const loginHandler = async (event) => {
    // event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: email, password: password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
      props.navigation.navigate('Home');
    } catch (e) {
      console.log(e, 'error here');
    }
  };

  // For logging into app quickly. Will be removed in final product.
  const quickLogIn = async () => {
    try {
      const mutationResponse = await login({
        variables: { email: 'yeon@me.com', password: 'password12345' },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
      props.navigation.navigate('Home');
    } catch (e) {
      console.log(e, 'error here');
    }
  }

  return (
    <View flex-1>
      <View row center flex-2>
        <Text style={logIn.header}>Rabbit</Text>
        <Icon source={require('../../assets/icon.png')} size={35} />
      </View>
      <View marginH-30 flex-1>
        <Text style={logIn.text} center>Log in to your Rabbit account</Text>
        <TextField
          migrate
          style={logIn.textField}
          placeholder={'Email'}
          name={'email'}
          type={'email'}
          id={'email'}
          onChangeText={setEmail}
        />
        <TextField
          migrate
          style={logIn.textField}
          placeholder={'Password'}
          name={'password'}
          secureTextEntry={true}
          id={'pwd'}
          onChangeText={setPassword}
        />
        <View center>
          <Button disabled={!email || !password} style={logIn.button} onPress={loginHandler} center>
            <Text style={logIn.text}>Log in</Text>
          </Button>
          <Button onPress={quickLogIn} style={logIn.button} center>
            <Text style={logIn.text}>Quick log in</Text>
          </Button>
        </View>
      </View>
      <View flex-3 centerH bottom>
        <Text style={logIn.text}>
          Don't have an account?
        </Text>
        <TouchableOpacity onPress={() => props.navigation.navigate('Register')}>
          <Text style={logIn.link}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
      {/* <TouchableOpacity onPress={() => props.navigation.navigate("forgetpassword")}>
                <Text  >  Forget Password   </Text>
            </TouchableOpacity> */}
    </View>
  );
}
