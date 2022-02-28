import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import PropTypes from 'prop-types';

import data from 'src/assets/data.json';
import PrivateRoute from '../PrivateRoute';

import NavBar from '../../containers/NavBar';
import Loggin from '../../containers/Loggin';
import Members from '../Members';

import './styles.scss';

const App = ({
  isLoggedIn,
  connectUser,
  saveMembers,
}) => {
  useEffect(() => {
    const recoveredUser = localStorage.getItem('currentUser');
    if (recoveredUser) {
      connectUser(JSON.parse(recoveredUser));
    }
    saveMembers(data.members);
  }, []);

  return (
    <div className="app">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Loggin />} />
        <Route path="/members" element={<PrivateRoute auth={isLoggedIn} Component={Members} data={data.members} />} />
      </Routes>

    </div>
  );
};

App.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  saveMembers: PropTypes.func.isRequired,
  connectUser: PropTypes.func.isRequired,
};

export default App;
