import axios from 'axios';
import { useState, useEffect } from 'react';
import { Card, Text, LoaderScreen } from 'react-native-ui-lib';
import { WORD_URL, WORD_API_KEY } from '@env';
import { styles, cardStyle } from '../styles/styles';

const Word = () => {
  const [wordData, setWordData] = useState(null);
  useEffect(() => {
    const GetWord = async () => {
      const response = await axios({
        method: 'get',
        url: `${WORD_URL}?api_key=${WORD_API_KEY}`,
        responseType: 'json',
      });

      setWordData(response.data);
      console.log(response);
    };
    GetWord();
  }, []);

  return (
    <>
      {wordData ? (
        <Card>
          <Text>Word of the day: {wordData.word}</Text>
          <Text>Definition: {wordData.definitions[0].text}</Text>
        </Card>
      ) : (
        <Card>
          <LoaderScreen />
        </Card>
      )}
    </>
  );
};

export default Word;
