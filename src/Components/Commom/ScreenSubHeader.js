import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ScreenSubHeader = ({style = {}, children}) => {
  return (
    <Text
      style={{
        color: '#181A25',
        fontSize: 20,
        fontWeight: '600',
        lineHeight: 25,
        textTransform: 'uppercase',
        ...style,
      }}>
      {children}
    </Text>
  );
};

export default ScreenSubHeader;
