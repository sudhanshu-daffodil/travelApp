import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TouchableWithoutFeedback} from 'react-native';
import {resolveIcon} from '../../Action/Icon';
import Gap from '../Commom/Gap';

const CardTab = ({name, isActive, handleOnClick, icons}) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        handleOnClick(name);
      }}>
      <View style={[styles.tab, isActive ? styles.activeTab : {}]}>
        {resolveIcon(icons[isActive ? 'active' : 'inactive'])}
        <Gap width={10} />
        <Text style={[styles.text, isActive ? styles.activeText : {}]}>
          {name}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CardTab;
const styles = StyleSheet.create({
  tab: {
    alignItems: 'center',
    flexDirection: 'row',
    padding: 12,
    borderBottomWidth: 3,
    borderColor: 'transparent',
    margin: 10,
  },
  text: {
    textTransform: 'capitalize',
    color: '#C2C5D6',
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 26,
  },
  activeTab: {
    borderColor: '#FF4760',
  },
  activeText: {
    color: '#FF4760',
  },
});
