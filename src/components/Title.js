import React from 'react';
import {
  StyleSheet,
  Text,
} from 'react-native';

const Title = (props) => {
  const { children: title, large } = props;
  return (
    <Text style={[styles.bigText, { fontSize: large ? 36 : 30 }]}>{title}</Text>
  );
};

export default Title;

const styles = StyleSheet.create({
  bigText: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
