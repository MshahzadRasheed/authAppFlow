import {combineReducers} from 'redux';
import user from './user'; // Adjust the import path as necessary

const rootReducer = combineReducers({
  user,
});

export default rootReducer;
