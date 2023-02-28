import axios from 'axios';
import { useState, useEffect } from 'react';
import { Card, Text, LoaderScreen, Icon, View, ListItem } from 'react-native-ui-lib';
import { WEATHER_API_KEY, WEATHER_URL, FORECAST_API_KEY, FORECAST_URL } from '@env';
import { useUserContext } from '../../utils/UserContext';
import { styles, cardStyle } from '../../styles/styles';
import Octicons from '@expo/vector-icons/Octicons';

// Components
import Container from '../../components/Container';
import Header from '../../components/Header';
import HeaderText from '../../components/HeaderText';
import WeatherDetail from '../../components/WeatherDetail';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const userContext = useUserContext();
  const { latitude, longitude } = userContext.location.coords;
  const city = userContext.geocode.city;
  const units = userContext.units;

  const GetWeather = async () => {
    const response = await axios({
      method: 'get',
      url: `${WEATHER_URL}?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=${units}&appid=${WEATHER_API_KEY}`,
      responseType: 'json',
    });

    setWeatherData(response.data);
  };

  useEffect(() => {
    GetWeather();
  }, []);

  return (
    <>
      <Header>
        <HeaderText>Weather</HeaderText>
      </Header>
      <Container>
        {weatherData ? (
          <>
            <View centerH>
              <View row centerV>
                <Icon
                  source={{
                    uri: `https://openweathermap.org/img/wn/${weatherData.current.weather[0].icon}@4x.png`,
                  }}
                  size={100}
                />
                <Text>{weatherData.current.temp}°</Text>
              </View>
              <Text>{weatherData.current.weather[0].description}</Text>
              <View row centerV>
                <Octicons name='location' />
                <Text>{city}</Text>
              </View>
            </View>

            <Card>
              <WeatherDetail name={'Feels like'} iconName={'thermometer'}>
                <Text>{weatherData.current.feels_like}°</Text>
              </WeatherDetail>
              <WeatherDetail name={'Pressure'} iconName={'cloud-snow'}>
                <Text>{weatherData.current.pressure} hPa</Text>
              </WeatherDetail>
              <WeatherDetail name={'Humidity'} iconName={'droplet'}>
                <Text>{weatherData.current.humidity}%</Text>
              </WeatherDetail>
              <WeatherDetail name={'Wind speed'} iconName={'wind'}>
                <Text>{weatherData.current.wind_speed} mi/hr</Text>
              </WeatherDetail>
              <WeatherDetail name={'Clouds'} iconName={'cloud'} hideBorder={true}>
                <Text>{weatherData.current.clouds}%</Text>
              </WeatherDetail>
            </Card>
          </>
        ) : (
          <LoaderScreen />
        )}
      </Container>
    </>
  );
};

export default Weather;
