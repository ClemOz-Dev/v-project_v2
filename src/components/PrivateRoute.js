import React from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({
  auth, Component, redirection,
}) => (auth ? <Component /> : <Navigate to={redirection} />);

PrivateRoute.propTypes = {
  auth: PropTypes.bool.isRequired,
  Component: PropTypes.object.isRequired,
  redirection: PropTypes.string,
};

PrivateRoute.defaultProps = {
  redirection: '/',
};

export default PrivateRoute;
