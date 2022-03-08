export const LOAD_PROJECTS = 'LOAD_PROJECTS';
export const UPDATE_PROJECT = 'UPDATE_PROJECT';

export const loadProjects = (projects) => ({
  type: LOAD_PROJECTS,
  projects: projects,
});

export const updateProject = (project) => ({
  type: LOAD_PROJECTS,
  project: project,
});
