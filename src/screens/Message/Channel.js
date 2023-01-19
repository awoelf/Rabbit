import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { createGroupChannelFragment, useSendbirdChat } from '@sendbird/uikit-react-native';
import { useGroupChannel } from '@sendbird/uikit-chat-hooks';
import { Text } from 'react-native-ui-lib';

const GroupChannelFragment = createGroupChannelFragment();

const Channel = () => {
  const navigation = useNavigation();
  const { params } = useRoute();

  const { sdk } = useSendbirdChat();
  const { channel } = useGroupChannel(sdk, params.channelUrl);
  if (!channel) return <Text>Not Working!</Text>;

  return (
    <GroupChannelFragment
      channel={channel}
      onChannelDeleted={() => {
        // Navigate to GroupChannelList key function.
        navigation.navigate('ChannelList');
      }}
      onPressHeaderLeft={() => {
        // Go back to the previous screen.
        navigation.goBack();
      }}
      onPressHeaderRight={() => {
        // Navigate to GroupChannelSettings key function.
        navigation.navigate('GroupChannelSettings', {
          channelUrl: channel.url,
        });
      }}
    />
  );
};

export default Channel;
