import React, { useEffect, useState } from 'react';
import { Button, View, Text, TouchableOpacity, TextField, Icon } from 'react-native-ui-lib';

// Styles and assets
import { logIn } from '../../styles/styles';

export default function Register(props) {
  return (
    <View flex-1>
      <View row center flex-2>
        <Text style={logIn.header}>Rabbit</Text>
        <Icon source={require('../../assets/icon.png')} size={35} />
      </View>
      <View marginH-30 flex-1>
        <Text style={logIn.text} center>
          Create a new Rabbit account
        </Text>
        <TextField
          migrate
          style={logIn.textField}
          placeholder={'Email'}
          name={'email'}
          type={'email'}
          id={'email'}
          // onChangeText={setEmail}
        />
        <TextField
          migrate
          style={logIn.textField}
          placeholder={'Password'}
          name={'password'}
          secureTextEntry={true}
          id={'pwd'}
          // onChangeText={setPassword}
        />
        <View center>
          {/* <Button disabled={!email || !password} style={logIn.button} onPress={loginHandler} center>
            <Text style={logIn.text}>Log in</Text>
          </Button> */}
        </View>
      </View>
      <View flex-3 centerH bottom>
        <Text style={logIn.text}>Already have an account?</Text>
        <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
          <Text style={logIn.link}>Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
