/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import Colors from '../utils/colors';

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Text>dsad</Text>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  safeAreaView: {flex: 1, backgroundColor: Colors.WHITE},
});
