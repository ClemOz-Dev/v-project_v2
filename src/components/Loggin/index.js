import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Branding from '../../containers/Branding';
import './loggin.scss';

const Loggin = ({
  members,
  connectUser,
  updateField,
  fieldValue,
  userFullName,
  userFavoriteColor,
}) => {
  const [submitAttempted, setSubmitAttempted] = useState(false);

  function match(keyword) {
    return members.find((memberItem) => `${memberItem.firstName} ${memberItem.lastName}`.match(new RegExp(`^${keyword}$`, 'i')));
  }

  function onChange(event) {
    updateField(event.target.value);
  }

  function onSubmit(event) {
    if (event.key === 'Enter') {
      setSubmitAttempted(true);
      connectUser(match(event.target.value));
      localStorage.setItem('currentUser', JSON.stringify(members.find((memberItem) => `${memberItem.firstName} ${memberItem.lastName}`.match(new RegExp(`^${event.target.value}$`, 'i')))));
    }
  }

  return (
    <div className="loggin">
      {fieldValue.length === 0 && userFullName.length === 0 ? <Branding /> : <div className="greetings-avatar" style={{ backgroundColor: userFavoriteColor }} />}
      {userFullName.length > 0 ? (
        <p className="greetings-text">Welcome {userFullName} !</p>
      ) : (
        <label className="identification--field" htmlFor="loggin-input">
          <input
            id="loggin-input"
            value={fieldValue}
            onChange={onChange}
            onKeyUp={onSubmit}
            aria-label="Identifiant input"
            placeholder="Identifiant"
          />
          <strong>{submitAttempted && 'Sorry you are not registered ...'}</strong>
          <button hidden={!submitAttempted} type="button">S'enregistrer</button>
        </label>
      )}
    </div>
  );
};

Loggin.propTypes = {
  members: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    favoriteColor: PropTypes.string.isRequired,
  })).isRequired,
  connectUser: PropTypes.func.isRequired,
  updateField: PropTypes.func.isRequired,
  fieldValue: PropTypes.string.isRequired,
  userFavoriteColor: PropTypes.string.isRequired,
  userFullName: PropTypes.string.isRequired,
};

export default Loggin;
