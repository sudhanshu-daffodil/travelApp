import {StyleSheet, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import CardTab from './CardTab';
import DealsCard from './DealsCard';
import ScrollableCards from '../Commom/ScrollableCards';

const HomeCardContainer = ({data}) => {
  const init = 'all';
  const [activeTab, setActiveTab] = useState(init);

  const labels = {[init]: ''};
  data.forEach(({type}) => {
    labels[type] = '';
  });
  const arr = Object.keys(labels);
  const toggleActiveCard = name => {
    setActiveTab(name);
  };
  const [cardsData, setCardsData] = useState([]);
  const filterCards = type => {
    return data.filter(card => {
      return card.type === activeTab || activeTab === init;
    });
  };
  useEffect(() => {
    setCardsData(filterCards(activeTab));
  }, [activeTab]);

  return (
    <>
      <View style={styles.tabs}>
        {arr.map(label => (
          <CardTab
            key={label}
            name={label}
            handleOnClick={toggleActiveCard}
            isActive={activeTab === label}
          />
        ))}
      </View>
      <ScrollableCards style={styles.cards}>
        {cardsData.map(props => (
          <DealsCard key={props.uri} {...props} />
        ))}
      </ScrollableCards>
    </>
  );
};

export default HomeCardContainer;

const styles = StyleSheet.create({
  tabs: {
    flexDirection: 'row',
  },
  cards: {
    paddingVertical: 20,
  },
});
