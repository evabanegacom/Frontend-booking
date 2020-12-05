import { combineReducers } from 'redux';
import userReducer from './userReducer';
import bookingReducer from './bookingReducer';
import carReducer from './carReducer';
import carDetailsReducer from './carDetailsReducer';
import bookingDetailReducer from './userBookingReducer';

const rootReducer = combineReducers({
  userReducer,
  bookingReducer,
  carReducer,
  carDetailsReducer,
  bookingDetailReducer,
});

export default rootReducer;
