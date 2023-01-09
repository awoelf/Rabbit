
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';


const UserProfile=(props)=> {
  return (
      <View style={styles.container}>
        <Text>Hello! User</Text>
        <StatusBar style="auto" />
      </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  
  },
});

export default UserProfile;