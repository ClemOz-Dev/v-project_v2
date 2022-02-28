import { connect } from 'react-redux';

import { connectUser } from 'src/actions/auth';

import Members from 'src/components/Members';

const mapStateToProps = (state) => ({
  members: state.members.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  connectUser: (token, nickname, email, id) => dispatch(connectUser(token, nickname, email, id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Members);
