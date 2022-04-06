import {StyleSheet, Text} from 'react-native';
import React from 'react';
import {TouchableWithoutFeedback} from 'react-native';

const CardTab = ({name, isActive, handleOnClick}) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        handleOnClick(name);
      }}>
      <Text style={[styles.text, isActive ? styles.activeLabel : {}]}>
        {name}
      </Text>
    </TouchableWithoutFeedback>
  );
};

export default CardTab;
const styles = StyleSheet.create({
  text: {
    padding: 4,
    borderBottomWidth: 2,
    borderColor: 'transparent',
    margin: 10,
    textTransform: 'capitalize',
    color: '#C2C5D6',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 20,
  },
  activeLabel: {
    borderColor: '#FF4760',
    color: '#FF4760',
  },
});
