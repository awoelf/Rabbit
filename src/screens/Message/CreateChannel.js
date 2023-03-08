import React from 'react';
import {
  useSendbirdChat,
  createGroupChannelListFragment,
  createGroupChannelCreateFragment,
  createGroupChannelFragment,
} from '@sendbird/uikit-react-native';
import { Text, View, Button, LoaderScreen } from 'react-native-ui-lib';
import Octicons from '@expo/vector-icons/Octicons';

import { styles, iconStyle, headerStyle } from '../../styles/styles';

const GroupChannelCreateFragment = createGroupChannelCreateFragment();

const CreateChannel = (props) => {
  // const GroupChannelCreateFragment = createGroupChannelCreateFragment({
  //   Header: () => {
  //     return (
  //       <View row spread centerV style={headerStyle}>
  //         <Button
  //           iconSource={() => <Octicons name='arrow-left' style={iconStyle.icon} />}
  //           onPress={() => navigation.goBack()}
  //           style={iconStyle.transparent}
  //           size={Button.sizes.medium}
  //         />
  //         <Text style={styles.header2}>Create a new chat</Text>
  //         <Button
  //           iconSource={() => <Octicons name='check' style={iconStyle.icon} />}
  //           onPress={async (channel) => {
  //             // Navigate to GroupChannel key function.
  //             navigation.replace("GroupChannel", {
  //               serializedChannel: channel.serialize(),
  //             });
  //           }}
  //           // onPress={() => navigation.navigate('CreateChannel')}
  //           style={iconStyle.button}
  //           size={Button.sizes.xSmall}
  //         />
  //       </View>
  //     );
  //   },
  // });
  return (
    <GroupChannelCreateFragment
      onCreateChannel={async (channel) => {
        // Navigate to GroupChannel key function.
        props.navigation.navigate("Channel", {
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
