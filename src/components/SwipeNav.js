import React from 'react';
import {
  Dimensions,
} from 'react-native';
import Interactable from 'react-native-interactable';
import Decision from '../screens/Decision';
import Define from '../screens/Define';

const { width, height } = Dimensions.get('window');

const SwipeNav = ({ navigation }) => (
  <Interactable.View
    horizontalOnly
    snapPoints={[{ x: 0 }, { x: -width }]}
    style={{ flexDirection: 'row', height, width: width * 2 }}
  >
    <Decision navigation={navigation} />
    <Define navigation={navigation} />
  </Interactable.View>
);

export default SwipeNav;
