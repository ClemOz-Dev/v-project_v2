import {
  UPDATE_FIELD,
} from '../actions/global';

const initialState = {
  fieldValue: '',

};

function globalReducer(state = initialState, action) {
  switch (action.type) {
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
export default globalReducer;
