import { connect } from 'react-redux';

import NavBar from 'src/components/NavBar';

const mapStateToProps = (state) => ({
  currentUser: state.auth.currentUser,
  isLoggedIn: state.auth.isLoggedIn,
  location: state.global.location,
});

const mapDispatchToProps = () => ({
  /* todo */
});
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
