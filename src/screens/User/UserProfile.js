import { StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native-ui-lib';
import Auth from '../../utils/auth';

const UserProfile = (props) => {
  //console.log(Auth.getProfile()); -> can't get getProfile()

  return (
    <View>
      <Text>Hello! </Text>
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

export default UserProfile;
