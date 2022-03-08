import { connect } from 'react-redux';

import Branding from 'src/components/Branding';

const mapStateToProps = (state) => ({
  isLoggedIn: state.auth.isLoggedIn,
  location: state.global.location,
});

const mapDispatchToProps = () => ({
  // todo
});

export default connect(mapStateToProps, mapDispatchToProps)(Branding);
