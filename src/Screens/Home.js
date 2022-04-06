import {Text, View, StyleSheet, Image} from 'react-native';
import React from 'react';
import commonStyles from '../Styles/CustomStyles';
import ScreenSubHeader from '../Components/Commom/ScreenSubHeader';
import headerBGImg from '../assests/Img/unsplash_rsD_jv_A8Yo.png';
import IconWrapper from '../Components/Commom/IconWrapper';
import Gap from '../Components/Commom/Gap';
import ServiceCard from '../Components/HomePage/ServiceCard';
import {resolveIcon} from '../Action/Icon';
import HomeCardsData from '../Data/HomeCards';
import HomeCardContainer from '../Components/HomePage/HomeCardContainer';
import ScrollableScreen from '../Components/Commom/ScrollableScreen';
const serviceIcons = {
  flights: {
    icon: require('../assests/icon/HomeScreeen/fly.svg'),
  },
  hotels: {
    icon: require('../assests/icon/HomeScreeen/hotel.svg'),
  },
  cars: {
    icon: require('../assests/icon/HomeScreeen/car4.svg'),
  },
  taxi: {
    icon: require('../assests/icon/HomeScreeen/car3.svg'),
  },
};
const otherIcons = {
  girl: {
    icon: require('../assests/icon/HomeScreeen/avatar_girl.svg'),
  },
  bell: {
    icon: require('../assests/icon/HomeScreeen/bell.svg'),
  },
  qr: {
    icon: require('../assests/icon/HomeScreeen/qr.svg'),
  },
};

const Home = ({navigation, route}) => {
  return (
    <ScrollableScreen>
      <View style={commonStyles.container}>
        <View style={homeStyle.homeHeader}>
          <Image style={homeStyle.headerBG} source={headerBGImg} />
          <View style={homeStyle.headerData}>
            <View style={homeStyle.headerIcons}>
              <IconWrapper
                style={{
                  marginRight: 'auto',
                  padding: 0,
                }}>
                {resolveIcon(otherIcons.girl.icon)}
              </IconWrapper>
              <IconWrapper style={homeStyle.iconWrapper}>
                {resolveIcon(otherIcons.qr.icon)}
              </IconWrapper>
              <Gap width={8} />
              <IconWrapper style={homeStyle.iconWrapper}>
                {resolveIcon(otherIcons.bell.icon)}
              </IconWrapper>
            </View>
            <Text style={homeStyle.headerText}>
              Where’s your next destination?
            </Text>
            <View style={homeStyle.headerFeatureIcons}>
              {Object.keys(serviceIcons).map(key => {
                return (
                  <ServiceCard
                    key={key}
                    name={key}
                    icon={serviceIcons[key].icon}
                  />
                );
              })}
            </View>
          </View>
        </View>

        <View style={commonStyles.cardContainer}>
          <ScreenSubHeader>Deals</ScreenSubHeader>
          <HomeCardContainer data={HomeCardsData} />
        </View>
      </View>
      <Gap height={200} />
    </ScrollableScreen>
  );
};

const homeStyle = StyleSheet.create({
  homeHeader: {
    // height: '55%',
    height: 455,
    minHeight: '50%',
    width: '100%',
    position: 'relative',
  },
  headerBG: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: -1,
  },
  headerData: {
    padding: 16,
    height: '100%',
  },
  headerIcons: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconWrapper: {
    backgroundColor: '#3D415C50',
    padding: 11,
    borderRadius: 50,
  },
  headerText: {
    fontSize: 32,
    fontWeight: '700',
    lineHeight: 38,
    color: '#FCFCFD',
    marginTop: 'auto',
    width: 251,
  },
  headerFeatureIcons: {
    marginTop: 24,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
export default Home;
