import axios from 'axios';
import { useState, useEffect } from 'react';
import { Card, Text, LoaderScreen } from 'react-native-ui-lib';
import { WEATHER_API_KEY, CURRENT_WEATHER_URL } from '@env';
import { useUserContext } from '../../utils/UserContext';
import { styles, cardStyle } from '../../styles/styles';

// Components
import Container from '../../components/Container';
import Header from '../../components/Header';
import HeaderText from '../../components/HeaderText';


const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const userContext = useUserContext();
  const { latitude, longitude } = userContext.location.coords;
  
  const GetWeather = async () => {
    const response = await axios({
      method: 'get',
      url: `${CURRENT_WEATHER_URL}?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}`,
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
      </Container>
    </>
  );
};

export default Weather;
