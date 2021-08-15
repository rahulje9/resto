import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const SearchCard = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Search');
      }}
      activeOpacity={0.5}
      style={styles.container}>
      <Text style={styles.searchIcon}>🔍</Text>
      <Text style={styles.input}>Search...</Text>
    </TouchableOpacity>
  );
};

export default SearchCard;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ebebeb',
    height: 50,
    borderRadius: 10,
    marginTop: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
  flexOne: {
    flex: 1,
  },
  searchIcon: {
    height: 30,
    paddingTop: 6,
    paddingHorizontal: 15,
  },
  input: {
    flex: 1,
    color: 'gray',
    margin: 0,
    padding: 0,
  },
});
