import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Logo from 'src/assets/images/logo-venn.jpg';
import './branding.scss';

const Branding = ({ isLoggedIn, location }) => {
  const dynamicCss = classNames('branding', {
    small: isLoggedIn,
    noTLogginPage: location !== '/',
  });

  return (
    <div className={dynamicCss}>
      <h1 className="txt-branding">Venn Project</h1>
      <Link to="/profil">
        <img className="img-branding" src={Logo} alt="logo" />
      </Link>
    </div>
  );
};

Branding.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  location: PropTypes.string.isRequired,
};

export default Branding;
