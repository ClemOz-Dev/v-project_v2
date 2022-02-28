export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const CONNECT_USER = 'CONNECT_USER';
export const UPDATE_FIELD = 'UPDATE_FIELD';

export const submitLogin = () => ({
  type: SUBMIT_LOGIN,
});

export const connectUser = (user) => ({
  type: CONNECT_USER,
  user: user,
});

export const updateField = (value) => ({
  type: UPDATE_FIELD,
  value: value,
});
