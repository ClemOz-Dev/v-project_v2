import { connect } from 'react-redux';

import { connectUser } from 'src/actions/auth';
import { updateField } from 'src/actions/global';

import Loggin from 'src/components/Loggin';

const mapStateToProps = (state) => ({
  members: state.members.members,
  currentUser: state.auth.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  updateField: (value, identifier) => dispatch(updateField(value, identifier)),
  connectUser: (user) => user && dispatch(connectUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Loggin);
