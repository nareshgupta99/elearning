export const loginSuccess = (token) => ({
    type: 'LOGIN_SUCCESS',
    payload: token,
  });


  
export const logoutSuccess = () => ({
    type: 'LOGOUT_SUCCESS',
  });