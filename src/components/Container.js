import { View } from 'react-native-ui-lib';

import { containerStyle } from '../styles/styles';

const Container = ({ children }) => {
  return (
    <View style={containerStyle}>
      {children}
    </View>
  );
};

export default Container;