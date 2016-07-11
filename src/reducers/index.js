// Set up your root reducer here...
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import presentation from './presentation';
import authentication from './authentication';
import voteReducer from './vote';
import admin from './admin';




const rootReducer = combineReducers({
  presentation: presentation,
  authentication: authentication,
  admin: admin,
  vote: voteReducer,
  routing: routerReducer
});


export default rootReducer;
