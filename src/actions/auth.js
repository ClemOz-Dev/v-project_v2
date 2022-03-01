export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const CONNECT_USER = 'CONNECT_USER';

export const submitLogin = () => ({
  type: SUBMIT_LOGIN,
});

export const connectUser = (user) => ({
  type: CONNECT_USER,
  user: user,
});
