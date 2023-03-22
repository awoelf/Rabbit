import React from 'react';
import { Linking } from 'react-native';
import { TouchableOpacity, Button, View, Text } from 'react-native-ui-lib';
import Octicons from '@expo/vector-icons/Octicons';

import { iconStyle, styles } from '../../styles/styles';

import Header from '../../components/Header';
import HeaderText from '../../components/HeaderText';
import Container from '../../components/Container';

const AboutApp = (props) => {
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
          <HeaderText>About App</HeaderText>
        </View>
      </Header>
      <Container>
        <Text style={styles.text} marginB-s4>
          Rabbit lets users message others, check weather, and look up news. It is created by two
          recent coding bootcamp graduates who are excited to create new apps!
        </Text>
        <View centerH>
          <Button
            style={styles.button}
            onPress={async () => await Linking.openURL(`https://github.com/awoelf/Rabbit`)}
          >
            <Octicons name='mark-github' style={iconStyle.icon} />
            <Text marginL-s2 style={styles.text}>
              GitHub Repo
            </Text>
          </Button>
        </View>
      </Container>
    </>
  );
};

export default AboutApp;
