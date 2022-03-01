import { connect } from 'react-redux';

import NavBar from 'src/components/NavBar';

const mapStateToProps = (state) => ({
  isLoggedIn: state.auth.isLoggedIn,
  userFullName: state.auth.fullName,
  userFavoriteColor: state.auth.favoriteColor,
  location: window.location.pathname,
});

const mapDispatchToProps = () => ({
  /* todo */
});
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
