import { Text, Card, View, Image } from 'react-native-ui-lib';
import { Linking, Dimensions } from 'react-native';
import React, { useCallback } from 'react';

import { styles, cardStyle } from '../styles/styles';

import Octicons from '@expo/vector-icons/Octicons';
import { rabbit } from '../styles/palette';

const NewsList = ({ item }) => {
  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(item.url);
    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(item.url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${item.url}`);
    }
  }, [item.url]);

  const newsHeaderWidth = Dimensions.get('window').width * 0.7;

  return (
    <Card flex activeOpacity={1} onPress={handlePress} style={cardStyle}>
      <View marginV-s2>
        <View marginB-s2 row centerV spread>
          <View width={newsHeaderWidth}>
            {item.author ? (
              <Text style={styles.newsHead} numberOfLines={1}>
                {item.author}
              </Text>
            ) : null}
            {item.author !== item.source.name ? (
              <Text style={styles.newsHead} numberOfLines={1}>
                {item.source.name}
              </Text>
            ) : null}
          </View>
          <View marginH-s4>
            <Octicons name='link-external' color={rabbit.light_text_color} size={15} />
          </View>
        </View>
        <View>
          <Text style={styles.news}>{item.title}</Text>
        </View>
      </View>
    </Card>
  );
};

export default NewsList;
