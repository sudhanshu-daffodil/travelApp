import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {resolveIcon} from '../../Action/Icon';
import IconWrapper from '../Commom/IconWrapper';

const ServiceCard = ({name, icon}) => {
  return (
    <View>
      <IconWrapper style={styles.iconWrapper}>
        {resolveIcon(icon, styles.icon)}
      </IconWrapper>
      <Text style={styles.text}>{name}</Text>
    </View>
  );
};

export default ServiceCard;

const styles = StyleSheet.create({
  iconWrapper: {
    padding: 5,
    borderRadius: 8,
    backgroundColor: '#FCFCFD4D',
    alignItems: 'center',
    justifyContent: 'center',
    width: 64,
    height: 64,
  },
  icon: {
    height: 32,
    width: 32,
  },
  text: {
    fontWeight: '700',
    fontSize: 16,
    textAlign: 'center',
    color: '#FCFCFD',
    textTransform: 'capitalize',
    marginTop: 6,
  },
});
