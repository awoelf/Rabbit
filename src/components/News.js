import axios from 'axios';
import { useState, useEffect } from 'react';
import { Card, Text, LoaderScreen } from 'react-native-ui-lib';
import { NEWS_URL, NEWS_API_KEY } from '@env';
import { styles, cardStyle } from '../styles/styles';

const News = () => {
  const [newsData, setNewsData] = useState(null);
  useEffect(() => {
    const GetNews = async () => {
      const response = await axios({
        method: 'get',
        url: `${NEWS_URL}&apiKey=${NEWS_API_KEY}`,
        responseType: 'json',
      });

      setNewsData(response.data);
    };
    GetNews();
  }, []);

  return (
    <>
      {newsData ? (
        // Only displays 1 headlines at the moment.
        // TODO: Create a map that renders each headline and link
        <Card><Text>Top headlines: {newsData.articles[0].title}</Text></Card>
      ) : (
        <Card>
          <LoaderScreen />
        </Card>
      )}
    </>
  );
};

export default News;
