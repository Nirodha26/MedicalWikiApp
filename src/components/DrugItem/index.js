import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

function DrugItem({diseases, description, name, released}) {
  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>{name}</Text>
        </View>
        <View style={styles.dateContainer}>
          <Text style={styles.date}>{released}</Text>
        </View>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.diseases}>{diseases}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    elevation: 1,
    shadowOpacity: 0.2,
    shadowRadius: 2,
    shadowOffset: {width: 0, height: 0},
    margin: 5,
  },
  name: {
    flexShrink: 1,
    fontSize: 17,
    fontWeight: '700',
  },
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  nameContainer: {
    flex: 3,
  },
  dateContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  infoContainer: {
    paddingVertical: 5,
  },
  date: {
    fontSize: 12,
    fontWeight: '400',
    color: '#A6A6A6',
  },
  diseases: {
    fontSize: 12,
    fontWeight: '400',
    color: '#A6A6A6',
  },
  description: {
    fontSize: 14,
    fontWeight: '400',
  },
});

DrugItem.propTypes = {
  diseases: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  released: PropTypes.string,
};

DrugItem.defaultProps = {
  description: '',
  released: '',
};

export default DrugItem;
