import {StyleSheet, View} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native';

const ScrollableCards = ({children, style}) => {
  return (
    <ScrollView horizontal={true} style={style}>
      {children}
    </ScrollView>
  );
};

export default ScrollableCards;
