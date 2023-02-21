import React, { useState } from 'react';
import { useSendbirdChat, createGroupChannelMembersFragment, UserActionBar } from '@sendbird/uikit-react-native';
import { useGroupChannel } from "@sendbird/uikit-chat-hooks";
import { useNavigation, useRoute } from '@react-navigation/native';
// import { useChannelContext } from '@sendbird/uikit-react/Channel/context';
import { useBottomSheet } from '@sendbird/uikit-react-native-foundation';


const GroupChannelMembersFragment = createGroupChannelMembersFragment();
const GroupChannelMembers = ({route,navigation}) => {
    const { openSheet } = useBottomSheet();
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
            onPressHeaderRight={()=>{
                // navigation.goBack();
                navigation.navigate('GroupChannelInvite', {
                    channelUrl: channelUrl,
                  });
            }}
            // renderUser={(user) => {
            //     return (
            //         <UserActionBar
            //             disabled={false}
            //             name={user.nickname}
            //             uri={user.profileUrl}
            //             muted={user.isMuted}
            //             onPressActionMenu={() => {
            //                 openSheet({
            //                     sheetItems: [
            //                         {
            //                             title: 'Ban',
            //                             titleColor: 'red',
            //                             onPress: () => channel.banUser(user, 30, 'ban'),
            //                         },
            //                         { title: 'Mute', onPress: () => channel.muteUser(user) },
            //                     ],
            //                 });
            //             }}
            //         />
            //     );
            // }}
        
        />
    );
};

export default GroupChannelMembers;