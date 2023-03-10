import { View, Text, Icon } from 'react-native-ui-lib';
import { WEATHER_IMAGE_URL } from '@env'
import { weatherStyle } from '../styles/styles';

const ForecastDay = ({ temp, day, iconCode, hideBorder }) => {
  return (
    <View paddingH-s2 marginV-s2 style={hideBorder ? null : weatherStyle.borderRight}>
      <View centerH>
        <Icon
          source={{
            uri: `${WEATHER_IMAGE_URL}${iconCode}@2x.png`,
          }}
          size={40}
        />
        <Text>{temp}°</Text>
        <Text>{day}</Text>
      </View>
    </View>
  );
};

export default ForecastDay;
