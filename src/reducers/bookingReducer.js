import {
  FETCH_BOOKING_SUCCESS,
} from '../actions/actions';

const initialState = {
  booking: [],
  error: null,
  waiting: 'wait for it',
};

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKING_SUCCESS:
      return {
        ...state,
        waiting: 'here we are',
        booking: action.payload,
      };

    default:
      return state;
  }
};

export default bookingReducer;
