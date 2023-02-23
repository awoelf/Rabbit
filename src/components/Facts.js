import axios from 'axios';
import { useState, useEffect } from 'react';
import { Card, Text, LoaderScreen } from 'react-native-ui-lib';
import { FACTS_URL, NINJA_API_KEY } from '@env';
import { styles, cardStyle } from '../styles/styles';

const Facts = () => {
  const [factsData, setFactsData] = useState(null);
  useEffect(() => {
    const GetFacts = async () => {
      const response = await axios({
        method: 'get',
        url: FACTS_URL,
        headers: { 'X-Api-Key': NINJA_API_KEY },
        responseType: 'json',
      });

      setFactsData(response.data);
    };
    GetFacts();
  }, []);

  return (
    <>
      {factsData ? (
        <Card><Text>Fun fact: {factsData[0].fact}</Text></Card>
      ) : (
        <Card>
          <LoaderScreen />
        </Card>
      )}
    </>
  );
};

export default Facts;
