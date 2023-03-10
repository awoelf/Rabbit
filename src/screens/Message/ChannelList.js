import React from 'react';
import { createGroupChannelListFragment } from '@sendbird/uikit-react-native';
import { LoaderScreen, TouchableOpacity } from 'react-native-ui-lib';
import Octicons from '@expo/vector-icons/Octicons';

import { iconStyle } from '../../styles/styles';
import { rabbit } from '../../styles/palette';

// Components
import Header from '../../components/Header';
import HeaderText from '../../components/HeaderText';

const ChannelList = (props) => {
  const GroupChannelListFragment = createGroupChannelListFragment({
    StatusLoading: () => {
      return <LoaderScreen loaderColor={rabbit.accent_color}/>;
    },
    Header: () => {
      return (
        <Header>
          <HeaderText>Messages</HeaderText>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('CreateChannel');
            }}

          >
            <Octicons name='plus' style={iconStyle.icon} />
          </TouchableOpacity>
        </Header>
      );
    },
  });

  return (
    <GroupChannelListFragment
      onPressCreateChannel={(channelType) => {
        // Navigate to GroupChannelCreate key function.
        props.navigation.navigate('CreateChannel', { channelType });
      }}
      onPressChannel={(channel) => {
        // Navigate to GroupChannel key function.
        props.navigation.navigate('Channel', {
          channelUrl: channel.url,
        });
      }}
    />
  );
};

export default ChannelList;
