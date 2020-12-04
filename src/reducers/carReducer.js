import {
  FETCH_CARS_BEGIN,
  FETCH_CARS_SUCCESS,
  FETCH_CARS_FAILURE,
} from '../actions/actions';

const initialState = {
  cars: [],
  error: null,
  waiting: 'wait for it',
};

const carReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CARS_BEGIN:
      return {
        ...state,
        waiting: 'wait for it',
      };

    case FETCH_CARS_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        waiting: 'here we are',
        cars: action.payload,
      };

    case FETCH_CARS_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        waiting: 'error',
      };

    default:
      return state;
  }
};

export default carReducer;
