import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

const ListIndex = ({ index }) => (
  <View style={styles.indexContainer}>
    <Text style={styles.index}>
      {index}
      .
    </Text>
  </View>
);

export default ListIndex;

const styles = StyleSheet.create({
  indexContainer: {
    width: 30,
    paddingTop: 5,
  },
  index: {
    fontSize: 20,
  },
});
