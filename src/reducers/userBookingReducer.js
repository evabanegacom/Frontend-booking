const initialState = {
  userBooking: [],
  error: null,
  waiting: 'wait for it',
};

const bookingDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_BOOKING_DETAIL':
      return {
        ...state,
        waiting: 'here we are',
        userBooking: action.payload,
      };

    default:
      return state;
  }
};

export default bookingDetailReducer;
