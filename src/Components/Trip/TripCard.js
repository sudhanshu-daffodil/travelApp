import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ImageBackground} from 'react-native';
import Gap from '../Commom/Gap';
import {resolveIcon} from '../../Action/Icon';
const Icons = {
  ClockIcon: {
    icon: require('../../assests/icon/TripScreen/Clock.svg'),
  },
  BookmarkIcon: {
    icon: require('../../assests/icon/TripScreen/bookmark_active.svg'),
  },
};
const TripCard = ({uri, location, time, saved, daysLeft}) => {
  return (
    <ImageBackground
      overlayColor={'red'}
      source={{uri}}
      style={styles.img}
      resizeMode="cover">
      <View style={styles.content}>
        <Text style={styles.headerText}>{location}</Text>
        <Text style={styles.subHeaderText}>{time}</Text>
        <View style={styles.bookmark}>
          {resolveIcon(Icons.BookmarkIcon.icon)}
          <Gap width={7} />
          <Text style={styles.bookmarkText}>{saved} Items</Text>
        </View>
        <View style={styles.days}>
          {resolveIcon(Icons.ClockIcon.icon)}
          <Gap width={7} />
          <Text style={styles.daysText}>{daysLeft} days left</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default TripCard;

const styles = StyleSheet.create({
  img: {
    height: 200,
    overflow: 'hidden',
    borderRadius: 6,
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
  bookmark: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    left: 14,
    bottom: 14,
  },
  bookmarkText: {
    color: '#fff',
    fontSize: 16,
  },
  days: {
    color: '#fff',
    position: 'absolute',
    right: 14,
    bottom: 14,
    flexDirection: 'row',
    alignItems: 'center',
  },
  daysText: {
    color: '#fff',
    fontSize: 16,
  },
});
