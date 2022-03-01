import React from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({
  auth, Component, data, redirection,
}) => (auth ? <Component data={data} /> : <Navigate to={redirection} />);
PrivateRoute.propTypes = {
  auth: PropTypes.bool.isRequired,
  Component: PropTypes.object.isRequired,
  data: PropTypes.any,
  redirection: PropTypes.string,
};

PrivateRoute.defaultProps = {
  data: null,
  redirection: '/',
};

export default PrivateRoute;
