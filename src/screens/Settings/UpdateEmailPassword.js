import { useState } from 'react';
import { TouchableOpacity, TextField, View, Text, TextField, Button, Dialog, Button } from 'react-native-ui-lib';
import Octicons from '@expo/vector-icons/Octicons';
import React, {useState } from 'react';import { useMutation } from '@apollo/client';
import { UPDATE_USER } from '../../utils/mutations';
import { useUserContext } from '../../utils/UserContext';

import { iconStyle, styles } from '../../styles/styles';
import { rabbit } from '../../styles/palette';

import Header from '../../components/Header';
import HeaderText from '../../components/HeaderText';
import Container from '../../components/Container';

import { useUserContext } from '../../utils/UserContext';
import { useMutation } from '@apollo/client';
import { UPDATE_USER } from '../../utils/mutations';

const UpdateEmailPassword = (props) => {
  const [email, setEmail] = useState(null);
  const [password1, setPassword1] = useState(null);
  const [password2, setPassword2] = useState(null);
  const [updateUser, { error, data }] = useMutation(UPDATE_USER);

  const userContext = useUserContext();



  const submitHandler = async (event) => {
    try {
      console.log("click")
      if(password1===password2){
        console.log("correct password")
        const mutationResponse = await updateUser({
          variables: { email: email},
        });
        console.log(mutationResponse);

      }else{
        console.log("confirm password again");
      }

    } catch (err){
      console.log(err)
    }
  }

  return (
    <>
      <Header>
        <View row centerV>
          <TouchableOpacity
            onPress={() => {
              props.navigation.goBack();
            }}
            marginR-s3
          >
            <Octicons name='arrow-left' style={iconStyle.icon} />
          </TouchableOpacity>
          <HeaderText>Update Email and Password</HeaderText>
        </View>
      </Header>
      <View marginT-30 marginH-20 flex-1>
        
          <TextField
            migrate
            style={styles.textField}
            placeholder={'Update Email'}
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
            onChangeText={setPassword1}
          />
          <TextField
            migrate
            style={styles.textField}
            placeholder={'Confirm Password'}
            name={'confirm_password'}
            secureTextEntry={true}
            id={'confirm_pwd'}
            onChangeText={setPassword2}
          />
          <Button
          disabled={!email || !password1 || !password2}
          style={styles.button}
          onPress={submitHandler}
          center
        >
          <Text style={styles.text}>Submit</Text>
        </Button>

       
      </View>
    </>
  );
};

export default UpdateEmailPassword;
