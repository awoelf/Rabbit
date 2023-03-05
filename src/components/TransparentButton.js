import { Button } from 'react-native-ui-lib';
import Octicons from '@expo/vector-icons/Octicons';
import { useNavigation } from '@react-navigation/native';

import { iconStyle } from '../styles/styles';

const TransparentButton = ({ page, icon }) => {
  const navigation = useNavigation();
  return (
    <Button
      iconSource={() => <Octicons name={icon} style={iconStyle.icon} />}
      onPress={navigation.navigate(page)}
      style={iconStyle.transparent}
      size={Button.sizes.xSmall}
    />
  );
};

export default TransparentButton;
