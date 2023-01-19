import React, { useContext, createContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { createGroupChannelListFragment } from '@sendbird/uikit-react-native';
import { Text, View, Button, LoaderScreen } from 'react-native-ui-lib';

const ChannelList = () => {
  const navigation = useNavigation();
  const GroupChannelListFragment = createGroupChannelListFragment({
    StatusLoading: () => {
      return <LoaderScreen message='Loading' />;
    },
    Header: () => {
      return (
        <>
          <Text>Messages</Text>
          <Button label='Yes' onPress={() => navigation.navigate('CreateChannel')} />
        </>
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
