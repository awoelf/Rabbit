import React, { useEffect, useState } from 'react';
import { Button, View, Text, TouchableOpacity, TextField, Icon } from 'react-native-ui-lib';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../../utils/mutations';
import decode from 'jwt-decode';
import { useConnection } from '@sendbird/uikit-react-native';
import auth from '../../utils/auth';
import { useUserContext } from '../../utils/UserContext';

// Styles and assets
import { styles } from '../../styles/styles';

export default function Login(props) {
  const [email, setEmail] = useState('yeon@me.com');
  const [password, setPassword] = useState('password12345');
  const [login, { error, data }] = useMutation(LOGIN);
  const userContext = useUserContext();

  const { connect } = useConnection();

  const loginHandler = async (event) => {
    // event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: email, password: password },
      });
      const token = mutationResponse.data.login.token;
      auth.login(token);
      console.log(token);

      userContext.dispatch({
        type: 'SET_CURRENT_USER',
        payload: {
          user: decode(token),
        },
      });

      connect(mutationResponse.data.login.user.firstName, {
        nickname: mutationResponse.data.login.user.lastName,
      });
      // props.navigation.navigate('Main');
    } catch (e) {
      console.log(e, 'error here');
    }
  };

  return (
    <View flex-1>
      <View row center flex-2>
        <Text style={styles.header1}>Rabbit</Text>
        <Icon source={require('../../assets/icon.png')} size={35} />
      </View>
      <View marginH-30 flex-1>
        <Text style={styles.text} center>
          Log in to your Rabbit account
        </Text>
        <TextField
          migrate
          style={styles.textField}
          placeholder={'Email'}
          name={'email'}
          keyboardType="email-address"
          id={'email'}
          onChangeText={setEmail}
        />
        <TextField
          migrate
          style={styles.textField}
          placeholder={'Password'}
          name={'password'}
          secureTextEntry={true}
          id={'pwd'}
          onChangeText={setPassword}
        />
        <View center>
          <Button
            disabled={!email || !password}
            style={styles.button}
            onPress={() => {
              loginHandler();
            }}
            center
          >
            <Text style={styles.text}>Log in</Text>
          </Button>
        </View>
      </View>

      <View flex-3 centerH bottom>
        <Text style={styles.text}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => props.navigation.navigate('Register')}>
          <Text style={styles.link}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
