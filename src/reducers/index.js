import { combineReducers } from 'redux';

import authReducer from './authReducer';
import membersReducer from './membersReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  members: membersReducer,
});

export default rootReducer;
