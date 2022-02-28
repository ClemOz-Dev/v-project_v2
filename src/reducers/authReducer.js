import {
  CONNECT_USER,
  UPDATE_FIELD,
} from '../actions/auth';

const initialState = {
  isLoggedIn: false,
  id: null,
  firstName: '',
  lastName: '',
  fullName: '',
  favoriteColor: 'grey',
  loading: false,
  fieldValue: '',
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

    case UPDATE_FIELD:
      return {
        ...state,
        fieldValue: action.value,
      };

    default:
      return state;
  }
}

// Export Reducer.
export default authReducer;
