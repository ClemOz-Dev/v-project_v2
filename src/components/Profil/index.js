import React from 'react';
import PropTypes from 'prop-types';

import ProjectCard from './projectCard';
import Modal from '../ProjectModal';
import './profil.scss';

const Profil = ({ projects, membersShown, showMembersPage }) => {
  function createProject(event) {
    console.log(event);
  }

  return (
    <div className="profil">
      <Modal membersShown={membersShown} showMembersPage={showMembersPage} />
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
      <button type="button" onClick={createProject}>Nouveau project</button>
    </div>
  );
};

Profil.propTypes = {
  projects: PropTypes.array.isRequired,
  showMembersPage: PropTypes.func.isRequired,
  membersShown: PropTypes.bool.isRequired,
};

export default Profil;
