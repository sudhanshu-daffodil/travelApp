import {Text, View, StyleSheet, TextInput} from 'react-native';
import React from 'react';
import commonStyles from '../Styles/CustomStyles';
import ScreenHeader from '../Components/Commom/ScreenHeader';
import SearchInput from '../Components/Commom/SearchInput';
import ScrollableCards from '../Components/Commom/ScrollableCards';
import SearchCardsData from '../Data/SearchCards';
import ScreenSubHeader from '../Components/Commom/ScreenSubHeader';
import Gap from '../Components/Commom/Gap';
import {useState} from 'react';
// import DesignationCard from '../Components/SearchPage/DesignationCard';
// import ScrollableScreen from '../Components/Commom/ScrollableScreen';
import NearByCard from '../Components/SearchPage/NearByCard';
import ScrollableScreen from '../Components/Commom/ScrollableScreen';
import DesignationCard from '../Components/SearchPage/SearchPageCards';

const Search = ({navigation, route}) => {
  console.log(route.params);
  const [textInput, setTextInput] = useState('');
  return (
    <ScrollableScreen>
      <View style={commonStyles.container}>
        <View style={styles.searchScreen}>
          <ScreenHeader>Search</ScreenHeader>
          <SearchInput
            placeholder="Where next?"
            style={styles.search}
            value={textInput}
            setValue={setTextInput}
          />
          <ScreenSubHeader style={styles.subHeader}>
            Top Destinations
          </ScreenSubHeader>
          <ScrollableCards style={styles.cards}>
            {SearchCardsData.destination.map(d => (
              <>
                <DesignationCard key={d.uri} {...d} />
                <Gap width={10} />
              </>
            ))}
          </ScrollableCards>
          <ScreenSubHeader style={styles.subHeader}>
            Nearby Attractions
          </ScreenSubHeader>
          <View style={styles.nearbycards}>
            {SearchCardsData.nearby.map(d => (
              <NearByCard key={d.uri} {...d} />
            ))}
          </View>
        </View>
      </View>
    </ScrollableScreen>
  );
};
const styles = StyleSheet.create({
  searchScreen: {
    paddingHorizontal: 16,
  },
  search: {
    marginTop: 24,
  },
  cards: {
    paddingBottom: 12,
  },
  subHeader: {
    marginTop: 24,
    marginBottom: 12,
  },
});
export default Search;
