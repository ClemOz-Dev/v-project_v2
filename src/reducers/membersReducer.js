import {
  SAVE_MEMBERS,
} from '../actions/members';

const initialState = {
  members: [],
  loading: false,
};

function membersReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_MEMBERS:
      return {
        ...state,
        members: action.members,
      };

    default:
      return state;
  }
}

// Export Reducer.
export default membersReducer;
