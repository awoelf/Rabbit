import { StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native-ui-lib';

const Register = (props) => {
  return (
    <View>
      <Text>Hello! Register</Text>
      <StatusBar style='auto' />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Register;
