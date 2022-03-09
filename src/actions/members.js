export const FETCH_MEMBERS = 'FETCH_MEMBERS';
export const SAVE_MEMBERS = 'SAVE_MEMBERS';
export const SHOW_MEMBERS_PAGE = 'SHOW_MEMBERS_PAGE';

export const fetchMembers = () => ({
  type: FETCH_MEMBERS,
});

export const saveMembers = (members) => ({
  type: SAVE_MEMBERS,
  members: members,
});

export const showMembersPage = () => ({
  type: SHOW_MEMBERS_PAGE,
});
