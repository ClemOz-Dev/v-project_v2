import { connect } from 'react-redux';

import { connectUser, updateField } from 'src/actions/auth';

import Loggin from 'src/components/Loggin';

const mapStateToProps = (state) => ({
  members: state.members.members,
  userFullName: state.auth.fullName,
  userFavoriteColor: state.auth.favoriteColor,
  fieldValue: state.auth.fieldValue,
});

const mapDispatchToProps = (dispatch) => ({
  updateField: (value) => dispatch(updateField(value)),
  connectUser: (token, nickname, email, id) => dispatch(connectUser(token, nickname, email, id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Loggin);
