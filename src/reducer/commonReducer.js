import * as Types from '../utils/constants/types';

const initialState = {
  restoList: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case Types.INITIALIZE_DATA: {
      return {...state, restoList: action.payload};
    }
    default: {
      return state;
    }
  }
}
