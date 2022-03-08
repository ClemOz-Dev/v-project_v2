import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Branding from '../../containers/Branding';
import './loggin.scss';

const Loggin = ({
  members,
  connectUser,
  currentUser,
}) => {
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [value, setValue] = useState('');

  function match(keyword) {
    return members.find((memberItem) => `${memberItem.firstName} ${memberItem.lastName}`.match(new RegExp(`^${keyword}$`, 'i')));
  }

  function onChange(event) {
    setValue(event.target.value);
  }

  function onSubmit(event) {
    if (event.key === 'Enter') {
      const result = match(event.target.value);
      setSubmitAttempted(true);
      if (result) {
        connectUser(match(event.target.value));
        localStorage.setItem(
          'currentUser', JSON.stringify(
            members.find((memberItem) => `${memberItem.firstName} ${memberItem.lastName}`.match(
              new RegExp(`^${event.target.value}$`, 'i'),
            )),
          ),
        );
      }
    }
  }

  return (
    <div className="loggin">
      {value.length === 0 && !currentUser.id ? <Branding /> : <div className="greetings-avatar" style={{ backgroundColor: currentUser.favoriteColor }} />}
      {currentUser.id ? (
        <p className="greetings-text">Welcome {currentUser.fullName} !</p>
      ) : (
        <label className="identification--field" htmlFor="loggin-input">
          <input
            id="loggin-input"
            value={value}
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
  currentUser: PropTypes.object.isRequired,
};

export default Loggin;
