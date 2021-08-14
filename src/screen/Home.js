/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
} from 'react-native';
import SearchCard from '../components/searchCard/SearchCard';
import Colors from '../utils/colors';
import {useDispatch, useSelector} from 'react-redux';

const Home = ({navigation}) => {
  const [search, setsearch] = useState('');
  const data = useSelector(state => state?.commonReducer?.restoList);
  console.log({data});

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <KeyboardAvoidingView style={styles.flexOne}>
        <ScrollView contentContainerStyle={styles.flexOne}>
          <View style={styles.container}>
            <SearchCard value={search} onChange={e => setsearch(e)} />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  safeAreaView: {flex: 1, backgroundColor: '#fff'},
  flexOne: {
    flex: 1,
  },
  container: {
    marginHorizontal: 15,
  },
});
