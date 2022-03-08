import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import data from 'src/assets/data.json';
import PrivateRoute from '../PrivateRoute';

import NavBar from '../../containers/NavBar';
import Loggin from '../../containers/Loggin';
import Members from '../../containers/Members';
import Profil from '../../containers/Profil';

import './styles.scss';

const App = ({
  isLoggedIn,
  connectUser,
  saveMembers,
  saveLocation,
}) => {
  const { pathname } = useLocation();
  useEffect(() => {
    const recoveredUser = localStorage.getItem('currentUser');
    if (recoveredUser) {
      connectUser(JSON.parse(recoveredUser));
    }
    saveMembers(data.members);
  }, []);
  useEffect(() => saveLocation(pathname));

  return (
    <div className="app">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Loggin />} />
        <Route path="/members" element={<PrivateRoute auth={isLoggedIn} Component={Members} />} />
        <Route path="/profil" element={<PrivateRoute auth={isLoggedIn} Component={Profil} />} />
      </Routes>

    </div>
  );
};

App.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  saveMembers: PropTypes.func.isRequired,
  connectUser: PropTypes.func.isRequired,
  saveLocation: PropTypes.func.isRequired,
};

export default App;
