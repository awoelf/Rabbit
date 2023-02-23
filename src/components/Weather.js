import axios from 'axios';
import { useState, useEffect } from 'react';
import * as Location from 'expo-location';
import { Card, Text, LoaderScreen } from 'react-native-ui-lib';
import { WEATHER_API_KEY, CURRENT_WEATHER_URL } from '@env';
import { styles, cardStyle } from '../styles/styles';

const GetWeather = async () => {
  let { status } = await Location.requestForegroundPermissionsAsync();

  if (status !== 'granted') {
    console.log('Location is required to use this feature.');
    return;
  }

  const location = await Location.getCurrentPositionAsync();
  const { latitude, longitude } = location.coords;
  const response = await axios({
    method: 'get',
    url: `${CURRENT_WEATHER_URL}?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}`,
    responseType: 'json',
    error: console.error('Error when fetching weather data.')
  });

  setWeatherData(response.data);
};

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  useEffect(() => {
    GetWeather();
  }, []);

  return (
    <>
      {weatherData ? (
        <Card>
          <Text>{weatherData.main.temp}</Text>
          <Text>{weatherData.name}</Text>
          <Text>{weatherData.weather[0].description}</Text>
        </Card>
      ) : (
        <Card>
          <LoaderScreen />
        </Card>
      )}
    </>
  );
};

export default Weather;
