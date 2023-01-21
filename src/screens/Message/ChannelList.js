import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { createGroupChannelListFragment } from '@sendbird/uikit-react-native';
import { Text, View, Button, LoaderScreen } from 'react-native-ui-lib';
import Octicons from '@expo/vector-icons/Octicons';

// Components
import Header from '../../components/Header';
import HeaderText from '../../components/HeaderText';
import SmallButton from '../../components/SmallButton';

const ChannelList = () => {
  const navigation = useNavigation();
  const GroupChannelListFragment = createGroupChannelListFragment({
    StatusLoading: () => {
      return <LoaderScreen message='Loading' />;
    },
    Header: () => {
      return (
        <Header>
          <HeaderText>Messages</HeaderText>
          <SmallButton icon={'plus'} page={'CreateChannel'} />
        </Header>
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
