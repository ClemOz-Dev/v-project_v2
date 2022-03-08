import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './navBar.scss';
import Branding from '../../containers/Branding';

const NavBar = ({
  isLoggedIn, currentUser, location,
}) => {
  const dynamicCss = classNames('navBar', {
    isNotAuth: !isLoggedIn,
    logginPage: location === '/',
  });

  return (
    <div className={dynamicCss}>
      {currentUser.id ? (
        <>
          <div className="avatar" style={{ backgroundColor: currentUser.favoriteColor }} />
          <p className="userName">{currentUser.fullName}</p>
        </>
      ) : <p> </p>}

      <Branding />
    </div>
  );
};

NavBar.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  currentUser: PropTypes.object.isRequired,
  location: PropTypes.string.isRequired,
};

export default NavBar;
