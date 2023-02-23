import React from 'react';
import { Text, TextField } from 'react-native-ui-lib';
import Octicons from '@expo/vector-icons/Octicons';

import Container from '../../components/Container';
import Header from '../../components/Header';
import HeaderText from '../../components/HeaderText';
import SmallButton from '../../components/SmallButton';

// Components
import Weather from '../../components/Weather';

const Home = (props) => {
  return (
    <>
      <Header>
        <HeaderText>Home</HeaderText>
        <SmallButton icon={'plus'} />
      </Header>
      <Container>
        <Weather />
      </Container>
    </>
  );
};

export default Home;
