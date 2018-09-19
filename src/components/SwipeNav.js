import React from 'react';
import {
  Dimensions,
  Text,
  View,
} from 'react-native';
import Interactable from 'react-native-interactable';

const { width, height } = Dimensions.get('window');

const SwipeNav = () => (
  <Interactable.View
    horizontalOnly
    snapPoints={[{ x: 0 }, { x: -width }]}
    style={{ flexDirection: 'row', height, width: width * 2 }}
  >
    <View style={{ width, backgroundColor: 'pink' }}>
      <Text>Lol</Text>
    </View>
    <View style={{ width, backgroundColor: 'blue' }}>
      <Text>Lol</Text>
    </View>
  </Interactable.View>
);

export default SwipeNav;
