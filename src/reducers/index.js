import { combineReducers } from 'redux';

import authReducer from './authReducer';
import membersReducer from './membersReducer';
import globalReducer from './globalReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  members: membersReducer,
  global: globalReducer,
});

export default rootReducer;
