import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Members from '../../containers/Members';

import './projectModal.scss';

const ProjectModal = ({ project, membersShown, showMembersPage }) => {
  const [value, setValue] = useState('');
  const [selection, setSelection] = useState([]);
  const [selectOption, setSelectOption] = useState('default');

  const tags = ['React', 'Fun', 'Academic'];

  function onChangeInput(event) {
    setValue(event.target.value);
  }

  function onChangeSelect(event) {
    setSelectOption(event.target.value);
    if (selection.includes(event.target.value)) {
      setSelection(selection.filter((item) => item !== event.target.value));
    }
    else {
      setSelection([...selection, event.target.value]);
    }
  }

  function openMembers() {
    console.log('clic');
    showMembersPage();
  }

  return (
    <div className="projectModal">
      {membersShown && <Members />}
      <div className="content">
        <div className="header">
          <h2 className="header--title">{project.name}</h2>
          <div>
            <button type="button" className="close">Annuler</button>
          </div>
        </div>
        <div className="body">
          <input
            id="createProjet-input"
            value={value}
            onChange={onChangeInput}
            aria-label="project's name input"
            placeholder="Nom du projet"
          />
          <select defaultValue={selectOption} onChange={onChangeSelect}>
            <option value="default" disabled hidden>
              #Tags
            </option>
            {tags.map((tag) => (
              <option key={tag} value={tag}>{tag}</option>
            ))}
          </select>
          <div className="tagsList">
            {selection.map((tag) => (
              <p key={tag} className={`tag ${tag.toLowerCase()}`}>{ tag }</p>
            ))}
          </div>
          <button type="button" onClick={openMembers}>
            Participants
          </button>
        </div>
        <div className="footer">
          <button type="button">Commencer</button>
        </div>
      </div>
    </div>
  );
};

ProjectModal.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string.isRequired,
  }),
  membersShown: PropTypes.bool.isRequired,
  showMembersPage: PropTypes.func.isRequired,
};

ProjectModal.defaultProps = {
  project: {
    id: null,
    name: 'Nouveau projet',
  },
};

export default ProjectModal;
