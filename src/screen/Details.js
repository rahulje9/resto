import React from 'react';
import {SafeAreaView, StyleSheet, Text, View, Image} from 'react-native';
import CustomHeader from '../components/customHeader/CustomHeader';
import Rating from '../components/rating/Rating';
import Colors from '../utils/colors';

const Details = ({route}) => {
  const {data} = route?.params;
  console.log('item', data);
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <CustomHeader />
      <View style={styles.flexOne}>
        {/* center image */}
        <View style={styles.centerImage}>
          <Image
            style={styles.centerImageStyle}
            source={require('../../assets/images/base.jpeg')}
          />
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.name}>{data?.name}</Text>
          <Rating data={data} />
          <Text style={styles.reviewLabel}>
            {`${data?.reviews?.length} Reviews`}
          </Text>
          <Text numberOfLines={4} style={styles.address}>
            {data?.address}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Details;

const styles = StyleSheet.create({
  safeAreaView: {flex: 1, backgroundColor: '#fff'},
  flexOne: {
    flex: 1,
  },
  centerImage: {
    width: 200,
    height: 200,
    backgroundColor: Colors.WHITE,
    padding: 5,
    alignSelf: 'center',
    position: 'absolute',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    top: -80,
  },
  centerImageStyle: {
    width: 180,
    height: 180,
    borderRadius: 100,
  },
  detailsContainer: {
    marginTop: 120,
    flex: 1,
    alignItems: 'center',
  },
  name: {
    fontSize: 24,
    fontFamily: 'Inter-Medium',
    textAlign: 'center',
    marginBottom: 15,
  },
  reviewLabel: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    textAlign: 'center',
    color: '#5c5c5c',
    marginTop: 15,
  },
  address: {
    fontSize: 18,
    fontFamily: 'Inter-Medium',
    textAlign: 'center',
    color: '#5c5c5c',
    width: '60%',
    marginTop: 15,
  },
});
