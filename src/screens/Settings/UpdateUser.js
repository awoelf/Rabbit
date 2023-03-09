import {
  TouchableOpacity,
  Switch,
  View,
  Text,
  Image,
  Button,
  RadioGroup,
  RadioButton,
  Avatar,
} from 'react-native-ui-lib';
import Octicons from '@expo/vector-icons/Octicons';
import { ScrollView } from 'react-native';
import { useState } from 'react';

import { iconStyle, styles } from '../../styles/styles';
import { rabbit } from '../../styles/palette';

import Header from '../../components/Header';
import HeaderText from '../../components/HeaderText';
import Container from '../../components/Container';

import { useSendbirdChat } from '@sendbird/uikit-react-native';

const avatarStyles = [
  {
    options: 'top',
    name: 'bigHair',
  },
  {
    options: 'top',
    name: 'bob',
  },
  {
    options: 'top',
    name: 'curvy',
  },
  {
    options: 'top',
    name: 'hat',
  },
  {
    options: 'top',
    name: 'shaggy',
  },
  {
    options: 'top',
    name: 'shortRound',
  },
  {
    options: 'top',
    name: 'shortCurly',
  },
  {
    options: 'mouth',
    name: 'concerned',
  },
  {
    options: 'mouth',
    name: 'eating',
  },
  {
    options: 'mouth',
    name: 'tongue',
  },
  {
    options: 'mouth',
    name: 'smile',
  },
];

const UpdateUser = (props) => {
  const { currentUser, updateCurrentUserInfo } = useSendbirdChat();

  const [value, setValue] = useState('');

  const changeAvatar = async () => {
    const updatedUserWithUrl = await updateCurrentUserInfo(currentUser.nickname, value);
    console.log(updatedUserWithUrl);
    props.navigation.goBack();
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
          <HeaderText>Change Avatar</HeaderText>
        </View>
      </Header>
      <ScrollView>
        <View marginT-30 marginH-20 flex-1>
          <RadioGroup
            flex-1
            initialValue={value}
            onValueChange={(newValue) => setValue(newValue)}
            value={value}
          >
            <View
              margin-10
              padding-5
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
              }}
            >
              {avatarStyles.map((style) => {
                const uri = `https://avatars.dicebear.com/api/avataaars/${currentUser.nickname}.png?${style.options}=${style.name}`;

                return (
                  <View>
                    {/* <AvatarCard uri={style} /> */}
                    <Image key={uri} source={{ uri: uri }} style={styles.profileImage} />
                    <RadioButton value={uri} label={style.name} />
                  </View>
                );
              })}
            </View>
          </RadioGroup>
          <Button style={styles.button} center onPress={changeAvatar}>
            <Text style={styles.text}>Change Avatar</Text>
          </Button>
        </View>
      </ScrollView>
    </>
  );
};

export default UpdateUser;
