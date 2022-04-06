import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ImageBackground} from 'react-native';
import {resolveIcon} from '../../Action/Icon';
import Gap from '../Commom/Gap';
const Icons = {
  StarIcon: {
    icon: require('../../assests/icon/SearchScreen/Star.svg'),
  },
  BookmarkIcon: {
    icon: require('../../assests/icon/Bookmark.svg'),
  },
};
const NearByCard = ({uri, city, place, type, rating, cost}) => {
  const stars = new Array(Math.round(rating)).fill(
    resolveIcon(Icons.StarIcon.icon),
  );
  return (
    <ImageBackground
      overlayColor={'red'}
      source={{uri}}
      style={styles.img}
      resizeMode="cover">
      <View style={styles.content}>
        <Text style={styles.type}>{type}</Text>
        <Text style={styles.headerText}>{place}</Text>
        <Text style={styles.subHeaderText}>{city}</Text>
        <View style={styles.bookmark}>
          {resolveIcon(Icons.BookmarkIcon.icon)}
        </View>
        <View style={styles.rating}>
          <Text style={styles.ratingText}>{rating}</Text>
          <Gap width={5} />
          <Text style={styles.ratingText}>{}</Text>
          <Gap width={5} />
          {stars.map(star => star)}
        </View>
        <Text style={styles.cost}>${cost} per night</Text>
      </View>
    </ImageBackground>
  );
};

export default NearByCard;

const styles = StyleSheet.create({
  img: {
    height: 153,
    overflow: 'hidden',
    borderRadius: 6,
    marginBottom: 14,
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#0006',
  },
  headerText: {
    color: '#fff',
    fontSize: 25,
    fontWeight: '700',
    textTransform: 'capitalize',
    lineHeight: 32,
  },
  subHeaderText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '400',
    textTransform: 'capitalize',
    lineHeight: 23,
  },
  type: {
    textTransform: 'uppercase',
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 18,
    color: '#fff',
    backgroundColor: '#FF4760',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 2,
    position: 'absolute',
    top: 18,
    left: 12,
  },
  bookmark: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FCFCFD33',
    borderRadius: 100,
    position: 'absolute',
    top: 12,
    right: 12,
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    left: 12,
    bottom: 8,
  },
  ratingText: {
    color: '#fff',
  },
  cost: {
    color: '#fff',
    position: 'absolute',
    right: 12,
    bottom: 8,
    fontSize: 16,
  },
});
