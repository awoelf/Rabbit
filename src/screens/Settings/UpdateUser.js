import { TouchableOpacity, Switch, View, Text } from 'react-native-ui-lib';
import Octicons from '@expo/vector-icons/Octicons';

import { iconStyle, styles } from '../../styles/styles';
import { rabbit } from '../../styles/palette';

import Header from '../../components/Header';
import HeaderText from '../../components/HeaderText';
import Container from '../../components/Container';

const UpdateUser = (props) => {
  return (
    <>
      <Header>
        <View row centerV>
          <TouchableOpacity
            onPress={() => {
              props.navigation.goBack();
            }}
            marginR-s3
          >
            <Octicons name='arrow-left' style={iconStyle.icon} />
          </TouchableOpacity>
          <HeaderText>Update User Profile</HeaderText>
        </View>
      </Header>
      <Container>
        <Text>Setting here</Text>
      </Container>
    </>
  );
};

export default UpdateUser;
