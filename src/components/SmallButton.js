import { Button } from 'react-native-ui-lib';
import Octicons from '@expo/vector-icons/Octicons';
import { useNavigation } from '@react-navigation/native';

import { iconStyle } from '../styles/styles';

const SmallButton = ({ page, icon }) => {
  const navigation = useNavigation();
  return (
    <Button
      iconSource={() => <Octicons name={icon} style={iconStyle.icon} />}
      onPress={() => navigation.navigate(page)}
      style={iconStyle.button}
      size={Button.sizes.xSmall}
    />
  );
};

export default SmallButton;
