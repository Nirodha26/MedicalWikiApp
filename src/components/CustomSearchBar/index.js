import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SearchBar} from 'react-native-elements';
import PropTypes from 'prop-types';

function CustomSearchBar({
  returnKeyType,
  placeholder,
  value,
  onClearText,
  onChangeText,
}) {
  return (
    <View style={styles.searchContainer}>
      <SearchBar
        value={value}
        returnKeyType={returnKeyType}
        placeholder={placeholder}
        onChangeText={onChangeText}
        onClearText={onClearText}
        inputStyle={styles.searchBarInputStyle}
        placeholderTextColor={'#DBDBDB'}
        containerStyle={styles.searchBarContainerStyle}
        inputContainerStyle={styles.inputContainerStyle}
        searchIcon={styles.searchIcon}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchBarInputStyle: {
    fontSize: 14,
    fontWeight: '300',
    color: '#323338',
  },
  searchBarContainerStyle: {
    flex: 1,
    borderTopColor: 'transparent',
    backgroundColor: 'transparent',
    borderBottomColor: 'transparent',
    paddingBottom: 0,
  },
  inputContainerStyle: {
    borderWidth: 1,
    borderRadius: 5,
    borderBottomWidth: 1,
    backgroundColor: '#FAFAFA',
    borderColor: '#DBDBDB',
    height: 40,
  },
  searchIcon: {
    color: '#25333D',
  },
});

CustomSearchBar.propTypes = {
  onChangeText: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  onClearText: PropTypes.func.isRequired,
  value: PropTypes.string,
  returnKeyType: PropTypes.string,
};

CustomSearchBar.defaultProps = {
  value: '',
  returnKeyType: 'search',
};

export default CustomSearchBar;
