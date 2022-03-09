import { connect } from 'react-redux';

import Profil from 'src/components/Profil';
import { showMembersPage } from '../actions/members';

const mapStateToProps = (state) => ({
  projects: state.projects.usersProjects,
  membersShown: state.members.membersShown,
});

const mapDispatchToProps = (dispatch) => ({
  showMembersPage: () => dispatch(showMembersPage()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profil);
