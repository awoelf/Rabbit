import { Text, Card, View, Image } from 'react-native-ui-lib';
import { Linking, ScrollView } from 'react-native';
import React, { useCallback } from 'react';

import { styles, cardStyle } from '../styles/styles';

import Octicons from '@expo/vector-icons/Octicons';

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

  return (
    <Card flex activeOpacity={1} onPress={handlePress} style={cardStyle}>
      <View marginV-s2>
        <View marginB-s2 row centerV spread>
          <View>
            {item.author ? <Text style={styles.newsHead}>{item.author}</Text> : null}
            {item.author !== item.source.name ? (
              <Text style={styles.newsHead}>{item.source.name}</Text>
            ) : null}
          </View>
          <View marginH-s4>
            <Octicons name='link-external' color={'gray'} size={15} />
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
