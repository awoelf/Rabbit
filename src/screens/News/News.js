import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Card, Text, LoaderScreen } from 'react-native-ui-lib';
import { NEWS_URL, NEWS_API_KEY, FACTS_URL, NINJA_API_KEY } from '@env';

// Components
import Container from '../../components/Container';
import Header from '../../components/Header';
import HeaderText from '../../components/HeaderText';
import SmallButton from '../../components/SmallButton';

const News = () => {
  const [newsData, setNewsData] = useState(null);
  const [factsData, setFactsData] = useState(null);
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
      <Header>
        <HeaderText>News</HeaderText>
      </Header>
      <Container>
        {/* News Here */}
        {newsData ? (
          // Only displays 1 headlines at the moment.
          // TODO: Change so that it displays several headlines and a pressable link to each article.
          <Card>
            <Text>Top headlines: {newsData.articles[0].title}</Text>
          </Card>
        ) : (
          <Card>
            <LoaderScreen />
          </Card>
        )}

        {/* Fun facts here */}
        {factsData ? (
          <Card>
            <Text>Fun fact: {factsData[0].fact}</Text>
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

export default News;
