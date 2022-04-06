import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ImageBackground} from 'react-native';

const DesignationCard = ({uri, city, country}) => {
  return (
    <ImageBackground
      overlayColor={'red'}
      source={{uri}}
      style={styles.img}
      resizeMode="cover">
      <View style={styles.content}>
        <Text style={styles.headerText}>{city}</Text>
        <Text style={styles.subHeaderText}>{country}</Text>
      </View>
    </ImageBackground>
  );
};

export default DesignationCard;

const styles = StyleSheet.create({
  img: {
    width: 150,
    height: 200,
    overflow: 'hidden',
    borderRadius: 6,
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
  },
  subHeaderText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '400',
    textTransform: 'capitalize',
    lineHeight: 20,
  },
});
