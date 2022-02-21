import React, {useState, useEffect, useRef, useCallback} from 'react';
import {FlatList, SafeAreaView, StyleSheet, Animated} from 'react-native';

// APIs
import {getDrugData} from '../../services/api';

// Custom components
import DrugItem from '../../components/DrugItem';
import CustomSearchBar from '../../components/CustomSearchBar';

const Home = () => {
  const [searchPhrase, setSearchPhrase] = useState('');
  const [filteredDrugs, setFilteredDrugs] = useState([]);

  const searchBarPosition = useRef(new Animated.Value(0)).current;
  const scrollViewStartOffsetY = useRef();
  const scrollDirection = useRef();

  useEffect(() => {
    const filteredDrugData = getDrugData(searchPhrase);
    setFilteredDrugs(filteredDrugData);
  }, [searchPhrase]);

  const hideSearchBar = useCallback(
    event => {
      if (searchPhrase === '') {
        const offsetY = event.nativeEvent.contentOffset.y;
        if (
          scrollViewStartOffsetY.current > offsetY &&
          scrollDirection.current !== 'up'
        ) {
          Animated.timing(searchBarPosition, {
            toValue: 0,
            duration: 200,
            useNativeDriver: true,
          }).start();
          scrollDirection.current = 'up';
        } else if (
          scrollViewStartOffsetY.current < offsetY &&
          scrollDirection.current !== 'down'
        ) {
          Animated.timing(searchBarPosition, {
            toValue: -60,
            duration: 300,
            useNativeDriver: true,
          }).start();
          scrollDirection.current = 'down';
        }
      }
    },
    [searchPhrase, searchBarPosition],
  );

  const renderItem = useCallback(({item = {}}) => {
    return (
      <DrugItem
        name={item.name}
        diseases={item.diseases?.join(', ')}
        description={item.description}
        released={item.released}
      />
    );
  }, []);

  const onClearSearchText = () => {
    setSearchPhrase('');
  };

  const onScrollBeginDrag = useCallback(event => {
    scrollViewStartOffsetY.current = event.nativeEvent.contentOffset.y;
  }, []);

  const keyExtractor = useCallback(item => item.id, []);

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={{transform: [{translateY: searchBarPosition}]}}>
        <CustomSearchBar
          placeholder={'Search drugs'}
          onChangeText={setSearchPhrase}
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
          keyExtractor={keyExtractor}
          onScroll={hideSearchBar}
          onScrollBeginDrag={onScrollBeginDrag}
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
});

export default Home;
