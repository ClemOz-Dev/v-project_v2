import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Utils from '../../Utils';
import './members.scss';

const Members = ({ members }) => {
  const [selectedMembers, setSelectedMembers] = useState([]);
  const [filteredMembers, setFilteredMembers] = useState(members);
  const [value, setValue] = useState('');

  function handleMemberSelection(memberId) {
    if (selectedMembers.includes(memberId)) {
      setSelectedMembers(selectedMembers.filter((item) => item !== memberId));
    }
    else {
      setSelectedMembers([...selectedMembers, memberId]);
    }
  }

  function submitInvitations(event) {
    console.log(event);
  }

  function onChange(event) {
    setValue(event.target.value);
    const filteredData = members.filter((member) => {
      const searchStr = event.target.value.toLowerCase();
      const nameMatches = member.firstName.toLowerCase().includes(searchStr);
      const daysMatches = member.lastName.toString().includes(searchStr);

      return nameMatches || daysMatches;
    });
    setFilteredMembers(filteredData);
  }

  return (
    <div className="members">
      <input
        type="text"
        value={value}
        onChange={onChange}
        aria-label="Identifiant input"
        placeholder="Recherche..."
      />
      <ul className="membersList">
        {filteredMembers.length > 0 ? (filteredMembers.map((member) => (
          <div
            key={member.id}
            className={`membersList--item ${selectedMembers.includes(member.id) ? 'selected' : ''} `}
            style={{ backgroundColor: member?.favoriteColor }}
            onClick={() => {
              handleMemberSelection(member.id);
            }}
            data-id={member.id}
          >
            {Utils.getInitials(member.firstName, member.lastName)}
          </div>
        ))) : 'Aucun membre ne correspond à la recherche actuelle'}
      </ul>
      <div className="invitation">
        <button
          type="button"
          aria-label="invitation button"
          onClick={submitInvitations}
        >
          Inviter
        </button>
      </div>
    </div>
  );
};

Members.propTypes = {
  members: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    favoriteColor: PropTypes.string.isRequired,
  })).isRequired,
};

export default Members;
