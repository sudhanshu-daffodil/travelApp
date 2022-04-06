import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ScreenHeader = ({style = {}, children}) => {
  return (
    <Text
      style={{
        color: '#181A25',
        fontSize: 30,
        fontWeight: '700',
        lineHeight: 38,
        marginTop: 59,
        ...style,
      }}>
      {children}
    </Text>
  );
};

export default ScreenHeader;
