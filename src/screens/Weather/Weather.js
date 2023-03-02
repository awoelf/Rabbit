import axios from 'axios';
import { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import { Card, Text, LoaderScreen, Icon, View, GridView, ListItem } from 'react-native-ui-lib';
import { WEATHER_API_KEY, WEATHER_URL, AIR_POLLUTION_URL } from '@env';
import { useUserContext } from '../../utils/UserContext';
import { styles, cardStyle, weatherStyle } from '../../styles/styles';
import { rabbit } from '../../styles/palette';
import Octicons from '@expo/vector-icons/Octicons';
import dayjs from 'dayjs';

// Components
import Container from '../../components/Container';
import Header from '../../components/Header';
import HeaderText from '../../components/HeaderText';
import WeatherDetail from '../../components/WeatherDetail';
import ForecastDay from '../../components/ForecastDay';
import AirPollution from '../../components/AirPollution';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [airData, setAirData] = useState(null);
  const userContext = useUserContext();
  const { latitude, longitude } = userContext.stateLocation.data.location.coords;
  // const { latitude, longitude } = userContext.location.coords;
  const city = userContext.stateLocation.data.geocode.city;
  const units = userContext.units;

  const GetWeather = async () => {
    const response = await axios({
      method: 'get',
      url: `${WEATHER_URL}?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=${units}&appid=${WEATHER_API_KEY}`,
      responseType: 'json',
    });

    setWeatherData(response.data);
  };

  const GetAirPollution = async () => {
    const response = await axios({
      method: 'get',
      url: `${AIR_POLLUTION_URL}?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}`,
      responseType: 'json',
    });

    setAirData(response.data);
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
        <Container removeTopMargin={true}>
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
                  <Text style={styles.header1}>
                    {weatherData.current.temp}°
                    {units === 'Imperial' ? <Text>F</Text> : <Text>C</Text>}
                  </Text>
                </View>
                <Text style={styles.header2}>
                  {weatherData.current.weather[0].description.charAt(0).toUpperCase() +
                    weatherData.current.weather[0].description.slice(1)}
                </Text>
                <View row centerV>
                  <View paddingR-s1>
                    <Octicons name='location' size={rabbit.font_size_header2} />
                  </View>
                  <Text style={styles.header2}>{city}</Text>
                </View>
              </View>

              <Card style={cardStyle}>
                <WeatherDetail name={'Feels like'} iconName={'thermometer'}>
                  <Text style={styles.text}>{weatherData.current.feels_like}°</Text>
                </WeatherDetail>
                <WeatherDetail name={'Pressure'} iconName={'cloud-snow'}>
                  <Text style={styles.text}>{weatherData.current.pressure} hPa</Text>
                </WeatherDetail>
                <WeatherDetail name={'Humidity'} iconName={'droplet'}>
                  <Text style={styles.text}>{weatherData.current.humidity}%</Text>
                </WeatherDetail>
                <WeatherDetail name={'Wind speed'} iconName={'wind'}>
                  <Text style={styles.text}>{weatherData.current.wind_speed} mi/hr</Text>
                </WeatherDetail>
                <WeatherDetail name={'Clouds'} iconName={'cloud'} hideBorder={true}>
                  <Text style={styles.text}>{weatherData.current.clouds}%</Text>
                </WeatherDetail>
              </Card>

              {/* TO DO: add week forecast and air pollution */}
              <Card style={cardStyle}>
                <ScrollView horizontal={true}>
                  {weatherData.daily.map((day, key, array) => (
                    <View key={key}>
                      {key < array.length - 1 ? (
                        <ForecastDay
                          temp={day.temp.day}
                          iconCode={day.weather[0].icon}
                          day={dayjs.unix(day.dt).format('ddd')}
                        />
                      ) : (
                        <ForecastDay
                          temp={day.temp.day}
                          iconCode={day.weather[0].icon}
                          day={dayjs.unix(day.dt).format('ddd')}
                          hideBorder={true}
                        />
                      )}
                    </View>
                  ))}
                </ScrollView>
              </Card>

              <Card>{/* <AirPollution /> */}</Card>
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
