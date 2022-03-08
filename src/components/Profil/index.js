import React from 'react';
import PropTypes from 'prop-types';

import ProjectCard from './projectCard';
import './profil.scss';

const Profil = ({ projects }) => {
  function createProject(event) {
    console.log(event);
  }

  return (
    <div className="profil">
      <h1 className="title">Mes projets</h1>
      <div className="tagsList">
        <div className="tag fun">Fun</div>
        <div className="tag react">React</div>
        <div className="tag academic">Académique</div>
      </div>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
      <button type="button" onClick={createProject}>Nouveau project</button>
    </div>
  );
};

Profil.propTypes = {
  projects: PropTypes.array.isRequired,
};

export default Profil;
