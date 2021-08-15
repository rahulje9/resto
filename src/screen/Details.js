/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';
import CustomHeader from '../components/customHeader/CustomHeader';
import Rating from '../components/rating/Rating';
import Colors from '../utils/colors';
import dayjs from 'dayjs';

const Details = ({route}) => {
  const {data} = route?.params;
  const [day] = useState(dayjs().format('dddd'));

  const renderItem = (item, index) => {
    return (
      <View style={styles.renderItem}>
        <View style={styles.nameAndDate}>
          <Text style={styles.reviewerName}>{item?.name}</Text>
          <Text style={styles.reviewDate}>{item?.date}</Text>
        </View>
        <Text style={styles.comments}>{item?.comments}</Text>
        <Rating starCount={item?.rating} count />
      </View>
    );
  };

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
          <ScrollView
            showsVerticalScrollIndicator={false}
            bounces={false}
            contentContainerStyle={styles.scrollView}>
            <Text style={styles.name}>{data?.name}</Text>
            <Rating data={data} />
            <Text style={styles.reviewLabel}>
              {`${data?.reviews?.length} Reviews`}
            </Text>
            <Text numberOfLines={4} style={styles.address}>
              {data?.address}
            </Text>

            {Object.entries(data?.operating_hours).map(item => {
              return (
                <View style={styles.timeParentContainer}>
                  <View style={styles.dayContainer}>
                    <Text
                      style={[
                        styles.dayLabel,
                        item[0] === day && styles.currentDay,
                      ]}>
                      {item[0]}
                    </Text>
                  </View>
                  <View style={styles.timeContainer}>
                    <Text
                      style={[
                        styles.timeLabel,
                        item[0] === day && styles.currentDay,
                      ]}>
                      {item[1]}
                    </Text>
                  </View>
                </View>
              );
            })}
            <View style={styles.reviewsContainer}>
              <Text style={styles.reviewTitle}>Reviews</Text>
              {data?.reviews?.map((item, index) => renderItem(item, index))}
            </View>
          </ScrollView>
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
    marginBottom: 20,
  },
  scrollView: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
  },
  timeParentContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 5,
    borderBottomWidth: 0.6,
    borderBottomColor: '#d4d6d4',
  },
  dayContainer: {
    flex: 0.3,
  },
  timeContainer: {
    flex: 0.4,
  },
  dayLabel: {
    fontSize: 16,
    fontFamily: 'Inter-Medium',
    color: '#5c5c5c',
  },
  timeLabel: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#5c5c5c',
  },
  currentDay: {
    color: 'green',
    fontFamily: 'Inter-Bold',
  },
  reviewsContainer: {
    marginTop: 20,
  },
  reviewTitle: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#5c5c5c',
    marginBottom: 15,
  },
  renderItem: {
    width: '75%',
    borderBottomWidth: 0.6,
    borderBottomColor: '#d4d6d4',
    paddingBottom: 5,
    marginBottom: 10,
  },
  nameAndDate: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  reviewerName: {
    fontSize: 18,
    fontFamily: 'Inter-Regular',
    color: '#5c5c5c',
  },
  reviewDate: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#5c5c5c',
  },
  comments: {
    marginBottom: 5,
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#5c5c5c',
    fontStyle: 'italic',
  },
});
