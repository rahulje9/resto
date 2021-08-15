import React from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import Card from '../components/card/Card';
import SearchCard from '../components/searchCard/SearchCard';

const Home = () => {
  const data = useSelector(state => state?.commonReducer?.restoList);

  const renderItem = ({item, index}) => {
    return <Card item={item} index={index} key={index} />;
  };

  const ListHeaderComponent = () => (
    <Text style={styles.header}>Restaurants List</Text>
  );

  const ListFooterComponent = () => <View style={styles.footer} />;

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.flexOne}>
        <View style={styles.container}>
          <SearchCard />

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
      </View>
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
