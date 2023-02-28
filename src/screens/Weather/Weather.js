import axios from 'axios';
import { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import { Card, Text, LoaderScreen, Icon, View, GridView, ListItem } from 'react-native-ui-lib';
import { WEATHER_API_KEY, WEATHER_URL } from '@env';
import { useUserContext } from '../../utils/UserContext';
import { styles, cardStyle, weatherStyle } from '../../styles/styles';
import Octicons from '@expo/vector-icons/Octicons';
import { toDate } from 'unix-timestamp';

// Components
import Container from '../../components/Container';
import Header from '../../components/Header';
import HeaderText from '../../components/HeaderText';
import WeatherDetail from '../../components/WeatherDetail';
import ForecastDay from '../../components/ForecastDay';

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
      <ScrollView>
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

              {/* TO DO: add week forecast and map */}
              <Card>
                <ScrollView horizontal={true}>
                  {weatherData.daily.map((day, key, array) => (
                    <View key={key}>
                      {key < array.length - 1 ? (
                        <ForecastDay
                          temp={day.temp.day}
                          iconCode={day.weather[0].icon}
                          day={day.dt}
                        />
                      ) : (
                        <ForecastDay
                          temp={day.temp.day}
                          iconCode={day.weather[0].icon}
                          day={day.dt}
                          hideBorder={true}
                        />
                      )}
                    </View>
                  ))}
                </ScrollView>
              </Card>
            </>
          ) : (
            <LoaderScreen />
          )}
        </Container>
      </ScrollView>
    </>
  );
};

export default Weather;
