import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { TouchableOpacity, TextField, View, Text, Button, Dialog, Card } from 'react-native-ui-lib';
import Octicons from '@expo/vector-icons/Octicons';
import { useMutation } from '@apollo/client';
import { UPDATE_USER } from '../../utils/mutations';
import { useUserContext } from '../../utils/UserContext';
import auth from '../../utils/auth';
import decode from 'jwt-decode';

import { cardStyle, iconStyle, styles } from '../../styles/styles';
import { rabbit } from '../../styles/palette';

import Header from '../../components/Header';
import HeaderText from '../../components/HeaderText';
import Container from '../../components/Container';

const UpdateEmailPassword = (props) => {
  const [newCredentials, setNewCredentials] = useState({
    newEmail: null,
    newId: null,
    newNickname: null,
    newPassword: null,
    currentPassword: null,
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [showFail, setShowFail] = useState(false);
  const [updateUser, { error, data }] = useMutation(UPDATE_USER);

  const userContext = useUserContext();
  const { email, firstName, lastName } = userContext.stateUser.user.data;

  const handleInputChange = (name, value) => {
    setNewCredentials({ ...newCredentials, [name]: value });
  };

  const submitHandler = async (event) => {
    try {
      const { data } = await updateUser({
        variables: { ...newCredentials },
      });

      console.log(data);

      const token = data.updateUser.token;

      auth.login(token);

      userContext.dispatch({
        type: 'SET_CURRENT_USER',
        payload: {
          user: decode(token),
        },
      });

      setShowSuccess(true);
    } catch (err) {
      setShowFail(true);
      console.log(err);
    }
  };

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
          <HeaderText>Update User</HeaderText>
        </View>
      </Header>
      <ScrollView>
        <Container>
          <Text style={styles.text}>User id</Text>
          <TextField
            migrate
            style={styles.textField}
            placeholder={firstName}
            name={'id'}
            id={'id'}
            onChangeText={(value) => handleInputChange('newId', value)}
          />
          <Text style={styles.text}>Nickname</Text>
          <TextField
            migrate
            style={styles.textField}
            placeholder={lastName}
            name={'nickname'}
            id={'nickname'}
            onChangeText={(value) => handleInputChange('newNickname', value)}
          />
          <Text style={styles.text}>Email</Text>
          <TextField
            migrate
            style={styles.textField}
            placeholder={email}
            name={'email'}
            keyboardType='email-address'
            id={'email'}
            onChangeText={(value) => handleInputChange('newEmail', value)}
          />
          <Text style={styles.text}>New password</Text>
          <TextField
            migrate
            style={styles.textField}
            placeholder={'*****'}
            name={'password'}
            secureTextEntry={true}
            id={'pwd'}
            onChangeText={(value) => handleInputChange('newPassword', value)}
          />
          <Text style={styles.text}>Current password</Text>
          <TextField
            migrate
            style={styles.textField}
            placeholder={'*****'}
            name={'current_password'}
            secureTextEntry={true}
            id={'current_pwd'}
            onChangeText={(value) => handleInputChange('currentPassword', value)}
          />

          <View bottom center>
            <Button
              disabled={!newCredentials.currentPassword}
              disabledBackgroundColor={'gray'}
              style={styles.button}
              onPress={() => submitHandler()}
              center
            >
              <Text style={styles.text}>Submit</Text>
            </Button>
          </View>
        </Container>
      </ScrollView>

      <Dialog
        visible={showSuccess}
        onDismiss={() => {
          setShowSuccess(false);
        }}
      >
        <Card style={cardStyle}>
          <View margin-s4>
            <Text style={styles.text} center>
              User credentials successfully updated!
            </Text>
          </View>
        </Card>
      </Dialog>

      <Dialog
        visible={showFail}
        onDismiss={() => {
          setShowFail(false);
        }}
      >
        <Card style={cardStyle}>
          <View margin-s4>
            <Text style={styles.text} center>
              Unable to update user credendials. Please try again.
            </Text>
          </View>
        </Card>
      </Dialog>
    </>
  );
};

export default UpdateEmailPassword;
