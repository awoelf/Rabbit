import React, { useState } from 'react';
import { useSendbirdChat, createGroupChannelSettingsFragment,createGroupChannelMembersFragment } from '@sendbird/uikit-react-native';
import { useGroupChannel } from "@sendbird/uikit-chat-hooks";
import { Icon } from '@sendbird/uikit-react-native-foundation';
import { View,Text } from 'react-native-ui-lib';
import { Share } from 'react-native';

const GroupChannelSettingsFragment = createGroupChannelSettingsFragment();
const GroupChannelMembersFragment = createGroupChannelMembersFragment();

const GroupChannelSettings = ({route, navigation}) => {
    const {channelUrl}=route.params;
    const { sdk } = useSendbirdChat();
    const { channel } = useGroupChannel(sdk,channelUrl);
  
    if (!channel) return null;

    const navigateToGroupChannelListScreen = () => { 
   
    };

    const navigateToGroupChannelModerationScreen = () => {
        navigation.goBack();
    };

    // This line is only required if mention is turned on.
    const navigateToGroupChannelNotificationScreen = () => { };

    return (
        <GroupChannelSettingsFragment
            channel={channel}
            onPressHeaderLeft={() => {
                // Go back to the previous screen.
                navigation.goBack();
            }}
            onPressMenuLeaveChannel={navigateToGroupChannelListScreen}
            onPressMenuMembers={() => {
                navigation.navigate('GroupChannelMembers', {
                  channelUrl: channelUrl,
                });
              }}
            onPressMenuModeration={navigateToGroupChannelModerationScreen}
            onPressMenuNotification={navigateToGroupChannelNotificationScreen}
            menuItemsCreator={(items) => {
                items.unshift({
                    icon: 'channels',
                    name: 'Share channel',
                    actionItem: <Icon icon={'chevron-right'} color={'black'} />,
                    onPress: () => Share.share({ title: 'Channel url', url: channel.url }),
                });
                return items;
            }}
        />
    );
};

export default GroupChannelSettings;