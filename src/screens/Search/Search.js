import React from 'react';
import { Text, TextField } from 'react-native-ui-lib';

import Container from '../../components/Container';
import Header from '../../components/Header';
import HeaderText from '../../components/HeaderText';
import TransparentButton from '../../components/TransparentButton';
import SmallButton from '../../components/SmallButton';

import { styles } from '../../styles/styles';

const Search = (props) => {
  return (
    <>
      <Header>
        <HeaderText>Search</HeaderText>
        <SmallButton icon={'sort-asc'}/>
      </Header>
      <Container>
        <TextField migrate style={styles.textField} />
      </Container>
    </>
  );
};

export default Search;
