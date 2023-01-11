import { StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native-ui-lib';

const UserProfile = (props) => {
  return (
    <View>
      <Text>Hello! User</Text>
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
