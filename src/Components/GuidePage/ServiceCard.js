import {StyleSheet, Image, Text, View, ImageBackground} from 'react-native';
import React from 'react';
import {resolveIcon} from '../../Action/Icon';
import Gap from '../Commom/Gap';

const ServiceCard = ({name, icon}) => {
  return (
    <View style={styles.container}>
      {resolveIcon(icon)}
      <Gap width={9} />
      <Text style={styles.headerText}>{name}</Text>
    </View>
  );
};

export default ServiceCard;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#E0E2EB',
    borderRadius: 50,
    marginRight: 10,
    paddingVertical: 9,
    paddingHorizontal: 12,
    backgroundColor: '#FCFCFD',
  },
  headerText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#0048F0',
    lineHeight: 22,
  },
});
