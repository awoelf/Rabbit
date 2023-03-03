import { Text, Card, View,Image } from 'react-native-ui-lib';
import { Linking } from "react-native";
import React, { useCallback } from 'react';

import { styles } from '../styles/styles';

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
        <Card
            flex
            activeOpacity={1}
            margin-20
            onPress={handlePress}
            style={{ background: "#D9CCC1" }}
        >
            <View>

                {/* <Image
                    // style={styles.image}
                    resizeMode="contain"
                    source={{ uri: "https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png" }} /> */}
                <Text style={{ padding: 5, fontSize: 15, color: 'gray', font: 'Mukta_400Regular' }}>{item.author}</Text>
                <Text style={{ padding: 5, fontSize: 20, bold: 3 }}>{item.title}</Text>

            </View>

        </Card>
    );
};

export default NewsList;