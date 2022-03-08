import React from 'react';
import PropTypes from 'prop-types';
import Utils from '../../Utils';
import './profil.scss';

const ProjectCard = ({ project }) => {
  const membersToDisplay = project.members.slice(0, 3);
  const difference = project.members.length - membersToDisplay.length;
  return (
    <div className="projectCard">
      <div className="top">
        <p className="title">{project.title}</p>
        <div className="tagsList">{project.tags.map((tag) => (
          <p key={tag} className={`tag ${tag.toLowerCase()}`}>{ tag }</p>
        ))}
        </div>
      </div>
      <div className="membersList">{membersToDisplay.map((member) => (
        <div
          key={member.id}
          className="member--avatar"
          style={{ backgroundColor: member.favoriteColor }}
        >
          {Utils.getInitials(member.firstName, member.lastName)}
        </div>
      ))}
        <p className="difference">{difference > 0 ? `\u00A0 et ${difference} de plus` : ''}</p>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired,
};

export default ProjectCard;
