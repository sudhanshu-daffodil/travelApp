import {Text, View, StyleSheet} from 'react-native';
import React from 'react';
import ScrollableScreen from '../Components/Commom/ScrollableScreen';
import commonStyles from '../Styles/CustomStyles';
import ScreenHeader from '../Components/Commom/ScreenHeader';
import Gap from '../Components/Commom/Gap';
import {resolveIcon} from '../Action/Icon';
import ScreenSubHeader from '../Components/Commom/ScreenSubHeader';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import ScrollableCards from '../Components/Commom/ScrollableCards';
import NeedCard from '../Components/GuidePage/NeedCard';
import GuideCards from '../Data/GuideCards';
import SearchInput from '../Components/Commom/SearchInput';
import ServiceCard from '../Components/GuidePage/ServiceCard';
import ArticleCard from '../Components/GuidePage/ArticleCard';

const Guide = ({navigation, route}) => {
  return (
    <ScrollableScreen>
      <View style={commonStyles.container}>
        <View style={styles.guideScreen}>
          <ScreenHeader>Guide</ScreenHeader>
          {/* <TouchableWithoutFeedback></TouchableWithoutFeedback> */}
          <View style={styles.subHeaderWrapper}>
            <ScreenSubHeader style={styles.subHeader}>
              Might need these
            </ScreenSubHeader>
            <Text style={styles.link}>See all</Text>
          </View>

          <ScrollableCards style={styles.cards}>
            {GuideCards.need.map(d => (
              <NeedCard key={d.uri} {...d} />
            ))}
          </ScrollableCards>

          <SearchInput
            placeholder="A country, a city, a place... or anything "
            style={styles.search}
            // value={textInput}
            // setValue={setTextInput}
          />

          <ScrollableCards style={styles.cards}>
            {GuideCards.service.map(d => (
              <ServiceCard key={d.name} {...d} />
            ))}
          </ScrollableCards>

          <ScrollableCards style={styles.cards}>
            {GuideCards.pickedArticle.map((d, i) => (
              <ArticleCard key={i} {...d} />
            ))}
          </ScrollableCards>
        </View>
      </View>
      <Gap height={50} />
    </ScrollableScreen>
  );
};
const styles = StyleSheet.create({
  guideScreen: {
    paddingHorizontal: 16,
  },
  subHeaderWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  subHeader: {
    marginTop: 25,
  },
  link: {
    color: '#FF4760',
    textDecorationLine: 'underline',
  },
  cards: {
    paddingVertical: 20,
  },
  search: {
    // marginHorizontal: 16,
    marginVertical: 24,
  },
});
export default Guide;
