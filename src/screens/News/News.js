import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Dimensions } from 'react-native';
import {
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {
  Card,
  Text,
  LoaderScreen,
  TextField,
  Button,
  View,
  TouchableOpacity,
  ExpandableSection,
} from 'react-native-ui-lib';
import { NEWS_URL, NEWS_API_KEY, FACTS_URL, NINJA_API_KEY } from '@env';
import { useUserContext } from '../../utils/UserContext';

// Components
import Header from '../../components/Header';
import HeaderText from '../../components/HeaderText';
import NewsList from '../../components/NewsList';

import Octicons from '@expo/vector-icons/Octicons';

// Styles and assets
import { styles, NewsContainerStyle, iconStyle } from '../../styles/styles';
import { rabbit } from '../../styles/palette';
import { endAsyncEvent } from 'react-native/Libraries/Performance/Systrace';
import Container from '../../components/Container';

const News = () => {
  const [newsData, setNewsData] = useState(null);
  const [searchName, setSearchName] = useState(null);
  // const [factsData, setFactsData] = useState(null);
  const [show, setShow] = useState(false);
  const userContext = useUserContext();
  const textFieldWidth = Dimensions.get('window').width * .62;

  useEffect(() => {
    const GetNews = async () => {
      const response = await axios({
        method: 'get',
        //url: `${NEWS_URL}?country=${countryCode}&apiKey=${NEWS_API_KEY}`,
        url: `https://newsapi.org/v2/top-headlines?country=us&apiKey=5d33573d86754a639d8a5f2ac1455a70`,
        responseType: 'json',
      });

      setNewsData(response.data);
    };

    GetNews();
  }, []);

  const searchHandle = async (event) => {
    const response = await axios({
      method: 'get',
      //url: `${NEWS_URL}?country=${countryCode}&apiKey=${NEWS_API_KEY}`,
      url: `https://newsapi.org/v2/everything?q=${searchName}&sortBy=popularity&apiKey=5d33573d86754a639d8a5f2ac1455a70`,
      responseType: 'json',
    });

    setNewsData(response.data);
    setSearchName('');
    setShow(false);
  };

  return (
    <>
      <Header>
        <HeaderText>News</HeaderText>
        <TouchableOpacity
          onPress={() => {
            setShow(!show);
          }}
        >
          <Octicons name={show ? 'chevron-up' : 'search'} style={iconStyle.icon} />
        </TouchableOpacity>
      </Header>

      <ExpandableSection expanded={show}>
        <Container removeTopMargin={true}>
          <View row centerV spread>
            <TextField
              migrate
              placeholder={'Search for news'}
              onChangeText={setSearchName}
              style={styles.textField}
              width={textFieldWidth}
            />
            <View>
              <Button
                style={iconStyle.button}
                onPress={searchHandle}
                size={Button.sizes.xSmall}
              >
                <Octicons name='search' size={rabbit.font_size}/>
              </Button>
            </View>
          </View>
        </Container>
      </ExpandableSection>

      <ScrollView>
        {/* News Here */}
        {newsData ? (
          <Container removeTopMargin={true}>
            {newsData.articles.map((article) => {
              return <NewsList item={article} key={article.publishedAt} />;
            })}
          </Container>
        ) : (
          <LoaderScreen loaderColor={rabbit.accent_color}/>
        )}
      </ScrollView>

      {/* <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView> */}
    </>
  );
};

export default News;
