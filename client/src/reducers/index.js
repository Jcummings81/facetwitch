import { combineReducers } from 'redux';
import twitches from './twitches';

const rootReducer = combineReducers({
  twitches,
});

export default rootReducer;