import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import BackIcon from '../../../assets/images/chevron-left.svg';
import {useNavigation} from '@react-navigation/native';

const CustomHeader = ({name}) => {
  const navigation = useNavigation();

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => navigation.goBack()}
          style={styles.btn}>
          <BackIcon width={40} height={40} />
          <Text style={styles.btnLabel}>Go Back</Text>
        </TouchableOpacity>

        <ImageBackground
          resizeMode="repeat"
          style={styles.bgImage}
          source={require('../../../assets/images/cover.jpeg')}
        />
        <View style={styles.overlay} />
      </View>
    </>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  container: {
    height: '20%',
  },
  bgImage: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  btn: {
    position: 'absolute',
    zIndex: 10,
    padding: 20,
    flexDirection: 'row',
  },
  btnLabel: {
    color: '#fff',
    fontSize: 30,
  },
});
