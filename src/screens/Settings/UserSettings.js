import React, { useReducer } from 'react';
import { Text, Image, View, Button } from 'react-native-ui-lib';
import Container from '../../components/Container';
import Header from '../../components/Header';
import HeaderText from '../../components/HeaderText';

import { styles } from '../../styles/styles';

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
    <View flex-1>
      <View row center flex-2>
        <Image source={{ uri: currentUser.profileUrl }} style={style.profileImage} />
        <Text style={styles.text} center>
          Hello {currentUser.userId}
        </Text>
      </View>
      <View row centerH flex-2>
        <Button style={styles.button} onPress={() => logout()}>
          <Text style={styles.text}>Log out</Text>
        </Button>
      </View>
    </View>
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
