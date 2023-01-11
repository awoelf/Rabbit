import { Pressable, Text, View } from 'react-native';
import { useConnection } from '@sendbird/uikit-react-native';

// TODO: When user signs into app, automatically log in to sendbird
const SignIn = () => {
  const { connect } = useConnection();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Pressable
        style={{
          width: 120,
          height: 30,
          backgroundColor: '#742DDD',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        // user id and nickname will be from user
        onPress={() => connect('USER_ID', { nickname: 'NICKNAME' })}
      >
        <Text style={{ color: 'white' }}>{'Sign in'}</Text>
      </Pressable>
    </View>
  );
};

export default SignIn;
