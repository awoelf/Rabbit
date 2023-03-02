import { View } from 'react-native-ui-lib';

import { containerStyle } from '../styles/styles';

const Container = ({ children, removeTopMargin }) => {
  return (
    <View style={removeTopMargin ? {...containerStyle, marginTop: 0} : containerStyle}>
      {children}
    </View>
  );
};

export default Container;