import {
  SAVE_MEMBERS,
  SHOW_MEMBERS_PAGE,
} from '../actions/members';

const initialState = {
  members: [],
  loading: false,
  membersShown: false,
};

function membersReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_MEMBERS:
      return {
        ...state,
        members: action.members,
      };
    case SHOW_MEMBERS_PAGE:
      console.log(state.membersShown);
      return {
        ...state,
        membersShown: !state.membersShown,
      };

    default:
      return state;
  }
}

// Export Reducer.
export default membersReducer;
