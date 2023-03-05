import { TouchableOpacity, Switch, View, Text } from 'react-native-ui-lib';
import Octicons from '@expo/vector-icons/Octicons';
import { useUserContext } from '../../utils/UserContext';

import { iconStyle, styles } from '../../styles/styles';
import { rabbit } from '../../styles/palette';

import Header from '../../components/Header';
import HeaderText from '../../components/HeaderText';
import Container from '../../components/Container';

const ChangeUnits = (props) => {
  const userContext = useUserContext();
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
          <HeaderText>Change Units</HeaderText>
        </View>
      </Header>
      <Container>
        <View row spread>
          <Text>Enable metric units </Text>
          <Switch value={userContext.stateUnits.units} onValueChange={() => {
            userContext.dispatchUnits({
              type: 'TOGGLE_UNITS',
              payload: {
                units: !userContext.stateUnits.units
              }
            })
          }} />
        </View>
      </Container>
    </>
  );
};

export default ChangeUnits;
