import React, { useState } from 'react';
import { useSendbirdChat, createGroupChannelMembersFragment } from '@sendbird/uikit-react-native';
import { useGroupChannel } from "@sendbird/uikit-chat-hooks";
import { useNavigation, useRoute } from '@react-navigation/native';
import { useChannelContext } from '@sendbird/uikit-react/Channel/context';


const GroupChannelMembersFragment = createGroupChannelMembersFragment();
const GroupChannelMembers = ({route,navigation}) => {
    const {channelUrl}=route.params;
    const { sdk } = useSendbirdChat();
    const { channel } = useGroupChannel(sdk, channelUrl);

    if (!channel) return null;

    const navigateToBack = () => { };
    const navigateToGroupChannelInvite = () => { };

    return (
        <GroupChannelMembersFragment
            channel={channel}
            onPressHeaderLeft={() => {
                // Go back to the previous screen.
                navigation.goBack();
            }}
            onPressHeaderRight={navigateToGroupChannelInvite}
        />
    );
};

export default GroupChannelMembers;