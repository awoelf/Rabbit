import React, { useReducer, useState } from 'react';
import axios from 'axios';
import {
  Text,
  Image,
  View,
  Button,
  ListItem,
  TouchableOpacity,
  TextField,
} from 'react-native-ui-lib';
import Octicons from '@expo/vector-icons/Octicons';
import { styles, cardStyle } from '../../styles/styles';
import { rabbit } from '../../styles/palette';
import { useConnection, useSendbirdChat } from '@sendbird/uikit-react-native';

// User Context
import { useUserContext } from '../../utils/UserContext';
import reducer from '../../utils/reducers';
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
        <TouchableOpacity 
        centerH 
        onPress={()=>props.navigation.navigate('UpdateUser')}>
          <View row>
            <Image source={{ uri: currentUser.plainProfileUrl }} style={styles.profileImage} />
            <View absR >
              <Octicons name='pencil' size={rabbit.font_size} />
            </View>
          </View>

          <Text style={styles.text} center>
            Hello {currentUser.userId}!
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
