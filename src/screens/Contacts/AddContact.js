import React from 'react';
import { View, TextField } from 'react-native-ui-lib';
import Octicons from '@expo/vector-icons/Octicons';

const AddContact = (props) => {
  return (
    <View>
      <Octicons name='searcg' />
      <TextField
        migrate
        placeholder={'Search'}
        // onFocus={openList}
        // onChangeText={(text) => searchProduct(text)}
      />
    </View>
  );
};

export default AddContact;
