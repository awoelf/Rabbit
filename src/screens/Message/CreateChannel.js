import React from "react";
import { useNavigation } from "@react-navigation/native";
import { createGroupChannelCreateFragment } from '@sendbird/uikit-react-native'

const GroupChannelCreateFragment = createGroupChannelCreateFragment();

const CreateChannel = () => {
  const navigation = useNavigation();

  return (
    <GroupChannelCreateFragment
      onCreateChannel={async (channel) => {
        // Navigate to GroupChannel key function.
        navigation.replace("GroupChannel", {
          channelUrl: channel.url,
        });
      }}
      onPressHeaderLeft={() => {
        // Go back to the previous screen.
        navigation.goBack();
      }}
    />
  );
};

export default CreateChannel;