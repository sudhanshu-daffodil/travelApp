import {StyleSheet, Image, Text, View} from 'react-native';
import React from 'react';

const DealsCard = ({type, uri}) => {
  return <Image style={styles.img} source={{uri}} />;
};

export default DealsCard;
const styles = StyleSheet.create({
  img: {
    width: 260,
    height: 140,
    marginRight: 10,
    borderRadius: 6,
  },
});
