import axios from 'axios';
import * as Location from 'expo-location'
import { Card } from 'react-native-ui-lib';
import { WEATHER_API_KEY, CURRENT_WEATHER_URL } from '@env';
import { styles, cardStyle } from '../styles/styles';

const GetWeather = async () => {
  let { status } = await Location.requestForegroundPermissionsAsync();

  if(status !== 'granted') {
    console.log('Location is required to use this feature.');
    return;
  }

  const location = await Location.getCurrentPositionAsync();
  const { latitude, longitude } = location.coords;
  const response = await axios({
    method: 'get',
    url: `${CURRENT_WEATHER_URL}?lat=${latitude}&lon=${longitude}&key=${WEATHER_API_KEY}`,
    responseType: 'json'
  })
  return response.data.data;
}

const Weather = async () => {
  return (
    <Card style={cardStyle}>
      
    </Card>
  )
}

export default Weather;