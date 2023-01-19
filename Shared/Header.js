import React from 'react';
import { StyleSheet, Image, SafeAreaView, Text } from 'react-native';
import { Button} from 'react-native-ui-lib';

import Auth from '../src/utils/auth'

const Header = () => {
    if (Auth.loggedIn()) {
        return (
            <SafeAreaView style={styles.header}>
                <Image source={require('../assets/icon.png')} resizeMode='contain' style={{ height: 30 }} />
                <Button 
              label={'Log Out'}
              color='red'
              size={Button.sizes.small}
              backgroundColor={{color: "black" }}
              onPress={() => {Auth.logout()}}/>
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
