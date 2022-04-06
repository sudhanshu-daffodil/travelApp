import React from 'react';
import {ScrollView} from 'react-native';

const ScrollableScreen = ({children, style = {}}) => {
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
      }}
      style={style}>
      {children}
    </ScrollView>
  );
};
export default ScrollableScreen;
