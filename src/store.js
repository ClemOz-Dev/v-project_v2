// == Import dependencies: Yarn.
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from 'src/reducers';
import authMiddleware from './middlewares/authMiddleware';

// Combining DevTools
const enhancers = composeWithDevTools(
  applyMiddleware(
    authMiddleware,
  ),
);

const store = createStore(
  reducer,
  enhancers,
);

export default store;
