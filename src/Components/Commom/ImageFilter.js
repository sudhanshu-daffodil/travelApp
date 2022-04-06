import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ImageFilter = ({children}) => {
  return (
    <View style={styles.container}>
      {children}
      <View style={styles.filter}></View>
    </View>
  );
};

export default ImageFilter;

const styles = StyleSheet.create({
  container: {},
  filter: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#0004',
    // borderColor: 'red',
    // borderWidth: 1,
  },
});
