import axios from 'axios';
import { useState, useEffect } from 'react';
import { Card, Text, LoaderScreen, Icon, View, ListItem } from 'react-native-ui-lib';
import { WEATHER_API_KEY, CURRENT_WEATHER_URL } from '@env';
import { useUserContext } from '../../utils/UserContext';
import { styles, cardStyle } from '../../styles/styles';
import Octicons from '@expo/vector-icons/Octicons';
import Feather from '@expo/vector-icons/Feather';

// Components
import Container from '../../components/Container';
import Header from '../../components/Header';
import HeaderText from '../../components/HeaderText';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const userContext = useUserContext();
  const { latitude, longitude } = userContext.location.coords;
  const units = userContext.units;

  const GetWeather = async () => {
    const response = await axios({
      method: 'get',
      url: `${CURRENT_WEATHER_URL}?lat=${latitude}&lon=${longitude}&units=${units}&appid=${WEATHER_API_KEY}`,
      responseType: 'json',
    });

    setWeatherData(response.data);
    console.log(weatherData);
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
              <View row center>
                <Icon
                  source={{
                    uri: `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`,
                  }}
                  size={100}
                />
                <Text>{weatherData.main.temp}°</Text>
              </View>
              <Text>{weatherData.weather[0].description}</Text>
              <View row centerV>
                <Octicons name='location' />
                <Text>{weatherData.name}</Text>
              </View>
            </View>

            <Card>
              <ListItem>
                <View>
                  <Feather name='thermometer' size={24} color='black' />
                  <Text>Feels like</Text>
                </View>
              </ListItem>
              <ListItem>
                <View>
                <Feather name='cloud-snow' size={24} color='black' />
                  <Text>Pressure</Text>
                </View>
              </ListItem>
              <ListItem>
                <View>
                  <Feather name='cloud-rain' size={24} color='black' />
                  <Text>Rain</Text>
                </View>
              </ListItem>
              <ListItem>
                <View>
                  <Feather name='droplet' size={24} color='black' />
                  <Text>Humidity</Text>
                </View>
              </ListItem>
              <ListItem>
                <View>
                  <Feather name='wind' size={24} color='black' />
                  <Text>Wind</Text>
                </View>
              </ListItem>
              <ListItem>
                <View>
                  <Feather name='cloud' size={24} color='black' />
                  <Text>Clouds</Text>
                </View>
              </ListItem>
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
