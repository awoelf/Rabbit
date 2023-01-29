import React from 'react';
import { StyleSheet, Image, SafeAreaView } from 'react-native';
import { Text, Button } from 'react-native-ui-lib';

import Auth from '../src/utils/auth';

const Header = ({ screenName, children }) => {
  if (Auth.loggedIn()) {
    return (
      <SafeAreaView style={styles.header}>
        <Text>{screenName}</Text>
        {children}
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  header: {
    // width: '100%',
    flexDirection: 'column',
    // alignContent: 'center',
    justifyContent: 'center',
    // padding: 20,
  },
});

export default Header;
