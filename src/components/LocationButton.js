import { Button, Text, View } from 'react-native-ui-lib';
import Octicons from '@expo/vector-icons/Octicons';

import { styles } from '../styles/styles';
import { rabbit } from '../styles/palette';
import { getLocation } from '../utils/location';
import { useUserContext } from '../utils/UserContext';

const LocationButton = () => {
  const userContext = useUserContext();

  return (
    <Button
      style={styles.button}
      onPress={async () => {
        userContext.dispatchLocation({
          type: 'SET_NEW_LOCATION',
          payload: await getLocation(),
        });
      }}
      center
    >
      <View paddingR-s1>
        <Octicons name='location' size={rabbit.font_size} />
      </View>

      <Text style={styles.text}>Enable location</Text>
    </Button>
  );
};

export default LocationButton;
