import { useState } from 'react';
import { TouchableOpacity, TextField, View, Text, Dialog, Button } from 'react-native-ui-lib';
import Octicons from '@expo/vector-icons/Octicons';
import { useMutation } from '@apollo/client';
import { UPDATE_USER } from '../../utils/mutations';
import { useUserContext } from '../../utils/UserContext';

import { iconStyle, styles } from '../../styles/styles';
import { rabbit } from '../../styles/palette';

import Header from '../../components/Header';
import HeaderText from '../../components/HeaderText';
import Container from '../../components/Container';

import { useSendbirdChat } from '@sendbird/uikit-react-native';


const UpdateEmailPassword = (props) => {
  const { currentUser } = useSendbirdChat();
  const userContext = useUserContext();
  // const [newEmail, setNewEmail] = useState('');
  const [userCredentials, setUserCredentials] = useState({
    
  })
  const [showDialog, setShowDialog] = useState(false);
  const [incorrectPass, setIncorrectPass] = useState(false);
  const [updateUser, { error, data }] = useMutation(UPDATE_USER);

  const handleUpdateEmail = async () => {
    try {
      const mutationResponse = await updateUser({
        variables: { newEmail: newEmail }
      })
      setShowDialog(true);
      console.log(mutationResponse);
    } catch (error) {
      console.log(error);
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
          <HeaderText>Update Email and Password</HeaderText>
        </View>
      </Header>
      <Container>
        <Text style={styles.text}>Email</Text>
        <TextField
          migrate
          style={styles.textField}
          id={'email'}
          placeholder={'New email'}
          onChangeText={setNewEmail}
        />
        <Text style={styles.text}>Password</Text>
        <TextField
          migrate
          style={styles.textField}
          id={'password'}
          secureTextEntry={true}
          placeholder={'New password'}
          onChangeText={setNewEmail}
        />
        <Text style={styles.text}>Nickname</Text>
        <TextField
          migrate
          style={styles.textField}
          id={'nickname'}
          placeholder={'New nickname'}
          onChangeText={setNewEmail}
        />
        <Text style={styles.text}>Current password</Text>
        <TextField
          migrate
          style={styles.textField}
          id={'nickname'}
          secureTextEntry={true}
          placeholder={'Password'}
          onChangeText={setNewEmail}
        />
        <View bottom center>
          <Button
            style={styles.button}
            onPress={() => {
              handleUpdateEmail();
            }}
          >
            <Text style={styles.text}>Save</Text>
          </Button>
        </View>
      </Container>

      <Dialog
        visible={showDialog}
        onDismiss={() => {
          setShowDialog(false);
        }}
      >
        <Text center style={styles.text}>User credentials successfully changed!</Text>
      </Dialog>
      <Dialog
        visible={incorrectPass}
        onDismiss={() => {
          setIncorrectPass(false);
        }}
      >
        <Text center style={styles.text}>Incorrect password. Please try again.</Text>
      </Dialog>
    </>
  );
};

export default UpdateEmailPassword;
