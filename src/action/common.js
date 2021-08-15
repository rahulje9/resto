import Data from '../data/restaurants.json';
import {getLocationDetailsAPI} from '../services/api';
import * as Types from '../utils/constants/types';

export const initializeData = () => {
  return dispatch => {
    return dispatch({
      type: Types.INITIALIZE_DATA,
      payload: Data,
    });
  };
};

export const setCurrentLocationInStore = data => {
  return dispatch => {
    dispatch({
      type: Types.SET_CURRENT_LOCATION,
      payload: data,
    });
  };
};

export const getLocationDetails = data => {
  return dispatch => {
    return getLocationDetailsAPI(data)
      .then(res => {
        console.log({res});
        dispatch(getLocationDetailsSuccess(res));
      })
      .catch(err => {
        dispatch(getLocationDetailsError(err));
      });
  };
};

export const getLocationDetailsSuccess = data => {
  return {
    type: Types.GET_CURRENT_LOCATION_DETAILS_SUCCESS,
    payload: data,
  };
};

export const getLocationDetailsError = err => {
  return {
    type: Types.GET_CURRENT_LOCATION_DETAILS_ERROR,
    payload: err,
  };
};
