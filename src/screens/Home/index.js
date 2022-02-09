import React, {useState, useEffect, useRef} from 'react';
import {FlatList, SafeAreaView, StyleSheet, Animated} from 'react-native';

// Constants
import {drugs} from '../../data/dataset.json';

// Custom components
import DrugItem from '../../components/DrugItem';
import CustomSearchBar from '../../components/CustomSearchBar';

const Home = () => {
  const [searchPhrase, setSearchPhrase] = useState('');
  const [filteredDrugs, setFilteredDrugs] = useState([]);

  const searchBarPosition = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (drugs) {
      const filtered = drugs.filter(drug => drug?.name.includes(searchPhrase));
      setFilteredDrugs(filtered);
    }
  }, [searchPhrase]);

  let scrollViewStartOffsetY = null;
  let direction;

  const hideSearchBar = event => {
    if (searchPhrase === '') {
      const offsetY = event.nativeEvent.contentOffset.y;
      if (scrollViewStartOffsetY > offsetY && direction !== 'up') {
        Animated.timing(searchBarPosition, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }).start();
        direction = 'up';
      } else if (scrollViewStartOffsetY < offsetY && direction !== 'down') {
        Animated.timing(searchBarPosition, {
          toValue: -50,
          duration: 300,
          useNativeDriver: true,
        }).start();
        direction = 'down';
      }
    }
  };

  const renderItem = ({item = {}}) => {
    return (
      <DrugItem
        name={item.name}
        diseases={item.diseases?.join(', ')}
        description={item.description}
        released={item.released}
      />
    );
  };

  const onClearSearchText = () => {
    setSearchPhrase('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={{transform: [{translateY: searchBarPosition}]}}>
        <CustomSearchBar
          clearIcon
          lightTheme
          returnKeyType="search"
          placeholder={'Search drugs'}
          inputStyle={styles.searchBarInputStyle}
          onChangeText={setSearchPhrase}
          containerStyle={styles.searchBarContainerStyle}
          onClearText={onClearSearchText}
          value={searchPhrase}
        />
      </Animated.View>
      <Animated.View
        // eslint-disable-next-line no-sparse-arrays
        style={[
          styles.listContainer,
          {transform: [{translateY: searchBarPosition}]},
          ,
        ]}>
        <FlatList
          data={filteredDrugs}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          onScroll={hideSearchBar}
          onScrollBeginDrag={event => {
            scrollViewStartOffsetY = event.nativeEvent.contentOffset.y;
          }}
        />
      </Animated.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  listContainer: {
    paddingTop: 10,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  searchBarInputStyle: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#E1E8EC',
    color: '#212121',
    fontSize: 16,
  },
});

export default Home;
