import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './navBar.scss';
import Branding from '../../containers/Branding';

const NavBar = ({ isLoggedIn, userFullName, userFavoriteColor }) => {
  const dynamicCss = classNames('navBar', {
    isNotAuth: !isLoggedIn,
  });

  return (
    <div className={dynamicCss}>
      {userFullName.length > 0 ? (
        <>
          <div className="avatar" style={{ backgroundColor: userFavoriteColor }} />
          <p>{userFullName}</p>
        </>
      ) : <p> </p>}

      <Branding />
    </div>
  );
};

NavBar.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  userFullName: PropTypes.string.isRequired,
  userFavoriteColor: PropTypes.string.isRequired,
};

export default NavBar;
