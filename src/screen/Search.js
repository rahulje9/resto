import React, {useEffect, useRef} from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Card from '../components/card/Card';
import SearchCard from '../components/searchCard/SearchCard';
import {getLocationDetails} from '../action/common';

import useLocationHook from '../hooks/useLocationHook';
import {debounce} from 'lodash';

const Search = () => {
  const dispatch = useDispatch();
  const {currentLocation, isPermissionGranted, requestPermission} =
    useLocationHook();

  const debouncedGetGeoLocation = debounce(() => getGeoLocation(), 100);

  const currentLocationDetails = useSelector(
    state => state?.commonReducer?.currentLocationDetails,
  );
  const currentLocationDetailsSuccess = useSelector(
    state => state?.commonReducer?.currentLocationDetailsSuccess,
  );
  const currentLocationDetailsError = useSelector(
    state => state?.commonReducer?.currentLocationDetailsError,
  );

  const currentLocationDetailsRef = useRef();
  const currentLocationDetailsSuccessRef = useRef();
  const currentLocationDetailsErrorRef = useRef();

  currentLocationDetailsRef.current = currentLocationDetails;
  currentLocationDetailsSuccessRef.current = currentLocationDetailsSuccess;
  currentLocationDetailsErrorRef.current = currentLocationDetailsError;

  useEffect(() => {
    debouncedGetGeoLocation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getGeoLocation = () => {
    if (isPermissionGranted === false) {
      requestPermission();
    }
  };

  useEffect(() => {
    if (currentLocation !== null) {
      getLocationDetail();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentLocation]);

  const getLocationDetail = () => {
    if (currentLocation !== null) {
      dispatch(getLocationDetails(currentLocation)).then(() => {});
    }
  };

  const distance = (lat1, lon1, lat2, lon2, unit) => {
    if (lat1 == lat2 && lon1 == lon2) {
      return 0;
    } else {
      var radlat1 = (Math.PI * lat1) / 180;
      var radlat2 = (Math.PI * lat2) / 180;
      var theta = lon1 - lon2;
      var radtheta = (Math.PI * theta) / 180;
      var dist =
        Math.sin(radlat1) * Math.sin(radlat2) +
        Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
      if (dist > 1) {
        dist = 1;
      }
      dist = Math.acos(dist);
      dist = (dist * 180) / Math.PI;
      dist = dist * 60 * 1.1515;
      if (unit == 'K') {
        dist = dist * 1.609344;
      }
      if (unit == 'N') {
        dist = dist * 0.8684;
      }
      return dist;
    }
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.flexOne}>
        {currentLocationDetailsSuccessRef.current ? (
          <>
            <View style={styles.locationContainer}>
              <Text style={styles.locationLabel}>
                {currentLocationDetailsRef.current?.address?.county + ', '}
              </Text>
              <Text style={styles.locationLabel}>
                {currentLocationDetailsRef.current?.address?.state}
              </Text>
            </View>
          </>
        ) : null}
      </View>
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({
  safeAreaView: {flex: 1, backgroundColor: '#fff'},
  flexOne: {
    flex: 1,
  },
  locationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  locationLabel: {
    fontSize: 18,
    fontFamily: 'Inter-Medium',
    color: '#5c5c5c',
  },
});
