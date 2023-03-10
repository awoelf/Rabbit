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
import { ScrollView } from "react-native"
import { useState, useEffect } from 'react';

import { iconStyle, styles } from '../../styles/styles';
import { rabbit } from '../../styles/palette';

import Header from '../../components/Header';
import HeaderText from '../../components/HeaderText';
import Container from '../../components/Container';

import { useSendbirdChat } from '@sendbird/uikit-react-native';

const randomCharacter = (nickname) => {

  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < 3) {
    nickname += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return nickname;
}

//Create random avatar character based on nickname
const createAvatarType = (nickname) => {
  const avatarType = [];
  for (let i = 0; i < 10; i++) {
    avatarType.push(randomCharacter(nickname))
  }
  return avatarType;
}

const avatarStyles = [{
  options: "top",
  name: "bigHair"

}, {
  options: "top",
  name: "bob"

}, {
  options: "top",
  name: "curvy"

},
{
  options: "top",
  name: "hat"

}, {
  options: "top",
  name: "shaggy"

}, {
  options: "top",
  name: "shortRound"

}, {
  options: "top",
  name: "shortCurly"

},{
  options: "eyes",
  name: "closed"
},{
  options: "eyes",
  name: "cry"
},
{
  options: "eyes",
  name: "happy"
},
{
  options: "eyes",
  name: "hearts"
},
{
  options: "eyes",
  name: "wink"
},
{
  options: "eyes",
  name: "surprised"
},
{
  options: "mouth",
  name: "concerned"

}, {
  options: "mouth",
  name: "eating"

}, {
  options: "mouth",
  name: "tongue"

},
{
  options: "mouth",
  name: "smile"

}
]


const UpdateUser = (props) => {
  const { currentUser, updateCurrentUserInfo } = useSendbirdChat();

  const [value, setValue] = useState('');
  const [avatarCharacter, setAvatarCharacter] = useState('');
  const [avatarType, setAvatarType] = useState([]);
  const [topValue, setTopValue] = useState('');
  const [eyeValue, setEyeValue] = useState('');
  const [mouthValue, setMouthValue] = useState('');
  const [tempUrl, setTempUrl] = useState(currentUser.plainProfileUrl);


  const changeAvatar = async () => {
    const updatedUserWithUrl = await updateCurrentUserInfo(currentUser.nickname, tempUrl);
    props.navigation.goBack();
  }

  useEffect(() => {
    setAvatarType(createAvatarType(currentUser.nickname));
  }, []);





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

      <View row centerH>
        <Image source={{ uri: tempUrl }} style={styles.profileImage} />
      </View>


      <ScrollView>
        <View marginT-30 marginH-20 flex-1>
          <Text>Character</Text>
          <RadioGroup flex-1 initialValue={avatarCharacter} onValueChange={newValue => setAvatarCharacter(newValue)} value={avatarCharacter}>
            <ScrollView horizontal={true}>
              <View margin-10 padding-5 style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                {
                  avatarType.map((type) => {
                    const uri = `https://avatars.dicebear.com/api/avataaars/${type}.png?`

                    return (
                      <View key={uri} >
                        <Image source={{ uri: uri }} style={styles.profileImage} />
                        <RadioButton value={type} onPress={()=>{
                          setTempUrl(`https://avatars.dicebear.com/api/avataaars/${type}.png?`)}} />
                      </View>
                    )

                  })}
              </View>
            </ScrollView>
          </RadioGroup>

          <Text>Top</Text>
          <RadioGroup flex-1 initialValue={topValue} onValueChange={newValue => setTopValue(newValue)} value={topValue}>
            <ScrollView horizontal={true}>
              <View margin-10 padding-5 style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                {
                  avatarStyles.map((style) => {
                    if(style.options==='top'){
                      const uri = `https://avatars.dicebear.com/api/avataaars/${currentUser.nickname}.png?${style.options}=${style.name}`
              
                      return (
                        <View key={`${style.options}=${style.name}`}>
                          <Image key={uri} source={{ uri: uri }} style={styles.profileImage} />
                          <RadioButton value={`${style.options}=${style.name}`} label={style.name} onPress={()=>{
                            setTempUrl(`https://avatars.dicebear.com/api/avataaars/${avatarCharacter}.png?${style.options}=${style.name}${eyeValue}${mouthValue}`)}}/>
                        </View>
                      )

                    }

                   
                  })}
              </View>
            </ScrollView>

          </RadioGroup>

          <Text>Eyes</Text>
          <RadioGroup flex-1 initialValue={eyeValue} onValueChange={newValue => setEyeValue(newValue)} value={eyeValue}>
            <ScrollView horizontal={true}>
            <View margin-10 padding-5 style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                {
                  avatarStyles.map((style) => {
                    if(style.options==='eyes'){
                      const uri = `https://avatars.dicebear.com/api/avataaars/${currentUser.nickname}.png?${style.options}=${style.name}`
              
                      return (
                        <View key={`${style.options}=${style.name}`} >
                          <Image key={uri} source={{ uri: uri }} style={styles.profileImage} />
                          <RadioButton value={`&${style.options}=${style.name}`} label={style.name} onPress={()=>{
                            setTempUrl(`https://avatars.dicebear.com/api/avataaars/${avatarCharacter}.png?${topValue}${mouthValue}&${style.options}=${style.name}`)}}/>
                        </View>
                      )

                    }
                   
                  })}
              </View>
            </ScrollView>
            </RadioGroup>

            <Text>Mouth</Text>
            <RadioGroup flex-1 initialValue={mouthValue} onValueChange={newValue => setMouthValue(newValue)} value={mouthValue}>
              <ScrollView horizontal={true}>
              <View margin-10 padding-5 style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                {
                  avatarStyles.map((style) => {
                    if(style.options==='mouth'){
                      const uri = `https://avatars.dicebear.com/api/avataaars/${currentUser.nickname}.png?${style.options}=${style.name}`
              
                      return (
                        <View key={`${style.options}=${style.name}`}>
                          <Image key={uri} source={{ uri: uri }} style={styles.profileImage} />
                          <RadioButton value={`&${style.options}=${style.name}`} label={style.name} onPress={()=>{
                            setTempUrl(`https://avatars.dicebear.com/api/avataaars/${avatarCharacter}.png?${topValue}${eyeValue}&${style.options}=${style.name}`)}}/>
                        </View>
                      )

                    }
                   
                  })}
              </View>
              </ScrollView>

            </RadioGroup>

            <Button
              style={styles.button}
              center
              onPress={changeAvatar}
            >
              <Text style={styles.text}>Change Avatar</Text>
            </Button>


        </View>
      </ScrollView>
    </>
  );
};

export default UpdateUser;
