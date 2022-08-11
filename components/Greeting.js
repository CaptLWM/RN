import React from 'react';
import {View, Text} from 'react-native';

const Greeting = props => {
  return (
    <View>
      <Text>안녕하세! {props.name}</Text>
    </View>
  );
};

export default Greeting;
