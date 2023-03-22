import React from 'react';
import { createGroupChannelCreateFragment } from '@sendbird/uikit-react-native';

const GroupChannelCreateFragment = createGroupChannelCreateFragment();

const CreateChannel = (props) => {
  return (
    <GroupChannelCreateFragment
      onCreateChannel={async (channel) => {
        // Navigate to GroupChannel key function.
        props.navigation.navigate('Channel', {
          channelUrl: channel.url,
        });
      }}
      onPressHeaderLeft={() => {
        // Go back to the previous screen.
        props.navigation.goBack();
      }}
    />
  );
};

export default CreateChannel;
