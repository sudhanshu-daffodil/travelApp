import {StyleSheet, Image, Text, View} from 'react-native';
import React from 'react';

const ArticleCard = ({type, header, uri}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={{uri}} />
      <View style={styles.content}>
        <Text style={styles.label}>{type}</Text>
        <Text style={styles.headerText}>{header}</Text>
      </View>
    </View>
  );
};

export default ArticleCard;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    // flex: 1,
    marginRight: 16,
    borderRadius: 6,
    width: 253,
    overflow: 'hidden',
  },
  img: {
    width: 253,
    height: 163,
  },
  content: {
    // flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  label: {
    color: '#0048F0',
    fontWeight: '600',
    fontSize: 14,
    textTransform: 'uppercase',
  },
  headerText: {
    color: '#181A25',
    fontWeight: '700',
    fontSize: 18,
    textTransform: 'uppercase',
  },
});
