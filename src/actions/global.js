export const UPDATE_FIELD = 'UPDATE_FIELD';
export const SAVE_LOCATION = 'SAVE_LOCATION';

export const updateField = (value, identifier) => ({
  type: UPDATE_FIELD,
  value: value,
  identifier: identifier,
});

export const saveLocation = (location) => ({
  type: SAVE_LOCATION,
  location: location,
});
