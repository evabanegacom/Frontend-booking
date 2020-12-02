import { combineReducers } from 'redux';
import userReducer from './userReducer';
import bookingReducer from './bookingReducer';

const rootReducer = combineReducers({
  userReducer,
  bookingReducer,
});

export default rootReducer;
