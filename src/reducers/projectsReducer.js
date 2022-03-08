import {
  LOAD_PROJECTS,
  UPDATE_PROJECT,
} from '../actions/projects';

const initialState = {
  usersProjects: [
    {
      id: '1',
      title: 'Pacman',
      tags: ['React', 'Fun'],
      members: [{
        id: 2,
        firstName: 'Selinda',
        lastName: 'Spender',
        favoriteColor: '#497d34',
      },
      {
        id: 3,
        firstName: 'Lil',
        lastName: 'Beden',
        favoriteColor: '#74f16d',
      },
      {
        id: 4,
        firstName: 'Brittaney',
        lastName: 'Riolfi',
        favoriteColor: '#372eae',
      },
      {
        id: 5,
        firstName: 'Pepito',
        lastName: 'Kirkhouse',
        favoriteColor: '#785923',
      },
      {
        id: 6,
        firstName: 'Lyndel',
        lastName: 'Beardsworth',
        favoriteColor: '#14623d',
      },
      {
        id: 7,
        firstName: 'Koral',
        lastName: 'Tustin',
        favoriteColor: '#870a51',
      },
      {
        id: 8,
        firstName: 'Markos',
        lastName: 'Kee',
        favoriteColor: '#e26890',
      },
      {
        id: 9,
        firstName: 'Barnabas',
        lastName: 'Fairham',
        favoriteColor: '#7db8dd',
      },
      {
        id: 10,
        firstName: 'Aubrey',
        lastName: 'Albasini',
        favoriteColor: '#be381c',
      }],
    },
  ],
  currentProject: null,
};

function projectsReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_PROJECTS:
      return {
        ...state,
        usersProjects: action.projects,
      };
    case UPDATE_PROJECT:
      return {
        ...state,
        currentProject: action.project,
      };
    default:
      return state;
  }
}

// Export Reducer.
export default projectsReducer;
