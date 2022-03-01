import { connect } from 'react-redux';

import { connectUser } from 'src/actions/auth';
import { updateField } from 'src/actions/global';

import Members from 'src/components/Members';

const mapStateToProps = (state) => ({
  members: state.members.members,
  fieldValue: state.global.fieldValue,
});

const mapDispatchToProps = (dispatch) => ({
  connectUser: (token, nickname, email, id) => dispatch(connectUser(token, nickname, email, id)),
  updateField: (value) => dispatch(updateField(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Members);
