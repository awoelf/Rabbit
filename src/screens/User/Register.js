import React, { useEffect, useState } from 'react';
import {
  Button,
  View,
  Text,
  TouchableOpacity,
  TextField,
  Icon,
  Card,
  Dialog,
  Hint,
} from 'react-native-ui-lib';
import { Linking } from 'react-native';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';
import decode from 'jwt-decode';

// Styles and assets
import { styles, cardStyle } from '../../styles/styles';
import { rabbit } from '../../styles/palette';
import Octicons from '@expo/vector-icons/Octicons';

import { useConnection } from '@sendbird/uikit-react-native';
import { useUserContext } from '../../utils/UserContext';

export default function Register(props) {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [showFail, setShowFail] = useState(false);
  const [allowSignUp, setAllowSignUp] = useState(false);

  const { connect } = useConnection();
  const userContext = useUserContext();

  const [addUser, { error, data }] = useMutation(ADD_USER);

  const registerHandler = async (event) => {
    try {
      const mutationResponse = await addUser({
        variables: { email: email, password: password, firstName: firstName, lastName: lastName },
      });
      const token = mutationResponse.data.addUser.token;
      Auth.login(token);

      userContext.dispatch({
        type: 'SET_CURRENT_USER',
        payload: {
          user: decode(token),
        },
      });
      console.log(mutationResponse.data.addUser.user);
      //connect sendbird
      connect(mutationResponse.data.addUser.user.firstName, {
        nickname: mutationResponse.data.addUser.user.lastName,
      });

      // props.navigation.navigate('Home');
    } catch (e) {
      console.log(e, 'error here');
      setShowFail(true);
    }
  };

  const checkInput = () => {
    if (email && password && firstName && lastName) {
      setAllowSignUp(true);
    } else {
      setAllowSignUp(false);
    }
  };

  useEffect(() => {
    checkInput();
  }, [firstName, lastName, password, email]);

  return (
    <View flex-1>
      <View row center flex-1>
        <Text style={styles.header1}>Rabbit</Text>
        <Icon source={require('../../assets/icon.png')} size={35} />
      </View>

      <View marginH-30 flex-2>
        <Text style={styles.text} center>
          Create a new Rabbit account
        </Text>
        <TextField
          migrate
          style={styles.textField}
          placeholder={'User id'}
          name={'firstName'}
          type={'firstName'}
          id={'firstName'}
          onChangeText={setFirstName}
        />
        <TextField
          migrate
          style={styles.textField}
          placeholder={'Nickname'}
          name={'lastName'}
          type={'lastName'}
          id={'lastName'}
          onChangeText={setLastName}
        />
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
          <Hint
            visible={allowSignUp}
            color={rabbit.accent_color}
            message={
              <>
                <Text>By clicking 'Sign up', you agree to Rabbit's Privacy Policy.</Text>
                <Text>  </Text>
                <Octicons name='link-external' color={rabbit.light_text_color} size={15} />
              </>
            }
            messageStyle={styles.text}
            onPress={async () => await Linking.openURL(`https://www.termsfeed.com/live/71b1187f-7283-4fc6-97db-61c1edbbd091`)}
          >
            <Button
              style={styles.button}
              disabled={!allowSignUp}
              onPress={() => registerHandler()}
            >
              <Text style={styles.text}>Sign up</Text>
            </Button>
          </Hint>
        </View>

        <View centerH bottom flex-1>
          <Text style={styles.text}>Already have an account?</Text>
          <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
            <Text style={styles.link}>Log In</Text>
          </TouchableOpacity>
        </View>
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
              Invalid credentials. Please try again.
            </Text>
          </View>
        </Card>
      </Dialog>
    </View>
  );
}
