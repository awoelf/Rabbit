import { View, Text } from 'react-native-ui-lib';
import Feather from '@expo/vector-icons/Feather';

import { styles, weatherStyle } from '../styles/styles';
import { rabbit } from '../styles/palette'; 

const WeatherDetail = ({ iconName, name, hideBorder, children }) => {
  return (
    <View marginH-s3 paddingV-s3 style={hideBorder ? null : weatherStyle.borderBottom}>
      <View row centerV flex spread>
        <View row centerV>
          <View marginR-s3>
            <Feather name={iconName} size={rabbit.font_size_header2} color='black' />
          </View>
          <Text style={styles.text}>{name}</Text>
        </View>
        {children}
      </View>
    </View>
  );
};

export default WeatherDetail;
