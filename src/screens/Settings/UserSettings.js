import React, { useReducer } from 'react';
import {
  Text,
  Image,
  View,
  Button,
  ListItem,
  TouchableOpacity,
  TextField,
} from 'react-native-ui-lib';
import Container from '../../components/Container';
import Header from '../../components/Header';
import HeaderText from '../../components/HeaderText';
import Octicons from '@expo/vector-icons/Octicons';

import { styles, cardStyle } from '../../styles/styles';
import { rabbit } from '../../styles/palette';

import { useConnection, useSendbirdChat } from '@sendbird/uikit-react-native';

// User Context
import { useUserContext } from '../../utils/UserContext';
import reducer from '../../utils/reducers';

import auth from '../../utils/auth';

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
        <TouchableOpacity centerH>
          <View row>
            <Image source={{ uri: currentUser.profileUrl }} style={styles.profileImage} />
            <View absR>
              <Octicons name='pencil' size={rabbit.font_size} />
            </View>
          </View>

          <Text style={styles.text} center>
            Hello {currentUser.userId}!
          </Text>
        </TouchableOpacity>

        <ListItem>
          <View flex row centerV>
            <View marginR-s1>
              <Octicons name='person' size={rabbit.font_size} />
            </View>
            <Text style={styles.text}>Update user profile</Text>
          </View>
        </ListItem>

        <ListItem>
          <View flex row centerV>
            <View marginR-s1>
              <Octicons name='mail' size={rabbit.font_size} />
            </View>
            <Text style={styles.text}>Update email and password</Text>
          </View>
        </ListItem>

        <ListItem>
          <View flex row centerV>
            <View marginR-s1>
              <Octicons name='info' size={rabbit.font_size} />
            </View>
            <Text style={styles.text}>Change weather units</Text>
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

const style = {
  container: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingTop: 15,
    paddingBottom: 8,
    alignItems: 'center',
  },
  profileImageContainer: {
    position: 'relative',
    width: 40,
    height: 40,
    marginRight: 12,
  },
  profileImage: {
    position: 'absolute',
    width: 40,
    height: 40,
    borderWidth: 0,
    borderRadius: 20,
  },
  check: {
    position: 'absolute',
    width: 40,
    height: 40,
    opacity: 0.6,
    borderWidth: 0,
    borderRadius: 20,
    backgroundColor: '#666',
  },
  nickname: {
    fontSize: 18,
    color: '#666',
  },
};

export default UserSettings;
