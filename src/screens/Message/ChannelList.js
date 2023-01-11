import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { createGroupChannelListFragment } from '@sendbird/uikit-react-native';

const GroupChannelListFragment = createGroupChannelListFragment();

const ChannelList = () => {
  const navigation = useNavigation();
  return (
    <GroupChannelListFragment
      onPressCreateChannel={(channelType) => {
        // Navigate to GroupChannelCreate key function.
        navigation.navigate("CreateChannel", { channelType });
      }}
      onPressChannel={(channel) => {
        // Navigate to GroupChannel key function.
        navigation.navigate("Channel", {
          channelUrl: channel.url,
        });
      }}
    />
  );
};

export default ChannelList;