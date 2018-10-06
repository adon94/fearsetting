import React from 'react';
import { View } from 'react-native';
import Description from './Description';

const EmptyNotice = ({ children }) => (
  <View style={{ alignItems: 'center' }}>
    <Description bold style={{ fontWeight: 'bold' }}>{children}</Description>
  </View>
);

export default EmptyNotice;
