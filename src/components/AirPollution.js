import { Dimensions } from 'react-native';
import { View, Text, Icon, LoaderScreen } from 'react-native-ui-lib';
import { BarChart } from 'react-native-chart-kit';

import { weatherStyle } from '../styles/styles';
import { rabbit } from '../styles/palette';

const AirPollution = ({ data }) => {
  const screenWidth = Dimensions.get('window').width;
  return (
    <BarChart
      data={{
        labels: Object.keys(data),
        datasets: [
          {
            data: Object?.values(data),
          },
        ],
      }}
      width={screenWidth - 2 * rabbit.container_padding}
      height={250}
      verticalLabelRotation={45}
      xLabelsOffset={-15}
      yLabelsOffset={10}
      chartConfig={{
        backgroundGradientFrom: rabbit.box_color,
        backgroundGradientTo: rabbit.box_color,
        decimalPlaces: 0, // optional, defaults to 2dp
        barPercentage: 0.3,
        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
      }}
      style={{
        borderRadius: rabbit.border_radius,
      }}
    />
  );
};

export default AirPollution;
