import React from 'react';
import PropTypes from 'prop-types';

import './closeButton.scss';

const CloseButton = ({ action }) => {
  function actionFunct() {
    console.log('clic');
  }

  return (
    <div className="close" onClick={actionFunct}>
      <span />
      <span />
      <span />
      <span />
      <svg viewBox="0 0 36 36" className="circle">
        <path
          strokeDasharray="100, 100"
          d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
        />
      </svg>
    </div>
  );
};

CloseButton.propTypes = {
  action: PropTypes.func.isRequired,
};

export default CloseButton;
