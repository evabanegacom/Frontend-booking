import {
  FETCH_CAR_DETAILS_BEGIN,
  FETCH_CAR_DETAILS_SUCCESS,
  FETCH_CAR_DETAILS_FAILURE,
} from '../actions/actions';

const initialState = {
  car: [],
  error: null,
  waiting: 'wait for it',
};

const carDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CAR_DETAILS_BEGIN:
      return {
        ...state,
        waiting: 'wait for it',
      };

    case FETCH_CAR_DETAILS_SUCCESS:
      return {
        ...state,
        waiting: 'here we are',
        car: action.payload,
      };

    case FETCH_CAR_DETAILS_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        waiting: 'error',
      };

    default:
      return state;
  }
};

export default carDetailsReducer;
