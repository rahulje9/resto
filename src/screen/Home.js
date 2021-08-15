/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  FlatList,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';
import Card from '../components/card/Card';
import SearchCard from '../components/searchCard/SearchCard';

const Home = ({navigation}) => {
  const [search, setsearch] = useState('');
  const data = useSelector(state => state?.commonReducer?.restoList);
  // console.log({data});

  const renderItem = ({item, index}) => {
    return <Card item={item} index={index} key={index} />;
  };

  const ListHeaderComponent = () => (
    <Text style={styles.header}>Restaurants List</Text>
  );

  const ListFooterComponent = () => <View style={styles.footer} />;

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <KeyboardAvoidingView style={styles.flexOne}>
        <ScrollView
          bounces={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.flexOne}>
          <View style={styles.container}>
            <SearchCard value={search} onChange={e => setsearch(e)} />

            <FlatList
              bounces={false}
              showsVerticalScrollIndicator={false}
              data={data?.restaurants ?? []}
              ListHeaderComponent={ListHeaderComponent}
              ListFooterComponent={ListFooterComponent}
              renderItem={renderItem}
              keyExtractor={(_, index) => index?.toString()}
            />
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
  header: {marginVertical: 20, fontSize: 28, fontFamily: 'Inter-Bold'},
  footer: {marginBottom: 50},
});
