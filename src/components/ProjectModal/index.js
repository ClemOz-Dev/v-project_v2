import React from 'react';
import PropTypes from 'prop-types';

import './projectModal.scss';

const ProjectModal = ({ project }) => (
  <div className="projectModal">
    <p>{project.name}</p>
  </div>
);

ProjectModal.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }),
};

ProjectModal.defaultProps = {
  project: {
    id: null,
    name: '',
  },
};

export default ProjectModal;
