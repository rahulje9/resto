import Data from '../data/restaurants.json';
import * as Types from '../utils/constants/types';

export const initializeData = () => {
  return dispatch => {
    return dispatch({
      type: Types.INITIALIZE_DATA,
      payload: Data,
    });
  };
};
