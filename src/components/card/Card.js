import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Colors from '../../utils/colors';
import {useNavigation} from '@react-navigation/native';
import Rating from '../rating/Rating';

const Card = ({item, index}) => {
  const navigation = useNavigation();

  const pickRandomColor = () => {
    const _colors = [Colors.BLUE, Colors.GREEN, Colors.YELLOW, Colors.PURPLE];
    const rndInt = Math.floor(Math.random() * 4);
    return _colors[rndInt];
  };

  const generateRating = data => {
    const dummyArr = [0, 0, 0, 0, 0];
    const total = data?.reduce((acc, r) => acc + r?.rating ?? 0, 0);
    const avg = Math.trunc(total / 3);
    return (
      <View style={styles.ratingView}>
        {dummyArr.map((_, i) => {
          return (
            <View style={styles.starContainer}>
              {i + 1 <= avg ? (
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

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => {
        navigation.navigate('Details', {data: item});
      }}
      style={styles.container}
      key={index}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.imageStyle}
          source={require('../../../assets/images/base.jpeg')}
        />
      </View>
      <View style={styles.detailsCard}>
        <View
          style={[
            {
              backgroundColor: pickRandomColor(),
            },
            styles.cusineContainer,
          ]}>
          <Text style={styles.cuisine}>{item?.cuisine_type}</Text>
        </View>
        <Text style={styles.name}>{item?.name}</Text>
        <Text style={styles.neighborhood}>{item?.neighborhood}</Text>
        <Rating data={item} />
      </View>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: '#d4d6d4',
    flex: 1,
    flexDirection: 'row',
    marginVertical: 20,
    paddingBottom: 10,
  },
  imageContainer: {
    flex: 0.4,
  },
  imageStyle: {
    height: 120,
    width: 120,
    borderRadius: 10,
  },
  detailsCard: {
    flex: 0.7,
  },
  cuisine: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: Colors.WHITE,
  },
  cusineContainer: {
    width: '32%',
    paddingLeft: 5,
    borderRadius: 5,
    paddingVertical: 2,
  },
  name: {
    fontFamily: 'Inter-Medium',
    fontSize: 18,
    paddingVertical: 5,
  },
  neighborhood: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: '#5c5c5c',
  },
  ratingView: {
    flexDirection: 'row',
    paddingVertical: 5,
  },
  starContainer: {
    marginHorizontal: 3,
  },
});
