import React from 'react';
import {
  StyleSheet,
  Text,
} from 'react-native';

const Description = (props) => {
  const { children: text } = props;
  return (
    <Text style={styles.descriptionText}>{text}</Text>
  );
};

export default Description;

const styles = StyleSheet.create({
  descriptionText: {
    fontSize: 14,
    marginBottom: 10,
    color: '#848d95',
  },
});
