import {View} from 'react-native';
import React from 'react';
const IconWrapper = ({style = {}, children}) => {
  return <View style={style}>{children}</View>;
};

export default IconWrapper;
