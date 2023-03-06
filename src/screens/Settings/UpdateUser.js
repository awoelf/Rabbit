import { useState } from 'react';
import { TouchableOpacity, Dialog, View, Text, TextField, Button } from 'react-native-ui-lib';
import Octicons from '@expo/vector-icons/Octicons';

import { iconStyle, styles } from '../../styles/styles';
import { rabbit } from '../../styles/palette';

import Header from '../../components/Header';
import HeaderText from '../../components/HeaderText';
import Container from '../../components/Container';

import { useSendbirdChat } from '@sendbird/uikit-react-native';

const UpdateUser = (props) => {
  const { currentUser, updateCurrentUserInfo } = useSendbirdChat();
  const [nickname, setNickname] = useState(currentUser.nickname);
  const [showDialog, setShowDialog] = useState(false);

  const handleUpdateNickname = async () => {
    try {
      const updatedNickname = await updateCurrentUserInfo(nickname, currentUser.plainProfileUrl);
      setShowDialog(true);
      console.log(updatedNickname);
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
          <HeaderText>Update User Profile</HeaderText>
        </View>
      </Header>
      <Container>
        <Text style={styles.text}>Nickname</Text>
        <TextField
          migrate
          style={styles.textField}
          id={'nickname'}
          placeholder={currentUser.nickname}
          onChangeText={setNickname}
        />
        <View bottom center>
          <Button
            style={styles.button}
            onPress={() => {
              handleUpdateNickname();
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
        <Text center style={styles.text}>Nickname successfully changed to {nickname}!</Text>
      </Dialog>
    </>
  );
};

export default UpdateUser;
