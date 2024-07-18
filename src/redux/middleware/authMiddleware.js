// middleware/authMiddleware.js

import { INIT, LOGIN_SUCCESS, LOGOUT_SUCCESS } from '../action/action-type';
import { loginSuccess, logoutSuccess } from '../action/authActions';



export const saveTokenMiddleware = (store) => (next) => (action) => {
  if (action.type === LOGIN_SUCCESS) {
    localStorage.setItem('token', action.payload);

  } else if (action.type === LOGOUT_SUCCESS) {
    localStorage.removeItem('token');
  }
  next(action);
};

export const checkTokenMiddleware = (store) => (next) => (action) => {
  console.log("check token")
  if (action.type === INIT) {
    const token = localStorage.getItem('token');
    console.log(token)
    if (token) {
      store.dispatch(loginSuccess(token));
    } else {
      store.dispatch(logoutSuccess());
    }
  }
  next(action);
};
