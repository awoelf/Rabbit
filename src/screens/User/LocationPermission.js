import { Text, View} from 'react-native-ui-lib';

import { styles } from '../../styles/styles';
import LocationButton from '../../components/LocationButton';

const LocationPermission = () => {
  return (
    <>
      <View flex-1 center>
        <Text center style={styles.text}>Location is required to use this app's features.</Text>
        <LocationButton />
      </View>
    </>
  )
}

export default LocationPermission;