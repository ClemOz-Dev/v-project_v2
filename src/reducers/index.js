import { combineReducers } from 'redux';

import authReducer from './authReducer';
import membersReducer from './membersReducer';
import globalReducer from './globalReducer';
import projectsReducer from './projectsReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  members: membersReducer,
  global: globalReducer,
  projects: projectsReducer,
});

export default rootReducer;
