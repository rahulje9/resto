import {pick} from 'lodash';
import {useState} from 'react';
import {Platform} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import {PERMISSIONS, request, requestMultiple} from 'react-native-permissions';
import {useDispatch} from 'react-redux';
import {setCurrentLocationInStore} from '../action/common';

const useLocationHook = () => {
  const dispatch = useDispatch();

  const option = Platform.select({
    ios: {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    android: {
      enableHighAccuracy: true,
      timeout: 20000,
      distanceFilter: 250,
      showLocationDialog: true,
    },
  });

  const [currentLocation, setCurrentLocation] = useState(null);
  const [isPermissionGranted, setIsPermissionGranted] = useState(false);

  const requestPermission = () => {
    if (Platform.OS === 'ios') {
      request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE).then(result => {
        if (result === 'granted') {
          setIsPermissionGranted(true);
          fetchLocation();
        }
      });
    } else {
      requestMultiple([
        PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION,
        PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
      ]).then(statuses => {
        if (
          statuses[PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION] === 'granted' &&
          statuses[PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION] === 'granted'
        ) {
          setIsPermissionGranted(true);
          fetchLocation();
        }
      });
    }
  };

  const fetchLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        const location = pick(position.coords, ['latitude', 'longitude']);
        setCurrentLocation(location);
        dispatch(setCurrentLocationInStore(location));
      },
      error => {},
      option,
    );
  };

  return {
    currentLocation,
    isPermissionGranted,
    fetchLocation,
    requestPermission,
  };
};

export default useLocationHook;
