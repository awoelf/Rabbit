import React, { useEffect, useState } from 'react';
import { Button, View, Text, TouchableOpacity, TextField, Icon } from 'react-native-ui-lib';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';

// Styles and assets
import { styles } from '../../styles/styles';

export default function Register(props) {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');

  const [addUser, { error, data }] = useMutation(ADD_USER);

  const registerHandler = async (event) => {
    console.log('here');
    if (email === '' || firstName === '' || lastName === '' || password === '') {
      setError('Please fill in the form correctly');
    }

    try {
      const mutationResponse = await addUser({
        variables: { email: email, password: password, firstName: firstName, lastName: lastName },
      });
      const token = mutationResponse.data.addUser.token;
      Auth.login(token);
      props.navigation.navigate('UserProfile');
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
          Create a new Rabbit account
        </Text>
        <TextField
          migrate
          style={styles.textField}
          placeholder={'First Name'}
          name={'firstName'}
          type={'firstName'}
          id={'firstName'}
          onChangeText={setFirstName}
        />
        <TextField
          migrate
          style={styles.textField}
          placeholder={'Last Name'}
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
          type={'email'}
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
            label={'Sign Up'}
            style={styles.button}
            disabled={!email || !password || !firstName || !lastName}
            onPress={registerHandler}
          />
        </View>
      </View>
      <View flex-3 centerH bottom>
        <Text style={styles.text}>Already have an account?</Text>
        <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
          <Text style={styles.link}>Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
