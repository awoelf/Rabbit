import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import {
  KeyboardAvoidingView, ScrollView, View, Platform,
  TouchableWithoutFeedback, Keyboard
} from "react-native";
import { Card, Text, LoaderScreen, TextField, Button } from 'react-native-ui-lib';
import { NEWS_URL, NEWS_API_KEY, FACTS_URL, NINJA_API_KEY } from '@env';
import { useUserContext } from '../../utils/UserContext';

// Components
import Container from '../../components/Container';
import Header from '../../components/Header';
import HeaderText from '../../components/HeaderText';
import SmallButton from '../../components/SmallButton';
import NewsList from '../../components/NewsList';

// Styles and assets
import { styles, NewsContainerStyle } from '../../styles/styles';
import { endAsyncEvent } from 'react-native/Libraries/Performance/Systrace';

const News = () => {
  const [newsData, setNewsData] = useState(null);
  const [searchName, setSearchName] = useState(null);
  // const [factsData, setFactsData] = useState(null);
  const userContext = useUserContext();
  const countryCode = userContext.stateLocation.data.geocode.isoCountryCode;
  
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
    setSearchName("");

  }


  return (
    <>
      <Header>
        <HeaderText text70>News</HeaderText>
      </Header>
   
      <ScrollView>
        {/* News Here */}
        {newsData ? (

          <View row marginV-10 >
            {newsData.articles.map((article) => {
             
              return (
                <NewsList
                  item={article}
                  key={article.title}
                />
              )
            })}
          </View>

        ) : (
          <Card>
            <LoaderScreen />
          </Card>
        )}

      </ScrollView>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View>
            <TextField
              migrate
              style={styles.textField}
              placeholder={'Search'}
              onChangeText={setSearchName}
            />
            <Button
              style={styles.button}
              onPress={searchHandle}
              center
            >
              <Text style={styles.text}>Search</Text>
            </Button>

          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>

    </>
  );
};


export default News;
