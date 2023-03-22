import React from 'react';
import { useSendbirdChat, createGroupChannelMembersFragment } from '@sendbird/uikit-react-native';
import { useGroupChannel } from '@sendbird/uikit-chat-hooks';
import { useBottomSheet } from '@sendbird/uikit-react-native-foundation';

const GroupChannelMembersFragment = createGroupChannelMembersFragment();
const GroupChannelMembers = ({ route, navigation }) => {
  const { openSheet } = useBottomSheet();
  const { channelUrl } = route.params;
  const { sdk } = useSendbirdChat();
  const { channel } = useGroupChannel(sdk, channelUrl);

  if (!channel) return null;

  return (
    <GroupChannelMembersFragment
      channel={channel}
      onPressHeaderLeft={() => {
        // Go back to the previous screen.
        navigation.goBack();
      }}
      onPressHeaderRight={() => {
        // navigation.goBack();
        navigation.navigate('GroupChannelInvite', {
          channelUrl: channelUrl,
        });
      }}
    />
  );
};

export default GroupChannelMembers;
