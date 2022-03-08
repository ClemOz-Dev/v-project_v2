import {
  UPDATE_FIELD,
  SAVE_LOCATION,
} from '../actions/global';

const initialState = {
  membersValue: '',
  projectNameValue: '',
  tagsValue: '',
  location: '',
};

function globalReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_FIELD:
      if (action.identifier === 'projectName') {
        return {
          ...state,
          projectNameValue: action.value,
        };
      }
      if (action.identifier === 'tags') {
        return {
          ...state,
          tagsValue: action.value,
        };
      }
      return {
        ...state,
      };

    case SAVE_LOCATION:
      return {
        ...state,
        location: action.location,
      };

    default:
      return state;
  }
}

export default globalReducer;
