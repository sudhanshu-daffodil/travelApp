import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useState} from 'react';
import CardTab from './CardTab';
import TripCards from '../../Data/TripCards';
import Gap from '../Commom/Gap';
import TripCard from './TripCard';
const icon = {
  trips: {
    active: require('../../assests/icon/TripScreen/bag_active.svg'),
    inactive: require('../../assests/icon/TripScreen/bag_inactive.svg'),
  },
  bookmark: {
    active: require('../../assests/icon/TripScreen/bookmark_active.svg'),
    inactive: require('../../assests/icon/TripScreen/bookmark_inactive.svg'),
  },
};
const TabContainer = () => {
  const arr = ['trips', 'bookmark'];
  const init = 'trips';
  const [activeTab, setActiveTab] = useState(init);
  const toggleActiveCard = name => {
    setActiveTab(name);
  };
  const cardsData = TripCards;
  return (
    <>
      <View style={styles.tabs}>
        {arr.map(label => (
          <CardTab
            key={label}
            name={label}
            handleOnClick={toggleActiveCard}
            isActive={activeTab === label}
            icons={icon[label]}
          />
        ))}
      </View>
      <Gap height={40} />
      <View>
        {cardsData.trips.map(d => (
          <TripCard key={d.uri} {...d} />
        ))}
      </View>
      <Gap height={14} />
    </>
  );
};

export default TabContainer;

const styles = StyleSheet.create({
  tabs: {
    flexDirection: 'row',
  },
});
