import { ListItem, View, Text } from 'react-native-ui-lib';
import Feather from '@expo/vector-icons/Feather';

import { weatherStyle } from '../styles/styles';

const WeatherDetail = ({ iconName, name, hideBorder, children }) => {
  return (
    <ListItem marginH-s3 style={hideBorder ? null : weatherStyle.borderBottom}>
      <View row centerV flex spread>
        <View row centerV>
          <View marginR-s3>
            <Feather name={iconName} size={24} color='black' />
          </View>
          <Text>{name}</Text>
        </View>
        {children}
      </View>
    </ListItem>
  );
};

export default WeatherDetail;
