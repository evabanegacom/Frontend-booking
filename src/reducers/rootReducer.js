import { combineReducers } from 'redux';
import userReducer from './userReducer';
import bookingReducer from './bookingReducer';
import carReducer from './carReducer';
import carDetailsReducer from './carDetailsReducer';

const rootReducer = combineReducers({
  userReducer,
  bookingReducer,
  carReducer,
  carDetailsReducer,
});

export default rootReducer;
