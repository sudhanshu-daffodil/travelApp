import {StyleSheet, View, TextInput} from 'react-native';
import React from 'react';
import {resolveIcon} from '../../Action/Icon';

const Icons = {
  SearchIcon: {
    icon: require('../../assests/icon/Search.svg'),
  },
};

const SearchInput = ({placeholder, style = {}, value, setValue}) => {
  return (
    <View style={[styles.container, {...style}]}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={() => {}}
        // defaultValue={value}
      />
      {resolveIcon(Icons.SearchIcon.icon)}
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#E0E2EB',
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingVertical: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    // height: 25,
    padding: 0,
    color: '#52577A',
    fontSize: 16,
  },
});
