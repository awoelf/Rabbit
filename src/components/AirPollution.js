import { View, Text, Icon } from 'react-native-ui-lib';
import { BarChart } from 'react-native-chart-kit';

import { weatherStyle } from '../styles/styles';

const AirPollution = ({ labels, data }) => {
  return (
    <View>
        <BarChart/>
    </View>
  );
};

export default AirPollution;
