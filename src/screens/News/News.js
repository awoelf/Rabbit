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
import Header from '../../components/Header';
import HeaderText from '../../components/HeaderText';
import NewsList from '../../components/NewsList';

import Octicons from '@expo/vector-icons/Octicons';

// Styles and assets
import { styles, NewsContainerStyle } from '../../styles/styles';
import { endAsyncEvent } from 'react-native/Libraries/Performance/Systrace';

const News = () => {
  const [newsData, setNewsData] = useState(null);
  const [searchName, setSearchName] = useState(null);
  // const [factsData, setFactsData] = useState(null);
  const userContext = useUserContext();


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
          <View >
            <View >
              <TextField
                migrate
                style={styles.textField}
                placeholder={'Search'}
                onChangeText={setSearchName}
              />
              <View>
                <Button
                style={styles.button}
                  //style={{ width: 10, backgroundColor: '#ECE5D8' }}
                  onPress={searchHandle}
                >
                  <Octicons name='search' size={20} />
                </Button>

              </View>
            </View>


          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>

    </>
  );
};


export default News;
