import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

const Rating = ({data, starCount, count = false}) => {
  const generateRating = () => {
    const dummyArr = [0, 0, 0, 0, 0];
    const total = data?.reviews?.reduce((acc, r) => acc + r?.rating ?? 0, 0);
    const avg = Math.trunc(total / 3);
    return (
      <View style={styles.ratingView}>
        {dummyArr.map((_, i) => {
          return (
            <View style={styles.starContainer}>
              {(count ? i < starCount : i + 1 <= avg) ? (
                <Image
                  source={require('../../../assets/images/fullstar.png')}
                />
              ) : (
                <Image source={require('../../../assets/images/star.png')} />
              )}
            </View>
          );
        })}
      </View>
    );
  };
  return generateRating();
};

export default Rating;

const styles = StyleSheet.create({
  ratingView: {
    flexDirection: 'row',
    paddingVertical: 5,
  },
  starContainer: {
    marginHorizontal: 3,
  },
});
