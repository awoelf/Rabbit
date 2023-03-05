import React, { useReducer, useState } from 'react';
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

import * as ImagePicker from 'expo-image-picker';

const UserSettings = (props) => {
  const { currentUser, updateCurrentUserInfo } = useSendbirdChat();
  const userContext = useUserContext();
  const { disconnect } = useConnection();
  const [image, setImage] = useState(null);

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
 

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });


    if (!result.canceled) {
    
      setImage(result.assets[0].uri);
      console.log(image);

      const updatedUserWithUrl = await updateCurrentUserInfo(currentUser.nickname, image);
      console.log(updatedUserWithUrl);
      console.log("here",currentUser.plainProfileUrl)
      

    }
    
  };



  console.log(currentUser);

  return (
    <>
      <Header>
        <HeaderText>User Settings</HeaderText>
      </Header>

      <Container>
        {/* TO DO: Click on image to change profile picture */}

        <TouchableOpacity 
        centerH 
        onPress={()=>pickImage()}>
          <View row>
            {/* <Image source={{ uri: currentUser.plainProfileUrl }} style={styles.profileImage} /> */}
            <Image source={{ uri: image }} style={styles.profileImage} />
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
            <Text style={styles.text}>Update user profile</Text>
          </View>
        </ListItem>

        <ListItem onPress={() => props.navigation.navigate('UpdateEmailPassword')}>
          <View flex row centerV>
            <View marginR-s1>
              <Octicons name='mail' size={rabbit.font_size} />
            </View>
            <Text style={styles.text}>Update email and password</Text>
          </View>
        </ListItem>

        <ListItem onPress={() => props.navigation.navigate('ChangeUnits')}>
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

export default UserSettings;
