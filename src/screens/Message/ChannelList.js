import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { createGroupChannelListFragment } from '@sendbird/uikit-react-native';
import { Text, View, Button, LoaderScreen } from 'react-native-ui-lib';
import Octicons from '@expo/vector-icons/Octicons';

// Styles
import { styles, iconStyle, headerStyle } from '../../styles/styles';
import { rabbit } from '../../styles/palette';

const ChannelList = () => {
  const navigation = useNavigation();
  const GroupChannelListFragment = createGroupChannelListFragment({
    StatusLoading: () => {
      return <LoaderScreen message='Loading' />;
    },
    Header: () => {
      return (
        <View row spread centerV style={headerStyle}>
          <Text style={styles.header2}>Messages</Text>
          <Button
            iconSource={() => (<Octicons name='plus' style={iconStyle.icon} />)}
            onPress={() => navigation.navigate('CreateChannel')}
            style={iconStyle.button}
            size={Button.sizes.xSmall}
          />
        </View>
      );
    },
  });

  return (
    <GroupChannelListFragment
      onPressCreateChannel={(channelType) => {
        // Navigate to GroupChannelCreate key function.
        navigation.navigate('CreateChannel', { channelType });
      }}
      onPressChannel={(channel) => {
        // Navigate to GroupChannel key function.
        navigation.navigate('Channel', {
          channelUrl: channel.url,
        });
      }}
    />
  );
};

export default ChannelList;
