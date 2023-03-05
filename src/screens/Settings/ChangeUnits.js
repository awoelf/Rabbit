import { useNavigation, useRoute } from '@react-navigation/native';
import { Button, Switch } from 'react-native-ui-lib';
import Octicons from '@expo/vector-icons/Octicons';

import { styles } from '../../styles/styles';

import Header from '../../components/Header';
import HeaderText from '../../components/HeaderText';
import Container from '../../components/Container';

const ChangeUnits = (props) => {
  console.log(props.navigation.goBack)
  return (
    <>
      <Header>
        <Button style={styles.button}><Octicons name='arrow-left'/></Button>
        <HeaderText>Change Units</HeaderText>
      </Header>
      <Container>
        <Switch />
      </Container>
    </>
  );
};

export default ChangeUnits;
