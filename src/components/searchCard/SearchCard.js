import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

const SearchCard = ({value = '', onChange}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.searchIcon}>🔍</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={e => {
          onChange && onChange(e);
        }}
        maxLength={15}
        placeholder="Search..."
      />
    </View>
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
