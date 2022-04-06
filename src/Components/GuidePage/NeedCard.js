import {StyleSheet, Image, Text, View, ImageBackground} from 'react-native';
import React from 'react';

const NeedCard = ({name, uri}) => {
  return (
    <ImageBackground
      overlayColor={'red'}
      source={{uri}}
      style={styles.img}
      resizeMode="cover">
      <View style={styles.content}>
        <Text style={styles.headerText}>{name}</Text>
      </View>
    </ImageBackground>
  );
};

export default NeedCard;
const styles = StyleSheet.create({
  img: {
    width: 108,
    height: 125,
    marginRight: 10,
    borderRadius: 6,
    overflow: 'hidden',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#0005',
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    textTransform: 'capitalize',
    lineHeight: 23,
    position: 'absolute',
    left: 10,
    bottom: 10,
    right: 10,
  },
});
