import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Utils from '../../Utils';
import './members.scss';

const Members = ({ members }) => {
  const [selectedMembers, setSelectedMembers] = useState([]);

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

  return (
    <div className="members">
      <ul className="membersList">
        {members.map((member) => (
          <p
            key={member.id}
            className={`membersList--item ${selectedMembers.includes(member.id) ? 'selected' : ''} `}
            style={{ backgroundColor: member?.favoriteColor || 'grey' }}
            onClick={() => {
              handleMemberSelection(member.id);
            }}
            data-id={member.id}
          >
            {Utils.getInitials(member.firstName, member.lastName)}
          </p>

        ))}
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
