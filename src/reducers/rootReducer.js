import { combineReducers } from 'redux';
import userReducer from './userReducer';
import bookingReducer from './bookingReducer';
import carReducer from './carReducer';

const rootReducer = combineReducers({
  userReducer,
  bookingReducer,
  carReducer,
});

export default rootReducer;
