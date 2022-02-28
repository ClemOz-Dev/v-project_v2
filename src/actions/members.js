export const FETCH_MEMBERS = 'FETCH_MEMBERS';
export const SAVE_MEMBERS = 'SAVE_MEMBERS';

export const fetchMembers = () => ({
  type: FETCH_MEMBERS,
});

export const saveMembers = (members) => ({
  type: SAVE_MEMBERS,
  members: members,
});
