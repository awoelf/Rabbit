import React from 'react';
import { Text, TextField } from 'react-native-ui-lib';

import Container from '../../components/Container';
import Header from '../../components/Header';
import HeaderText from '../../components/HeaderText';
import TransparentButton from '../../components/TransparentButton';
import SmallButton from '../../components/SmallButton';

import { styles } from '../../styles/styles';

const UserSettings = (props) => {
  return (
    <>
      <Header>
        <HeaderText>User Settings</HeaderText>
      </Header>
      <Container>
        <Text>User Settings here</Text>
      </Container>
    </>
  );
};

export default UserSettings;
