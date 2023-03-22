import { useSendbirdChat, createGroupChannelInviteFragment } from '@sendbird/uikit-react-native';
import { useGroupChannel } from '@sendbird/uikit-chat-hooks';

const GroupChannelInviteFragment = createGroupChannelInviteFragment();
const GroupChannelInvite = ({ route, navigation }) => {
  const { channelUrl } = route.params;
  const { sdk } = useSendbirdChat();
  const { channel } = useGroupChannel(sdk, channelUrl);
  if (!channel) return null;
  return (
    <GroupChannelInviteFragment
      channel={channel}
      onPressHeaderLeft={() => {
        navigation.goBack();
      }}
      onInviteMembers={() => {
        navigation.navigate('Channel', {
          channelUrl: channelUrl,
        });
      }}
    />
  );
};
export default GroupChannelInvite;
