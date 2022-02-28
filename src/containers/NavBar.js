import { connect } from 'react-redux';

import NavBar from 'src/components/NavBar';

const mapStateToProps = (state) => ({
  isLoggedIn: state.auth.isLoggedIn,
  userFullName: state.auth.fullName,
  userFavoriteColor: state.auth.favoriteColor,
});

const mapDispatchToProps = () => ({
  /* todo */
});
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
