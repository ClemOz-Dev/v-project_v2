import {
  CONNECT_USER,
} from '../actions/auth';

const initialState = {
  isLoggedIn: false,
  id: null,
  firstName: '',
  lastName: '',
  fullName: '',
  favoriteColor: 'grey',
  loading: false,
};

// All conditions for Authentification Reducer.
function authReducer(state = initialState, action) {
  switch (action.type) {
    case CONNECT_USER:
      return {
        ...state,
        id: action.user.id,
        firstName: action.user.firstName,
        lastName: action.user.lastName,
        fullName: `${action.user.firstName} ${action.user.lastName}`,
        favoriteColor: action.user.favoriteColor,
        isLoggedIn: true,
      };

    default:
      return state;
  }
}

// Export Reducer.
export default authReducer;
