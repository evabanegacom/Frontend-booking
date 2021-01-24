const initialState = {
  booking: [],
  error: null,
  waiting: 'wait for it',
};

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_BOOKING':
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
