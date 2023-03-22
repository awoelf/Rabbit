import { useConnection } from '@sendbird/uikit-react-native';
import auth from '../../utils/auth';
import { LoaderScreen } from 'react-native-ui-lib';

const Loading = (props) => {
  const { connect } = useConnection();
  if (auth.loggedIn) {
    connect('USER_ID', { nickname: 'NICKNAME' });
  }
  return <LoaderScreen message={'Loading'} />;
};

export default Loading;
