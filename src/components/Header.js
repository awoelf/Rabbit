import { View } from 'react-native-ui-lib';

import { headerStyle } from '../styles/styles';

const Header = ({ children }) => {
  return (
    <View row spread centerV style={headerStyle} height={50}>
      {children}
    </View>
  );
};

export default Header;
