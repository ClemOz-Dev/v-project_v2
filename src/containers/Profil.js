import { connect } from 'react-redux';

import Profil from 'src/components/Profil';

const mapStateToProps = (state) => ({
  projects: state.projects.usersProjects,
});

const mapDispatchToProps = (dispatch) => ({
  // todo
});

export default connect(mapStateToProps, mapDispatchToProps)(Profil);
