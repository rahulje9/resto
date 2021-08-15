import * as Types from '../utils/constants/types';

const initialState = {
  restoList: null,
  activeLocation: null,
  currentLocationDetails: null,
  currentLocationDetailsSuccess: false,
  currentLocationDetailsError: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case Types.INITIALIZE_DATA: {
      return {...state, restoList: action.payload};
    }
    case Types.SET_CURRENT_LOCATION: {
      return {
        ...state,
        activeLocation: action.payload,
      };
    }
    case Types.GET_CURRENT_LOCATION_DETAILS_SUCCESS: {
      return {
        ...state,
        currentLocationDetails: action.payload,
        currentLocationDetailsSuccess: true,
        currentLocationDetailsError: null,
      };
    }
    case Types.GET_CURRENT_LOCATION_DETAILS_ERROR: {
      return {
        ...state,
        currentLocationDetails: null,
        currentLocationDetailsSuccess: true,
        currentLocationDetailsError: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}
