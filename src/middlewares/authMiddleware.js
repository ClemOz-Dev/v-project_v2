import {
  SUBMIT_LOGIN,

} from 'src/actions/auth';

// Middleware configuration.
const authMiddleware = (store) => (next) => (action) => {
  const state = store.getState();
  console.log(state);
  // const { token } = window.localStorage;
  switch (action.type) {
    case SUBMIT_LOGIN: {
      // todo
      break;
    }

    default:
      next(action);
  }
};

export default authMiddleware;
