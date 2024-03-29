import React from 'react';
import {
  Text,
  Image,
  View,
  Button,
  ListItem,
  TouchableOpacity
} from 'react-native-ui-lib';
import Octicons from '@expo/vector-icons/Octicons';
import { styles } from '../../styles/styles';
import { rabbit } from '../../styles/palette';
import { useConnection, useSendbirdChat } from '@sendbird/uikit-react-native';

// User Context
import { useUserContext } from '../../utils/UserContext';
import auth from '../../utils/auth';

import Container from '../../components/Container';
import Header from '../../components/Header';
import HeaderText from '../../components/HeaderText';

const UserSettings = (props) => {
  const { currentUser, updateCurrentUserInfo } = useSendbirdChat();
  const userContext = useUserContext();
  const { disconnect } = useConnection();

  const logout = async () => {
    //Delete JWT token from LocalStorage
    auth.logout();

    //Delete user from context
    userContext.dispatch({
      type: 'SET_CURRENT_USER',
      payload: {},
    });

    //disconnect SendBird
    disconnect();
  };

  return (
    <>
      <Header>
        <HeaderText>User Settings</HeaderText>
      </Header>

      <Container>
        {/* TO DO: Click on image to change profile picture */}
        <TouchableOpacity centerH onPress={() => props.navigation.navigate('UpdateUser')}>
          <View row>
            {currentUser.plainProfileUrl === '' ? (
              <Image source={require('../../assets/icon.png')} style={styles.profileImage} />
            ) : (
              <Image source={{ uri: currentUser.plainProfileUrl }} style={styles.profileImage} />
            )}

            <View absR>
              <Octicons name='pencil' size={rabbit.font_size} />
            </View>
          </View>

          <Text style={styles.text} center>
            Hello {currentUser.nickname}!
          </Text>
          <Text style={styles.text} center>
            ID : {currentUser.userId}
          </Text>
        </TouchableOpacity>

        <ListItem onPress={() => props.navigation.navigate('UpdateUser')}>
          <View flex row centerV>
            <View marginR-s1>
              <Octicons name='person' size={rabbit.font_size} />
            </View>
            <Text style={styles.text}>Change Avatar</Text>
          </View>
        </ListItem>

        <ListItem onPress={() => props.navigation.navigate('UpdateEmailPassword')}>
          <View flex row centerV>
            <View marginR-s1>
              <Octicons name='gear' size={rabbit.font_size} />
            </View>
            <Text style={styles.text}>Update User</Text>
          </View>
        </ListItem>

        <ListItem onPress={() => props.navigation.navigate('ChangeUnits')}>
          <View flex row centerV>
            <View marginR-s1>
              <Octicons name='info' size={rabbit.font_size} />
            </View>
            <Text style={styles.text}>Change Weather Units</Text>
          </View>
        </ListItem>

        <ListItem onPress={() => props.navigation.navigate('AboutApp')}>
          <View flex row centerV>
            <View marginR-s1>
              <Octicons name='star' size={rabbit.font_size} />
            </View>
            <Text style={styles.text}>About App</Text>
          </View>
        </ListItem>

        <View bottom center>
          <Button style={styles.button} onPress={() => logout()}>
            <Text style={styles.text}>Log out</Text>
          </Button>
        </View>
      </Container>
    </>
  );
};

export default UserSettings;
