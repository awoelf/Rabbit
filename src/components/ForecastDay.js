import { View, Text, Icon } from 'react-native-ui-lib';

import { weatherStyle } from '../styles/styles';

const ForecastDay = ({ temp, day, iconCode, hideBorder }) => {
  return (
    <View paddingH-s2 marginV-s2 style={hideBorder ? null : weatherStyle.borderRight}>
      <View centerH>
        <Icon
          source={{
            uri: `https://openweathermap.org/img/wn/${iconCode}@2x.png`,
          }}
          size={40}
        />
        <Text>{temp}°</Text>
      </View>
    </View>
  );
};

export default ForecastDay;
