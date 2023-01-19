import React from 'react';
import { View, TextField } from 'react-native-ui-lib';
import Octicons from '@expo/vector-icons/Octicons';

const AddContact = (props) => {
  return (
    
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Octicons name='search' />
      <TextField
        migrate
        placeholder={'Search'}
      />
    </View>
  );
};

export default AddContact;
