import { View, Text, Icon } from 'react-native-ui-lib';
import { BarChart } from 'react-native-chart-kit';

import { weatherStyle } from '../styles/styles';

const AirPollution = ({ labels, data }) => {
  return (
    <View>
      <BarChart
        data={{
          labels: ['A', 'B', 'C'],
          datasets: [
            {
              data: [100, 200, 300],
            },
          ],
        }}
        width={100}
        height={200}
      />
    </View>
  );
};

export default AirPollution;
