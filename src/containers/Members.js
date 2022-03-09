import { connect } from 'react-redux';

import { showMembersPage } from 'src/actions/members';

import Members from 'src/components/Members';

const mapStateToProps = (state) => ({
  members: state.members.members,
});

const mapDispatchToProps = (dispatch) => ({
  showMembersPage: () => dispatch(showMembersPage()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Members);
