
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';


const  Register = (props) => {
  return (
      <View style={styles.container}>
        <Text>Hello! Register</Text>
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

export default Register;