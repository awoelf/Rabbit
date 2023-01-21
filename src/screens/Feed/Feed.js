import React from 'react';
import { Text, TextField } from 'react-native-ui-lib';

import Container from '../../components/Container';
import Header from '../../components/Header';
import HeaderText from '../../components/HeaderText';
import TransparentButton from '../../components/TransparentButton';
import SmallButton from '../../components/SmallButton';

import { styles } from '../../styles/styles';

const MainFeed = (props) => {
  return (
    <>
      <Header>
        <HeaderText>Feed</HeaderText>
      </Header>
      <Container>
        <Text>Feed goes here</Text>
      </Container>
    </>
  );
};

export default MainFeed;
