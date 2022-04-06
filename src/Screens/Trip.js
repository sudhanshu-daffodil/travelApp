import {Text, View, StyleSheet} from 'react-native';
import React from 'react';
import commonStyles from '../Styles/CustomStyles';
import ScrollableScreen from '../Components/Commom/ScrollableScreen';
import ScreenHeader from '../Components/Commom/ScreenHeader';
import TabContainer from '../Components/Trip/TabContainer';
import {resolveIcon} from '../Action/Icon';
import Gap from '../Components/Commom/Gap';

const Icons = {
  ArrowIcon: {
    icon: require('../assests/icon/TripScreen/Arrow.svg'),
  },
};

const Trip = ({navigation, route}) => {
  return (
    <ScrollableScreen>
      <View style={commonStyles.container}>
        <View style={styles.tripScreen}>
          <ScreenHeader>Trip</ScreenHeader>
          <TabContainer />
          <View style={styles.checklist}>
            <View style={styles.checklistContent}>
              <Text style={styles.checklistHeader}>
                Here's a checklist for your trip 👋
              </Text>
              <Gap height={6} />
              <Text style={styles.checklistSubHeader}>
                As your upcoming destination has some travel restrictions due to
                COVID-19.
              </Text>
            </View>
            <Gap width={20} />
            <View style={styles.checklistIcon}>
              {resolveIcon(Icons.ArrowIcon.icon)}
            </View>
          </View>
        </View>
        <View style={styles.addBtnWrapper}>
          <View style={styles.addBtn}>
            <Text style={styles.addSymbol}>+</Text>
          </View>
        </View>
      </View>
    </ScrollableScreen>
  );
};
const styles = StyleSheet.create({
  tripScreen: {
    paddingHorizontal: 16,
  },
  addBtnWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 80,
  },
  addBtn: {
    width: 60,
    height: 60,
    backgroundColor: '#FF4760',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addSymbol: {
    fontSize: 30,
    color: '#fff',
  },
  checklist: {
    backgroundColor: '#f6c8d7',
    paddingHorizontal: 24,
    paddingVertical: 14,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
  },
  checklistContent: {
    flex: 5,
  },
  checklistIcon: {
    // flex: 1,
  },
  checklistHeader: {
    color: '#990014',
    fontWeight: '700',
  },
  checklistSubHeader: {
    color: '#FF4760',
  },
});
export default Trip;
