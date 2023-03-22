import React, { useEffect, useState } from 'react';
import { Button, View, Text, TouchableOpacity, TextField, Icon, Dialog, Card } from 'react-native-ui-lib';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../../utils/mutations';
import decode from 'jwt-decode';
import { useConnection } from '@sendbird/uikit-react-native';
import auth from '../../utils/auth';
import { useUserContext } from '../../utils/UserContext';

// Styles and assets
import { styles, cardStyle } from '../../styles/styles';

export default function Login(props) {
  const [email, setEmail] = useState('yeon@me.com');
  const [password, setPassword] = useState('password12345');
  const [login, { error, data }] = useMutation(LOGIN);
  const [showFail, setShowFail] = useState(false);

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
        payload: decode(token),
      });

      connect(mutationResponse.data.login.user.firstName, {
        nickname: mutationResponse.data.login.user.lastName,
      });
    } catch (e) {
      console.log(e, 'Unable to log user in.');
      setShowFail(true);
    }
  };

  return (
    <View flex-1>
      <View row center flex-2>
        <Text style={styles.header1}>Rabbit</Text>
        <Icon source={require('../../assets/icon.png')} size={35} />
      </View>
      <View marginH-30 flex-2>
        <Text style={styles.text} center>
          Log in to your Rabbit account
        </Text>
        <TextField
          migrate
          style={styles.textField}
          placeholder={'Email'}
          name={'email'}
          keyboardType='email-address'
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
        <View centerH>
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
      
      <View flex-1 centerH bottom>
        <Text style={styles.text}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => props.navigation.navigate('Register')}>
          <Text style={styles.link}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      
      <Dialog
        visible={showFail}
        onDismiss={() => {
          setShowFail(false);
        }}
      >
        <Card style={cardStyle}>
          <View margin-s4>
            <Text style={styles.text} center>
              Incorrect email or password. Please try again.
            </Text>
          </View>
        </Card>
      </Dialog>
    </View>
  );
}
