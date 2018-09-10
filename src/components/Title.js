import React from 'react';
import {
  StyleSheet,
  Text,
} from 'react-native';

const Title = (props) => {
  const { children:title } = props
  return (
    <Text style={styles.bigText}>{title}</Text>
  );
}

export default Title;

const styles = StyleSheet.create({
  bigText: {
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
