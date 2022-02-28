import { connect } from 'react-redux';

import { saveMembers } from 'src/actions/members';
import { connectUser } from 'src/actions/auth';

import App from 'src/components/App';

const mapStateToProps = (state) => ({
  isLoggedIn: state.auth.isLoggedIn,
});

const mapDispatchToProps = (dispatch) => ({
  saveMembers: (members) => dispatch(saveMembers(members)),
  connectUser: (user) => dispatch(connectUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
