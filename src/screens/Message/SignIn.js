import { useConnection } from '@sendbird/uikit-react-native';
import auth from '../../utils/auth';
import { LoaderScreen } from 'react-native-ui-lib';

// TODO: When user signs into app, automatically log in to sendbird
// Get user context for user_id and nickname
const SignIn = () => {
  const { connect } = useConnection();
  if (auth.loggedIn) {
    connect('USER_ID', { nickname: 'NICKNAME' });
  }
  return <LoaderScreen message={'Loading'} />;
};

export default SignIn;
