import { Text } from 'react-native-ui-lib';

import { styles } from '../styles/styles';

const HeaderText = ({ children }) => {
  return (
    <Text style={styles.header2}>{children}</Text>
  );
};

export default HeaderText;
