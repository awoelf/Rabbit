import axios from 'axios';
import { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import { useIsFocused, CommonActions } from '@react-navigation/native';
import { Card, Text, LoaderScreen, Icon, View, TouchableOpacity } from 'react-native-ui-lib';
import { WEATHER_API_KEY, WEATHER_URL, AIR_POLLUTION_URL } from '@env';
import { useUserContext } from '../../utils/UserContext';
import { styles, cardStyle, iconStyle } from '../../styles/styles';
import { rabbit } from '../../styles/palette';
import Octicons from '@expo/vector-icons/Octicons';
import dayjs from 'dayjs';
import { twoDecimals, roundNumber, capitalizeFirst } from '../../utils/helper';

// Components
import Container from '../../components/Container';
import Header from '../../components/Header';
import HeaderText from '../../components/HeaderText';
import WeatherDetail from '../../components/WeatherDetail';
import ForecastDay from '../../components/ForecastDay';
import AirPollution from '../../components/AirPollution';

const Weather = (props) => {
  const [weatherData, setWeatherData] = useState(null);
  const [airData, setAirData] = useState(null);
  const userContext = useUserContext();
  const { latitude, longitude } = userContext.stateLocation.data.location.coords;
  const city = userContext.stateLocation.data.geocode.city;
  const usingMetric = userContext.stateUnits.units;
  const isFocused = useIsFocused();

  const GetWeather = async () => {
    try {
      const response = await axios({
        method: 'get',
        url: `${WEATHER_URL}?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=${
          usingMetric ? 'metric' : 'imperial'
        }&appid=${WEATHER_API_KEY}`,
        responseType: 'json',
      });

      setWeatherData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const GetAirPollution = async () => {
    try {
      const response = await axios({
        method: 'get',
        url: `${AIR_POLLUTION_URL}?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}`,
        responseType: 'json',
      });

      setAirData(response.data.list[0].components);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetWeather();
    GetAirPollution();
  }, [isFocused]);

  return (
    <>
      <Header>
        <HeaderText>Weather</HeaderText>
        <TouchableOpacity
          onPress={() => {
            GetWeather();
            GetAirPollution();
          }}
        >
          <Octicons name='sync' style={iconStyle.icon} />
        </TouchableOpacity>
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
                    {weatherData.current.temp}°{usingMetric ? <Text>C</Text> : <Text>F</Text>}
                  </Text>
                </View>
                <Text style={styles.header2}>
                  {capitalizeFirst(weatherData.current.weather[0].description)}
                </Text>
                <View row centerV>
                  <View paddingR-s1>
                    <Octicons name='location' size={rabbit.font_size_header2} />
                  </View>
                  <Text style={styles.header2}>{city}</Text>
                </View>
              </View>

              <Card style={cardStyle}>
                <Text center marginT-s3 style={styles.text}>
                  Weather Details
                </Text>
                <WeatherDetail name={'Feels like'} iconName={'thermometer'}>
                  <Text style={styles.text}>{twoDecimals(weatherData.current.feels_like)}°</Text>
                </WeatherDetail>
                <WeatherDetail name={'Pressure'} iconName={'cloud-snow'}>
                  <Text style={styles.text}>{roundNumber(weatherData.current.pressure)} hPa</Text>
                </WeatherDetail>
                <WeatherDetail name={'Humidity'} iconName={'droplet'}>
                  <Text style={styles.text}>{roundNumber(weatherData.current.humidity)}%</Text>
                </WeatherDetail>
                <WeatherDetail name={'Wind speed'} iconName={'wind'}>
                  <Text style={styles.text}>
                    {roundNumber(weatherData.current.wind_speed)}{' '}
                    {usingMetric ? <Text>m/sec</Text> : <Text>mi/hr</Text>}
                  </Text>
                </WeatherDetail>
                <WeatherDetail name={'Clouds'} iconName={'cloud'} hideBorder={true}>
                  <Text style={styles.text}>{roundNumber(weatherData.current.clouds)}%</Text>
                </WeatherDetail>
              </Card>

              <Card style={cardStyle}>
                <Text center marginT-s3 style={styles.text}>
                  Weekly Forecast
                </Text>
                <ScrollView horizontal={true}>
                  {weatherData.daily.map((day, key, array) => (
                    <View key={key}>
                      {key < array.length - 1 ? (
                        <ForecastDay
                          temp={twoDecimals(day.temp.day)}
                          iconCode={day.weather[0].icon}
                          day={dayjs.unix(day.dt).format('ddd')}
                        />
                      ) : (
                        <ForecastDay
                          temp={twoDecimals(day.temp.day)}
                          iconCode={day.weather[0].icon}
                          day={dayjs.unix(day.dt).format('ddd')}
                          hideBorder={true}
                        />
                      )}
                    </View>
                  ))}
                </ScrollView>
              </Card>

              <Card style={cardStyle}>
                <Text center marginT-s3 style={styles.text}>
                  Air Pollution (μg/m3)
                </Text>
                <AirPollution data={airData} />
              </Card>
            </>
          ) : (
            <LoaderScreen loaderColor={rabbit.accent_color}/>
          )}
        </Container>
      </ScrollView>
    </>
  );
};

export default Weather;
