import React from 'react';
import {
  View,
} from 'react-native';
import Title from './Title';
import Description from './Description';

const Header = (props) => {
  const { title, description } = props;
  return (
    <View>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </View>
  );
};

export default Header;
